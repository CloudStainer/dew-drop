(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [44],
  {
    2350: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/community",
        function () {
          return s(4213);
        },
      ]);
    },
    4213: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return y;
          },
          default: function () {
            return C;
          },
        });
      var n = s(1527),
        a = s(4875),
        r = s.n(a),
        c = s(3886),
        i = s(1517),
        m = s(6690),
        o = s(3654),
        l = s(9902),
        d = s(2826),
        p = s(6945);
      let x = (e) => {
        let { type: t, className: s } = e,
          a = (0, c.useTranslations)("Community"),
          { setIsModalOpen: i } = (0, l.EV)(l.fm.captcha),
          m = {
            chat: {
              onClick: () => i(!0),
              iconSrc: "/icons/chatIcon.svg",
              title: a("chatCardTitle"),
              description: a("chatCardDescription"),
            },
            forums: {
              href: d.BA.governance,
              iconSrc: "/icons/governanceIcon.svg",
              title: a("forumsCardTitle"),
              description: a("forumsCardDescription"),
            },
            voting: {
              href: d.BA.tally,
              iconSrc: "/icons/votingIcon.svg",
              title: a("votingCardTitle"),
              description: a("votingCardDescription"),
            },
            grants: {
              href: d.BA.grants,
              iconSrc: "/icons/grantsIcon.svg",
              title: a("grantsCardTitle"),
              description: a("grantsCardDescription"),
            },
            calendar: {
              href: d.BA.communityCalendar,
              iconSrc: "/icons/calendarIcon.svg",
              title: a("calendarCardTitle"),
              description: a("calendarCardDescription"),
            },
          },
          o = m[t];
        return (0, n.jsx)(p.s, {
          ...o,
          className: r()("max-w-sm md:max-w-none", s),
        });
      };
      var u = s(8823),
        g = s.n(u);
      let f = {
          lens: {
            href: d.BA.lens,
            name: "Lens Protocol",
            iconSrc: "/icons/lensIcon.svg",
          },
          mirror: {
            href: d.BA.mirror,
            name: "Mirror",
            iconSrc: "/icons/mirrorIcon.svg",
          },
          twitter: {
            href: d.BA.twitter,
            name: "Twitter",
            iconSrc: "/icons/twitterIcon.svg",
          },
          medium: {
            href: d.BA.medium,
            name: "Medium",
            iconSrc: "/icons/mediumIcon.svg",
          },
          notion: {
            href: d.BA.notion,
            name: "Notion",
            iconSrc: "/icons/notionIcon.svg",
          },
          farcaster: {
            href: d.BA.warpcast,
            name: "Farcaster",
            iconSrc: "/icons/farcasterIcon.svg",
          },
        },
        h = (e) => {
          let { type: t, className: s } = e,
            a = f[t];
          return (0, n.jsxs)("a", {
            href: a.href,
            target: "_blank",
            className: r()("flex flex-col gap-3 items-center md:gap-6", s),
            children: [
              (0, n.jsx)("span", {
                className: "text-lg text-pt-purple-100 md:text-base xl:text-lg",
                children: a.name,
              }),
              (0, n.jsx)(g(), {
                src: a.iconSrc,
                width: 48,
                height: 48,
                alt: "".concat(a.name, " Icon"),
                className: "h-full max-h-6 w-auto md:max-h-8 xl:max-h-12",
              }),
            ],
          });
        },
        j = (e) => {
          let { className: t } = e,
            s = (0, c.useTranslations)("Community");
          return (0, n.jsxs)(m.$, {
            bg: "communitySection1.svg",
            smallBg: "mobileCommunitySection1.svg",
            className: r()("aspect-[375/667] md:aspect-[1600/1560]", t),
            children: [
              (0, n.jsx)(o.C, {
                title: s.rich("dipInThePool", i.e),
                description: s("activeCommunity"),
                className:
                  "absolute w-full mt-[28%] md:h-[18.4%] md:justify-end md:mt-0",
                titleClassName: "max-w-[1440px]",
                descriptionClassName: "max-w-[1440px] px-[5%] sm:px-0",
              }),
              (0, n.jsx)(N, {
                className:
                  "w-full mt-[84%] mx-auto md:max-w-[min(82%,_1440px)] md:h-[40%] md:mt-[30.4%]",
              }),
              (0, n.jsx)(v, {
                className:
                  "w-full my-32 md:max-w-[min(60%,_1440px)] md:h-[25%] md:mb-0 md:mt-[3.8%] md:ml-[20%]",
              }),
            ],
          });
        },
        N = (e) => {
          let { className: t } = e;
          return (0, n.jsxs)("div", {
            className: r()(
              "grid grid-cols-1 auto-rows-fr gap-3 px-4 md:grid-cols-3 md:gap-8 md:px-0",
              t
            ),
            children: [
              (0, n.jsx)(x, { type: "chat", className: "mx-auto" }),
              (0, n.jsx)(x, { type: "forums", className: "mx-auto" }),
              (0, n.jsx)(x, { type: "voting", className: "mx-auto" }),
              (0, n.jsx)(x, { type: "grants", className: "mx-auto" }),
              (0, n.jsx)(x, { type: "calendar", className: "mx-auto" }),
            ],
          });
        },
        v = (e) => {
          let { className: t } = e,
            s = (0, c.useTranslations)("Community");
          return (0, n.jsxs)("div", {
            className: r()(
              "flex flex-col gap-6 items-center justify-center py-12 bg-pt-bg-purple-darker md:py-0 md:bg-transparent xl:gap-12",
              t
            ),
            children: [
              (0, n.jsx)("span", {
                className: "text-sm text-pt-purple-400 md:text-base xl:text-lg",
                children: s("otherPlatforms"),
              }),
              (0, n.jsxs)("div", {
                className:
                  "w-full flex flex-wrap gap-6 justify-center px-16 md:justify-between md:pb-4 md:px-0",
                children: [
                  (0, n.jsx)(h, { type: "farcaster" }),
                  (0, n.jsx)(h, { type: "lens" }),
                  (0, n.jsx)(h, { type: "mirror" }),
                  (0, n.jsx)(h, { type: "twitter" }),
                  (0, n.jsx)(h, { type: "medium" }),
                  (0, n.jsx)(h, { type: "notion" }),
                ],
              }),
            ],
          });
        };
      var w = s(6163),
        y = !0;
      function C() {
        return (0, n.jsx)(w.A, {
          className: "bg-pt-bg-purple-dark md:bg-transparent",
          children: (0, n.jsx)(j, { className: "-mt-[4.25rem] md:mt-0" }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [250, 149, 774, 888, 179], function () {
      return e((e.s = 2350));
    }),
      (_N_E = e.O());
  },
]);
