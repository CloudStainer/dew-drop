(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [896],
  {
    6741: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/interfaces",
        function () {
          return s(3274);
        },
      ]);
    },
    6163: function (e, t, s) {
      "use strict";
      s.d(t, {
        A: function () {
          return v;
        },
      });
      var a = s(1527),
        n = s(9902),
        r = s(600),
        o = s(2826),
        l = s(8518),
        c = s(4875),
        i = s.n(c),
        p = s(2533),
        m = s(3886),
        h = s(7666),
        x = s.n(h),
        d = s(8823),
        f = s.n(d),
        u = s(4598),
        g = s.n(u),
        j = s(1689),
        N = s(959);
      let v = (e) => {
          let { children: t, hideNavbar: s, hideFooter: c, className: h } = e,
            d = (0, j.useRouter)(),
            f = (0, m.useTranslations)("Common"),
            u = (0, m.useTranslations)("Navigation"),
            v = (0, m.useTranslations)("Footer"),
            { setIsModalOpen: w } = (0, n.EV)(n.fm.captcha),
            { isMobile: y } = (0, n.eI)(),
            C = (0, p.J)(),
            [k, _] = (0, N.useState)(0),
            A = () => {
              _(window.scrollY);
            },
            T = (e) => {
              let { pathname: t, query: s, asPath: a } = d;
              d.push({ pathname: t, query: s }, a, { locale: e });
            };
          (0, N.useEffect)(
            () => (
              window.addEventListener("scroll", A),
              () => window.removeEventListener("scroll", A)
            ),
            []
          );
          let E = [
              { href: "/help", name: u("help") },
              { href: "/ecosystem", name: u("ecosystem") },
              { href: "/community", name: u("community") },
              { href: "/builders", name: u("builders") },
            ],
            B = [
              {
                title: v("audits"),
                content: [
                  {
                    content: (0, a.jsx)(b, {
                      svgSrc: "/graphics/c4Logo.svg",
                      altText: "CodeArena Audits",
                    }),
                  },
                  {
                    content: (0, a.jsx)(b, {
                      svgSrc: "/graphics/macroLogo.svg",
                      altText: "0xMacro Audits",
                    }),
                  },
                  {
                    content: (0, a.jsx)(b, {
                      svgSrc: "/graphics/ozLogo.svg",
                      altText: "OpenZeppelin Audits",
                    }),
                  },
                ],
                className: "min-w-min xl:pr-20",
                titleClassName: "whitespace-nowrap lg:text-right",
              },
              {
                title: v("ecosystem"),
                content: [
                  { content: v("devDocs"), href: o.BA.devDocs },
                  { content: v("security"), href: o.BA.audits },
                  { content: v("faq"), href: o.BA.faq },
                  { content: v("brandAssets"), href: o.BA.brandKit },
                  { content: v("governance"), href: o.BA.governance },
                  { content: v("userDocs"), href: o.BA.docs },
                  {
                    content: v("protocolDisclaimer"),
                    href: "/protocol-disclaimer",
                  },
                  { content: v("termsOfService"), href: "/terms" },
                ],
              },
              {
                title: v("community"),
                content: [
                  {
                    content: "Lens",
                    href: o.BA.lens,
                    icon: (0, a.jsx)(o.QZ, {
                      platform: "lens",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Farcaster",
                    href: o.BA.farcaster,
                    icon: (0, a.jsx)(o.QZ, {
                      platform: "farcaster",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Twitter",
                    href: o.BA.twitter,
                    icon: (0, a.jsx)(o.QZ, {
                      platform: "twitter",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Discord",
                    onClick: () => w(!0),
                    icon: (0, a.jsx)(o.QZ, {
                      platform: "discord",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "GitHub",
                    href: o.BA.github,
                    icon: (0, a.jsx)(o.QZ, {
                      platform: "github",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Medium",
                    href: o.BA.medium,
                    icon: (0, a.jsx)(o.QZ, {
                      platform: "medium",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Mirror",
                    href: o.BA.mirror,
                    icon: (0, a.jsx)(o.QZ, {
                      platform: "mirror",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                ],
              },
            ],
            S = {
              "/help": u("help"),
              "/ecosystem": u("ecosystem"),
              "/community": u("community"),
              "/builders": u("builders"),
              "/terms": v("termsOfService"),
              "/protocol-disclaimer": v("protocolDisclaimer"),
            },
            P = S[d.pathname],
            D = "/" === d.pathname || "/ecosystem" === d.pathname;
          return (0, a.jsxs)("div", {
            className: "flex flex-col min-h-screen",
            children: [
              (0, a.jsx)(x(), {
                children: (0, a.jsx)("title", {
                  children: "DropTogether".concat(P ? " | ".concat(P) : ""),
                }),
              }),
              !s &&
                (0, a.jsx)(o.wp, {
                  links: E,
                  activePage: d.pathname,
                  linksAs: g(),
                  append: (0, a.jsx)(g(), {
                    href: "/interfaces",
                    passHref: !0,
                    children: (0, a.jsx)(o.zx, {
                      children: (0, a.jsx)("span", {
                        className: "text-sm md:px-5 md:text-base",
                        children: u("usePt"),
                      }),
                    }),
                  }),
                  onClickBrand: () => d.push("/"),
                  sticky: !y,
                  className: i()(
                    "!px-4 !py-3 bg-transparent !border-opacity-0 sm:!px-8 md:shadow-2xl",
                    {
                      "transition-all": !C,
                      "!shadow-transparent md:!py-8": 0 === k,
                      "md:!py-4 md:bg-pt-bg-purple-darker md:!border-opacity-100":
                        k > 0,
                    }
                  ),
                  linkClassName:
                    "text-xs sm:text-sm md:text-base text-pt-purple-100 hover:text-pt-purple-300",
                  mobileBottomClassName: "!gap-4 sm:!gap-6",
                }),
              (0, a.jsx)(r.M, {
                hCaptchaSiteKey: "11cdabde-af7e-42cb-ba97-76e35b7f7c39",
                header: f("joinDiscord"),
                onVerify: l.hh,
              }),
              (0, a.jsx)("main", {
                className: i()(
                  "relative w-full max-w-[1920px] flex flex-col grow items-center mx-auto shadow-2xl",
                  h
                ),
                children: (0, a.jsx)(a.Fragment, { children: t }),
              }),
              !c &&
                (0, a.jsx)(o.$_, {
                  items: B,
                  className: i()({
                    "bg-pt-bg-purple-darker": D,
                    "bg-pt-purple-800": !D,
                  }),
                  containerClassName: "max-w-[1440px]",
                  titleClassName: "text-pt-purple-400",
                }),
            ],
          });
        },
        b = (e) => {
          let { svgSrc: t, altText: s } = e;
          return (0, a.jsx)("a", {
            href: o.BA.audits,
            target: "_blank",
            className: "relative flex flex-col",
            children: (0, a.jsx)(f(), {
              src: t,
              alt: s,
              fill: !0,
              className: "!relative",
            }),
          });
        };
    },
    3274: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return g;
          },
          default: function () {
            return j;
          },
        });
      var a = s(1527),
        n = s(3886),
        r = s(4875),
        o = s.n(r),
        l = s(5137),
        c = s(2826),
        i = s(8823),
        p = s.n(i);
      let m = (e) => {
          let { type: t, className: s } = e,
            r = (0, n.useTranslations)("Ecosystem"),
            i = {
              cabanaApp: {
                href: "https://app.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: r("cabanaAppCardTitle"),
              },
              pooltimeApp: {
                href: "https://pooltime.app/",
                iconSrc: "/icons/pooltimeIcon.svg",
                title: r("pooltimeAppCardTitle"),
              },
              ptApp_v4: {
                href: c.BA.app_v4,
                iconSrc: "/DropTogether-token-logo.svg",
                title: r("ptApp_v4CardTitle"),
              },
              poolExplorer: {
                href: c.BA.poolExplorer,
                iconSrc: "/icons/poolExplorer.svg",
                title: r("poolExplorerCardTitle"),
              },
              migrationApp: {
                href: "https://migrate.cabana.fi/",
                iconSrc: "/icons/cabanaIcon.svg",
                title: r("migrationAppCardTitle"),
              },
            },
            m = i[t];
          return (0, a.jsxs)("a", {
            href: m.href,
            target: "_blank",
            className: o()(
              "w-full flex gap-3 p-8 bg-[#8247E5]/30 rounded-2xl group",
              "outline outline-2 -outline-offset-2 outline-transparent hover:outline-pt-purple-100/20 hover:shadow-lg",
              "md:gap-4",
              "bg-[radial-gradient(farthest-corner_at_0%_5%,_#440BA0B3_0%,_#5820CFB3_100%),_radial-gradient(farthest-corner_at_0%_0%,_#634E90_50%,_#36147D_100%)]",
              s
            ),
            children: [
              (0, a.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: [
                  (0, a.jsx)(p(), {
                    src: m.iconSrc,
                    width: 48,
                    height: 48,
                    alt: m.title,
                    className: "h-12 w-auto",
                  }),
                  (0, a.jsx)("span", {
                    className: "text-base text-pt-purple-100 md:text-xl",
                    children: m.title,
                  }),
                ],
              }),
              (0, a.jsx)(l, {
                className:
                  "w-8 h-auto ml-auto text-pt-purple-300 group-hover:text-pt-purple-400",
              }),
            ],
          });
        },
        h = (e) => {
          let { cards: t, title: s, append: n, className: r } = e;
          return (0, a.jsxs)("div", {
            className: o()(
              "w-full max-w-2xl flex flex-col gap-4 items-center",
              r
            ),
            children: [
              !!s &&
                (0, a.jsx)("span", {
                  className: "text-sm text-pt-purple-200 md:text-base",
                  children: s,
                }),
              (0, a.jsx)("div", {
                className: "w-full flex flex-col gap-4",
                children: t.map((e) =>
                  (0, a.jsx)(m, { type: e }, "".concat(e, "-card"))
                ),
              }),
              n,
            ],
          });
        };
      var x = s(4598),
        d = s.n(x);
      let f = (e) => {
        let { className: t } = e,
          s = (0, n.useTranslations)("Interfaces");
        return (0, a.jsxs)("div", {
          className: o()("flex flex-col gap-4 items-center text-center", t),
          children: [
            (0, a.jsx)(d(), {
              href: "/",
              children: (0, a.jsx)(p(), {
                src: "/DropTogether-logo.svg",
                width: 716,
                height: 284,
                alt: "DropTogether",
                className: "h-14 w-auto",
              }),
            }),
            (0, a.jsx)("span", {
              className: "mt-4 font-averta font-bold text-4xl",
              children: s("interfacesTitle"),
            }),
            (0, a.jsxs)("span", {
              className: "max-w-2xl",
              children: [s("manyWays"), " ", s("decentralization")],
            }),
          ],
        });
      };
      var u = s(6163),
        g = !0;
      function j() {
        let e = (0, n.useTranslations)("Interfaces");
        return (0, a.jsxs)(u.A, {
          hideNavbar: !0,
          hideFooter: !0,
          className:
            "px-4 py-16 bg-gradient-to-b from-pt-bg-purple-darker to-pt-purple-800",
          children: [
            (0, a.jsx)(f, {}),
            (0, a.jsx)(h, {
              cards: ["cabanaApp", "pooltimeApp"],
              className: "mt-8",
            }),
            (0, a.jsx)(h, {
              title: e("migrationPrompt"),
              cards: ["migrationApp"],
              className: "mt-8",
            }),
          ],
        });
      }
    },
    600: function (e, t, s) {
      "use strict";
      s.d(t, {
        M: function () {
          return c;
        },
      });
      var a = s(1527),
        n = s(4444),
        r = s(9902),
        o = s(2826),
        l = s(959);
      let c = (e) => {
          let {
              hCaptchaSiteKey: t,
              header: s,
              onVerify: n,
              isOnPageContent: l,
            } = e,
            { isModalOpen: c, setIsModalOpen: h } = (0, r.EV)(r.fm.captcha),
            x = () => {
              h(!1);
            };
          return l && t
            ? (0, a.jsxs)("div", {
                className: "flex flex-col gap-6 items-center justify-center",
                children: [
                  (0, a.jsx)("span", { className: "font-medium", children: s }),
                  (0, a.jsx)(p, {
                    hCaptchaSiteKey: t,
                    handleClose: x,
                    onVerify: n,
                  }),
                  (0, a.jsx)(m, {}),
                ],
              })
            : c && t
            ? (0, a.jsx)(o.u_, {
                headerContent: (0, a.jsx)(i, { header: s }),
                bodyContent: (0, a.jsx)(p, {
                  hCaptchaSiteKey: t,
                  handleClose: x,
                  onVerify: n,
                }),
                footerContent: (0, a.jsx)(m, {}),
                onClose: x,
                label: "discord-captcha",
                mobileStyle: "tab",
                className: "md:!max-w-2xl",
                footerClassName: "flex justify-center",
              })
            : (0, a.jsx)(a.Fragment, {});
        },
        i = (e) => {
          let { header: t } = e;
          return (0, a.jsx)(a.Fragment, { children: t });
        },
        p = (e) => {
          let { hCaptchaSiteKey: t, handleClose: s, onVerify: r } = e,
            o = (0, l.useRef)(null),
            c = () => {
              console.warn("hCaptcha Token Expired"), s();
            };
          return (0, a.jsx)("div", {
            className: "flex flex-col items-center",
            children: (0, a.jsx)(n.Z, {
              sitekey: t,
              onVerify: r,
              onExpire: c,
              ref: o,
              theme: "dark",
            }),
          });
        },
        m = () =>
          (0, a.jsxs)("span", {
            className: "text-center text-xs opacity-70",
            children: [
              "This site is protected by hCaptcha and its",
              " ",
              (0, a.jsx)(o.dL, {
                href: "https://hcaptcha.com/privacy",
                text: "Privacy Policy",
                className: "text-xs text-pt-teal",
              }),
              " ",
              "and",
              " ",
              (0, a.jsx)(o.dL, {
                href: "https://hcaptcha.com/terms",
                text: "Terms of Service",
                className: "text-xs text-pt-teal",
              }),
              " ",
              "apply.",
            ],
          });
    },
  },
  function (e) {
    e.O(0, [250, 774, 888, 179], function () {
      return e((e.s = 6741));
    }),
      (_N_E = e.O());
  },
]);
