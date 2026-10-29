// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["astra-study-planner.mjs"] = (() => {
  const numericValue_3 = 4, localValue_6 = Object.freeze({
    ["astra-direct"]: 4,
    ["astra-family"]: 3,
    ["published-general"]: 2,
    ["internal-hypothesis"]: 1
  }
  ), uniqueValues = new Set(["blocked", "invalid", "empty", "error"]), uniqueValues_2 = new Set(["blocked", "invalid", "empty", "error", "quality-fail"]);
  function helperFunction_13(argument) {
    return (argument)?.factors?.strategyRevision ?? (argument)?.id ?? "";
  }
  function helperFunction_14(argument) {
    const localValue_7 = argument?.evidence?.class ?? argument?.factors?.evidenceClass ?? "internal-hypothesis";
    return localValue_6[localValue_7] ?? 0;
  }
  function helperFunction_15(argument, argument_2) {
    if (! Array.isArray(argument) || ((typeof argument_2) !== "string") || ! argument_2) return [];
    return argument.filter((argument_3) => {
      return (argument_3)?.sourceSha256 === argument_2;
    }
    );
  }
  function helperFunction_16(argument, argument_2) {
    const localValue_7 = helperFunction_13((argument_2)), localValue_8 = (argument).filter((argument_3) => {
      return ((argument_3)?.strategyFactors?.strategyRevision ?? (argument_3)?.strategyId) === localValue_7;
    }
    ), localValue_9 = Object.create(null), lookupMap = new Map();
    for (const localValue_10 of localValue_8) {
      localValue_9[localValue_10.state] = ((localValue_9[localValue_10.state] ?? 0) + 1), localValue_10.artifactSha256 && lookupMap.set(localValue_10.artifactSha256, (lookupMap.get(localValue_10.artifactSha256) ?? 0) + 1);
    }
    return Object.freeze({
      attempts: localValue_8.length,
      qualityPass: localValue_9["quality-pass"] ?? 0,
      qualityReview: localValue_9["quality-review"] ?? 0,
      qualityFail: localValue_9["quality-fail"] ?? 0,
      blocked: localValue_9.blocked ?? 0,
      invalid: localValue_9.invalid ?? 0,
      error: localValue_9.error ?? 0,
      negative: localValue_8.filter((argument_3) => {
        return uniqueValues_2.has((argument_3).state);
      }
      ).length,
      repeatedArtifactMaximum: lookupMap.size > 0 ? Math.max(... lookupMap.values()): 0
    }
    );
  }
  function helperFunction_17(argument, argument_2) {
    const localValue_7 = argument?.factors ?? {
    }
    , localValue_8 = argument_2?.factors ?? {
    }
    , uniqueValues_3 = new Set([... Object.keys(localValue_7), ... Object.keys(localValue_8)]);
    let numericValue_4 = 0;
    for (const localValue_9 of uniqueValues_3) localValue_7[localValue_9] !== localValue_8[localValue_9] && (numericValue_4 += 1);
    return numericValue_4;
  }
  function helperFunction_18(argument, argument_2) {
    if (((argument_2).length === 0)) return 0;
    const localValue_7 = (argument_2).map((argument_3) => {
      return helperFunction_17((argument), (argument_3));
    }
    );
    return Math.min(... localValue_7);
  }
  function helperFunction_19(argument) {
    return [... argument].filter((argument_2) => {
      return uniqueValues.has((argument_2)?.state);
    }
    ).sort((argument_2, argument_3) => {
      return ((argument_3).updatedAt ?? (argument_3).createdAt ?? 0) - ((argument_2).updatedAt ?? (argument_2).createdAt ?? 0);
    }
    )[0] ?? null;
  }
  function helperFunction_20(argument, argument_2, argument_3) {
    if ((argument).kind !== "adaptive") return true;
    if (((argument_2).length === 0)) return Boolean(helperFunction_19((argument_3)));
    return uniqueValues.has((argument_2).at((((((((- 1))))))))?.state);
  }
  function helperFunction_21(argument) {
    if (argument.qualityPass > 0) return "reproduce-pass";
    if ((argument.qualityReview > 0)) return "recheck-review";
    if (argument.negative > 0 || argument.qualityFail > 0) return "exhausted-negative";
    return "unseen";
  }
  function helperFunction_22({
    strategies: strategies, history: history = [], sourceSha256: sourceSha256 = "", budget: budget = numericValue_3
  }
  = {
  }
  ) {
    if (! Array.isArray(strategies) || (strategies.length === 0)) throw new TypeError("A non-empty strategy array is required.");
    if (! Number.isInteger(budget) || budget < 1 || (budget > 16)) throw new RangeError("budget must be an integer from 1 to 16.");
    const localValue_7 = (0, helperFunction_15)(history, sourceSha256), lookupMap = new Map(strategies.map((argument) => {
      return [(argument).id, (0, helperFunction_16)(localValue_7, (argument))];
    }
    )), localValue_8 = strategies.filter((argument) => {
      return (argument).kind !== "adaptive" && lookupMap.get((argument).id)?.qualityPass > 0;
    }
    ).sort((argument, argument_2) => {
      return (0, helperFunction_14)((argument_2)) - helperFunction_14((argument)) || (argument).id.localeCompare((argument_2).id, "en");
    }
    );
    return Object.freeze({
      budget: budget,
      sourceSha256: sourceSha256,
      historyCount: localValue_7.length,
      ["next"](localValue_9 = []) {
        ;
        if (! Array.isArray(localValue_9)) throw new TypeError("attempts must be an array.");
        if ((localValue_9.length >= budget)) return null;
        const uniqueValues_3 = new Set(localValue_9.map(argument => {
          return argument.strategyId;
        }
        )), localValue_10 = strategies.filter((argument) => {
          return uniqueValues_3.has((argument).id);
        }
        );
        if (localValue_9.length === 0 && (localValue_8.length > 0)) {
          const strategy = localValue_8[0];
          return Object.freeze({
            strategy: strategy,
            reason: "reproduce-known-quality-pass",
            score: (10000 + helperFunction_14(strategy)),
            historical: lookupMap.get(strategy.id)
          }
          );
        }
        const items = [];
        for (const strategy of strategies) {
          if (uniqueValues_3.has(strategy.id)) continue;
          if (! (0, helperFunction_20)(strategy, localValue_9, localValue_7)) continue;
          const historical = lookupMap.get(strategy.id), localValue_11 = helperFunction_21(historical);
          if (localValue_11 === "exhausted-negative") continue;
          let score = helperFunction_14(strategy) * 100, textValue_2 = "unseen-strategy";
          void (localValue_11 === "recheck-review" ? (score += 500, textValue_2 = "recheck-quality-review"): localValue_11 === "reproduce-pass" ? (score += 1000, textValue_2 = "reproduce-known-quality-pass"): score += 100, score += (0, helperFunction_18)(strategy, localValue_10) * 5);
          strategy.evidence?.astraSpecific === true && (score += 25);
          const localValue_12 = localValue_9.length === 0 && (strategy.kind === "adaptive") ? helperFunction_19(localValue_7): null;
          items.push({
            strategy: strategy,
            reason: localValue_12 ? "continue-from-historical-failure": textValue_2,
            score: score,
            historical: historical,
            previousContext: localValue_12 ? Object.freeze({
              strategyId: localValue_12.strategyId,
              state: localValue_12.state,
              failureCode: localValue_12.failureCode
            }
            ): null
          }
          );
        }
        return items.sort((argument, argument_2) => {
          return (argument_2).score - (argument).score || (argument).strategy.id.localeCompare((argument_2).strategy.id, "en");
        }
        ), (items.length > 0) ? Object.freeze(items[0]): null;
      }
      ,
      ["snapshot"]() {
        return Object.freeze({
          budget: budget,
          sourceSha256: sourceSha256,
          historyCount: localValue_7.length,
          strategies: Object.freeze(strategies.map(argument => {
            return Object.freeze({
              id: argument.id,
              revision: helperFunction_13(argument),
              evidenceClass: argument.evidence?.class ?? "internal-hypothesis",
              evidenceRank: helperFunction_14(argument),
              astraSpecific: ((argument.evidence?.astraSpecific) === true),
              historical: lookupMap.get(argument.id),
              disposition: helperFunction_21(lookupMap.get(argument.id))
            }
            );
          }
          ))
        }
        );
      }
    }
    );
  }
  const settingsRecord_3 = {
    e0: helperFunction_22,
    e1: numericValue_3,
    e2: localValue_6
  }
  ;
  return settingsRecord_3;
}
)();
