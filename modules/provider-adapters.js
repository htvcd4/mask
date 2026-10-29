// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["provider-adapters.mjs"] = (() => {
  const settingsRecord_3 = {
    "lfVsn": function (argument, argument_2) {
      return settingsRecord_2.DVlUp(argument, argument_2);
    }
  }
  ;
  ;
  const gatewayProfiles_e1_2 = bundleModules["gateway-profiles.mjs"].e1, modelCapabilities_e4 = bundleModules["model-capabilities.mjs"].e4, modelCapabilities_e1_2 = bundleModules["model-capabilities.mjs"].e1, modelCapabilities_e3 = bundleModules["model-capabilities.mjs"].e3, modelCapabilities_eb = bundleModules["model-capabilities.mjs"].eb, modelCapabilities_e9_2 = bundleModules["model-capabilities.mjs"].e9, modelCapabilities_e6_2 = bundleModules["model-capabilities.mjs"].e6, nativeAdapters_ea = bundleModules["native-adapters.mjs"].ea, nativeAdapters_e2_2 = bundleModules["native-adapters.mjs"].e2, numericValue_3 = 1, localValue_6 = Object.freeze({
    openrouter: Object.freeze({
      id: "openrouter",
      label: "OpenRouter",
      kind: "gateway",
      catalogMode: "generic",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["github-copilot-direct"]: Object.freeze({
      id: "github-copilot-direct",
      label: "GitHub Copilot 직접 연결",
      kind: "compatible",
      catalogMode: "copilot",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["google-vertex-native"]: Object.freeze({
      id: "google-vertex-native",
      label: "Google Vertex AI Gemini",
      kind: "official",
      catalogMode: "unsupported",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["google-vertex-chat-completions"]: Object.freeze({
      id: "google-vertex-chat-completions",
      label: "Google Vertex AI OpenAI compatibility",
      kind: "official",
      catalogMode: "unsupported",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["cloudflare-ai-gateway"]: Object.freeze({
      id: "cloudflare-ai-gateway",
      label: "Cloudflare AI Gateway Responses",
      kind: "gateway",
      catalogMode: "unsupported",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "cloudflare",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["cloudflare-ai-gateway-chat"]: Object.freeze({
      id: "cloudflare-ai-gateway-chat",
      label: "Cloudflare AI Gateway Chat",
      kind: "gateway",
      catalogMode: "unsupported",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "cloudflare",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["vercel-ai-gateway"]: Object.freeze({
      id: "vercel-ai-gateway",
      label: "Vercel AI Gateway",
      kind: "gateway",
      catalogMode: "vercel",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["llm-gateway"]: Object.freeze({
      id: "llm-gateway",
      label: "LLM Gateway",
      kind: "gateway",
      catalogMode: "llm-gateway",
      catalogQuery: Object.freeze({
        "mapped": "true",
        exclude_deprecated: "true"
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["openai-official"]: Object.freeze({
      id: "openai-official",
      label: "OpenAI Official",
      kind: "official",
      catalogMode: "openai",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["openai-compatible-responses"]: Object.freeze({
      id: "openai-compatible-responses",
      label: "OpenAI-compatible Responses",
      kind: "compatible",
      catalogMode: "generic",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "user-selected-profile"
    }
    ),
    ["openai-compatible-chat-completions"]: Object.freeze({
      id: "openai-compatible-chat-completions",
      label: "OpenAI-compatible Chat Completions",
      kind: "compatible",
      catalogMode: "generic",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "user-selected-profile"
    }
    ),
    ["github-copilot"]: Object.freeze({
      id: "github-copilot",
      label: "GitHub Copilot",
      kind: "ipc",
      catalogMode: "unsupported",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "ipc",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["anthropic-native"]: Object.freeze({
      id: "anthropic-native",
      label: "Anthropic Messages",
      kind: "official",
      catalogMode: "anthropic",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "anthropic-key",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["google-interactions-native"]: Object.freeze({
      id: "google-interactions-native",
      label: "Google Interactions",
      kind: "official",
      catalogMode: "google",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "google-key",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["google-generate-content-native"]: Object.freeze({
      id: "google-generate-content-native",
      label: "Google generateContent",
      kind: "official",
      catalogMode: "google",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "google-key",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["xai-native"]: Object.freeze({
      id: "xai-native",
      label: "xAI Responses",
      kind: "official",
      catalogMode: "xai",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["deepseek-native"]: Object.freeze({
      id: "deepseek-native",
      label: "DeepSeek Chat",
      kind: "official",
      catalogMode: "deepseek",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["glm-native"]: Object.freeze({
      id: "glm-native",
      label: "GLM Chat",
      kind: "official",
      catalogMode: "glm",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    ),
    ["kimi-native"]: Object.freeze({
      id: "kimi-native",
      label: "Kimi Chat",
      kind: "official",
      catalogMode: "kimi",
      catalogQuery: Object.freeze({
      }
      ),
      authentication: "bearer",
      requestDialectSource: "provider-adapter"
    }
    )
  }
  );
  function helperFunction_13(argument) {
    return typeof (argument) === "string" ? (argument).trim(): "";
  }
  function helperFunction_14(argument, localValue_7 = "", argument_2) {
    const localValue_8 = gatewayProfiles_e1_2(argument), localValue_9 = localValue_6[localValue_8.id];
    if (! localValue_9) throw new TypeError("Unsupported provider adapter profile: " + localValue_8.id + ".");
    void localValue_7;
    const nativeAdapterId = argument_2 || nativeAdapters_ea(localValue_8.id), localValue_10 = nativeAdapters_e2_2(nativeAdapterId);
    return Object.freeze({
      ... localValue_9,
      profileId: localValue_8.id,
      nativeAdapterId: nativeAdapterId,
      requestDialect: localValue_10.requestDialect
    }
    );
  }
  function helperFunction_15(argument, localValue_7 = {
  }
  ) {
    const parsedUrl = new URL(argument);
    for (const [localValue_8, localValue_9] of Object.entries(localValue_7)) localValue_9 !== null && localValue_9 !== null && localValue_9 !== "" && parsedUrl.searchParams.set(localValue_8, (0, String)(localValue_9));
    return parsedUrl.toString();
  }
  function helperFunction_16(argument) {
    return (argument) !== null && (argument) !== null;
  }
  function helperFunction_17(argument) {
    if (argument === true) return "supported";
    if ((argument === false)) return "unsupported";
    return "unknown";
  }
  function helperFunction_18(argument) {
    return Array.isArray(argument) ? [... new Set(argument.map(helperFunction_13).filter(Boolean))]: [];
  }
  function helperFunction_19(argument, argument_2) {
    const localValue_7 = (0, helperFunction_18)((argument)?.supportedParameters), localValue_8 = Array.isArray((argument)?.providerMappings) ? (argument).providerMappings: [];
    return localValue_7.includes((argument_2)) || localValue_8.some((argument_3) => {
      return helperFunction_18((argument_3)?.supportedParameters).includes((argument_2));
    }
    );
  }
  function helperFunction_20(argument, argument_2) {
    if (typeof (argument)?.capabilities?.[(argument_2)] === "boolean") return (argument).capabilities[(argument_2)];
    const localValue_7 = Array.isArray((argument)?.providerMappings) ? (argument).providerMappings: [], localValue_8 = localValue_7.map((argument_3) => {
      return (argument_3)?.capabilities?.[(argument_2)];
    }
    ).filter(argument_3 => {
      return typeof argument_3 === "boolean";
    }
    );
    if (localValue_8.includes(true)) return true;
    if (localValue_8.length > 0 && localValue_8.every(argument_3 => {
      return argument_3 === false;
    }
    )) return false;
    return null;
  }
  function helperFunction_21({
    gatewayProfileId: gatewayProfileId, endpoint: localValue_7, model: model
  }
  = {
  }
  ) {
    const localValue_8 = gatewayProfiles_e1_2(gatewayProfileId), localValue_9 = (0, helperFunction_14)(localValue_8.id, localValue_7), modelId = (0, helperFunction_13)(model?.id), localValue_10 = helperFunction_13(model?.family) || modelCapabilities_e4(modelId), localValue_11 = helperFunction_20(model, "tools"), localValue_12 = helperFunction_20(model, "streaming"), reasoningSupported = (0, helperFunction_20)(model, "reasoning"), localValue_13 = helperFunction_20(model, "implicitCaching"), textOutput = Array.isArray(model?.outputModalities) ? model.outputModalities.length === 0 || model.outputModalities.includes("text"): true, languageModel = ! model?.modelType || (model.modelType === "language"), workflowProfile = (0, modelCapabilities_e6_2)({
      modelId: modelId,
      profile: "auto"
    }
    ), compatibleParameterMode = modelCapabilities_e9_2({
      modelId: modelId,
      configuredMode: "extended",
      gatewayProfileId: localValue_8.id
    }
    ), localValue_14 = (0, helperFunction_18)(model?.serviceTiers), supportedEfforts = (0, modelCapabilities_e3)({
      modelId: modelId,
      supportedEfforts: [... helperFunction_18(model?.reasoningEfforts), ... Array.isArray(model?.providerMappings) ? model.providerMappings.flatMap((argument) => {
        return helperFunction_18((argument)?.reasoningEfforts);
      }
      ): []]
    }
    ), reasoningEffort = modelCapabilities_eb({
      supportedEfforts: supportedEfforts,
      reasoningSupported: reasoningSupported
    }
    ), items = ["" + localValue_9.label + " 연결의 " + localValue_8.requestDialect + " 형식"];
    (0, helperFunction_16)(localValue_11) && items.push((("도구 호출 " + (localValue_11 ? "지원": "미지원")) + " 메타데이터"));
    (localValue_10 !== "unknown") && items.push("" + localValue_10 + " 모델 계열");
    (supportedEfforts.length > 0) && items.push("카탈로그 추론 강도 " + supportedEfforts.join(", "));
    const localValue_15 = modelCapabilities_e1_2(modelId) && (localValue_8.requestDialect === "openai-chat-completions");
    localValue_15 && items.push("GPT-6 Astra 도구 호출에는 Responses 연결이 필요합니다.");
    const maskCompatible = settingsRecord_3.lfVsn(languageModel, textOutput) && (localValue_11 !== false) && ! localValue_15;
    return Object.freeze({
      schemaVersion: 1,
      gatewayProfileId: localValue_8.id,
      requestDialect: localValue_8.requestDialect,
      requestDialectSource: localValue_9.requestDialectSource,
      workflowProfile: workflowProfile,
      pricingTier: model?.pricingTier ?? "auto",
      compatibleParameterMode: compatibleParameterMode,
      reasoningEffort: reasoningEffort,
      supportedReasoningEfforts: Object.freeze(supportedEfforts),
      verbosityMode: helperFunction_19(model, "verbosity") || localValue_10 === "openai" ? "auto": "omit",
      cacheMode: (localValue_13 === true) ? "implicit": (localValue_8.id === "openai-official") ? "explicit": "off",
      serviceTier: localValue_14.includes("flex") ? "flex": "auto",
      maxOutputTokensOverride: Number.isInteger(model?.maxOutputTokens) && model.maxOutputTokens > 0 && model.maxOutputTokens <= 128000 ? model.maxOutputTokens: null,
      eligibility: Object.freeze({
        maskCompatible: maskCompatible,
        languageModel: languageModel,
        "textOutput": textOutput,
        tools: helperFunction_17(localValue_11),
        streaming: (0, helperFunction_17)(localValue_12),
        reasoning: (0, helperFunction_17)(reasoningSupported),
        implicitCaching: helperFunction_17(localValue_13)
      }
      ),
      confidence: localValue_9.kind === "gateway" || localValue_9.kind === "official" ? "authoritative-profile": "selected-compatible-dialect",
      reasons: Object.freeze(items)
    }
    );
  }
  function helperFunction_22() {
    return Object.values(localValue_6).map((argument) => {
      ;
      const settingsRecord_5 = {
        ... (argument)
      }
      ;
      return settingsRecord_5;
    }
    );
  }
  const settingsRecord_4 = {
    e0: helperFunction_14,
    e1: helperFunction_15,
    e2: helperFunction_21,
    e3: helperFunction_22,
    e4: numericValue_3
  }
  ;
  return settingsRecord_4;
}
)();
