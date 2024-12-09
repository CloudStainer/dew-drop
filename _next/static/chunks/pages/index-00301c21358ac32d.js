(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5766: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(6316);
        },
      ]);
    },
    6163: function (e, t, s) {
      "use strict";
      s.d(t, {
        A: function () {
          return N;
        },
      });
      var l = s(1527),
        a = s(9902),
        n = s(600),
        r = s(2826),
        c = s(8518),
        i = s(4875),
        m = s.n(i),
        o = s(2533),
        x = s(3886),
        d = s(7666),
        p = s.n(d),
        h = s(8823),
        u = s.n(h),
        f = s(4598),
        g = s.n(f),
        j = s(1689),
        v = s(959);
      let N = (e) => {
          let { children: t, hideNavbar: s, hideFooter: i, className: d } = e,
            h = (0, j.useRouter)(),
            u = (0, x.useTranslations)("Common"),
            f = (0, x.useTranslations)("Navigation"),
            N = (0, x.useTranslations)("Footer"),
            { setIsModalOpen: w } = (0, a.EV)(a.fm.captcha),
            { isMobile: y } = (0, a.eI)(),
            k = (0, o.J)(),
            [C, S] = (0, v.useState)(0),
            T = () => {
              S(window.scrollY);
            },
            A = (e) => {
              let { pathname: t, query: s, asPath: l } = h;
              h.push({ pathname: t, query: s }, l, { locale: e });
            };
          (0, v.useEffect)(
            () => (
              window.addEventListener("scroll", T),
              () => window.removeEventListener("scroll", T)
            ),
            []
          );
          let B = [
              { href: "/help", name: f("help") },
              { href: "/ecosystem", name: f("ecosystem") },
              { href: "/community", name: f("community") },
              { href: "/builders", name: f("builders") },
            ],
            P = [
              {
                title: N("audits"),
                content: [
                  {
                    content: (0, l.jsx)(b, {
                      svgSrc: "/graphics/c4Logo.svg",
                      altText: "CodeArena Audits",
                    }),
                  },
                  {
                    content: (0, l.jsx)(b, {
                      svgSrc: "/graphics/macroLogo.svg",
                      altText: "0xMacro Audits",
                    }),
                  },
                  {
                    content: (0, l.jsx)(b, {
                      svgSrc: "/graphics/ozLogo.svg",
                      altText: "OpenZeppelin Audits",
                    }),
                  },
                ],
                className: "min-w-min xl:pr-20",
                titleClassName: "whitespace-nowrap lg:text-right",
              },
              {
                title: N("ecosystem"),
                content: [
                  { content: N("devDocs"), href: r.BA.devDocs },
                  { content: N("security"), href: r.BA.audits },
                  { content: N("faq"), href: r.BA.faq },
                  { content: N("brandAssets"), href: r.BA.brandKit },
                  { content: N("governance"), href: r.BA.governance },
                  { content: N("userDocs"), href: r.BA.docs },
                  {
                    content: N("protocolDisclaimer"),
                    href: "/protocol-disclaimer",
                  },
                  { content: N("termsOfService"), href: "/terms" },
                ],
              },
              {
                title: N("community"),
                content: [
                  {
                    content: "Lens",
                    href: r.BA.lens,
                    icon: (0, l.jsx)(r.QZ, {
                      platform: "lens",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Farcaster",
                    href: r.BA.farcaster,
                    icon: (0, l.jsx)(r.QZ, {
                      platform: "farcaster",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Twitter",
                    href: r.BA.twitter,
                    icon: (0, l.jsx)(r.QZ, {
                      platform: "twitter",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Discord",
                    onClick: () => w(!0),
                    icon: (0, l.jsx)(r.QZ, {
                      platform: "discord",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "GitHub",
                    href: r.BA.github,
                    icon: (0, l.jsx)(r.QZ, {
                      platform: "github",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Medium",
                    href: r.BA.medium,
                    icon: (0, l.jsx)(r.QZ, {
                      platform: "medium",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Mirror",
                    href: r.BA.mirror,
                    icon: (0, l.jsx)(r.QZ, {
                      platform: "mirror",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                ],
              },
            ],
            D = {
              "/help": f("help"),
              "/ecosystem": f("ecosystem"),
              "/community": f("community"),
              "/builders": f("builders"),
              "/terms": N("termsOfService"),
              "/protocol-disclaimer": N("protocolDisclaimer"),
            },
            _ = D[h.pathname],
            z = "/" === h.pathname || "/ecosystem" === h.pathname;
          return (0, l.jsxs)("div", {
            className: "flex flex-col min-h-screen",
            children: [
              (0, l.jsx)(p(), {
                children: (0, l.jsx)("title", {
                  children: "DropTogether".concat(_ ? " | ".concat(_) : ""),
                }),
              }),
              !s &&
                (0, l.jsx)(r.wp, {
                  links: B,
                  activePage: h.pathname,
                  linksAs: g(),
                  append: (0, l.jsx)(g(), {
                    href: "/interfaces",
                    passHref: !0,
                    children: (0, l.jsx)(r.zx, {
                      children: (0, l.jsx)("span", {
                        className: "text-sm md:px-5 md:text-base",
                        children: f("usePt"),
                      }),
                    }),
                  }),
                  onClickBrand: () => h.push("/"),
                  sticky: !y,
                  className: m()(
                    "!px-4 !py-3 bg-transparent !border-opacity-0 sm:!px-8 md:shadow-2xl",
                    {
                      "transition-all": !k,
                      "!shadow-transparent md:!py-8": 0 === C,
                      "md:!py-4 md:bg-pt-bg-purple-darker md:!border-opacity-100":
                        C > 0,
                    }
                  ),
                  linkClassName:
                    "text-xs sm:text-sm md:text-base text-pt-purple-100 hover:text-pt-purple-300",
                  mobileBottomClassName: "!gap-4 sm:!gap-6",
                }),
              (0, l.jsx)(n.M, {
                hCaptchaSiteKey: "11cdabde-af7e-42cb-ba97-76e35b7f7c39",
                header: u("joinDiscord"),
                onVerify: c.hh,
              }),
              (0, l.jsx)("main", {
                className: m()(
                  "relative w-full max-w-[1920px] flex flex-col grow items-center mx-auto shadow-2xl",
                  d
                ),
                children: (0, l.jsx)(l.Fragment, { children: t }),
              }),
              !i &&
                (0, l.jsx)(r.$_, {
                  items: P,
                  className: m()({
                    "bg-pt-bg-purple-darker": z,
                    "bg-pt-purple-800": !z,
                  }),
                  containerClassName: "max-w-[1440px]",
                  titleClassName: "text-pt-purple-400",
                }),
            ],
          });
        },
        b = (e) => {
          let { svgSrc: t, altText: s } = e;
          return (0, l.jsx)("a", {
            href: r.BA.audits,
            target: "_blank",
            className: "relative flex flex-col",
            children: (0, l.jsx)(u(), {
              src: t,
              alt: s,
              fill: !0,
              className: "!relative",
            }),
          });
        };
    },
    6690: function (e, t, s) {
      "use strict";
      s.d(t, {
        $: function () {
          return p;
        },
      });
      var l = s(1527),
        a = s(4875),
        n = s.n(a),
        r = s(2533),
        c = s(8823),
        i = s.n(c),
        m = s(959);
      let o = (e) => {
          let { bg: t, smallBg: s, animatedBg: a, animatedSmallBg: c } = e,
            [i, o] = (0, m.useState)(!1),
            p = (0, r.J)();
          (0, m.useEffect)(() => {
            p && o(!0);
          }, []);
          let h = !!a && !i,
            u = !!c && !i,
            f = "/backgrounds/animated/".concat(a),
            g = "/backgrounds/animated/".concat(c),
            j = "absolute w-full -z-10",
            v = "hidden md:block",
            N = "md:hidden";
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(x, {
                src: h ? f : "/backgrounds/static/".concat(t),
                className: n()(j, v),
              }),
              (0, l.jsx)(x, {
                src: u ? g : "/backgrounds/static/".concat(s),
                className: n()(j, N),
                isSmall: !0,
              }),
              h && (0, l.jsx)(d, { src: f, className: n()(j, v, "-z-[5]") }),
              u && (0, l.jsx)(d, { src: g, className: n()(j, N, "-z-[5]") }),
            ],
          });
        },
        x = (e) => {
          let { src: t, isSmall: s, className: a } = e;
          return (0, l.jsx)(i(), {
            src: t,
            width: s ? 375 : 1920,
            height: s ? 667 : 1080,
            alt: "Static BG",
            className: a,
            priority: !0,
          });
        },
        d = (e) => {
          let { src: t, className: s } = e;
          return (0, l.jsx)("object", {
            type: "image/svg+xml",
            data: t,
            className: s,
          });
        },
        p = (e) => {
          let { children: t, className: s, ...a } = e;
          return (0, l.jsxs)("section", {
            className: n()("relative w-full flex flex-col isolate", s),
            children: [(0, l.jsx)(o, { ...a }), t],
          });
        };
    },
    3654: function (e, t, s) {
      "use strict";
      s.d(t, {
        C: function () {
          return r;
        },
      });
      var l = s(1527),
        a = s(4875),
        n = s.n(a);
      let r = (e) => {
        let {
          title: t,
          description: s,
          className: a,
          titleClassName: r,
          descriptionClassName: c,
        } = e;
        return (0, l.jsxs)("div", {
          className: n()(
            "flex flex-col items-center text-center px-4 text-pt-purple-50 md:px-0",
            a
          ),
          children: [
            (0, l.jsx)("span", {
              className: n()(
                "mb-1 font-averta font-bold text-2xl !leading-normal md:text-2xl lg:text-[2rem] xl:text-[2.5rem]",
                r
              ),
              children: (0, l.jsx)(l.Fragment, { children: t }),
            }),
            (0, l.jsx)("span", {
              className: n()("text-sm xl:text-base", c),
              children: (0, l.jsx)(l.Fragment, { children: s }),
            }),
          ],
        });
      };
    },
    1517: function (e, t, s) {
      "use strict";
      s.d(t, {
        e: function () {
          return a;
        },
      });
      var l = s(1527);
      let a = {
        "purple-400": (e) =>
          (0, l.jsx)("span", { className: "text-pt-purple-400", children: e }),
        teal: (e) =>
          (0, l.jsx)("span", { className: "text-pt-teal", children: e }),
      };
    },
    6316: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return L;
          },
          default: function () {
            return E;
          },
        });
      var l = s(1527),
        a = s(92),
        n = s(2227);
      let r = (0, n.cn)(void 0),
        c = () => {
          let e = (0, n.Dv)(r);
          return e;
        };
      var i = s(2826),
        m = s(4875),
        o = s.n(m),
        x = s(3886),
        d = s(6690);
      let p = (e) => {
          let { className: t } = e;
          return (0, l.jsx)(d.$, {
            bg: "indexSection4.svg",
            smallBg: "mobileIndexSection4.svg",
            animatedBg: "indexSection4.svg",
            className: o()("aspect-[375/652] md:aspect-[1600/1028]", t),
            children: (0, l.jsx)(h, {
              className: "w-full mt-[58%] md:h-full md:mt-[26.8%]",
            }),
          });
        },
        h = (e) => {
          let { className: t } = e,
            s = (0, x.useTranslations)("Home");
          return (0, l.jsxs)("div", {
            className: o()(
              "flex flex-col items-center justify-center text-center px-6 md:px-0",
              t
            ),
            children: [
              (0, l.jsx)("span", {
                className:
                  "px-2 font-averta font-bold text-[2rem] !leading-normal text-pt-bg-purple-darker md:px-0 md:text-2xl lg:text-[2rem] xl:text-[2.5rem]",
                children: s("whyCrypto"),
              }),
              (0, l.jsx)("span", {
                className:
                  "mb-2 font-averta font-bold text-[2rem] !leading-normal md:mb-6 md:text-2xl lg:text-[2rem] xl:text-[2.5rem]",
                children: s("becauseCrypto"),
              }),
              (0, l.jsx)("span", {
                className:
                  "text-base text-pt-purple-100 mb-6 md:max-w-[55%] md:text-sm lg:mb-10 lg:text-base xl:text-xl 4xl:max-w-[50%]",
                children: s("automationTransparency"),
              }),
              (0, l.jsx)(i.zx, {
                href: i.BA.docs,
                target: "_blank",
                color: "white",
                outline: !0,
                children: (0, l.jsx)("span", {
                  className: "text-base md:text-xs lg:text-sm xl:text-base",
                  children: s("learnHowItWorks"),
                }),
              }),
            ],
          });
        };
      var u = s(1517),
        f = s(8518);
      let g = () => {
          let e = c(),
            t = (0, x.useTranslations)("Common"),
            s = (e, s) => {
              if (e >= 1e9) {
                let l = (0, f.Nk)(Math.floor(e) / 1e9, {
                  maximumFractionDigits: 1,
                });
                return (null == s ? void 0 : s.hideLabel)
                  ? l
                  : t("billion", { value: l });
              }
              if (e >= 1e6) {
                let l = (0, f.Nk)(Math.floor(e) / 1e6, {
                  maximumFractionDigits: 1,
                });
                return (null == s ? void 0 : s.hideLabel)
                  ? l
                  : t("million", { value: l });
              }
              if (e >= 1e3) {
                let l = (0, f.Nk)(1e3 * Math.floor(e / 1e3));
                return (null == s ? void 0 : s.hideLabel)
                  ? l
                  : t("thousand", { value: l });
              }
              {
                let t = (0, f.Nk)(e, { maximumFractionDigits: 0 });
                return t;
              }
            };
          return e
            ? {
                totalPrizes: "$".concat(s(e.total.awarded.usd)),
                tvl: "$".concat(s(e.total.current.tvl.usd)),
                uniqueWallets: s(e.total.current.users, { hideLabel: !0 }),
              }
            : {};
        },
        j = (e) => {
          let { className: t } = e;
          return (0, l.jsx)(d.$, {
            bg: "indexSection1.svg",
            smallBg: "mobileIndexSection1.svg",
            animatedBg: "indexSection1.svg",
            className: o()("aspect-[375/500] md:aspect-[1600/835]", t),
            children: (0, l.jsx)("div", {
              className:
                "relative w-full h-full max-w-[1440px] flex flex-col mx-auto",
              children: (0, l.jsx)(v, {
                className:
                  "w-full h-[34%] md:max-w-[35%] md:h-[37.9%] md:mt-[5.2%] md:ml-[5%]",
              }),
            }),
          });
        },
        v = (e) => {
          let { className: t } = e,
            s = (0, x.useTranslations)("Home"),
            { uniqueWallets: a } = g();
          return (0, l.jsxs)("div", {
            className: o()(
              "flex flex-col gap-2 px-4 text-center justify-center md:gap-6 md:px-0 md:text-start",
              t
            ),
            children: [
              (0, l.jsx)("h1", {
                className:
                  "font-averta font-bold text-[2.5rem] !leading-tight md:flex md:flex-col md:text-3xl lg:text-[2.5rem] xl:text-[3.5rem]",
                children: s.rich("realAdoption", {
                  ...u.e,
                  first: (e) =>
                    (0, l.jsx)("span", {
                      className: "mr-[0.5ch] md:mr-0 md:whitespace-nowrap",
                      children: e,
                    }),
                  second: (e) => (0, l.jsx)("span", { children: e }),
                }),
              }),
              (0, l.jsx)("span", {
                className:
                  "text-base font-medium md:text-sm lg:text-base xl:text-2xl",
                children: s("permissionlessProtocol", { users: a }),
              }),
            ],
          });
        };
      var N = s(8823),
        b = s.n(N);
      let w = (e) => {
          let { type: t, className: s } = e,
            a = (0, x.useTranslations)("Home"),
            n = {
              devDocs: {
                src: "/graphics/YieldGraphic.svg",
                buttonProps: {
                  href: i.BA.devDocs,
                  target: "_blank",
                  children: a("devDocs"),
                },
              },
              addVault: {
                src: "/graphics/AddVaultGraphic.svg",
                buttonProps: {
                  href: "https://drop-together-app.vercel.app/",
                  target: "_blank",
                  children: a("addYourVault"),
                },
              },
            },
            r = n[t],
            { children: c, ...m } = r.buttonProps;
          return (0, l.jsxs)("div", {
            className: o()(
              "relative w-full h-full flex flex-col items-center gap-6 bg-pt-bg-purple-darker rounded-3xl",
              "p-6 md:p-3 xl:p-6",
              s
            ),
            children: [
              (0, l.jsx)(b(), {
                src: "/icons/codeIcon.svg",
                width: 333,
                height: 259,
                alt: "Code",
                className:
                  "absolute top-4 left-4 w-5 h-auto text-pt-purple-400 4xl:w-6",
              }),
              (0, l.jsx)(b(), {
                src: r.src,
                width: 100,
                height: 80,
                alt: t,
                className: "w-3/4 grow mt-2",
              }),
              (0, l.jsx)(i.zx, {
                fullSized: !0,
                ...m,
                pill: !0,
                className: "overflow-hidden",
                children: (0, l.jsx)("span", {
                  className: "text-sm whitespace-nowrap md:text-xs xl:text-sm",
                  children: c,
                }),
              }),
            ],
          });
        },
        y = (e) => {
          let { className: t } = e;
          return (0, l.jsxs)("div", {
            className: o()("relative w-full flex flex-col", t),
            children: [
              (0, l.jsx)(k, {
                className:
                  "w-full mt-[20%] mb-[10%] md:absolute md:h-[47.2%] md:mt-0 md:mb-0 md:z-10",
              }),
              (0, l.jsxs)(d.$, {
                bg: "indexSection3.svg",
                smallBg: "mobileIndexSection3.svg",
                animatedBg: "indexSection3.svg",
                className: "aspect-[375/1233] md:aspect-[1600/1410]",
                children: [
                  (0, l.jsx)(C, {
                    className:
                      "absolute w-full max-w-[86.8%] h-[25%] mt-[44%] md:max-w-[21%] md:h-[29.2%] md:mt-[55.8%] md:ml-[4%]",
                  }),
                  (0, l.jsx)(S, {
                    className:
                      "w-full max-w-[60%] h-[43.5%] mt-[174.8%] ml-[20%] md:max-w-[47.5%] md:h-[19%] md:mt-[62.6%] md:ml-[46.5%]",
                  }),
                ],
              }),
            ],
          });
        },
        k = (e) => {
          let { className: t } = e,
            s = (0, x.useTranslations)("Home"),
            a = (0, x.useTranslations)("Common");
          return (0, l.jsxs)("div", {
            className: o()(
              "flex flex-col gap-2 items-center justify-center text-center px-4 md:gap-10 md:px-0 xl:gap-20",
              t
            ),
            children: [
              (0, l.jsx)("span", {
                className: "text-xs text-pt-purple-100 lg:text-sm",
                children: s("whyPrizeSavings"),
              }),
              (0, l.jsxs)("div", {
                className:
                  "flex flex-col items-center gap-2 mb-8 text-pt-purple-100 md:mb-0",
                children: [
                  (0, l.jsx)("span", {
                    className:
                      "font-averta font-bold text-[2rem] !leading-tight md:text-2xl md:!leading-normal lg:text-[2rem] xl:text-[2.5rem]",
                    children: s.rich("theMission", u.e),
                  }),
                  (0, l.jsx)("span", {
                    className:
                      "text-base md:w-3/4 md:text-sm lg:text-lg xl:text-xl",
                    children: s("provenTool"),
                  }),
                ],
              }),
              (0, l.jsx)(i.zx, {
                href: "https://medium.com/DropTogether/the-power-of-no-loss-prize-savings-1f006503f64",
                children: (0, l.jsx)("span", {
                  className:
                    "text-base px-[.4em] py-[.2em] md:text-sm lg:text-base",
                  children: a("readMore"),
                }),
              }),
            ],
          });
        },
        C = (e) => {
          let { className: t } = e,
            s = (0, x.useTranslations)("Home");
          return (0, l.jsxs)("div", {
            className: o()(
              "flex flex-col gap-2 justify-center p-4 text-pt-purple-100 md:gap-4 md:p-0",
              t
            ),
            children: [
              (0, l.jsx)("span", {
                className: "text-xs xl:text-sm",
                children: s("forDevelopers"),
              }),
              (0, l.jsx)("span", {
                className:
                  "font-averta font-bold text-[2rem] !leading-tight text-pt-purple-50 md:text-2xl lg:text-[2rem] xl:text-[2.5rem]",
                children: s("buildOnPt"),
              }),
              (0, l.jsx)("span", {
                className: "text-base md:text-sm lg:text-base xl:text-xl",
                children: s("organicUsage"),
              }),
            ],
          });
        },
        S = (e) => {
          let { className: t } = e;
          return (0, l.jsxs)("div", {
            className: o()(
              "flex flex-col gap-12 justify-between md:grid md:grid-cols-2 md:gap-4",
              t
            ),
            children: [
              (0, l.jsx)(w, {
                type: "devDocs",
                className: "max-w-xs md:ml-auto",
              }),
              (0, l.jsx)(w, { type: "addVault", className: "max-w-xs" }),
            ],
          });
        };
      var T = s(3654);
      let A = (e) => {
          let { type: t, className: s } = e,
            a = (0, x.useTranslations)("Home"),
            n = {
              deposit: {
                src: "/graphics/DepositGraphic.svg",
                title: a("depositCardTitle"),
                description: a("depositCardDescription"),
              },
              winPrizes: {
                src: "/graphics/WinPrizesGraphic.svg",
                title: a("winPrizesCardTitle"),
                description: a("winPrizesCardDescription"),
              },
              noLoss: {
                src: "/graphics/NoLossGraphic.svg",
                title: a("noLossCardTitle"),
                description: a("noLossCardDescription"),
              },
            },
            r = n[t];
          return (0, l.jsxs)("div", {
            className: o()("flex flex-col gap-6 md:gap-4 lg:gap-6", s),
            children: [
              (0, l.jsx)("div", {
                className:
                  "w-full bg-pt-bg-purple-darker rounded-2xl md:rounded-3xl",
                children: (0, l.jsx)("object", {
                  type: "image/svg+xml",
                  data: r.src,
                  className: "w-full",
                }),
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-1 text-center md:gap-2",
                children: [
                  (0, l.jsx)("span", {
                    className:
                      "font-averta font-bold text-2xl text-pt-purple-100 md:text-lg lg:text-2xl xl:text-[2rem]",
                    children: r.title,
                  }),
                  (0, l.jsx)("span", {
                    className:
                      "min-h-[48px] text-base text-gray-100 md:min-h-[32px] md:text-xs lg:min-h-[40px] lg:text-sm xl:min-h-[48px] xl:text-base",
                    children: r.description,
                  }),
                ],
              }),
            ],
          });
        },
        B = (e) => {
          let { className: t } = e,
            s = (0, x.useTranslations)("Home");
          return (0, l.jsxs)(d.$, {
            bg: "indexSection2.svg",
            smallBg: "mobileIndexSection2.svg",
            animatedBg: "indexSection2.svg",
            className: o()("aspect-[375/1408] md:aspect-[1600/1059]", t),
            children: [
              (0, l.jsx)(T.C, {
                title: s.rich("savingAndWinning", u.e),
                className:
                  "w-full h-[24.9%] px-10 md:h-[24.6%] md:mt-[2%] md:px-0",
                titleClassName: "!my-auto text-[2rem]",
              }),
              (0, l.jsx)(P, {
                className:
                  "w-full h-[69.5%] md:max-w-[77%] md:h-[59%] md:mt-0 md:mx-auto",
              }),
            ],
          });
        },
        P = (e) => {
          let { className: t } = e;
          return (0, l.jsxs)("div", {
            className: o()(
              "flex flex-col items-center justify-evenly md:flex-row md:justify-between",
              t
            ),
            children: [
              (0, l.jsx)(A, {
                type: "deposit",
                className: "max-w-[60%] md:grow md:max-w-[30%]",
              }),
              (0, l.jsx)(A, {
                type: "winPrizes",
                className: "max-w-[60%] md:grow md:max-w-[30%]",
              }),
              (0, l.jsx)(A, {
                type: "noLoss",
                className: "max-w-[60%] md:grow md:max-w-[30%]",
              }),
            ],
          });
        },
        D = (e) => {
          let { className: t } = e,
            s = (0, x.useTranslations)("Home"),
            { totalPrizes: a, tvl: n, uniqueWallets: r } = g();
          return (0, l.jsxs)("section", {
            className: o()(
              "relative w-full max-w-[1440px] grid grid-cols-2 gap-6 items-center justify-between px-4 py-12",
              "md:flex md:mt-20 md:mb-10 md:px-0 md:py-0 xl:max-w-[75%]",
              t
            ),
            children: [
              (0, l.jsx)(_, { title: s("totalPrizesAwarded"), value: a }),
              (0, l.jsx)(_, { title: s("savedWithPt"), value: n }),
              (0, l.jsx)(_, {
                title: s("uniqueWallets"),
                value: "".concat(r, "+"),
              }),
              (0, l.jsx)(_, { title: s("lossesEver"), value: "0" }),
            ],
          });
        },
        _ = (e) => {
          let { title: t, value: s } = e;
          return (0, l.jsxs)("div", {
            className:
              "flex flex-col grow items-center text-pt-purple-100 md:w-0",
            children: [
              (0, l.jsx)("span", {
                className:
                  "text-lg font-averta font-bold md:text-xl lg:text-2xl xl:text-3xl",
                children: (0, l.jsx)(l.Fragment, { children: s }),
              }),
              (0, l.jsx)("span", {
                className:
                  "text-center text-[13px] md:text-xs lg:text-sm xl:text-base",
                children: t,
              }),
            ],
          });
        };
      var z = s(6163),
        L = !0;
      function E(e) {
        let { protocolStats: t } = e;
        return (
          (0, a.Pu)([[r, t]]),
          (0, l.jsxs)(z.A, {
            children: [
              (0, l.jsx)(j, { className: "md:mt-20" }),
              (0, l.jsx)(D, {}),
              (0, l.jsx)(B, {}),
              (0, l.jsx)(y, {}),
              (0, l.jsx)(p, { className: "mt-[35%] md:mt-0" }),
            ],
          })
        );
      }
    },
    600: function (e, t, s) {
      "use strict";
      s.d(t, {
        M: function () {
          return i;
        },
      });
      var l = s(1527),
        a = s(4444),
        n = s(9902),
        r = s(2826),
        c = s(959);
      let i = (e) => {
          let {
              hCaptchaSiteKey: t,
              header: s,
              onVerify: a,
              isOnPageContent: c,
            } = e,
            { isModalOpen: i, setIsModalOpen: d } = (0, n.EV)(n.fm.captcha),
            p = () => {
              d(!1);
            };
          return c && t
            ? (0, l.jsxs)("div", {
                className: "flex flex-col gap-6 items-center justify-center",
                children: [
                  (0, l.jsx)("span", { className: "font-medium", children: s }),
                  (0, l.jsx)(o, {
                    hCaptchaSiteKey: t,
                    handleClose: p,
                    onVerify: a,
                  }),
                  (0, l.jsx)(x, {}),
                ],
              })
            : i && t
            ? (0, l.jsx)(r.u_, {
                headerContent: (0, l.jsx)(m, { header: s }),
                bodyContent: (0, l.jsx)(o, {
                  hCaptchaSiteKey: t,
                  handleClose: p,
                  onVerify: a,
                }),
                footerContent: (0, l.jsx)(x, {}),
                onClose: p,
                label: "discord-captcha",
                mobileStyle: "tab",
                className: "md:!max-w-2xl",
                footerClassName: "flex justify-center",
              })
            : (0, l.jsx)(l.Fragment, {});
        },
        m = (e) => {
          let { header: t } = e;
          return (0, l.jsx)(l.Fragment, { children: t });
        },
        o = (e) => {
          let { hCaptchaSiteKey: t, handleClose: s, onVerify: n } = e,
            r = (0, c.useRef)(null),
            i = () => {
              console.warn("hCaptcha Token Expired"), s();
            };
          return (0, l.jsx)("div", {
            className: "flex flex-col items-center",
            children: (0, l.jsx)(a.Z, {
              sitekey: t,
              onVerify: n,
              onExpire: i,
              ref: r,
              theme: "dark",
            }),
          });
        },
        x = () =>
          (0, l.jsxs)("span", {
            className: "text-center text-xs opacity-70",
            children: [
              "This site is protected by hCaptcha and its",
              " ",
              (0, l.jsx)(r.dL, {
                href: "https://hcaptcha.com/privacy",
                text: "Privacy Policy",
                className: "text-xs text-pt-teal",
              }),
              " ",
              "and",
              " ",
              (0, l.jsx)(r.dL, {
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
    e.O(0, [250, 3, 774, 888, 179], function () {
      return e((e.s = 5766));
    }),
      (_N_E = e.O());
  },
]);
