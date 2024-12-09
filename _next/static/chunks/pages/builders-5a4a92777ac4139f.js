(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [533],
  {
    440: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/builders",
        function () {
          return s(7236);
        },
      ]);
    },
    7236: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return j;
          },
          default: function () {
            return b;
          },
        });
      var r = s(1527),
        i = s(2826),
        o = s(4875),
        n = s.n(o),
        l = s(3886),
        a = s(8823),
        c = s.n(a),
        d = s(1517),
        p = s(6690),
        m = s(3654),
        h = s(2966);
      let u = (e) => {
          let { type: t, className: s } = e,
            o = (0, l.useTranslations)("Builders"),
            n = {
              clientJs_v4: {
                href: i.BA.clientJs_v4,
                iconSrc: "/icons/devToolIcon.svg",
                title: o("clientJs_v4CardTitle"),
                author: "DropTogether Inc.",
                tags: ["dev", "v4"],
                description: o("clientJs_v4CardDescription"),
              },
              clientJs: {
                href: i.BA.clientJs,
                iconSrc: "/icons/devToolIcon.svg",
                title: o("clientJsCardTitle"),
                author: "G9 Software Inc.",
                tags: ["dev", "v5"],
                description: o("clientJsCardDescription"),
              },
              reactHooks: {
                href: i.BA.reactHooks,
                iconSrc: "/icons/devToolIcon.svg",
                title: o("reactHooksCardTitle"),
                author: "G9 Software Inc.",
                tags: ["dev", "v5"],
                description: o("reactHooksCardDescription"),
              },
              prizeTierController: {
                href: i.BA.prizeTierController,
                iconSrc: "/icons/devToolIcon.svg",
                title: o("prizeTierControllerCardTitle"),
                author: "DropTogether Inc.",
                tags: ["dev", "v4"],
                description: o("prizeTierControllerCardDescription"),
              },
              brandKit: {
                href: i.BA.brandKit,
                iconSrc: "/icons/devToolIcon.svg",
                title: o("brandKitCardTitle"),
                author: "DropTogether Inc.",
                tags: ["design"],
                description: o("brandKitCardDescription"),
              },
              DropTogetherUiKit: {
                href: i.BA.DropTogetherUiKit,
                iconSrc: "/icons/devToolIcon.svg",
                title: o("DropTogetherUiKitCardTitle"),
                author: "G9 Software Inc.",
                tags: ["design"],
                description: o("DropTogetherUiKitCardDescription"),
              },
              DropTogetherTokenBrandingGuidelines: {
                href: i.BA.DropTogetherTokenBrandingGuidelines,
                iconSrc: "/icons/devToolIcon.svg",
                title: o("DropTogetherTokenBrandingGuidelinesCardTitle"),
                author: "G9 Software Inc.",
                tags: ["design"],
                description: o(
                  "DropTogetherTokenBrandingGuidelinesCardDescription"
                ),
              },
              cabanaFactory: {
                href: "https://factory.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: o("cabanaFactoryCardTitle"),
                author: "G9 Software Inc.",
                tags: ["dev", "v5"],
                description: o("cabanaFactoryCardDescription"),
              },
              nextjsTemplate: {
                href: "https://github.com/GenerationSoftware/DropTogether-nextjs-template",
                iconSrc: "/icons/nextjsIcon.svg",
                title: o("nextjsTemplateCardTitle"),
                author: "G9 Software Inc.",
                tags: ["dev", "v5"],
                description: o("nextjsTemplateCardDescription"),
              },
              sveltekitTemplate: {
                href: "https://github.com/GenerationSoftware/DropTogether-sveltekit-template",
                iconSrc: "/icons/svelteIcon.svg",
                title: o("sveltekitTemplateCardTitle"),
                author: "G9 Software Inc.",
                tags: ["dev", "v5"],
                description: o("sveltekitTemplateCardDescription"),
              },
            },
            a = n[t];
          return (0, r.jsx)(h.e, { ...a, className: s });
        },
        x = (e) => {
          let { iconSrc: t, title: s, cards: i } = e;
          return (0, r.jsxs)("div", {
            className: "flex flex-col gap-4 items-center",
            children: [
              (0, r.jsxs)("div", {
                className: "flex gap-3 items-center text-pt-purple-50",
                children: [
                  (0, r.jsx)(c(), {
                    src: t,
                    width: 32,
                    height: 32,
                    alt: s,
                    className: "h-6 w-auto text-pt-purple-300 md:h-8",
                  }),
                  (0, r.jsx)("span", {
                    className: "text-sm md:text-xl",
                    children: s,
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "w-full flex flex-wrap gap-4 justify-center",
                children: i.map((e) =>
                  (0, r.jsx)(
                    u,
                    {
                      type: e,
                      className: "w-[45%] min-w-[21rem] max-w-xl md:w-[30%]",
                    },
                    "".concat(e, "-card")
                  )
                ),
              }),
            ],
          });
        },
        g = (e) => {
          let { className: t } = e,
            s = (0, l.useTranslations)("Builders");
          return (0, r.jsxs)(p.$, {
            bg: "buildersSection1.svg",
            smallBg: "mobileBuildersSection1.svg",
            className: n()("aspect-[375/667] md:aspect-[1600/2100]", t),
            children: [
              (0, r.jsx)(m.C, {
                title: s.rich("buildOnPt", d.e),
                description: s("joinUs"),
                className:
                  "absolute w-full mt-[28%] md:h-[10%] md:justify-end md:mt-0 lg:h-[13.7%]",
                titleClassName: "max-w-[1440px]",
                descriptionClassName: "max-w-[1440px] px-[5%] sm:px-0",
              }),
              (0, r.jsx)(f, {
                className:
                  "absolute w-full mt-[54%] md:max-w-[min(60%,_1440px)] md:h-[7.5%] md:mt-[23.5%] md:ml-[20%] lg:h-[9.5%] xl:h-[11%]",
              }),
              (0, r.jsx)(T, {
                className:
                  "w-full max-w-[1440px] mt-[95%] mb-8 mx-auto md:mt-[44%]",
              }),
            ],
          });
        },
        f = (e) => {
          let { className: t } = e;
          return (0, r.jsx)("div", {
            className: n()(
              "flex flex-col gap-3 items-center justify-center px-4 md:flex-row md:gap-8 md:px-0",
              t
            ),
            children: (0, r.jsx)(v, { href: i.BA.devDocs }),
          });
        },
        v = (e) => {
          let { href: t, className: s } = e,
            i = (0, l.useTranslations)("Builders");
          return (0, r.jsxs)("a", {
            href: t,
            target: "_blank",
            className: n()(
              "flex gap-2 items-center px-8 py-6 bg-pt-bg-purple-darker rounded-2xl",
              "outline outline-2 -outline-offset-2 outline-transparent hover:outline-pt-purple-100/20 hover:shadow-lg",
              "md:w-full md:max-w-lg md:gap-4 md:justify-center",
              "xl:px-16 xl:py-12",
              s
            ),
            children: [
              (0, r.jsx)(c(), {
                src: "/icons/docIcon.svg",
                width: 48,
                height: 48,
                alt: "Doc Icon",
                className: "h-[18px] w-auto md:h-9 lg:h-14 xl:h-[75px]",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex text-base text-pt-purple-50 md:flex-col lg:text-lg xl:text-xl",
                children: i.rich("devDocs", {
                  first: (e) =>
                    (0, r.jsx)("span", {
                      className: "mr-[.5ch] md:mr-0",
                      children: e,
                    }),
                  second: (e) => (0, r.jsx)("span", { children: e }),
                }),
              }),
            ],
          });
        },
        T = (e) => {
          let { className: t } = e,
            s = (0, l.useTranslations)("Builders");
          return (0, r.jsxs)("div", {
            className: n()("flex flex-col gap-16", t),
            children: [
              (0, r.jsx)(x, {
                iconSrc: "/icons/smallCodeIcon.svg",
                title: s("devToolsSectionTitle"),
                cards: [
                  "cabanaFactory",
                  "clientJs",
                  "reactHooks",
                  "nextjsTemplate",
                  "sveltekitTemplate",
                ],
              }),
              (0, r.jsx)(x, {
                iconSrc: "/icons/landscapeIcon.svg",
                title: s("designerToolsSectionTitle"),
                cards: [
                  "brandKit",
                  "DropTogetherUiKit",
                  "DropTogetherTokenBrandingGuidelines",
                ],
              }),
            ],
          });
        };
      var w = s(6163),
        j = !0;
      function b() {
        return (0, r.jsx)(w.A, {
          className: "bg-pt-bg-purple-dark md:bg-transparent",
          children: (0, r.jsx)(g, { className: "-mt-[4.25rem] md:mt-0" }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [250, 564, 774, 888, 179], function () {
      return e((e.s = 440));
    }),
      (_N_E = e.O());
  },
]);
