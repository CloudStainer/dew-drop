(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [275],
  {
    4717: function (t, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ecosystem",
        function () {
          return a(2287);
        },
      ]);
    },
    2287: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          __N_SSG: function () {
            return C;
          },
          default: function () {
            return S;
          },
        });
      var s = a(1527),
        i = a(4875),
        r = a.n(i),
        n = a(3886),
        o = a(1517),
        c = a(6690),
        l = a(3654),
        p = a(8823),
        d = a.n(p),
        h = a(2826),
        u = a(2966);
      let g = (t) => {
          let { type: e, className: a } = t,
            i = (0, n.useTranslations)("Ecosystem"),
            r = {
              cabanaApp: {
                href: "https://app.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: i("cabanaAppCardTitle"),
                author: "G9 Software Inc.",
                tags: ["ui", "v5"],
                description: i("cabanaAppCardDescription"),
              },
              pooltimeApp: {
                href: "https://pooltime.app/",
                iconSrc: "/icons/pooltimeIcon.svg",
                title: i("pooltimeAppCardTitle"),
                author: "PoolTime Team",
                tags: ["ui", "v5"],
                description: i("pooltimeAppCardDescription"),
              },
              ptApp_v4: {
                href: h.BA.app_v4,
                iconSrc: "/DropTogether-token-logo.svg",
                title: i("ptApp_v4CardTitle"),
                author: "DropTogether Inc.",
                tags: ["ui", "v4"],
                description: i("ptApp_v4CardDescription"),
              },
              poolExplorer: {
                href: h.BA.poolExplorer,
                iconSrc: "/icons/poolExplorer.svg",
                title: i("poolExplorerCardTitle"),
                author: "Underthesea",
                tags: ["analytics", "v4"],
                description: i("poolExplorerCardDescription"),
              },
              rewards: {
                href: "https://rewards.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: i("rewards"),
                author: "G9 Software Inc.",
                tags: ["extensions", "v5"],
                description: i("rewardsCardDescription"),
              },
              flash: {
                href: "https://flash.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: i("flash"),
                author: "G9 Software Inc.",
                tags: ["extensions", "v5"],
                description: i("flashCardDescription"),
              },
              depositDelegator_v4: {
                href: h.BA.depositDelegator,
                iconSrc: "/icons/extension.svg",
                title: i("depositDelegatorCardTitle"),
                author: "DropTogether Inc.",
                tags: ["extensions", "v4"],
                description: i("depositDelegatorCardDescription"),
              },
              tally: {
                href: h.BA.tally,
                iconSrc: "/icons/tally.svg",
                title: i("tallyCardTitle"),
                author: "Tally",
                tags: ["governance"],
                description: i("tallyCardDescription"),
              },
              treasury: {
                href: h.BA.treasury,
                iconSrc: "/DropTogether-token-logo.svg",
                title: i("treasuryCardTitle"),
                author: "DropTogether Inc.",
                tags: ["governance"],
                description: i("treasuryCardDescription"),
              },
              dune_v4: {
                href: h.BA.dune_v4,
                iconSrc: "/icons/dune.svg",
                title: i("dune_v4CardTitle"),
                author: "Sarfang",
                tags: ["analytics", "v4"],
                description: i("dune_v4CardDescription"),
              },
              dune_v5: {
                href: "https://dune.com/DropTogether/DropTogether-v5",
                iconSrc: "/icons/dune.svg",
                title: i("dune_v5CardTitle"),
                author: "Bronder",
                tags: ["analytics", "v5"],
                description: i("dune_v5CardDescription"),
              },
              cabanaLists: {
                href: "https://lists.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: i("cabanaListsCardTitle"),
                author: "G9 Software Inc.",
                tags: ["extensions", "v5"],
                description: i("cabanaListsCardDescription"),
              },
              cabanalytics: {
                href: "https://analytics.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: i("cabanalyticsCardTitle"),
                author: "G9 Software Inc.",
                tags: ["analytics", "v5"],
                description: i("cabanalyticsCardDescription"),
              },
              cabanaSwaps: {
                href: "https://swap.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: i("cabanaSwapsCardTitle"),
                author: "G9 Software Inc.",
                tags: ["ui", "extensions", "v5"],
                description: i("cabanaSwapsCardDescription"),
              },
              prizeCalc: {
                href: h.BA.prizeCalc,
                iconSrc: "/icons/poolySunglasses.png",
                title: i("prizeCalcCardTitle"),
                author: "Ncookie",
                tags: ["analytics"],
                description: i("prizeCalcCardDescription"),
              },
              migrationApp: {
                href: "https://migrate.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: i("migrationAppCardTitle"),
                author: "G9 Software Inc.",
                tags: ["ui", "v3", "v4"],
                description: i("migrationAppCardDescription"),
              },
              ptlist: {
                href: "https://ptlist.xyz/",
                iconSrc: "/icons/ptlistIcon.svg",
                title: i("ptlistCardTitle"),
                author: "Ncookie & Trmid",
                tags: ["extensions", "v5"],
                description: i("ptlistCardDescription"),
              },
            },
            o = r[e];
          return (0, s.jsx)(u.e, { ...o, className: a });
        },
        m = (t) => {
          let { iconSrc: e, title: a, cards: i } = t;
          return (0, s.jsxs)("div", {
            className: "flex flex-col gap-4 items-center",
            children: [
              (0, s.jsxs)("div", {
                className: "flex gap-3 items-center text-pt-purple-50",
                children: [
                  (0, s.jsx)(d(), {
                    src: e,
                    width: 32,
                    height: 32,
                    alt: a,
                    className: "h-6 w-auto text-pt-purple-300 md:h-8",
                  }),
                  (0, s.jsx)("span", {
                    className: "text-sm md:text-xl",
                    children: a,
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "w-full flex flex-wrap gap-4 justify-center",
                children: i.map((t) =>
                  (0, s.jsx)(
                    g,
                    {
                      type: t,
                      className:
                        "w-[45%] min-w-[21rem] max-w-xl md:w-[30%] shrink",
                    },
                    "".concat(t, "-card")
                  )
                ),
              }),
            ],
          });
        },
        f = (t) => {
          let { className: e } = t,
            a = (0, n.useTranslations)("Ecosystem");
          return (0, s.jsxs)(c.$, {
            bg: "ecosystemSection1.svg",
            smallBg: "mobileEcosystemSection1.svg",
            className: r()("aspect-[376/667] md:aspect-[1600/1950]", e),
            children: [
              (0, s.jsx)(l.C, {
                title: a.rich("ptEcosystem", o.e),
                description: a("checkOut"),
                className:
                  "absolute w-full mt-[28%] md:h-[7.8%] md:justify-end md:mt-0 lg:h-[9.6%] xl:h-[11.4%] 2xl:h-[14%]",
                titleClassName: "max-w-[1440px]",
                descriptionClassName: "max-w-[1440px] px-[5%] sm:px-0",
              }),
              (0, s.jsx)(v, {
                className:
                  "w-full max-w-[1440px] mt-[58%] mb-8 mx-auto md:mt-[22%]",
              }),
            ],
          });
        },
        v = (t) => {
          let { className: e } = t,
            a = (0, n.useTranslations)("Ecosystem");
          return (0, s.jsxs)("div", {
            className: r()("flex flex-col gap-6 md:gap-16", e),
            children: [
              (0, s.jsx)(m, {
                iconSrc: "/icons/addIcon.svg",
                title: a("interfacesSectionTitle"),
                cards: ["cabanaApp", "pooltimeApp", "migrationApp"],
              }),
              (0, s.jsx)(m, {
                iconSrc: "/icons/puzzleIcon.svg",
                title: a("extensionsSectionTitle"),
                cards: ["cabanaLists", "rewards", "ptlist"],
              }),
              (0, s.jsx)(m, {
                iconSrc: "/icons/presentationIcon.svg",
                title: a("toolsSectionTitle"),
                cards: ["treasury", "tally", "cabanalytics"],
              }),
            ],
          });
        };
      var x = a(6163),
        C = !0;
      function S() {
        return (0, s.jsx)(x.A, {
          className: "bg-pt-bg-purple-dark",
          children: (0, s.jsx)(f, { className: "-mt-[4.25rem] md:mt-0" }),
        });
      }
    },
  },
  function (t) {
    t.O(0, [250, 564, 774, 888, 179], function () {
      return t((t.s = 4717));
    }),
      (_N_E = t.O());
  },
]);
