export type AppLocale =
  | "en"
  | "es"
  | "id"
  | "ja"
  | "pt-BR"
  | "pt-PT"
  | "ru"
  | "zh-CN"
  | "zh-TW";

export type TranslationTree = {
  [key: string]: string | TranslationTree;
};
