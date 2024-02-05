"use strict";
var e,
  n = require("vue");
"undefined" != typeof globalThis
  ? globalThis
  : "undefined" != typeof window
  ? window
  : "undefined" != typeof global
  ? global
  : "undefined" != typeof self && self;
!(function () {
  function e(e) {
    var n = !0,
      t = !1,
      o = null,
      a = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0,
      };
    function r(e) {
      return !!(
        e &&
        e !== document &&
        "HTML" !== e.nodeName &&
        "BODY" !== e.nodeName &&
        "classList" in e &&
        "contains" in e.classList
      );
    }
    function i(e) {
      var n = e.type,
        t = e.tagName;
      return (
        !("INPUT" !== t || !a[n] || e.readOnly) ||
        ("TEXTAREA" === t && !e.readOnly) ||
        !!e.isContentEditable
      );
    }
    function u(e) {
      e.classList.contains("focus-visible") ||
        (e.classList.add("focus-visible"),
        e.setAttribute("data-focus-visible-added", ""));
    }
    function l(e) {
      e.hasAttribute("data-focus-visible-added") &&
        (e.classList.remove("focus-visible"),
        e.removeAttribute("data-focus-visible-added"));
    }
    function c(t) {
      t.metaKey ||
        t.altKey ||
        t.ctrlKey ||
        (r(e.activeElement) && u(e.activeElement), (n = !0));
    }
    function s(e) {
      n = !1;
    }
    function d(e) {
      r(e.target) && (n || i(e.target)) && u(e.target);
    }
    function v(e) {
      r(e.target) &&
        (e.target.classList.contains("focus-visible") ||
          e.target.hasAttribute("data-focus-visible-added")) &&
        ((t = !0),
        window.clearTimeout(o),
        (o = window.setTimeout(function () {
          t = !1;
        }, 100)),
        l(e.target));
    }
    function m(e) {
      "hidden" === document.visibilityState && (t && (n = !0), f());
    }
    function f() {
      document.addEventListener("mousemove", p),
        document.addEventListener("mousedown", p),
        document.addEventListener("mouseup", p),
        document.addEventListener("pointermove", p),
        document.addEventListener("pointerdown", p),
        document.addEventListener("pointerup", p),
        document.addEventListener("touchmove", p),
        document.addEventListener("touchstart", p),
        document.addEventListener("touchend", p);
    }
    function h() {
      document.removeEventListener("mousemove", p),
        document.removeEventListener("mousedown", p),
        document.removeEventListener("mouseup", p),
        document.removeEventListener("pointermove", p),
        document.removeEventListener("pointerdown", p),
        document.removeEventListener("pointerup", p),
        document.removeEventListener("touchmove", p),
        document.removeEventListener("touchstart", p),
        document.removeEventListener("touchend", p);
    }
    function p(e) {
      (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
        ((n = !1), h());
    }
    document.addEventListener("keydown", c, !0),
      document.addEventListener("mousedown", s, !0),
      document.addEventListener("pointerdown", s, !0),
      document.addEventListener("touchstart", s, !0),
      document.addEventListener("visibilitychange", m, !0),
      f(),
      e.addEventListener("focus", d, !0),
      e.addEventListener("blur", v, !0),
      e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
        ? e.host.setAttribute("data-js-focus-visible", "")
        : e.nodeType === Node.DOCUMENT_NODE &&
          (document.documentElement.classList.add("js-focus-visible"),
          document.documentElement.setAttribute("data-js-focus-visible", ""));
  }
  if ("undefined" != typeof window && "undefined" != typeof document) {
    var n;
    window.applyFocusVisiblePolyfill = e;
    try {
      n = new CustomEvent("focus-visible-polyfill-ready");
    } catch (e) {
      (n = document.createEvent("CustomEvent")).initCustomEvent(
        "focus-visible-polyfill-ready",
        !1,
        !1,
        {}
      );
    }
    window.dispatchEvent(n);
  }
  "undefined" != typeof document && e(document);
})(),
  (function (e) {
    e.TOP = "TOP";
    e.LEFT = "LEFT";
    e.BOTTOM = "BOTTOM";
    e.RIGHT = "RIGHT";
    e.NOT_AVAILABLE = "NOT_AVAILABLE";
  })(e || (e = {}));
var t = e;
var o = function (e, n) {
    var o = window.innerHeight,
      a = window.innerWidth,
      r = 0,
      i = 0,
      u = n.x,
      l = n.y,
      c = { dragActive: !1, dockPosition: t.NOT_AVAILABLE };
    if (e instanceof DragEvent)
      (r = Math.round((u / a) * 100)), (i = Math.round((l / o) * 100));
    else if (e instanceof TouchEvent) {
      var s = e.changedTouches[0];
      if (Boolean(s)) {
        var d = s.clientX,
          v = s.clientY;
        (r = Math.round((d / a) * 100)), (i = Math.round((v / o) * 100));
      }
    }
    return (
      r < 10 && (c.dockPosition = t.LEFT),
      r > 90 && (c.dockPosition = t.RIGHT),
      i > 90 && (c.dockPosition = t.BOTTOM),
      i < 10 && (c.dockPosition = t.TOP),
      c.dockPosition !== t.NOT_AVAILABLE ? c : null
    );
  },
  a = function (e) {
    if (e instanceof DragEvent) {
      var n = new Image();
      !(function (e) {
        for (var n = void 0, t = e[0], o = 1; o < e.length; ) {
          var a = e[o],
            r = e[o + 1];
          if (
            ((o += 2),
            ("optionalAccess" === a || "optionalCall" === a) && null == t)
          )
            return;
          "access" === a || "optionalAccess" === a
            ? ((n = t), (t = r(t)))
            : ("call" !== a && "optionalCall" !== a) ||
              ((t = r(function () {
                for (var e = [], o = arguments.length; o--; )
                  e[o] = arguments[o];
                return t.call.apply(t, [n].concat(e));
              })),
              (n = void 0));
        }
      })([
        e,
        "access",
        function (e) {
          return e.dataTransfer;
        },
        "optionalAccess",
        function (e) {
          return e.setDragImage;
        },
        "call",
        function (e) {
          return e(n, 0, 0);
        },
      ]);
    }
  };
function r(e) {
  for (var n = void 0, t = e[0], o = 1; o < e.length; ) {
    var a = e[o],
      r = e[o + 1];
    if (
      ((o += 2), ("optionalAccess" === a || "optionalCall" === a) && null == t)
    )
      return;
    "access" === a || "optionalAccess" === a
      ? ((n = t), (t = r(t)))
      : ("call" !== a && "optionalCall" !== a) ||
        ((t = r(function () {
          for (var e = [], o = arguments.length; o--; ) e[o] = arguments[o];
          return t.call.apply(t, [n].concat(e));
        })),
        (n = void 0));
  }
  return t;
}
var i = function () {
    return !!/Android|webO[S\u017F]|iPhone|iPad|iPod|Blac[k\u212A]Berry/i.test(
      navigator.userAgent
    );
  },
  u = n.defineComponent({ name: "ChevRightIcon" }),
  l = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "feather feather-chevron-right",
  },
  c = [
    n.createElementVNode("polyline", { points: "9 18 15 12 9 6" }, null, -1),
  ];
function s(e) {
  for (var n = void 0, t = e[0], o = 1; o < e.length; ) {
    var a = e[o],
      r = e[o + 1];
    if (
      ((o += 2), ("optionalAccess" === a || "optionalCall" === a) && null == t)
    )
      return;
    "access" === a || "optionalAccess" === a
      ? ((n = t), (t = r(t)))
      : ("call" !== a && "optionalCall" !== a) ||
        ((t = r(function () {
          for (var e = [], o = arguments.length; o--; ) e[o] = arguments[o];
          return t.call.apply(t, [n].concat(e));
        })),
        (n = void 0));
  }
  return t;
}
(u.render = function (e, t, o, a, r, i) {
  return n.openBlock(), n.createElementBlock("svg", l, c);
}),
  (u.__file = "src/components/ChevRight.vue");
var d = n.defineComponent({
    name: "DockMenu",
    components: { ChevRight: u },
    props: {
      items: { type: Array, default: [], required: !0 },
      dock: { required: !1, default: t.TOP, type: String },
      parent: { required: !1, default: "", type: String },
      theme: { required: !0, type: Object },
      isMobile: { type: Boolean, default: !1 },
      nested: { type: Boolean, default: !1 },
      onSelected: { required: !0, type: Function },
      initialHighlightIndex: { required: !1, type: Number, default: -1 },
    },
    emits: ["selected", "close-menu"],
    setup: function (e, t) {
      var o = t.emit,
        a = n.resolveComponent("DockMenu"),
        r = n.ref(),
        i = n.ref(),
        u = n.computed(function () {
          return e.dock.toLowerCase();
        }),
        l = function (e, n) {
          e &&
            (r.value ? (i.value = null) : (i.value = n), (r.value = !r.value));
        },
        c = n.ref(),
        d = n.ref(),
        v = n.ref(e.initialHighlightIndex),
        m = n.ref(-1),
        f = n.computed(function () {
          return {
            "--background-color-hover": e.theme.tertiary,
            "--fore-color": e.theme.textColor,
            "--text-hover-color": e.theme.textHoverColor,
          };
        }),
        h = n.ref(
          e.items.map(function (e) {
            return Object.assign({}, e, {
              id: Math.random().toString(16).slice(2),
              showSubMenu: !1,
            });
          })
        ),
        p = n.computed(function () {
          return h.value.length;
        });
      n.onMounted(function () {
        n.nextTick(function () {
          d.value.focus();
        });
      });
      var g = function () {
        var e = d.value.closest(".menu-bar-item-container");
        e && e.focus();
      };
      return {
        MenuComponent: a,
        activeMenuId: i,
        dockClass: u,
        handleCloseMenu: function () {
          (r.value = !1),
            n.nextTick(function () {
              d.value.focus();
            });
        },
        handleKeyDown: function (e) {
          if (c.value) {
            e.stopPropagation();
            var n = v.value + 1;
            (n = s([
              h,
              "access",
              function (e) {
                return e.value;
              },
              "access",
              function (e) {
                return e[n];
              },
              "optionalAccess",
              function (e) {
                return e.isDivider;
              },
            ])
              ? n + 1
              : n) >= 0 && n < p.value
              ? (v.value = n)
              : n > p.value - 1 && (v.value = 0);
          }
        },
        handleKeyLeft: function (n) {
          c.value && (e.nested ? (n.stopPropagation(), o("close-menu")) : g());
        },
        handleKeyRight: function (e) {
          if (c.value) {
            var n = h.value[v.value];
            n && n.menu
              ? (e.stopPropagation(), (m.value = 0), l(!!n.menu, n.id))
              : g();
          }
        },
        handleKeySelection: function (t) {
          if (v.value >= 0) {
            var o = h.value[v.value];
            t.stopPropagation(),
              s([
                o,
                "optionalAccess",
                function (e) {
                  return e.menu;
                },
              ])
                ? ((m.value = 0),
                  l(!!o.menu, o.id),
                  n.nextTick(function () {
                    d.value.focus();
                  }))
                : o &&
                  e.onSelected({
                    name: o.name,
                    path: (e.parent + ">" + o.name).toLowerCase(),
                  });
          }
        },
        handleKeyUp: function (e) {
          if (c.value) {
            e.stopPropagation();
            var n = v.value - 1;
            (n = s([
              h,
              "access",
              function (e) {
                return e.value;
              },
              "access",
              function (e) {
                return e[n];
              },
              "optionalAccess",
              function (e) {
                return e.isDivider;
              },
            ])
              ? n - 1
              : n) >= 0
              ? (v.value = n)
              : n < 0 && (v.value = p.value - 1);
          }
        },
        handleSelection: function (n) {
          if ((n.event.stopPropagation(), n.event.preventDefault(), !n.disable))
            if (n.isParent) r.value = !r.value;
            else {
              var t = n.path,
                o = n.name;
              e.onSelected({
                name: o,
                path: (e.parent + ">" + (t || o)).toLowerCase(),
              });
            }
        },
        highlightedIndex: v,
        menuItemStyle: f,
        menuItems: h,
        menuItemsRef: d,
        onBlur: function () {
          return (c.value = !1);
        },
        onFocus: function () {
          return (c.value = !0);
        },
        showSubMenu: r,
        subMenuHighlightIndex: m,
        toggleSubMenu: l,
      };
    },
  }),
  v = ["onMouseenter", "onMouseleave", "onClick", "onTouchend"],
  m = { key: 0, class: "menu-item-icon" },
  f = { class: "name" },
  h = { key: 1, class: "menu-item-divider" };
(d.render = function (e, t, o, a, r, i) {
  var u = n.resolveComponent("ChevRight");
  return (
    n.openBlock(),
    n.createElementBlock(
      "div",
      {
        class: n.normalizeClass([e.dockClass, "menu-wrapper"]),
        style: n.normalizeStyle({ background: e.theme.secondary }),
      },
      [
        n.createElementVNode(
          "ul",
          {
            ref: "menuItemsRef",
            class: "menu-items",
            tabindex: "0",
            onKeyup: [
              t[0] ||
                (t[0] = n.withKeys(
                  function () {
                    for (var n = [], t = arguments.length; t--; )
                      n[t] = arguments[t];
                    return e.handleKeyUp && e.handleKeyUp.apply(e, n);
                  },
                  ["up"]
                )),
              t[1] ||
                (t[1] = n.withKeys(
                  function () {
                    for (var n = [], t = arguments.length; t--; )
                      n[t] = arguments[t];
                    return e.handleKeyDown && e.handleKeyDown.apply(e, n);
                  },
                  ["down"]
                )),
              t[2] ||
                (t[2] = n.withKeys(
                  function (n) {
                    return "RIGHT" === e.dock
                      ? e.handleKeyRight(n)
                      : e.handleKeyLeft(n);
                  },
                  ["left"]
                )),
              t[3] ||
                (t[3] = n.withKeys(
                  function (n) {
                    return "RIGHT" === e.dock
                      ? e.handleKeyLeft(n)
                      : e.handleKeyRight(n);
                  },
                  ["right"]
                )),
              t[6] ||
                (t[6] = n.withKeys(
                  function () {
                    for (var n = [], t = arguments.length; t--; )
                      n[t] = arguments[t];
                    return (
                      e.handleKeySelection && e.handleKeySelection.apply(e, n)
                    );
                  },
                  ["enter"]
                )),
            ],
            onFocus:
              t[4] ||
              (t[4] = function () {
                for (var n = [], t = arguments.length; t--; )
                  n[t] = arguments[t];
                return e.onFocus && e.onFocus.apply(e, n);
              }),
            onBlur:
              t[5] ||
              (t[5] = function () {
                for (var n = [], t = arguments.length; t--; )
                  n[t] = arguments[t];
                return e.onBlur && e.onBlur.apply(e, n);
              }),
          },
          [
            (n.openBlock(!0),
            n.createElementBlock(
              n.Fragment,
              null,
              n.renderList(e.menuItems, function (t, o) {
                return (
                  n.openBlock(),
                  n.createElementBlock(
                    "li",
                    {
                      key: t.id,
                      class: n.normalizeClass([
                        e.dockClass,
                        "menu-item",
                        {
                          "is-parent": !!t.menu,
                          highlight: o === e.highlightedIndex,
                          divider: t.isDivider,
                          disable: t.disable,
                        },
                      ]),
                      style: n.normalizeStyle(e.menuItemStyle),
                      onMouseenter: function (n) {
                        return (
                          t.menu &&
                          !e.isMobile &&
                          e.toggleSubMenu(!!t.menu, t.id)
                        );
                      },
                      onMouseleave: function (n) {
                        return (
                          t.menu &&
                          !e.isMobile &&
                          e.toggleSubMenu(!!t.menu, t.id)
                        );
                      },
                      onClick: function (n) {
                        return e.handleSelection({
                          event: n,
                          name: t.name,
                          isParent: !!t.menu,
                          disable: t.disable,
                        });
                      },
                      onTouchend: function (n) {
                        return e.handleSelection({
                          event: n,
                          name: t.name,
                          isParent: !!t.menu,
                          disable: t.disable,
                        });
                      },
                    },
                    [
                      t.isDivider
                        ? (n.openBlock(), n.createElementBlock("span", h))
                        : (n.openBlock(),
                          n.createElementBlock(
                            n.Fragment,
                            { key: 0 },
                            [
                              t.iconSlot
                                ? (n.openBlock(),
                                  n.createElementBlock("span", m, [
                                    n.renderSlot(e.$slots, t.iconSlot),
                                  ]))
                                : n.createCommentVNode("v-if", !0),
                              n.createElementVNode(
                                "span",
                                f,
                                n.toDisplayString(t.name),
                                1
                              ),
                              n.createElementVNode(
                                "span",
                                {
                                  class: n.normalizeClass([
                                    { visible: !!t.menu },
                                    "icon-wrap",
                                  ]),
                                },
                                [n.createVNode(u)],
                                2
                              ),
                              t.menu && e.showSubMenu && t.id === e.activeMenuId
                                ? (n.openBlock(),
                                  n.createElementBlock(
                                    "div",
                                    {
                                      key: 1,
                                      class: n.normalizeClass([
                                        e.dockClass,
                                        "sub-menu-wrapper",
                                      ]),
                                    },
                                    [
                                      (n.openBlock(),
                                      n.createBlock(
                                        n.resolveDynamicComponent(
                                          e.MenuComponent
                                        ),
                                        {
                                          items: t.menu,
                                          dock: e.dock,
                                          parent: e.parent + ">" + t.name,
                                          theme: e.theme,
                                          "is-touch": e.isMobile,
                                          nested: !0,
                                          "on-selected": e.onSelected,
                                          "initial-highlight-index":
                                            e.subMenuHighlightIndex,
                                          onCloseMenu: e.handleCloseMenu,
                                        },
                                        n.createSlots({ _: 2 }, [
                                          n.renderList(
                                            Object.keys(e.$slots),
                                            function (t) {
                                              return {
                                                name: t,
                                                fn: n.withCtx(function (o) {
                                                  return [
                                                    n.renderSlot(
                                                      e.$slots,
                                                      t,
                                                      n.normalizeProps(
                                                        n.guardReactiveProps(o)
                                                      )
                                                    ),
                                                  ];
                                                }),
                                              };
                                            }
                                          ),
                                        ]),
                                        1064,
                                        [
                                          "items",
                                          "dock",
                                          "parent",
                                          "theme",
                                          "is-touch",
                                          "on-selected",
                                          "initial-highlight-index",
                                          "onCloseMenu",
                                        ]
                                      )),
                                    ],
                                    2
                                  ))
                                : n.createCommentVNode("v-if", !0),
                            ],
                            64
                          )),
                    ],
                    46,
                    v
                  )
                );
              }),
              128
            )),
          ],
          544
        ),
      ],
      6
    )
  );
}),
  (d.__scopeId = "data-v-9bcc0be2"),
  (d.__file = "src/components/Menu.vue");
var p = n.defineComponent({
    name: "MenuBarItem",
    components: { DockMenu: d },
    props: {
      showIcon: { type: Boolean, default: !1 },
      name: { type: String, default: "", required: !0 },
      icon: { type: String, required: !0 },
      menu: { type: Array, required: !0 },
      menuActive: { type: Boolean, default: !1, required: !0 },
      menuBarActive: { type: Boolean, default: !1, required: !0 },
      showMenu: { type: Boolean, default: !1, required: !0 },
      menuBarDimensions: {
        type: Object,
        default: function () {},
        required: !0,
      },
      dock: { required: !0, default: t.TOP, type: String },
      id: { required: !0, type: String },
      theme: { required: !0, type: Object },
      isMobileDevice: { type: Boolean, default: !1 },
      activeMenuSelectionIndex: { type: Number, default: -1 },
      onSelected: { required: !0, type: Function },
      highlightFirstElement: { type: Boolean, required: !1, default: !1 },
    },
    emits: [
      "show",
      "deactivate",
      "activate",
      "selected",
      "activate-next",
      "activate-previous",
      "highlight-menu-item",
      "select-highlighted-menu-item",
    ],
    setup: function (e, o) {
      var a = o.emit,
        r = n.ref(),
        u = n.ref(!1),
        l = n.ref(),
        c = n.ref(i()),
        s = n.ref(!1),
        d = function (n) {
          a(n ? "activate" : "deactivate", e.id);
        },
        v = function (n) {
          n.stopPropagation(), (s.value = !s.value), a("show", s.value, e.id);
        },
        m = n.ref(-1),
        f = function () {
          var n = {},
            o = r.value,
            a = o.clientHeight,
            i = o.clientWidth;
          e.dock === t.LEFT
            ? ((n.top = "0px"), (n.left = i + "px"))
            : e.dock === t.RIGHT
            ? ((n.top = "0px"), (n.right = i + "px"))
            : e.dock === t.TOP
            ? ((n.top = a + "px"), (n.left = "0px"))
            : e.dock === t.BOTTOM && ((n.bottom = a + "px"), (n.left = "0px")),
            (l.value = n);
        },
        h = n.computed(function () {
          return [
            e.dock.toLowerCase(),
            u.value ? "active" : "",
            e.menuBarActive ? "expanded" : "",
          ];
        });
      n.watch(
        function () {
          return e.showMenu;
        },
        function (e) {
          (u.value = e),
            e &&
              ((s.value = !1),
              n.nextTick(function () {
                return (function (e) {
                  for (var n = void 0, t = e[0], o = 1; o < e.length; ) {
                    var a = e[o],
                      r = e[o + 1];
                    if (
                      ((o += 2),
                      ("optionalAccess" === a || "optionalCall" === a) &&
                        null == t)
                    )
                      return;
                    "access" === a || "optionalAccess" === a
                      ? ((n = t), (t = r(t)))
                      : ("call" !== a && "optionalCall" !== a) ||
                        ((t = r(function () {
                          for (var e = [], o = arguments.length; o--; )
                            e[o] = arguments[o];
                          return t.call.apply(t, [n].concat(e));
                        })),
                        (n = void 0));
                  }
                  return t;
                })([
                  r,
                  "access",
                  function (e) {
                    return e.value;
                  },
                  "optionalAccess",
                  function (e) {
                    return e.focus;
                  },
                  "call",
                  function (e) {
                    return e();
                  },
                ]);
              }));
        }
      ),
        n.watch(
          function () {
            return [e.dock, e.menuBarActive];
          },
          function () {
            n.nextTick(function () {
              setTimeout(function () {
                f();
              }, 150);
            });
          }
        ),
        n.watch(
          function () {
            return e.highlightFirstElement;
          },
          function (e) {
            m.value = e ? 0 : -1;
          }
        ),
        n.onMounted(function () {
          f();
          var e = n.unref(r),
            t = n.unref(c);
          e &&
            (t
              ? e.addEventListener("touchend", function (e) {
                  d(!1),
                    n.nextTick(function () {
                      v(e);
                    });
                })
              : e.addEventListener("click", v));
        }),
        n.onUnmounted(function () {
          var e = n.unref(r),
            t = n.unref(c);
          e &&
            (t
              ? e.removeEventListener("touchstart", v)
              : e.removeEventListener("mousedown", v));
        });
      var p = n.computed(function () {
          return u.value ? e.theme.secondary : "transparent";
        }),
        g = n.computed(function () {
          return "TOP" === e.dock || "BOTTOM" === e.dock
            ? "horizontal"
            : "vertical";
        });
      return {
        menuBarItemRef: r,
        menuBarStyle: h,
        menuStyle: l,
        setMenuViewable: d,
        toggleMenu: v,
        handleMenuSelection: function (n) {
          return e.onSelected(n);
        },
        computeMenuStyle: f,
        bgColor: p,
        handleKeyUp: function (t) {
          var o = t.key,
            r = n.unref(g);
          "Tab" === o
            ? a("activate", e.id)
            : "Enter" === o
            ? e.activeMenuSelectionIndex < 0
              ? a("show", !e.menuActive, e.id)
              : a("select-highlighted-menu-item")
            : "Escape" === o
            ? a("show", !1)
            : ("ArrowRight" === o && "horizontal" === r) ||
              ("ArrowDown" === o && "vertical" === r)
            ? a("activate-next", e.id, "next")
            : ("ArrowLeft" === o && "horizontal" === r) ||
              ("ArrowUp" === o && "vertical" === r)
            ? a("activate-previous", e.id, "prev")
            : "ArrowDown" === o && "horizontal" === r
            ? a("highlight-menu-item", "down", e.id)
            : "ArrowUp" === o &&
              "horizontal" === r &&
              a("highlight-menu-item", "up", e.id);
        },
        highlightIndex: m,
      };
    },
  }),
  g = { key: 0 },
  y = { key: 1 };
function b(e) {
  for (var n = void 0, t = e[0], o = 1; o < e.length; ) {
    var a = e[o],
      r = e[o + 1];
    if (
      ((o += 2), ("optionalAccess" === a || "optionalCall" === a) && null == t)
    )
      return;
    "access" === a || "optionalAccess" === a
      ? ((n = t), (t = r(t)))
      : ("call" !== a && "optionalCall" !== a) ||
        ((t = r(function () {
          for (var e = [], o = arguments.length; o--; ) e[o] = arguments[o];
          return t.call.apply(t, [n].concat(e));
        })),
        (n = void 0));
  }
  return t;
}
(p.render = function (e, t, o, a, r, i) {
  var u = n.resolveComponent("DockMenu");
  return (
    n.openBlock(),
    n.createElementBlock(
      "div",
      {
        ref: "menuBarItemRef",
        class: n.normalizeClass(
          e.menuBarStyle.concat(["menu-bar-item-container"])
        ),
        style: n.normalizeStyle({ background: e.bgColor }),
        tabindex: "0",
        onMouseenter:
          t[0] ||
          (t[0] = function (n) {
            return e.setMenuViewable(!0);
          }),
        onMouseleave:
          t[1] ||
          (t[1] = function (n) {
            return e.setMenuViewable(!1);
          }),
        onKeyup:
          t[2] ||
          (t[2] = function () {
            for (var n = [], t = arguments.length; t--; ) n[t] = arguments[t];
            return e.handleKeyUp && e.handleKeyUp.apply(e, n);
          }),
      },
      [
        n.createElementVNode(
          "span",
          {
            class: n.normalizeClass(e.menuBarStyle.concat(["name-container"])),
            style: n.normalizeStyle({ color: e.theme.textColor }),
          },
          [
            e.showIcon
              ? (n.openBlock(),
                n.createElementBlock("span", y, [
                  n.createElementVNode(
                    "i",
                    { class: n.normalizeClass(e.icon) },
                    null,
                    2
                  ),
                ]))
              : (n.openBlock(),
                n.createElementBlock("span", g, n.toDisplayString(e.name), 1)),
          ],
          6
        ),
        n.createElementVNode(
          "span",
          { class: "menu-container", style: n.normalizeStyle(e.menuStyle) },
          [
            n.createVNode(
              n.Transition,
              { name: "fade" },
              {
                default: n.withCtx(function () {
                  return [
                    e.menuActive && e.showMenu
                      ? (n.openBlock(),
                        n.createBlock(
                          u,
                          {
                            key: 0,
                            items: e.menu,
                            dock: e.dock,
                            parent: e.name,
                            theme: e.theme,
                            "is-touch": e.isMobileDevice,
                            "on-selected": e.onSelected,
                            "initial-highlight-index": e.highlightIndex,
                          },
                          n.createSlots({ _: 2 }, [
                            n.renderList(Object.keys(e.$slots), function (t) {
                              return {
                                name: t,
                                fn: n.withCtx(function (o) {
                                  return [
                                    n.renderSlot(
                                      e.$slots,
                                      t,
                                      n.normalizeProps(n.guardReactiveProps(o))
                                    ),
                                  ];
                                }),
                              };
                            }),
                          ]),
                          1032,
                          [
                            "items",
                            "dock",
                            "parent",
                            "theme",
                            "is-touch",
                            "on-selected",
                            "initial-highlight-index",
                          ]
                        ))
                      : n.createCommentVNode("v-if", !0),
                  ];
                }),
                _: 3,
              }
            ),
          ],
          4
        ),
      ],
      38
    )
  );
}),
  (p.__scopeId = "data-v-d6123432"),
  (p.__file = "src/components/MenuBarItem.vue");
var k = document.removeEventListener,
  w = document.addEventListener,
  E = n.defineComponent({
    name: "MenuBar",
    components: { MenuBarItem: p },
    props: {
      showIcon: { type: Boolean, default: !1 },
      items: { required: !0, default: [], type: Array },
      dock: { required: !1, default: t.TOP, type: String },
      onSelected: { required: !0, type: Function },
      draggable: { required: !1, type: Boolean, default: !0 },
      sidebarWidth: { required: !1, type: String, default: "200px" },
      theme: {
        required: !1,
        type: Object,
        default: function () {
          return {
            primary: "#21252b",
            secondary: "#32323e",
            tertiary: "#4c4c57",
            textColor: "#fff",
          };
        },
      },
    },
    setup: function (e) {
      var u = n.ref(),
        l = n.ref(!1),
        c = n.ref(!1),
        s = n.ref(!1),
        d = n.ref(!1),
        v = n.ref(e.dock),
        m = n.computed(function () {
          return [v.value.toLowerCase()];
        }),
        f = n.ref(0),
        h = n.ref(0),
        p = n.ref(),
        g = n.ref(),
        y = n.ref(
          e.items.map(function (e) {
            return Object.assign({}, e, {
              id: Math.random().toString(16).slice(2),
            });
          })
        ),
        E = n.ref(-1),
        M = n.ref(""),
        C = n.ref({ x: 0, y: 0 }),
        B = function () {
          d.value = !0;
        },
        A = function () {
          p.value || s.value || (d.value = !1);
        },
        S = function () {
          (n.unref(s) || n.unref(d)) &&
            ((d.value = !1),
            (s.value = !1),
            (E.value = -1),
            (M.value = ""),
            (g.value = !1),
            T());
        },
        L = function (e) {
          return (C.value = { x: e.clientX, y: e.clientY });
        };
      n.onMounted(function () {
        var e = u.value;
        (f.value = b([
          e,
          "optionalAccess",
          function (e) {
            return e.clientHeight;
          },
        ])),
          (h.value = b([
            e,
            "optionalAccess",
            function (e) {
              return e.clientWidth;
            },
          ])),
          (p.value = i());
        var t = n.unref(u);
        p.value
          ? w("touchend", S)
          : (w("click", S),
            t &&
              (t.addEventListener("mouseenter", B),
              t.addEventListener("mouseleave", A))),
          w("dragover", L);
      }),
        n.onUnmounted(function () {
          k("dragover", L);
          var e = n.unref(u);
          p.value
            ? k("touchend", S)
            : (k("click", S),
              e &&
                (e.removeEventListener("mouseenter", B),
                e.removeEventListener("mouseleave", A))),
            k("dragover", L);
        });
      var x = function (e) {
          y.value = y.value.map(function (n) {
            return Object.assign({}, n, { showMenu: n.id === e });
          });
        },
        T = function () {
          s.value ||
            (y.value = y.value.map(function (e) {
              return Object.assign({}, e, { showMenu: !1 });
            }));
        },
        D = n.computed(function () {
          return v.value === t.LEFT || v.value === t.RIGHT
            ? d.value
              ? "expanded"
              : "not-expanded"
            : "";
        }),
        I = n.computed(function () {
          return {
            "--menubar-expanded-width": e.sidebarWidth,
            "--menubar-not-expanded-width": "50px",
            "--menubar-bg-color": e.theme.primary,
          };
        });
      return {
        activeMenuBarId: M,
        activeMenuSelection: E,
        barHeight: f,
        barWidth: h,
        dockClass: m,
        dockPosition: v,
        expandClass: D,
        handleActivateDir: function (e, t) {
          var o = (function (e, n, t, o, a) {
            var i = t.findIndex(function (n) {
                return n.id === e;
              }),
              u = "next" === n ? i + 1 : i - 1,
              l = t.length,
              c = "";
            u > -1 && u < l
              ? (c = t[u].id)
              : u > l - 1
              ? (c = t[0].id)
              : u < 0 && (c = t[l - 1].id);
            var s = t.find(function (n) {
                return n.id === e;
              }),
              d = r([
                s,
                "optionalAccess",
                function (e) {
                  return e.menu;
                },
              ])
                ? s.menu[o]
                : null;
            return r([
              d,
              "optionalAccess",
              function (e) {
                return e.menu;
              },
            ]) && "next" === n
              ? {
                  navigateMenu: {
                    items: t.map(function (e) {
                      return e.id === a
                        ? Object.assign({}, e, {
                            menu: r([
                              e,
                              "access",
                              function (e) {
                                return e.menu;
                              },
                              "optionalAccess",
                              function (e) {
                                return e.map;
                              },
                              "call",
                              function (e) {
                                return e(function (e) {
                                  return Object.assign({}, e, {
                                    showSubMenu:
                                      r([
                                        e,
                                        "access",
                                        function (e) {
                                          return e.name;
                                        },
                                        "optionalAccess",
                                        function (e) {
                                          return e.toLowerCase;
                                        },
                                        "call",
                                        function (e) {
                                          return e();
                                        },
                                      ]) ===
                                      r([
                                        d,
                                        "access",
                                        function (e) {
                                          return e.name;
                                        },
                                        "optionalAccess",
                                        function (e) {
                                          return e.toLowerCase;
                                        },
                                        "call",
                                        function (e) {
                                          return e();
                                        },
                                      ]),
                                  });
                                });
                              },
                            ]),
                          })
                        : e;
                    }),
                  },
                }
              : { navigateMenubar: { nextId: c } };
          })(e, t, n.unref(y), n.unref(E), n.unref(M));
          if ("navigateMenu" in o) y.value = o.navigateMenu.items;
          else if ("navigateMenubar" in o) {
            g.value = !0;
            var a = o.navigateMenubar.nextId;
            (M.value = a), a && x(a);
          }
          E.value = -1;
        },
        handleActivateMenu: x,
        handleDeactivateMenu: T,
        handleDrag: function (e) {
          C.value = { x: e.clientX, y: e.clientY };
        },
        handleDragCancel: function (e) {
          e.preventDefault(), e.stopPropagation();
        },
        handleDragEnd: function (e) {
          if (n.unref(l)) {
            var t = o(e, n.unref(C));
            if (t) {
              var a = t.dragActive,
                r = t.dockPosition;
              (c.value = a), (v.value = r);
            }
            (l.value = !1), (c.value = !1);
          }
        },
        handleDragMove: function () {
          l.value && ((c.value = !0), (s.value = !1));
        },
        handleDragStart: function (e) {
          (l.value = !0), (c.value = !1), a(e);
        },
        handleMouseEnter: B,
        handleMouseLeave: A,
        handleOnShowMenu: function (e, n) {
          (s.value = e), e ? (M.value = n) : ((M.value = ""), (g.value = !1));
        },
        handleSelected: function (n) {
          S(), e.onSelected(n);
        },
        highlightFirstElement: g,
        isMobileDevice: p,
        menuActive: s,
        menuBarActive: d,
        menuBarRef: u,
        menuBarStyle: I,
        menuItems: y,
      };
    },
  }),
  M = ["draggable", "showIcon"];
(E.render = function (e, t, o, a, r, i) {
  var u = n.resolveComponent("menu-bar-item");
  return (
    n.openBlock(),
    n.createElementBlock(
      "div",
      {
        ref: "menuBarRef",
        class: n.normalizeClass([
          e.dockClass,
          "menu-bar-container",
          e.expandClass,
        ]),
        draggable: e.draggable,
        tabindex: "0",
        style: n.normalizeStyle(e.menuBarStyle),
        showIcon: e.showIcon,
        onDragover:
          t[1] ||
          (t[1] = function () {
            for (var n = [], t = arguments.length; t--; ) n[t] = arguments[t];
            return e.handleDragMove && e.handleDragMove.apply(e, n);
          }),
        onDragstart:
          t[2] ||
          (t[2] = function () {
            for (var n = [], t = arguments.length; t--; ) n[t] = arguments[t];
            return e.handleDragStart && e.handleDragStart.apply(e, n);
          }),
        onDragend:
          t[3] ||
          (t[3] = function () {
            for (var n = [], t = arguments.length; t--; ) n[t] = arguments[t];
            return e.handleDragEnd && e.handleDragEnd.apply(e, n);
          }),
        onTouchstart:
          t[4] ||
          (t[4] = function () {
            for (var n = [], t = arguments.length; t--; ) n[t] = arguments[t];
            return e.handleDragStart && e.handleDragStart.apply(e, n);
          }),
        onTouchmove:
          t[5] ||
          (t[5] = function () {
            for (var n = [], t = arguments.length; t--; ) n[t] = arguments[t];
            return e.handleDragMove && e.handleDragMove.apply(e, n);
          }),
        onTouchend:
          t[6] ||
          (t[6] = function () {
            for (var n = [], t = arguments.length; t--; ) n[t] = arguments[t];
            return e.handleDragEnd && e.handleDragEnd.apply(e, n);
          }),
      },
      [
        n.createElementVNode("header", null, [
          n.renderSlot(e.$slots, "menuTitle"),
        ]),
        n.createElementVNode(
          "ul",
          {
            class: n.normalizeClass([e.dockClass, "menu-bar-items"]),
            draggable: "true",
            onDragstart:
              t[0] ||
              (t[0] = function () {
                for (var n = [], t = arguments.length; t--; )
                  n[t] = arguments[t];
                return e.handleDragCancel && e.handleDragCancel.apply(e, n);
              }),
          },
          [
            (n.openBlock(!0),
            n.createElementBlock(
              n.Fragment,
              null,
              n.renderList(e.menuItems, function (t) {
                return (
                  n.openBlock(),
                  n.createElementBlock(
                    "li",
                    {
                      key: t.id,
                      class: n.normalizeClass([
                        e.dockClass,
                        "v-dock-menu-bar-item-wrapper",
                      ]),
                    },
                    [
                      n.createVNode(
                        u,
                        {
                          id: t.id,
                          dock: e.dockPosition,
                          "menu-active": e.menuActive,
                          "menu-bar-dimensions": {
                            height: e.barHeight,
                            width: e.barWidth,
                          },
                          menu: t.menu,
                          name: t.name,
                          icon: t.icon,
                          "menu-bar-active": e.menuBarActive,
                          "show-menu": t.showMenu,
                          theme: e.theme,
                          "is-touch-device": e.isMobileDevice,
                          "on-selected": e.handleSelected,
                          "highlight-first-element": e.highlightFirstElement,
                          "show-icon": e.showIcon,
                          onDeactivate: e.handleDeactivateMenu,
                          onActivate: e.handleActivateMenu,
                          onActivateNext: e.handleActivateDir,
                          onActivatePrevious: e.handleActivateDir,
                          onShow: e.handleOnShowMenu,
                        },
                        n.createSlots({ _: 2 }, [
                          n.renderList(Object.keys(e.$slots), function (t) {
                            return {
                              name: t,
                              fn: n.withCtx(function (o) {
                                return [
                                  n.renderSlot(
                                    e.$slots,
                                    t,
                                    n.normalizeProps(n.guardReactiveProps(o))
                                  ),
                                ];
                              }),
                            };
                          }),
                        ]),
                        1032,
                        [
                          "id",
                          "dock",
                          "menu-active",
                          "menu-bar-dimensions",
                          "menu",
                          "name",
                          "icon",
                          "menu-bar-active",
                          "show-menu",
                          "theme",
                          "is-touch-device",
                          "on-selected",
                          "highlight-first-element",
                          "show-icon",
                          "onDeactivate",
                          "onActivate",
                          "onActivateNext",
                          "onActivatePrevious",
                          "onShow",
                        ]
                      ),
                    ],
                    2
                  )
                );
              }),
              128
            )),
          ],
          34
        ),
      ],
      46,
      M
    )
  );
}),
  (E.__scopeId = "data-v-4a501398"),
  (E.__file = "src/components/MenuBar.vue"),
  (exports.DockMenu = E);
