import { defineComponent as h, computed as c, ref as p, onMounted as y, openBlock as u, createElementBlock as _, normalizeClass as m, unref as d, createBlock as f } from "vue";
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
      const r = typeof e.width == "number" ? `${e.width}px` : e.width, i = typeof e.width == "number" ? `${e.height}px` : e.height, s = `${e.color}`;
      let a = o.value;
      a && (a.style.setProperty("width", "" + r), a.style.setProperty("height", "" + i), a.style.setProperty("background-color", "" + s));
    }), (r, i) => (u(), _("div", {
      ref_key: "loader",
      ref: o,
      class: m(["loader loader--circle", d(n)])
    }, null, 2));
  }
});
const g = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, r] of e)
    n[o] = r;
  return n;
}, b = /* @__PURE__ */ g(w, [["__scopeId", "data-v-c00fdf17"]]), S = /* @__PURE__ */ h({
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
      const r = typeof e.width == "number" ? `${e.width}px` : e.width, i = typeof e.width == "number" ? `${e.height}px` : e.height, s = `${e.color}`, a = e.rounded ? `${e.radius}px` : 0;
      let l = o.value;
      l && (l.style.setProperty("width", "" + r), l.style.setProperty("height", "" + i), l.style.setProperty("background-color", "" + s), l.style.setProperty("border-radius", "" + a));
    }), (r, i) => (u(), _("div", {
      ref_key: "loader",
      ref: o,
      class: m(["loader", d(n)])
    }, null, 2));
  }
});
const v = /* @__PURE__ */ g(S, [["__scopeId", "data-v-c5189e2d"]]), k = /* @__PURE__ */ h({
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
      let i = r.value;
      e.waveColor && i && i.style.setProperty("--gradient-color", e.waveColor);
    }), (i, s) => t.type === "circle" ? (u(), f(b, {
      key: 0,
      ref_key: "loader",
      ref: r,
      width: d(n),
      height: d(o),
      animation: t.animation,
      color: t.color
    }, null, 8, ["width", "height", "animation", "color"])) : (u(), f(v, {
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
const x = /* @__PURE__ */ g(k, [["__scopeId", "data-v-c0e53600"]]);
export {
  x as Vue3Skeleton
};
