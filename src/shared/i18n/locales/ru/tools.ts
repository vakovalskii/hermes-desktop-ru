export default {
  title: "Инструменты",
  subtitle:
    "Включайте и отключайте наборы инструментов, доступных агенту в беседах",
  web: {
    label: "Поиск в вебе",
    description: "Поиск в вебе и извлечение содержимого по URL",
  },
  browser: {
    label: "Браузер",
    description: "Навигация, клики, ввод и взаимодействие с веб-страницами",
  },
  terminal: {
    label: "Терминал",
    description: "Выполнение shell-команд и скриптов",
  },
  file: {
    label: "Операции с файлами",
    description: "Чтение, запись, поиск и управление файлами",
  },
  code_execution: {
    label: "Выполнение кода",
    description: "Прямое выполнение кода на Python и shell",
  },
  vision: { label: "Vision", description: "Анализ изображений и визуального содержимого" },
  image_gen: {
    label: "Генерация изображений",
    description: "Генерация изображений с помощью DALL-E и других моделей",
  },
  tts: { label: "Text-to-Speech", description: "Преобразование текста в речь" },
  skills: {
    label: "Навыки",
    description: "Создание, управление и запуск переиспользуемых навыков",
  },
  memory: {
    label: "Память",
    description: "Сохранение и извлечение постоянных знаний",
  },
  session_search: {
    label: "Поиск по сессиям",
    description: "Поиск по прошлым беседам",
  },
  clarify: {
    label: "Уточняющие вопросы",
    description: "Задавать пользователю уточняющие вопросы при необходимости",
  },
  delegation: {
    label: "Делегирование",
    description: "Запуск суб-агентов для параллельных задач",
  },
  cronjob: {
    label: "Cron-задачи",
    description: "Создание и управление запланированными задачами",
  },
  moa: {
    label: "Mixture of Agents",
    description: "Координация нескольких AI-моделей одновременно",
  },
  todo: {
    label: "Планирование задач",
    description: "Создание и управление списками to-do для сложных задач",
  },
  mcpServers: "MCP-серверы",
  mcpDescription:
    "Серверы Model Context Protocol, настроенные в config.yaml. Управляйте через <code>hermes mcp add/remove</code> в терминале.",
  http: "HTTP",
  stdio: "stdio",
  disabled: "отключено",
} as const;
