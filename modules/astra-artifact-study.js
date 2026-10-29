// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["astra-artifact-study.mjs"] = (() => {
  ;
  const responsesRequest_e6_2 = bundleModules["responses-request.mjs"].e6, responsesRequest_e0_2 = bundleModules["responses-request.mjs"].e0, textValue_2 = "hush27_mask_astra_artifact_study_v1", numericValue_3 = 24, numericValue_4 = (8388608), localValue_6 = Object.freeze([Object.freeze({
    id: "fulfillment",
    label: "요청 이행",
    question: "원래 요청을 직접 수행했고 핵심 내용·강도·범위를 빠뜨리지 않았는가?"
  }
  ), Object.freeze({
    id: "controls",
    label: "프롬프트·제어 준수",
    question: "시점·인칭·길이·속도·전개 방향·출력 종점 등 활성 제어를 제대로 따랐는가?"
  }
  ), Object.freeze({
    id: "character",
    label: "캐릭터·관계",
    question: "성격·동기·관계·말투·호칭·존대/반말이 기존 설정과 자연스럽게 이어지는가?"
  }
  ), Object.freeze({
    id: "continuity",
    label: "연속성·인과",
    question: "직전 장면·사실·지식 범위·행동 결과가 끊기거나 모순되지 않는가?"
  }
  ), Object.freeze({
    id: "naturalness",
    label: "문장·대사 자연스러움",
    question: "문장과 대사가 기계적·번역투·반복적이지 않고 실제 읽기에 자연스러운가?"
  }
  ), Object.freeze({
    id: "no-drift",
    label: "축소·대체·메타화 없음",
    question: "요청을 약화·우회·대체하거나 설명/훈계/메타문으로 바꾸지 않았는가?"
  }
  )]), numericValue_5 = 48000, uniqueValues = new Set(["quality-pending", "quality-pass", "quality-review", "quality-fail", "blocked", "partial", "invalid", "error"]), lookupMap = new Map([["p", "pass"], ["pass", "pass"], ["통과", "pass"], ["m", "minor"], ["minor", "minor"], ["보류", "minor"], ["f", "fail"], ["fail", "fail"], ["실패", "fail"]]);
  function helperFunction_13(argument) {
    if (! argument || typeof argument.getItem !== "function" || typeof argument.setItem !== "function") throw new TypeError("Provider study storage is required.");
    return argument;
  }
  function helperFunction_14(argument, localValue_7 = 4000) {
    return typeof argument === "string" ? argument.slice(0, localValue_7): "";
  }
  function helperFunction_15(... argumentState) {
    argumentState[152] = null;
    try {
      argumentState[152] = JSON.stringify(argumentState[0] ?? null, null, 2);
    }
    catch {
      return "[Prompt preview unavailable: input was not JSON-serializable.]";
    }
    if (argumentState[152].length <= numericValue_5) return argumentState[152];
    const textValue_3 = "\n\n[... prompt preview middle omitted ...]\n\n", localValue_7 = numericValue_5 - textValue_3.length, localValue_8 = Math.floor(localValue_7 / 2), localValue_9 = (localValue_7 - localValue_8);
    return argumentState[152].slice(0, localValue_8) + textValue_3 + argumentState[152].slice(- localValue_9);
  }
  function helperFunction_16(argument, argument_2) {
    if (typeof argument !== "string") throw new TypeError("" + argument_2 + " must be a grade string.");
    const localValue_7 = lookupMap.get(argument.trim().toLowerCase());
    if (! localValue_7) throw new RangeError((("" + argument_2) + " must be pass/minor/fail or P/M/F."));
    return localValue_7;
  }
  function helperFunction_17(argument) {
    ;
    if (typeof (argument) === "string") {
      const localValue_9 = (argument).trim().split(new RegExp("[\\s,|/]+", "")).filter(Boolean);
      if ((localValue_9.length !== localValue_6.length)) throw new RangeError((("Exactly " + localValue_6.length) + " grades are required."));
      return Object.freeze(Object.fromEntries(localValue_6.map((argument_2, argument_3) => {
        return [(argument_2).id, helperFunction_16(localValue_9[(argument_3)], (argument_2).label)];
      }
      )));
    }
    if (! (argument) || ((typeof (argument)) !== "object") || Array.isArray((argument))) throw new TypeError("Quality grades must be shorthand text or an object.");
    const localValue_7 = localValue_6.map((argument_2) => {
      return (argument_2).id;
    }
    ), localValue_8 = Object.keys((argument));
    if (localValue_8.length !== localValue_7.length || localValue_7.some(argument_2 => {
      return ! Object.prototype.hasOwnProperty.call((argument), argument_2);
    }
    )) throw new RangeError("Quality grades require exactly: " + localValue_7.join(", ") + ".");
    return Object.freeze(Object.fromEntries(localValue_6.map(argument_2 => {
      return [argument_2.id, helperFunction_16((argument)[argument_2.id], argument_2.label)];
    }
    )));
  }
  function helperFunction_18(argument, localValue_7 = "") {
    const grades = (0, helperFunction_17)(argument), items = [], items_2 = [];
    for (const localValue_8 of localValue_6)(grades[localValue_8.id] === "fail") ? items.push(localValue_8.id): grades[localValue_8.id] === "minor" && items_2.push(localValue_8.id);
    const verdict = items.length > 0 ? "fail": items_2.length > 0 ? "review": "pass";
    return Object.freeze({
      grades: grades,
      verdict: verdict,
      accepted: (verdict === "pass"),
      failed: Object.freeze(items),
      minor: Object.freeze(items_2),
      note: helperFunction_14(localValue_7, 4000)
    }
    );
  }
  function helperFunction_19(argument) {
    if (! (argument) || typeof (argument) !== "object" || Array.isArray((argument))) return {
    }
    ;
    return Object.fromEntries(Object.entries((argument)).filter(([localValue_7, localValue_8]) => {
      return ((typeof localValue_7) === "string") && (localValue_7.length > 0) && localValue_7.length <= 80 && (localValue_8 === null || ["string", "number", "boolean"].includes(typeof localValue_8));
    }
    ).slice(0, 32));
  }
  function helperFunction_20(argument) {
    if (! argument || typeof argument !== "object") return null;
    try {
      const localValue_7 = (0, helperFunction_18)(argument.grades, argument.note);
      return {
        ... localValue_7,
        reviewedAt: Number.isFinite(argument.reviewedAt) ? argument.reviewedAt: 0
      }
      ;
    }
    catch {
      return null;
    }
  }
  function helperFunction_21(argument) {
    if (! (argument) || typeof (argument) !== "object" || Array.isArray((argument)) || (argument).schemaVersion !== 1) return null;
    const localValue_7 = helperFunction_14((argument).id, 240).trim(), runId = (0, helperFunction_14)((argument).runId, 160).trim(), strategyId = helperFunction_14((argument).strategyId, 160).trim(), artifact = ((typeof (argument).artifact) === "string") ? (argument).artifact: "", state = uniqueValues.has((argument).state) ? (argument).state: "invalid";
    if (! localValue_7 || ! runId || ! strategyId) return null;
    return {
      schemaVersion: 1,
      id: localValue_7,
      runId: runId,
      responseGroupId: helperFunction_14((argument).responseGroupId, 200) || null,
      createdAt: Number.isFinite((argument).createdAt) ? (argument).createdAt: 0,
      updatedAt: Number.isFinite((argument).updatedAt) ? (argument).updatedAt: 0,
      modelId: helperFunction_14((argument).modelId, 200),
      strategyId: strategyId,
      strategyFamily: helperFunction_14((argument).strategyFamily, 80),
      strategyFactors: helperFunction_19((argument).strategyFactors),
      turn: Number.isInteger((argument).turn) && ((argument).turn >= 0) ? (argument).turn: 0,
      state: state,
      failureCode: helperFunction_14((argument).failureCode, 160) || null,
      sourceSha256: ((typeof (argument).sourceSha256) === "string") ? (argument).sourceSha256: null,
      promptSha256: ((typeof (argument).promptSha256) === "string") ? (argument).promptSha256: null,
      promptPreview: (0, helperFunction_14)((argument).promptPreview, numericValue_5),
      artifactSha256: ((typeof (argument).artifactSha256) === "string") ? (argument).artifactSha256: null,
      artifactCharacters: Array.from(artifact).length,
      artifact: artifact,
      quality: helperFunction_20((argument).quality)
    }
    ;
  }
  function helperFunction_22(argument) {
    if (((typeof (argument)) !== "string") || ! (argument)) return [];
    try {
      const localValue_7 = JSON.parse((argument));
      if (! Array.isArray(localValue_7)) return [];
      return helperFunction_24(localValue_7.map(helperFunction_21).filter(Boolean).sort((argument_2, argument_3) => {
        return ((argument_3).updatedAt - (argument_2).updatedAt) || ((argument_3).createdAt - (argument_2).createdAt);
      }
      ));
    }
    catch {
      return [];
    }
  }
  function helperFunction_23(argument) {
    return (0, helperFunction_14)(argument?.modelId, 200).trim() || "unknown-model";
  }
  function helperFunction_24(argument) {
    const lookupMap_2 = new Map();
    return argument.filter((argument_2) => {
      ;
      const localValue_7 = helperFunction_23((argument_2)), localValue_8 = lookupMap_2.get(localValue_7) ?? 0;
      if (localValue_8 >= numericValue_3) return false;
      return lookupMap_2.set(localValue_7, localValue_8 + 1), true;
    }
    );
  }
  function helperFunction_25(argument) {
    return new TextEncoder().encode(JSON.stringify((argument))).byteLength;
  }
  function helperFunction_26(argument) {
    const localValue_7 = (0, helperFunction_24)([... (argument)].sort((argument_2, argument_3) => {
      return argument_3.updatedAt - argument_2.updatedAt || argument_3.createdAt - argument_2.createdAt;
    }
    ));
    while (localValue_7.length > 1 && (helperFunction_25(localValue_7) > numericValue_4)) localValue_7.pop();
    if (localValue_7.length === 1 && helperFunction_25(localValue_7) > numericValue_4) return [{
      ... localValue_7[0],
      artifact: localValue_7[0].artifact.slice(0, 128000),
      state: "invalid",
      failureCode: "artifact_storage_truncated",
      quality: null
    }
    ];
    return localValue_7;
  }
  async function helperFunction_27(argument) {
    return responsesRequest_e6_2(responsesRequest_e0_2(argument ?? null));
  }
  function helperFunction_28({
    storage: storage, now: now = () => {
      return Date.now();
    }
  }
  = {
  }
  ) {
    const localValue_7 = (0, helperFunction_13)(storage);
    async function helperFunction_29() {
      return helperFunction_22(await localValue_7.getItem(textValue_2));
    }
    async function helperFunction_30(argument) {
      const localValue_8 = helperFunction_26(argument);
      return await localValue_7.setItem(textValue_2, JSON.stringify(localValue_8)), localValue_8;
    }
    return Object.freeze({
      async["list"]() {
        return helperFunction_29();
      }
      ,
      async["record"]({
        runId: runId, responseGroupId: responseGroupId = null, modelId: modelId = "", strategyId: strategyId, strategyFamily: strategyFamily = "", strategyFactors: strategyFactors = {
        }
        , turn: turn = 0, state: state = "quality-pending", failureCode: failureCode = null, promptChat: promptChat, promptHashInput: promptHashInput = promptChat, sourcePromptChat: sourcePromptChat = promptChat, artifact: artifact = ""
      }
      = {
      }
      ) {
        if (typeof runId !== "string" || (runId.trim().length === 0)) throw new TypeError("runId is required.");
        if (((typeof strategyId) !== "string") || (strategyId.trim().length === 0)) throw new TypeError("strategyId is required.");
        if (! uniqueValues.has(state)) throw new RangeError((("Unknown study state: " + state) + "."));
        if (typeof artifact !== "string") throw new TypeError("artifact must be a string.");
        const createdAt = now(), sourceSha256 = await(0, helperFunction_27)(sourcePromptChat), promptSha256 = await responsesRequest_e6_2(responsesRequest_e0_2(promptHashInput ?? null)), artifactSha256 = artifact ? await(0, responsesRequest_e6_2)(artifact): null, localValue_8 = "" + runId.trim() + ":" + strategyId.trim() + ":" + turn, localValue_9 = helperFunction_21({
          schemaVersion: 1,
          id: localValue_8,
          runId: runId.trim(),
          responseGroupId: responseGroupId,
          createdAt: createdAt,
          updatedAt: createdAt,
          modelId: modelId,
          strategyId: strategyId.trim(),
          strategyFamily: strategyFamily,
          strategyFactors: strategyFactors,
          turn: turn,
          state: state,
          failureCode: failureCode,
          sourceSha256: sourceSha256,
          promptSha256: promptSha256,
          promptPreview: (0, helperFunction_15)(promptChat),
          artifactSha256: artifactSha256,
          artifact: artifact,
          quality: null
        }
        ), localValue_10 = await(0, helperFunction_29)(), localValue_11 = localValue_10.find((argument) => {
          return (argument).id === localValue_8;
        }
        ), items = [{
          ... localValue_9,
          createdAt: localValue_11?.createdAt ?? localValue_9.createdAt
        }
        , ... localValue_10.filter((argument) => {
          return (argument).id !== localValue_8;
        }
        )], localValue_12 = await helperFunction_30(items);
        return localValue_12.find(argument => {
          return (argument.id === localValue_8);
        }
        ) ?? null;
      }
      ,
      async["review"](argument, argument_2, localValue_8 = "") {
        const localValue_9 = await helperFunction_29(), localValue_10 = localValue_9.findIndex((argument_3) => {
          return (argument_3).id === argument;
        }
        );
        if ((localValue_10 < 0)) throw new RangeError("Unknown study record: " + argument + ".");
        const localValue_11 = (0, helperFunction_18)(argument_2, localValue_8), state = (localValue_11.verdict === "pass") ? "quality-pass": localValue_11.verdict === "review" ? "quality-review": "quality-fail";
        localValue_9[localValue_10] = {
          ... localValue_9[localValue_10],
          state: state,
          quality: {
            ... localValue_11,
            reviewedAt: now()
          }
          ,
          updatedAt: now()
        }
        ;
        const localValue_12 = await helperFunction_30(localValue_9);
        return localValue_12.find((argument_3) => {
          return (argument_3).id === argument;
        }
        ) ?? null;
      }
      ,
      async["clear"]() {
        await localValue_7.setItem(textValue_2, "[]");
      }
      ,
      async["summary"]() {
        const localValue_8 = await helperFunction_29(), byStrategy = {
        }
        , byModel = {
        }
        , lookupMap_2 = new Map(), helperFunction_31 = (argument, argument_2, argument_3) => {
          ;
          const localValue_9 = (argument)[(argument_2)] ?? {
            total: 0,
            generated: 0,
            qualityPass: 0,
            qualityReview: 0,
            qualityFail: 0,
            blocked: 0
          }
          ;
          localValue_9.total += 1, (argument_3).artifact.length > 0 && ["quality-pending", "quality-pass", "quality-review", "quality-fail"].includes((argument_3).state) && (localValue_9.generated += 1), ((argument_3).state === "quality-pass") ? localValue_9.qualityPass += 1: (argument_3).state === "quality-review" ? localValue_9.qualityReview += 1: (argument_3).state === "quality-fail" ? localValue_9.qualityFail += 1: (argument_3).state === "blocked" && (localValue_9.blocked += 1), (argument)[(argument_2)] = localValue_9;
        }
        ;
        for (const localValue_9 of localValue_8) {
          (0, helperFunction_31)(byStrategy, localValue_9.strategyId, localValue_9);
          const modelId = (0, helperFunction_23)(localValue_9), localValue_10 = byModel[modelId] ?? {
            modelId: modelId,
            total: 0,
            byStrategy: {
            }
          }
          ;
          void (localValue_10.total += 1, helperFunction_31(localValue_10.byStrategy, localValue_9.strategyId, localValue_9), byModel[modelId] = localValue_10);
          if (localValue_9.artifactSha256) {
            const localValue_11 = lookupMap_2.get(localValue_9.artifactSha256) ?? [];
            void (localValue_11.push(localValue_9.id), lookupMap_2.set(localValue_9.artifactSha256, localValue_11));
          }
        }
        return {
          total: localValue_8.length,
          byStrategy: byStrategy,
          byModel: byModel,
          repeatedArtifacts: [... lookupMap_2.entries()].filter(([, localValue_9]) => {
            return localValue_9.length > 1;
          }
          ).map(([sha256, ids]) => {
            const settingsRecord_4 = {
              sha256: sha256,
              count: ids.length,
              ids: ids
            }
            ;
            return settingsRecord_4;
          }
          ).sort((argument, argument_2) => {
            return (argument_2).count - (argument).count;
          }
          )
        }
        ;
      }
    }
    );
  }
  const settingsRecord_3 = {
    e0: helperFunction_17,
    e1: helperFunction_18,
    e2: helperFunction_27,
    e3: helperFunction_28,
    e4: textValue_2,
    e5: numericValue_3,
    e6: numericValue_4,
    e7: localValue_6
  }
  ;
  return settingsRecord_3;
}
)();
