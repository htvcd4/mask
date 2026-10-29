// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["semantic-companion-client.mjs"] = (() => {
  ;
  const semanticEvidence_ee = bundleModules["semantic-evidence.mjs"].ee, semanticEvidence_e8_2 = bundleModules["semantic-evidence.mjs"].e8, semanticEvidence_e3 = bundleModules["semantic-evidence.mjs"].e3, semanticEvidence_e6 = bundleModules["semantic-evidence.mjs"].e6, semanticEvidence_e5 = bundleModules["semantic-evidence.mjs"].e5, textValue_2 = "hush27_mask_semantic_companion", textValue_3 = "hush27_mask_gpt_5_6_sol_provider", textValue_4 = "mask-semantic/v1/request", textValue_5 = "mask-semantic/v1/response", schemaVersion = 1, numericValue_3 = 128, numericValue_4 = 64, numericValue_5 = 30000;
  function helperFunction_13(argument, localValue_6 = 240) {
    return ((typeof argument) === "string") ? argument.trim().slice(0, localValue_6): "";
  }
  function helperFunction_14() {
    return globalThis.crypto?.randomUUID?.() ?? [Date.now().toString(36), Math.random().toString(36).slice(2)].join("-");
  }
  async function helperFunction_15(argument) {
    const {
      requestDigest: requestDigest, ... argumentState
    }
    = argument;
    return "sha256:" + await(0, semanticEvidence_e6)((0, semanticEvidence_e5)(argumentState));
  }
  function helperFunction_16({
    Risuai: risuai, providerPluginName: providerPluginName
  }
  = {
  }
  ) {
    const supported = ((typeof risuai?.addPluginChannelListener) === "function") && ((typeof risuai?.postPluginChannelMessage) === "function"), lookupMap = new Map();
    let localValue_6 = supported ? "unknown": "unavailable", localValue_7 = supported ? 0: Number.POSITIVE_INFINITY;
    const helperFunction_18 = (argument, argument_2, argument_3) => {
      const localValue_8 = lookupMap.get(argument);
      if (! localValue_8) return;
      void (lookupMap.delete (argument), (0, clearTimeout)(localValue_8.timer), argument_2 ? localValue_8.reject(argument_2): localValue_8.resolve(argument_3));
    }
    , helperFunction_19 = async(argument, argument_2) => {
      if (! supported) return null;
      if (localValue_6 === "unavailable" && Date.now() < localValue_7) return null;
      if (lookupMap.size >= numericValue_3) throw new Error("semantic_companion_pending_limit");
      const settingsRecord_4 = {
        schemaVersion: schemaVersion,
        id: (0, helperFunction_14)(),
        "sender": (0, helperFunction_13)(providerPluginName, 160),
        ... argument
      }
      ;
      settingsRecord_4.requestDigest = await helperFunction_15(settingsRecord_4);
      const localValue_8 = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          ;
          const localValue_9 = new Error("semantic_companion_timeout");
          void (localValue_9.code = "semantic_companion_timeout", localValue_6 = "unavailable", localValue_7 = Date.now() + numericValue_5, helperFunction_18(settingsRecord_4.id, localValue_9));
        }
        , argument_2);
        lookupMap.set(settingsRecord_4.id, {
          resolve: resolve,
          reject: reject,
          timer: timer
        }
        );
      }
      );
      try {
        await risuai.postPluginChannelMessage(textValue_2, textValue_4, settingsRecord_4);
      }
      catch (caughtError) {
        helperFunction_18(settingsRecord_4.id, caughtError);
      }
      return localValue_8;
    }
    ;
    return {
      supported: supported,
      async["initialize"]() {
        if (! supported) return;
        await risuai.addPluginChannelListener(textValue_5, (argument, argument_2) => {
          if (((argument_2?.sender) !== textValue_2) || argument?.schemaVersion !== schemaVersion || typeof argument?.id !== "string") return;
          void (localValue_6 = "available", localValue_7 = 0);
          if (argument.ok === false) {
            const localValue_8 = new Error((0, helperFunction_13)(argument.message, 600) || "Semantic companion request failed.");
            void (localValue_8.code = helperFunction_13(argument.errorCode, 120) || "semantic_companion_failed", helperFunction_18(argument.id, localValue_8));
            return;
          }
          helperFunction_18(argument.id, null, argument);
        }
        );
      }
      ,
      async["hello"](localValue_8 = 750) {
        const settingsRecord_4 = {
          type: "hello"
        }
        ;
        return (0, helperFunction_19)(settingsRecord_4, localValue_8);
      }
      ,
      async["prepare"]({
        generationId: generationId, sourceFingerprint: sourceFingerprint, contractRevision: contractRevision = semanticEvidence_ee, timeoutMs: timeoutMs = 1250
      }
      ) {
        return (0, helperFunction_19)({
          type: "prepare",
          generationId: generationId,
          sourceFingerprint: sourceFingerprint,
          contractRevision: contractRevision
        }
        , timeoutMs);
      }
      ,
      async["finalize"]({
        generationId: generationId, sourceFingerprint: sourceFingerprint, contractRevision: contractRevision = semanticEvidence_ee, leaseToken: leaseToken, packet: packet, timeoutMs: timeoutMs = 1500
      }
      ) {
        return helperFunction_19({
          type: "finalize",
          generationId: generationId,
          sourceFingerprint: sourceFingerprint,
          contractRevision: contractRevision,
          leaseToken: leaseToken,
          packet: packet
        }
        , timeoutMs);
      }
    }
    ;
  }
  function helperFunction_17({
    companionClient: companionClient, executeEvidence: executeEvidence, contractRevision: contractRevision = semanticEvidence_ee
  }
  = {
  }
  ) {
    const settingsRecord_4 = {
      "qcYgv": function (argument, argument_2) {
        return argument || argument_2;
      }
    }
    ;
    if (typeof executeEvidence !== "function") throw new TypeError("executeEvidence must be a function.");
    const lookupMap = new Map(), helperFunction_18 = () => {
      while (lookupMap.size > numericValue_4) {
        const localValue_6 = lookupMap.keys().next().value;
        if ((localValue_6 === null)) return;
        lookupMap.delete (localValue_6);
      }
    }
    , helperFunction_19 = async argument => {
      for (let numericValue_6 = 0;
      (numericValue_6 < 8);
      numericValue_6 += 1) {
        await new Promise((argument_2) => {
          return setTimeout((argument_2), 250);
        }
        );
        try {
          const localValue_6 = await companionClient.prepare({
            ... argument,
            timeoutMs: 750
          }
          );
          if (localValue_6?.action !== "pending") return localValue_6;
        }
        catch {
          return null;
        }
      }
      return null;
    }
    , helperFunction_20 = async({
      generationId: generationId, sourceFingerprint: sourceFingerprint, input: input
    }
    ) => {
      const localValue_6 = Array.isArray(input?.promptChat) ? semanticEvidence_e8_2(input.promptChat): null, settingsRecord_5 = {
        sourceFingerprint: sourceFingerprint,
        contractRevision: contractRevision,
        ... localValue_6 ? {
          allowedBasisRefs: localValue_6.messages.map((argument) => {
            return "m:" + (argument).sourceIndex;
          }
          ),
          sourceMessages: localValue_6.messages,
          primaryBasisRef: localValue_6.primaryBasisRef
        }
        : {
        }
      }
      ;
      if (! companionClient?.supported) return null;
      let localValue_7;
      try {
        localValue_7 = await companionClient.hello(750);
      }
      catch {
        return null;
      }
      if (localValue_7?.action !== "ready" || localValue_7?.contractRevision !== contractRevision) return null;
      let localValue_8;
      try {
        localValue_8 = await companionClient.prepare({
          generationId: generationId,
          sourceFingerprint: sourceFingerprint,
          contractRevision: contractRevision
        }
        );
      }
      catch {
        return null;
      }
      if (localValue_8?.action === "reuse" && localValue_8.packet) {
        const settingsRecord_6 = {
          ... settingsRecord_5
        }
        ;
        return semanticEvidence_e3(localValue_8.packet, settingsRecord_6);
      }
      if (((localValue_8?.action) === "pending")) {
        const localValue_9 = await helperFunction_19({
          generationId: generationId,
          sourceFingerprint: sourceFingerprint,
          contractRevision: contractRevision
        }
        );
        if (localValue_9?.action === "reuse" && localValue_9.packet) {
          const settingsRecord_6 = {
            ... settingsRecord_5
          }
          ;
          return (0, semanticEvidence_e3)(localValue_9.packet, settingsRecord_6);
        }
        return null;
      }
      if (localValue_8?.action === "invalidated") return null;
      if (localValue_8?.action !== "execute" || ! localValue_8.leaseToken) return null;
      const packet = (0, semanticEvidence_e3)(await executeEvidence(input), settingsRecord_5);
      return companionClient.finalize({
        generationId: generationId,
        sourceFingerprint: sourceFingerprint,
        contractRevision: contractRevision,
        leaseToken: localValue_8.leaseToken,
        packet: packet
      }
      ).catch (() => {
      }
      ), packet;
    }
    ;
    return {
      async["getEvidence"]({
        generationId: generationId, sourceFingerprint: sourceFingerprint, input: input
      }
      = {
      }
      ) {
        const generationId_2 = (0, helperFunction_13)(generationId, 180), sourceFingerprint_2 = helperFunction_13(sourceFingerprint, 180);
        if (settingsRecord_4.qcYgv(! generationId_2, ! sourceFingerprint_2)) return null;
        const localValue_6 = (("" + generationId_2) + ":") + contractRevision, localValue_7 = lookupMap.get(localValue_6);
        if (localValue_7) {
          if (localValue_7.sourceFingerprint !== sourceFingerprint_2) {
            if (companionClient?.supported) try {
              await companionClient.prepare({
                generationId: generationId_2,
                sourceFingerprint: sourceFingerprint_2,
                contractRevision: contractRevision
              }
              );
            }
            catch {
            }
            return null;
          }
          return localValue_7.promise;
        }
        const settingsRecord_5 = {
          sourceFingerprint: sourceFingerprint_2,
          promise: null
        }
        ;
        return void (settingsRecord_5.promise = helperFunction_20({
          generationId: generationId_2,
          sourceFingerprint: sourceFingerprint_2,
          input: input
        }
        ).catch (() => {
          return null;
        }
        ), lookupMap.set(localValue_6, settingsRecord_5), helperFunction_18()), settingsRecord_5.promise;
      }
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_16,
    e1: helperFunction_17,
    e2: textValue_2,
    e3: textValue_3,
    e4: textValue_4,
    e5: textValue_5,
    e6: schemaVersion
  }
  ;
  return settingsRecord_3;
}
)();
