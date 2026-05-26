/**
 * Bitrix24 OAuth login — scaffolding.
 *
 * Planned flow (not yet wired into the Setup screen):
 *
 *   1. User clicks "Sign in with Bitrix24" on the Setup screen.
 *   2. `startBitrixLogin()` opens a new `BrowserWindow` pointing at
 *      `https://${PORTAL}.bitrix24.ru/oauth/authorize/?
 *        client_id=${BITRIX_CLIENT_ID}
 *        &response_type=code
 *        &state=${csrfNonce}` —
 *      the redirect_uri is registered as a loopback
 *      (`http://127.0.0.1:${port}/bitrix/callback`) handled by a
 *      single-shot `http.createServer` we spin up before the window
 *      opens.
 *   3. The user logs into the Bitrix portal; Bitrix redirects to the
 *      loopback with `?code=...&state=...`.
 *   4. The loopback server validates `state` against the nonce, closes
 *      itself, and resolves the promise with the code.
 *   5. `exchangeBitrixCode(code)` POSTs to
 *      `https://oauth.bitrix.info/oauth/token/` with
 *      `grant_type=authorization_code` to swap the code for
 *      `{ access_token, refresh_token, expires_in }`.
 *   6. `fetchNeuralDeepKey(bitrixAccessToken)` calls a Hub endpoint
 *      (TBD — e.g. `https://hub.neuraldeep.ru/api/exchange-bitrix-token`)
 *      that verifies the Bitrix token on its side and returns the
 *      caller's `NEURALDEEP_API_KEY`. The Hub side of this endpoint
 *      does not exist yet — see [[project-neuraldeep-fork]].
 *   7. The desktop writes `NEURALDEEP_API_KEY` to `.env` via the same
 *      path the manual Setup flow uses (`setEnv` in config.ts) and
 *      calls `setModelConfig("custom", "<default>", "https://api.neuraldeep.ru/v1")`
 *      so the user lands in chat without any further setup.
 *
 * Storage:
 *   - `access_token` lives in OS keychain via `safeStorage` from
 *     Electron's `safeStorage` API (encrypted at rest).
 *   - `refresh_token` follows the same path. Refresh-on-401 is the
 *     desktop's job; we don't expose the Bitrix tokens to the gateway.
 *
 * Why a loopback redirect, not a custom protocol scheme:
 *   - electron-protocol handlers (`hermes://`) work but need OS-level
 *     registration during install and don't survive `dev:fresh`. The
 *     loopback works in dev and in installed mode identically; it's
 *     what Bitrix-SDK examples use.
 *   - Port is allocated dynamically (`net.createServer().listen(0)`)
 *     so we don't collide with a user's local services.
 *
 * Blocking dependencies (do not wire until these land):
 *   - A registered Bitrix local-application on the portal that owns
 *     `client_id` / `client_secret` — secrets are committed to neither
 *     the repo nor the renderer; they're injected at build time via
 *     `import.meta.env.MAIN_VITE_BITRIX_CLIENT_*` and read here.
 *   - The Hub endpoint that swaps a Bitrix access_token for a
 *     NeuralDeep API key.
 *
 * Everything below is a typed placeholder so the IPC contract is set
 * before the implementation lands. `startBitrixLogin` throws on call
 * intentionally so a `dev:fresh` user who clicks the (disabled) button
 * sees a clear "not implemented" rather than a silent hang.
 */

export interface BitrixLoginResult {
  /** Bitrix access token — short-lived (~1h on most portals). */
  accessToken: string;
  /** Bitrix refresh token — long-lived; persisted in safeStorage. */
  refreshToken: string;
  /** Bitrix portal domain (e.g. "acme.bitrix24.ru") — needed for
   *  subsequent REST calls because Bitrix endpoints are portal-scoped. */
  portalDomain: string;
  /** Seconds until `accessToken` expires, as reported by Bitrix. */
  expiresIn: number;
}

export interface BitrixLoginOptions {
  /** Bitrix portal domain or full URL — when null we prompt the user
   *  for the portal first. */
  portal?: string | null;
}

/**
 * Start the OAuth flow. Opens a window, listens on a loopback port,
 * resolves once the user completes login.
 *
 * Not implemented — see module docstring.
 */
export async function startBitrixLogin(
  _opts?: BitrixLoginOptions,
): Promise<BitrixLoginResult> {
  throw new Error(
    "Bitrix24 OAuth login is not implemented yet. " +
      "See src/main/bitrix-auth.ts for the planned flow.",
  );
}

/**
 * Refresh an expired Bitrix access token using the stored refresh token.
 *
 * Not implemented — see module docstring.
 */
export async function refreshBitrixToken(
  _refreshToken: string,
  _portalDomain: string,
): Promise<BitrixLoginResult> {
  throw new Error("Bitrix24 token refresh is not implemented yet.");
}

/**
 * Swap a verified Bitrix access token for the user's NeuralDeep API key
 * via the Hub backend.
 *
 * Not implemented — depends on a Hub endpoint that doesn't exist yet.
 */
export async function fetchNeuralDeepKey(
  _bitrixAccessToken: string,
  _portalDomain: string,
): Promise<string> {
  throw new Error(
    "Hub endpoint for Bitrix → NeuralDeep key exchange does not exist yet.",
  );
}
