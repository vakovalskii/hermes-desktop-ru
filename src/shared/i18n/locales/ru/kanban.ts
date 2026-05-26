export default {
  title: "Канбан",
  subtitle:
    "Устойчивая мульти-агентная доска для задач, которые агент может взять и довести до конца самостоятельно.",

  // Header actions
  refresh: "Обновить",
  dispatch: "Диспетчер",
  dispatchTooltip:
    "Запустить один проход диспетчера — продвинуть готовые задачи и спавнить воркеры",
  newTask: "Новая задача",
  newBoard: "Новая доска",

  // Remote-mode unsupported notice
  remoteUnsupportedTitle:
    "Канбану нужна локальная установка Hermes или режим SSH-туннеля.",
  remoteUnsupportedHint:
    "Обычный удалённый режим (HTTP + API-ключ) пока не предоставляет канбан-API. Переключитесь в локальный режим или SSH-туннель в настройках, чтобы управлять доской.",

  // Column / task statuses
  status: {
    triage: "Триаж",
    todo: "К выполнению",
    ready: "Готово к работе",
    running: "В работе",
    blocked: "Заблокировано",
    done: "Выполнено",
  },

  // Card action tooltips
  cardSpecify: "Уточнить (раскрыть спецификацию → to-do)",
  cardMarkDone: "Отметить выполненным",
  cardReclaim: "Освободить воркер",
  cardUnblock: "Разблокировать",
  cardBlock: "Заблокировать",
  cardArchive: "В архив",

  // Create-task modal
  createTitle: "Новая канбан-задача",
  fieldTitle: "Заголовок",
  titlePlaceholder: "Что нужно сделать?",
  fieldBody: "Описание (необязательно)",
  bodyPlaceholder: "Контекст, критерии приёмки, ссылки…",
  fieldAssignee: "Профиль исполнителя",
  assigneeNone: "— Триаж (без исполнителя)",
  fieldPriority: "Приоритет",
  priorityNormal: "Обычный (0)",
  priorityLow: "Низкий (P2)",
  priorityHigh: "Высокий (P1)",
  priorityUrgent: "Срочно (P0)",
  fieldWorkspace: "Рабочая область",
  workspaceScratch: "Scratch (временная папка)",
  workspaceWorktree: "Worktree (текущий репозиторий)",
  workspaceChoose: "Выбрать папку…",
  workspaceNoFolder: "Папка не выбрана",
  browse: "Обзор…",
  triageCheckbox:
    "Поставить в триаж (specifier раскроет спецификацию перед продвижением в to-do)",
  create: "Создать задачу",
  creating: "Создание…",

  // New-board modal
  newBoardTitle: "Новая доска",
  fieldSlug: "Slug",
  slugPlaceholder: "kebab-case, напр. atm10-server",
  fieldDisplayName: "Отображаемое имя (необязательно)",
  displayNamePlaceholder: "ATM10 Server",
  createBoard: "Создать доску",

  // Task-detail modal
  detailFallbackTitle: "Задача",
  detailBody: "Описание",
  detailSummary: "Сводка последнего запуска",
  detailResult: "Результат",
  detailComments: "Комментарии ({{count}})",
  detailEvents: "События ({{count}})",
  commentAnon: "аноним",

  // Prompts / confirmations
  blockReasonPrompt: "Причина блокировки?",
  confirmMarkDone: 'Отметить «{{title}}» выполненной?',
  confirmArchive: 'Архивировать «{{title}}»?',

  // Errors
  moveNotAllowed:
    "Нельзя перенести {{from}} → {{to}} с десктопа. Используйте агента или CLI.",
  errLoadBoards: "Не удалось загрузить доски",
  errLoadTasks: "Не удалось загрузить задачи",
  errMoveTask: "Не удалось перенести задачу",
  errPickFolder: "Сначала выберите папку рабочей области.",
  errCreateTask: "Не удалось создать задачу",
  errSwitchBoard: "Не удалось переключить доску",
  errCreateBoard: "Не удалось создать доску",
  errSpecify: "Не удалось уточнить задачу",
  errArchive: "Не удалось архивировать задачу",
  errReclaim: "Не удалось освободить",
  errDispatch: "Диспетчер не сработал",
} as const;
