(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [233],
  {
    7357: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/help",
        function () {
          return s(8480);
        },
      ]);
    },
    8480: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return h;
          },
          default: function () {
            return N;
          },
        });
      var i = s(1527),
        a = s(4875),
        n = s.n(a),
        r = s(3886),
        c = s(1517),
        o = s(6690),
        d = s(3654),
        l = s(9902),
        m = s(2826),
        p = s(6945);
      let u = (e) => {
          let { type: t, className: s } = e,
            a = (0, r.useTranslations)("Help"),
            { setIsModalOpen: c } = (0, l.EV)(l.fm.captcha),
            o = {
              about: {
                href: m.BA.docs,
                iconSrc: "/icons/infoIcon.svg",
                title: a("aboutCardTitle"),
                description: a("aboutCardDescription"),
              },
              gettingStarted: {
                href: m.BA.gettingStarted,
                iconSrc: "/icons/clickIcon.svg",
                title: a("gettingStartedCardTitle"),
                description: a("gettingStartedCardDescription"),
              },
              faq: {
                href: m.BA.faq,
                iconSrc: "/icons/questionIcon.svg",
                title: a("faqCardTitle"),
                description: a("faqCardDescription"),
              },
              guides: {
                href: m.BA.guides,
                iconSrc: "/icons/bookIcon.svg",
                title: a("guidesCardTitle"),
                description: a("guidesCardDescription"),
              },
              discord: {
                onClick: () => c(!0),
                iconSrc: "/icons/chatIcon.svg",
                title: a("discordCardTitle"),
                description: a("discordCardDescription"),
              },
            },
            d = o[t];
          return (0, i.jsx)(p.s, {
            ...d,
            className: n()("max-w-sm md:max-w-none", s),
          });
        },
        g = (e) => {
          let { className: t } = e,
            s = (0, r.useTranslations)("Help");
          return (0, i.jsxs)(o.$, {
            bg: "helpSection1.svg",
            smallBg: "mobileHelpSection1.svg",
            className: n()(
              "aspect-[375/667] md:aspect-[1600/1150] md:overflow-hidden",
              t
            ),
            children: [
              (0, i.jsx)(d.C, {
                title: s.rich("getHelp", c.e),
                description: (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: "hidden md:block",
                      children: s.rich("prizeLinkedSavings", {
                        link: (e) =>
                          (0, i.jsx)("a", {
                            href: "https://medium.com/DropTogether/the-power-of-no-loss-prize-savings-1f006503f64",
                            target: "_blank",
                            className: "text-pt-teal",
                            children: e,
                          }),
                      }),
                    }),
                    (0, i.jsx)("span", { children: s("learnAbout") }),
                  ],
                }),
                className:
                  "absolute w-full mt-[28%] md:h-[27%] md:justify-end md:mt-0",
                titleClassName: "max-w-[1440px]",
                descriptionClassName: "max-w-[1440px] flex flex-col",
              }),
              (0, i.jsx)(x, {
                className:
                  "w-full mt-[75%] mb-8 mx-auto md:max-w-[min(82%,_1440px)] md:h-[53%] md:mt-[23.9%] md:mb-0",
              }),
            ],
          });
        },
        x = (e) => {
          let { className: t } = e;
          return (0, i.jsxs)("div", {
            className: n()(
              "grid grid-cols-1 auto-rows-fr gap-3 px-4 md:grid-cols-3 md:gap-8 md:px-0",
              t
            ),
            children: [
              (0, i.jsx)(u, { type: "about", className: "mx-auto" }),
              (0, i.jsx)(u, { type: "gettingStarted", className: "mx-auto" }),
              (0, i.jsx)(u, { type: "faq", className: "mx-auto" }),
              (0, i.jsx)(u, { type: "guides", className: "mx-auto" }),
              (0, i.jsx)(u, { type: "discord", className: "mx-auto" }),
            ],
          });
        };
      var f = s(6163),
        h = !0;
      function N() {
        return (0, i.jsx)(f.A, {
          className: "bg-pt-bg-purple-dark",
          children: (0, i.jsx)(g, { className: "-mt-[4.25rem] md:mt-0" }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [250, 149, 774, 888, 179], function () {
      return e((e.s = 7357));
    }),
      (_N_E = e.O());
  },
]);
