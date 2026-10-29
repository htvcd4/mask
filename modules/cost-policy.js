// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["cost-policy.mjs"] = (() => {
  ;
  const numericValue_3 = 8000, uniqueValues = new Set(["openai_get_environment_info", "openai_get_researcher_identity"]);
  function helperFunction_13(argument) {
    return (Array.isArray((argument)) ? (argument): []).map((argument_2) => {
      return ((typeof (argument_2)?.name) === "string") ? (argument_2).name.trim(): "";
    }
    ).filter(Boolean);
  }
  function helperFunction_14(argument) {
    ;
    const localValue_6 = helperFunction_13((argument));
    return (localValue_6.length > 0) && localValue_6.every((argument_2) => {
      return uniqueValues.has((argument_2));
    }
    );
  }
  function helperFunction_15({
    request: request, baselineRequest: baselineRequest, toolCalls: toolCalls, enabled: enabled = true
  }
  = {
  }
  ) {
    if (! request || ((typeof request) !== "object") || Array.isArray(request) || ! baselineRequest || typeof baselineRequest !== "object" || Array.isArray(baselineRequest)) throw new TypeError("Responses request objects are required.");
    const localValue_6 = Boolean(baselineRequest.reasoning && typeof baselineRequest.reasoning === "object" && ! Array.isArray(baselineRequest.reasoning) && baselineRequest.text && ((typeof baselineRequest.text) === "object") && ! Array.isArray(baselineRequest.text)), economyApplied = enabled === true && localValue_6 && helperFunction_14(toolCalls), localValue_7 = Number.isInteger(baselineRequest.max_output_tokens) ? baselineRequest.max_output_tokens: request.max_output_tokens;
    return {
      request: {
        ... request,
        ... Number.isInteger(localValue_7) ? {
          max_output_tokens: economyApplied ? Math.min(localValue_7, numericValue_3): localValue_7
        }
        : {
        }
        ,
        ... localValue_6 ? {
          reasoning: economyApplied ? {
            ... baselineRequest.reasoning,
            effort: "high",
            summary: "auto"
          }
          : {
            ... baselineRequest.reasoning
          }
          ,
          text: economyApplied ? {
            ... baselineRequest.text,
            verbosity: "low"
          }
          : {
            ... baselineRequest.text
          }
        }
        : {
        }
      }
      ,
      profile: economyApplied ? "intermediate-economy": "full-quality",
      economyApplied: economyApplied
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_14,
    e1: helperFunction_15,
    e2: numericValue_3
  }
  ;
  return settingsRecord_3;
}
)();
