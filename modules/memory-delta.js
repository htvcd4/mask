// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["memory-delta.mjs"] = (() => {
  const settingsRecord_3 = {
    "ETkas": function (argument, argument_2) {
      return argument || argument_2;
    }
  }
  ;
  ;
  const responsesRequest_e6_2 = bundleModules["responses-request.mjs"].e6, terminalCore_e8 = bundleModules["terminal-core.mjs"].e8, textValue_2 = "mask-memory:main-delta:v1", schemaVersion = 1, textValue_3 = "mask-memory:plot-delta:v1", schemaVersion_2 = 1, numericValue_3 = 96, numericValue_4 = (1209600000);
  function helperFunction_13(argument) {
    return (argument) !== null && ((typeof (argument)) === "object") && ! Array.isArray((argument));
  }
  function helperFunction_14(argument, argument_2) {
    return typeof (argument) === "string" ? (argument).trim().slice(0, (argument_2)): "";
  }
  function helperFunction_15(argument, argument_2, localValue_6 = 160) {
    if (! Array.isArray(argument)) return [];
    return Array.from(new Set(argument.map((argument_3) => {
      return helperFunction_14((argument_3), localValue_6);
    }
    ).filter(Boolean))).slice(0, argument_2);
  }
  function helperFunction_16(argument, argument_2, argument_3) {
    return (Array.isArray((argument)) ? (argument): []).map((argument_3)).filter(Boolean).slice(0, (argument_2));
  }
  function helperFunction_17(description) {
    ;
    const helperFunction_30 = (description_2 = "") => {
      return {
        type: "string",
        maxLength: 1000,
        ... description_2 ? {
          description: description_2
        }
        : {
        }
      }
      ;
    }
    ;
    return {
      type: "object",
      description: (description),
      properties: {
        summary: {
          type: "string",
          maxLength: 2000,
          description: "Compact factual changes completed in this response. Do not summarize future possibilities or drafting rationale."
        }
        ,
        events: {
          type: "array",
          maxItems: 12,
          items: {
            type: "object",
            properties: {
              event: helperFunction_30(),
              time: helperFunction_30(),
              location: (0, helperFunction_30)(),
              cause: helperFunction_30(),
              effect: helperFunction_30()
            }
            ,
            required: ["event", "time", "location", "cause", "effect"],
            additionalProperties: false
          }
        }
        ,
        stateFacts: {
          type: "array",
          maxItems: 24,
          items: {
            type: "object",
            properties: {
              subject: helperFunction_30(),
              predicate: helperFunction_30(),
              value: helperFunction_30(),
              epistemic: {
                type: "string",
                enum: ["confirmed", "belief", "rumor"]
              }
              ,
              knownBy: {
                type: "array",
                maxItems: 24,
                items: {
                  type: "string",
                  maxLength: 160
                }
              }
            }
            ,
            required: ["subject", "predicate", "value", "epistemic", "knownBy"],
            additionalProperties: false
          }
        }
        ,
        threads: {
          type: "array",
          maxItems: 12,
          items: {
            type: "object",
            properties: {
              thread: helperFunction_30(),
              status: helperFunction_30()
            }
            ,
            required: ["thread", "status"],
            additionalProperties: false
          }
        }
        ,
        keywords: {
          type: "array",
          maxItems: 32,
          items: {
            type: "string",
            maxLength: 160
          }
        }
      }
      ,
      required: ["summary", "events", "stateFacts", "threads", "keywords"],
      additionalProperties: false
    }
    ;
  }
  function helperFunction_18() {
    const nearTermDirections = {
      type: "array",
      maxItems: 8,
      items: {
        type: "string",
        maxLength: 1000
      }
    }
    ;
    return {
      type: "object",
      properties: {
        arcId: {
          type: "string",
          maxLength: 160
        }
        ,
        arcTitle: {
          type: "string",
          maxLength: 500
        }
        ,
        currentQuestion: {
          type: "string",
          maxLength: 1500
        }
        ,
        currentFunction: {
          type: "string",
          maxLength: 1500
        }
        ,
        nearTermDirections: nearTermDirections,
        dueSeeds: nearTermDirections,
        duePayoffs: nearTermDirections,
        holdOpen: nearTermDirections
      }
      ,
      required: ["arcId", "arcTitle", "currentQuestion", "currentFunction", "nearTermDirections", "dueSeeds", "duePayoffs", "holdOpen"],
      additionalProperties: false
    }
    ;
  }
  function helperFunction_19(description) {
    const helperFunction_30 = (argument) => {
      return {
        type: "array",
        maxItems: 24,
        items: {
          type: "object",
          properties: {
            id: {
              type: "string",
              maxLength: 160
            }
            ,
            status: {
              type: "string",
              enum: (argument)
            }
          }
          ,
          required: ["id", "status"],
          additionalProperties: false
        }
      }
      ;
    }
    , items = {
      type: "object",
      properties: {
        id: {
          type: "string",
          maxLength: 160
        }
        ,
        seed: {
          type: "string",
          maxLength: 1200
        }
        ,
        payoff: {
          type: "string",
          maxLength: 1200
        }
        ,
        status: {
          type: "string",
          enum: ["planned", "seeded", "paid", "invalidated"]
        }
        ,
        knowledgeBoundary: {
          type: "string",
          maxLength: 1000
        }
      }
      ,
      required: ["id", "seed", "payoff", "status", "knowledgeBoundary"],
      additionalProperties: false
    }
    , items_2 = {
      type: "object",
      properties: {
        id: {
          type: "string",
          maxLength: 160
        }
        ,
        kind: {
          type: "string",
          enum: ["unrevealed_canon", "future_plan", "open_question"]
        }
        ,
        statement: {
          type: "string",
          maxLength: 1500
        }
        ,
        status: {
          type: "string",
          enum: ["proposed", "planted", "committed", "revealed", "invalidated"]
        }
        ,
        plantedSurface: {
          type: "string",
          maxLength: 1200
        }
        ,
        intendedPayoff: {
          type: "string",
          maxLength: 1200
        }
        ,
        knowledgeBoundary: {
          type: "string",
          maxLength: 1000
        }
        ,
        revealCondition: {
          type: "string",
          maxLength: 1000
        }
      }
      ,
      required: ["id", "kind", "statement", "status", "plantedSurface", "intendedPayoff", "knowledgeBoundary", "revealCondition"],
      additionalProperties: false
    }
    ;
    return {
      type: "object",
      description: description,
      properties: {
        progressSummary: {
          type: "string",
          maxLength: 1200
        }
        ,
        activeArcStatus: {
          type: "string",
          enum: ["continue", "turn", "payoff", "complete", "replan"],
          description: "Status of the persistent major arc, not completion of this response or its local projection. Use complete only when the entire current major arc ended and nextProjection moves to another arc. Use replan only when the stored long-horizon structure is no longer usable."
        }
        ,
        continuityStatus: {
          type: "string",
          enum: ["grounded", "replan_required"]
        }
        ,
        nextProjection: helperFunction_18(),
        seedUpdates: (0, helperFunction_30)(["planned", "seeded", "paid", "invalidated"]),
        seedUpserts: {
          type: "array",
          maxItems: 24,
          items: items
        }
        ,
        routeUpdates: (0, helperFunction_30)(["available", "selected", "closed"]),
        writerStateUpserts: {
          type: "array",
          maxItems: 24,
          items: items_2
        }
        ,
        writerStateUpdates: helperFunction_30(["proposed", "planted", "committed", "revealed", "invalidated"]),
        needsReplan: {
          type: "boolean",
          description: "True only when accepted sources or the finalized manuscript invalidate the stored long-horizon structure. Finishing the current response, local function, beat, payoff, or projection is not a replan reason."
        }
        ,
        replanReason: {
          type: "string",
          maxLength: 1200
        }
      }
      ,
      required: ["progressSummary", "activeArcStatus", "continuityStatus", "nextProjection", "seedUpdates", "seedUpserts", "routeUpdates", "writerStateUpserts", "writerStateUpdates", "needsReplan", "replanReason"],
      additionalProperties: false
    }
    ;
  }
  function helperFunction_20(argument) {
    if (! helperFunction_13(argument)) throw new TypeError("memoryDelta must be an object.");
    const summary = helperFunction_14(argument.summary, 2000);
    if (! summary) throw new TypeError("memoryDelta.summary must be a non-empty string.");
    const localValue_6 = (0, helperFunction_16)(argument.events, 12, (argument_2) => {
      ;
      if (! helperFunction_13((argument_2))) return null;
      const localValue_7 = (0, helperFunction_14)((argument_2).event, 1000);
      if (! localValue_7) return null;
      return {
        event: localValue_7,
        time: (0, helperFunction_14)((argument_2).time, 1000),
        location: helperFunction_14((argument_2).location, 1000),
        cause: helperFunction_14((argument_2).cause, 1000),
        effect: helperFunction_14((argument_2).effect, 1000)
      }
      ;
    }
    ), stateFacts = helperFunction_16(argument.stateFacts, 24, (argument_2) => {
      ;
      if (! helperFunction_13((argument_2))) return null;
      const subject = (0, helperFunction_14)((argument_2).subject, 1000), predicate = helperFunction_14((argument_2).predicate, 1000), localValue_7 = (0, helperFunction_14)((argument_2).value, 1000);
      if (settingsRecord_3.ETkas(! subject, ! predicate) || ! localValue_7) return null;
      return {
        subject: subject,
        predicate: predicate,
        value: localValue_7,
        epistemic: ["confirmed", "belief", "rumor"].includes((argument_2).epistemic) ? (argument_2).epistemic: "confirmed",
        knownBy: helperFunction_15((argument_2).knownBy, 24)
      }
      ;
    }
    ), threads = (0, helperFunction_16)(argument.threads, 12, argument_2 => {
      if (! helperFunction_13(argument_2)) return null;
      const thread = (0, helperFunction_14)(argument_2.thread, 1000), status = (0, helperFunction_14)(argument_2.status, 1000);
      return thread && status ? {
        thread: thread,
        status: status
      }
      : null;
    }
    );
    return {
      summary: summary,
      events: localValue_6,
      stateFacts: stateFacts,
      threads: threads,
      keywords: helperFunction_15(argument.keywords, 32)
    }
    ;
  }
  function helperFunction_21(argument) {
    if (! helperFunction_13((argument))) return null;
    const currentQuestion = helperFunction_14((argument).currentQuestion, 1500), currentFunction = helperFunction_14((argument).currentFunction, 1500);
    if (settingsRecord_2.tLwwe(! currentQuestion, ! currentFunction)) return null;
    return {
      arcId: helperFunction_14((argument).arcId, 160),
      arcTitle: helperFunction_14((argument).arcTitle, 500),
      currentQuestion: currentQuestion,
      currentFunction: currentFunction,
      nearTermDirections: helperFunction_15((argument).nearTermDirections, 8, 1000),
      dueSeeds: helperFunction_15((argument).dueSeeds, 8, 1000),
      duePayoffs: helperFunction_15((argument).duePayoffs, 8, 1000),
      holdOpen: helperFunction_15((argument).holdOpen, 8, 1000)
    }
    ;
  }
  function helperFunction_22(argument) {
    if (! helperFunction_13(argument)) throw new TypeError("plotDelta must be an object.");
    const progressSummary = helperFunction_14(argument.progressSummary, 1200), items = ["continue", "turn", "payoff", "complete", "replan"], nextProjection = helperFunction_21(argument.nextProjection), items_2 = ["grounded", "replan_required"];
    if (! progressSummary || ! items.includes(argument.activeArcStatus) || ! nextProjection || typeof argument.needsReplan !== "boolean" || ! items_2.includes(argument.continuityStatus) || argument.continuityStatus === "replan_required" && argument.needsReplan !== true || argument.activeArcStatus === "replan" && argument.needsReplan !== true) throw new TypeError("plotDelta does not match the active plot schema.");
    const helperFunction_30 = (argument_2, argument_3) => {
      return helperFunction_16((argument_2), 24, argument_4 => {
        if (! helperFunction_13(argument_4)) return null;
        const localValue_6 = (0, helperFunction_14)(argument_4.id, 160);
        return localValue_6 && (argument_3).includes(argument_4.status) ? {
          id: localValue_6,
          status: argument_4.status
        }
        : null;
      }
      );
    }
    , seedUpserts = helperFunction_16(argument.seedUpserts, 24, argument_2 => {
      if (! (0, helperFunction_13)(argument_2)) return null;
      const localValue_6 = helperFunction_14(argument_2.id, 160), seed = helperFunction_14(argument_2.seed, 1200), payoff = helperFunction_14(argument_2.payoff, 1200), items_3 = ["planned", "seeded", "paid", "invalidated"];
      if (! localValue_6 || ! seed || ! payoff || ! items_3.includes(argument_2.status)) return null;
      return {
        id: localValue_6,
        seed: seed,
        payoff: payoff,
        status: argument_2.status,
        knowledgeBoundary: (0, helperFunction_14)(argument_2.knowledgeBoundary, 1000)
      }
      ;
    }
    ), writerStateUpserts = helperFunction_16(argument.writerStateUpserts, 24, (argument_2) => {
      ;
      if (! (0, helperFunction_13)((argument_2))) return null;
      const localValue_6 = helperFunction_14((argument_2).id, 160), statement = helperFunction_14((argument_2).statement, 1500), items_3 = ["unrevealed_canon", "future_plan", "open_question"], items_4 = ["proposed", "planted", "committed", "revealed", "invalidated"];
      if (! localValue_6 || ! statement || ! items_3.includes((argument_2).kind) || ! items_4.includes((argument_2).status)) return null;
      return {
        id: localValue_6,
        kind: (argument_2).kind,
        statement: statement,
        status: (argument_2).status,
        plantedSurface: (0, helperFunction_14)((argument_2).plantedSurface, 1200),
        intendedPayoff: helperFunction_14((argument_2).intendedPayoff, 1200),
        knowledgeBoundary: helperFunction_14((argument_2).knowledgeBoundary, 1000),
        revealCondition: helperFunction_14((argument_2).revealCondition, 1000)
      }
      ;
    }
    );
    return {
      progressSummary: progressSummary,
      activeArcStatus: argument.activeArcStatus,
      continuityStatus: argument.continuityStatus,
      nextProjection: nextProjection,
      seedUpdates: helperFunction_30(argument.seedUpdates, ["planned", "seeded", "paid", "invalidated"]),
      seedUpserts: seedUpserts,
      routeUpdates: helperFunction_30(argument.routeUpdates, ["available", "selected", "closed"]),
      writerStateUpserts: writerStateUpserts,
      writerStateUpdates: helperFunction_30(argument.writerStateUpdates, ["proposed", "planted", "committed", "revealed", "invalidated"]),
      needsReplan: argument.needsReplan,
      replanReason: helperFunction_14(argument.replanReason, 1200)
    }
    ;
  }
  function helperFunction_23(argument, argument_2) {
    const localValue_6 = argument_2?.terminalMemoryParameter;
    if (! localValue_6) return null;
    const localValue_7 = (0, terminalCore_e8)(argument, argument_2.terminalToolName);
    if (! localValue_7 || ((typeof localValue_7.arguments) !== "string")) return null;
    let localValue_8;
    try {
      localValue_8 = JSON.parse(localValue_7.arguments);
    }
    catch {
      return null;
    }
    if (! (0, helperFunction_13)(localValue_8) || localValue_8[localValue_6] === null) return null;
    try {
      return helperFunction_20(localValue_8[localValue_6]);
    }
    catch {
      return null;
    }
  }
  function helperFunction_24(argument, argument_2) {
    const localValue_6 = argument_2?.terminalPlotParameter;
    if (! localValue_6) return null;
    const localValue_7 = terminalCore_e8(argument, argument_2.terminalToolName);
    if (! localValue_7 || typeof localValue_7.arguments !== "string") return null;
    try {
      const localValue_8 = JSON.parse(localValue_7.arguments);
      return helperFunction_13(localValue_8) && (localValue_8[localValue_6] !== null) ? helperFunction_22(localValue_8[localValue_6]): null;
    }
    catch {
      return null;
    }
  }
  function helperFunction_25(argument) {
    return typeof (argument) === "string" ? (argument).replace(new RegExp("\\r\\n?", "g"), "\n"): "";
  }
  async function helperFunction_26(argument) {
    return responsesRequest_e6_2("assistant\u0000" + helperFunction_25(argument));
  }
  function helperFunction_27(argument, localValue_6 = Date.now()) {
    const localValue_7 = Array.isArray(argument?.entries) ? argument.entries: [];
    return {
      schemaVersion: schemaVersion,
      entries: localValue_7.filter((argument_2) => {
        return helperFunction_13((argument_2)) && ((typeof (argument_2).assistantContentHash) === "string") && Number.isFinite((argument_2).createdAt) && localValue_6 - (argument_2).createdAt <= numericValue_4;
      }
      ).slice((((((((- 96)))))))),
      updatedAt: (0, Number)(argument?.updatedAt) || 0
    }
    ;
  }
  async function helperFunction_28({
    storage: storage, assistantContent: assistantContent, delta: delta, runId: runId = "", now: now = Date.now()
  }
  = {
  }
  ) {
    ;
    if (! storage || typeof storage.getItem !== "function" || typeof storage.setItem !== "function") throw new TypeError("A plugin storage adapter is required.");
    const delta_2 = (0, helperFunction_20)(delta), assistantContentHash = await helperFunction_26(assistantContent), localValue_6 = helperFunction_27(await storage.getItem(textValue_2), now);
    return void (localValue_6.entries = localValue_6.entries.filter((argument) => {
      return ((argument).assistantContentHash) !== (assistantContentHash);
    }
    ), localValue_6.entries.push({
      schemaVersion: schemaVersion,
      id: "main-delta:" + assistantContentHash.slice(0, 24),
      createdAt: now,
      runId: helperFunction_14(runId, 160),
      assistantContentHash: assistantContentHash,
      delta: delta_2
    }
    ), localValue_6.entries = localValue_6.entries.slice((((((((- 96)))))))), localValue_6.updatedAt = now, await storage.setItem(textValue_2, localValue_6)), localValue_6.entries.at((((((((- 1))))))));
  }
  async function helperFunction_29({
    storage: storage, assistantContent: assistantContent, delta: delta, runId: runId = "", now: now = Date.now()
  }
  = {
  }
  ) {
    if (! storage || typeof storage.getItem !== "function" || typeof storage.setItem !== "function") throw new TypeError("A plugin storage adapter is required.");
    const delta_2 = helperFunction_22(delta), assistantContentHash = await helperFunction_26(assistantContent), localValue_6 = helperFunction_27(await storage.getItem(textValue_3), now);
    return void (localValue_6.schemaVersion = schemaVersion_2, localValue_6.entries = localValue_6.entries.filter((argument) => {
      return (argument).assistantContentHash !== assistantContentHash;
    }
    ), localValue_6.entries.push({
      schemaVersion: schemaVersion_2,
      id: "plot-delta:" + assistantContentHash.slice(0, 24),
      createdAt: now,
      runId: helperFunction_14(runId, 160),
      assistantContentHash: assistantContentHash,
      delta: delta_2
    }
    ), localValue_6.entries = localValue_6.entries.slice((((((((- 96)))))))), localValue_6.updatedAt = now, await storage.setItem(textValue_3, localValue_6)), localValue_6.entries.at((((((((- 1))))))));
  }
  const settingsRecord_4 = {
    e0: helperFunction_17,
    e1: helperFunction_19,
    e2: helperFunction_20,
    e3: helperFunction_22,
    e4: helperFunction_23,
    e5: helperFunction_24,
    e6: helperFunction_28,
    e7: helperFunction_29,
    e8: textValue_2,
    e9: schemaVersion,
    ea: textValue_3,
    eb: schemaVersion_2
  }
  ;
  return settingsRecord_4;
}
)();
