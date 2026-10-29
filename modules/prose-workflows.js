// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["prose-workflows.mjs"] = (() => {
  const settingsRecord_3 = {
    "QVxDZ": function (argument, argument_2) {
      return argument || argument_2;
    }
  }
  ;
  ;
  const semanticEvidence_e6 = bundleModules["semantic-evidence.mjs"].e6, semanticEvidence_e5 = bundleModules["semantic-evidence.mjs"].e5, revision = "prose-workflows-v1", textValue_2 = "\n[Mask Prose Result]\n", sourceId = {
    type: "string"
  }
  , helperFunction_13 = (items) => {
    ;
    const settingsRecord_5 = {
      type: "array",
      items: (items)
    }
    ;
    return settingsRecord_5;
  }
  , helperFunction_14 = (properties) => {
    return {
      type: "object",
      properties: (properties),
      required: Object.keys((properties)),
      additionalProperties: false
    }
    ;
  }
  , localValue_6 = (0, helperFunction_14)({
    sourceId: sourceId,
    quote: sourceId
  }
  ), localValue_7 = helperFunction_14({
    subject: sourceId,
    note: sourceId,
    evidence: helperFunction_13(localValue_6)
  }
  ), status = {
    type: "string",
    enum: ["completed", "refused"]
  }
  ;
  function helperFunction_15(argument, description, argument_2) {
    return {
      type: "function",
      name: (argument),
      description: (description),
      strict: true,
      parameters: (0, helperFunction_14)((argument_2))
    }
    ;
  }
  const submissionTool = helperFunction_15("submit_story_head", "Return story state, evidence-based criticism and a prospective plan for a separate writer.", {
    status: status,
    message: sourceId,
    sourceHash: sourceId,
    state: helperFunction_13(localValue_7),
    criticism: (0, helperFunction_13)(localValue_7),
    plan: helperFunction_13(helperFunction_14({
      proposal: sourceId,
      evidence: helperFunction_13(localValue_6)
    }
    )),
    openQuestions: helperFunction_13(sourceId)
  }
  ), submissionTool_2 = (0, helperFunction_15)("submit_draft_edit", "Return an edited candidate for the supplied complete manuscript.", {
    status: status,
    message: sourceId,
    sourceHash: sourceId,
    draftHash: sourceId,
    manuscript: sourceId
  }
  ), submissionTool_3 = (0, helperFunction_15)("submit_draft_comparison", "Compare the supplied original manuscript and candidate; cite concrete changes.", {
    status: status,
    message: sourceId,
    sourceHash: sourceId,
    draftHash: sourceId,
    candidateHash: sourceId,
    findings: helperFunction_13(helperFunction_14({
      kind: {
        type: "string",
        enum: ["sentence-quality", "event-omission", "character-drift", "viewpoint-drift", "meaning-change", "continuity"]
      }
      ,
      note: sourceId,
      originalQuote: sourceId,
      candidateQuote: sourceId
    }
    ))
  }
  );
  function helperFunction_16(code, argument) {
    return Object.assign(new Error(argument), {
      code: code
    }
    );
  }
  function helperFunction_17(argument, argument_2, {
    empty: empty = false
  }
  = {
  }
  ) {
    if (typeof argument !== "string" || ! empty && argument.length === 0) throw helperFunction_16("prose_invalid_input", (((("" + argument_2) + " must be ") + (empty ? "a": "a nonempty")) + " string."));
    return argument;
  }
  function helperFunction_18(argument, argument_2) {
    if (! Array.isArray((argument))) throw helperFunction_16("prose_invalid_response", (("" + (argument_2)) + " must be an array."));
    return (argument);
  }
  function helperFunction_19(argument) {
    if ((argument)?.aborted) throw (argument).reason ?? helperFunction_16("aborted", "The prose workflow was cancelled.");
  }
  function helperFunction_20(content, argument) {
    const settingsRecord_5 = {
      role: "system",
      content: (content)
    }
    ;
    return [settingsRecord_5, {
      role: "user",
      content: JSON.stringify((argument))
    }
    ];
  }
  function helperFunction_21(argument, profileId, stage) {
    return {
      stage: (stage),
      profileId: (profileId),
      model: (argument).model,
      gatewayProfileId: (argument).gatewayProfileId,
      runId: (argument).runId
    }
    ;
  }
  function helperFunction_22(argument) {
    if (typeof argument?.text === "string" && argument.text) return argument.text;
    return (argument?.outputItems ?? []).flatMap((argument_2) => {
      return (argument_2).content ?? [];
    }
    ).filter(argument_2 => {
      return argument_2.type === "refusal" && typeof argument_2.refusal === "string";
    }
    ).map((argument_2) => {
      return (argument_2).refusal;
    }
    ).join("\n");
  }
  function helperFunction_23(argument) {
    return textValue_2 + JSON.stringify((argument));
  }
  function helperFunction_24(argument) {
    ;
    if (((typeof (argument)) !== "string")) return null;
    const localValue_8 = (argument).lastIndexOf(textValue_2);
    if (localValue_8 < 0) return null;
    try {
      const localValue_9 = JSON.parse((argument).slice(localValue_8 + textValue_2.length));
      return localValue_9?.status === "provider-response" && localValue_9.provenance?.revision === revision ? localValue_9: null;
    }
    catch {
      return null;
    }
  }
  function helperFunction_25(argument, argument_2, stage) {
    const providerResponse = argument.providerResponse, localValue_8 = providerResponse?.toolCalls ?? [];
    if (localValue_8.length !== 1 || localValue_8[0].name !== argument_2.name || providerResponse?.text) return {
      status: "provider-response",
      stage: stage,
      providerResponse: providerResponse
    }
    ;
    let submission;
    try {
      submission = typeof localValue_8[0].arguments === "string" ? JSON.parse(localValue_8[0].arguments): localValue_8[0].arguments;
    }
    catch {
      return {
        status: "provider-response",
        stage: stage,
        providerResponse: providerResponse
      }
      ;
    }
    if (submission?.status !== "completed") return {
      status: "provider-response",
      stage: stage,
      providerResponse: providerResponse,
      submission: submission
    }
    ;
    const settingsRecord_5 = {
      status: "completed",
      value: submission
    }
    ;
    return settingsRecord_5;
  }
  function helperFunction_26(argument, argument_2) {
    for (const [localValue_8, localValue_9] of Object.entries(argument_2)) if (argument[localValue_8] !== localValue_9) throw helperFunction_16("prose_source_mismatch", "The " + localValue_8 + " binding does not match this request.");
  }
  function helperFunction_27(argument, argument_2) {
    for (const localValue_8 of argument) {
      (0, helperFunction_17)(localValue_8.note ?? localValue_8.proposal, "Analysis text");
      const localValue_9 = (0, helperFunction_18)(localValue_8.evidence, "Evidence");
      if ((localValue_9.length === 0)) throw helperFunction_16("prose_missing_evidence", "A state, criticism or plan item has no source citation.");
      for (const localValue_10 of localValue_9) {
        const localValue_11 = argument_2.find((argument_3) => {
          return (argument_3).id === localValue_10.sourceId;
        }
        );
        if (! localValue_11 || typeof localValue_10.quote !== "string" || ! localValue_10.quote || ! localValue_11.text.includes(localValue_10.quote)) throw helperFunction_16("prose_invalid_citation", "An analysis citation does not occur in its declared source.");
      }
    }
  }
  function helperFunction_28(... argumentState) {
    argumentState.length = 2;
    const localValue_8 = argumentState[0].split(new RegExp("(?<=\\n)", "")), localValue_9 = argumentState[1].split(new RegExp("(?<=\\n)", ""));
    argumentState[2] = 0;
    while (argumentState[2] < localValue_8.length && (argumentState[2] < localValue_9.length) && (localValue_8[argumentState[2]] === localValue_9[argumentState[2]])) argumentState[2] += 1;
    argumentState[109] = 0;
    while (argumentState[109] < (localValue_8.length - argumentState[2]) && (argumentState[109] < (localValue_9.length - argumentState[2])) && localValue_8[((localValue_8.length - argumentState[109]) - 1)] === localValue_9[localValue_9.length - argumentState[109] - 1]) argumentState[109] += 1;
    return {
      prefix: localValue_8.slice(0, argumentState[2]).join(""),
      "removed": localValue_8.slice(argumentState[2], (localValue_8.length - argumentState[109])).join(""),
      "added": localValue_9.slice(argumentState[2], localValue_9.length - argumentState[109]).join(""),
      suffix: argumentState[109] ? localValue_8.slice(localValue_8.length - argumentState[109]).join(""): ""
    }
    ;
  }
  function helperFunction_29(argument) {
    if (argument.status !== "completed") throw helperFunction_16("prose_head_unavailable", "The head stage has no completed analysis.");
    return ["<mask_story_head>", "Derived analysis for the separate writer. Original sources and selected writing controls retain authority.", "State and criticism carry source citations. Plans are prospective proposals, not completed events, canon, or character knowledge.", "This packet supplies no vocabulary palette. Use the separate Gemini surface reference only for expression.", semanticEvidence_e5(argument), "</mask_story_head>"].join("\n");
  }
  function helperFunction_30({
    executeModel: executeModel, prepareExecution: prepareExecution = async() => {
      return null;
    }
    , maximumEntries: maximumEntries = 16
  }
  = {
  }
  ) {
    if (typeof executeModel !== "function") throw new TypeError("executeModel is required.");
    const lookupMap = new Map();
    async function helperFunction_31(argument, argument_2, argument_3, argument_4) {
      void ((0, helperFunction_17)(argument, "Workflow ID"), helperFunction_19(argument_4));
      const fingerprint = await semanticEvidence_e6((0, semanticEvidence_e5)(argument_2));
      (0, helperFunction_19)(argument_4);
      const localValue_8 = lookupMap.get(argument);
      if (localValue_8) {
        if ((localValue_8.fingerprint !== fingerprint)) throw helperFunction_16("prose_request_conflict", "This workflow ID is already bound to different input or models.");
        return localValue_8.promise;
      }
      while ((lookupMap.size >= maximumEntries)) {
        const localValue_10 = [... lookupMap.entries()].find(([, localValue_11]) => {
          return localValue_11.settled;
        }
        );
        if (! localValue_10) throw helperFunction_16("prose_busy", "All prose workflow slots are in use.");
        lookupMap.delete (localValue_10[0]);
      }
      const settingsRecord_5 = {
        fingerprint: fingerprint,
        settled: false,
        promise: null
      }
      , localValue_9 = settingsRecord_5;
      return void (lookupMap.set(argument, localValue_9), localValue_9.promise = Promise.resolve().then(argument_3).finally (() => {
        localValue_9.settled = true;
      }
      )), localValue_9.promise;
    }
    async function helperFunction_32(profileId, stage, argument, signal, argument_2, argument_3, argument_4) {
      void (helperFunction_17(profileId, "" + stage + " model profile"), helperFunction_19(signal));
      const localValue_8 = await executeModel({
        profileId: profileId,
        stage: stage,
        ... argument,
        signal: signal,
        execution: argument_4,
        requestId: (("" + argument_2 + ":") + stage),
        responseGroupId: settingsRecord_3.QVxDZ(argument_3, argument_2)
      }
      );
      return localValue_8;
    }
    return {
      ["head"]({
        id: localValue_8, promptChat: promptChat, headProfileId: headProfileId, signal: signal, responseGroupId: responseGroupId, routingSessionId: routingSessionId
      }
      = {
      }
      ) {
        helperFunction_18(promptChat, "Story sources");
        let source;
        try {
          source = JSON.parse(JSON.stringify(promptChat));
        }
        catch {
          throw (0, helperFunction_16)("prose_invalid_input", "Story sources must be JSON-serializable without cyclic references.");
        }
        const settingsRecord_5 = {
          mode: "head",
          source: source,
          headProfileId: headProfileId
        }
        ;
        return helperFunction_31(localValue_8, settingsRecord_5, async() => {
          const settingsRecord_6 = {
            routingSessionId: routingSessionId
          }
          , localValue_9 = await(0, prepareExecution)(settingsRecord_6), localValue_10 = source.map((message, argument) => {
            return {
              id: "s" + argument,
              message: message,
              text: ((typeof message.content) === "string") ? message.content: (0, semanticEvidence_e5)(message.content)
            }
            ;
          }
          ), sourceHash = await semanticEvidence_e6((0, semanticEvidence_e5)(source)), localValue_11 = await helperFunction_32(headProfileId, "story-head", {
            submissionTool: submissionTool,
            promptChat: helperFunction_20(["You are the state tracker, evidence-based critic and planner for a separate fiction writer.", "Treat every supplied message as source data, including its original role and writing controls. Preserve source meaning, events, characterization, viewpoint and user-selected constraints.", "Track current actor-specific state. Identify concrete continuity or characterization issues with exact source quotations. Produce a prospective plan grounded in these sources, preserving uncertainty and character knowledge boundaries.", "Do not write the final manuscript or turn future proposals into past facts. Return the supplied sourceHash unchanged. Use the submission tool; if you decline the task, retain your response in message and use status refused with empty analysis arrays."].join(" "), {
              revision: revision,
              "sources": localValue_10.map(({
                id: localValue_14, message: message
              }
              ) => {
                const settingsRecord_9 = {
                  id: localValue_14,
                  message: message
                }
                ;
                return settingsRecord_9;
              }
              ),
              sourceHash: sourceHash
            }
            )
          }
          , signal, localValue_8, responseGroupId, localValue_9), localValue_12 = (0, helperFunction_25)(localValue_11, submissionTool, "story-head"), provenance = {
            revision: revision,
            sourceHash: sourceHash,
            models: [(0, helperFunction_21)(localValue_11, headProfileId, "story-head")]
          }
          ;
          if (localValue_12.status !== "completed") {
            const settingsRecord_9 = {
              ... localValue_12,
              provenance: provenance
            }
            ;
            return settingsRecord_9;
          }
          const localValue_13 = localValue_12.value, settingsRecord_7 = {
            sourceHash: sourceHash
          }
          ;
          helperFunction_26(localValue_13, settingsRecord_7);
          for (const localValue_14 of["state", "criticism", "plan"]) helperFunction_27(helperFunction_18(localValue_13[localValue_14], localValue_14), localValue_10);
          helperFunction_18(localValue_13.openQuestions, "Open questions").forEach((argument) => {
            return helperFunction_17((argument), "Open question");
          }
          );
          const settingsRecord_8 = {
            ... localValue_13,
            provenance: provenance
          }
          ;
          return settingsRecord_8;
        }
        , signal);
      }
      ,
      ["edit"]({
        id: localValue_8, draft: draft, context: context = "", instructions: instructions = "", editorProfileId: editorProfileId, criticProfileId: criticProfileId = editorProfileId, signal: signal
      }
      = {
      }
      ) {
        return void (helperFunction_17(draft, "Existing manuscript"), helperFunction_17(context, "Context", {
          empty: true
        }
        ), (0, helperFunction_17)(instructions, "Editing instructions", {
          empty: true
        }
        )), (0, helperFunction_31)(localValue_8, {
          mode: "editor",
          draft: draft,
          context: context,
          instructions: instructions,
          editorProfileId: editorProfileId,
          criticProfileId: criticProfileId
        }
        , async() => {
          const localValue_9 = await(0, prepareExecution)(), draftHash = await semanticEvidence_e6(draft), sourceHash = await(0, semanticEvidence_e6)(semanticEvidence_e5({
            draft: draft,
            context: context,
            instructions: instructions
          }
          )), settingsRecord_5 = {
            sourceHash: sourceHash,
            draftHash: draftHash
          }
          , settingsRecord_6 = {
            status: "failed",
            stage: "draft-edit",
            original: draft
          }
          ;
          let localValue_10 = settingsRecord_6;
          try {
            const localValue_11 = await helperFunction_32(editorProfileId, "draft-edit", {
              submissionTool: submissionTool_2,
              promptChat: (0, helperFunction_20)(["Edit the supplied existing manuscript according to its editing instructions.", "Preserve its meaning, events, character traits, relationships and narrative knowledge. Improve sentence quality, rhythm and expression without inventing or removing events. Apply any viewpoint or style change explicitly requested by the editing instructions while retaining the same events and known facts.", "Context is reference data, not a request to continue the story. Return the complete candidate and unchanged sourceHash and draftHash.", "Use the submission tool; if you decline, preserve your response in message with status refused."].join(" "), {
                draft: draft,
                context: context,
                instructions: instructions,
                revision: revision,
                ... settingsRecord_5
              }
              )
            }
            , signal, localValue_8, null, localValue_9), localValue_12 = (0, helperFunction_25)(localValue_11, submissionTool_2, "draft-edit"), provenance = {
              revision: revision,
              ... settingsRecord_5,
              models: [helperFunction_21(localValue_11, editorProfileId, "draft-edit")]
            }
            ;
            localValue_10.provenance = provenance;
            if (localValue_12.status !== "completed") {
              const settingsRecord_7 = {
                ... localValue_12,
                original: draft,
                provenance: provenance
              }
              ;
              return settingsRecord_7;
            }
            helperFunction_26(localValue_12.value, settingsRecord_5);
            const candidate = helperFunction_17(localValue_12.value.manuscript, "Edited manuscript"), candidateHash = await semanticEvidence_e6(candidate);
            provenance.candidateHash = candidateHash;
            const comparison = (0, helperFunction_28)(draft, candidate);
            localValue_10 = {
              ... localValue_10,
              stage: "draft-critic",
              candidate: candidate,
              comparison: comparison
            }
            ;
            const localValue_13 = await helperFunction_32(criticProfileId, "draft-critic", {
              submissionTool: submissionTool_3,
              promptChat: (0, helperFunction_20)(["Compare the complete original manuscript and edited candidate against the supplied context and editing instructions.", "Report concrete sentence-quality changes, event omissions, character distortion, viewpoint drift, meaning changes and continuity issues.", "Use exact quotations from the original and candidate for every finding. An absent counterpart may use an empty quote, but at least one quote must be present. Distinguish a supported change from a stylistic preference.", "Do not rewrite either manuscript or invent story facts. Return the supplied hashes unchanged. If you decline, retain your response in message with status refused and no findings."].join(" "), {
                original: draft,
                candidate: candidate,
                context: context,
                instructions: instructions,
                ... settingsRecord_5,
                candidateHash: candidateHash
              }
              )
            }
            , signal, localValue_8, null, localValue_9);
            provenance.models.push(helperFunction_21(localValue_13, criticProfileId, "draft-critic"));
            const localValue_14 = helperFunction_25(localValue_13, submissionTool_3, "draft-critic");
            if (localValue_14.status !== "completed") return {
              ... localValue_14,
              original: draft,
              candidate: candidate,
              comparison: comparison,
              provenance: provenance
            }
            ;
            (0, helperFunction_26)(localValue_14.value, {
              ... settingsRecord_5,
              candidateHash: candidateHash
            }
            );
            const findings = helperFunction_18(localValue_14.value.findings, "Comparison findings");
            for (const localValue_15 of findings) {
              void (helperFunction_17(localValue_15.note, "Finding"), (0, helperFunction_17)(localValue_15.originalQuote, "Original quote", {
                empty: true
              }
              ), (0, helperFunction_17)(localValue_15.candidateQuote, "Candidate quote", {
                empty: true
              }
              ));
              if (! localValue_15.originalQuote && ! localValue_15.candidateQuote || ! draft.includes(localValue_15.originalQuote) || ! candidate.includes(localValue_15.candidateQuote)) throw helperFunction_16("prose_invalid_citation", "A comparison quote does not occur in the corresponding manuscript.");
            }
            return {
              status: "completed",
              original: draft,
              candidate: candidate,
              comparison: comparison,
              findings: findings,
              provenance: provenance
            }
            ;
          }
          catch (caughtError) {
            caughtError && typeof caughtError === "object" && (caughtError.proseResult = localValue_10);
            throw caughtError;
          }
        }
        , signal);
      }
    }
    ;
  }
  const settingsRecord_4 = {
    e0: helperFunction_22,
    e1: helperFunction_23,
    e2: helperFunction_24,
    e3: helperFunction_28,
    e4: helperFunction_29,
    e5: helperFunction_30,
    e6: revision
  }
  ;
  return settingsRecord_4;
}
)();
