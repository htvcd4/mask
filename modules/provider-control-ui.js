// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["provider-control-ui.mjs"] = (() => {
  ;
  const gatewayProfiles_e1_2 = bundleModules["gateway-profiles.mjs"].e1, gatewayProfiles_e0 = bundleModules["gateway-profiles.mjs"].e0, providerSettings_ev = bundleModules["provider-settings.mjs"].ev, providerSettings_ey = bundleModules["provider-settings.mjs"].ey, providerSettings_en = bundleModules["provider-settings.mjs"].en, providerSettings_es = bundleModules["provider-settings.mjs"].es, providerSettings_ez = bundleModules["provider-settings.mjs"].ez, providerSettings_ex = bundleModules["provider-settings.mjs"].ex, providerSettings_e8_2 = bundleModules["provider-settings.mjs"].e8, providerSettings_eb_2 = bundleModules["provider-settings.mjs"].eb, providerSettings_e0_2 = bundleModules["provider-settings.mjs"].e0, providerSettings_eg_2 = bundleModules["provider-settings.mjs"].eg, providerSettings_ef_2 = bundleModules["provider-settings.mjs"].ef, providerSettings_ek = bundleModules["provider-settings.mjs"].ek, modelCatalog_e1 = bundleModules["model-catalog.mjs"].e1, observability_e8 = bundleModules["observability.mjs"].e8, observability_e1 = bundleModules["observability.mjs"].e1, observability_e0_2 = bundleModules["observability.mjs"].e0, requestLogs_e7 = bundleModules["request-logs.mjs"].e7, requestLogs_e6 = bundleModules["request-logs.mjs"].e6, requestLogs_e3 = bundleModules["request-logs.mjs"].e3, modelTarget_e7_2 = bundleModules["model-target.mjs"].e7, providerWorkbenchUi_e0 = bundleModules["provider-workbench-ui.mjs"].e0, nativeAdapters_ea = bundleModules["native-adapters.mjs"].ea, localValue_6 = providerSettings_en;
  function helperFunction_13(argument) {
    return JSON.parse(JSON.stringify((argument)));
  }
  function helperFunction_14(argument, argument_2, displayName, verbosityMode = "auto") {
    const localValue_9 = (0, providerSettings_eb_2)(argument, argument_2), {
      modelDisplayName: modelDisplayName, additionalModels: additionalModels, ... argumentState
    }
    = localValue_9, settingsRecord_4 = {
      id: argument_2,
      displayName: displayName,
      verbosityMode: verbosityMode,
      ... argumentState
    }
    ;
    return helperFunction_13(settingsRecord_4);
  }
  const localValue_7 = Object.freeze({
    cacheMode: Object.freeze({
      explicit: "명시적 캐시",
      implicit: "암시적 캐시",
      off: "캐시 끔"
    }
    ),
    samplingMode: Object.freeze({
      risu: "Risu 온도 상속",
      temperature: "사용자 온도",
      ["top-p"]: "Top P"
    }
    ),
    reasoningMode: Object.freeze({
      standard: "표준",
      pro: "Pro"
    }
    ),
    reasoningContext: Object.freeze({
      default: "모델 기본값",
      auto: "자동",
      all_turns: "전체 턴",
      current_turn: "현재 턴"
    }
    ),
    truncation: Object.freeze({
      disabled: "사용 안 함",
      auto: "자동"
    }
    ),
    reasoningEffort: Object.freeze({
      none: "없음",
      low: "낮음",
      medium: "중간",
      high: "높음",
      xhigh: "매우 높음",
      max: "최대"
    }
    ),
    reasoningSummary: Object.freeze({
      auto: "자동",
      concise: "간결",
      detailed: "상세"
    }
    ),
    verbosity: Object.freeze({
      low: "낮음",
      medium: "중간",
      high: "높음"
    }
    ),
    serviceTier: Object.freeze({
      auto: "자동",
      flex: "Flex",
      priority: "Priority"
    }
    ),
    responseTransport: Object.freeze({
      stream: "스트리밍",
      ["background-resume"]: "복구 가능 스트리밍",
      buffered: "비스트리밍 호환",
      ["webkit-host-buffered"]: "WebKit 호스트 버퍼 (실험)"
    }
    ),
    terminalRepairMode: Object.freeze({
      error: "즉시 오류 종료",
      once: "자동 교정 1회"
    }
    ),
    floatingStatusPosition: Object.freeze({
      ["top-right"]: "우측 상단",
      ["top-left"]: "좌측 상단",
      ["bottom-right"]: "우측 하단",
      ["bottom-left"]: "좌측 하단"
    }
    )
  }
  ), textValue_2 = "\n:root {\n  color-scheme: dark;\n  font-family: Inter, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n* {\n  box-sizing: border-box;\n}\nbutton, input, select, textarea {\n  font: inherit;\n}\nbutton:focus-visible, input:focus-visible, select:focus-visible, summary:focus-visible {\n  outline: 2px solid #60a5fa;\n  outline-offset: 2px;\n}\n.mask-overlay {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 28px;\n  background: rgba(2, 6, 23, .72);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n.mask-panel {\n  width: min(1120px, 100%);\n  height: min(88dvh, 920px);\n  display: grid;\n  grid-template-columns: 220px minmax(0, 1fr);\n  overflow: hidden;\n  border: 1px solid #334155;\n  border-radius: 16px;\n  background: #0f172a;\n  color: #e5e7eb;\n  box-shadow: 0 24px 70px rgba(0, 0, 0, .48);\n}\n.mask-sidebar {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  padding: 20px 14px;\n  border-right: 1px solid #243244;\n  background: #0b1220;\n}\n.mask-brand {\n  display: grid;\n  gap: 4px;\n  padding: 0 10px;\n}\n.mask-brand strong {\n  color: #f8fafc;\n  font-size: 20px;\n}\n.mask-brand span {\n  color: #64748b;\n  font-size: 11px;\n}\n.mask-workspace {\n  min-width: 0;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n}\n.mask-header {\n  flex: 0 0 auto;\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 18px 12px 22px;\n  border-bottom: 1px solid #243244;\n}\n.mask-title {\n  margin: 0;\n  font-size: 20px;\n  line-height: 1.2;\n}\n.mask-close {\n  width: 40px;\n  height: 40px;\n  border: 0;\n  border-radius: 10px;\n  background: transparent;\n  color: #cbd5e1;\n  font-size: 28px;\n  line-height: 1;\n  cursor: pointer;\n}\n.mask-close:hover {\n  background: #1e293b;\n  color: #fff;\n}\n.mask-tabs {\n  display: grid;\n  gap: 6px;\n}\n.mask-tab {\n  width: 100%;\n  border: 0;\n  border-radius: 9px;\n  background: transparent;\n  color: #94a3b8;\n  padding: 11px 12px;\n  text-align: left;\n  cursor: pointer;\n}\n.mask-tab[aria-selected=\"true\"] {\n  background: #1e293b;\n  color: #f8fafc;\n}\n.mask-status {\n  flex: 0 0 32px;\n  height: 32px;\n  margin: 0;\n  padding: 9px 22px 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #93c5fd;\n  font-size: 13px;\n}\n.mask-model-profile-bar {\n  flex: 0 0 auto;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto auto;\n  align-items: end;\n  gap: 9px;\n  margin: 0 22px 8px;\n  padding: 12px;\n  border: 1px solid #334155;\n  border-radius: 10px;\n  background: #111827;\n}\n.mask-model-profile-picker {\n  display: grid;\n  gap: 5px;\n  min-width: 0;\n  color: #cbd5e1;\n  font-size: 12px;\n}\n.mask-model-profile-picker strong {\n  color: #f8fafc;\n  font-size: 13px;\n}\n.mask-content {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  overflow-anchor: none;\n  scrollbar-gutter: stable;\n  padding: 18px 22px 22px;\n}\n.mask-page {\n  display: grid;\n  min-height: 100%;\n  align-content: start;\n  gap: 20px;\n}\n.mask-page[hidden] {\n  display: none;\n}\n.mask-section {\n  display: grid;\n  gap: 18px;\n  padding: 18px;\n  border: 1px solid #334155;\n  border-radius: 12px;\n  background: #111827;\n}\n.mask-section-title {\n  margin: 0;\n  color: #f8fafc;\n  font-size: 17px;\n  line-height: 1.35;\n}\n.mask-dashboard-note {\n  margin: 0;\n  color: #cbd5e1;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.mask-mcp-list {\n  display: grid;\n  gap: 16px;\n}\n.mask-mcp-server {\n  display: grid;\n  gap: 16px;\n  padding: 16px;\n  border: 1px solid #334155;\n  border-radius: 10px;\n  background: #0b1220;\n}\n.mask-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  column-gap: 16px;\n  row-gap: 18px;\n}\n.mask-field {\n  display: grid;\n  align-content: start;\n  gap: 7px;\n}\n.mask-field-title {\n  display: block;\n  color: #f1f5f9;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.35;\n}\n.mask-field-note, .mask-note {\n  display: block;\n  color: #94a3b8;\n  font-size: 12px;\n  line-height: 1.55;\n}\n.mask-input {\n  width: 100%;\n  min-height: 42px;\n  border: 1px solid #475569;\n  border-radius: 8px;\n  background: #020617;\n  color: #f8fafc;\n  padding: 9px 10px;\n}\n.mask-secret-control {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 8px;\n}\n.mask-secret-toggle {\n  min-width: 64px;\n  min-height: 42px;\n}\n.mask-check {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 11px;\n  align-items: start;\n  padding: 2px 0;\n  color: #cbd5e1;\n  font-size: 13px;\n  line-height: 1.45;\n}\n.mask-check > input {\n  width: 18px;\n  height: 18px;\n  min-height: 18px;\n  margin: 2px 0 0;\n  padding: 0;\n}\n.mask-check-copy {\n  display: grid;\n  min-width: 0;\n  gap: 4px;\n}\n.mask-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.mask-button {\n  min-height: 40px;\n  border: 1px solid #475569;\n  border-radius: 8px;\n  background: #1e293b;\n  color: #f8fafc;\n  padding: 8px 13px;\n  cursor: pointer;\n}\n.mask-button:hover {\n  background: #334155;\n}\n.mask-button-primary {\n  border-color: #2563eb;\n  background: #2563eb;\n}\n.mask-button-primary:hover {\n  background: #1d4ed8;\n}\n.mask-button-danger {\n  border-color: #7f1d1d;\n  color: #fecaca;\n}\n.mask-metrics {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.mask-metric {\n  padding: 13px;\n  border: 1px solid #334155;\n  border-radius: 10px;\n  background: #020617;\n}\n.mask-metric-label {\n  color: #94a3b8;\n  font-size: 12px;\n}\n.mask-metric-value {\n  display: block;\n  margin-top: 5px;\n  font-size: 22px;\n}\n.mask-log-list {\n  display: grid;\n  gap: 10px;\n}\n.mask-provider-run-rounds {\n  display: grid;\n  gap: 8px;\n  padding-left: 10px;\n  border-left: 2px solid #1e3a5f;\n}\n.mask-provider-run-rounds-title {\n  margin: 2px 0 0;\n  color: #cbd5e1;\n  font-size: 13px;\n  font-weight: 600;\n}\n.mask-log {\n  overflow: hidden;\n  border: 1px solid #334155;\n  border-radius: 10px;\n  background: #020617;\n}\n.mask-log > summary {\n  padding: 12px 14px;\n  cursor: pointer;\n  color: #e2e8f0;\n  font-size: 13px;\n  line-height: 1.45;\n  overflow-wrap: anywhere;\n}\n.mask-log-summary-main {\n  display: block;\n}\n.mask-log-summary-usage {\n  display: block;\n  margin-top: 4px;\n  color: #93c5fd;\n  font-size: 12px;\n  font-variant-numeric: tabular-nums;\n}\n.mask-log-body {\n  display: grid;\n  gap: 12px;\n  padding: 0 14px 14px;\n}\n.mask-log-meta {\n  color: #94a3b8;\n  font-size: 12px;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n.mask-log-token-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n}\n.mask-log-token {\n  min-width: 0;\n  padding: 9px 10px;\n  border: 1px solid #1e3a5f;\n  border-radius: 8px;\n  background: #071426;\n}\n.mask-log-token-label {\n  display: block;\n  color: #94a3b8;\n  font-size: 11px;\n}\n.mask-log-token-value {\n  display: block;\n  margin-top: 3px;\n  color: #dbeafe;\n  font-size: 14px;\n  font-variant-numeric: tabular-nums;\n}\n.mask-log-payload {\n  overflow: hidden;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  background: #07101f;\n}\n.mask-log-payload > summary {\n  padding: 10px 12px;\n  cursor: pointer;\n  color: #e2e8f0;\n  font-size: 13px;\n  font-weight: 600;\n}\n.mask-log-payload-body {\n  padding: 0 10px 10px;\n}\n.mask-raw-title {\n  margin: 0 0 6px;\n  font-size: 13px;\n}\n.mask-raw {\n  max-height: 340px;\n  margin: 0;\n  overflow: auto;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n  border: 1px solid #1e293b;\n  border-radius: 8px;\n  background: #000;\n  color: #dbeafe;\n  padding: 11px;\n  font: 12px/1.5 ui-monospace, SFMono-Regular, Consolas, monospace;\n}\n.mask-wire {\n  margin-top: 8px;\n  border: 1px solid #1e293b;\n  border-radius: 8px;\n  background: #020617;\n}\n.mask-wire > summary {\n  padding: 8px 10px;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 12px;\n}\n.mask-wire .mask-raw {\n  max-height: 260px;\n  border: 0;\n  border-top: 1px solid #1e293b;\n  border-radius: 0;\n}\n.mask-empty {\n  margin: 0;\n  color: #94a3b8;\n  font-size: 13px;\n}\n@media (max-width: 720px) {\n  .mask-overlay {\n    align-items: stretch;\n    padding: 0;\n    background: #0f172a;\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n  }\n  .mask-panel {\n    width: 100%;\n    height: 100dvh;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto minmax(0, 1fr);\n    border: 0;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .mask-sidebar {\n    gap: 10px;\n    padding: 10px 12px 8px;\n    border-right: 0;\n    border-bottom: 1px solid #243244;\n  }\n  .mask-brand {\n    display: none;\n  }\n  .mask-tabs {\n    display: flex;\n    gap: 4px;\n    overflow-x: auto;\n  }\n  .mask-tab {\n    width: auto;\n    min-width: max-content;\n    padding: 9px 11px;\n  }\n  .mask-header {\n    padding-left: 16px;\n  }\n  .mask-status {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n  .mask-model-profile-bar {\n    grid-template-columns: 1fr 1fr;\n    margin: 0 14px 8px;\n  }\n  .mask-model-profile-picker {\n    grid-column: 1 / -1;\n  }\n  .mask-content {\n    padding: 16px;\n  }\n  .mask-grid, .mask-metrics, .mask-log-token-grid {\n    grid-template-columns: 1fr;\n  }\n}\n";
  function helperFunction_15(argument, argument_2, argument_3, argument_4) {
    const localValue_9 = (argument).createElement((argument_2));
    return (argument_3) && (localValue_9.className = (argument_3)), ((argument_4) !== null) && (localValue_9.textContent = (argument_4)), localValue_9;
  }
  function helperFunction_16(argument, argument_2, argument_3) {
    typeof (argument).setAttribute === "function" ? (argument).setAttribute((argument_2), (0, String)((argument_3))): (argument)[(argument_2)] = String((argument_3));
  }
  function helperFunction_17(argument, argument_2, {
    primary: primary = false, danger: danger = false
  }
  = {
  }
  ) {
    const localValue_9 = ["mask-button", primary ? "mask-button-primary": "", danger ? "mask-button-danger": ""].filter(Boolean).join(" "), localValue_10 = (0, helperFunction_15)(argument, "button", localValue_9, argument_2);
    return localValue_10.type = "button", localValue_10;
  }
  function helperFunction_18(argument, argument_2, {
    type: localValue_9 = "text"
  }
  = {
  }
  ) {
    const localValue_10 = helperFunction_15(argument, "input", "mask-input");
    return void (localValue_10.type = localValue_9, localValue_10.value = argument_2, localValue_10.autocomplete = "off"), localValue_10;
  }
  function helperFunction_19(argument, argument_2) {
    void 0;
    argument_2.type = "password";
    const localValue_9 = helperFunction_15(argument, "div", "mask-secret-control"), localValue_10 = (0, helperFunction_17)(argument, "보기");
    return void (localValue_10.className = ("" + localValue_10.className) + " mask-secret-toggle", helperFunction_16(localValue_10, "aria-pressed", "false"), localValue_10.addEventListener("click", () => {
      ;
      const localValue_11 = ((argument_2.type) === (("password")));
      void (argument_2.type = localValue_11 ? "text": "password", localValue_10.textContent = localValue_11 ? "숨기기": "보기", helperFunction_16(localValue_10, "aria-pressed", localValue_11 ? "true": "false"));
    }
    ), localValue_9.append(argument_2, localValue_10)), localValue_9;
  }
  function helperFunction_20(argument, argument_2, argument_3, argument_4) {
    const localValue_9 = (0, helperFunction_15)(argument, "select", "mask-input");
    for (const localValue_10 of argument_2) {
      const localValue_11 = (0, helperFunction_15)(argument, "option", "", argument_3?.[localValue_10] ?? localValue_10);
      void (localValue_11.value = localValue_10, localValue_11.selected = (localValue_10 === argument_4), localValue_9.append(localValue_11));
    }
    return localValue_9;
  }
  function helperFunction_21(argument, {
    label: label, description: description, control: control
  }
  ) {
    const localValue_9 = helperFunction_15(argument, "label", "mask-field");
    return localValue_9.append(helperFunction_15(argument, "span", "mask-field-title", label), control), description && localValue_9.append(helperFunction_15(argument, "span", "mask-field-note", description)), localValue_9;
  }
  function helperFunction_22(argument, {
    label: label, description: description, checked: checked = false
  }
  ) {
    const wrapper = helperFunction_15(argument, "label", "mask-check"), input = helperFunction_18(argument, "", {
      type: "checkbox"
    }
    );
    input.checked = checked === true;
    const localValue_9 = (0, helperFunction_15)(argument, "span", "mask-check-copy");
    localValue_9.append(helperFunction_15(argument, "span", "mask-field-title", label));
    description && localValue_9.append((0, helperFunction_15)(argument, "span", "mask-field-note", description));
    wrapper.append(input, localValue_9);
    const settingsRecord_4 = {
      wrapper: wrapper,
      input: input
    }
    ;
    return settingsRecord_4;
  }
  function helperFunction_23(argument, argument_2) {
    const localValue_9 = (0, helperFunction_15)((argument), "section", "mask-section");
    return (argument_2) && localValue_9.append((0, helperFunction_15)((argument), "h2", "mask-section-title", (argument_2))), localValue_9;
  }
  function helperFunction_24(argument, argument_2, argument_3, argument_4) {
    const localValue_9 = helperFunction_15((argument), "div", "mask-metric");
    return localValue_9.append(helperFunction_15((argument), "span", "mask-metric-label", (argument_2)), helperFunction_15((argument), "strong", "mask-metric-value", (argument_3)), helperFunction_15((argument), "span", "mask-field-note", (argument_4))), localValue_9;
  }
  function helperFunction_25(argument) {
    return typeof argument === "number" && Number.isFinite(argument) ? new Date(argument).toLocaleString("ko-KR"): "-";
  }
  function helperFunction_26(argument) {
    if (! Number.isInteger((argument)) || (argument) < 0) return "-";
    if ((argument) < 1000) return (("" + (argument)) + " ms");
    const localValue_9 = Math.round((argument) / 100) / 10;
    if ((argument) < 60000) {
      if ((localValue_9 >= 60)) return "1분";
      return "" + localValue_9.toLocaleString("ko-KR", {
        maximumFractionDigits: 1
      }
      ) + "초";
    }
    const localValue_10 = Math.floor(((argument) / 60000)), localValue_11 = Math.round((argument) % 60000 / 100) / 10;
    if (localValue_11 >= 60) return "" + (localValue_10 + 1) + "분";
    if (localValue_11 === 0) return "" + localValue_10 + "분";
    return "" + localValue_10 + "분 " + localValue_11.toLocaleString("ko-KR", {
      maximumFractionDigits: 1
    }
    ) + "초";
  }
  function helperFunction_27(argument) {
    return new Intl.NumberFormat("ko-KR").format(Number.isInteger(argument) && argument >= 0 ? argument: 0);
  }
  function helperFunction_28(argument) {
    if (typeof (argument) !== "string" || ((argument).trim().length === 0)) return null;
    try {
      return JSON.parse((argument));
    }
    catch {
      return null;
    }
  }
  function helperFunction_29(argument) {
    return JSON.stringify(argument, null, 2);
  }
  function helperFunction_30(argument) {
    if (typeof (argument) === "string") return (argument);
    if (! Array.isArray((argument))) return helperFunction_29((argument) ?? null);
    return (argument).map((argument_2, argument_3) => {
      if (typeof argument_2 === "string") return argument_2;
      if (argument_2 && ((typeof argument_2) === "object") && ((typeof argument_2.text) === "string")) return (("[" + (argument_2.type ?? "내용 " + (argument_3 + 1))) + "]\n") + argument_2.text;
      return (0, helperFunction_29)(argument_2 ?? null);
    }
    ).join("\n\n");
  }
  function helperFunction_31(argument, argument_2, localValue_9 = "항목") {
    if (! argument || typeof argument !== "object" || Array.isArray(argument)) return (((("[" + localValue_9) + " ") + (argument_2 + 1)) + "]\n") + helperFunction_29(argument ?? null);
    const localValue_10 = argument.type ?? "unknown", items = [(((("[" + localValue_9) + " ") + (argument_2 + 1) + " (" + localValue_10) + ")]")], settingsRecord_4 = {
      ... argument
    }
    ;
    void (delete settingsRecord_4.content, delete settingsRecord_4.arguments, delete settingsRecord_4.output, delete settingsRecord_4.summary);
    typeof settingsRecord_4.encrypted_content === "string" && (settingsRecord_4.encrypted_content = (("<암호화된 추론 " + settingsRecord_4.encrypted_content.length) + "자>"));
    Object.keys(settingsRecord_4).length > 1 && items.push((0, helperFunction_29)(settingsRecord_4));
    (argument.content !== null) && items.push((0, helperFunction_30)(argument.content));
    Array.isArray(argument.summary) && (argument.summary.length > 0) && items.push("[추론 요약]\n" + argument.summary.map((argument_3) => {
      return typeof (argument_3)?.text === "string" ? (argument_3).text: helperFunction_29((argument_3) ?? null);
    }
    ).join("\n\n"));
    if (typeof argument.arguments === "string") {
      const localValue_11 = helperFunction_28(argument.arguments);
      items.push(("[호출 인자]\n" + (localValue_11 === null ? argument.arguments: helperFunction_29(localValue_11))));
    }
    if (argument.output !== null) {
      const localValue_11 = typeof argument.output === "string" ? helperFunction_28(argument.output): argument.output;
      items.push("[도구 결과]\n" + (localValue_11 === null ? String(argument.output): helperFunction_29(localValue_11)));
    }
    return items.join("\n\n");
  }
  function helperFunction_32(argument) {
    const localValue_9 = helperFunction_28(argument);
    if (! localValue_9 || typeof localValue_9 !== "object" || Array.isArray(localValue_9)) return argument;
    const settingsRecord_4 = {
      ... localValue_9
    }
    , items = [], localValue_10 = settingsRecord_4;
    return void (delete localValue_10.input, delete localValue_10.messages, delete localValue_10.tools), (Object.keys(localValue_10).length > 0) && items.push("[요청 설정]\n" + helperFunction_29(localValue_10)), Array.isArray(localValue_9.input) && items.push(... localValue_9.input.map((argument_2, argument_3) => {
      return helperFunction_31((argument_2), (argument_3), "입력");
    }
    )), Array.isArray(localValue_9.messages) && items.push(... localValue_9.messages.map((argument_2, argument_3) => {
      return (0, helperFunction_31)((argument_2), (argument_3), "메시지");
    }
    )), Array.isArray(localValue_9.tools) && localValue_9.tools.length > 0 && items.push("[사용 가능 도구 " + localValue_9.tools.length + "개]\n" + localValue_9.tools.map((argument_2, argument_3) => {
      ;
      const localValue_11 = (argument_2)?.function && typeof (argument_2).function === "object" ? (argument_2).function: (argument_2), localValue_12 = localValue_11?.name ?? ("도구 " + ((argument_3) + 1)), localValue_13 = typeof localValue_11?.description === "string" ? "\n" + localValue_11.description: "", localValue_14 = localValue_11?.parameters ?? localValue_11?.input_schema;
      return ((((("" + ((argument_3) + 1)) + ". ") + localValue_12) + localValue_13) + (localValue_14 ? ("\n" + helperFunction_29(localValue_14)): ""));
    }
    ).join("\n\n")), items.length > 0 ? items.join("\n\n"): helperFunction_29(localValue_9);
  }
  function helperFunction_33(argument) {
    if (typeof argument !== "string" || ! argument.includes("data:")) return [];
    const items = [];
    for (const localValue_9 of argument.split(new RegExp("\\r?\\n\\r?\\n", ""))) {
      let textValue_3 = "";
      const items_2 = [];
      for (const localValue_11 of localValue_9.split(new RegExp("\\r?\\n", ""))) localValue_11.startsWith("event:") ? textValue_3 = localValue_11.slice(6).trim(): localValue_11.startsWith("data:") && items_2.push(localValue_11.slice(5).replace(new RegExp("^ ", ""), ""));
      if (items_2.length === 0) continue;
      const localValue_10 = items_2.join("\n");
      if (localValue_10 === "[DONE]") continue;
      const data = (0, helperFunction_28)(localValue_10);
      (data !== null) && items.push({
        event: textValue_3 || data?.type || "message",
        data: data
      }
      );
    }
    return items;
  }
  function helperFunction_34(argument) {
    if (typeof (argument) !== "string" || ! (argument).includes("data:")) return null;
    const localValue_9 = (argument).split(new RegExp("\\r?\\n\\r?\\n", ""));
    for (let localValue_10 = (localValue_9.length - 1);
    localValue_10 >= 0;
    localValue_10 -= 1) {
      const localValue_11 = localValue_9[localValue_10].split(new RegExp("\\r?\\n", "")).filter((argument_2) => {
        return (argument_2).startsWith("data:");
      }
      ).map((argument_2) => {
        return (argument_2).slice(5).replace(new RegExp("^ ", ""), "");
      }
      );
      if ((localValue_11.length === 0)) continue;
      const localValue_12 = helperFunction_28(localValue_11.join("\n"));
      if (localValue_12?.response && ["response.completed", "response.incomplete", "response.failed"].includes(localValue_12.type)) return localValue_12.response;
    }
    return null;
  }
  function helperFunction_35(... argumentState) {
    ;
    const localValue_9 = ((typeof argumentState[0]) === "string") ? helperFunction_33(argumentState[0]).map(({
      data: data
    }
    ) => {
      return data;
    }
    ): argumentState[0] && typeof argumentState[0] === "object" && ! Array.isArray(argumentState[0]) ? [argumentState[0]]: [];
    if ((localValue_9.length === 0) || ! localValue_9.some((argument) => {
      return Array.isArray((argument)?.choices);
    }
    )) return null;
    const settingsRecord_4 = {
    }
    ;
    argumentState[1] = "";
    const lookupMap = new Map();
    for (const localValue_10 of localValue_9) {
      for (const localValue_11 of["id", "model", "service_tier", "providerMetadata", "provider_metadata"]) localValue_10?.[localValue_11] !== null && (settingsRecord_4[localValue_11] = localValue_10[localValue_11]);
      localValue_10?.usage && typeof localValue_10.usage === "object" && (settingsRecord_4.usage = localValue_10.usage);
      for (const localValue_11 of Array.isArray(localValue_10?.choices) ? localValue_10.choices: []) {
        if ((localValue_11?.index ?? 0) !== 0) continue;
        const localValue_12 = localValue_11?.delta && typeof localValue_11.delta === "object" ? localValue_11.delta: localValue_11?.message && typeof localValue_11.message === "object" ? localValue_11.message: {
        }
        ;
        ((typeof localValue_12.content) === "string") ? argumentState[1] += localValue_12.content: Array.isArray(localValue_12.content) && (argumentState[1] += localValue_12.content.map((argument) => {
          return ((typeof (argument)?.text) === "string") ? (argument).text: "";
        }
        ).join(""));
        for (const localValue_13 of Array.isArray(localValue_12.tool_calls) ? localValue_12.tool_calls: []) {
          const localValue_14 = Number.isInteger(localValue_13?.index) ? localValue_13.index: 0, localValue_15 = lookupMap.get(localValue_14) ?? {
            id: "",
            name: "",
            arguments: ""
          }
          ;
          lookupMap.set(localValue_14, {
            id: typeof localValue_13?.id === "string" && localValue_13.id.length > 0 ? localValue_13.id: localValue_15.id,
            name: typeof localValue_13?.function?.name === "string" ? localValue_13.function.name: localValue_15.name,
            arguments: localValue_15.arguments + (typeof localValue_13?.function?.arguments === "string" ? localValue_13.function.arguments: "")
          }
          );
        }
        localValue_11?.finish_reason !== null && (settingsRecord_4.finish_reason = localValue_11.finish_reason);
      }
    }
    return argumentState[1].length > 0 && (settingsRecord_4.content = argumentState[1]), (lookupMap.size > 0) && (settingsRecord_4.toolCalls = [... lookupMap.entries()].sort(([localValue_10], [localValue_11]) => {
      return ((localValue_10) - (localValue_11));
    }
    ).map(([, localValue_10]) => {
      return localValue_10;
    }
    )), settingsRecord_4;
  }
  function helperFunction_36(argument) {
    if (! argument || typeof argument !== "object" || Array.isArray(argument)) return (0, helperFunction_29)(argument ?? null);
    const settingsRecord_4 = {
      ... argument
    }
    , items = [], localValue_9 = settingsRecord_4;
    return void (delete localValue_9.output, delete localValue_9.usage, delete localValue_9.content, delete localValue_9.thinking, delete localValue_9.toolCalls), Object.keys(localValue_9).length > 0 && items.push("[응답 정보]\n" + helperFunction_29(localValue_9)), argument.usage && ((typeof argument.usage) === "object") && items.push(("[토큰 사용량]\n" + (0, helperFunction_29)(argument.usage))), ((typeof argument.thinking) === "string") && argument.thinking.length > 0 && items.push("[추론 요약]\n" + argument.thinking), ((typeof argument.content) === "string") && argument.content.length > 0 && items.push("[응답 본문]\n" + argument.content), Array.isArray(argument.toolCalls) && argument.toolCalls.length > 0 && items.push(... argument.toolCalls.map((argument_2, argument_3) => {
      return (0, helperFunction_31)({
        type: "function_call",
        ... (argument_2)
      }
      , (argument_3), "도구 호출");
    }
    )), Array.isArray(argument.output) && items.push(... argument.output.map((argument_2, argument_3) => {
      return (0, helperFunction_31)((argument_2), (argument_3), "출력");
    }
    )), (items.length > 0) ? items.join("\n\n"): helperFunction_29(argument);
  }
  function helperFunction_37(argument) {
    ;
    ;
    const localValue_9 = helperFunction_28((argument));
    if (localValue_9 !== null) {
      if (Array.isArray(localValue_9)) {
        const localValue_14 = localValue_9.findLast?.((argument_2) => {
          return (argument_2)?.type === "done";
        }
        ) ?? [... localValue_9].reverse().find((argument_2) => {
          return ((argument_2)?.type) === ("done");
        }
        );
        if (localValue_14?.data) return helperFunction_36(localValue_14.data);
      }
      const localValue_13 = localValue_9?.response ?? localValue_9;
      return (0, helperFunction_36)((0, helperFunction_35)(localValue_13) ?? localValue_13);
    }
    const localValue_10 = helperFunction_34((argument));
    if (localValue_10) return (0, helperFunction_36)(localValue_10);
    const localValue_11 = helperFunction_35((argument));
    if (localValue_11) return helperFunction_36(localValue_11);
    const localValue_12 = helperFunction_33((argument));
    if (localValue_12.length === 0) return (argument);
    return localValue_12.map(({
      event: localValue_13, data: data
    }
    ) => {
      return "[" + localValue_13 + "]\n" + helperFunction_29(data);
    }
    ).join("\n\n");
  }
  function helperFunction_38(argument) {
    if (! ["gateway", "ipc"].includes((argument)?.transport)) return null;
    const localValue_9 = (0, helperFunction_28)((argument).responseBody);
    if (Array.isArray(localValue_9)) {
      const localValue_10 = localValue_9.findLast?.((argument_2) => {
        return (argument_2)?.type === "done";
      }
      ) ?? [... localValue_9].reverse().find((argument_2) => {
        return ((argument_2)?.type) === "done";
      }
      );
      return localValue_10?.data ?? null;
    }
    if (localValue_9 && ((typeof localValue_9) === "object")) return localValue_9;
    return helperFunction_34((argument).responseBody) ?? (0, helperFunction_35)((argument).responseBody);
  }
  function helperFunction_39(argument, argument_2) {
    const localValue_9 = argument_2 ?? helperFunction_38(argument), localValue_10 = localValue_9?.response ?? localValue_9, localValue_11 = localValue_10?.usage ?? null;
    if (! localValue_11 || typeof localValue_11 !== "object") return null;
    return (0, observability_e0_2)([localValue_11]);
  }
  function helperFunction_40(argument, usage, argument_2) {
    const localValue_9 = (argument_2) ?? (0, helperFunction_38)((argument)), localValue_10 = localValue_9?.response ?? localValue_9, localValue_11 = helperFunction_28((argument)?.requestBody);
    return (0, observability_e1)({
      usage: (usage),
      modelId: localValue_10?.model ?? (argument)?.modelId ?? localValue_11?.model,
      serviceTier: localValue_10?.service_tier ?? localValue_10?.serviceTier ?? ((argument)?.gatewayProfileId === "vercel-ai-gateway" || localValue_11?.providerOptions?.gateway ? null: localValue_11?.service_tier ?? localValue_11?.serviceTier),
      gatewayMetadata: localValue_10?.providerMetadata?.gateway ?? localValue_10?.provider_metadata?.gateway ?? localValue_9?.providerMetadata?.gateway ?? localValue_9?.provider_metadata?.gateway,
      reportedCost: localValue_10?.usage?.cost
    }
    );
  }
  function helperFunction_41(argument) {
    if (typeof argument !== "number" || ! Number.isFinite(argument) || argument < 0) return "정보 없음";
    if ((argument > 0) && argument < 0.000001) return "<$0.000001";
    return "$" + argument.toFixed((argument >= 1) ? 4: 6);
  }
  function helperFunction_42(argument) {
    return (argument).kind === "actual" ? "비용 " + helperFunction_41((argument).usd) + " (Gateway 반환)": "추정 비용 " + (0, helperFunction_41)((argument).usd);
  }
  function helperFunction_43(argument) {
    const localValue_9 = Math.max(0, (argument).inputTokens ?? 0), localValue_10 = Math.max(0, (argument).cachedInputTokens ?? 0), localValue_11 = Math.max(0, (argument).cacheWriteInputTokens ?? 0), cacheWriteInputTokensReported = (argument).cacheWriteInputTokensReported === true;
    if (localValue_9 === 0) return {
      readPercent: 0,
      coveredInputTokens: 0,
      coveragePercent: null,
      cacheWriteInputTokensReported: cacheWriteInputTokensReported
    }
    ;
    const coveredInputTokens = Math.min(localValue_9, (localValue_10 + localValue_11));
    return {
      readPercent: Math.min(localValue_9, localValue_10) / localValue_9 * 100,
      coveredInputTokens: coveredInputTokens,
      coveragePercent: cacheWriteInputTokensReported ? ((coveredInputTokens / localValue_9) * 100): null,
      cacheWriteInputTokensReported: cacheWriteInputTokensReported
    }
    ;
  }
  function helperFunction_44(argument, argument_2) {
    if ((argument_2).cacheWriteInputTokensReported) return (0, helperFunction_27)((argument).cacheWriteInputTokens);
    return (argument).cacheWriteInputTokens > 0 ? "" + helperFunction_27((argument).cacheWriteInputTokens) + " 이상 (부분 보고)": "미보고";
  }
  function helperFunction_45(argument) {
    return (argument).coveragePercent === null ? "계산 불가 (쓰기 미보고)": "" + (argument).coveragePercent.toFixed(1) + "%";
  }
  function helperFunction_46(argument) {
    const localValue_9 = helperFunction_43((argument)), localValue_10 = (argument).inputTokens > 0 ? ((" (" + localValue_9.readPercent.toFixed(1)) + "%)"): "", localValue_11 = ((argument).inputTokens > 0) ? "캐시 처리율 " + helperFunction_45(localValue_9): "캐시 처리율 정보 없음";
    return ["입력 " + (0, helperFunction_27)((argument).inputTokens), "캐시 읽기 " + (0, helperFunction_27)((argument).cachedInputTokens) + localValue_10, ("캐시 쓰기 " + helperFunction_44((argument), localValue_9)), localValue_11, ("출력 " + (0, helperFunction_27)((argument).outputTokens)), ("추론(출력 중) " + helperFunction_27((argument).reasoningTokens)), ("합계 " + (0, helperFunction_27)((argument).totalTokens))].join(", ");
  }
  function helperFunction_47(argument, argument_2, argument_3) {
    const localValue_9 = helperFunction_43((argument_2)), localValue_10 = (0, helperFunction_15)((argument), "div", "mask-log-token-grid"), items = [["입력 토큰", (argument_2).inputTokens], ["캐시 읽기", (argument_2).cachedInputTokens], ["캐시 쓰기", (0, helperFunction_44)((argument_2), localValue_9)], ["캐시 읽기 적중률", ("" + localValue_9.readPercent.toFixed(1)) + "%"], ["캐시 처리율", helperFunction_45(localValue_9)], ["출력 토큰", (argument_2).outputTokens], ["추론 토큰 (출력 중)", (argument_2).reasoningTokens], ["전체 토큰", (argument_2).totalTokens]];
    (argument_3) && items.push([(argument_3).kind === "actual" ? "요청 비용 (Gateway 반환)": "요청 비용 (추정)", helperFunction_41((argument_3).usd)]);
    for (const [localValue_11, localValue_12] of items) {
      const localValue_13 = helperFunction_15((argument), "div", "mask-log-token");
      void (localValue_13.append((0, helperFunction_15)((argument), "span", "mask-log-token-label", localValue_11), helperFunction_15((argument), "strong", "mask-log-token-value", typeof localValue_12 === "number" ? helperFunction_27(localValue_12): localValue_12)), localValue_10.append(localValue_13));
    }
    return localValue_10;
  }
  function helperFunction_48(argument) {
    const localValue_9 = (argument).permissionsPolicy ?? (argument).featurePolicy;
    if (typeof localValue_9?.allowsFeature !== "function") return true;
    try {
      return localValue_9.allowsFeature("clipboard-write");
    }
    catch {
      return true;
    }
  }
  async function helperFunction_49(argument, argument_2) {
    const localValue_9 = argument.defaultView?.navigator ?? globalThis.navigator, localValue_10 = localValue_9?.clipboard;
    if ((0, helperFunction_48)(argument) && typeof localValue_10?.writeText === "function") try {
      await localValue_10.writeText.call(localValue_10, argument_2);
      return;
    }
    catch {
    }
    const localValue_11 = argument.createElement("textarea");
    void (localValue_11.value = argument_2, localValue_11.style.position = "fixed", localValue_11.style.inset = "0 auto auto 0", localValue_11.style.width = "1px", localValue_11.style.height = "1px", localValue_11.style.opacity = "0", localValue_11.setAttribute?.("readonly", ""), localValue_11.setAttribute?.("aria-hidden", "true"));
    const activeElement = argument.activeElement;
    argument.body.append(localValue_11);
    let enabledFlag_9 = false;
    try {
      void (localValue_11.focus?.({
        preventScroll: true
      }
      ), localValue_11.select?.(), localValue_11.setSelectionRange?.(0, localValue_11.value.length), enabledFlag_9 = ((typeof argument.execCommand) === "function") && argument.execCommand("copy"));
    }
    finally {
      typeof localValue_11.remove === "function" ? localValue_11.remove(): argument.body.removeChild?.(localValue_11);
      if (activeElement && activeElement !== localValue_11 && typeof activeElement.focus === "function") try {
        activeElement.focus({
          preventScroll: true
        }
        );
      }
      catch {
        activeElement.focus();
      }
    }
    if (! enabledFlag_9) throw new Error("clipboard_unavailable");
  }
  function helperFunction_50(argument, argument_2, argument_3, argument_4, argument_5, argument_6) {
    ! argument_6 && (argument_6 = function () {
      if (enabledFlag_9) return;
      enabledFlag_9 = true;
      const localValue_12 = helperFunction_17(argument, ("" + argument_2) + " 원문 복사");
      void (localValue_12.style.marginBottom = "6px", localValue_12.style.minHeight = "32px", localValue_12.style.padding = "4px 9px", localValue_12.addEventListener("click", async() => {
        try {
          void (await helperFunction_49(argument, argument_3), argument_5("" + argument_2 + "을 복사했습니다."));
        }
        catch {
          (0, argument_5)("자동 복사를 사용할 수 없습니다.");
        }
      }
      ), localValue_11.append(localValue_12, helperFunction_15(argument, "pre", "mask-raw", argument_4)));
      if (argument_4 !== argument_3) {
        const localValue_13 = helperFunction_15(argument, "details", "mask-wire");
        void (localValue_13.append(helperFunction_15(argument, "summary", "", "전송 원문 보기"), helperFunction_15(argument, "pre", "mask-raw", argument_3)), localValue_11.append(localValue_13));
      }
    }
    );
    const localValue_9 = (0, helperFunction_15)(argument, "details", "mask-log-payload"), localValue_10 = helperFunction_15(argument, "summary", "", argument_2), localValue_11 = helperFunction_15(argument, "div", "mask-log-payload-body");
    let enabledFlag_9 = false;
    return void (localValue_9.addEventListener("toggle", () => {
      localValue_9.open && (0, argument_6)();
    }
    ), localValue_9.append(localValue_10, localValue_11)), localValue_9;
  }
  function renderRequestLog(argument, argument_2, argument_3, {
    roundIndex: roundIndex = null, attemptIndex: attemptIndex = null, attemptTotal: attemptTotal = 1
  }
  = {
  }
  ) {
    const localValue_9 = helperFunction_15(argument, "details", "mask-log"), localValue_10 = argument_2.completed ? (0, String)(argument_2.responseStatus ?? "완료"): ((("실패 " + (argument_2.responseStatus ?? "")) + " ") + (argument_2.errorCode ?? "")).trim(), localValue_11 = (0, helperFunction_15)(argument, "summary", "mask-log-summary");
    localValue_11.append((0, helperFunction_15)(argument, "span", "mask-log-summary-main", (((("" + (Number.isInteger(roundIndex) ? ("라운드 " + roundIndex) + ", ": "") + (Number.isInteger(attemptIndex) && (attemptTotal > 1) ? (("시도 " + attemptIndex) + "/") + attemptTotal + ", ": "")) + (0, helperFunction_25)(argument_2.timestamp)) + " " + argument_2.method + " (" + argument_2.transport.toUpperCase() + ", " + localValue_10 + ", ") + helperFunction_26(argument_2.durationMs)) + ")"));
    const localValue_12 = helperFunction_38(argument_2), localValue_13 = helperFunction_39(argument_2, localValue_12), localValue_14 = localValue_13 ? (0, helperFunction_40)(argument_2, localValue_13, localValue_12): helperFunction_40(argument_2, null, localValue_12);
    localValue_13 ? localValue_11.append(helperFunction_15(argument, "span", "mask-log-summary-usage", (("" + helperFunction_46(localValue_13)) + "\n") + (localValue_14 ? helperFunction_42(localValue_14): "비용 정보 없음"))): ["gateway", "ipc"].includes(argument_2.transport) && localValue_11.append(helperFunction_15(argument, "span", "mask-log-summary-usage", localValue_14 ? "토큰 메타데이터 없음, " + helperFunction_42(localValue_14): "토큰 및 비용 메타데이터 없음"));
    const localValue_15 = helperFunction_15(argument, "div", "mask-log-body");
    let enabledFlag_9 = false;
    function helperFunction_54() {
      if (enabledFlag_9) return;
      enabledFlag_9 = true;
      const localValue_16 = [argument_2.endpoint, argument_2.modelId ? "모델 " + argument_2.modelId: "", "소요 시간 " + (0, helperFunction_26)(argument_2.durationMs) + " (" + argument_2.durationMs + " ms)", argument_2.responseContentType ? "응답 " + argument_2.responseContentType: "", ((("전송 방식 " + (argument_2.responseMode === "buffered" ? "비스트리밍 호환": (argument_2.responseMode === "background-resume") ? "복구 가능 스트리밍": (argument_2.responseMode === "webkit-host-buffered") ? "WebKit 호스트 버퍼": "스트리밍")) + ", 읽기 방식 ") + argument_2.bodyReadMode), ((((("수신 " + helperFunction_27(argument_2.responseBytes)) + "바이트, 청크 " + helperFunction_27(argument_2.responseChunks)) + "개, 이벤트 ") + helperFunction_27(argument_2.responseEvents)) + "개"), argument_2.backgroundResumeAttempts || argument_2.backgroundPollAttempts ? (("복구 GET " + helperFunction_27(argument_2.backgroundResumeAttempts) + "회, 상태 폴링 ") + helperFunction_27(argument_2.backgroundPollAttempts)) + "회, 마지막 커서 " + (Number.isInteger(argument_2.backgroundLastSequenceNumber) ? (0, helperFunction_27)(argument_2.backgroundLastSequenceNumber): "-"): "", argument_2.backgroundResponseId ? "백그라운드 응답 " + argument_2.backgroundResponseId: "", (("화면 " + argument_2.visibilityStart) + " → ") + argument_2.visibilityEnd, argument_2.hiddenDuringRequest || argument_2.pageHideDuringRequest ? "생성 중 브라우저 백그라운드 또는 pagehide 감지": ""].filter(Boolean).join("\n");
      localValue_15.append(helperFunction_15(argument, "div", "mask-log-meta", localValue_16));
      if (localValue_13) localValue_15.append(helperFunction_47(argument, localValue_13, localValue_14));
      else {
        if (localValue_14) {
          const localValue_17 = helperFunction_15(argument, "div", "mask-log-token-grid"), localValue_18 = helperFunction_15(argument, "div", "mask-log-token");
          void (localValue_18.append(helperFunction_15(argument, "span", "mask-log-token-label", (localValue_14.kind === "actual") ? "요청 비용 (Gateway 반환)": "요청 비용 (추정)"), (0, helperFunction_15)(argument, "strong", "mask-log-token-value", (0, helperFunction_41)(localValue_14.usd))), localValue_17.append(localValue_18), localValue_15.append(localValue_17));
        }
      }
      localValue_15.append((0, helperFunction_50)(argument, "요청 본문", argument_2.requestBody, (0, helperFunction_32)(argument_2.requestBody), argument_3), helperFunction_50(argument, "응답 본문", argument_2.responseBody, (0, helperFunction_37)(argument_2.responseBody), argument_3));
    }
    return void (localValue_9.addEventListener("toggle", () => {
      localValue_9.open && helperFunction_54();
    }
    ), localValue_9.append(localValue_11, localValue_15)), localValue_9;
  }
  function renderProviderRunLog(argument, argument_2, argument_3, argument_4, {
    compact: compact = false, includeUsage: includeUsage = true
  }
  = {
  }
  ) {
    void 0;
    const localValue_9 = helperFunction_15(argument, "details", "mask-provider-run mask-log"), localValue_10 = (0, helperFunction_15)(argument, "summary", "mask-log-summary");
    localValue_10.append(helperFunction_15(argument, "span", "mask-log-summary-main", compact ? (((("" + (localValue_8[argument_2.runKind] ?? argument_2.runKind)) + ": 모델 요청 " + helperFunction_27(argument_2.gatewayRequests.attempted) + "회, 도구 ") + helperFunction_27(argument_2.mcpToolCalls)) + "회"): ((("" + helperFunction_25(argument_2.timestamp)) + " " + (argument_2.gatewayProfileId ?? "연결 미상") + "\n모델 요청 " + helperFunction_27(argument_2.gatewayRequests.attempted) + "회, 도구 " + (0, helperFunction_27)(argument_2.mcpToolCalls) + "회 (") + helperFunction_26(argument_2.durationMs)) + ")"));
    const settingsRecord_4 = {
      inputTokens: argument_2.inputTokens,
      cachedInputTokens: argument_2.cachedInputTokens,
      cacheWriteInputTokens: argument_2.cacheWriteInputTokens,
      cacheWriteInputTokensReported: argument_2.cacheWriteInputTokensReported,
      outputTokens: argument_2.outputTokens,
      reasoningTokens: argument_2.reasoningTokens,
      totalTokens: argument_2.totalTokens
    }
    ;
    ! compact && localValue_10.append(helperFunction_15(argument, "span", "mask-log-summary-usage", (("" + (0, helperFunction_46)(settingsRecord_4) + "\n") + (argument_2.cost ? helperFunction_42(argument_2.cost): "비용 정보 없음")) + ((argument_2.economyRounds > 0) ? (("\n중간 라운드 절약 " + argument_2.economyRounds) + "회"): "")));
    const localValue_11 = (0, helperFunction_15)(argument, "div", "mask-log-body");
    localValue_11.append((0, helperFunction_15)(argument, "div", "mask-log-meta", ["실행 ID " + argument_2.eventId, "상태 " + (argument_2.completed ? "완료": ("실패 " + (argument_2.errorCode ?? "")).trim()), argument_2.errorDetails ? ((((("검증 " + argument_2.errorDetails.reason + "\n필드 " + argument_2.errorDetails.path) + "\n기대 ") + argument_2.errorDetails.expected) + "\n실제 " + argument_2.errorDetails.actualType) + (Number.isInteger(argument_2.errorDetails.actualSize) ? ", 크기 " + argument_2.errorDetails.actualSize: "")): "", "종료 " + argument_2.stopReason, (("도구 후속 " + helperFunction_27(argument_2.toolRounds)) + "회, 모델 요청 ") + helperFunction_27(argument_2.gatewayRequests.attempted) + "회", argument_2.cost ? "비용 반영 라운드 " + (0, helperFunction_27)(argument_2.cost.pricedRounds) + " / " + helperFunction_27(argument_2.cost.totalRounds): ""].filter(Boolean).join("\n")), ... includeUsage ? [helperFunction_47(argument, settingsRecord_4, argument_2.cost)]: []);
    const localValue_12 = [... argument_3].sort((argument_5, argument_6) => {
      return argument_5.startedAt - argument_6.startedAt || ((argument_5.timestamp) - (argument_6.timestamp));
    }
    ), localValue_13 = localValue_12.some(argument_5 => {
      return Number.isInteger(argument_5.logicalRound);
    }
    ), uniqueValues = new Set(localValue_12.map((argument_5) => {
      return (argument_5).logicalRound;
    }
    ).filter(Number.isInteger)), lookupMap = new Map();
    for (const localValue_15 of localValue_12) {
      if (! Number.isInteger(localValue_15.logicalRound)) continue;
      lookupMap.set(localValue_15.logicalRound, (lookupMap.get(localValue_15.logicalRound) ?? 0) + 1);
    }
    localValue_11.append((0, helperFunction_15)(argument, "div", "mask-provider-run-rounds-title", localValue_13 ? ("요청과 응답 " + localValue_12.length) + "건, 모델 라운드 " + uniqueValues.size + "회": (("라운드별 요청과 응답 " + localValue_12.length) + "건")));
    const localValue_14 = helperFunction_15(argument, "div", "mask-provider-run-rounds");
    return void (localValue_12.length === 0 ? localValue_14.append(helperFunction_15(argument, "p", "mask-empty", "연결된 본문 로그가 없습니다. 이전 버전의 실행이거나 원문 로그 보관 한도를 지난 기록일 수 있습니다.")): localValue_12.forEach((argument_5, argument_6) => {
      ;
      const roundIndex = localValue_13 ? (argument_5).logicalRound: ((argument_6) + 1);
      localValue_14.append(renderRequestLog(argument, (argument_5), argument_4, {
        roundIndex: roundIndex,
        attemptIndex: (argument_5).requestAttempt,
        attemptTotal: Number.isInteger((argument_5).logicalRound) ? lookupMap.get((argument_5).logicalRound) ?? 1: 1
      }
      ));
    }
    ), localValue_11.append(localValue_14), localValue_9.append(localValue_10, localValue_11)), localValue_9;
  }
  const localValue_8 = Object.freeze({
    main: "본문 응답",
    ["semantic-evidence"]: "장르 표면 팔레트",
    ["story-head"]: "Head 분석과 계획",
    ["draft-edit"]: "원고 편집",
    ["draft-critic"]: "원고 비교 비평",
    ["memory-extract"]: "장기 기억 추출",
    ["memory-consolidate"]: "장기 기억 병합",
    ["plot-plan"]: "장기 플롯",
    auxiliary: "보조 요청",
    unknown: "이전 실행"
  }
  );
  function renderProviderResponseLog(argument, argument_2, argument_3, argument_4, {
    selected: selected = false
  }
  = {
  }
  ) {
    const localValue_9 = helperFunction_15(argument, selected ? "article": "details", selected ? "mask-provider-response mask-response-detail": "mask-provider-response mask-log"), localValue_10 = helperFunction_15(argument, selected ? "header": "summary", selected ? "mask-record-heading": "mask-log-summary");
    localValue_10.append(helperFunction_15(argument, selected ? "h2": "span", selected ? "mask-object-title": "mask-log-summary-main", selected ? argument_2.completed ? "응답 완료": "응답 실패": (((((("" + helperFunction_25(argument_2.timestamp) + " 실행 " + helperFunction_27(argument_2.runs.length) + "개\n모델 요청 ") + helperFunction_27(argument_2.gatewayRequests.attempted)) + "회, 도구 ") + helperFunction_27(argument_2.mcpToolCalls)) + "회 (") + helperFunction_26(argument_2.durationMs)) + ")"));
    selected && (localValue_10.append(helperFunction_15(argument, "p", "mask-object-meta", (("" + helperFunction_25(argument_2.timestamp)) + "  ") + helperFunction_26(argument_2.durationMs))), argument_2.errorCode && localValue_10.append(helperFunction_15(argument, "p", "mask-record-error", argument_2.errorCode)));
    const settingsRecord_4 = {
      inputTokens: argument_2.inputTokens,
      cachedInputTokens: argument_2.cachedInputTokens,
      cacheWriteInputTokens: argument_2.cacheWriteInputTokens,
      cacheWriteInputTokensReported: argument_2.cacheWriteInputTokensReported,
      outputTokens: argument_2.outputTokens,
      reasoningTokens: argument_2.reasoningTokens,
      totalTokens: argument_2.totalTokens
    }
    ;
    ! selected && localValue_10.append(helperFunction_15(argument, "span", "mask-log-summary-usage", ("" + helperFunction_46(settingsRecord_4)) + "\n" + (argument_2.cost ? helperFunction_42(argument_2.cost): "비용 정보 없음")));
    const localValue_11 = (0, helperFunction_15)(argument, "div", "mask-log-body");
    localValue_11.append(helperFunction_15(argument, "div", "mask-log-meta", ["응답 ID " + argument_2.responseGroupId, ("상태 " + (argument_2.completed ? "완료": ("일부 실패 " + (argument_2.errorCode ?? "")).trim())), "하위 실행 " + helperFunction_27(argument_2.runs.length) + "개"].join("\n")), helperFunction_47(argument, settingsRecord_4, argument_2.cost));
    const localValue_12 = (0, helperFunction_15)(argument, "div", "mask-provider-response-runs");
    for (const localValue_13 of argument_2.runs) {
      const localValue_14 = (0, helperFunction_15)(argument, "div", "mask-provider-response-run");
      ! selected && localValue_14.append(helperFunction_15(argument, "div", "mask-provider-response-run-label", localValue_8[localValue_13.runKind] ?? localValue_13.runKind)), void (localValue_14.append((0, renderProviderRunLog)(argument, localValue_13, argument_3.get(localValue_13.eventId) ?? [], argument_4, {
        compact: selected,
        includeUsage: ! selected || argument_2.runs.length > 1
      }
      )), localValue_12.append(localValue_14));
    }
    if (selected) {
      const localValue_13 = localValue_11.children[0], localValue_14 = helperFunction_15(argument, "details", "mask-log");
      void (localValue_14.append((0, helperFunction_15)(argument, "summary", "", "응답 식별 정보"), localValue_13), localValue_11.append(localValue_12, localValue_14));
    }
    else localValue_11.append(localValue_12);
    return localValue_9.append(localValue_10, localValue_11), localValue_9;
  }
  function helperFunction_51(argument, localValue_9 = argument.gatewayProfileId) {
    const profile = gatewayProfiles_e1_2(localValue_9), localValue_10 = providerSettings_e8_2(argument, profile.id);
    return {
      profile: profile,
      profiles: gatewayProfiles_e0(),
      endpoint: localValue_10.responsesEndpoint,
      modelId: localValue_10.modelId,
      transportProxyUrl: localValue_10.transportProxyUrl,
      transportProxyToken: localValue_10.transportProxyToken,
      transportProxyMode: localValue_10.transportProxyMode,
      compatibleParameterMode: localValue_10.compatibleParameterMode,
      chatTokenLimitField: localValue_10.chatTokenLimitField,
      noGatewayFallback: localValue_10.noGatewayFallback,
      activeApiKeyArgument: profile.apiKeyArgument
    }
    ;
  }
  async function helperFunction_52(argument, localValue_9 = {
  }
  , localValue_10 = globalThis.document) {
    return (0, providerWorkbenchUi_e0)(argument, {
      ... localValue_9,
      renderProviderRunLog: renderProviderRunLog,
      renderProviderResponseLog: renderProviderResponseLog,
      renderRequestLog: renderRequestLog
    }
    , localValue_10);
  }
  async function helperFunction_53(argument, localValue_9 = {
  }
  ) {
    return argument.registerSetting("Mask", async() => {
      await helperFunction_52(argument, localValue_9);
    }
    , "⚙", "html", localValue_6);
  }
  const settingsRecord_3 = {
    e0: helperFunction_32,
    e1: helperFunction_37,
    e2: helperFunction_49,
    e3: helperFunction_51,
    e4: helperFunction_52,
    e5: helperFunction_53,
    e6: localValue_6
  }
  ;
  return settingsRecord_3;
}
)();
