// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["provider-workbench-state.mjs"] = (() => {
  const settingsRecord_3 = {
    "vTfls": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "TSBTl": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "bjrSL": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "yLGJq": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "gpTEP": function (argument, argument_2) {
      return (argument + argument_2);
    }
    ,
    "DuHIY": function (argument, argument_2) {
      return (argument + argument_2);
    }
    ,
    "dCRbb": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "eevmZ": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "wjSwe": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "Bxbbe": function (argument, argument_2) {
      return argument(argument_2);
    }
    ,
    "UfvkW": function (argument, argument_2) {
      return (0, argument)(argument_2);
    }
    ,
    "sFqyU": function (argument, argument_2) {
      return argument + argument_2;
    }
  }
  , providerSettings_es = bundleModules["provider-settings.mjs"].es, providerSettings_ez = bundleModules["provider-settings.mjs"].ez, providerSettings_eu = bundleModules["provider-settings.mjs"].eu, providerSettings_eb_2 = bundleModules["provider-settings.mjs"].eb, providerSettings_e7 = bundleModules["provider-settings.mjs"].e7, nativeAdapters_e8 = bundleModules["native-adapters.mjs"].e8, nativeAdapters_e5 = bundleModules["native-adapters.mjs"].e5, nativeAdapters_e7 = bundleModules["native-adapters.mjs"].e7;
  function helperFunction_13(argument) {
    return JSON.parse(JSON.stringify((argument)));
  }
  function helperFunction_14(argument, argument_2, displayName, localValue_6 = "auto") {
    const localValue_7 = providerSettings_eb_2(argument, argument_2), {
      [settingsRecord_3.vTfls(settingsRecord_3.vTfls("modelD", "isplay"), "Name")]: localValue_8, [settingsRecord_3.TSBTl("additionalMo", "dels")]: localValue_9, [settingsRecord_3.bjrSL("workloadAssi", "gnment") + "s"]: localValue_10, [settingsRecord_3.TSBTl("accoun", "ts")]: localValue_11, [settingsRecord_3.bjrSL("accountProfi", "les")]: localValue_12, [settingsRecord_3.yLGJq("creden", "tials")]: localValue_13, [settingsRecord_3.gpTEP("gatewa", "yProfi") + "leId"]: localValue_14, adapterId: adapterId, [settingsRecord_3.DuHIY("floatingStat", "us")]: localValue_15, floatingStatusOpacity: floatingStatusOpacity, [settingsRecord_3.gpTEP("floati", "ngStat") + "usPosi" + "tion"]: localValue_16, nextActionSuggestions: nextActionSuggestions, ... argumentState
    }
    = localValue_7;
    return helperFunction_13({
      id: argument_2,
      displayName: displayName,
      [settingsRecord_3.bjrSL("verbos", "ityMod") + "e"]: localValue_6,
      ... argumentState
    }
    );
  }
  function helperFunction_15(argument, argument_2, argument_3) {
    for (let numericValue_3 = 2;
    numericValue_3 <= argument_3 + 1;
    numericValue_3 += 1) {
      const localValue_6 = (("" + argument_2) + "-") + numericValue_3;
      if (! argument.has(localValue_6)) return localValue_6;
    }
    return "";
  }
  function helperFunction_16(argument) {
    for (let numericValue_3 = 1;
    numericValue_3 <= providerSettings_es;
    numericValue_3 += 1) {
      const localValue_6 = "account-" + numericValue_3;
      if (! (argument).has(localValue_6)) return localValue_6;
    }
    return "";
  }
  function helperFunction_17(argument) {
    return new Set((argument).keys());
  }
  function helperFunction_18(argument, argument_2) {
    const localValue_6 = (0, helperFunction_17)(argument_2), localValue_7 = helperFunction_13(argument);
    for (const localValue_8 of["memoryExtract", "memoryConsolidate", "plotPlan"]) ! localValue_6.has(localValue_7[localValue_8]) && (localValue_7[localValue_8] = "primary");
    return localValue_7.semanticEvidence !== "disabled" && ! localValue_6.has(localValue_7.semanticEvidence) && (localValue_7.semanticEvidence = "disabled"), localValue_7;
  }
  function helperFunction_19(argument, argument_2, argument_3) {
    const recommendation = (argument_3).recommendation, gatewayProfileId = (argument_2).gatewayProfileId, localValue_6 = (argument).connections?.[gatewayProfileId];
    if (! localValue_6) throw new TypeError("The selected model has no connection settings for this account provider.");
    if (Object.hasOwn(recommendation, "nativeAdapterId") && recommendation.nativeAdapterId === null) throw new TypeError("선택한 호환 모드에서 사용할 수 있는 HTTP API 형식이 없습니다.");
    localValue_6.modelId = (argument_3).id;
    const localValue_7 = recommendation.nativeAdapterId ?? (argument_2).adapterId;
    void ((argument).accountAdapterIds = {
      ... (argument).accountAdapterIds ?? {
      }
      ,
      [(argument_2).id]: localValue_7
    }
    , (argument).adapterModelIds = {
      ... (argument).adapterModelIds ?? {
      }
      ,
      [localValue_7]: (argument_3).id
    }
    );
    const yP = (0, nativeAdapters_e8)(localValue_7, (argument_3).id);
    yP && ((argument).adapterContractIds = {
      ... (argument).adapterContractIds ?? {
      }
      ,
      [localValue_7]: yP
    }
    );
    if ((argument_2).gatewayProfileId === "github-copilot-direct" && ((typeof (argument_3).source?.endpoint) === "string") && (argument_3).source.endpoint && typeof (argument_3).source?.clientProfile === "string") {
      const settingsRecord_5 = {
        modelId: (argument_3).id,
        clientProfile: (argument_3).source.clientProfile,
        sourceEndpoint: (argument_3).source.endpoint
      }
      ;
      Object.hasOwn((argument_3), "supportedEndpoints") && (settingsRecord_5.supportedEndpoints = helperFunction_13((argument_3).supportedEndpoints)), (argument).copilotModelMetadata = {
        ... (argument).copilotModelMetadata ?? {
        }
        ,
        [(argument_2).id]: settingsRecord_5
      }
      ;
    }
    void (localValue_6.compatibleParameterMode = recommendation.compatibleParameterMode, (argument).workflowProfile = recommendation.workflowProfile, (argument).pricingTier = (argument_3).pricingTier ?? recommendation.pricingTier ?? "auto", (argument).verbosityMode = recommendation.verbosityMode, (argument).cacheMode = recommendation.cacheMode, (argument).serviceTier = recommendation.serviceTier);
    ((typeof recommendation.reasoningEffort) === "string") && ((argument).reasoningEffort = recommendation.reasoningEffort);
    Array.isArray(recommendation.supportedReasoningEfforts) && ((argument).supportedReasoningEfforts = (0, helperFunction_13)(recommendation.supportedReasoningEfforts));
    recommendation.maxOutputTokensOverride !== null && ((argument).maxOutputTokensOverride = recommendation.maxOutputTokensOverride);
    const localValue_8 = yP ? (0, nativeAdapters_e5)(localValue_7, yP): null;
    Array.isArray(localValue_8?.reasoningEffortValues) && void ((argument).supportedReasoningEfforts = [... localValue_8.reasoningEffortValues], (argument).reasoningEffort = nativeAdapters_e7(localValue_7, yP, (argument).reasoningEffort));
  }
  function helperFunction_20(... argumentState) {
    argumentState.length = 1;
    const localValue_6 = (0, providerSettings_e7)(argumentState[0]), lookupMap = new Map(localValue_6.accounts.map(argument => {
      return [argument.id, helperFunction_13(argument)];
    }
    )), lookupMap_2 = new Map();
    lookupMap_2.set("primary", (0, helperFunction_14)(localValue_6, "primary", localValue_6.modelDisplayName));
    for (const localValue_7 of localValue_6.additionalModels) lookupMap_2.set(localValue_7.id, helperFunction_14(localValue_6, localValue_7.id, localValue_7.displayName, localValue_7.verbosityMode));
    void (argumentState.a = helperFunction_13(localValue_6.workloadAssignments), argumentState.b = Object.fromEntries(providerSettings_eu.map(argument => {
      return [argument, localValue_6[argument]];
    }
    )));
    const helperFunction_21 = () => {
      return JSON.stringify({
        accounts: [... lookupMap.values()],
        models: [... lookupMap_2.values()],
        workloadAssignments: argumentState.a,
        globalSettings: argumentState.b
      }
      );
    }
    ;
    argumentState.c = helperFunction_21();
    function helperFunction_22(argument) {
      const localValue_7 = lookupMap_2.get((argument));
      if (! localValue_7) throw new TypeError((("Unknown model profile: " + (argument)) + "."));
      return localValue_7;
    }
    function helperFunction_23(argument) {
      const localValue_7 = lookupMap.get((argument));
      if (! localValue_7) throw new TypeError(("Unknown account: " + (argument)) + ".");
      return localValue_7;
    }
    function helperFunction_24() {
      lookupMap.size > 0 && ! [... lookupMap.values()].some(argument => {
        return argument.enabled !== false;
      }
      ) && (lookupMap.values().next().value.enabled = true);
    }
    function helperFunction_25(argument) {
      return (argument).accountIds = ((argument).accountIds ?? []).filter((argument_2, argument_3, argument_4) => {
        return lookupMap.has((argument_2)) && (argument_4).indexOf((argument_2)) === (argument_3);
      }
      ), (argument).accountIds.length === 0 && lookupMap.size > 0 && ((argument).accountIds = [lookupMap.keys().next().value]), ! (argument).accountIds.includes((argument).fixedAccountId) && ((argument).fixedAccountId = (argument).accountIds[0]), (argument);
    }
    return {
      ["isDirty"]() {
        return helperFunction_21() !== argumentState.c;
      }
      ,
      ["createSavePoint"]() {
        const settings = this.serialize();
        return {
          settings: settings,
          identity: helperFunction_21()
        }
        ;
      }
      ,
      ["markSaved"](argument, argument_2) {
        ;
        if (! (argument_2)) {
          argumentState.c = (argument).identity;
          return;
        }
        const localValue_7 = JSON.parse((argument).identity);
        for (const localValue_8 of localValue_7.accounts) {
          const localValue_9 = (argument_2).accounts.find((argument_3) => {
            return (argument_3).id === localValue_8.id;
          }
          ), localValue_10 = lookupMap.get(localValue_8.id);
          for (const localValue_11 of["google-vertex-native", "google-vertex-chat-completions"]) {
            const localValue_12 = localValue_9?.connections[localValue_11]?.vertexCredentialRevision;
            if (localValue_12 === null) continue;
            localValue_10?.connections[localValue_11]?.vertexCredentialRevision === localValue_8.connections[localValue_11]?.vertexCredentialRevision && (localValue_10.connections[localValue_11].vertexCredentialRevision = localValue_12), localValue_8.connections[localValue_11].vertexCredentialRevision = localValue_12;
          }
        }
        argumentState.c = JSON.stringify(localValue_7);
      }
      ,
      ["listModels"]() {
        return [... lookupMap_2.values()].map((argument) => {
          return (0, helperFunction_13)((0, helperFunction_25)((argument)));
        }
        );
      }
      ,
      ["listAccounts"]() {
        return [... lookupMap.values()].map(helperFunction_13);
      }
      ,
      ["getModel"](argument) {
        return helperFunction_13((0, helperFunction_25)((0, helperFunction_22)((argument))));
      }
      ,
      ["getAccount"](argument) {
        return (0, helperFunction_13)(helperFunction_23((argument)));
      }
      ,
      ["updateModel"](argument, argument_2) {
        ;
        const localValue_7 = helperFunction_22((argument)), localValue_8 = (0, helperFunction_25)({
          ... localValue_7,
          ... (0, helperFunction_13)((argument_2)),
          id: (argument)
        }
        );
        return lookupMap_2.set((argument), localValue_8), helperFunction_13(localValue_8);
      }
      ,
      ["updateAccount"](argument, argument_2) {
        const settingsRecord_5 = {
          ... helperFunction_23(argument),
          ... helperFunction_13(argument_2),
          id: argument
        }
        ;
        return void (lookupMap.set(argument, settingsRecord_5), (0, helperFunction_24)()), (0, helperFunction_13)(helperFunction_23(argument));
      }
      ,
      ["addAccount"](argument) {
        ;
        if ((lookupMap.size >= providerSettings_es)) {
          const localValue_10 = new Error(("Accounts are limited to " + providerSettings_es) + ".");
          localValue_10.code = "account_limit";
          throw localValue_10;
        }
        const localValue_7 = (argument) ? helperFunction_23((argument)): lookupMap.values().next().value, localValue_8 = helperFunction_16(lookupMap), localValue_9 = helperFunction_13(localValue_7);
        void (localValue_9.id = localValue_8, localValue_9.label = ("계정 " + (lookupMap.size + 1)), localValue_9.priority = (lookupMap.size + 1) * 10, localValue_9.quotaScopeId = localValue_8, localValue_9.cacheScopeId = localValue_8, localValue_9.credentials = Object.fromEntries(Object.keys(localValue_9.credentials ?? {
        }
        ).map((argument_2) => {
          return [(argument_2), ""];
        }
        )));
        for (const localValue_10 of Object.values(localValue_9.connections ?? {
        }
        )) {
          void (localValue_10.transportProxyToken = "", localValue_10.customHeaders = {
          }
          );
        }
        if ((localValue_9.gatewayProfileId === "github-copilot-direct")) {
          const githubCopilotDirect = localValue_9.connections["github-copilot-direct"];
          localValue_9.adapterId === "copilot-anthropic" && (localValue_9.adapterId = "copilot-chat"), githubCopilotDirect.copilot = {
            ... githubCopilotDirect.copilot,
            authentication: "github-direct",
            clientProfile: "cli"
          }
          ;
        }
        return lookupMap.set(localValue_8, localValue_9), helperFunction_13(localValue_9);
      }
      ,
      ["removeAccount"](argument) {
        ;
        if ((lookupMap.size <= 1) || ! lookupMap.delete ((argument))) return false;
        helperFunction_24();
        for (const localValue_7 of lookupMap_2.values())(0, helperFunction_25)(localValue_7);
        return true;
      }
      ,
      ["assignAccount"](argument, argument_2, localValue_7 = true) {
        const localValue_8 = helperFunction_22(argument);
        helperFunction_23(argument_2);
        const uniqueValues = new Set(localValue_8.accountIds ?? []);
        if (localValue_7) uniqueValues.add(argument_2);
        else {
          if ((uniqueValues.size <= 1) && uniqueValues.has(argument_2)) return false;
          uniqueValues.delete (argument_2);
        }
        return void (localValue_8.accountIds = [... uniqueValues], (0, helperFunction_25)(localValue_8), lookupMap_2.set(argument, localValue_8)), true;
      }
      ,
      ["addModelFromCatalog"](argument, argument_2, argument_3) {
        ;
        if (lookupMap_2.size - 1 >= providerSettings_ez) {
          const localValue_11 = new Error(("Additional models are limited to " + providerSettings_ez) + ".");
          localValue_11.code = "model_limit";
          throw localValue_11;
        }
        const localValue_7 = helperFunction_22((argument)), localValue_8 = helperFunction_23((argument_2)), localValue_9 = (0, helperFunction_15)(lookupMap_2, "model", providerSettings_ez), localValue_10 = (0, helperFunction_13)(localValue_7);
        return void (localValue_10.id = localValue_9, localValue_10.displayName = (argument_3).displayName || (argument_3).id, localValue_10.maskResponseFormat = "tool-call", localValue_10.reasoningHistoryMode = "off", localValue_10.documentInput = {
          mode: "off",
          fontSize: 1,
          mergeRoles: false
        }
        , localValue_10.astraTaskWorkflow = "off", localValue_10.accountIds = [(argument_2)], localValue_10.fixedAccountId = (argument_2), (0, helperFunction_19)(localValue_10, localValue_8, (argument_3)), lookupMap_2.set(localValue_9, localValue_10)), helperFunction_13(localValue_10);
      }
      ,
      ["duplicateModel"](argument) {
        ;
        if ((lookupMap_2.size - 1) >= providerSettings_ez) {
          const localValue_10 = new Error(("Additional models are limited to " + providerSettings_ez) + ".");
          localValue_10.code = "model_limit";
          throw localValue_10;
        }
        const localValue_7 = helperFunction_22((argument)), localValue_8 = helperFunction_15(lookupMap_2, "model", providerSettings_ez), localValue_9 = helperFunction_13(localValue_7);
        return void (localValue_9.id = localValue_8, localValue_9.displayName = "" + localValue_7.displayName + " 복사본", lookupMap_2.set(localValue_8, localValue_9)), helperFunction_13(localValue_9);
      }
      ,
      ["removeModel"](argument) {
        if (argument === "primary") return false;
        const localValue_7 = lookupMap_2.delete (argument);
        return argumentState.a = (0, helperFunction_18)(argumentState.a, lookupMap_2), localValue_7;
      }
      ,
      ["applyCatalogModel"](argument, argument_2, argument_3) {
        ;
        const localValue_7 = helperFunction_22((argument)), localValue_8 = (0, helperFunction_23)((argument_2));
        if (! localValue_7.accountIds.includes((argument_2))) throw new TypeError("Account " + (argument_2) + " is not assigned to model " + (argument) + ".");
        return void (helperFunction_19(localValue_7, localValue_8, (argument_3)), lookupMap_2.set((argument), localValue_7)), helperFunction_13(localValue_7);
      }
      ,
      ["getWorkloadAssignments"]() {
        return helperFunction_13(argumentState.a);
      }
      ,
      ["getGlobalSettings"]() {
        return (0, helperFunction_13)(argumentState.b);
      }
      ,
      ["updateGlobalSettings"](argument) {
        return void (argumentState.b = {
          ... argumentState.b,
          ... helperFunction_13((argument))
        }
        ), (0, helperFunction_13)(argumentState.b);
      }
      ,
      ["setWorkloadAssignment"](argument, argument_2) {
        if (! (argument in argumentState.a)) throw new TypeError((("Unknown workload assignment: " + argument) + "."));
        if (! lookupMap_2.has(argument_2) && ! (argument === "semanticEvidence" && argument_2 === "disabled")) throw new TypeError(("Unknown model profile: " + argument_2) + ".");
        return void (argumentState.a[argument] = argument_2, argumentState.a = (0, helperFunction_18)(argumentState.a, lookupMap_2)), helperFunction_13(argumentState.a);
      }
      ,
      ["serialize"]() {
        void (helperFunction_24());
        const localValue_7 = helperFunction_13(helperFunction_25(settingsRecord_3.Bxbbe(helperFunction_22, "primary"))), {
          id: localValue_8, [settingsRecord_3.TSBTl("displa", "yName")]: localValue_9, verbosityMode: verbosityMode, ... argumentState_2
        }
        = localValue_7, localValue_10 = [... lookupMap_2.values()].filter((argument) => {
          return (argument).id !== "primary";
        }
        ).map((argument) => {
          return helperFunction_13(helperFunction_25((argument)));
        }
        );
        return settingsRecord_3.UfvkW(providerSettings_e7, {
          ... argumentState_2,
          ... argumentState.b,
          accounts: [... lookupMap.values()].map(helperFunction_13),
          [settingsRecord_3.bjrSL("modelDisplay", "Name")]: localValue_9,
          [settingsRecord_3.wjSwe(settingsRecord_3.sFqyU("additi", "onalMo"), "dels")]: localValue_10,
          [settingsRecord_3.dCRbb(settingsRecord_3.eevmZ("worklo", "adAssi"), "gnment") + "s"]: helperFunction_18(argumentState.a, lookupMap_2)
        }
        );
      }
    }
    ;
  }
  const settingsRecord_4 = {
    e0: helperFunction_20
  }
  ;
  return settingsRecord_4;
}
)();
