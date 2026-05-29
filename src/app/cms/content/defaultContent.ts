import type { CmsContent } from "../types";

/**
 * Seed content for the CMS-driven pages. Each page renders at its own route
 * (e.g. /about, /privacy-policy). Edit here to change defaults; runtime edits
 * made through the provider are persisted to localStorage and take precedence
 * until reset.
 */
export const DEFAULT_CONTENT: CmsContent = {
  pages: [
    {
      slug: "about",
      title: "About OSC Professionals",
      blocks: [
        {
          id: "about-heading",
          type: "heading",
          data: { level: 2, text: "Full-service eCommerce agency since 2000" },
        },
        {
          id: "about-intro",
          type: "paragraph",
          data: {
            text: "OSC Professionals helps brands design, build, and scale world-class online stores. For over two decades we've partnered with 500+ businesses to deliver reliable, high-performing commerce experiences.",
          },
        },
        {
          id: "about-mission",
          type: "paragraph",
          data: {
            text: "From storefront design to custom app development and ongoing support, our team works as an extension of yours — focused on conversion, performance, and long-term growth.",
          },
        },
        {
          id: "about-platforms",
          type: "cards",
          data: {
            columns: 3,
            items: [
              {
                heading: "Shopify",
                description:
                  "Shopify Partner builds, theme development, and custom apps tailored to your store.",
              },
              {
                heading: "Magento",
                description:
                  "Certified Magento development, migrations, and performance optimization.",
              },
              {
                heading: "Odoo",
                description:
                  "End-to-end Odoo ERP and commerce solutions to run your business in one place.",
              },
            ],
          },
        },
        {
          id: "about-cta",
          type: "button",
          data: { label: "Get in touch", href: "/#contact" },
        },
      ],
    },
    {
      slug: "privacy-policy",
      title: "Privacy Policy",
      blocks: [
        {
          id: "privacy-intro",
          type: "paragraph",
          data: {
            text: "This Privacy Policy explains how OSC Professionals collects, uses, and protects information when you visit our website or use our services.",
          },
        },
        {
          id: "privacy-collect-heading",
          type: "heading",
          data: { level: 3, text: "Information we collect" },
        },
        {
          id: "privacy-collect-body",
          type: "paragraph",
          data: {
            text: "We collect information you provide directly — such as your name, email address, and message when you contact us — along with standard analytics data about how the site is used.",
          },
        },
        {
          id: "privacy-use-heading",
          type: "heading",
          data: { level: 3, text: "How we use information" },
        },
        {
          id: "privacy-use-body",
          type: "paragraph",
          data: {
            text: "We use the information to respond to enquiries, deliver and improve our services, and keep our website secure. We do not sell your personal data.",
          },
        },
        {
          id: "privacy-contact-heading",
          type: "heading",
          data: { level: 3, text: "Contact us" },
        },
        {
          id: "privacy-contact-body",
          type: "paragraph",
          data: {
            text: "If you have any questions about this policy or your data, email us at apps@oscprofessionals.com.",
          },
        },
      ],
    },
  ],
};
