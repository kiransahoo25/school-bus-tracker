(() => {
  "use strict";
  (globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    "[project]/apps/web/src/app/conductor/dashboard/page.tsx [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s(["default", () => ConductorDashboard]);
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/circle.mjs [app-client] (ecmascript) <export default as Circle>",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-client] (ecmascript) <export default as Navigation>",
        );
      var _s = __turbopack_context__.k.signature();
      ("use client");
      const DEMO_TRIP_ID = "00000000-0000-0000-0000-000000000000";
      function ConductorDashboard() {
        _s();
        const [students, setStudents] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ])([]);
        const [boardedStudents, setBoardedStudents] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ])([]);
        const [isLoading, setIsLoading] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ])(null);
        const [fetching, setFetching] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ])(true);
        const [gpsStatus, setGpsStatus] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ])("Locating...");
        // Fetch students
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useEffect"
        ])(
          {
            "ConductorDashboard.useEffect": () => {
              const fetchStudents = {
                "ConductorDashboard.useEffect.fetchStudents": async () => {
                  try {
                    const response = await fetch(
                      `https://school-bus-api-c3x7.onrender.com/api/v1/trips/${DEMO_TRIP_ID}/students`,
                    );
                    const data = await response.json();
                    if (data.success) {
                      setStudents(data.data);
                    }
                  } catch (error) {
                    console.error("Failed to fetch students", error);
                  } finally {
                    setFetching(false);
                  }
                },
              }["ConductorDashboard.useEffect.fetchStudents"];
              fetchStudents();
            },
          }["ConductorDashboard.useEffect"],
          [],
        );
        // REAL GPS TRACKING EFFECT
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useEffect"
        ])(
          {
            "ConductorDashboard.useEffect": () => {
              let intervalId;
              const startTracking = {
                "ConductorDashboard.useEffect.startTracking": () => {
                  if (!navigator.geolocation) {
                    setGpsStatus("GPS not supported");
                    return;
                  }
                  intervalId = setInterval(
                    {
                      "ConductorDashboard.useEffect.startTracking": () => {
                        navigator.geolocation.getCurrentPosition(
                          {
                            "ConductorDashboard.useEffect.startTracking":
                              async (position) => {
                                const { latitude, longitude } = position.coords;
                                setGpsStatus("Live (Sending)");
                                try {
                                  await fetch(
                                    "https://school-bus-api-c3x7.onrender.com/api/v1/telemetry/update",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify({
                                        busId: "KA-01-AB-1234",
                                        lat: latitude,
                                        lng: longitude,
                                      }),
                                    },
                                  );
                                } catch (err) {
                                  console.error("Failed to send GPS", err);
                                }
                              },
                          }["ConductorDashboard.useEffect.startTracking"],
                          {
                            "ConductorDashboard.useEffect.startTracking": (
                              error,
                            ) => {
                              setGpsStatus("GPS Blocked - Allow Location");
                              console.error(
                                "Error getting location:",
                                error.message,
                              );
                            },
                          }["ConductorDashboard.useEffect.startTracking"],
                          {
                            enableHighAccuracy: true,
                          },
                        );
                      },
                    }["ConductorDashboard.useEffect.startTracking"],
                    5000,
                  ); // Send every 5 seconds
                },
              }["ConductorDashboard.useEffect.startTracking"];
              startTracking();
              return {
                "ConductorDashboard.useEffect": () => {
                  if (intervalId) clearInterval(intervalId);
                },
              }["ConductorDashboard.useEffect"];
            },
          }["ConductorDashboard.useEffect"],
          [],
        );
        const toggleBoarding = async (studentId) => {
          const isCurrentlyBoarded = boardedStudents.includes(studentId);
          if (isCurrentlyBoarded) {
            setBoardedStudents(
              boardedStudents.filter((id) => id !== studentId),
            );
          } else {
            setBoardedStudents([...boardedStudents, studentId]);
          }
          setIsLoading(studentId);
          try {
            await fetch(
              "https://school-bus-api-c3x7.onrender.com/api/v1/boarding/verify",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  studentId: studentId,
                  tripId: DEMO_TRIP_ID,
                  eventType: isCurrentlyBoarded ? "UNVERIFIED" : "BOARDED",
                }),
              },
            );
          } catch (error) {
            console.error("Failed to save to database", error);
          } finally {
            setIsLoading(null);
          }
        };
        if (fetching)
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "text-center py-20 text-gray-500",
              children: "Loading roster...",
            },
            void 0,
            false,
            {
              fileName:
                "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
              lineNumber: 117,
              columnNumber: 7,
            },
            this,
          );
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: "bg-white rounded-xl shadow-sm border p-6 mb-6",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "flex justify-between items-start",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "h1",
                                {
                                  className: "text-2xl font-bold text-gray-900",
                                  children: "Route 7 - Green Park",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                  lineNumber: 125,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  className:
                                    "text-gray-500 flex items-center gap-2 mt-1",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__[
                                        "MapPin"
                                      ],
                                      {
                                        size: 16,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    " Bus KA-01-AB-1234 • Morning Trip",
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                  lineNumber: 128,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "flex flex-col items-end gap-2",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className:
                                    "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__[
                                        "Navigation"
                                      ],
                                      {
                                        size: 16,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                    " On Route",
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                  lineNumber: 133,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "span",
                                {
                                  className:
                                    "text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",
                                  children: ["📡 ", gpsStatus],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                  lineNumber: 136,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                            lineNumber: 132,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                      lineNumber: 123,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName:
                    "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                  lineNumber: 122,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "bg-white rounded-xl shadow-sm border overflow-hidden",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className:
                          "p-4 border-b bg-gray-50 flex justify-between items-center",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "h2",
                            {
                              className: "font-bold text-gray-800",
                              children: "Boarding Checklist",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                              lineNumber: 145,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "span",
                            {
                              className: "text-sm font-medium text-gray-500",
                              children: [
                                boardedStudents.length,
                                " / ",
                                students.length,
                                " Boarded",
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                              lineNumber: 146,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "ul",
                      {
                        className: "divide-y divide-gray-100",
                        children: students.map((student) => {
                          const isBoarded = boardedStudents.includes(
                            student.id,
                          );
                          return /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "li",
                            {
                              onClick: () => toggleBoarding(student.id),
                              className: `p-4 flex items-center gap-4 cursor-pointer transition-colors ${isBoarded ? "bg-green-50" : "hover:bg-gray-50"} ${isLoading === student.id ? "opacity-50 pointer-events-none" : ""}`,
                              children: [
                                isBoarded
                                  ? /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__[
                                        "CheckCircle2"
                                      ],
                                      {
                                        className: "text-green-600",
                                        size: 28,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19,
                                      },
                                      this,
                                    )
                                  : /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__[
                                        "Circle"
                                      ],
                                      {
                                        className: "text-gray-300",
                                        size: 28,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 19,
                                      },
                                      this,
                                    ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className: "flex-1",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "p",
                                        {
                                          className: `font-semibold ${isBoarded ? "text-green-900" : "text-gray-900"}`,
                                          children: student.name,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                          lineNumber: 169,
                                          columnNumber: 19,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "p",
                                        {
                                          className: "text-sm text-gray-500",
                                          children: [
                                            "Grade ",
                                            student.grade,
                                            "-",
                                            student.section,
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                          lineNumber: 174,
                                          columnNumber: 19,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "button",
                                  {
                                    className: `px-4 py-2 rounded-lg text-sm font-bold ${isBoarded ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600"}`,
                                    children: isBoarded
                                      ? "Boarded"
                                      : "Mark Boarded",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 17,
                                  },
                                  this,
                                ),
                              ],
                            },
                            student.id,
                            true,
                            {
                              fileName:
                                "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                              lineNumber: 155,
                              columnNumber: 15,
                            },
                            this,
                          );
                        }),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
                  lineNumber: 143,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/apps/web/src/app/conductor/dashboard/page.tsx",
            lineNumber: 121,
            columnNumber: 5,
          },
          this,
        );
      }
      _s(ConductorDashboard, "B8QzfzMPMjM2vqgmxPeCJi4bB10=");
      _c = ConductorDashboard;
      var _c;
      __turbopack_context__.k.register(_c, "ConductorDashboard");
      if (
        typeof globalThis.$RefreshHelpers$ === "object" &&
        globalThis.$RefreshHelpers !== null
      ) {
        __turbopack_context__.k.registerExports(
          __turbopack_context__.m,
          globalThis.$RefreshHelpers$,
        );
      }
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "__iconData",
        () => __iconData,
        "default",
        () => CircleCheck,
      ]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)",
        );
      const __iconData = {
        name: "circle-check",
        size: 24,
        node: [
          [
            "circle",
            {
              cx: "12",
              cy: "12",
              r: "10",
              key: "1mglay",
            },
          ],
          [
            "path",
            {
              d: "m16 9-5.5 5.5L8 12",
              key: "xofnsj",
            },
          ],
        ],
        aliases: ["check-circle-2"],
      };
      __iconData.node;
      const CircleCheck = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ])(__iconData);
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "CheckCircle2",
        () =>
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ],
      ]);
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript)",
        );
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/circle.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "__iconData",
        () => __iconData,
        "default",
        () => Circle,
      ]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)",
        );
      const __iconData = {
        name: "circle",
        size: 24,
        node: [
          [
            "circle",
            {
              cx: "12",
              cy: "12",
              r: "10",
              key: "1mglay",
            },
          ],
        ],
      };
      __iconData.node;
      const Circle = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ])(__iconData);
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/circle.mjs [app-client] (ecmascript) <export default as Circle>",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "Circle",
        () =>
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ],
      ]);
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/circle.mjs [app-client] (ecmascript)",
        );
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "__iconData",
        () => __iconData,
        "default",
        () => MapPin,
      ]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)",
        );
      const __iconData = {
        name: "map-pin",
        size: 24,
        node: [
          [
            "path",
            {
              d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
              key: "1r0f0z",
            },
          ],
          [
            "circle",
            {
              cx: "12",
              cy: "10",
              r: "3",
              key: "ilqhr7",
            },
          ],
        ],
      };
      __iconData.node;
      const MapPin = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ])(__iconData);
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "MapPin",
        () =>
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ],
      ]);
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript)",
        );
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "__iconData",
        () => __iconData,
        "default",
        () => Navigation,
      ]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)",
        );
      const __iconData = {
        name: "navigation",
        size: 24,
        node: [
          [
            "polygon",
            {
              points: "3 11 22 2 13 21 11 13 3 11",
              key: "1ltx0t",
            },
          ],
        ],
      };
      __iconData.node;
      const Navigation = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ])(__iconData);
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-client] (ecmascript) <export default as Navigation>",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "Navigation",
        () =>
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ],
      ]);
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-client] (ecmascript)",
        );
    },
  ]);
})();

//# sourceMappingURL=_1p6vcwlu80gi0._.js.map
