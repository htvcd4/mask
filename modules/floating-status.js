// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["floating-status.mjs"] = (() => {
  ;
  const textValue_2 = "mask-provider-floating-status-root", numericValue_3 = 5000;
  function helperFunction_13(argument) {
    return (0, String)((argument) ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;");
  }
  function helperFunction_14(argument) {
    return ((typeof (argument)) === "string") ? Array.from((argument)).length: 0;
  }
  function helperFunction_15(argument) {
    return Math.max(0, Math.round(Number((argument)) || 0)).toLocaleString();
  }
  function helperFunction_16(argument) {
    const localValue_6 = Math.max(0, Number((argument)) || 0);
    if (localValue_6 >= 60000) return ("" + (localValue_6 / 60000).toFixed(1)) + "분";
    return (("" + (localValue_6 / 1000).toFixed(1)) + "초");
  }
  function helperFunction_17(argument) {
    if (! argument || typeof argument.usd !== "number" || ! Number.isFinite(argument.usd) || (argument.usd < 0)) return "";
    const localValue_6 = argument.kind === "actual" ? "비용": "추정";
    return (("" + localValue_6 + " $") + argument.usd.toFixed(6));
  }
  function helperFunction_18(argument) {
    const localValue_6 = Number(argument);
    if (! Number.isFinite(localValue_6)) return 0.94;
    return Math.min(1, Math.max(0.4, localValue_6 / 100));
  }
  function helperFunction_19(argument) {
    switch ((argument)) {
      case "top-left": return "top:10px;left:10px";
      case "bottom-right": return "bottom:10px;right:10px";
      case "bottom-left": return "bottom:10px;left:10px";
      default: return "top:10px;right:10px";
    }
  }
  function helperFunction_20(... argumentState) {
    argumentState[(((((((- 79)))))))] = "";
    for (const localValue_6 of Array.isArray(argumentState[0]?.choices) ? argumentState[0].choices: []) {
      const localValue_7 = localValue_6?.delta?.content;
      typeof localValue_7 === "string" ? argumentState[(((((((- 79)))))))] += localValue_7: Array.isArray(localValue_7) && (argumentState[(((((((- 79)))))))] += localValue_7.filter(argument => {
        return typeof argument?.text === "string";
      }
      ).map((argument) => {
        return (argument).text;
      }
      ).join(""));
    }
    return argumentState[(((((((- 79)))))))];
  }
  function helperFunction_21(argument, {
    now: now = Date.now, setIntervalImpl: setIntervalImpl = globalThis.setInterval?.bind(globalThis), clearIntervalImpl: clearIntervalImpl = globalThis.clearInterval?.bind(globalThis), setTimeoutImpl: setTimeoutImpl = globalThis.setTimeout?.bind(globalThis), clearTimeoutImpl: clearTimeoutImpl = globalThis.clearTimeout?.bind(globalThis)
  }
  = {
  }
  ) {
    let textValue_3 = null, textValue_4 = null, textValue_5 = null, enabledFlag_9 = false, numericValue_4 = 0, textValue_6 = null;
    const lookupMap = new Map();
    function helperFunction_22() {
      (textValue_4 !== null) && ((typeof clearIntervalImpl) === "function") && void ((0, clearIntervalImpl)(textValue_4), textValue_4 = null);
    }
    function helperFunction_23() {
      (textValue_5 !== null) && ((typeof clearTimeoutImpl) === "function") && void (clearTimeoutImpl(textValue_5), textValue_5 = null);
    }
    function helperFunction_24() {
      ;
      return [... lookupMap.values()].filter((argument_2) => {
        return (argument_2).enabled && ! (argument_2).completed && ! (argument_2).errorCode;
      }
      );
    }
    function helperFunction_25() {
      const localValue_6 = helperFunction_24(), localValue_7 = (localValue_6.length > 0) ? localValue_6: [... lookupMap.values()].filter((argument_2) => {
        return (argument_2).enabled;
      }
      ), localValue_8 = localValue_7.filter((argument_2) => {
        return (argument_2).importance === "primary";
      }
      );
      return ((localValue_8.length > 0) ? localValue_8: localValue_7).sort((argument_2, argument_3) => {
        return (argument_3).order - (argument_2).order;
      }
      )[0] ?? null;
    }
    function helperFunction_26(argument_2) {
      const localValue_6 = helperFunction_24();
      if ((localValue_6.length === 0)) return (argument_2) ? [(argument_2)]: [];
      const localValue_7 = localValue_6.filter((argument_3) => {
        return (argument_3).importance === "primary";
      }
      ).sort((argument_3, argument_4) => {
        return (argument_4).order - (argument_3).order;
      }
      )[0] ?? [... localValue_6].sort((argument_3, argument_4) => {
        return argument_4.order - argument_3.order;
      }
      )[0];
      return [localValue_7, ... localValue_6.filter(argument_3 => {
        return (argument_3 !== localValue_7);
      }
      ).sort((argument_3, argument_4) => {
        return argument_4.order - argument_3.order;
      }
      )];
    }
    async function helperFunction_27() {
      if (! helperFunction_25() || textValue_3) return textValue_3;
      try {
        const localValue_6 = await argument?.getRootDocument?.();
        if (! localValue_6) return null;
        textValue_3 = await localValue_6.querySelector?.(".mask-provider-floating-status-root");
        if (! textValue_3) {
          const localValue_7 = await localValue_6.querySelector?.("body");
          if (! localValue_7) return null;
          textValue_3 = await localValue_6.createElement?.("div");
          if (! textValue_3) return null;
          void (await textValue_3.addClass?.(textValue_2), await localValue_7.appendChild?.(textValue_3));
        }
        return await textValue_3.setStyle?.("display", ""), textValue_3;
      }
      catch {
        return textValue_3 = null, null;
      }
    }
    function helperFunction_28(argument_2) {
      if (argument_2?.errorCode) return "#f87171";
      if (argument_2?.completed) return "#34d399";
      if (argument_2?.phase === "도구 처리 중") return "#fbbf24";
      if (((argument_2?.phase) === "추론 중")) return "#c084fc";
      return "#60a5fa";
    }
    function helperFunction_29(argument_2) {
      const localValue_6 = helperFunction_16((0, now)() - argument_2.startedAt), localValue_7 = argument_2.maximumRounds > 0 ? ((("" + argument_2.round + "/") + argument_2.maximumRounds) + " 라운드"): (("" + argument_2.round) + " 라운드"), usage = argument_2.usage, items = [];
      argument_2.runId && items.push(("실행 " + argument_2.runId.slice(0, 8)));
      (argument_2.completed || argument_2.errorCode) && usage ? items.push((((("입력 " + helperFunction_15(usage.inputTokens)) + " · 출력 ") + helperFunction_15(usage.outputTokens)) + " · 추론 ") + helperFunction_15(usage.reasoningTokens)): items.push("" + localValue_6 + " · " + localValue_7 + " · " + (0, helperFunction_15)(argument_2.characters) + "자");
      const localValue_8 = helperFunction_17(argument_2.cost);
      return localValue_8 ? items.push("" + localValue_8 + (argument_2.economyRounds > 0 ? " · 절약 " + argument_2.economyRounds + "회": "")): (argument_2.economyRounds > 0) && items.push(("중간 라운드 절약 " + argument_2.economyRounds) + "회"), (argument_2.toolNames.length > 0) && ! argument_2.completed && items.push(argument_2.toolNames.map(argument_3 => {
        return argument_3.replace(new RegExp("^openai_", ""), "");
      }
      ).join(", ")), items;
    }
    function helperFunction_30(argument_2) {
      return (argument_2).errorCode ? "오류: " + (argument_2).errorCode: (argument_2).completed ? "완료": (argument_2).phase;
    }
    function helperFunction_31(argument_2) {
      const localValue_6 = (0, helperFunction_26)(argument_2), localValue_7 = localValue_6[0] ?? argument_2, localValue_8 = localValue_6.slice(1), localValue_9 = helperFunction_29(localValue_7), localValue_10 = helperFunction_30(localValue_7), localValue_11 = (0, helperFunction_18)(localValue_7.opacity).toFixed(2).replace(new RegExp("0+$", ""), "").replace(new RegExp("\\.$", ""), "");
      return (((((((((("<div aria-live=\"polite\" aria-label=\"Mask 생성 상태\" style=\"position:fixed;" + helperFunction_19(localValue_7.position) + ";z-index:1100;max-width:min(340px,calc(100vw - 20px));opacity:" + localValue_11 + ";pointer-events:none;font-family:Inter,Pretendard,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb\"><div style=\"min-width:236px;padding:10px;border:1px solid rgba(148,163,184,.32);border-radius:10px;background:#0f172a;box-shadow:none;pointer-events:none\"><div style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 2px 8px\"><span style=\"font-size:11px;font-weight:700;color:#e2e8f0\">Mask 생성 상태</span><span style=\"font-size:10px;color:#94a3b8\">" + localValue_6.length) + "개 실행</span></div><div data-mask-floating-role=\"primary\" data-mask-floating-kind=\"") + helperFunction_13(localValue_7.kind) + "\" style=\"padding:9px 10px;border:1px solid rgba(96,165,250,.28);border-radius:8px;background:#111c30;box-shadow:none\"><div style=\"max-width:296px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:650\">" + helperFunction_13(localValue_7.label) + "</div><div style=\"margin-top:4px;color:") + helperFunction_28(localValue_7)) + ";font-size:12px\">● ") + (0, helperFunction_13)(localValue_10)) + "</div>") + localValue_9.map(argument_3 => {
        return "<div style=\"margin-top:2px;max-width:296px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#94a3b8;font-size:11px\">" + (0, helperFunction_13)(argument_3) + "</div>";
      }
      ).join("")) + "</div>" + ((localValue_8.length > 0) ? "<div style=\"padding:8px 2px 4px;color:#64748b;font-size:10px;font-weight:650\">함께 실행 중 " + localValue_8.length + "개</div>" + localValue_8.map(argument_3 => {
        return ((((("<div data-mask-floating-role=\"secondary\" data-mask-floating-kind=\"" + helperFunction_13(argument_3.kind)) + "\" style=\"display:grid;grid-template-columns:8px minmax(0,1fr) auto;align-items:center;gap:7px;padding:6px 7px;border-top:1px solid rgba(148,163,184,.14);box-shadow:none\"><span aria-hidden=\"true\" style=\"width:6px;height:6px;border-radius:999px;background:" + (0, helperFunction_28)(argument_3)) + "\"></span><span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#cbd5e1;font-size:11px\">") + (0, helperFunction_13)(argument_3.label) + "</span><span style=\"max-width:96px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#94a3b8;font-size:10px\">" + (0, helperFunction_13)((0, helperFunction_30)(argument_3))) + "</span></div>");
      }
      ).join(""): "")) + "</div></div>");
    }
    async function helperFunction_32() {
      enabledFlag_9 = false;
      const localValue_6 = (0, helperFunction_25)();
      if (! localValue_6) {
        try {
          await textValue_3?.setStyle?.("display", "none");
        }
        catch {
          textValue_3 = null;
        }
        return;
      }
      const localValue_7 = await helperFunction_27();
      if (! localValue_7) return;
      try {
        void (await localValue_7.setStyle?.("display", ""), await localValue_7.setInnerHTML?.(helperFunction_31(localValue_6)));
      }
      catch {
        textValue_3 = null;
      }
    }
    function helperFunction_33() {
      if (! helperFunction_25() || enabledFlag_9) return;
      void (enabledFlag_9 = true, Promise.resolve().then(helperFunction_32));
    }
    function helperFunction_34() {
      textValue_4 === null && ((typeof setIntervalImpl) === "function") && (textValue_4 = setIntervalImpl(helperFunction_33, 500));
    }
    function helperFunction_35(argument_2) {
      if ((helperFunction_24().length > 0)) {
        void (helperFunction_34(), (0, helperFunction_33)());
        return;
      }
      void (helperFunction_22(), (0, helperFunction_33)(), helperFunction_23()), typeof setTimeoutImpl === "function" && (textValue_5 = setTimeoutImpl(async() => {
        textValue_5 = null;
        for (const [localValue_6, localValue_7] of lookupMap)(localValue_7.completed || localValue_7.errorCode) && lookupMap.delete (localValue_6);
        try {
          await textValue_3?.setStyle?.("display", "none");
        }
        catch {
          textValue_3 = null;
        }
      }
      , numericValue_3));
    }
    function helperFunction_36(argument_2, argument_3) {
      return ! argument_3 && (argument_3 = function (argument_4, argument_5) {
        if (! argument_2.enabled || argument_2.completed || argument_2.errorCode || typeof (argument_5) !== "string" || (argument_5).length === 0) return;
        void (argument_2.characters += helperFunction_14((argument_5)), argument_2.phase = (argument_4) === "thinking" ? "추론 중": "출력 중", (0, helperFunction_33)());
      }
      ), {
        ["roundStarted"]({
          round: round = 0, economy: economy = false
        }
        = {
        }
        ) {
          if (! argument_2.enabled || argument_2.completed || argument_2.errorCode) return;
          void (argument_2.round = Math.max(1, Number(round) + 1), argument_2.phase = "응답 대기 중", argument_2.toolNames = []), economy && (argument_2.economyRounds += 1), helperFunction_33();
        }
        ,
        ["recordStreamEvent"](argument_4, {
          chatCompletions: chatCompletions = false
        }
        = {
        }
        ) {
          if (chatCompletions) {
            argument_3("text", helperFunction_20(argument_4));
            return;
          }
          argument_4?.type === "response.output_text.delta" ? argument_3("text", argument_4.delta): (argument_4?.type === "response.reasoning_text.delta" || argument_4?.type === "response.reasoning_summary_text.delta") && argument_3("thinking", argument_4.delta);
        }
        ,
        ["recordChunk"]({
          phase: phase, text: text
        }
        = {
        }
        ) {
          (0, argument_3)(phase, text);
        }
        ,
        ["toolsStarted"]({
          toolNames: toolNames = []
        }
        = {
        }
        ) {
          if (! argument_2.enabled || argument_2.completed || argument_2.errorCode) return;
          void (argument_2.phase = "도구 처리 중", argument_2.toolNames = (Array.isArray(toolNames) ? toolNames: []).filter((argument_4) => {
            return ((typeof (argument_4)) === "string") && ((argument_4).length > 0);
          }
          ).slice(0, 4), helperFunction_33());
        }
        ,
        ["complete"]({
          usage: usage = null, cost: cost = null
        }
        = {
        }
        ) {
          if (! argument_2.enabled || argument_2.completed || argument_2.errorCode) return;
          void (argument_2.completed = true, argument_2.phase = "완료", argument_2.usage = usage, argument_2.cost = cost, helperFunction_35(argument_2));
        }
        ,
        ["fail"]({
          errorCode: errorCode = "provider_error", usage: usage = null, cost: cost = null
        }
        = {
        }
        ) {
          if (! argument_2.enabled || argument_2.completed || argument_2.errorCode) return;
          void (argument_2.errorCode = String(errorCode || "provider_error"), argument_2.usage = usage, argument_2.cost = cost, helperFunction_35(argument_2));
        }
        ,
        ["cancel"]() {
          if (! lookupMap.delete (argument_2.key)) return;
          if (helperFunction_25()) {
            void ((0, helperFunction_34)(), helperFunction_33());
            return;
          }
          void (helperFunction_22(), helperFunction_23(), Promise.resolve().then(async() => {
            try {
              await textValue_3?.setStyle?.("display", "none");
            }
            catch {
              textValue_3 = null;
            }
          }
          ));
        }
      }
      ;
    }
    async function begin({
      enabled: enabled = true, label: label = "Mask", importance: importance = "primary", kind: kind = "main", maximumRounds: maximumRounds = 0, runId: runId = "", opacity: opacity = 94, position: position = "top-right"
    }
    = {
    }
    ) {
      helperFunction_23();
      const key = Symbol("mask-floating-run"), settingsRecord_4 = {
        key: key,
        order: numericValue_4 += 1,
        runId: ((typeof runId) === "string") ? runId.trim(): "",
        enabled: (enabled === true),
        startedAt: (0, now)(),
        label: String(label || "Mask"),
        importance: (importance === "secondary") ? "secondary": "primary",
        kind: String(kind || "main"),
        opacity: opacity,
        position: position,
        phase: "응답 대기 중",
        round: 1,
        maximumRounds: Number.isInteger(maximumRounds) ? maximumRounds: 0,
        characters: 0,
        toolNames: [],
        usage: null,
        cost: null,
        economyRounds: 0,
        completed: false,
        errorCode: null
      }
      ;
      lookupMap.set(key, settingsRecord_4);
      const localValue_6 = helperFunction_36(settingsRecord_4);
      if (! settingsRecord_4.enabled) return lookupMap.delete (key), ! helperFunction_25() && await textValue_3?.setStyle?.("display", "none"), localValue_6;
      return void (await helperFunction_32(), helperFunction_34()), localValue_6;
    }
    return {
      begin: begin,
      async["start"](localValue_6 = {
      }
      ) {
        textValue_6 = await begin(localValue_6);
      }
      ,
      ["roundStarted"](argument_2) {
        void (textValue_6?.roundStarted((argument_2)));
      }
      ,
      ["recordStreamEvent"](argument_2, argument_3) {
        void (textValue_6?.recordStreamEvent((argument_2), (argument_3)));
      }
      ,
      ["recordChunk"](argument_2) {
        void (textValue_6?.recordChunk((argument_2)));
      }
      ,
      ["toolsStarted"](argument_2) {
        textValue_6?.toolsStarted(argument_2);
      }
      ,
      ["complete"](argument_2) {
        void (textValue_6?.complete((argument_2)));
      }
      ,
      ["fail"](argument_2) {
        void (textValue_6?.fail((argument_2)));
      }
      ,
      async["dispose"]() {
        void (helperFunction_22(), (0, helperFunction_23)(), lookupMap.clear(), textValue_6 = null);
        try {
          await textValue_3?.remove?.();
        }
        finally {
          textValue_3 = null;
        }
      }
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_21
  }
  ;
  return settingsRecord_3;
}
)();
