export default {
  title: "Модели",
  searchPlaceholder: "Поиск моделей...",
  empty: "Моделей пока нет",
  noMatch: "Нет моделей, соответствующих запросу",
  deleteConfirm: "Удалить?",
  displayName: "Отображаемое имя",
  modelId: "ID модели",
  namePlaceholder: "напр. Claude Sonnet 4",
  modelIdPlaceholder: "напр. anthropic/claude-sonnet-4-20250514",
  baseUrlPlaceholder: "http://localhost:1234/v1",
  subtitle:
    "Управление библиотекой моделей. Эти модели появятся в селекторе моделей на странице чата.",
  addModel: "Добавить модель",
  emptyHint:
    "После добавления моделей здесь их можно будет выбрать на странице чата. Модели, настроенные в настройках, также автоматически добавляются сюда.",
  editModel: "Редактировать модель",
  update: "Обновить",
  deleteModelTitle: "Удалить модель",
  yes: "Да",
  no: "Нет",
  nameRequired: "Имя и ID модели обязательны",
  customProviderHint: "Нужно только для пользовательских или локальных провайдеров",
  apiKeyLabel: "API-ключ",
  apiKeyHint:
    "Сохраняется как переменная окружения. По URL подбирается подходящий env-ключ, иначе используется CUSTOM_API_KEY.",
} as const;
