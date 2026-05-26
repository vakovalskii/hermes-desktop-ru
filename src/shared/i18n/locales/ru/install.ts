export default {
  preparing: "Подготовка...",
  startingInstall: "Запуск установки",
  installationComplete: "Установка завершена",
  installationFailed: "Установка не удалась",
  installingHermes: "Установка Hermes Agent",
  installationFailedHint:
    "Установка не удалась. Повторите попытку или установите через терминал.",
  retryInstallation: "Повторить установку",
  copied: "Скопировано!",
  copyLogs: "Скопировать логи",
  stepLabel: "Шаг {{step}}/{{total}}: {{title}}",
  waitingToStart: "Ожидание запуска...",
  continueToSetup: "Перейти к настройке",
  confirmTitle: "Перед установкой",
  confirmLocationLabel: "Hermes будет установлен в:",
  confirmFresh:
    "Существующая установка здесь не найдена — будет развёрнута чистая копия.",
  confirmUpdate:
    "Здесь уже есть установка Hermes — она будет обновлена до последней версии.",
  confirmReplace:
    "Здесь существует папка, но она не является валидной установкой Hermes — установка удалит её и заменит.",
  confirmNotInherited:
    "Если вы устанавливали Hermes в другое место или через командную строку, эта установка не будет перенесена.",
  confirmInstallBtn: "Установить Hermes",
  useExistingBtn: "Использовать существующую установку",
  useExistingHint:
    "Выберите папку, в которой находится существующая установка Hermes (та, что содержит папку hermes-agent).",
  useExistingInvalid: "В этой папке не найдена пригодная установка Hermes.",
  useExistingDone:
    "Существующая установка задана — закройте и снова откройте Hermes, чтобы применить.",
  useExistingQuitBtn: "Закрыть Hermes",
} as const;
