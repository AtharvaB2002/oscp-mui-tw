import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type {
  CmsContent,
  CmsContextValue,
  Locale,
  LocalizedText,
  PageContent,
} from "./types";
import { DEFAULT_CONTENT } from "./content/defaultContent";

const CONTENT_KEY = "cms-content";
const LOCALE_KEY = "cms-locale";

const CmsContext = createContext<CmsContextValue | null>(null);

function resolveText(text: LocalizedText | undefined, locale: Locale): string {
  if (text == null) return "";
  if (typeof text === "string") return text;
  return text[locale] ?? text.en ?? Object.values(text)[0] ?? "";
}

function loadContent(): CmsContent {
  try {
    const raw = window.localStorage.getItem(CONTENT_KEY);
    if (raw) return JSON.parse(raw) as CmsContent;
  } catch {
    /* fall back to seed content on parse/storage errors */
  }
  return DEFAULT_CONTENT;
}

function loadLocale(): Locale {
  const stored = window.localStorage.getItem(LOCALE_KEY);
  return stored === "de" || stored === "fr" ? stored : "en";
}

export function CmsProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<CmsContent>(loadContent);
  const [locale, setLocaleState] = useState<Locale>(loadLocale);

  useEffect(() => {
    window.localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
  }, [content]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_KEY, next);
  }, []);

  const t = useCallback(
    (text?: LocalizedText) => resolveText(text, locale),
    [locale]
  );

  const getPage = useCallback(
    (slug: string) => content.pages.find((p) => p.slug === slug),
    [content]
  );

  const upsertPage = useCallback((page: PageContent) => {
    setContent((prev) => {
      const exists = prev.pages.some((p) => p.slug === page.slug);
      return {
        ...prev,
        pages: exists
          ? prev.pages.map((p) => (p.slug === page.slug ? page : p))
          : [...prev.pages, page],
      };
    });
  }, []);

  const deletePage = useCallback((slug: string) => {
    setContent((prev) => ({
      ...prev,
      pages: prev.pages.filter((p) => p.slug !== slug),
    }));
  }, []);

  const updateBlock = useCallback(
    (slug: string, blockId: string, data: Record<string, unknown>) => {
      setContent((prev) => ({
        ...prev,
        pages: prev.pages.map((page) =>
          page.slug !== slug
            ? page
            : {
                ...page,
                blocks: page.blocks.map((block) =>
                  block.id !== blockId
                    ? block
                    : { ...block, data: { ...block.data, ...data } }
                ),
              }
        ),
      }));
    },
    []
  );

  const resetContent = useCallback(() => {
    window.localStorage.removeItem(CONTENT_KEY);
    setContent(DEFAULT_CONTENT);
  }, []);

  const value = useMemo<CmsContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      pages: content.pages,
      getPage,
      upsertPage,
      deletePage,
      updateBlock,
      resetContent,
    }),
    [
      locale,
      setLocale,
      t,
      content.pages,
      getPage,
      upsertPage,
      deletePage,
      updateBlock,
      resetContent,
    ]
  );

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
}

export function useCms(): CmsContextValue {
  const ctx = useContext(CmsContext);
  if (!ctx) {
    throw new Error("useCms must be used within a <CmsProvider>");
  }
  return ctx;
}
