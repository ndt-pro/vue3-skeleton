import { defineComponent as h, computed as c, ref as p, onMounted as y, openBlock as u, createElementBlock as _, normalizeClass as m, unref as d, createBlock as g } from "vue";
const w = /* @__PURE__ */ h({
  __name: "Circle",
  props: {
    height: {
      type: [Number, String],
      default: 100
    },
    width: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: "rgba(0, 0, 0, 0.08)"
    },
    animation: {
      type: String,
      default: "wave"
    }
  },
  setup(t) {
    const e = t, n = c(() => `animation--${e.animation}`), o = p();
    return y(() => {
      const r = typeof e.width == "number" ? `${e.width}px` : e.width, a = typeof e.width == "number" ? `${e.height}px` : e.height, s = `${e.color}`;
      let i = o.value;
      i && (i.style.setProperty("width", "" + r), i.style.setProperty("height", "" + a), i.style.setProperty("background-color", "" + s));
    }), (r, a) => (u(), _("div", {
      ref_key: "loader",
      ref: o,
      class: m(["loader loader--circle", d(n)])
    }, null, 2));
  }
});
const f = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, r] of e)
    n[o] = r;
  return n;
}, b = /* @__PURE__ */ f(w, [["__scopeId", "data-v-a25f014c"]]), S = /* @__PURE__ */ h({
  __name: "Square",
  props: {
    height: {
      type: [Number, String],
      default: 100
    },
    width: {
      type: [Number, String],
      default: 200
    },
    color: {
      type: String,
      default: "rgba(0, 0, 0, 0.08)"
    },
    animation: {
      type: String,
      default: "wave"
    },
    type: {
      type: String,
      default: "rect"
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    radius: {
      type: [Number, String],
      default: 0
    }
  },
  setup(t) {
    const e = t, n = c(
      () => `animation--${e.animation} shape--${e.type} shape--${e.rounded ? "round" : "flat"}`
    );
    c(() => ({
      width: typeof e.width == "number" ? `${e.width}px` : e.width,
      height: typeof e.width == "number" ? `${e.height}px` : e.height,
      "background-color": `${e.color}`,
      "border-radius": e.rounded ? `${e.radius}px` : 0
    }));
    const o = p();
    return y(() => {
      const r = typeof e.width == "number" ? `${e.width}px` : e.width, a = typeof e.width == "number" ? `${e.height}px` : e.height, s = `${e.color}`, i = e.rounded ? `${e.radius}px` : 0;
      let l = o.value;
      l && (l.style.setProperty("width", "" + r), l.style.setProperty("height", "" + a), l.style.setProperty("background-color", "" + s), l.style.setProperty("border-radius", "" + i));
    }), (r, a) => (u(), _("div", {
      ref_key: "loader",
      ref: o,
      class: m(["loader", d(n)])
    }, null, 2));
  }
});
const v = /* @__PURE__ */ f(S, [["__scopeId", "data-v-ae15a2bd"]]), k = /* @__PURE__ */ h({
  __name: "Vue3Skeleton",
  props: {
    type: {
      type: String,
      default: "rect"
    },
    size: {
      type: [Number, String]
    },
    animation: {
      type: String,
      default: "wave"
    },
    height: {
      type: [Number, String]
    },
    width: {
      type: [Number, String]
    },
    color: {
      type: String,
      default: "rgba(0, 0, 0, 0.08)"
    },
    waveColor: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    radius: {
      type: [Number, String],
      default: 8
    }
  },
  setup(t) {
    const e = t, n = c(() => e.size ? e.size : e.width), o = c(() => e.size ? e.size : e.height), r = p();
    return y(() => {
      let a = r.value;
      e.waveColor && a && a.style.setProperty("--gradient-color", e.waveColor);
    }), (a, s) => t.type === "circle" ? (u(), g(b, {
      key: 0,
      ref_key: "loader",
      ref: r,
      width: d(n),
      height: d(o),
      animation: t.animation,
      color: t.color
    }, null, 8, ["width", "height", "animation", "color"])) : (u(), g(v, {
      key: 1,
      ref_key: "loader",
      ref: r,
      width: d(n),
      height: d(o),
      animation: t.animation,
      type: t.type,
      color: t.color,
      rounded: t.rounded,
      radius: t.radius
    }, null, 8, ["width", "height", "animation", "type", "color", "rounded", "radius"]));
  }
});
const x = /* @__PURE__ */ f(k, [["__scopeId", "data-v-fece4f10"]]);
export {
  x as Vue3Skeleton
};
