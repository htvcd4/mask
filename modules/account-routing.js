// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["account-routing.mjs"] = ((... argumentState) => {
  const settingsRecord_3 = {
    "GSRVE": function (argument, argument_2) {
      return argument ?? argument_2;
    }
  }
  ;
  argumentState.length = 0;
  const localValue_6 = Object.freeze(["sticky-quota-aware", "ordered-failover", "round-robin", "fixed"]), numericValue_3 = 300000, numericValue_4 = 3600000, numericValue_5 = (604800000), schemaVersion = 2;
  argumentState.a = class RuntimeClass extends Error {
    constructor(argument, {
      code: code = "account_pool_unavailable", publicContext: publicContext
    }
    = {
    }
    ) {
      void (super (argument), this.name = "AccountRoutingError", this.code = code), (publicContext !== null) && (this.publicContext = publicContext);
    }
  }
  ;
  function helperFunction_13(argument, localValue_7 = 160) {
    return typeof argument === "string" ? argument.trim().slice(0, localValue_7): "";
  }
  function helperFunction_14(argument) {
    let numericValue_6 = 2166136261;
    for (const localValue_7 of String(settingsRecord_3.GSRVE(argument, ""))) {
      void (numericValue_6 ^= localValue_7.codePointAt(0), numericValue_6 = Math.imul(numericValue_6, 16777619) >>> 0);
    }
    return numericValue_6 >>> 0;
  }
  function helperFunction_15() {
    return {
      schemaVersion: schemaVersion,
      leases: {
      }
      ,
      cursors: {
      }
      ,
      cooldowns: {
      }
      ,
      observations: {
      }
    }
    ;
  }
  function helperFunction_16(argument) {
    const localValue_7 = (argument) && typeof (argument) === "object" && ! Array.isArray((argument)) ? (argument): {
    }
    ;
    return {
      schemaVersion: schemaVersion,
      leases: localValue_7.leases && typeof localValue_7.leases === "object" ? {
        ... localValue_7.leases
      }
      : {
      }
      ,
      cursors: localValue_7.cursors && typeof localValue_7.cursors === "object" ? {
        ... localValue_7.cursors
      }
      : {
      }
      ,
      cooldowns: localValue_7.cooldowns && typeof localValue_7.cooldowns === "object" ? {
        ... localValue_7.cooldowns
      }
      : {
      }
      ,
      observations: localValue_7.observations && ((typeof localValue_7.observations) === "object") ? Object.fromEntries(Object.entries(localValue_7.observations).map(([localValue_8, localValue_9]) => {
        return [localValue_8, localValue_9 && typeof localValue_9 === "object" && ! Array.isArray(localValue_9) ? {
          ... localValue_9
        }
        : {
        }
        ];
      }
      )): {
      }
    }
    ;
  }
  function helperFunction_17(argument) {
    const localValue_7 = Number((argument));
    return Number.isFinite(localValue_7) && (localValue_7 > 0) ? localValue_7: null;
  }
  function helperFunction_18(argument) {
    return (0, helperFunction_13)((argument)?.publicContext?.message ?? (argument)?.message, 320);
  }
  function helperFunction_19(argument, {
    now: now = Date.now(), premiumWindowStartedAt: premiumWindowStartedAt = null
  }
  = {
  }
  ) {
    const localValue_7 = helperFunction_17(argument?.publicContext?.resetAt ?? argument?.resetAt);
    if (localValue_7 && localValue_7 > now) return localValue_7;
    const localValue_8 = helperFunction_18(argument).toLowerCase(), localValue_9 = localValue_8.match(new RegExp("resets?\\s+in\\s+(\\d+(?:\\.\\d+)?)\\s*(day|hour|minute)s?", "i"));
    if (localValue_9) {
      const localValue_11 = (0, Number)(localValue_9[1]), localValue_12 = {
        day: (86400000),
        hour: 3600000,
        minute: 60000
      }
      [localValue_9[2]];
      return now + Math.max(60000, Math.round((localValue_11 * localValue_12)));
    }
    const localValue_10 = helperFunction_17(premiumWindowStartedAt);
    if (localValue_10 && ((localValue_10 + numericValue_5) > now)) return localValue_10 + numericValue_5;
    return null;
  }
  function helperFunction_20({
    error: localValue_7, gatewayProfileId: gatewayProfileId, llmGatewayMode: llmGatewayMode = "devpass", modelPricingTier: modelPricingTier = "auto", observation: observation, now: now = Date.now()
  }
  = {
  }
  ) {
    if (((localValue_7?.code) === "rate_limit_exceeded")) return {
      kind: "rate_limit",
      resetAt: now + helperFunction_25(localValue_7)
    }
    ;
    const localValue_8 = Number(localValue_7?.status ?? localValue_7?.publicContext?.status ?? 0);
    if (gatewayProfileId !== "llm-gateway" || localValue_7?.code !== "billing_quota_exceeded" && localValue_8 !== 402) return null;
    const localValue_9 = helperFunction_18(localValue_7).toLowerCase(), localValue_10 = new RegExp("weekly|premium[- ]tier|fair[- ]use|reset pass", "").test(localValue_9), localValue_11 = llmGatewayMode === "devpass" && (modelPricingTier !== "standard" || localValue_10);
    if (localValue_11) return {
      kind: "weekly_premium",
      resetAt: (0, helperFunction_19)(localValue_7, {
        now: now,
        premiumWindowStartedAt: observation?.premiumWindowStartedAt
      }
      ) ?? now + numericValue_5
    }
    ;
    return {
      kind: "credit_exhausted",
      resetAt: now + numericValue_4
    }
    ;
  }
  function helperFunction_21(argument) {
    return [... argument].sort((argument_2, argument_3) => {
      ;
      const localValue_7 = ((0, Number)((argument_2)?.priority ?? 100) - Number((argument_3)?.priority ?? 100));
      if ((localValue_7 !== 0)) return localValue_7;
      return String((argument_2)?.id ?? "").localeCompare((0, String)((argument_3)?.id ?? ""));
    }
    );
  }
  function helperFunction_22(argument, argument_2) {
    const localValue_7 = Number((argument).cooldowns["account:" + (argument_2).id] ?? 0), localValue_8 = (0, helperFunction_13)((argument_2).quotaScopeId), localValue_9 = localValue_8 ? Number((argument).cooldowns["scope:" + localValue_8] ?? 0): 0;
    return Math.max(Number.isFinite(localValue_7) ? localValue_7: 0, Number.isFinite(localValue_9) ? localValue_9: 0);
  }
  function helperFunction_23({
    profiles: profiles, state: state, excludedAccountIds: excludedAccountIds, now: now
  }
  ) {
    const uniqueValues = new Set(excludedAccountIds ?? []);
    return helperFunction_21((profiles ?? []).filter((argument) => {
      return (argument) && ((argument).enabled !== false) && ! uniqueValues.has((argument).id) && (helperFunction_22(state, (argument)) <= now);
    }
    ));
  }
  function helperFunction_24({
    profiles: profiles, policy: policy = "sticky-quota-aware", fixedAccountId: fixedAccountId = "", affinityKey: affinityKey = "", cursorKey: cursorKey = "default", excludedAccountIds: excludedAccountIds = [], preferredCacheScopeId: preferredCacheScopeId = "", state: state = helperFunction_15(), now: now = Date.now()
  }
  = {
  }
  ) {
    if (! localValue_6.includes(policy)) throw new argumentState.a((("Unsupported account routing policy: " + policy) + "."), {
      code: "invalid_provider_setting"
    }
    );
    const state_2 = helperFunction_16(state), localValue_7 = helperFunction_23({
      profiles: profiles,
      state: state_2,
      excludedAccountIds: excludedAccountIds,
      now: now
    }
    ), localValue_8 = helperFunction_13(preferredCacheScopeId);
    localValue_8 && localValue_7.sort((argument, argument_2) => {
      ;
      const localValue_9 = ((argument).cacheScopeId === localValue_8) ? 0: 1, localValue_10 = (argument_2).cacheScopeId === localValue_8 ? 0: 1;
      return localValue_9 - localValue_10;
    }
    );
    if (localValue_7.length === 0) {
      const localValue_9 = (profiles ?? []).filter((argument) => {
        return (argument) && (argument).enabled !== false;
      }
      ), resumeAt = localValue_9.map((argument) => {
        return (0, helperFunction_22)(state_2, (argument));
      }
      ).filter((argument) => {
        return (argument) > now;
      }
      ).sort((argument, argument_2) => {
        return (argument) - (argument_2);
      }
      )[0] ?? null;
      throw new argumentState.a("No account profile is currently available.", {
        publicContext: {
          resumeAt: resumeAt,
          configuredAccounts: localValue_9.length
        }
      }
      );
    }
    let profile;
    if (policy === "fixed") {
      profile = localValue_7.find((argument) => {
        return (argument).id === fixedAccountId;
      }
      );
      if (! profile) throw new argumentState.a("The fixed account profile is unavailable.", {
        publicContext: {
          fixedAccountId: fixedAccountId
        }
      }
      );
    }
    else {
      if (policy === "ordered-failover")[profile] = localValue_7;
      else {
        if (policy === "round-robin") {
          const localValue_9 = helperFunction_13(cursorKey, 240) || "default", localValue_10 = Number(state_2.cursors[localValue_9] ?? 0), localValue_11 = Number.isInteger(localValue_10) && (localValue_10 >= 0) ? localValue_10 % localValue_7.length: 0;
          void (profile = localValue_7[localValue_11], state_2.cursors[localValue_9] = (localValue_11 + 1) % localValue_7.length);
        }
        else {
          const localValue_9 = helperFunction_13(affinityKey, 240) || helperFunction_13(cursorKey, 240) || "default", localValue_10 = helperFunction_13(state_2.leases[localValue_9]);
          profile = localValue_7.find((argument) => {
            return (argument).id === localValue_10;
          }
          ), ! profile && void (profile = localValue_7[(0, helperFunction_14)(localValue_9) % localValue_7.length], state_2.leases[localValue_9] = profile.id);
        }
      }
    }
    const settingsRecord_5 = {
      profile: profile,
      state: state_2
    }
    ;
    return settingsRecord_5;
  }
  function helperFunction_25(argument, localValue_7 = numericValue_3) {
    const localValue_8 = argument?.publicContext?.retryAfter ?? argument?.retryAfter ?? argument?.headers?.get?.("retry-after");
    if (typeof localValue_8 === "number" && Number.isFinite(localValue_8)) return Math.max(1000, Math.round((localValue_8 * 1000)));
    const localValue_9 = helperFunction_13(localValue_8, 120);
    if (localValue_9) {
      const localValue_10 = Number(localValue_9);
      if (Number.isFinite(localValue_10)) return Math.max(1000, Math.round((localValue_10 * 1000)));
      const localValue_11 = Date.parse(localValue_9);
      if (Number.isFinite(localValue_11)) return Math.max(1000, localValue_11 - Date.now());
    }
    return localValue_7;
  }
  function helperFunction_26({
    storage: storage, storageKey: storageKey, clock: clock_2 = () => {
      return Date.now();
    }
  }
  = {
  }
  ) {
    if (! storage || ((typeof storage.getItem) !== "function") || ((typeof storage.setItem) !== "function")) throw new TypeError("Account routing storage is unavailable.");
    if (typeof storageKey !== "string" || ! storageKey.trim()) throw new TypeError("A routing storage key is required.");
    let localValue_7;
    async function helperFunction_27() {
      return ! localValue_7 && (localValue_7 = Promise.resolve(storage.getItem(storageKey)).then((argument) => {
        ;
        if (typeof (argument) !== "string" || ! (argument)) return (0, helperFunction_15)();
        try {
          return helperFunction_16(JSON.parse((argument)));
        }
        catch {
          return (0, helperFunction_15)();
        }
      }
      )), localValue_7;
    }
    async function helperFunction_28(argument) {
      void (localValue_7 = Promise.resolve(helperFunction_16(argument)), await storage.setItem(storageKey, JSON.stringify(await localValue_7)));
    }
    return {
      async["select"](localValue_8 = {
      }
      ) {
        const state = await helperFunction_27(), localValue_9 = JSON.stringify(state), localValue_10 = (0, helperFunction_24)({
          ... localValue_8,
          state: state,
          now: (0, clock_2)()
        }
        );
        return (JSON.stringify(localValue_10.state) !== localValue_9) && await helperFunction_28(localValue_10.state), localValue_10.profile;
      }
      ,
      async["markRateLimited"](argument, localValue_8 = numericValue_3) {
        const localValue_9 = await helperFunction_27(), localValue_10 = clock_2() + Math.max(1000, (0, Number)(localValue_8) || numericValue_3);
        localValue_9.cooldowns["account:" + argument.id] = localValue_10;
        const localValue_11 = helperFunction_13(argument.quotaScopeId);
        localValue_11 && (localValue_9.cooldowns["scope:" + localValue_11] = localValue_10);
        for (const [localValue_12, localValue_13] of Object.entries(localValue_9.leases)) localValue_13 === argument.id && delete localValue_9.leases[localValue_12];
        return await helperFunction_28(localValue_9), localValue_10;
      }
      ,
      async["markQuotaLimited"](argument, {
        kind: kind = "credit_exhausted", resetAt: resetAt, modelId: modelId = "", message: message = ""
      }
      = {
      }
      ) {
        const localValue_8 = await(0, helperFunction_27)(), lastQuotaBlockedAt = (0, clock_2)(), localValue_9 = localValue_8.observations[argument.id] ?? {
        }
        , premiumResetAt = Math.max(lastQuotaBlockedAt + 1000, helperFunction_17(resetAt) ?? (kind === "weekly_premium" ? (lastQuotaBlockedAt + numericValue_5): lastQuotaBlockedAt + numericValue_4));
        localValue_8.cooldowns["account:" + argument.id] = premiumResetAt;
        const localValue_10 = helperFunction_13(argument.quotaScopeId);
        localValue_10 && (localValue_8.cooldowns["scope:" + localValue_10] = premiumResetAt);
        localValue_8.observations[argument.id] = {
          ... localValue_9,
          lastModelId: helperFunction_13(modelId, 240),
          lastQuotaKind: kind,
          lastQuotaMessage: helperFunction_13(message, 320),
          lastQuotaBlockedAt: lastQuotaBlockedAt,
          ... kind === "weekly_premium" ? {
            weeklyPremiumBlockedAt: lastQuotaBlockedAt,
            premiumResetAt: premiumResetAt
          }
          : {
            creditBlockedAt: lastQuotaBlockedAt
          }
        }
        ;
        for (const [localValue_11, localValue_12] of Object.entries(localValue_8.leases)) localValue_12 === argument.id && delete localValue_8.leases[localValue_11];
        return await helperFunction_28(localValue_8), premiumResetAt;
      }
      ,
      async["recordUsage"](argument, {
        costUsd: costUsd = 0, premium: premium = false, modelId: modelId = "", successful: successful = true
      }
      = {
      }
      ) {
        const localValue_8 = await helperFunction_27(), lastSuccessAt = clock_2(), localValue_9 = localValue_8.observations[argument.id] ?? {
        }
        , localValue_10 = (0, Number)(costUsd), localValue_11 = Number.isFinite(localValue_10) && localValue_10 > 0 ? localValue_10: 0;
        let premiumWindowStartedAt = helperFunction_17(localValue_9.premiumWindowStartedAt), premiumResetAt = (0, helperFunction_17)(localValue_9.premiumResetAt);
        premium && (! premiumWindowStartedAt || ! premiumResetAt || premiumResetAt <= lastSuccessAt) && void (premiumWindowStartedAt = lastSuccessAt, premiumResetAt = (lastSuccessAt + numericValue_5));
        void (localValue_8.observations[argument.id] = {
          ... localValue_9,
          ... successful ? {
            lastSuccessAt: lastSuccessAt,
            lastModelId: (0, helperFunction_13)(modelId, 240)
          }
          : {
          }
          ,
          observedCostUsd: Number(localValue_9.observedCostUsd ?? 0) + localValue_11,
          premiumObservedCostUsd: Number(localValue_9.premiumObservedCostUsd ?? 0) + (premium ? localValue_11: 0),
          ... premium ? {
            premiumWindowStartedAt: premiumWindowStartedAt,
            premiumResetAt: premiumResetAt
          }
          : {
          }
        }
        , await(0, helperFunction_28)(localValue_8));
        const settingsRecord_5 = {
          ... localValue_8.observations[argument.id]
        }
        ;
        return settingsRecord_5;
      }
      ,
      async["clearCooldown"](argument) {
        const localValue_8 = await(0, helperFunction_27)();
        delete localValue_8.cooldowns["account:" + argument.id];
        const localValue_9 = (0, helperFunction_13)(argument.quotaScopeId);
        localValue_9 && delete localValue_8.cooldowns["scope:" + localValue_9], localValue_8.observations[argument.id] && (localValue_8.observations[argument.id] = {
          ... localValue_8.observations[argument.id],
          lastQuotaKind: "",
          lastQuotaMessage: "",
          lastQuotaBlockedAt: null,
          weeklyPremiumBlockedAt: null,
          creditBlockedAt: null
        }
        ), await helperFunction_28(localValue_8);
      }
      ,
      async["snapshot"]() {
        return JSON.parse(JSON.stringify(await helperFunction_27()));
      }
    }
    ;
  }
  const settingsRecord_4 = {
    e0: helperFunction_19,
    e1: helperFunction_20,
    e2: helperFunction_24,
    e3: helperFunction_25,
    e4: helperFunction_26,
    e5: argumentState.a,
    e6: localValue_6,
    e7: numericValue_3,
    e8: numericValue_4,
    e9: numericValue_5,
    ea: schemaVersion
  }
  ;
  return settingsRecord_4;
}
)();
