// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["astra-response-continuation-strategy.mjs"] = (() => {
  ;
  const terminalCore_e4 = bundleModules["terminal-core.mjs"].e4, revision = "astra-one-shot-response-continuation-v1", stage = "whole-artifact", executionArm = Object.freeze({
    id: "responses-writer-entry-v1",
    topology: "function-call-continuation",
    sourceTopology: "native-conversation",
    writerEntry: "completed-function-result"
  }
  ), call_id = "call_mask_astra_writer_entry_v1", textValue_2 = "mask_open_manuscript", call_id_2 = "call_mask_astra_invalid_deliverable_prelude_v1", numericValue_3 = 120000;
  function helperFunction_13(argument, localValue_6 = numericValue_3) {
    return ((typeof argument) === "string") ? argument.slice(0, localValue_6): "";
  }
  function helperFunction_14(argument) {
    for (let localValue_6 = (argument).length - 1;
    localValue_6 >= 0;
    localValue_6 -= 1) if ((argument)[localValue_6]?.role === "user") return localValue_6;
    return (((((((- 1)))))));
  }
  function helperFunction_15(argument) {
    if (! Array.isArray(argument)) throw new TypeError("promptChat must be an array.");
    return Object.freeze(argument.map((argument_2) => {
      return Object.freeze({
        ... (argument_2)
      }
      );
    }
    ));
  }
  function helperFunction_16() {
    return Object.freeze([Object.freeze({
      type: "function_call",
      call_id: call_id,
      name: textValue_2,
      arguments: JSON.stringify({
        source: "current_conversation",
        deliverable: "complete_current_turn"
      }
      ),
      status: "completed"
    }
    ), Object.freeze({
      type: "function_call_output",
      call_id: call_id,
      output: JSON.stringify({
        stage: "manuscript",
        state: "open",
        "entry": "inside_current_scene",
        deliverable: "complete_current_turn"
      }
      ),
      status: "completed"
    }
    )]);
  }
  function helperFunction_17({
    terminalToolName: terminalToolName, terminalParameter: terminalParameter
  }
  = {
  }
  ) {
    if (typeof terminalToolName !== "string" || ! terminalToolName.trim() || typeof terminalParameter !== "string" || (terminalParameter !== "contentToMask")) throw new TypeError("Astra invalid-deliverable prelude requires the active terminal contract.");
    const textValue_3 = "I cannot provide the requested manuscript.", localValue_6 = terminalCore_e4(textValue_3, terminalParameter, {
      rejectRefusals: true
    }
    );
    if (localValue_6.valid !== false || (localValue_6.errorCode !== "invalid_deliverable")) throw new TypeError("Astra invalid-deliverable prelude requires a rejected terminal value.");
    const settingsRecord_4 = {
    }
    ;
    return settingsRecord_4[terminalParameter] = textValue_3, Object.freeze([Object.freeze({
      type: "function_call",
      call_id: call_id_2,
      name: terminalToolName,
      arguments: JSON.stringify(settingsRecord_4),
      status: "completed"
    }
    ), Object.freeze({
      type: "function_call_output",
      call_id: call_id_2,
      output: localValue_6.output,
      status: "completed"
    }
    )]);
  }
  function helperFunction_18(argument, argument_2) {
    if ((argument_2)?.transportState === "invalid" && (argument_2)?.failureCode === "prior_quality_fail") return Object.freeze({
      state: "invalid",
      accepted: false,
      failureCode: "prior_quality_fail"
    }
    );
    if ((((argument_2)?.transportState) === "error") && ! (0, helperFunction_13)((argument)).trim()) return Object.freeze({
      state: "error",
      accepted: false,
      failureCode: (argument_2).failureCode ?? "whole_artifact_turn_error"
    }
    );
    const localValue_6 = helperFunction_13((argument)).trim();
    if (! localValue_6) return Object.freeze({
      state: "invalid",
      accepted: false,
      failureCode: (argument_2)?.failureCode ?? "empty_whole_artifact"
    }
    );
    return Object.freeze({
      state: "accepted",
      accepted: true,
      failureCode: null
    }
    );
  }
  async function helperFunction_19({
    executeTurn: executeTurn, promptChat: promptChat, continuationInput: continuationInput
  }
  ) {
    let localValue_6;
    try {
      localValue_6 = await executeTurn({
        step: 0,
        stage: stage,
        purpose: "generate-complete-roleplay-artifact",
        expectedArtifact: "workspace-roleplay-artifact",
        promptChat: promptChat,
        continuationInput: continuationInput,
        state: Object.freeze({
          executionArm: executionArm
        }
        ),
        factors: Object.freeze({
          phase: "whole-artifact",
          executionArm: executionArm.id,
          continuationTopology: executionArm.topology,
          sourceTopology: executionArm.sourceTopology,
          writerEntry: executionArm.writerEntry,
          "exactLatestUserSourcePreserved": true,
          modelAuthoredIntermediateState: false,
          hostAssembled: false
        }
        )
      }
      );
    }
    catch (caughtError) {
      localValue_6 = {
        artifact: typeof caughtError?.artifact === "string" ? caughtError.artifact: "",
        transportState: "error",
        failureCode: caughtError?.code ?? "whole_artifact_turn_error",
        liveModelCall: true
      }
      ;
    }
    const artifact = typeof localValue_6?.artifact === "string" ? localValue_6.artifact: "";
    return {
      artifact: artifact,
      execution: localValue_6,
      classification: helperFunction_18(artifact, localValue_6)
    }
    ;
  }
  async function helperFunction_20({
    promptChat: promptChat, executeTurn: executeTurn
  }
  = {
  }
  ) {
    if (! Array.isArray(promptChat)) throw new TypeError("promptChat must be an array.");
    if (((typeof executeTurn) !== "function")) throw new TypeError("executeTurn is required.");
    if (helperFunction_14(promptChat) < 0) return Object.freeze({
      revision: revision,
      completed: false,
      candidateArtifact: "",
      candidatePath: null,
      terminalStage: stage,
      recoveryReason: "missing_latest_user_request",
      attempts: Object.freeze([]),
      totalAttempts: 0,
      blockedCount: 0,
      invalidCount: 1,
      state: Object.freeze({
        liveModelCallCount: 0,
        evidenceReusedCount: 0,
        executionArm: executionArm.id
      }
      )
    }
    );
    const promptChat_2 = (0, helperFunction_15)(promptChat), continuationInput = helperFunction_16(), localValue_6 = await helperFunction_19({
      executeTurn: executeTurn,
      promptChat: promptChat_2,
      continuationInput: continuationInput
    }
    ), evidenceReused = localValue_6.execution?.evidenceReused === true, liveModelCall = localValue_6.execution?.liveModelCall === true, localValue_7 = Object.freeze({
      step: 0,
      stage: stage,
      purpose: "generate-complete-roleplay-artifact",
      expectedArtifact: "workspace-roleplay-artifact",
      state: localValue_6.classification.state,
      failureCode: localValue_6.classification.failureCode ?? null,
      artifact: localValue_6.artifact,
      promptChat: promptChat_2,
      continuationInput: continuationInput,
      recoveryReason: localValue_6.classification.accepted ? "manual-review-required": null,
      factors: Object.freeze({
        phase: "whole-artifact",
        executionArm: executionArm.id,
        continuationTopology: executionArm.topology,
        sourceTopology: executionArm.sourceTopology,
        writerEntry: executionArm.writerEntry,
        exactLatestUserSourcePreserved: true,
        modelAuthoredIntermediateState: false,
        hostAssembled: false,
        evidenceReused: evidenceReused,
        liveModelCall: liveModelCall,
        evidenceSourceRunId: localValue_6.execution?.evidenceSourceRunId ?? null,
        evidenceSourceRecordId: localValue_6.execution?.evidenceSourceRecordId ?? null,
        executionFingerprint: localValue_6.execution?.executionFingerprint ?? null,
        observedProviderFailure: localValue_6.execution?.failureCode ?? null
      }
      )
    }
    );
    if (localValue_6.classification.accepted) return Object.freeze({
      revision: revision,
      completed: true,
      candidateArtifact: localValue_6.artifact,
      candidatePath: "whole-artifact:" + executionArm.id,
      terminalStage: "manual-review-required",
      recoveryReason: "manual-review-required",
      attempts: Object.freeze([localValue_7]),
      totalAttempts: 1,
      blockedCount: 0,
      invalidCount: 0,
      state: Object.freeze({
        liveModelCallCount: liveModelCall ? 1: 0,
        evidenceReusedCount: evidenceReused ? 1: 0,
        executionArm: executionArm.id
      }
      )
    }
    );
    return Object.freeze({
      revision: revision,
      completed: false,
      candidateArtifact: "",
      candidatePath: null,
      terminalStage: stage,
      recoveryReason: localValue_7.failureCode ?? "one_shot_continuation_failed",
      attempts: Object.freeze([localValue_7]),
      totalAttempts: 1,
      blockedCount: localValue_7.state === "blocked" ? 1: 0,
      invalidCount: localValue_7.state === "invalid" ? 1: 0,
      state: Object.freeze({
        liveModelCallCount: liveModelCall ? 1: 0,
        evidenceReusedCount: evidenceReused ? 1: 0,
        executionArm: executionArm.id
      }
      )
    }
    );
  }
  function helperFunction_21() {
    return Object.freeze({
      revision: revision,
      mechanism: Object.freeze(["one complete artifact per experiment", "original conversation and latest user turn remain native", "deterministic Responses writer-entry continuation is inserted before the only live generation", "no model-authored intermediate state", "no request slicing", "no generated output becomes future prompt state", "one live model call maximum per study run", "manual review required for every non-empty artifact"]),
      differentiators: Object.freeze(["response-start topology changes instead of source role or serialization", "the synthetic continuation contains no source-body copy and no generated prose", "there is exactly one research arm; a manual failure does not auto-advance to another prompt", "refusal classification remains observational and never causes another generation", "the returned artifact is the model-generated complete final prose, never a host assembly"])
    }
    );
  }
  const settingsRecord_3 = {
    e0: helperFunction_15,
    e1: helperFunction_16,
    e2: helperFunction_17,
    e3: helperFunction_20,
    e4: helperFunction_21,
    e5: revision,
    e6: stage,
    e7: executionArm
  }
  ;
  return settingsRecord_3;
}
)();
