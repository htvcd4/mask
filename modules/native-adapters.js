// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["native-adapters.mjs"] = (() => {
  const settingsRecord_3 = {
    "JfLzr": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "WEQiM": function (argument, argument_2) {
      return settingsRecord_2.hSPOJ(argument, argument_2);
    }
    ,
    "jyskg": function (argument, argument_2) {
      return settingsRecord_2.pwvMV(argument, argument_2);
    }
  }
  ;
  ;
  const chatCompletions_e0 = bundleModules["chat-completions.mjs"].e0, chatCompletions_e3 = bundleModules["chat-completions.mjs"].e3, chatCompletions_e2 = bundleModules["chat-completions.mjs"].e2, responsesStream_e3 = bundleModules["responses-stream.mjs"].e3, responsesStream_e2 = bundleModules["responses-stream.mjs"].e2, responsesStream_e0 = bundleModules["responses-stream.mjs"].e0, gatewayProfiles_e7 = bundleModules["gateway-profiles.mjs"].e7, gatewayProfiles_e9 = bundleModules["gateway-profiles.mjs"].e9, gatewayProfiles_e1_2 = bundleModules["gateway-profiles.mjs"].e1, copilotConnection_e3 = bundleModules["copilot-connection.mjs"].e3, modelCapabilities_e1_2 = bundleModules["model-capabilities.mjs"].e1, modelCapabilities_ee = bundleModules["model-capabilities.mjs"].ee, providerParameterCapabilities_e4 = bundleModules["provider-parameter-capabilities.mjs"].e4, providerParameterCapabilities_e3 = bundleModules["provider-parameter-capabilities.mjs"].e3, providerParameterCapabilities_e0 = bundleModules["provider-parameter-capabilities.mjs"].e0, toolChoicePolicy_e4 = bundleModules["tool-choice-policy.mjs"].e4, numericValue_3 = 1, localValue_6 = Object.freeze({
    full: Object.freeze({
      none: "minimal",
      minimal: "minimal",
      low: "low",
      medium: "medium",
      high: "high",
      xhigh: "high",
      max: "high"
    }
    ),
    lowMediumHigh: Object.freeze({
      none: "low",
      minimal: "low",
      low: "low",
      medium: "medium",
      high: "high",
      xhigh: "high",
      max: "high"
    }
    ),
    lowHigh: Object.freeze({
      none: "low",
      minimal: "low",
      low: "low",
      medium: "high",
      high: "high",
      xhigh: "high",
      max: "high"
    }
    ),
    minimalHigh: Object.freeze({
      none: "minimal",
      minimal: "minimal",
      low: "minimal",
      medium: "high",
      high: "high",
      xhigh: "high",
      max: "high"
    }
    )
  }
  );
  function helperFunction_13(argument, label, argument_2, reasoningEffortMap) {
    return Object.freeze({
      id: (argument),
      label: (label),
      thinkingMode: "level",
      reasoningEffortValues: Object.freeze([... (argument_2)]),
      reasoningEffortMap: (reasoningEffortMap),
      defaultReasoningEffort: "high"
    }
    );
  }
  const localValue_7 = Object.freeze({
    ["google-vertex-chat"]: Object.freeze({
      defaultId: "vertex-openai",
      entries: Object.freeze({
        ["vertex-openai"]: Object.freeze({
          id: "vertex-openai",
          label: "Vertex OpenAI compatibility",
          supportsDeveloperRole: false,
          tokenLimitField: "max_tokens",
          reasoningEffortValues: Object.freeze(["low", "medium", "high"]),
          reasoningEffortMap: localValue_6.lowMediumHigh,
          defaultReasoningEffort: "high"
        }
        )
      }
      )
    }
    ),
    ["anthropic-messages"]: Object.freeze({
      defaultId: "anthropic-conservative",
      entries: Object.freeze({
        ["anthropic-conservative"]: Object.freeze({
          id: "anthropic-conservative",
          label: "Anthropic conservative (no thinking fields)",
          thinkingMode: "none"
        }
        ),
        ["anthropic-manual"]: Object.freeze({
          id: "anthropic-manual",
          label: "Anthropic legacy manual thinking",
          thinkingMode: "manual"
        }
        ),
        ["anthropic-adaptive"]: Object.freeze({
          id: "anthropic-adaptive",
          label: "Anthropic adaptive thinking",
          thinkingMode: "adaptive",
          supportsThinkingDisabled: true
        }
        ),
        ["anthropic-adaptive-always-on"]: Object.freeze({
          id: "anthropic-adaptive-always-on",
          label: "Anthropic adaptive thinking (always on)",
          thinkingMode: "adaptive",
          supportsThinkingDisabled: false
        }
        )
      }
      )
    }
    ),
    ["google-interactions"]: Object.freeze({
      defaultId: "google-interactions-conservative",
      entries: Object.freeze({
        ["google-interactions-conservative"]: Object.freeze({
          id: "google-interactions-conservative",
          label: "Google Interactions conservative",
          thinkingMode: "none"
        }
        ),
        ["google-interactions-level"]: Object.freeze({
          ... (0, helperFunction_13)("google-interactions-level", "Google Interactions thinking level (full)", ["minimal", "low", "medium", "high"], localValue_6.full)
        }
        ),
        ["google-interactions-level-low-medium-high"]: helperFunction_13("google-interactions-level-low-medium-high", "Google Interactions thinking level (low/medium/high)", ["low", "medium", "high"], localValue_6.lowMediumHigh),
        ["google-interactions-level-low-high"]: helperFunction_13("google-interactions-level-low-high", "Google Interactions thinking level (low/high)", ["low", "high"], localValue_6.lowHigh),
        ["google-interactions-level-minimal-high"]: helperFunction_13("google-interactions-level-minimal-high", "Google Interactions thinking level (minimal/high)", ["minimal", "high"], localValue_6.minimalHigh)
      }
      )
    }
    ),
    ["google-generate-content"]: Object.freeze({
      defaultId: "google-generate-conservative",
      entries: Object.freeze({
        ["google-generate-conservative"]: Object.freeze({
          id: "google-generate-conservative",
          label: "Google generateContent conservative",
          thinkingMode: "none"
        }
        ),
        ["google-generate-level"]: Object.freeze({
          ... (0, helperFunction_13)("google-generate-level", "Google generateContent thinking level (full)", ["minimal", "low", "medium", "high"], localValue_6.full)
        }
        ),
        ["google-generate-level-low-medium-high"]: (0, helperFunction_13)("google-generate-level-low-medium-high", "Google generateContent thinking level (low/medium/high)", ["low", "medium", "high"], localValue_6.lowMediumHigh),
        "google-generate-level-low-high": helperFunction_13("google-generate-level-low-high", "Google generateContent thinking level (low/high)", ["low", "high"], localValue_6.lowHigh),
        ["google-generate-level-minimal-high"]: helperFunction_13("google-generate-level-minimal-high", "Google generateContent thinking level (minimal/high)", ["minimal", "high"], localValue_6.minimalHigh),
        ["google-generate-budget"]: Object.freeze({
          id: "google-generate-budget",
          label: "Google generateContent thinking budget",
          thinkingMode: "budget",
          supportsThinkingDisabled: true
        }
        ),
        ["google-generate-budget-always-on"]: Object.freeze({
          id: "google-generate-budget-always-on",
          label: "Google generateContent thinking budget (always on)",
          thinkingMode: "budget",
          supportsThinkingDisabled: false
        }
        )
      }
      )
    }
    ),
    ["deepseek-chat"]: Object.freeze({
      defaultId: "deepseek-v4",
      entries: Object.freeze({
        ["deepseek-v4"]: Object.freeze({
          id: "deepseek-v4",
          label: "DeepSeek V4",
          tokenLimitField: "max_tokens",
          supportsDeveloperRole: false,
          supportsToolChoice: false,
          requiresReasoningContentForToolCalls: true,
          requiresAssistantContentForToolCalls: true
        }
        )
      }
      )
    }
    ),
    ["glm-chat"]: Object.freeze({
      defaultId: "glm-standard",
      entries: Object.freeze({
        ["glm-standard"]: Object.freeze({
          id: "glm-standard",
          label: "GLM standard",
          tokenLimitField: "max_tokens",
          toolChoiceMode: "auto-only",
          supportsReasoningEffort: false
        }
        ),
        ["glm-5.2"]: Object.freeze({
          id: "glm-5.2",
          label: "GLM 5.2",
          tokenLimitField: "max_tokens",
          toolChoiceMode: "auto-only",
          supportsReasoningEffort: true,
          reasoningEffortValues: Object.freeze(["max", "xhigh", "high", "medium", "low", "minimal", "none"]),
          defaultReasoningEffort: "high"
        }
        )
      }
      )
    }
    ),
    ["kimi-chat"]: Object.freeze({
      defaultId: "kimi-k2.5",
      entries: Object.freeze({
        ["kimi-k2.5"]: Object.freeze({
          id: "kimi-k2.5",
          label: "Kimi K2.5",
          tokenLimitField: "max_completion_tokens",
          thinkingSwitch: true,
          suppressSampling: true
        }
        ),
        ["kimi-k2.6-preserved"]: Object.freeze({
          id: "kimi-k2.6-preserved",
          label: "Kimi K2.6 preserved thinking",
          tokenLimitField: "max_completion_tokens",
          thinkingSwitch: true,
          preserveThinking: true,
          suppressSampling: true
        }
        ),
        ["kimi-k2.7-code"]: Object.freeze({
          id: "kimi-k2.7-code",
          label: "Kimi K2.7 Code",
          tokenLimitField: "max_completion_tokens",
          thinkingAlwaysOn: true,
          preserveThinking: true,
          suppressSampling: true
        }
        ),
        ["kimi-k3"]: Object.freeze({
          id: "kimi-k3",
          label: "Kimi K3",
          tokenLimitField: "max_completion_tokens",
          supportsReasoningEffort: true,
          reasoningEffortValues: Object.freeze(["low", "high", "max"]),
          reasoningEffortMap: Object.freeze({
            none: "low",
            minimal: "low",
            low: "low",
            medium: "high",
            high: "high",
            xhigh: "max",
            max: "max"
          }
          ),
          defaultReasoningEffort: "high"
        }
        )
      }
      )
    }
    )
  }
  ), localValue_8 = Object.freeze({
    ["anthropic-messages"]: Object.freeze({
      ["claude-opus-4-5"]: "anthropic-manual",
      ["claude-opus-4-5-20251101"]: "anthropic-manual",
      ["claude-sonnet-4-5"]: "anthropic-manual",
      ["claude-sonnet-4-5-20250929"]: "anthropic-manual",
      ["claude-haiku-4-5"]: "anthropic-manual",
      ["claude-haiku-4-5-20251001"]: "anthropic-manual",
      ["claude-opus-4-6"]: "anthropic-adaptive",
      ["claude-sonnet-4-6"]: "anthropic-adaptive",
      ["claude-opus-4-7"]: "anthropic-adaptive",
      ["claude-opus-4-8"]: "anthropic-adaptive",
      ["claude-opus-5"]: "anthropic-adaptive",
      ["claude-sonnet-5"]: "anthropic-adaptive",
      ["claude-mythos-preview"]: "anthropic-adaptive-always-on",
      ["claude-fable-5"]: "anthropic-adaptive-always-on",
      ["claude-mythos-5"]: "anthropic-adaptive-always-on"
    }
    ),
    ["google-interactions"]: Object.freeze({
      ["gemini-2.5-pro"]: "google-interactions-level-low-medium-high",
      ["gemini-2.5-flash"]: "google-interactions-level-low-medium-high",
      ["gemini-2.5-flash-lite"]: "google-interactions-level-low-medium-high",
      ["gemini-3-pro-preview"]: "google-interactions-level-low-high",
      ["gemini-3-flash-preview"]: "google-interactions-level",
      ["gemini-3.1-pro-preview"]: "google-interactions-level-low-medium-high",
      ["gemini-3.1-flash-lite-image"]: "google-interactions-level-minimal-high",
      ["gemini-3.5-flash"]: "google-interactions-level",
      ["gemini-3.7-flash"]: "google-interactions-level-low-medium-high"
    }
    ),
    ["google-generate-content"]: Object.freeze({
      ["gemini-2.5-pro"]: "google-generate-budget-always-on",
      ["gemini-2.5-flash"]: "google-generate-budget",
      ["gemini-2.5-flash-lite"]: "google-generate-budget",
      ["gemini-3-pro-preview"]: "google-generate-level-low-high",
      ["gemini-3-flash-preview"]: "google-generate-level",
      ["gemini-3.1-pro-preview"]: "google-generate-level-low-medium-high",
      ["gemini-3.1-flash-lite-image"]: "google-generate-level-minimal-high",
      ["gemini-3.5-flash"]: "google-generate-level",
      ["gemini-3.7-flash"]: "google-generate-level-low-medium-high"
    }
    ),
    ["glm-chat"]: Object.freeze({
      ["glm-5.2"]: "glm-5.2"
    }
    ),
    ["kimi-chat"]: Object.freeze({
      ["kimi-k2.6"]: "kimi-k2.6-preserved",
      ["kimi-k2.6-highspeed"]: "kimi-k2.6-preserved",
      ["kimi-k2.7-code"]: "kimi-k2.7-code",
      "kimi-k2.7-code-highspeed": "kimi-k2.7-code",
      ["kimi-k3"]: "kimi-k3"
    }
    )
  }
  ), localValue_9 = Object.freeze({
    ["google-vertex"]: Object.freeze({
      id: "google-vertex",
      label: "Vertex Gemini generateContent",
      requestDialect: "google-generate-content",
      contractAdapterId: "google-generate-content",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["google-vertex-native"])
    }
    ),
    ["google-vertex-chat"]: Object.freeze({
      id: "google-vertex-chat",
      label: "Vertex OpenAI-compatible Chat",
      requestDialect: "chat-completions",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["google-vertex-chat-completions"])
    }
    ),
    ["cloudflare-responses"]: Object.freeze({
      id: "cloudflare-responses",
      label: "Cloudflare Responses",
      requestDialect: "responses",
      authentication: "cloudflare",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["cloudflare-ai-gateway"])
    }
    ),
    ["cloudflare-chat"]: Object.freeze({
      id: "cloudflare-chat",
      label: "Cloudflare Chat Completions",
      requestDialect: "chat-completions",
      authentication: "cloudflare",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["cloudflare-ai-gateway-chat"])
    }
    ),
    ["cloudflare-gemini-run"]: Object.freeze({
      id: "cloudflare-gemini-run",
      label: "Cloudflare Gemini native run",
      requestDialect: "cloudflare-gemini-run",
      contractAdapterId: "google-generate-content",
      authentication: "cloudflare",
      backgroundResponses: false,
      internal: true,
      gatewayProfileIds: Object.freeze(["cloudflare-ai-gateway"])
    }
    ),
    ["vercel-openresponses"]: Object.freeze({
      id: "vercel-openresponses",
      label: "Vercel OpenResponses",
      requestDialect: "responses",
      authentication: "bearer",
      backgroundResponses: true,
      gatewayProfileIds: Object.freeze(["vercel-ai-gateway"])
    }
    ),
    ["llm-gateway"]: Object.freeze({
      id: "llm-gateway",
      label: "LLM Gateway",
      requestDialect: "responses",
      authentication: "bearer",
      backgroundResponses: true,
      gatewayProfileIds: Object.freeze(["llm-gateway"])
    }
    ),
    ["openai-responses"]: Object.freeze({
      id: "openai-responses",
      label: "OpenAI Responses",
      requestDialect: "responses",
      authentication: "bearer",
      backgroundResponses: true,
      gatewayProfileIds: Object.freeze(["openai-official", "openai-compatible-responses"])
    }
    ),
    ["openai-chat-completions"]: Object.freeze({
      id: "openai-chat-completions",
      label: "OpenAI Chat Completions",
      requestDialect: "chat-completions",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["openai-compatible-chat-completions"])
    }
    ),
    ["anthropic-messages"]: Object.freeze({
      id: "anthropic-messages",
      label: "Anthropic Messages",
      requestDialect: "anthropic-messages",
      authentication: "anthropic-key",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["anthropic-native"])
    }
    ),
    ["google-interactions"]: Object.freeze({
      id: "google-interactions",
      label: "Google Interactions",
      requestDialect: "google-interactions",
      authentication: "google-key",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["google-interactions-native"])
    }
    ),
    ["google-generate-content"]: Object.freeze({
      id: "google-generate-content",
      label: "Google generateContent",
      requestDialect: "google-generate-content",
      authentication: "google-key",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["google-generate-content-native"])
    }
    ),
    ["xai-responses"]: Object.freeze({
      id: "xai-responses",
      label: "xAI Responses",
      requestDialect: "responses",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["xai-native"])
    }
    ),
    ["deepseek-chat"]: Object.freeze({
      id: "deepseek-chat",
      label: "DeepSeek Chat",
      requestDialect: "chat-completions",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["deepseek-native"])
    }
    ),
    ["glm-chat"]: Object.freeze({
      id: "glm-chat",
      label: "GLM Chat",
      requestDialect: "chat-completions",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["glm-native"])
    }
    ),
    ["kimi-chat"]: Object.freeze({
      id: "kimi-chat",
      label: "Kimi Chat",
      requestDialect: "chat-completions",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["kimi-native"])
    }
    ),
    ["openrouter-chat"]: Object.freeze({
      id: "openrouter-chat",
      label: "OpenRouter Chat Completions",
      requestDialect: "chat-completions",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["openrouter"])
    }
    ),
    ["copilot-responses"]: Object.freeze({
      id: "copilot-responses",
      label: "Copilot Responses",
      requestDialect: "responses",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["github-copilot-direct"])
    }
    ),
    ["copilot-chat"]: Object.freeze({
      id: "copilot-chat",
      label: "Copilot Chat Completions",
      requestDialect: "chat-completions",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["github-copilot-direct"])
    }
    ),
    ["copilot-anthropic"]: Object.freeze({
      id: "copilot-anthropic",
      label: "Copilot Anthropic Messages",
      requestDialect: "anthropic-messages",
      contractAdapterId: "anthropic-messages",
      authentication: "bearer",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["github-copilot-direct"])
    }
    ),
    ["copilot-manager"]: Object.freeze({
      id: "copilot-manager",
      label: "GitHub Copilot Manager",
      requestDialect: "copilot-manager",
      authentication: "ipc",
      backgroundResponses: false,
      gatewayProfileIds: Object.freeze(["github-copilot"])
    }
    )
  }
  ), localValue_10 = Object.freeze({
    openrouter: "openrouter-chat",
    ["github-copilot-direct"]: "copilot-chat",
    ["google-vertex-native"]: "google-vertex",
    ["google-vertex-chat-completions"]: "google-vertex-chat",
    ["cloudflare-ai-gateway"]: "cloudflare-responses",
    ["cloudflare-ai-gateway-chat"]: "cloudflare-chat",
    ["vercel-ai-gateway"]: "vercel-openresponses",
    ["llm-gateway"]: "llm-gateway",
    ["openai-official"]: "openai-responses",
    ["openai-compatible-responses"]: "openai-responses",
    ["openai-compatible-chat-completions"]: "openai-chat-completions",
    ["anthropic-native"]: "anthropic-messages",
    ["google-interactions-native"]: "google-interactions",
    ["google-generate-content-native"]: "google-generate-content",
    ["xai-native"]: "xai-responses",
    ["deepseek-native"]: "deepseek-chat",
    ["glm-native"]: "glm-chat",
    ["kimi-native"]: "kimi-chat",
    ["github-copilot"]: "copilot-manager"
  }
  ), localValue_11 = Object.freeze({
    ["google-vertex-native"]: Object.freeze({
      adapterId: "google-vertex",
      kind: "google-generate-search",
      description: "Vertex Gemini의 Google Search grounding을 허용합니다."
    }
    ),
    ["cloudflare-ai-gateway"]: Object.freeze({
      adapterId: "cloudflare-responses",
      kind: "responses-web-search",
      description: "Cloudflare Responses 경로에 호스팅 web_search를 전달합니다. 선택한 상위 모델이 지원해야 합니다."
    }
    ),
    ["vercel-ai-gateway"]: Object.freeze({
      adapterId: "vercel-openresponses",
      kind: "responses-web-search",
      description: "OpenAI 또는 xAI 공급자로 고정된 Vercel Responses 경로에 web_search를 전달합니다."
    }
    ),
    ["llm-gateway"]: Object.freeze({
      adapterId: "llm-gateway",
      kind: "responses-web-search",
      description: "LLM Gateway의 Responses 호환 경로에 web_search를 전달합니다."
    }
    ),
    ["openai-official"]: Object.freeze({
      adapterId: "openai-responses",
      kind: "responses-web-search",
      description: "OpenAI Responses의 호스팅 web_search를 허용합니다."
    }
    ),
    ["openai-compatible-responses"]: Object.freeze({
      adapterId: "openai-responses",
      kind: "responses-web-search",
      description: "호환 Responses 서버에 web_search를 전달합니다. 서버와 모델이 지원해야 합니다."
    }
    ),
    ["anthropic-native"]: Object.freeze({
      adapterId: "anthropic-messages",
      kind: "anthropic-web-search",
      description: "Anthropic Messages의 서버측 Web Search를 허용합니다."
    }
    ),
    ["google-interactions-native"]: Object.freeze({
      adapterId: "google-interactions",
      kind: "google-interactions-search",
      description: "Google Interactions의 google_search를 허용합니다."
    }
    ),
    ["google-generate-content-native"]: Object.freeze({
      adapterId: "google-generate-content",
      kind: "google-generate-search",
      description: "Gemini generateContent의 Google Search grounding을 허용합니다."
    }
    ),
    ["xai-native"]: Object.freeze({
      adapterId: "xai-responses",
      kind: "responses-web-search",
      description: "xAI Responses의 서버측 web_search를 허용합니다."
    }
    ),
    ["glm-native"]: Object.freeze({
      adapterId: "glm-chat",
      kind: "glm-web-search",
      description: "GLM Chat의 서버측 Web Search를 허용합니다."
    }
    )
  }
  );
  function helperFunction_14(argument) {
    return ((argument) !== null) && ((typeof (argument)) === "object") && ! Array.isArray((argument));
  }
  function helperFunction_15(argument) {
    return ((typeof argument) === "string") ? argument.trim(): "";
  }
  function helperFunction_16(argument) {
    if (typeof (argument) === "string") return (argument);
    return JSON.stringify((argument) ?? {
    }
    );
  }
  function helperFunction_17(argument) {
    ;
    if (typeof (argument) === "string") return (argument);
    if (! Array.isArray((argument))) return "";
    return (argument).filter(argument_2 => {
      return ["text", "input_text", "output_text"].includes(argument_2?.type);
    }
    ).map((argument_2) => {
      return ((typeof (argument_2).text) === ("string")) ? (argument_2).text: "";
    }
    ).join("");
  }
  function helperFunction_18({
    input: input = 0, output: output = 0, cached: cached = 0, cacheWrite: cacheWrite = 0, reasoning: reasoning = 0, total: total
  }
  = {
  }
  ) {
    return {
      input_tokens: Number.isInteger(input) && input >= 0 ? input: 0,
      input_tokens_details: {
        cached_tokens: Number.isInteger(cached) && (cached >= 0) ? cached: 0,
        cache_write_tokens: Number.isInteger(cacheWrite) && cacheWrite >= 0 ? cacheWrite: 0
      }
      ,
      output_tokens: Number.isInteger(output) && output >= 0 ? output: 0,
      output_tokens_details: {
        reasoning_tokens: Number.isInteger(reasoning) && reasoning >= 0 ? reasoning: 0
      }
      ,
      total_tokens: Number.isInteger(total) && (total >= 0) ? total: (Number.isInteger(input) ? input: 0) + (Number.isInteger(output) ? output: 0)
    }
    ;
  }
  function helperFunction_19({
    text: text = "", reasoningText: reasoningText = "", reasoningSummary: reasoningSummary = "", calls: calls = [], usage: usage, status: status = "completed", incompleteReason: incompleteReason, providerMetadata: providerMetadata, providerOutput: providerOutput, responseId: responseId, terminalEventReceived: terminalEventReceived = true, transportEventCount: transportEventCount = 1
  }
  = {
  }
  ) {
    const toolCalls = calls.map((argument) => {
      return {
        id: helperFunction_15((argument).id) || (0, helperFunction_15)((argument).call_id),
        name: helperFunction_15((argument).name),
        arguments: helperFunction_16((argument).arguments ?? (argument).input)
      }
      ;
    }
    ), outputItems = [];
    (text.length > 0 || reasoningText.length > 0 || (providerOutput !== null)) && outputItems.push({
      type: "message",
      role: "assistant",
      content: text.length > 0 ? [{
        type: "output_text",
        text: text
      }
      ]: [],
      ... reasoningText.length > 0 ? {
        reasoning_content: reasoningText
      }
      : {
      }
      ,
      ... providerOutput === null ? {
      }
      : {
        provider_output: providerOutput
      }
    }
    );
    for (const localValue_12 of toolCalls) outputItems.push({
      type: "function_call",
      call_id: localValue_12.id,
      name: localValue_12.name,
      arguments: localValue_12.arguments,
      status: "completed"
    }
    );
    return {
      text: text,
      reasoningSummary: reasoningSummary,
      reasoningText: reasoningText,
      toolCalls: toolCalls,
      usage: usage,
      status: status,
      incompleteDetails: (status === "incomplete") && incompleteReason ? {
        reason: incompleteReason
      }
      : null,
      terminalEventReceived: terminalEventReceived,
      outputItems: outputItems,
      providerMetadata: providerMetadata,
      responseId: responseId,
      transportEventCount: transportEventCount
    }
    ;
  }
  function helperFunction_20() {
    return Object.values(localValue_9).filter((argument) => {
      return (argument).internal !== true;
    }
    ).map((argument) => {
      ;
      const settingsRecord_5 = {
        ... (argument)
      }
      ;
      return settingsRecord_5;
    }
    );
  }
  function helperFunction_21() {
    return Object.entries(localValue_11).map(([gatewayProfileId, localValue_12]) => {
      return {
        gatewayProfileId: gatewayProfileId,
        gatewayLabel: gatewayProfiles_e1_2(gatewayProfileId).label,
        ... localValue_12
      }
      ;
    }
    );
  }
  function helperFunction_22(argument) {
    const localValue_12 = (0, helperFunction_15)(argument), dx = localValue_9[localValue_12];
    if (! dx) throw new TypeError(("Unknown native adapter: " + (localValue_12 || "(empty)")) + ".");
    return dx;
  }
  function helperFunction_23(argument) {
    const localValue_12 = helperFunction_22(argument), localValue_13 = localValue_7[localValue_12.contractAdapterId ?? argument];
    return localValue_13 ? Object.values(localValue_13.entries).map((argument_2) => {
      ;
      const settingsRecord_5 = {
        ... (argument_2)
      }
      ;
      return settingsRecord_5;
    }
    ): [];
  }
  function helperFunction_24(argument) {
    ;
    const localValue_12 = helperFunction_22((argument));
    return localValue_7[localValue_12.contractAdapterId ?? (argument)]?.defaultId ?? "";
  }
  function helperFunction_25(argument, argument_2) {
    const localValue_12 = (0, helperFunction_22)(argument), localValue_13 = localValue_7[localValue_12.contractAdapterId ?? argument];
    if (! localValue_13) return null;
    const localValue_14 = helperFunction_15(argument_2) || localValue_13.defaultId, dJ = localValue_13.entries[localValue_14];
    if (! dJ) throw new TypeError("Unknown native adapter contract for " + argument + ": " + localValue_14 + ".");
    return dJ;
  }
  function helperFunction_26(argument, argument_2) {
    ;
    const localValue_12 = (0, helperFunction_25)((argument), (argument_2));
    return localValue_12?.id ?? "";
  }
  function helperFunction_27(argument, argument_2, argument_3) {
    ;
    const localValue_12 = (0, helperFunction_25)((argument), (argument_2)), localValue_13 = helperFunction_15((argument_3));
    if (! localValue_12 || ! Array.isArray(localValue_12.reasoningEffortValues)) return localValue_13;
    const localValue_14 = localValue_12.reasoningEffortMap?.[localValue_13] ?? localValue_13;
    if (localValue_12.reasoningEffortValues.includes(localValue_14)) return localValue_14;
    if (localValue_12.reasoningEffortValues.includes(localValue_12.defaultReasoningEffort)) return localValue_12.defaultReasoningEffort;
    return localValue_12.reasoningEffortValues.at((((((((- 1)))))))) ?? localValue_13;
  }
  function helperFunction_28(argument, argument_2) {
    ;
    const localValue_12 = helperFunction_15((argument)), localValue_13 = helperFunction_22(localValue_12).contractAdapterId ?? localValue_12, localValue_14 = helperFunction_15((argument_2)).toLowerCase();
    return helperFunction_26(localValue_12, localValue_8[localValue_13]?.[localValue_14] ?? helperFunction_24(localValue_12));
  }
  function helperFunction_29({
    gatewayProfileId: gatewayProfileId, adapterId: adapterId, modelId: modelId, endpoint: localValue_12
  }
  = {
  }
  ) {
    const localValue_13 = (0, helperFunction_15)(gatewayProfileId), adapterId_2 = (0, helperFunction_15)(adapterId), localValue_14 = helperFunction_15(modelId).toLowerCase(), localValue_15 = new RegExp("(?:^|\\/)gemini-[a-z0-9._-]+$", "").test(localValue_14) && (localValue_14.startsWith("google/") || localValue_14.startsWith("gemini-"));
    if (localValue_13 !== "cloudflare-ai-gateway" || adapterId_2 !== "cloudflare-responses" || ! localValue_15) return Object.freeze({
      adapterId: adapterId_2,
      endpoint: helperFunction_15(localValue_12),
      gatewayId: "",
      rerouted: false
    }
    );
    const localValue_16 = helperFunction_15(localValue_12);
    let localValue_17 = localValue_16, gatewayId = "", localValue_18;
    try {
      localValue_18 = new URL(localValue_16);
    }
    catch {
      localValue_18 = null;
    }
    if (localValue_18?.hostname === "api.cloudflare.com" && new RegExp("\\/client\\/v4\\/accounts\\/[^/]+\\/ai\\/(?:v1\\/(?:responses|chat\\/completions)|run)$", "").test(localValue_18.pathname)) void (localValue_18.pathname = localValue_18.pathname.replace(new RegExp("\\/ai\\/(?:v1\\/(?:responses|chat\\/completions)|run)$", ""), "/ai/run"), localValue_18.search = "", localValue_17 = localValue_18.toString());
    else {
      if (((localValue_18?.hostname) === "gateway.ai.cloudflare.com")) {
        const localValue_19 = new RegExp("^\\/v1\\/([^/]+)\\/([^/]+)\\/", "").exec(localValue_18.pathname);
        if (! localValue_19) {
          const localValue_22 = new TypeError("Cloudflare Gemini native run could not derive account and gateway identifiers from the configured AI Gateway endpoint.");
          localValue_22.code = "cloudflare_gemini_run_endpoint_unsupported";
          throw localValue_22;
        }
        const [, localValue_20, localValue_21] = localValue_19;
        void (gatewayId = decodeURIComponent(localValue_21), localValue_17 = "https://api.cloudflare.com/client/v4/accounts/" + encodeURIComponent(decodeURIComponent(localValue_20)) + "/ai/run");
      }
      else {
        if (! new RegExp("\\/ai\\/run(?:\\?.*)?$", "").test(localValue_16)) {
          const localValue_19 = new TypeError("Cloudflare Gemini partner models require the native /ai/run endpoint.");
          localValue_19.code = "cloudflare_gemini_run_endpoint_unsupported";
          throw localValue_19;
        }
      }
    }
    return Object.freeze({
      adapterId: "cloudflare-gemini-run",
      endpoint: localValue_17,
      gatewayId: gatewayId,
      rerouted: true
    }
    );
  }
  function helperFunction_30(argument) {
    ;
    const localValue_12 = gatewayProfiles_e1_2((argument)), localValue_13 = localValue_10[localValue_12.id];
    if (! localValue_13) throw new TypeError(("Gateway profile " + localValue_12.id) + " has no native adapter.");
    return localValue_13;
  }
  function helperFunction_31({
    options: options, dialect: dialect, modelId: modelId, modelMetadata: modelMetadata, endpoint: localValue_12
  }
  = {
  }
  ) {
    return copilotConnection_e3({
      options: options,
      dialect: dialect,
      modelId: modelId,
      modelMetadata: modelMetadata,
      endpoint: localValue_12
    }
    ).nativeAdapterId;
  }
  function helperFunction_32(argument, argument_2) {
    ;
    const localValue_12 = helperFunction_22((argument)), localValue_13 = (0, gatewayProfiles_e1_2)((argument_2));
    return localValue_12.gatewayProfileIds.includes(localValue_13.id);
  }
  function helperFunction_33(argument, argument_2) {
    ;
    const localValue_12 = helperFunction_15((argument)) || helperFunction_30((argument_2)), localValue_13 = (argument_2) === "cloudflare-ai-gateway" && (localValue_12 === "cloudflare-gemini-chat" || (localValue_12 === "cloudflare-gemini-run")) ? "cloudflare-responses": localValue_12;
    return helperFunction_22(localValue_13), localValue_13;
  }
  function helperFunction_34(argument) {
    if (typeof (argument) === "string") return (argument);
    if ((0, helperFunction_14)((argument)) && (argument).type === "function" && typeof (argument).name === "string") return {
      type: "function",
      name: (argument).name
    }
    ;
    if ((0, helperFunction_14)((argument)) && ((argument).type === "function") && (0, helperFunction_14)((argument).function) && typeof (argument).function.name === "string") {
      const settingsRecord_5 = {
        type: "function",
        name: (argument).function.name
      }
      ;
      return settingsRecord_5;
    }
    return "auto";
  }
  function helperFunction_35(... argumentState) {
    const items = [], rest = [], items_2 = [];
    void (argumentState.a = true, argumentState[2] = false);
    const helperFunction_78 = () => {
      if (! items_2.length) return;
      void (rest.push({
        type: "message",
        role: "user",
        content: [{
          type: "input_text",
          text: ("<system_note>\n" + items_2.join("\n\n")) + "\n</system_note>"
        }
        ]
      }
      ), items_2.length = 0);
    }
    ;
    for (const localValue_12 of Array.isArray(argumentState[0]) ? argumentState[0]: []) if (localValue_12?.type === "message" && ["developer", "system"].includes(localValue_12.role)) {
      const localValue_13 = helperFunction_17(localValue_12.content);
      localValue_13 && (argumentState.a || argumentState[2] ? items.push(localValue_13): items_2.push(localValue_13));
    }
    else void (helperFunction_78(), argumentState.a = false), (localValue_12?.type === "function_call" || localValue_12?.type === "function_call_output") && (argumentState[2] = true), rest.push(localValue_12);
    return helperFunction_78(), {
      system: items.join("\n\n"),
      rest: rest
    }
    ;
  }
  function helperFunction_36(argument) {
    return helperFunction_14(argument?.prompt_cache_breakpoint);
  }
  function helperFunction_37(argument) {
    const settingsRecord_5 = {
      "PDOmm": function (argument_2, argument_3) {
        return (0, argument_2)(argument_3);
      }
      ,
      "aMXjn": function (argument_2, argument_3) {
        return argument_2 + argument_3;
      }
      ,
      "UNJPX": function (argument_2, argument_3) {
        return argument_2 + argument_3;
      }
    }
    ;
    if (! Array.isArray(argument)) return argument;
    return argument.map((argument_2) => {
      ;
      if (! helperFunction_14((argument_2)) || (argument_2).type !== "message" || ! Array.isArray((argument_2).content)) return (argument_2);
      return {
        ... (argument_2),
        content: (argument_2).content.map(argument_3 => {
          if (! settingsRecord_5.PDOmm(helperFunction_14, argument_3)) return argument_3;
          const {
            [settingsRecord_5.aMXjn("prompt_cache_break", "point")]: localValue_12, [settingsRecord_5.UNJPX("cache_contro", "l")]: localValue_13, ... argumentState
          }
          = argument_3;
          return void (void localValue_12, void localValue_13), argumentState;
        }
        )
      }
      ;
    }
    );
  }
  function helperFunction_38(argument, argument_2) {
    void 0;
    const settingsRecord_5 = {
      ... (argument)
    }
    , localValue_12 = settingsRecord_5, localValue_13 = (argument_2)?.fields?.cache?.mapping ?? "omit";
    localValue_13 === "service-managed" ? void (delete localValue_12.prompt_cache_key, delete localValue_12.prompt_cache_options, localValue_12.input = helperFunction_37(localValue_12.input)): ["key-only-affinity", "key-only-hint", "openrouter-key-only-cache"].includes(localValue_13) && void (delete localValue_12.prompt_cache_options, localValue_12.input = helperFunction_37(localValue_12.input));
    (argument_2)?.fields?.serviceTier?.support === "unsupported" && delete localValue_12.service_tier;
    if ((((argument_2)?.fields?.verbosity?.support) === "unsupported") && helperFunction_14(localValue_12.text)) {
      const {
        [settingsRecord_3.JfLzr("verbos", "ity")]: localValue_14, ... argumentState
      }
      = localValue_12.text;
      void (void localValue_14, Object.keys(argumentState).length > 0 ? localValue_12.text = argumentState: delete localValue_12.text);
    }
    (argument_2)?.fields?.truncation?.support === "unsupported" && delete localValue_12.truncation;
    (argument_2)?.fields?.sampling?.support === "unsupported" && (void (delete localValue_12.temperature, delete localValue_12.top_p, delete localValue_12.top_logprobs, delete localValue_12.logprobs), Array.isArray(localValue_12.include) && (localValue_12.include = localValue_12.include.filter(argument_3 => {
      return argument_3 !== ("message.output_text.logprobs");
    }
    )));
    if (helperFunction_14(localValue_12.reasoning)) {
      const settingsRecord_6 = {
        ... localValue_12.reasoning
      }
      , localValue_14 = settingsRecord_6;
      (((argument_2)?.fields?.reasoningEffort?.support) === "unsupported") && delete localValue_14.effort;
      (((argument_2)?.fields?.reasoningSummary?.support) === "unsupported") && delete localValue_14.summary;
      (((argument_2)?.fields?.reasoningMode?.support) === "unsupported") && delete localValue_14.mode;
      (((argument_2)?.fields?.reasoningContext?.support) === "unsupported") && delete localValue_14.context;
      if (localValue_14.effort !== null) {
        const localValue_15 = providerParameterCapabilities_e3((argument_2), "reasoningEffort", localValue_14.effort);
        localValue_15 === null ? delete localValue_14.effort: localValue_14.effort = localValue_15;
      }
      if (localValue_14.summary !== null && (argument_2)?.fields?.reasoningSummary?.mapping === "reasoning.summary") {
        const localValue_15 = providerParameterCapabilities_e3((argument_2), "reasoningSummary", localValue_14.summary);
        localValue_15 === null ? delete localValue_14.summary: localValue_14.summary = localValue_15;
      }
      localValue_12.reasoning = localValue_14;
    }
    return helperFunction_14(localValue_12.reasoning) && (Object.keys(localValue_12.reasoning).length === 0) && delete localValue_12.reasoning, localValue_12;
  }
  function helperFunction_39(text) {
    if (typeof text === "string") return text.length > 0 ? [{
      type: "text",
      text: text
    }
    ]: [];
    if (! Array.isArray(text)) return [];
    const items = [];
    for (const localValue_12 of text) {
      const localValue_13 = (0, helperFunction_36)(localValue_12) ? {
        cache_control: {
          type: "ephemeral"
        }
      }
      : {
      }
      ;
      if (["text", "input_text", "output_text"].includes(localValue_12?.type)) {
        typeof localValue_12.text === "string" && localValue_12.text.length > 0 && items.push({
          type: "text",
          text: localValue_12.text,
          ... localValue_13
        }
        );
        continue;
      }
      if (localValue_12?.type === "input_file" && typeof localValue_12.file_data === "string") {
        const localValue_14 = new RegExp("^data:application\\/pdf;base64,(.+)$", "s").exec(localValue_12.file_data);
        if (! localValue_14) throw new TypeError("PDF input must use a base64 PDF data URL.");
        items.push({
          type: "document",
          source: {
            type: "base64",
            media_type: "application/pdf",
            data: localValue_14[1]
          }
          ,
          ... localValue_13
        }
        );
        continue;
      }
      if (((localValue_12?.type) === "input_image") && typeof localValue_12.image_url === "string") {
        const localValue_14 = new RegExp("^data:([^;]+);base64,(.+)$", "s").exec(localValue_12.image_url);
        localValue_14 ? items.push({
          type: "image",
          source: {
            type: "base64",
            media_type: localValue_14[1],
            data: localValue_14[2]
          }
          ,
          ... localValue_13
        }
        ): new RegExp("^https:\\/\\/", "i").test(localValue_12.image_url) && items.push({
          type: "image",
          source: {
            type: "url",
            url: localValue_12.image_url
          }
          ,
          ... localValue_13
        }
        );
      }
    }
    return items;
  }
  function helperFunction_40(argument) {
    const items = [], uniqueValues_2 = new Set(), helperFunction_78 = (role, argument_2) => {
      ;
      if (! Array.isArray((argument_2)) || (argument_2).length === 0) return;
      const localValue_12 = items.at((((((((- 1))))))));
      localValue_12?.role === (role) ? localValue_12.content.push(... (argument_2)): items.push({
        role: (role),
        content: [... (argument_2)]
      }
      );
    }
    ;
    for (const localValue_12 of(argument)) {
      if (((localValue_12?.type) === "message")) {
        const localValue_13 = localValue_12?.provider_output?.adapterId === "anthropic-messages" && Array.isArray(localValue_12.provider_output.content) ? localValue_12.provider_output.content: null;
        if (localValue_13) {
          for (const localValue_14 of localValue_13) localValue_14?.type === "tool_use" && typeof localValue_14.id === "string" && uniqueValues_2.add(localValue_14.id);
          helperFunction_78("assistant", localValue_13);
        }
        else helperFunction_78((localValue_12.role === "assistant") ? "assistant": "user", helperFunction_39(localValue_12.content));
        continue;
      }
      if (localValue_12?.type === "function_call") {
        const localValue_13 = helperFunction_15(localValue_12.call_id) || helperFunction_15(localValue_12.id);
        if (! uniqueValues_2.has(localValue_13)) {
          let input = {
          }
          ;
          try {
            input = JSON.parse((0, helperFunction_16)(localValue_12.arguments));
          }
          catch {
            input = {
            }
            ;
          }
          helperFunction_78("assistant", [{
            type: "tool_use",
            id: localValue_13,
            name: localValue_12.name,
            input: input
          }
          ]);
        }
        continue;
      }
      ((localValue_12?.type) === "function_call_output") && helperFunction_78("user", [{
        type: "tool_result",
        tool_use_id: localValue_12.call_id,
        content: ((typeof localValue_12.output) === "string") ? localValue_12.output: JSON.stringify(localValue_12.output ?? null),
        is_error: (localValue_12.status === "failed")
      }
      ]);
    }
    return items;
  }
  function helperFunction_41(argument, argument_2) {
    const localValue_12 = Number.isInteger((argument)) ? (argument): 0;
    if (localValue_12 <= 1024) return null;
    const settingsRecord_5 = {
      minimal: 0.25,
      low: 0.25,
      medium: 0.4,
      high: 0.6,
      xhigh: 0.8,
      max: 0.8
    }
    , localValue_13 = settingsRecord_5[(argument_2)] ?? 0.6;
    return Math.max(1024, Math.min(localValue_12 - 1, Math.floor(localValue_12 * localValue_13)));
  }
  function helperFunction_42(argument, localValue_12 = {
  }
  , localValue_13 = null) {
    const system = [], items = [];
    for (const localValue_22 of Array.isArray(argument.input) ? argument.input: []) localValue_22?.type === "message" && ["developer", "system"].includes(localValue_22.role) ? system.push(... helperFunction_39(localValue_22.content)): items.push(localValue_22);
    const localValue_14 = helperFunction_34(argument.tool_choice), localValue_15 = helperFunction_15(argument.reasoning?.effort), localValue_16 = providerParameterCapabilities_e3(localValue_13, "reasoningSummary", argument.reasoning?.summary), localValue_17 = localValue_12.thinkingMode ?? "none", localValue_18 = typeof localValue_14 !== "string" || localValue_14 === "required", localValue_19 = localValue_15.length > 0 && localValue_15 !== "none", budget_tokens = localValue_17 === "manual" && localValue_19 && ! localValue_18 ? (0, helperFunction_41)(argument.max_output_tokens, localValue_15): null, localValue_20 = localValue_17 === "adaptive" && localValue_19 || localValue_17 === "manual" && (budget_tokens !== null);
    let settingsRecord_5 = {
    }
    ;
    if (localValue_17 === "adaptive" && localValue_15.length > 0) {
      if ((localValue_15 === "none")) {
        if ((localValue_12.supportsThinkingDisabled !== false)) {
          const settingsRecord_7 = {
            thinking: {
              type: "disabled"
            }
          }
          ;
          settingsRecord_5 = settingsRecord_7;
        }
      }
      else settingsRecord_5 = {
        thinking: {
          type: "adaptive",
          display: localValue_16 === "omitted" ? "omitted": "summarized"
        }
        ,
        output_config: {
          effort: ["low", "medium", "high", "max"].includes(localValue_15) ? localValue_15: "high"
        }
      }
      ;
    }
    else {
      if ((localValue_17 === "manual") && budget_tokens !== null) {
        const settingsRecord_7 = {
          thinking: {
            type: "enabled",
            budget_tokens: budget_tokens
          }
        }
        ;
        settingsRecord_5 = settingsRecord_7;
      }
    }
    const localValue_21 = localValue_17 === "adaptive" || localValue_20, settingsRecord_6 = {
      model: argument.model,
      messages: helperFunction_40(items),
      max_tokens: argument.max_output_tokens,
      stream: argument.stream,
      ... system.length > 0 ? {
        system: system
      }
      : {
      }
      ,
      ... ! localValue_21 && ((typeof argument.temperature) === "number") ? {
        temperature: argument.temperature
      }
      : {
      }
      ,
      ... ! localValue_21 && typeof argument.top_p === "number" ? {
        top_p: argument.top_p
      }
      : {
      }
      ,
      ... settingsRecord_5,
      ... localValue_13?.fields?.cache?.mapping === "anthropic-cache-control" && argument.prompt_cache_key && ! argument.prompt_cache_options ? {
        cache_control: {
          type: "ephemeral"
        }
      }
      : {
      }
    }
    ;
    return Array.isArray(argument.tools) && argument.tools.length > 0 && void (settingsRecord_6.tools = argument.tools.map(argument_2 => {
      return {
        name: argument_2.name,
        ... typeof argument_2.description === "string" ? {
          description: argument_2.description
        }
        : {
        }
        ,
        input_schema: (0, helperFunction_14)(argument_2.parameters) ? argument_2.parameters: {
          type: "object",
          properties: {
          }
        }
      }
      ;
    }
    ), settingsRecord_6.tool_choice = typeof localValue_14 === "string" ? localValue_14 === "required" ? {
      type: "any"
    }
    : {
      type: localValue_14
    }
    : {
      type: "tool",
      name: localValue_14.name
    }
    ), settingsRecord_6;
  }
  function helperFunction_43(argument) {
    if (! (0, helperFunction_14)(argument)) return null;
    return helperFunction_18({
      input: argument.input_tokens,
      output: argument.output_tokens,
      cached: argument.cache_read_input_tokens,
      cacheWrite: argument.cache_creation_input_tokens,
      reasoning: argument.output_tokens_details?.thinking_tokens
    }
    );
  }
  function helperFunction_44(argument, transportEventCount = 1) {
    const content = Array.isArray(argument?.content) ? argument.content: [], text = content.filter((argument_2) => {
      return (argument_2)?.type === "text";
    }
    ).map((argument_2) => {
      return (argument_2).text ?? "";
    }
    ).join(""), reasoningText = content.filter((argument_2) => {
      return (argument_2)?.type === "thinking";
    }
    ).map(argument_2 => {
      return argument_2.thinking ?? "";
    }
    ).join(""), calls = content.filter((argument_2) => {
      return (argument_2)?.type === "tool_use";
    }
    ).map(argument_2 => {
      const settingsRecord_5 = {
        id: argument_2.id,
        name: argument_2.name,
        arguments: argument_2.input
      }
      ;
      return settingsRecord_5;
    }
    ), localValue_12 = ["max_tokens", "model_context_window_exceeded", "refusal"].includes(argument?.stop_reason);
    return (0, helperFunction_19)({
      text: text,
      reasoningText: reasoningText,
      calls: calls,
      usage: helperFunction_43(argument?.usage),
      status: localValue_12 ? "incomplete": "completed",
      incompleteReason: argument?.stop_reason,
      providerOutput: {
        adapterId: "anthropic-messages",
        content: content
      }
      ,
      responseId: argument?.id,
      transportEventCount: transportEventCount
    }
    );
  }
  async function helperFunction_45(argument, argument_2) {
    const settingsRecord_5 = {
      content: [],
      usage: {
      }
    }
    ;
    let localValue_12 = settingsRecord_5;
    const lookupMap = new Map();
    let numericValue_4 = 0;
    for await(const localValue_13 of(0, responsesStream_e0)(argument)) {
      void (numericValue_4 += 1, argument_2?.(localValue_13));
      if (((localValue_13?.type) === "error")) throw new Error(localValue_13?.error?.message || "Anthropic Messages API failed.");
      if (localValue_13?.type === "message_start" && helperFunction_14(localValue_13.message)) {
        const settingsRecord_6 = {
          ... localValue_13.message,
          content: [],
          usage: localValue_13.message.usage ?? {
          }
        }
        ;
        localValue_12 = settingsRecord_6;
      }
      else {
        if (localValue_13?.type === "content_block_start") lookupMap.set(localValue_13.index, {
          ... localValue_13.content_block
        }
        );
        else {
          if (localValue_13?.type === "content_block_delta") {
            const localValue_14 = lookupMap.get(localValue_13.index) ?? {
            }
            , localValue_15 = localValue_13.delta ?? {
            }
            ;
            localValue_15.type === "text_delta" && (localValue_14.text = (("" + (localValue_14.text ?? "")) + (localValue_15.text ?? ""))), localValue_15.type === "thinking_delta" && (localValue_14.thinking = (("" + (localValue_14.thinking ?? "")) + (localValue_15.thinking ?? ""))), localValue_15.type === "signature_delta" && (localValue_14.signature = "" + (localValue_14.signature ?? "") + (localValue_15.signature ?? "")), (localValue_15.type === "input_json_delta") && (localValue_14.__input_json = (("" + (localValue_14.__input_json ?? "")) + (localValue_15.partial_json ?? ""))), lookupMap.set(localValue_13.index, localValue_14);
          }
          else localValue_13?.type === "message_delta" && void (localValue_12.stop_reason = localValue_13.delta?.stop_reason ?? localValue_12.stop_reason, localValue_12.usage = {
            ... localValue_12.usage,
            ... localValue_13.usage
          }
          );
        }
      }
    }
    return localValue_12.content = [... lookupMap.entries()].sort(([localValue_13], [localValue_14]) => {
      return (localValue_13 - localValue_14);
    }
    ).map(([, localValue_13]) => {
      if ((localValue_13.type === "tool_use") && ((typeof localValue_13.__input_json) === "string")) try {
        localValue_13.input = JSON.parse(localValue_13.__input_json || "{}");
      }
      catch {
        localValue_13.input = {
        }
        ;
      }
      return delete localValue_13.__input_json, localValue_13;
    }
    ), (0, helperFunction_44)(localValue_12, numericValue_4);
  }
  function helperFunction_46(argument, localValue_12 = {
  }
  ) {
    const settingsRecord_5 = {
      none: "minimal",
      minimal: "minimal",
      low: "low",
      medium: "medium",
      high: "high",
      xhigh: "high",
      max: "high"
    }
    , localValue_13 = helperFunction_15(argument), localValue_14 = settingsRecord_5[localValue_13] ?? "high", localValue_15 = localValue_12.reasoningEffortMap?.[localValue_13] ?? localValue_14, localValue_16 = Array.isArray(localValue_12.reasoningEffortValues) ? localValue_12.reasoningEffortValues: [];
    if (localValue_16.length === 0 || localValue_16.includes(localValue_15)) return localValue_15;
    return localValue_16.includes(localValue_12.defaultReasoningEffort) ? localValue_12.defaultReasoningEffort: localValue_16.at((((((((- 1))))))));
  }
  function helperFunction_47(argument) {
    const localValue_12 = (0, helperFunction_34)((argument));
    if (((typeof localValue_12) === "string")) return localValue_12 === "required" ? {
      allowed_tools: {
        mode: "any"
      }
    }
    : localValue_12;
    const settingsRecord_5 = {
      allowed_tools: {
        mode: "any",
        tools: [localValue_12.name]
      }
    }
    ;
    return settingsRecord_5;
  }
  function helperFunction_48(argument) {
    const localValue_12 = (0, helperFunction_34)(argument);
    if (typeof localValue_12 === "string") return {
      mode: (localValue_12 === "required") ? "ANY": localValue_12.toUpperCase()
    }
    ;
    return {
      mode: "ANY",
      allowedFunctionNames: [localValue_12.name]
    }
    ;
  }
  function helperFunction_49(text) {
    if (typeof (text) === "string") return ((text).length > 0) ? [{
      type: "text",
      text: (text)
    }
    ]: [];
    if (! Array.isArray((text))) return [];
    const items = [];
    for (const localValue_12 of(text)) {
      if (["text", "input_text", "output_text"].includes(localValue_12?.type) && ((typeof localValue_12.text) === "string")) {
        items.push({
          type: "text",
          text: localValue_12.text
        }
        );
        continue;
      }
      if (localValue_12?.type === "input_file" && typeof localValue_12.file_data === "string") {
        const localValue_13 = new RegExp("^data:application\\/pdf;base64,(.+)$", "s").exec(localValue_12.file_data);
        if (! localValue_13) throw new TypeError("PDF input must use a base64 PDF data URL.");
        items.push({
          type: "document",
          mime_type: "application/pdf",
          data: localValue_13[1]
        }
        );
        continue;
      }
      if (localValue_12?.type === "input_image" && ((typeof localValue_12.image_url) === "string")) {
        const localValue_13 = new RegExp("^data:([^;]+);base64,(.+)$", "s").exec(localValue_12.image_url);
        localValue_13 ? items.push({
          type: "image",
          mime_type: localValue_13[1],
          data: localValue_13[2]
        }
        ): new RegExp("^https:\\/\\/", "i").test(localValue_12.image_url) && items.push({
          type: "image",
          uri: localValue_12.image_url
        }
        );
      }
    }
    return items;
  }
  function helperFunction_50(argument) {
    const items = [], uniqueValues_2 = new Set(), lookupMap = new Map();
    for (const localValue_12 of(argument)) if (localValue_12?.type === "message") {
      if (((localValue_12?.provider_output?.adapterId) === "google-interactions") && Array.isArray(localValue_12.provider_output.steps)) {
        items.push(... localValue_12.provider_output.steps);
        for (const localValue_13 of localValue_12.provider_output.steps) localValue_13?.type === "function_call" && localValue_13.id && void (uniqueValues_2.add(localValue_13.id), lookupMap.set(localValue_13.id, localValue_13.name));
      }
      else items.push({
        type: (localValue_12.role === "assistant") ? "model_output": "user_input",
        content: helperFunction_49(localValue_12.content)
      }
      );
    }
    else {
      if (localValue_12?.type === "function_call") {
        const localValue_13 = (0, helperFunction_15)(localValue_12.call_id) || helperFunction_15(localValue_12.id);
        if (! uniqueValues_2.has(localValue_13)) {
          let argumentsValue = {
          }
          ;
          try {
            argumentsValue = JSON.parse(helperFunction_16(localValue_12.arguments));
          }
          catch {
            argumentsValue = {
            }
            ;
          }
          void (items.push({
            type: "function_call",
            id: localValue_13,
            name: localValue_12.name,
            arguments: argumentsValue
          }
          ), lookupMap.set(localValue_13, localValue_12.name));
        }
      }
      else localValue_12?.type === "function_call_output" && items.push({
        type: "function_result",
        name: lookupMap.get(localValue_12.call_id) ?? "tool",
        call_id: localValue_12.call_id,
        result: [{
          type: "text",
          text: typeof localValue_12.output === "string" ? localValue_12.output: JSON.stringify(localValue_12.output ?? null)
        }
        ],
        is_error: localValue_12.status === "failed"
      }
      );
    }
    return items;
  }
  function helperFunction_51(argument, localValue_12 = {
  }
  , localValue_13 = null) {
    const {
      system: system, rest: rest
    }
    = helperFunction_35(argument.input), settingsRecord_5 = {
      model: argument.model,
      input: helperFunction_50(rest),
      stream: argument.stream,
      store: false,
      ... argument.service_tier ? {
        service_tier: argument.service_tier
      }
      : {
      }
      ,
      generation_config: {
        max_output_tokens: argument.max_output_tokens,
        ... localValue_12.thinkingMode === "level" ? {
          thinking_level: helperFunction_46(argument.reasoning?.effort, localValue_12),
          thinking_summaries: providerParameterCapabilities_e3(localValue_13, "reasoningSummary", argument.reasoning?.summary) ?? "none"
        }
        : {
        }
        ,
        ... typeof argument.temperature === "number" ? {
          temperature: argument.temperature
        }
        : {
        }
        ,
        ... typeof argument.top_p === "number" ? {
          top_p: argument.top_p
        }
        : {
        }
        ,
        ... argument.tool_choice !== null ? {
          tool_choice: (0, helperFunction_47)(argument.tool_choice)
        }
        : {
        }
      }
      ,
      ... system ? {
        system_instruction: system
      }
      : {
      }
    }
    ;
    return Array.isArray(argument.tools) && argument.tools.length > 0 && (settingsRecord_5.tools = argument.tools.map(argument_2 => {
      const settingsRecord_6 = {
        type: "function",
        name: argument_2.name,
        ... typeof argument_2.description === "string" ? {
          description: argument_2.description
        }
        : {
        }
        ,
        parameters: argument_2.parameters ?? {
          type: "object",
          properties: {
          }
        }
      }
      ;
      return settingsRecord_6;
    }
    )), settingsRecord_5;
  }
  function helperFunction_52(argument) {
    if (! helperFunction_14((argument))) return null;
    return helperFunction_18({
      input: (argument).total_input_tokens,
      output: (argument).total_output_tokens,
      cached: (argument).total_cached_tokens,
      reasoning: (argument).total_thought_tokens,
      total: (argument).total_tokens
    }
    );
  }
  function helperFunction_53(argument, transportEventCount = 1) {
    const steps = Array.isArray(argument?.steps) ? argument.steps: Array.isArray(argument?.outputs) ? argument.outputs: [], text = steps.filter((argument_2) => {
      return (argument_2)?.type === "model_output";
    }
    ).flatMap(argument_2 => {
      return Array.isArray(argument_2.content) ? argument_2.content: [];
    }
    ).filter((argument_2) => {
      return (argument_2)?.type === "text";
    }
    ).map(argument_2 => {
      return argument_2.text ?? "";
    }
    ).join(""), localValue_12 = steps.filter((argument_2) => {
      return (argument_2)?.type === "thought";
    }
    ), reasoningText = localValue_12.flatMap((argument_2) => {
      return Array.isArray((argument_2).summary) ? (argument_2).summary: [];
    }
    ).map((argument_2) => {
      return (argument_2)?.text ?? "";
    }
    ).join(""), calls = steps.filter(argument_2 => {
      return argument_2?.type === "function_call";
    }
    ).map((argument_2) => {
      ;
      const settingsRecord_5 = {
        id: (argument_2).id,
        name: (argument_2).name,
        arguments: (argument_2).arguments
      }
      ;
      return settingsRecord_5;
    }
    ), localValue_13 = ! ["completed", "requires_action"].includes(argument?.status);
    return helperFunction_19({
      text: text,
      reasoningText: reasoningText,
      calls: calls,
      usage: helperFunction_52(argument?.usage),
      status: localValue_13 ? "incomplete": "completed",
      incompleteReason: argument?.status,
      providerOutput: {
        adapterId: "google-interactions",
        steps: steps
      }
      ,
      responseId: argument?.id,
      transportEventCount: transportEventCount
    }
    );
  }
  async function helperFunction_54(argument, argument_2) {
    let numericValue_4 = 0, textValue_2 = null, usage = null, textValue_3 = "in_progress", textValue_4 = "";
    const lookupMap = new Map();
    for await(const localValue_12 of responsesStream_e0(argument)) {
      void (numericValue_4 += 1, settingsRecord_3.WEQiM(argument_2, localValue_12));
      if (localValue_12?.error) throw new Error(localValue_12.error.message || "Google Interactions API failed.");
      helperFunction_14(localValue_12?.interaction) && void (textValue_2 = localValue_12.interaction, textValue_4 = localValue_12.interaction.id ?? textValue_4, textValue_3 = localValue_12.interaction.status ?? textValue_3);
      typeof localValue_12?.interaction_id === "string" && (textValue_4 = localValue_12.interaction_id);
      typeof localValue_12?.status === "string" && (textValue_3 = localValue_12.status);
      (0, helperFunction_14)(localValue_12?.metadata?.total_usage) && (usage = localValue_12.metadata.total_usage);
      if (helperFunction_14(localValue_12?.step)) lookupMap.set(localValue_12.index ?? lookupMap.size, {
        ... localValue_12.step
      }
      );
      else {
        if (localValue_12?.event_type === "step.delta" && helperFunction_14(localValue_12.delta)) {
          const localValue_13 = localValue_12.index ?? 0, localValue_14 = lookupMap.get(localValue_13) ?? {
            type: "model_output",
            content: []
          }
          ;
          if ((localValue_12.delta.type === "text")) {
            const localValue_15 = Array.isArray(localValue_14.content) ? [... localValue_14.content]: [], localValue_16 = localValue_15.at((((((((- 1))))))));
            void (((localValue_16?.type) === "text") ? localValue_16.text = (("" + (localValue_16.text ?? "")) + (localValue_12.delta.text ?? "")): localValue_15.push({
              type: "text",
              text: localValue_12.delta.text ?? ""
            }
            ), localValue_14.content = localValue_15);
          }
          else (localValue_12.delta.type === "arguments_delta") ? localValue_14.__arguments_json = "" + (localValue_14.__arguments_json ?? "") + (localValue_12.delta.arguments ?? ""): localValue_12.delta.type === "thought_summary" ? localValue_14.summary = [... Array.isArray(localValue_14.summary) ? localValue_14.summary: [], ... localValue_12.delta.content ? [localValue_12.delta.content]: []]: localValue_12.delta.type === "thought_signature" ? localValue_14.signature = localValue_12.delta.signature ?? localValue_14.signature: Object.assign(localValue_14, localValue_12.delta);
          lookupMap.set(localValue_13, localValue_14);
        }
      }
    }
    const steps = [... lookupMap.entries()].sort(([localValue_12], [localValue_13]) => {
      return localValue_12 - localValue_13;
    }
    ).map(([, localValue_12]) => {
      const settingsRecord_5 = {
        ... localValue_12
      }
      , localValue_13 = settingsRecord_5;
      if ((localValue_13.type === "function_call") && ((typeof localValue_13.__arguments_json) === "string")) try {
        localValue_13.arguments = JSON.parse(localValue_13.__arguments_json || "{}");
      }
      catch {
        localValue_13.arguments = {
        }
        ;
      }
      return delete localValue_13.__arguments_json, localValue_13;
    }
    );
    return textValue_2 = {
      ... textValue_2 ?? {
      }
      ,
      ... textValue_4 ? {
        id: textValue_4
      }
      : {
      }
      ,
      status: textValue_2?.status ?? ((textValue_3 === "in_progress") ? "completed": textValue_3),
      ... helperFunction_14(textValue_2?.usage) ? {
      }
      : usage ? {
        usage: usage
      }
      : {
      }
      ,
      ... Array.isArray(textValue_2?.steps) && textValue_2.steps.length > 0 ? {
      }
      : {
        steps: steps
      }
    }
    , (textValue_2.steps.length === 0) && steps.length === 0 && (textValue_2.status = textValue_2.status || "incomplete"), helperFunction_53(textValue_2, numericValue_4);
  }
  function helperFunction_55(text) {
    const items = [];
    if (Array.isArray((text))) {
      for (const localValue_12 of(text)) if (["text", "input_text", "output_text"].includes(localValue_12?.type)) items.push({
        text: localValue_12.text ?? ""
      }
      );
      else {
        if (localValue_12?.type === "input_file" && ((typeof localValue_12.file_data) === "string")) {
          const localValue_13 = new RegExp("^data:application\\/pdf;base64,(.+)$", "s").exec(localValue_12.file_data);
          if (! localValue_13) throw new TypeError("PDF input must use a base64 PDF data URL.");
          items.push({
            inlineData: {
              mimeType: "application/pdf",
              data: localValue_13[1]
            }
          }
          );
        }
        else {
          if (localValue_12?.type === "input_image" && ((typeof localValue_12.image_url) === "string")) {
            const localValue_13 = new RegExp("^data:([^;]+);base64,(.+)$", "s").exec(localValue_12.image_url);
            localValue_13 && items.push({
              inlineData: {
                mimeType: localValue_13[1],
                data: localValue_13[2]
              }
            }
            );
          }
        }
      }
    }
    else typeof (text) === "string" && items.push({
      text: (text)
    }
    );
    return items;
  }
  function helperFunction_56(argument) {
    const items = [], lookupMap = new Map(), lookupMap_2 = new Map(), helperFunction_78 = (role, argument_2) => {
      if (! argument_2.length) return;
      const localValue_12 = items.at((((((((- 1))))))));
      localValue_12?.role === role ? localValue_12.parts.push(... argument_2): items.push({
        role: role,
        parts: [... argument_2]
      }
      );
    }
    ;
    for (const localValue_12 of(argument)) if (localValue_12?.type === "message") {
      const localValue_13 = ((localValue_12?.provider_output?.adapterId) === "google-generate-content") && Array.isArray(localValue_12.provider_output.parts) ? localValue_12.provider_output.parts: null;
      if (localValue_13) {
        helperFunction_78("model", localValue_13);
        let numericValue_4 = 0;
        for (const localValue_14 of localValue_13) if (helperFunction_14(localValue_14?.functionCall)) {
          const localValue_15 = helperFunction_15(localValue_14.functionCall.id), localValue_16 = localValue_12.provider_output.callIds?.[numericValue_4 ++] ?? localValue_15;
          localValue_16 && void (lookupMap.set(localValue_16, localValue_15), lookupMap_2.set(localValue_16, localValue_14.functionCall.name));
        }
      }
      else helperFunction_78(localValue_12.role === "assistant" ? "model": "user", helperFunction_55(localValue_12.content));
    }
    else {
      if (((localValue_12?.type) === "function_call")) {
        const localValue_13 = helperFunction_15(localValue_12.call_id) || helperFunction_15(localValue_12.id);
        if (! lookupMap.has(localValue_13)) {
          let args = {
          }
          ;
          try {
            args = JSON.parse(helperFunction_16(localValue_12.arguments));
          }
          catch {
            args = {
            }
            ;
          }
          void (helperFunction_78("model", [{
            functionCall: {
              id: localValue_13,
              name: localValue_12.name,
              args: args
            }
          }
          ]), lookupMap_2.set(localValue_13, localValue_12.name));
        }
      }
      else ((localValue_12?.type) === "function_call_output") && helperFunction_78("user", [{
        functionResponse: {
          ... lookupMap.has(localValue_12.call_id) && ! lookupMap.get(localValue_12.call_id) ? {
          }
          : {
            id: localValue_12.call_id
          }
          ,
          name: lookupMap_2.get(localValue_12.call_id) ?? "tool",
          response: {
            output: typeof localValue_12.output === "string" ? localValue_12.output: JSON.stringify(localValue_12.output ?? null)
          }
        }
      }
      ]);
    }
    return items;
  }
  function helperFunction_57(argument, localValue_12 = {
  }
  , localValue_13 = null) {
    const localValue_14 = (0, providerParameterCapabilities_e3)(localValue_13, "reasoningSummary", argument.reasoning?.summary);
    if (localValue_12.thinkingMode === "level") return {
      thinkingLevel: helperFunction_46(argument.reasoning?.effort, localValue_12).toUpperCase(),
      includeThoughts: (localValue_14 !== false)
    }
    ;
    if ((localValue_12.thinkingMode === "budget")) {
      const localValue_15 = helperFunction_15(argument.reasoning?.effort) === "none";
      return {
        thinkingBudget: localValue_15 && localValue_12.supportsThinkingDisabled !== false ? 0: (((((((- 1))))))),
        includeThoughts: (localValue_14 !== false)
      }
      ;
    }
    return null;
  }
  const uniqueValues = new Set(["type", "nullable", "required", "format", "description", "properties", "items", "enum", "anyOf", "minimum", "maximum", "$ref", "$defs"]);
  function helperFunction_58(argument) {
    if (! helperFunction_14((argument))) return (argument);
    const localValue_12 = typeof (argument).type === "string" ? (argument).type.toLowerCase(): "", localValue_13 = ((localValue_12 === "integer") || localValue_12 === "number") && Array.isArray((argument).enum) && (argument).enum.length > 0 && (argument).enum.every(argument_2 => {
      return typeof argument_2 === "number" && Number.isFinite(argument_2) && (localValue_12 !== "integer" || Number.isInteger(argument_2));
    }
    ), anyOf = Array.isArray((argument).anyOf) ? (argument).anyOf.map((argument_2) => {
      return helperFunction_58((argument_2));
    }
    ): null, settingsRecord_5 = {
    }
    ;
    for (const [localValue_14, localValue_15] of Object.entries((argument))) {
      if (! uniqueValues.has(localValue_14)) continue;
      if (localValue_14 === "enum" && Array.isArray(localValue_15)) {
        ! localValue_13 && (settingsRecord_5.enum = [... localValue_15]);
        continue;
      }
      if (localValue_14 === "properties" && (0, helperFunction_14)(localValue_15)) {
        settingsRecord_5.properties = Object.fromEntries(Object.entries(localValue_15).map(([localValue_16, localValue_17]) => {
          return [localValue_16, helperFunction_58(localValue_17)];
        }
        ));
        continue;
      }
      if (localValue_14 === "$defs" && helperFunction_14(localValue_15)) {
        settingsRecord_5.$defs = Object.fromEntries(Object.entries(localValue_15).map(([localValue_16, localValue_17]) => {
          return [localValue_16, helperFunction_58(localValue_17)];
        }
        ));
        continue;
      }
      if (localValue_14 === "items") {
        settingsRecord_5.items = helperFunction_58(localValue_15);
        continue;
      }
      if ((localValue_14 === "anyOf") && Array.isArray(localValue_15)) {
        (! localValue_13 || ((argument).enum.length === 1)) && (settingsRecord_5.anyOf = anyOf);
        continue;
      }
      if ((localValue_14 === "required") && Array.isArray(localValue_15)) {
        settingsRecord_5.required = localValue_15.filter(argument_2 => {
          return ((typeof argument_2) === "string");
        }
        );
        continue;
      }
      settingsRecord_5[localValue_14] = localValue_15;
    }
    if (localValue_13) {
      if ((argument).enum.length === 1) {
        const [localValue_14] = (argument).enum;
        void (settingsRecord_5.minimum = ((typeof settingsRecord_5.minimum) === "number") ? Math.max(settingsRecord_5.minimum, localValue_14): localValue_14, settingsRecord_5.maximum = typeof settingsRecord_5.maximum === "number" ? Math.min(settingsRecord_5.maximum, localValue_14): localValue_14);
      }
      else settingsRecord_5.anyOf = (argument).enum.map(minimum => {
        const settingsRecord_6 = {
          type: (argument).type,
          minimum: minimum,
          maximum: minimum,
          ... anyOf ? {
            anyOf: anyOf
          }
          : {
          }
        }
        ;
        return settingsRecord_6;
      }
      );
    }
    return settingsRecord_5;
  }
  function helperFunction_59(argument, localValue_12 = {
  }
  , localValue_13 = null) {
    const {
      system: system, rest: rest
    }
    = helperFunction_35(argument.input), localValue_14 = helperFunction_48(argument.tool_choice), thinkingConfig = helperFunction_57(argument, localValue_12, localValue_13), settingsRecord_5 = {
      contents: helperFunction_56(rest),
      ... argument.service_tier && localValue_13?.fields?.serviceTier?.mapping === "service_tier" ? {
        service_tier: argument.service_tier
      }
      : {
      }
      ,
      generationConfig: {
        maxOutputTokens: argument.max_output_tokens,
        ... thinkingConfig ? {
          thinkingConfig: thinkingConfig
        }
        : {
        }
        ,
        ... typeof argument.temperature === "number" ? {
          temperature: argument.temperature
        }
        : {
        }
        ,
        ... typeof argument.top_p === "number" ? {
          topP: argument.top_p
        }
        : {
        }
      }
      ,
      ... system ? {
        systemInstruction: {
          parts: [{
            text: system
          }
          ]
        }
      }
      : {
      }
    }
    ;
    if (Array.isArray(argument.tools) && (argument.tools.length > 0)) {
      const functionCallingConfig = {
        ... localValue_14
      }
      ;
      void (settingsRecord_5.tools = [{
        functionDeclarations: argument.tools.map((argument_2) => {
          return {
            name: (argument_2).name,
            ... typeof (argument_2).description === "string" ? {
              description: (argument_2).description
            }
            : {
            }
            ,
            parameters: (0, helperFunction_58)((argument_2).parameters ?? {
              type: "object",
              properties: {
              }
            }
            )
          }
          ;
        }
        )
      }
      ], settingsRecord_5.toolConfig = {
        functionCallingConfig: functionCallingConfig
      }
      );
    }
    return settingsRecord_5;
  }
  function helperFunction_60(argument) {
    if (! helperFunction_14((argument))) return null;
    return helperFunction_18({
      input: (argument).promptTokenCount,
      output: (argument).candidatesTokenCount,
      cached: (argument).cachedContentTokenCount,
      reasoning: (argument).thoughtsTokenCount,
      total: (argument).totalTokenCount
    }
    );
  }
  function helperFunction_61(argument, transportEventCount = 1) {
    const localValue_12 = Array.isArray(argument) ? argument: [argument], parts = [];
    let localValue_13, textValue_2 = "", responseId = "";
    for (const localValue_15 of localValue_12) {
      void (responseId = localValue_15?.responseId ?? responseId, localValue_13 = localValue_15?.usageMetadata ?? localValue_13);
      const localValue_16 = localValue_15?.candidates?.[0];
      Array.isArray(localValue_16?.content?.parts) && parts.push(... localValue_16.content.parts);
      const localValue_17 = helperFunction_15(localValue_16?.finishReason) || helperFunction_15(localValue_15?.promptFeedback?.blockReason);
      localValue_17 && ! ["FINISH_REASON_UNSPECIFIED", "BLOCK_REASON_UNSPECIFIED"].includes(localValue_17) && (textValue_2 = localValue_17);
    }
    const text = parts.filter((argument_2) => {
      return typeof (argument_2)?.text === "string" && (argument_2).thought !== true;
    }
    ).map(argument_2 => {
      return argument_2.text;
    }
    ).join(""), reasoningText = parts.filter((argument_2) => {
      return ((typeof (argument_2)?.text) === "string") && (argument_2).thought === true;
    }
    ).map(argument_2 => {
      return argument_2.text;
    }
    ).join(""), calls = parts.filter((argument_2) => {
      return helperFunction_14((argument_2)?.functionCall);
    }
    ).map((argument_2, argument_3) => {
      return {
        id: (0, helperFunction_15)((argument_2).functionCall.id) || "google-call-" + (argument_3),
        name: (argument_2).functionCall.name,
        arguments: (argument_2).functionCall.args
      }
      ;
    }
    ), terminalEventReceived = Boolean(textValue_2), localValue_14 = ! terminalEventReceived || ! ["STOP", "TOOL_CALL"].includes(textValue_2);
    return helperFunction_19({
      text: text,
      reasoningText: reasoningText,
      calls: calls,
      usage: helperFunction_60(localValue_13),
      status: localValue_14 ? "incomplete": "completed",
      incompleteReason: textValue_2 || "terminal_event_missing",
      terminalEventReceived: terminalEventReceived,
      providerOutput: {
        adapterId: "google-generate-content",
        parts: parts,
        callIds: calls.map(argument_2 => {
          return argument_2.id;
        }
        )
      }
      ,
      responseId: responseId,
      transportEventCount: transportEventCount
    }
    );
  }
  async function helperFunction_62(argument, argument_2) {
    const items = [];
    for await(const localValue_12 of responsesStream_e0(argument)) {
      argument_2?.(localValue_12);
      if (localValue_12?.error) throw new Error(localValue_12.error.message || "Google generateContent API failed.");
      items.push(localValue_12);
    }
    return helperFunction_61(items, items.length);
  }
  function helperFunction_63(argument) {
    if (helperFunction_14(argument) && Object.hasOwn(argument, "success") && argument.success === false) {
      const localValue_12 = argument.errors?.[0]?.message ?? "Cloudflare AI run failed.";
      throw new Error(localValue_12);
    }
    return helperFunction_14(argument?.result) ? argument.result: argument;
  }
  async function helperFunction_64(argument, argument_2) {
    const items = [];
    for await(const localValue_12 of responsesStream_e0(argument)) {
      void (argument_2?.(localValue_12), items.push((0, helperFunction_63)(localValue_12)));
    }
    return helperFunction_61(items, items.length);
  }
  function helperFunction_65(argument, tokenLimitField, localValue_12 = {
  }
  , breakpointEncoding) {
    const items = [];
    for (const localValue_13 of Array.isArray(argument.input) ? argument.input: []) {
      if (localValue_13?.type === "message") {
        const localValue_14 = chatCompletions_e0({
          ... argument,
          input: [localValue_13],
          tools: null,
          tool_choice: null
        }
        , {
          compatibleParameterMode: "extended",
          tokenLimitField: tokenLimitField,
          breakpointEncoding: breakpointEncoding
        }
        ).messages[0];
        localValue_12.supportsDeveloperRole === false && (localValue_14.role === "developer") && (localValue_14.role = "system");
        typeof localValue_13.reasoning_content === "string" && localValue_13.reasoning_content.length > 0 && (localValue_14.reasoning_content = localValue_13.reasoning_content);
        items.push(localValue_14);
        continue;
      }
      if (localValue_13?.type === "function_call") {
        const settingsRecord_5 = {
          id: localValue_13.call_id ?? localValue_13.id,
          type: "function",
          function: {
            name: localValue_13.name,
            arguments: (0, helperFunction_16)(localValue_13.arguments)
          }
          ,
          ... (0, helperFunction_14)(localValue_13.extra_content) ? {
            extra_content: localValue_13.extra_content
          }
          : {
          }
        }
        ;
        let localValue_14 = items.at((((((((- 1))))))));
        ((localValue_14?.role) !== "assistant") && void (localValue_14 = {
          role: "assistant",
          content: localValue_12.requiresAssistantContentForToolCalls ? "": null
        }
        , items.push(localValue_14));
        localValue_14.tool_calls = [... localValue_14.tool_calls ?? [], settingsRecord_5];
        continue;
      }
      localValue_13?.type === "function_call_output" && items.push({
        role: "tool",
        tool_call_id: localValue_13.call_id,
        content: typeof localValue_13.output === "string" ? localValue_13.output: JSON.stringify(localValue_13.output ?? null)
      }
      );
    }
    return items;
  }
  function helperFunction_66(argument, argument_2, {
    tokenLimitField: tokenLimitField = "max_completion_tokens", adapterContractId: adapterContractId = "", parameterContract: parameterContract
  }
  = {
  }
  ) {
    const localValue_12 = (0, helperFunction_25)(argument_2.id, adapterContractId) ?? {
    }
    , tokenLimitField_2 = localValue_12.tokenLimitField ?? tokenLimitField, localValue_13 = Array.isArray(argument.messages) ? {
      ... argument,
      messages: argument.messages.map((argument_3) => {
        ;
        const settingsRecord_5 = {
          ... (argument_3)
        }
        ;
        return settingsRecord_5;
      }
      )
    }
    : chatCompletions_e0({
      ... argument,
      input: []
    }
    , {
      compatibleParameterMode: "extended",
      tokenLimitField: tokenLimitField_2,
      parameterContract: parameterContract
    }
    );
    ! Array.isArray(argument.messages) && (localValue_13.messages = (0, helperFunction_65)(argument, tokenLimitField_2, localValue_12, (argument_2.id === "copilot-chat") ? "copilot": null));
    const localValue_14 = ((parameterContract?.fields?.serviceTier?.support) !== "unsupported"), localValue_15 = parameterContract?.fields?.verbosity?.support !== "unsupported", localValue_16 = parameterContract?.fields?.cache?.mapping ?? "omit", localValue_17 = ["responses-cache-fields", "openrouter-prompt-cache-fields", "openrouter-anthropic-cache", "openrouter-google-cache", "openrouter-key-only-cache", "key-only-hint", "copilot-chat-cache-control", "openrouter-generic-cache"].includes(localValue_16), localValue_18 = ["responses-cache-fields", "openrouter-prompt-cache-fields", "openrouter-generic-cache"].includes(localValue_16), localValue_19 = ["responses-cache-fields", "openrouter-prompt-cache-fields", "openrouter-anthropic-cache", "openrouter-google-cache", "openrouter-generic-cache"].includes(localValue_16);
    ! localValue_15 && delete localValue_13.verbosity;
    (! localValue_14 || parameterContract?.fields?.serviceTier?.mapping === "vertex-service-tier-headers") && delete localValue_13.service_tier;
    ! localValue_18 && delete localValue_13.prompt_cache_options;
    ! localValue_17 && delete localValue_13.prompt_cache_key;
    (localValue_16 === "openrouter-anthropic-cache") && localValue_13.prompt_cache_key && ! argument.prompt_cache_options && (localValue_13.cache_control = {
      type: "ephemeral"
    }
    );
    ! ["openai-chat-completions", "cloudflare-chat"].includes(argument_2.id) && delete localValue_13.store;
    localValue_13.messages = localValue_13.messages.map(argument_3 => {
      const settingsRecord_5 = {
        "Ikpwl": function (argument_4, argument_5) {
          return argument_4 + argument_5;
        }
        ,
        "HMMPy": function (argument_4, argument_5) {
          return (argument_4 + argument_5);
        }
      }
      ;
      return {
        ... argument_3,
        ... localValue_12.supportsDeveloperRole === false && argument_3.role === "developer" ? {
          role: "system"
        }
        : {
        }
        ,
        ... localValue_12.requiresAssistantContentForToolCalls && (argument_3.role === "assistant") && Array.isArray(argument_3.tool_calls) && (argument_3.content == null) ? {
          content: ""
        }
        : {
        }
        ,
        ... Array.isArray(argument_3.content) ? {
          content: argument_3.content.map(argument_4 => {
            if (! helperFunction_14(argument_4)) return argument_4;
            if (localValue_19) return argument_4;
            const {
              [settingsRecord_5.Ikpwl("prompt", "_cache") + "_break" + "point"]: localValue_21, [settingsRecord_5.HMMPy("cache_", "contro") + "l"]: localValue_22, ... argumentState
            }
            = argument_4;
            return void (void localValue_21, void localValue_22), argumentState;
          }
          )
        }
        : {
        }
      }
      ;
    }
    );
    Array.isArray(localValue_13.tools) && (localValue_13.tools = localValue_13.tools.map((argument_3) => {
      ;
      const settingsRecord_5 = {
        ... (argument_3).function ?? {
        }
      }
      , functionValue = settingsRecord_5;
      delete functionValue.strict;
      const settingsRecord_6 = {
        ... (argument_3),
        function: functionValue
      }
      ;
      return settingsRecord_6;
    }
    ));
    const localValue_20 = helperFunction_15(argument.reasoning?.effort ?? argument.reasoning_effort);
    return (argument_2.id === "google-vertex-chat") ? (delete localValue_13.prompt_cache_key, localValue_20 && (localValue_13.reasoning_effort = helperFunction_27(argument_2.id, adapterContractId, localValue_20))): (argument_2.id === "deepseek-chat") ? (void (delete localValue_13.prompt_cache_key, localValue_13.thinking = {
      type: (localValue_20 === "none") ? "disabled": "enabled"
    }
    , localValue_20 === "none" ? delete localValue_13.reasoning_effort: localValue_13.reasoning_effort = ["max", "xhigh"].includes(localValue_20) ? "max": "high"), localValue_20 !== "none" && void (delete localValue_13.temperature, delete localValue_13.top_p), localValue_12.supportsToolChoice === false && delete localValue_13.tool_choice): argument_2.id === "glm-chat" ? (void (delete localValue_13.prompt_cache_key, localValue_13.thinking = {
      type: localValue_20 === "none" ? "disabled": "enabled",
      ... localValue_20 === "none" ? {
      }
      : {
        clear_thinking: false
      }
    }
    , (localValue_12.supportsReasoningEffort === true) ? localValue_13.reasoning_effort = localValue_12.reasoningEffortValues.includes(localValue_20) ? localValue_20: localValue_12.defaultReasoningEffort: delete localValue_13.reasoning_effort), localValue_12.toolChoiceMode === "auto-only" && (Array.isArray(localValue_13.tools) && localValue_13.tools.length > 0 ? localValue_13.tool_choice = "auto": delete localValue_13.tool_choice)): argument_2.id === "kimi-chat" && (localValue_12.suppressSampling === true && void (delete localValue_13.temperature, delete localValue_13.top_p), localValue_12.thinkingSwitch === true ? void (localValue_13.thinking = {
      type: localValue_20 === "none" ? "disabled": "enabled",
      ... localValue_12.preserveThinking === true && localValue_20 !== "none" ? {
        "keep": "all"
      }
      : {
      }
    }
    , delete localValue_13.reasoning_effort): (localValue_12.thinkingAlwaysOn === true) ? void (delete localValue_13.thinking, delete localValue_13.reasoning_effort): localValue_12.supportsReasoningEffort === true && void (delete localValue_13.thinking, localValue_13.reasoning_effort = localValue_12.reasoningEffortMap?.[localValue_20] ?? localValue_12.defaultReasoningEffort)), localValue_13;
  }
  function helperFunction_67(argument) {
    const {
      providerOptions: providerOptions, prompt_cache_options: prompt_cache_options, service_tier: service_tier, text: text, ... argumentState
    }
    = (argument);
    return void (void providerOptions, void prompt_cache_options, void service_tier, void text), text?.format ? {
      ... argumentState,
      text: {
        format: text.format
      }
    }
    : argumentState;
  }
  function helperFunction_68(argument, argument_2, argument_3) {
    const tools = Array.isArray((argument).tools) ? [... (argument).tools]: [];
    ! tools.some((argument_3)) && tools.push((argument_2));
    const settingsRecord_5 = {
      ... (argument),
      tools: tools
    }
    ;
    return settingsRecord_5;
  }
  function helperFunction_69({
    gatewayProfileId: gatewayProfileId, adapterId: adapterId
  }
  ) {
    const dQ = localValue_11[gatewayProfileId];
    if (((dQ?.adapterId) !== adapterId) || dQ.kind !== "google-generate-search") return;
    const localValue_12 = new TypeError("" + gatewayProfiles_e1_2(gatewayProfileId).label + " cannot send hosted search with function tools in one request.");
    localValue_12.code = "hosted_search_function_tools_unsupported";
    throw localValue_12;
  }
  function helperFunction_70(argument, argument_2) {
    if ((argument !== "vercel-ai-gateway")) return;
    if (! Array.isArray(argument_2) || argument_2.length === 0 || argument_2.some((argument_3) => {
      return ! ["openai", "xai"].includes((argument_3));
    }
    )) {
      const localValue_12 = new TypeError("Vercel native web search requires an OpenAI or xAI serving-provider selection.");
      localValue_12.code = "hosted_search_provider_unsupported";
      throw localValue_12;
    }
  }
  function helperFunction_71(argument, {
    adapterId: adapterId, gatewayProfileId: gatewayProfileId, forcedToolSelection: forcedToolSelection
  }
  ) {
    ;
    const dM = localValue_11[gatewayProfileId];
    if (! dM || dM.adapterId !== adapterId) throw new TypeError((("Upstream web search is not supported for " + gatewayProfileId + "/" + adapterId) + "."));
    if (forcedToolSelection) return argument;
    (0, helperFunction_70)(gatewayProfileId, argument.providerOptions?.gateway?.only);
    if (dM.kind === "responses-web-search") {
      const settingsRecord_5 = {
        type: "web_search"
      }
      ;
      return helperFunction_68(argument, settingsRecord_5, (argument_2) => {
        return (argument_2)?.type === ("web_search");
      }
      );
    }
    if ((dM.kind === "anthropic-web-search")) {
      const settingsRecord_5 = {
        type: "web_search_20250305",
        name: "web_search",
        max_uses: 5
      }
      ;
      return (0, helperFunction_68)(argument, settingsRecord_5, argument_2 => {
        return argument_2?.name === "web_search" && typeof argument_2?.type === "string" && argument_2.type.startsWith("web_search_");
      }
      );
    }
    if ((dM.kind === "google-interactions-search")) {
      const settingsRecord_5 = {
        type: "google_search"
      }
      ;
      return (0, helperFunction_68)(argument, settingsRecord_5, (argument_2) => {
        return (argument_2)?.type === ("google_search");
      }
      );
    }
    if (dM.kind === "google-generate-search") {
      argument.tools?.some((argument_2) => {
        return (argument_2)?.functionDeclarations?.length > 0;
      }
      ) && (0, helperFunction_69)({
        gatewayProfileId: gatewayProfileId,
        adapterId: adapterId
      }
      );
      const settingsRecord_5 = {
        googleSearch: {
        }
      }
      ;
      return helperFunction_68(argument, settingsRecord_5, argument_2 => {
        return helperFunction_14(argument_2?.googleSearch);
      }
      );
    }
    if (dM.kind === "glm-web-search") {
      const settingsRecord_5 = {
        type: "web_search",
        web_search: {
          enable: true,
          search_result: true
        }
      }
      ;
      return helperFunction_68(argument, settingsRecord_5, argument_2 => {
        return argument_2?.type === "web_search" && helperFunction_14(argument_2?.web_search);
      }
      );
    }
    throw new TypeError((("Unknown upstream web search contract: " + dM.kind) + "."));
  }
  function helperFunction_72(... argumentState) {
    const localValue_12 = encodeURIComponent(argumentState[1]);
    argumentState[(((((((- 166)))))))] = argumentState[0].replaceAll("{model}", localValue_12);
    ! argumentState[0].includes("{model}") && (argumentState[(((((((- 166)))))))] = "" + argumentState[0].replace(new RegExp("\\/+$", ""), "") + "/models/" + localValue_12 + ":" + (argumentState[2] ? "streamGenerateContent": "generateContent"));
    const parsedUrl = new URL(argumentState[(((((((- 166)))))))]);
    return argumentState[2] && parsedUrl.searchParams.set("alt", "sse"), parsedUrl.toString();
  }
  function helperFunction_73(argument, argument_2) {
    ;
    if ((argument_2) === null || ((argument_2) === null)) return (argument);
    if (! helperFunction_14((argument_2))) throw new TypeError("Custom request headers must be an object.");
    const settingsRecord_5 = {
      ... (argument)
    }
    , localValue_12 = settingsRecord_5, uniqueValues_2 = new Set(Object.keys(localValue_12).map(argument_3 => {
      return argument_3.toLowerCase();
    }
    ));
    for (const [localValue_13, localValue_14] of Object.entries((argument_2))) {
      const localValue_15 = localValue_13.trim(), localValue_16 = localValue_15.toLowerCase();
      if (! new RegExp("^[!#$%&'*+.^_`|~0-9A-Za-z-]{1,128}$", "").test(localValue_15) || uniqueValues_2.has(localValue_16) || ((typeof localValue_14) !== "string") || new RegExp("[\\r\\n\\u0000]", "").test(localValue_14)) throw new TypeError("Invalid or conflicting custom request header: " + (localValue_15 || "(empty)") + ".");
      void (uniqueValues_2.add(localValue_16), localValue_12[localValue_15] = localValue_14);
    }
    return localValue_12;
  }
  function helperFunction_74({
    gatewayProfileId: gatewayProfileId, serviceTier: serviceTier, endpoint: localValue_12, customHeaders: customHeaders = {
    }
  }
  = {
  }
  ) {
    if (! ["google-vertex-native", "google-vertex-chat-completions"].includes(gatewayProfileId) || ! ["flex", "priority"].includes(serviceTier)) return;
    const {
      hostname: hostname, pathname: pathname
    }
    = new URL(localValue_12), localValue_13 = hostname.match(new RegExp("^([a-z0-9-]+)-aiplatform\\.googleapis\\.com$", ""))?.[1] ?? hostname.match(new RegExp("^aiplatform\\.([a-z0-9-]+)\\.rep\\.googleapis\\.com$", ""))?.[1], localValue_14 = localValue_13 ?? pathname.match(new RegExp("\\/locations\\/([^/]+)", ""))?.[1], localValue_15 = serviceTier === "flex" ? ["global"]: ["global", "us", "eu"];
    if (! localValue_15.includes(localValue_14)) throw new gatewayProfiles_e9((serviceTier === "flex") ? "Vertex Flex requires a global endpoint.": "Vertex Priority requires a global, us or eu endpoint.", {
      code: "invalid_provider_setting"
    }
    );
    for (const [localValue_16, localValue_17] of Object.entries(settingsRecord_3.jyskg(customHeaders, {
    }
    ))) {
      const localValue_18 = localValue_16.trim().toLowerCase(), localValue_19 = (localValue_18 === "x-vertex-ai-llm-request-type") ? "shared": (localValue_18 === "x-vertex-ai-llm-shared-request-type") ? serviceTier: null;
      if (localValue_19 !== null && localValue_17 !== localValue_19) throw new gatewayProfiles_e9("Custom Vertex tier headers conflict with the selected service tier.", {
        code: "invalid_provider_setting"
      }
      );
    }
  }
  function helperFunction_75({
    adapterId: adapterId, gatewayProfileId: gatewayProfileId, request: request, endpoint: localValue_12, apiKey: apiKey, routingSessionId: routingSessionId = "", noGatewayFallback: noGatewayFallback = true, chatTokenLimitField: chatTokenLimitField = "max_completion_tokens", compatibleParameterMode: compatibleParameterMode = "extended", adapterContractId: adapterContractId = "", upstreamWebSearch: upstreamWebSearch = false, customHeaders: customHeaders = {
    }
  }
  = {
  }
  ) {
    if (! helperFunction_14(request)) throw new TypeError("A canonical Responses request is required.");
    const localValue_13 = (0, gatewayProfiles_e1_2)(gatewayProfileId), adapter = helperFunction_22(adapterId), adapterContract = helperFunction_25(adapter.id, adapterContractId) ?? {
    }
    ;
    if (toolChoicePolicy_e4(request) && ((adapterContract.supportsToolChoice === false) || adapterContract.toolChoiceMode === "auto-only")) throw new TypeError("" + adapter.label + " does not support forced tool selection.");
    const parameterContract = providerParameterCapabilities_e0({
      gatewayProfileId: localValue_13.id,
      gatewayRequestDialect: localValue_13.requestDialect,
      profileTransport: localValue_13.transport,
      backgroundResponses: localValue_13.backgroundResponses,
      adapterId: adapter.id,
      adapterRequestDialect: adapter.requestDialect,
      adapterBackgroundResponses: adapter.backgroundResponses,
      adapterContract: adapterContract,
      compatibleParameterMode: compatibleParameterMode,
      modelId: request.model,
      vercelProviderOnly: request.providerOptions?.gateway?.only ?? [],
      configuredReasoningEffort: request.reasoning?.effort ?? request.reasoning_effort,
      isAstra: modelCapabilities_e1_2(request.model),
      verbosityMode: typeof request.text?.verbosity === "string" ? "send": "auto",
      modelVerbositySupported: modelCapabilities_ee(request.model)
    }
    ), max_output_tokens = providerParameterCapabilities_e4(parameterContract, request.max_output_tokens), localValue_14 = max_output_tokens === request.max_output_tokens ? request: {
      ... request,
      max_output_tokens: max_output_tokens
    }
    , localValue_15 = (0, helperFunction_38)(localValue_14, parameterContract), serviceTier = (0, providerParameterCapabilities_e3)(parameterContract, "serviceTier", localValue_15.service_tier);
    ["service_tier", "vertex-service-tier-headers"].includes(parameterContract.fields.serviceTier.mapping) && serviceTier === null && delete localValue_15.service_tier;
    helperFunction_74({
      gatewayProfileId: localValue_13.id,
      serviceTier: serviceTier,
      endpoint: localValue_12 ?? localValue_13.responsesEndpoint,
      customHeaders: customHeaders
    }
    );
    let body = localValue_15;
    if (adapter.requestDialect === "anthropic-messages") body = helperFunction_42(localValue_15, adapterContract, parameterContract);
    else {
      if (adapter.id === "google-interactions") body = helperFunction_51(localValue_15, adapterContract, parameterContract);
      else {
        if ((adapter.requestDialect === "google-generate-content")) body = helperFunction_59(localValue_15, adapterContract, parameterContract);
        else {
          if (adapter.id === "cloudflare-gemini-run") {
            const settingsRecord_5 = {
              ... localValue_15,
              max_output_tokens: Number.isInteger(localValue_15.max_output_tokens) ? localValue_15.max_output_tokens: 65536
            }
            ;
            body = {
              model: localValue_15.model,
              input: (0, helperFunction_59)(settingsRecord_5, adapterContract, parameterContract)
            }
            ;
          }
          else adapter.id === "xai-responses" ? body = helperFunction_67(localValue_15): (adapter.requestDialect === "chat-completions") && (body = helperFunction_66(localValue_15, adapter, {
            tokenLimitField: chatTokenLimitField,
            adapterContractId: adapterContractId,
            parameterContract: parameterContract
          }
          ));
        }
      }
    }
    if (adapter.id === "openrouter-chat" && body.messages?.some(argument => {
      return Array.isArray(argument.content) && argument.content.some(argument_2 => {
        return argument_2.type === "file";
      }
      );
    }
    )) {
      const settingsRecord_5 = {
        id: "file-parser",
        pdf: {
          "engine": "native"
        }
      }
      ;
      body.plugins = [settingsRecord_5];
    }
    upstreamWebSearch === true && (body = helperFunction_71(body, {
      adapterId: adapter.id,
      gatewayProfileId: localValue_13.id,
      forcedToolSelection: toolChoicePolicy_e4(request)
    }
    ));
    adapter.requestDialect === "responses" && (0, modelCapabilities_e1_2)(body.model) && Array.isArray(body.tools) && body.tools.length === 1 && body.tools[0]?.type === "function" && body.tool_choice?.type === "function" && body.tool_choice.name === body.tools[0].name && (body = {
      ... body,
      tool_choice: "required",
      parallel_tool_calls: false
    }
    );
    const stream = adapter.id === "cloudflare-gemini-run" ? false: body.stream === true || (request.stream === true);
    let localValue_16 = localValue_12 ?? localValue_13.responsesEndpoint;
    adapter.requestDialect === "google-generate-content" && (localValue_16 = helperFunction_72(localValue_16, request.model, stream));
    let headers = gatewayProfiles_e7(localValue_13, apiKey, {
      stream: stream,
      sessionId: routingSessionId,
      noFallback: noGatewayFallback
    }
    );
    adapter.authentication === "anthropic-key" ? void (delete headers.Authorization, headers["x-api-key"] = apiKey, headers["anthropic-version"] = "2023-06-01"): (adapter.authentication === "google-key") ? void (delete headers.Authorization, headers["x-goog-api-key"] = apiKey): adapter.authentication === "cloudflare" && new URL(localValue_16).hostname !== "api.cloudflare.com" && void (delete headers.Authorization, headers["cf-aig-authorization"] = "Bearer " + apiKey);
    if (parameterContract.fields.serviceTier.mapping === "vertex-service-tier-headers" && serviceTier) {
      for (const [localValue_17, localValue_18] of Object.entries({
        ["X-Vertex-AI-LLM-Request-Type"]: "shared",
        "X-Vertex-AI-LLM-Shared-Request-Type": serviceTier
      }
      )) ! Object.keys(customHeaders ?? {
      }
      ).some((argument) => {
        return (argument).trim().toLowerCase() === localValue_17.toLowerCase();
      }
      ) && (headers[localValue_17] = localValue_18);
    }
    return headers = helperFunction_73(headers, customHeaders), {
      adapter: adapter,
      body: body,
      endpoint: localValue_16,
      headers: headers,
      stream: stream,
      requestMethod: {
        responses: "responses.create",
        ["chat-completions"]: "chat.completions.create",
        ["anthropic-messages"]: "messages.create",
        ["google-interactions"]: "interactions.create",
        ["google-generate-content"]: "models.generateContent",
        ["cloudflare-gemini-run"]: "ai.run"
      }
      [adapter.requestDialect] ?? "native.create"
    }
    ;
  }
  async function helperFunction_76(argument, argument_2, argument_3, localValue_12 = {
  }
  ) {
    const localValue_13 = (0, helperFunction_22)(argument);
    if ((localValue_13.requestDialect === "responses")) return responsesStream_e2(argument_2, argument_3, localValue_12);
    if (localValue_13.requestDialect === "chat-completions") return chatCompletions_e2(argument_2, argument_3);
    if (localValue_13.requestDialect === "anthropic-messages") return (0, helperFunction_45)(argument_2, argument_3);
    if ((localValue_13.requestDialect === "google-interactions")) return helperFunction_54(argument_2, argument_3);
    if (localValue_13.requestDialect === "google-generate-content") return (0, helperFunction_62)(argument_2, argument_3);
    if (localValue_13.id === "cloudflare-gemini-run") return helperFunction_64(argument_2, argument_3);
    throw new TypeError((("Adapter " + localValue_13.id) + " does not support HTTP SSE."));
  }
  function helperFunction_77(argument, argument_2) {
    const localValue_12 = (0, helperFunction_22)(argument);
    if (localValue_12.requestDialect === "responses") return (0, responsesStream_e3)(argument_2);
    if (localValue_12.requestDialect === "chat-completions") return chatCompletions_e3(argument_2);
    if (localValue_12.requestDialect === "anthropic-messages") return helperFunction_44(argument_2);
    if (localValue_12.requestDialect === "google-interactions") return (0, helperFunction_53)(argument_2);
    if (localValue_12.requestDialect === "google-generate-content") return (0, helperFunction_61)(argument_2);
    if (localValue_12.id === "cloudflare-gemini-run") return helperFunction_61(helperFunction_63(argument_2));
    throw new TypeError("Adapter " + localValue_12.id + " does not support HTTP JSON.");
  }
  const settingsRecord_4 = {
    e0: helperFunction_20,
    e1: helperFunction_21,
    e2: helperFunction_22,
    e3: helperFunction_23,
    e4: helperFunction_24,
    e5: helperFunction_25,
    e6: helperFunction_26,
    e7: helperFunction_27,
    e8: helperFunction_28,
    e9: helperFunction_29,
    ea: helperFunction_30,
    eb: helperFunction_31,
    ec: helperFunction_32,
    ed: helperFunction_33,
    ee: helperFunction_69,
    ef: helperFunction_70,
    eg: helperFunction_73,
    eh: helperFunction_74,
    ei: helperFunction_75,
    ej: helperFunction_76,
    ek: helperFunction_77,
    el: numericValue_3
  }
  ;
  return settingsRecord_4;
}
)();
