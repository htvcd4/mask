// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["provider-parameter-capabilities.mjs"] = (() => {
  const settingsRecord_3 = {
    "yomdK": function (argument, argument_2) {
      return settingsRecord.ixCES(argument, argument_2);
    }
    ,
    "YREyh": function (argument, argument_2) {
      return argument || argument_2;
    }
  }
  ;
  ;
  const modelCapabilities_e5_2 = bundleModules["model-capabilities.mjs"].e5, schemaVersion = 1, localValue_6 = Object.freeze(["auto", "flex", "priority"]), localValue_7 = Object.freeze(["none", "minimal", "low", "medium", "high", "xhigh", "max"]), localValue_8 = Object.freeze(["auto", "concise", "detailed", "none"]), localValue_9 = Object.freeze(["risu", "temperature", "top-p"]), localValue_10 = Object.freeze(["disabled", "auto"]), localValue_11 = Object.freeze(["low", "medium", "high"]), localValue_12 = Object.freeze(["standard", "pro"]), localValue_13 = Object.freeze(["default", "auto", "all_turns", "current_turn"]), localValue_14 = Object.freeze({
    ["gemini-3.5-flash-lite"]: 65536,
    ["gemini-3.6-flash"]: 65536
  }
  );
  function helperFunction_13(localValue_15 = []) {
    return Object.freeze([... new Set(localValue_15)]);
  }
  function helperFunction_14({
    support: support = "unsupported", values: values = [], mapping: mapping = "omit", note: note = "", effective: localValue_15, semantics: semantics = "value"
  }
  = {
  }
  ) {
    const values_2 = helperFunction_13(values);
    return Object.freeze({
      support: support,
      values: values_2,
      mapping: mapping,
      note: note,
      effective: Object.freeze(localValue_15 ?? Object.fromEntries(values_2.map((argument) => {
        return [(argument), (argument)];
      }
      ))),
      semantics: semantics
    }
    );
  }
  function helperFunction_15(values, mapping, note = "", argument, semantics = "value") {
    return helperFunction_14({
      support: "supported",
      values: values,
      mapping: mapping,
      note: note,
      effective: argument,
      semantics: semantics
    }
    );
  }
  function helperFunction_16(values, mapping, note = "", argument, semantics = "value") {
    return helperFunction_14({
      support: "conditional",
      values: values,
      mapping: mapping,
      note: note,
      effective: argument,
      semantics: semantics
    }
    );
  }
  function helperFunction_17(note = "") {
    const settingsRecord_5 = {
      note: note
    }
    ;
    return helperFunction_14(settingsRecord_5);
  }
  function helperFunction_18({
    routeId: routeId, gatewayProfileId: gatewayProfileId, adapterId: adapterId
  }
  ) {
    const localValue_15 = typeof routeId === "string" ? routeId.trim(): "";
    return localValue_15 || (("" + gatewayProfileId) + ":") + adapterId;
  }
  function helperFunction_19(argument) {
    return ["extended", "portable", "minimal"].includes((argument)) ? (argument): "extended";
  }
  function helperFunction_20({
    support: support = "unsupported", modes: modes = [], mapping: mapping = "omit", key: key = "none", options: options = "none", breakpoints: breakpoints = "none", ttlValues: ttlValues = [], effectiveTtl: effectiveTtl = null, note: note = "", effective: localValue_15, offEncoding: offEncoding = "omit-hints", offMeaning: offMeaning = "omit-hints"
  }
  = {
  }
  ) {
    const modes_2 = helperFunction_13(modes);
    return Object.freeze({
      support: support,
      modes: modes_2,
      mapping: mapping,
      key: key,
      options: options,
      breakpoints: breakpoints,
      ttlValues: (0, helperFunction_13)(ttlValues),
      effectiveTtl: effectiveTtl,
      note: note,
      offEncoding: offEncoding,
      offMeaning: offMeaning,
      effective: Object.freeze(localValue_15 ?? Object.fromEntries(modes_2.map((argument) => {
        return [(argument), (argument)];
      }
      )))
    }
    );
  }
  function helperFunction_21({
    profileTransport: profileTransport, gatewayProfileId: gatewayProfileId, adapterRequestDialect: adapterRequestDialect, backgroundResponses: backgroundResponses, adapterBackgroundResponses: adapterBackgroundResponses, webkit: webkit
  }
  ) {
    ;
    if (profileTransport !== "http") return Object.freeze({
      values: Object.freeze([]),
      effective: Object.freeze({
        stream: "stream",
        buffered: "buffered",
        ["webkit-host-buffered"]: "buffered"
      }
      ),
      hostOwned: true,
      note: "transport-owned-by-host"
    }
    );
    if ((gatewayProfileId === "llm-gateway")) return Object.freeze({
      values: (0, helperFunction_13)(["stream", ... webkit ? ["webkit-host-buffered"]: []]),
      effective: Object.freeze({
        stream: "stream",
        buffered: "stream",
        ["background-resume"]: "stream",
        ... webkit ? {
          ["webkit-host-buffered"]: "buffered"
        }
        : {
        }
      }
      ),
      note: "llm-gateway-stream-normalized",
      hostOwned: false
    }
    );
    const localValue_15 = adapterRequestDialect === "responses" && (backgroundResponses !== "none") && adapterBackgroundResponses === true, items = ["stream", "buffered", ... localValue_15 ? ["background-resume"]: [], ... webkit ? ["webkit-host-buffered"]: []];
    return Object.freeze({
      values: (0, helperFunction_13)(items),
      effective: Object.freeze(Object.fromEntries(items.map(argument => {
        return [argument, argument === "webkit-host-buffered" ? ("buffered"): argument];
      }
      ))),
      note: localValue_15 ? "": "background-resume-unsupported",
      hostOwned: false
    }
    );
  }
  function helperFunction_22({
    routeId: routeId = "", gatewayProfileId: gatewayProfileId = "", gatewayRequestDialect: gatewayRequestDialect = "", profileTransport: profileTransport = "http", backgroundResponses: backgroundResponses = "none", adapterId: adapterId = "", adapterRequestDialect: adapterRequestDialect = "", adapterBackgroundResponses: adapterBackgroundResponses = false, adapterContract: adapterContract = {
    }
    , compatibleParameterMode: compatibleParameterMode = "extended", modelId: modelId = "", vercelProviderOnly: vercelProviderOnly, isAstra: isAstra = false, configuredReasoningEffort: configuredReasoningEffort = "", verbosityMode: verbosityMode = "auto", modelVerbositySupported: modelVerbositySupported = null, terminalToolEnabled: terminalToolEnabled = false, runtime: runtime = {
    }
  }
  = {
  }
  ) {
    const compatibleParameterMode_2 = (0, helperFunction_19)(compatibleParameterMode), localValue_15 = String(modelId).trim().toLowerCase(), localValue_16 = localValue_15.split("/").at((((((((- 1)))))))) ?? localValue_15, localValue_17 = ["gpt-6-sol", "gpt-6-luna"].includes(localValue_16), localValue_18 = new RegExp("^(?:openai\\/)?gpt-(?:[6-9](?:\\.|-|$)|5\\.(?:[6-9]|\\d{2,})(?:\\.|-|$))", "").test(localValue_15), localValue_19 = adapterRequestDialect === "responses", localValue_20 = adapterRequestDialect === "chat-completions", localValue_21 = ["openai-responses-compatible", "openai-responses-generic"].includes(gatewayRequestDialect), localValue_22 = gatewayProfileId === "github-copilot-direct", localValue_23 = localValue_22 && localValue_19 && new RegExp("(?:^|\\/)gpt-5\\.6-luna(?:$|[-:])", "").test(localValue_15), localValue_24 = localValue_23 && configuredReasoningEffort !== "none", localValue_25 = adapterId === "xai-responses", localValue_26 = (adapterId === "openrouter-chat"), localValue_27 = adapterId === "openai-chat-completions", localValue_28 = adapterId === "cloudflare-chat", localValue_29 = adapterRequestDialect === "anthropic-messages", localValue_30 = adapterRequestDialect === "google-interactions", localValue_31 = ["google-generate-content", "cloudflare-gemini-run"].includes(adapterRequestDialect), localValue_32 = adapterRequestDialect === "copilot-manager", localValue_33 = (compatibleParameterMode_2 === "extended"), localValue_34 = compatibleParameterMode_2 === "portable", localValue_35 = localValue_19 && (settingsRecord_3.yomdK(! localValue_21, localValue_33) || localValue_34), localValue_36 = localValue_19 && (! localValue_21 || localValue_33), localValue_37 = adapterContract?.thinkingMode ?? "none";
    let cache = (0, helperFunction_20)();
    if (localValue_22 && localValue_19 && localValue_18) cache = helperFunction_20({
      support: "supported",
      modes: ["explicit", "implicit", "off"],
      mapping: "responses-cache-fields",
      key: "prompt_cache_key",
      options: "prompt_cache_options",
      breakpoints: "prompt_cache_breakpoint",
      ttlValues: ["30m"],
      effectiveTtl: "30m",
      offEncoding: "explicit-empty",
      offMeaning: "disable-implicit-cache",
      note: "copilot-responses-openai-cache"
    }
    );
    else {
      if ((adapterId === "copilot-anthropic")) cache = helperFunction_20({
        support: "conditional",
        modes: ["explicit", "off"],
        mapping: "anthropic-explicit-blocks",
        key: "none",
        options: "none",
        breakpoints: "cache_control",
        effectiveTtl: "5m",
        note: "copilot-anthropic-explicit-compatibility",
        offEncoding: "omit-cache-control",
        offMeaning: "omit-cache-control",
        effective: {
          explicit: "explicit",
          implicit: "off",
          off: "off"
        }
      }
      );
      else {
        if (localValue_32) cache = (0, helperFunction_20)({
          support: "conditional",
          modes: ["explicit", "off"],
          mapping: "copilot-manager-cache-point",
          key: "none",
          options: "none",
          breakpoints: "cachePoint",
          note: "copilot-manager-explicit-compatibility",
          offEncoding: "omit-hints",
          offMeaning: "omit-hints-no-disable-guarantee",
          effective: {
            explicit: "explicit",
            implicit: "off",
            off: "off"
          }
        }
        );
        else {
          if (adapterId === "copilot-chat") cache = (0, helperFunction_20)({
            support: "conditional",
            modes: ["explicit", "implicit", "off"],
            mapping: "copilot-chat-cache-control",
            key: "prompt_cache_key",
            breakpoints: "copilot_cache_control",
            note: "copilot-chat-cache-compatibility",
            offMeaning: "omit-hints-no-disable-guarantee",
            effective: {
              explicit: "explicit",
              implicit: "implicit",
              off: "off"
            }
          }
          );
          else {
            if (localValue_22 && localValue_19) cache = helperFunction_20({
              support: "conditional",
              modes: ["implicit", "off"],
              mapping: "key-only-hint",
              key: "prompt_cache_key",
              note: "cache-key-hint-compatibility",
              offMeaning: "omit-hints-no-disable-guarantee",
              effective: {
                explicit: "implicit",
                implicit: "implicit",
                off: "off"
              }
            }
            );
            else {
              if (localValue_22) cache = helperFunction_20({
                support: "unsupported",
                modes: [],
                mapping: "service-managed",
                note: "saved-preference-preserved"
              }
              );
              else {
                if (localValue_26) {
                  const localValue_48 = localValue_15.includes("/") ? localValue_15.split("/", 1)[0]: "", localValue_49 = localValue_18 && localValue_48 === "openai";
                  localValue_49 ? cache = (0, helperFunction_20)({
                    support: "supported",
                    modes: ["explicit", "implicit", "off"],
                    mapping: "openrouter-prompt-cache-fields",
                    key: "prompt_cache_key",
                    options: "prompt_cache_options",
                    breakpoints: "prompt_cache_breakpoint",
                    ttlValues: ["30m"],
                    effectiveTtl: "30m",
                    offEncoding: "explicit-empty",
                    offMeaning: "disable-implicit-cache"
                  }
                  ): localValue_48 === "anthropic" ? cache = helperFunction_20({
                    support: "supported",
                    modes: ["explicit", "implicit", "off"],
                    mapping: "openrouter-anthropic-cache",
                    key: "prompt_cache_key",
                    options: "cache_control",
                    breakpoints: "prompt_cache_breakpoint",
                    ttlValues: ["5m"],
                    effectiveTtl: "5m",
                    offEncoding: "omit-cache-control",
                    offMeaning: "omit-cache-control"
                  }
                  ): localValue_48 === "google" ? cache = helperFunction_20({
                    support: "supported",
                    modes: ["explicit", "implicit", "off"],
                    mapping: "openrouter-google-cache",
                    key: "prompt_cache_key",
                    options: "none",
                    breakpoints: "prompt_cache_breakpoint",
                    ttlValues: ["5m"],
                    effectiveTtl: "5m",
                    offMeaning: "omit-hints-no-disable-guarantee"
                  }
                  ): localValue_48 === "openai" || ["xai", "moonshot", "kimi"].includes(localValue_48) ? cache = (0, helperFunction_20)({
                    support: "supported",
                    modes: ["implicit", "off"],
                    mapping: "openrouter-key-only-cache",
                    key: "prompt_cache_key",
                    note: "automatic-cache",
                    offMeaning: "omit-hints-no-disable-guarantee",
                    effective: {
                      explicit: "implicit",
                      implicit: "implicit",
                      off: "off"
                    }
                  }
                  ): cache = (0, helperFunction_20)({
                    support: "conditional",
                    modes: ["explicit", "implicit", "off"],
                    mapping: "openrouter-generic-cache",
                    key: "prompt_cache_key",
                    options: "prompt_cache_options",
                    breakpoints: "prompt_cache_breakpoint",
                    note: "unknown-upstream-override",
                    offMeaning: "server-dependent"
                  }
                  );
                }
                else {
                  if (localValue_29) cache = helperFunction_20({
                    support: "supported",
                    modes: ["explicit", "implicit", "off"],
                    mapping: "anthropic-cache-control",
                    key: "none",
                    options: "cache_control",
                    breakpoints: "cache_control",
                    ttlValues: ["5m", "1h"],
                    effectiveTtl: "5m",
                    offEncoding: "omit-cache-control",
                    offMeaning: "omit-cache-control"
                  }
                  );
                  else {
                    if (localValue_25) cache = helperFunction_20({
                      support: "conditional",
                      modes: ["implicit", "off"],
                      mapping: "key-only-affinity",
                      key: "prompt_cache_key",
                      note: "off-omits-hints-only",
                      offMeaning: "omit-hints-no-disable-guarantee",
                      effective: {
                        explicit: "implicit",
                        implicit: "implicit",
                        off: "off"
                      }
                    }
                    );
                    else {
                      if (adapterId === "kimi-chat") cache = helperFunction_20({
                        support: "conditional",
                        modes: ["implicit", "off"],
                        mapping: "key-only-hint",
                        key: "prompt_cache_key",
                        note: "cache-key-hint-compatibility",
                        offMeaning: "omit-hints-no-disable-guarantee",
                        effective: {
                          explicit: "implicit",
                          implicit: "implicit",
                          off: "off"
                        }
                      }
                      );
                      else {
                        if (["deepseek-chat", "glm-chat", "google-vertex-chat"].includes(adapterId)) {
                          const settingsRecord_5 = {
                            support: "unsupported",
                            modes: [],
                            mapping: "service-managed",
                            note: "saved-preference-preserved"
                          }
                          ;
                          cache = helperFunction_20(settingsRecord_5);
                        }
                        else {
                          if (localValue_30 || localValue_31) cache = helperFunction_20({
                            support: "unsupported",
                            modes: [],
                            mapping: "service-managed",
                            note: "saved-preference-preserved"
                          }
                          );
                          else {
                            if (localValue_19 || localValue_20 && localValue_33 && (localValue_27 || localValue_28)) {
                              const localValue_48 = settingsRecord_3.YREyh(! localValue_21, localValue_33) || gatewayRequestDialect === "openai-responses-compatible" && localValue_34, localValue_49 = ["openai-official", "cloudflare-ai-gateway"].includes(gatewayProfileId), localValue_50 = localValue_18 && (localValue_49 || localValue_21 && localValue_33);
                              cache = localValue_48 ? helperFunction_20({
                                support: localValue_50 ? "supported": "conditional",
                                modes: ["explicit", "implicit", "off"],
                                mapping: "responses-cache-fields",
                                key: "prompt_cache_key",
                                options: "prompt_cache_options",
                                breakpoints: "prompt_cache_breakpoint",
                                ttlValues: localValue_50 ? ["30m"]: [],
                                effectiveTtl: localValue_50 ? "30m": null,
                                note: localValue_50 ? "": "model-provider-dependent",
                                offEncoding: localValue_50 ? "explicit-empty": "omit-hints",
                                offMeaning: localValue_50 ? "disable-implicit-cache": "server-dependent"
                              }
                              ): helperFunction_20();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let reasoningEffort = helperFunction_17();
    if (localValue_35 || localValue_32 || localValue_20 && compatibleParameterMode_2 !== "minimal") {
      const localValue_48 = new RegExp("^(?:openai\\/)?gpt-5\\.6(?:$|-)", "").test(localValue_15) ? ["none", "low", "medium", "high", "xhigh", "max"]: null, localValue_49 = isAstra ? ["low", "medium", "high", "xhigh", "max"]: null, settingsRecord_5 = {
        none: "none",
        minimal: "low",
        low: "low",
        medium: "medium",
        high: "high",
        xhigh: "xhigh",
        max: "max"
      }
      , settingsRecord_6 = {
        none: "low",
        minimal: "low",
        low: "low",
        medium: "medium",
        high: "high",
        xhigh: "xhigh",
        max: "max"
      }
      ;
      let localValue_50 = adapterContract?.reasoningEffortValues ?? localValue_49 ?? localValue_48 ?? localValue_7, localValue_51 = localValue_48 ? settingsRecord_5: localValue_49 ? settingsRecord_6: null, textValue_2 = "effort";
      (adapterId === "deepseek-chat") ? void (localValue_50 = ["none", "high", "max"], localValue_51 = {
        none: "none",
        minimal: "high",
        low: "high",
        medium: "high",
        high: "high",
        xhigh: "max",
        max: "max"
      }
      ): adapterId === "glm-chat" && adapterContract?.supportsReasoningEffort !== true ? void (localValue_50 = ["none", "high"], localValue_51 = {
        none: "none",
        minimal: "high",
        low: "high",
        medium: "high",
        high: "high",
        xhigh: "high",
        max: "high"
      }
      , textValue_2 = "toggle"): (adapterId === "kimi-chat") && adapterContract?.thinkingSwitch === true && void (localValue_50 = ["none", "high"], localValue_51 = {
        none: "none",
        minimal: "high",
        low: "high",
        medium: "high",
        high: "high",
        xhigh: "high",
        max: "high"
      }
      , textValue_2 = "toggle"), reasoningEffort = helperFunction_15(localValue_50, localValue_20 ? "reasoning_effort": "reasoning.effort", "", Object.fromEntries(localValue_7.map((argument) => {
        return [(argument), adapterContract?.reasoningEffortMap?.[(argument)] ?? localValue_51?.[(argument)] ?? (localValue_50.includes((argument)) ? (argument): adapterContract?.defaultReasoningEffort ?? localValue_50.at((((((((- 1)))))))) ?? (argument))];
      }
      )), textValue_2);
    }
    else {
      if ((localValue_29 || localValue_30 || localValue_31) && localValue_37 !== "none") {
        const localValue_48 = localValue_31 && localValue_37 === "budget", localValue_49 = localValue_48 ? ["none", "high"]: adapterContract?.reasoningEffortValues ?? (localValue_29 ? ["none", "low", "medium", "high", "max"]: localValue_7), localValue_50 = localValue_29 ? localValue_37 === "adaptive" ? {
          none: "none",
          minimal: "high",
          low: "low",
          medium: "medium",
          high: "high",
          xhigh: "high",
          max: "max"
        }
        : {
          none: "none",
          minimal: "low",
          low: "low",
          medium: "medium",
          high: "high",
          xhigh: "max",
          max: "max"
        }
        : localValue_48 ? {
          none: "none",
          minimal: "high",
          low: "high",
          medium: "high",
          high: "high",
          xhigh: "high",
          max: "high"
        }
        : null;
        reasoningEffort = helperFunction_15(localValue_49, localValue_29 ? "thinking-output_config": "thinking-config", "", Object.fromEntries(localValue_7.map((argument) => {
          return [(argument), localValue_50?.[(argument)] ?? adapterContract?.reasoningEffortMap?.[(argument)] ?? (localValue_49.includes((argument)) ? (argument): adapterContract?.defaultReasoningEffort ?? localValue_49.at((((((((- 1)))))))) ?? (argument))];
        }
        )), localValue_48 ? "toggle": localValue_37 === "manual" ? "budget": "effort");
      }
    }
    ((adapterContract?.thinkingAlwaysOn) === true) && (reasoningEffort = (0, helperFunction_17)("always-on"));
    let reasoningSummary = (0, helperFunction_17)();
    localValue_36 || localValue_32 ? reasoningSummary = helperFunction_15(localValue_8, "reasoning.summary", "", {
      auto: "auto",
      concise: "concise",
      detailed: "detailed",
      none: null
    }
    , "summary"): localValue_29 && (localValue_37 === "adaptive") ? reasoningSummary = (0, helperFunction_15)(["auto", "none"], "thinking.display", "", {
      auto: "summarized",
      concise: "summarized",
      detailed: "summarized",
      none: "omitted"
    }
    , "toggle"): localValue_30 && localValue_37 === "level" ? reasoningSummary = helperFunction_15(["auto", "none"], "thinking_summaries", "", {
      auto: "auto",
      concise: "auto",
      detailed: "auto",
      none: "none"
    }
    , "toggle"): localValue_31 && (localValue_37 !== "none") && (reasoningSummary = (0, helperFunction_15)(["auto", "none"], "includeThoughts", "", {
      auto: true,
      concise: true,
      detailed: true,
      none: false
    }
    , "toggle"));
    const localValue_38 = localValue_21 && localValue_33, localValue_39 = localValue_19 && ! localValue_25 && localValue_18, reasoningMode = localValue_39 ? helperFunction_15(localValue_12, "reasoning.mode"): localValue_38 ? helperFunction_16(localValue_12, "reasoning.mode", "server-model-dependent"): (0, helperFunction_17)(), reasoningContext = localValue_39 ? helperFunction_15(localValue_13, "reasoning.context"): localValue_38 ? helperFunction_16(localValue_13, "reasoning.context", "server-model-dependent"): (0, helperFunction_17)(), localValue_40 = localValue_20 && localValue_33 && (localValue_27 || localValue_28 || localValue_26), localValue_41 = localValue_36 && ! localValue_25 || localValue_40 || localValue_32, localValue_42 = localValue_41 && verbosityMode !== "omit" && (verbosityMode === "send" || modelVerbositySupported === true || localValue_38), verbosity = localValue_42 ? (modelVerbositySupported === true) || verbosityMode === "send" ? (0, helperFunction_15)(localValue_11, localValue_20 ? "verbosity": "text.verbosity"): helperFunction_16(localValue_11, localValue_20 ? "verbosity": "text.verbosity", "server-model-dependent"): (0, helperFunction_17)(), localValue_43 = ["google-interactions-native", "google-generate-content-native"].includes(gatewayProfileId), localValue_44 = ["google-vertex-native", "google-vertex-chat-completions"].includes(gatewayProfileId), localValue_45 = (gatewayProfileId === "vercel-ai-gateway") && Array.isArray(vercelProviderOnly) && (vercelProviderOnly.length === 0 || vercelProviderOnly.some((argument) => {
      return ! ["openai", "google", "vertex", "xai"].includes((argument));
    }
    )), serviceTier = localValue_45 ? helperFunction_16(localValue_6, "service_tier", "vercel-tier-provider-undocumented"): localValue_43 || localValue_44 ? (0, helperFunction_16)(localValue_6, localValue_44 ? "vertex-service-tier-headers": "service_tier", localValue_44 ? "vertex-tier-endpoint-dependent": "model-provider-dependent", {
      auto: null,
      flex: "flex",
      priority: "priority"
    }
    ): ! localValue_22 && (localValue_36 && ! localValue_25 || localValue_40) ? (0, helperFunction_16)(localValue_6, "service_tier", "model-provider-dependent"): helperFunction_17(), truncation = localValue_36 ? (0, helperFunction_15)(localValue_10, "truncation"): helperFunction_17(), localValue_46 = isAstra || localValue_17 && (configuredReasoningEffort !== "none") || localValue_24 || ((adapterContract?.suppressSampling) === true) || adapterId === "deepseek-chat" && configuredReasoningEffort !== "none" || localValue_29 && localValue_37 === "adaptive", sampling = localValue_46 ? helperFunction_17(localValue_24 ? "copilot-responses-model-unsupported": localValue_17 ? "gpt6-non-none-reasoning": "suppressed-by-model-contract"): localValue_29 && (localValue_37 === "manual") && configuredReasoningEffort !== "none" ? (0, helperFunction_16)(localValue_9, "temperature-top_p", "suppressed-when-manual-thinking-active"): localValue_23 ? helperFunction_16(localValue_9, "temperature-top_p", "copilot-responses-model-unverified-at-none"): helperFunction_15(localValue_9, "temperature-top_p"), localValue_47 = (adapterRequestDialect === "google-generate-content") && Number.isInteger(localValue_14[localValue_16]), max = adapterId === "cloudflare-gemini-run" || localValue_47 ? localValue_14[localValue_16] ?? 65536: null, maxOutputTokens = Object.freeze({
      support: "supported",
      min: 1,
      max: max,
      "uiMax": 128000,
      mapping: adapterRequestDialect === "anthropic-messages" ? "max_tokens": localValue_20 ? adapterContract?.tokenLimitField ?? "max_completion_tokens": localValue_30 ? "generation_config.max_output_tokens": localValue_31 ? "generationConfig.maxOutputTokens": "max_output_tokens",
      note: (adapterId === "cloudflare-gemini-run") ? "cloudflare-gemini-limit": localValue_47 ? "documented-google-model-limit": ""
    }
    ), taskWorkflow = (0, helperFunction_15)(modelCapabilities_e5_2({
      modelId: modelId,
      requestDialect: adapterRequestDialect,
      terminalToolEnabled: terminalToolEnabled,
      serverProviderRuntime: runtime?.serverProviderRuntime === true
    }
    ), "application-task-workflow");
    return Object.freeze({
      schemaVersion: schemaVersion,
      routeId: helperFunction_18({
        routeId: routeId,
        gatewayProfileId: gatewayProfileId,
        adapterId: adapterId
      }
      ),
      gatewayProfileId: gatewayProfileId,
      adapterId: adapterId,
      modelId: modelId,
      compatibleParameterMode: compatibleParameterMode_2,
      fields: Object.freeze({
        serviceTier: serviceTier,
        cache: cache,
        verbosity: verbosity,
        reasoningEffort: reasoningEffort,
        reasoningSummary: reasoningSummary,
        reasoningMode: reasoningMode,
        reasoningContext: reasoningContext,
        sampling: sampling,
        truncation: truncation,
        taskWorkflow: taskWorkflow,
        maxOutputTokens: maxOutputTokens
      }
      ),
      transport: helperFunction_21({
        profileTransport: profileTransport,
        gatewayProfileId: gatewayProfileId,
        adapterRequestDialect: adapterRequestDialect,
        backgroundResponses: backgroundResponses,
        adapterBackgroundResponses: adapterBackgroundResponses,
        webkit: runtime?.webkit === true
      }
      )
    }
    );
  }
  function helperFunction_23(argument, argument_2) {
    void 0;
    const localValue_15 = argument.filter((argument_3) => {
      return ((argument_3).fields[argument_2]?.support) !== (("unsupported"));
    }
    ), values = helperFunction_13(localValue_15.flatMap((argument_3) => {
      return (argument_3).fields[argument_2]?.values ?? (argument_3).fields[argument_2]?.modes ?? [];
    }
    )), localValue_16 = helperFunction_13(localValue_15.flatMap(argument_3 => {
      return Object.keys(argument_3.fields[argument_2]?.effective ?? {
      }
      );
    }
    ));
    return Object.freeze({
      visible: localValue_15.length > 0,
      values: values,
      supportedRouteIds: helperFunction_13(localValue_15.map((argument_3) => {
        return (argument_3).routeId;
      }
      )),
      unsupportedRouteIds: helperFunction_13(argument.filter((argument_3) => {
        return (argument_3).fields[argument_2]?.support === "unsupported";
      }
      ).map((argument_3) => {
        return (argument_3).routeId;
      }
      )),
      optionRouteIds: Object.freeze(Object.fromEntries(values.map((argument_3) => {
        return [(argument_3), helperFunction_13(localValue_15.filter(argument_4 => {
          const yx = argument_4.fields[argument_2], localValue_17 = yx.values ?? yx.modes ?? [];
          return localValue_17.includes((argument_3));
        }
        ).map((argument_4) => {
          return void 0, (argument_4).routeId;
        }
        ))];
      }
      ))),
      routeMappings: Object.freeze(Object.fromEntries(argument.map((argument_3) => {
        return [(argument_3).routeId, (argument_3).fields[argument_2]?.mapping ?? "omit"];
      }
      ))),
      routeSemantics: Object.freeze(Object.fromEntries(argument.map((argument_3) => {
        return [(argument_3).routeId, (argument_3).fields[argument_2]?.semantics ?? "value"];
      }
      ))),
      routeNotes: Object.freeze(Object.fromEntries(argument.filter(argument_3 => {
        return argument_3.fields[argument_2]?.note;
      }
      ).map((argument_3) => {
        return [(argument_3).routeId, (argument_3).fields[argument_2].note];
      }
      ))),
      routeOffEncoding: Object.freeze(Object.fromEntries(argument.filter((argument_3) => {
        return (argument_3).fields[argument_2]?.offEncoding;
      }
      ).map(argument_3 => {
        return [argument_3.routeId, argument_3.fields[argument_2].offEncoding];
      }
      ))),
      routeOffMeaning: Object.freeze(Object.fromEntries(argument.filter((argument_3) => {
        return (argument_3).fields[argument_2]?.offMeaning;
      }
      ).map((argument_3) => {
        return [(argument_3).routeId, (argument_3).fields[argument_2].offMeaning];
      }
      ))),
      optionEffective: Object.freeze(Object.fromEntries(localValue_16.map((argument_3) => {
        return [(argument_3), Object.freeze(Object.fromEntries(argument.map((argument_4) => {
          return void 0, [(argument_4).routeId, (argument_4).fields[argument_2]?.effective?.[(argument_3)] ?? null];
        }
        )))];
      }
      )))
    }
    );
  }
  function helperFunction_24(argument, argument_2) {
    const localValue_15 = (argument).map((argument_3) => {
      return (argument_3).fields[(argument_2)];
    }
    ), localValue_16 = localValue_15.length === 0 ? []: localValue_15[0].values.filter((argument_3) => {
      ;
      return localValue_15.every((argument_4) => {
        return void 0, (argument_4).values.includes((argument_3));
      }
      );
    }
    );
    return Object.freeze({
      visible: localValue_16.some((argument_3) => {
        return (argument_3) !== "off";
      }
      ),
      values: helperFunction_13(localValue_16),
      supportedRouteIds: (0, helperFunction_13)((argument).map(argument_3 => {
        return argument_3.routeId;
      }
      )),
      unsupportedRouteIds: Object.freeze([]),
      optionRouteIds: Object.freeze(Object.fromEntries(localValue_16.map(argument_3 => {
        return [argument_3, (0, helperFunction_13)((argument).map((argument_4) => {
          return (argument_4).routeId;
        }
        ))];
      }
      ))),
      routeMappings: Object.freeze(Object.fromEntries((argument).map((argument_3) => {
        return [(argument_3).routeId, (argument_3).fields[(argument_2)]?.mapping ?? "omit"];
      }
      ))),
      routeSemantics: Object.freeze(Object.fromEntries((argument).map((argument_3) => {
        return [(argument_3).routeId, (argument_3).fields[(argument_2)]?.semantics ?? "value"];
      }
      ))),
      routeNotes: Object.freeze({
      }
      ),
      optionEffective: Object.freeze(Object.fromEntries(localValue_16.map((argument_3) => {
        return [(argument_3), Object.freeze(Object.fromEntries((argument).map((argument_4) => {
          return void 0, [(argument_4).routeId, (argument_4).fields[(argument_2)]?.effective?.[(argument_3)] ?? (argument_3)];
        }
        )))];
      }
      )))
    }
    );
  }
  function helperFunction_25(localValue_15 = []) {
    ;
    const localValue_16 = localValue_15.filter((argument) => {
      return ((argument)?.schemaVersion) === 1;
    }
    ), items = ["serviceTier", "cache", "verbosity", "reasoningEffort", "reasoningSummary", "reasoningMode", "reasoningContext", "sampling", "truncation"], routeCaps = Object.freeze(Object.fromEntries(localValue_16.map((argument) => {
      return [(argument).routeId, (argument).fields.maxOutputTokens.max];
    }
    ))), values = helperFunction_13(localValue_16.flatMap(argument => {
      return argument.transport.values;
    }
    ));
    return Object.freeze({
      schemaVersion: schemaVersion,
      routes: Object.freeze([... localValue_16]),
      fields: Object.freeze(Object.fromEntries(items.map(argument => {
        return [argument, helperFunction_23(localValue_16, argument)];
      }
      ).concat([["taskWorkflow", helperFunction_24(localValue_16, "taskWorkflow")]]))),
      maxOutputTokens: Object.freeze({
        min: localValue_16.length > 0 ? Math.max(... localValue_16.map((argument) => {
          return (argument).fields.maxOutputTokens.min;
        }
        )): 1,
        unionMax: 128000,
        routeCaps: routeCaps
      }
      ),
      transport: Object.freeze({
        visible: values.length > 0,
        values: values,
        optionRouteIds: Object.freeze(Object.fromEntries(values.map((argument) => {
          return [(argument), helperFunction_13(localValue_16.filter(argument_2 => {
            return argument_2.transport.values.includes((argument));
          }
          ).map((argument_2) => {
            return void 0, (argument_2).routeId;
          }
          ))];
        }
        ))),
        routeEffective: Object.freeze(Object.fromEntries(localValue_16.map((argument) => {
          return [(argument).routeId, (argument).transport.effective];
        }
        ))),
        routeNotes: Object.freeze(Object.fromEntries(localValue_16.filter((argument) => {
          return (argument).transport.note;
        }
        ).map((argument) => {
          return [(argument).routeId, (argument).transport.note];
        }
        )))
      }
      )
    }
    );
  }
  function helperFunction_26(argument, argument_2) {
    const localValue_15 = argument?.transport?.effective?.[argument_2];
    return ((typeof localValue_15) === "string") ? localValue_15: null;
  }
  function helperFunction_27(argument, argument_2, argument_3) {
    const localValue_15 = argument?.fields?.[argument_2];
    if (! localValue_15 || localValue_15.support === "unsupported") return null;
    return Object.hasOwn(localValue_15.effective ?? {
    }
    , argument_3) ? localValue_15.effective[argument_3]: null;
  }
  function helperFunction_28(argument, argument_2) {
    if (! Number.isInteger(argument_2)) return argument_2;
    const localValue_15 = argument?.fields?.maxOutputTokens?.min ?? 1, localValue_16 = argument?.fields?.maxOutputTokens?.max;
    return Number.isInteger(localValue_16) ? Math.min(localValue_16, Math.max(localValue_15, argument_2)): Math.max(localValue_15, argument_2);
  }
  const settingsRecord_4 = {
    e0: helperFunction_22,
    e1: helperFunction_25,
    e2: helperFunction_26,
    e3: helperFunction_27,
    e4: helperFunction_28,
    e5: schemaVersion
  }
  ;
  return settingsRecord_4;
}
)();
