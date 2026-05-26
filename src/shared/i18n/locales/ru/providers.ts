export default {
  title: "Провайдеры",
  subtitle: "Настройка LLM-провайдеров, API-ключей и пулов учётных данных",
  oauth: {
    sectionTitle: "Подписки / OAuth-планы",
    sectionHint:
      "Войдите по подписке провайдера вместо API-ключа. Авторизация проходит в браузере.",
    signIn: "Войти",
    runningHint: "Следуйте инструкциям ниже, чтобы завершить вход.",
    successHint: "Вход выполнен. Теперь можно выбрать этого провайдера.",
    failed: "Не удалось войти.",
    codexDesc: "Использовать подписку ChatGPT Codex",
    xaiDesc: "Использовать подписку xAI Grok",
    qwenDesc: "Использовать подписку Qwen",
    geminiDesc: "Использовать план Google AI Pro / Gemini",
    minimaxDesc: "Использовать подписку MiniMax",
  },
} as const;
