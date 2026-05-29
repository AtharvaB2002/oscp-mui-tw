import type { ComponentType } from "react";

export type Locale = "en" | "de" | "fr";

/** A string, or a per-locale map resolved by the active locale. */
export type LocalizedText = string | Partial<Record<Locale, string>>;

export type BlockType = "heading" | "paragraph" | "image" | "button" | "cards";

export interface HeadingData {
  text: LocalizedText;
  level?: 1 | 2 | 3 | 4;
  align?: "left" | "center";
}

export interface ParagraphData {
  text: LocalizedText;
}

export interface ImageData {
  src: string;
  alt?: LocalizedText;
}

export interface ButtonData {
  label: LocalizedText;
  href: string;
}

export interface CardItem {
  heading: LocalizedText;
  description: LocalizedText;
  buttonLabel?: LocalizedText;
  href?: string;
}

export interface CardsData {
  items: CardItem[];
  columns?: 1 | 2 | 3 | 4;
}

export type BlockData =
  | HeadingData
  | ParagraphData
  | ImageData
  | ButtonData
  | CardsData;

export interface CmsBlock {
  id: string;
  type: BlockType;
  data: BlockData & Record<string, unknown>;
}

export interface PageContent {
  slug: string;
  title: LocalizedText;
  blocks: CmsBlock[];
}

export interface CmsContent {
  pages: PageContent[];
}

export type BlockComponent = ComponentType<{ data: never }>;

export interface CmsContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Resolve a LocalizedText to a plain string for the active locale. */
  t: (text?: LocalizedText) => string;

  pages: PageContent[];
  getPage: (slug: string) => PageContent | undefined;

  upsertPage: (page: PageContent) => void;
  deletePage: (slug: string) => void;
  updateBlock: (
    slug: string,
    blockId: string,
    data: Record<string, unknown>
  ) => void;
  resetContent: () => void;
}
