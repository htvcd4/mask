// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["vertex-credentials.mjs"] = (() => {
  ;
  const responseSerialization_e1 = bundleModules["response-serialization.mjs"].e1, responseSerialization_e0 = bundleModules["response-serialization.mjs"].e0, requestWait_e0 = bundleModules["request-wait.mjs"].e0, requestWait_e1 = bundleModules["request-wait.mjs"].e1, token_uri = "https://oauth2.googleapis.com/token", lookupMap = new Map(), lookupMap_2 = new Map();
  function helperFunction_13(argument, argument_2) {
    const localValue_6 = new Error({
      vertex_credential_invalid: "서비스 계정 JSON과 PKCS#8 개인 키를 확인하세요.",
      vertex_credential_type_unsupported: "service_account JSON 또는 수동 액세스 토큰을 사용하세요.",
      vertex_token_uri_unsupported: "Google 공식 OAuth 토큰 주소만 사용할 수 있습니다.",
      vertex_token_mint_failed: "Google 액세스 토큰을 발급하지 못했습니다.",
      vertex_credential_changed: "Vertex 계정 인증 정보가 변경되었습니다. 다시 요청하세요."
    }
    [argument]);
    return localValue_6.code = argument, Number.isInteger(argument_2) && (localValue_6.status = argument_2), localValue_6;
  }
  function helperFunction_14(argument) {
    ;
    if ((argument) == null || (argument) === "") return null;
    if (typeof (argument) !== "object" || Array.isArray((argument))) throw (0, helperFunction_13)("vertex_credential_invalid");
    if ((argument).type !== "service_account") throw helperFunction_13("vertex_credential_type_unsupported");
    if ((argument).token_uri !== null && (argument).token_uri !== token_uri) throw helperFunction_13("vertex_token_uri_unsupported");
    if (["client_email", "private_key_id", "private_key"].some((argument_2) => {
      return ((typeof (argument)[(argument_2)]) !== "string") || ! (argument)[(argument_2)].trim();
    }
    ) || ! new RegExp("^[^\\s@]+@[^\\s@]+$", "").test((argument).client_email) || new RegExp("[\\r\\n]", "").test((argument).private_key_id) || (argument).private_key.length > 32768 || ! new RegExp("^-----BEGIN PRIVATE KEY-----\\s+[A-Za-z0-9+/=\\s]+\\s+-----END PRIVATE KEY-----\\s*$", "").test((argument).private_key)) throw helperFunction_13("vertex_credential_invalid");
    return {
      type: "service_account",
      client_email: (argument).client_email,
      private_key: (argument).private_key,
      private_key_id: (argument).private_key_id,
      project_id: typeof (argument).project_id === "string" ? (argument).project_id: "",
      token_uri: token_uri
    }
    ;
  }
  function helperFunction_15(argument) {
    let localValue_6;
    try {
      localValue_6 = JSON.parse(argument);
    }
    catch {
      throw (0, helperFunction_13)("vertex_credential_invalid");
    }
    const localValue_7 = helperFunction_14(localValue_6);
    if (! localValue_7) throw helperFunction_13("vertex_credential_invalid");
    return localValue_7;
  }
  async function helperFunction_16(argument) {
    try {
      const localValue_6 = argument.private_key.replace(new RegExp("-----[^-]+-----", "g"), "").replace(new RegExp("\\s", "g"), ""), localValue_7 = Uint8Array.from(atob(localValue_6), (argument_2) => {
        return (argument_2).charCodeAt(0);
      }
      );
      return await crypto.subtle.importKey("pkcs8", localValue_7, {
        name: "RSASSA-PKCS1-v1_5",
        hash: "SHA-256"
      }
      , false, ["sign"]);
    }
    catch {
      throw (0, helperFunction_13)("vertex_credential_invalid");
    }
  }
  async function helperFunction_17(argument) {
    const localValue_6 = (0, helperFunction_15)(argument);
    return await(0, helperFunction_16)(localValue_6), localValue_6;
  }
  async function helperFunction_18(argument) {
    return responseSerialization_e1((0, responseSerialization_e0)(argument));
  }
  function helperFunction_19(argument, argument_2) {
    for (const [localValue_6, localValue_7] of lookupMap) localValue_7.accountId === argument && localValue_7.revision < argument_2 && lookupMap.delete (localValue_6);
    for (const [localValue_6, localValue_7] of lookupMap_2) localValue_7.accountId === argument && localValue_7.revision < argument_2 && void (localValue_7.invalidated = true, lookupMap_2.delete (localValue_6));
  }
  function helperFunction_20(argument) {
    (argument) && lookupMap.get((argument).key)?.lease.tokenId === (argument).tokenId && lookupMap.delete ((argument).key);
  }
  function helperFunction_21(argument) {
    return btoa(String.fromCharCode(... (argument))).replace(new RegExp("=", "g"), "").replace(new RegExp("\\+", "g"), "-").replace(new RegExp("\\/", "g"), "_");
  }
  async function helperFunction_22({
    fetchImpl: fetchImpl, signal: signal, owner: owner, credential: credential, isCurrent: isCurrent, now: now = Date.now, timeoutMs: timeoutMs = 30000
  }
  ) {
    signal?.throwIfAborted();
    if (! await isCurrent()) throw helperFunction_13("vertex_credential_changed");
    const key = ("" + owner.accountId) + ":" + owner.revision + ":" + owner.digest;
    let localValue_6 = lookupMap.get(key);
    if (! localValue_6 || (localValue_6.expiresAt <= (now() + 300000))) {
      let localValue_7 = lookupMap_2.get(key);
      ! localValue_7 && void (localValue_7 = {
        accountId: owner.accountId,
        revision: owner.revision,
        invalidated: false
      }
      , lookupMap_2.set(key, localValue_7), localValue_7.promise = (async() => {
        const localValue_8 = requestWait_e1({
          timeoutMs: timeoutMs,
          timeoutMessage: "Vertex token request timed out."
        }
        );
        try {
          const localValue_9 = helperFunction_14(credential);
          if (! localValue_9) throw helperFunction_13("vertex_credential_invalid");
          const localValue_10 = await localValue_8.wait((0, helperFunction_16)(localValue_9)), helperFunction_23 = (argument) => {
            return (0, helperFunction_21)(new TextEncoder().encode(JSON.stringify((argument))));
          }
          , iat = Math.floor(((0, now)() / 1000)), localValue_11 = "" + helperFunction_23({
            "alg": "RS256",
            "typ": "JWT",
            "kid": localValue_9.private_key_id
          }
          ) + "." + (0, helperFunction_23)({
            "iss": localValue_9.client_email,
            scope: "https://www.googleapis.com/auth/cloud-platform",
            "aud": token_uri,
            "iat": iat,
            "exp": iat + 3600
          }
          ), localValue_12 = await localValue_8.wait(crypto.subtle.sign("RSASSA-PKCS1-v1_5", localValue_10, new TextEncoder().encode(localValue_11))), localValue_13 = await localValue_8.wait((0, fetchImpl)(token_uri, {
            method: "POST",
            headers: {
              ["Content-Type"]: "application/x-www-form-urlencoded"
            }
            ,
            body: new URLSearchParams({
              grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
              assertion: (("" + localValue_11 + ".") + (0, helperFunction_21)(new Uint8Array(localValue_12)))
            }
            ).toString(),
            redirect: "error",
            signal: localValue_8.signal,
            logFetch: false
          }
          ));
          if (! localValue_13.ok) throw helperFunction_13("vertex_token_mint_failed", localValue_13.status);
          let localValue_14;
          try {
            localValue_14 = JSON.parse(await localValue_8.wait(localValue_13.text()));
          }
          catch {
            throw (0, helperFunction_13)("vertex_token_mint_failed");
          }
          if (((typeof localValue_14.access_token) !== "string") || ! localValue_14.access_token.trim() || new RegExp("[\\r\\n]", "").test(localValue_14.access_token) || ((localValue_14.token_type?.toLowerCase()) !== "bearer") || ! Number.isFinite(localValue_14.expires_in) || localValue_14.expires_in <= 0) throw helperFunction_13("vertex_token_mint_failed");
          const settingsRecord_4 = {
            accountId: owner.accountId,
            revision: owner.revision,
            accessToken: localValue_14.access_token,
            expiresAt: (now() + (localValue_14.expires_in * 1000)),
            lease: Object.freeze({
              key: key,
              tokenId: crypto.randomUUID()
            }
            )
          }
          ;
          if (! localValue_7.invalidated && (lookupMap_2.get(key) === localValue_7) && await isCurrent()) {
            void (lookupMap.delete (key), lookupMap.set(key, settingsRecord_4));
            while ((lookupMap.size > 32)) lookupMap.delete (lookupMap.keys().next().value);
          }
          return settingsRecord_4;
        }
        catch (caughtError) {
          if (String(caughtError?.code ?? "").startsWith("vertex_")) throw caughtError;
          throw helperFunction_13("vertex_token_mint_failed");
        }
        finally {
          localValue_8.cleanup(), (lookupMap_2.get(key) === localValue_7) && lookupMap_2.delete (key);
        }
      }
      )()), localValue_6 = await(0, requestWait_e0)(localValue_7.promise, signal);
    }
    if (! await(0, isCurrent)()) throw (0, helperFunction_13)("vertex_credential_changed");
    return signal?.throwIfAborted(), {
      accessToken: localValue_6.accessToken,
      lease: localValue_6.lease
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_14,
    e1: helperFunction_15,
    e2: helperFunction_17,
    e3: helperFunction_18,
    e4: helperFunction_19,
    e5: helperFunction_20,
    e6: helperFunction_22
  }
  ;
  return settingsRecord_3;
}
)();
