/**
 * Default models seeded on first install.
 *
 * Contributors: add new models here! They'll be available to all users
 * on fresh install. Format:
 *   { name: "Display Name", provider: "provider-key", model: "model-id", baseUrl: "" }
 *
 * Provider keys: openrouter, anthropic, openai, custom
 * For openrouter models, use the full path (e.g. "anthropic/claude-sonnet-4-20250514")
 * For direct provider models, use the provider's model ID (e.g. "claude-sonnet-4-20250514")
 */

export interface DefaultModel {
  name: string;
  provider: string;
  model: string;
  baseUrl: string;
}

const DEFAULT_MODELS: DefaultModel[] = [
  // ── NeuralDeep Hub (RU OSS aggregator, https://hub.neuraldeep.ru) ────
  // OpenAI-compatible at api.neuraldeep.ru/v1. Routed through `custom`
  // because hermes-agent's resolve_provider doesn't know "neuraldeep" —
  // the NEURALDEEP_API_KEY is picked up via URL_KEY_MAP in hermes.ts.
  {
    name: "GPT-OSS 120B (NeuralDeep)",
    provider: "custom",
    model: "gpt-oss-120b",
    baseUrl: "https://api.neuraldeep.ru/v1",
  },
  {
    name: "Qwen3.6 35B A3B (NeuralDeep)",
    provider: "custom",
    model: "qwen3.6-35b-a3b",
    baseUrl: "https://api.neuraldeep.ru/v1",
  },

  // ── OpenRouter (200+ models via single API key) ──────────────────────
  {
    name: "Claude Sonnet 4",
    provider: "openrouter",
    model: "anthropic/claude-sonnet-4-20250514",
    baseUrl: "",
  },

  // ── Anthropic (direct) ───────────────────────────────────────────────
  {
    name: "Claude Sonnet 4",
    provider: "anthropic",
    model: "claude-sonnet-4-20250514",
    baseUrl: "",
  },

  // ── OpenAI (direct) ──────────────────────────────────────────────────
  {
    name: "GPT-4.1",
    provider: "openai",
    model: "gpt-4.1",
    baseUrl: "",
  },
];

export default DEFAULT_MODELS;
