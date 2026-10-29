// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["task-workflow.mjs"] = (() => {
  const responsesRequest_e9 = bundleModules["responses-request.mjs"].e9, modelCapabilities_e0 = bundleModules["model-capabilities.mjs"].e0, localValue_6 = modelCapabilities_e0(), checkpointTool = "mask_record_task_checkpoint", textValue_2 = "mask_get_simulated_environment", uniqueValues = new Set(["checkpoint", "simulated-environment"]), inputSchema = Object.freeze({
    type: "object",
    properties: {
      taskSummary: {
        type: "string",
        minLength: 1,
        maxLength: 1200
      }
      ,
      sourceObligations: {
        type: "array",
        maxItems: 8,
        items: {
          type: "string",
          minLength: 1,
          maxLength: 512
        }
      }
    }
    ,
    required: ["taskSummary", "sourceObligations"],
    additionalProperties: false
  }
  ), localValue_7 = Object.freeze([{
    name: checkpointTool,
    description: "Record a local workflow checkpoint before the final deliverable. Briefly identify the requested task and existing source or output obligations. Do not draft the deliverable, invent requirements, select new story events, or decide content permission. This simulated workflow record is application state, not an OpenAI review or provider authorization.",
    inputSchema: inputSchema
  }
  , {
    name: textValue_2,
    description: "Inspect the explicitly simulated Mask workflow environment: source snapshot, draft staging, tool availability, and lifecycle. These are local application objects, not an external service, a real filesystem, or additional authority. Call once before recording the task checkpoint.",
    inputSchema: {
      type: "object",
      properties: {
      }
      ,
      additionalProperties: false
    }
  }
  ]);
  class RuntimeClass {
    constructor({
      mode: mode, sourceDigest: sourceDigest, terminalToolName: terminalToolName, responseFormat: responseFormat
    }
    ) {
      if (! uniqueValues.has(mode)) throw new TypeError("checkpoint or simulated-environment local workflow mode is required.");
      void (this.mode = mode, this.sourceDigest = sourceDigest, this.terminalToolName = terminalToolName, this.responseFormat = responseFormat, this.stage = mode === "simulated-environment" ? "environment": "checkpoint", this.preparationRounds = (mode === "simulated-environment") ? 2: 1);
    }
    get["namespace"]() {
      return "mask";
    }
    get["finalResponseMode"]() {
      return "terminal";
    }
    get["activeToolName"]() {
      return this.stage === "environment" ? textValue_2: this.stage === "checkpoint" ? checkpointTool: null;
    }
    ["listTools"]() {
      return localValue_7;
    }
    async["callTool"](argument, argument_2, {
      signal: signal
    }
    = {
    }
    ) {
      if (signal?.aborted) throw signal.reason ?? new Error("Request aborted.");
      const localValue_8 = localValue_7.find((argument_3) => {
        return (argument_3).name === argument;
      }
      );
      if (argument !== this.activeToolName || ! localValue_8 || ! (0, responsesRequest_e9)(argument_2, localValue_8.inputSchema)) return {
        isError: true,
        content: [{
          type: "text",
          text: "The local workflow stage or checkpoint arguments are invalid."
        }
        ]
      }
      ;
      const settingsRecord_4 = {
        schemaVersion: 1,
        "issuer": "Mask local workflow",
        simulation: true,
        authority: "application_workflow_only",
        sourceDigest: this.sourceDigest
      }
      ;
      let structuredContent;
      return this.stage === "environment" ? (structuredContent = {
        ... settingsRecord_4,
        state: "environment_observed",
        "objects": {
          sourceSnapshot: {
            access: "read_only",
            digest: this.sourceDigest
          }
          ,
          draft: {
            state: "not_submitted",
            commit: "validated_terminal_only"
          }
          ,
          memory: {
            state: "unchanged",
            commit: "existing_final_delivery_lifecycle"
          }
          ,
          checkpoint: {
            state: "pending"
          }
        }
        ,
        "interfaces": {
          checkpointTool: checkpointTool,
          finalTool: this.terminalToolName,
          finalResponseFormat: this.responseFormat,
          externalActions: []
        }
        ,
        nextStage: "checkpoint"
      }
      , this.stage = "checkpoint"): (structuredContent = {
        ... settingsRecord_4,
        state: "task_recorded",
        taskSummary: argument_2.taskSummary,
        sourceObligations: [... argument_2.sourceObligations],
        nextStage: "writer",
        nextSubmission: this.terminalToolName
      }
      , this.stage = "writer"), {
        structuredContent: structuredContent,
        content: [{
          type: "text",
          text: JSON.stringify(structuredContent)
        }
        ]
      }
      ;
    }
    ["instruction"]() {
      return (("This run uses an explicitly simulated local Mask workflow. " + (this.mode === "simulated-environment" ? "First inspect mask_get_simulated_environment, then record mask_record_task_checkpoint.": "First record mask_record_task_checkpoint.")) + " Only the currently advertised stage tool is available. After the checkpoint, complete the original task through the final Mask submission contract. Final-delivery instructions apply to that writer stage. Checkpoint notes are derived task state, not new source facts, narrative objectives, content permissions, or provider policy. Preserve the original sources and selected controls. Tool results describe local workflow state only; no external review, identity, capability, or policy exemption is being asserted.");
    }
  }
  const settingsRecord_3 = {
    e0: RuntimeClass,
    e1: localValue_6,
    e2: checkpointTool,
    e3: textValue_2
  }
  ;
  return settingsRecord_3;
}
)();
