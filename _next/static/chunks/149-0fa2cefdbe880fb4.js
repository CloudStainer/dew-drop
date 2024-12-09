"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [149],
  {
    6163: function (e, t, s) {
      s.d(t, {
        A: function () {
          return b;
        },
      });
      var a = s(1527),
        n = s(9902),
        r = s(600),
        l = s(2826),
        c = s(8518),
        o = s(4875),
        i = s.n(o),
        m = s(2533),
        x = s(3886),
        p = s(7666),
        d = s.n(p),
        h = s(8823),
        u = s.n(h),
        f = s(4598),
        g = s.n(f),
        j = s(1689),
        N = s(959);
      let b = (e) => {
          let { children: t, hideNavbar: s, hideFooter: o, className: p } = e,
            h = (0, j.useRouter)(),
            u = (0, x.useTranslations)("Common"),
            f = (0, x.useTranslations)("Navigation"),
            b = (0, x.useTranslations)("Footer"),
            { setIsModalOpen: v } = (0, n.EV)(n.fm.captcha),
            { isMobile: w } = (0, n.eI)(),
            y = (0, m.J)(),
            [C, A] = (0, N.useState)(0),
            B = () => {
              A(window.scrollY);
            },
            S = (e) => {
              let { pathname: t, query: s, asPath: a } = h;
              h.push({ pathname: t, query: s }, a, { locale: e });
            };
          (0, N.useEffect)(
            () => (
              window.addEventListener("scroll", B),
              () => window.removeEventListener("scroll", B)
            ),
            []
          );
          let E = [
              { href: "https://drop-together-help.vercel.app/", name: f("help") },
              { href: "https://drop-together-ecosystem.vercel.app/", name: f("ecosystem") },
              { href: "https://drop-together-community.vercel.app/", name: f("community") },
              { href: "https://drop-together-builder.vercel.app/", name: f("builders") },
            ],
            T = [
              {
                title: b("audits"),
                content: [
                  {
                    content: (0, a.jsx)(k, {
                      svgSrc: "/graphics/c4Logo.svg",
                      altText: "CodeArena Audits",
                    }),
                  },
                  {
                    content: (0, a.jsx)(k, {
                      svgSrc: "/graphics/macroLogo.svg",
                      altText: "0xMacro Audits",
                    }),
                  },
                  {
                    content: (0, a.jsx)(k, {
                      svgSrc: "/graphics/ozLogo.svg",
                      altText: "OpenZeppelin Audits",
                    }),
                  },
                ],
                className: "min-w-min xl:pr-20",
                titleClassName: "whitespace-nowrap lg:text-right",
              },
              {
                title: b("ecosystem"),
                content: [
                  { content: b("devDocs"), href: l.BA.devDocs },
                  { content: b("security"), href: l.BA.audits },
                  { content: b("faq"), href: l.BA.faq },
                  { content: b("brandAssets"), href: l.BA.brandKit },
                  { content: b("governance"), href: l.BA.governance },
                  { content: b("userDocs"), href: l.BA.docs },
                  {
                    content: b("protocolDisclaimer"),
                    href: "/protocol-disclaimer",
                  },
                  { content: b("termsOfService"), href: "/terms" },
                ],
              },
              {
                title: b("community"),
                content: [
                  {
                    content: "Lens",
                    href: l.BA.lens,
                    icon: (0, a.jsx)(l.QZ, {
                      platform: "lens",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Farcaster",
                    href: l.BA.farcaster,
                    icon: (0, a.jsx)(l.QZ, {
                      platform: "farcaster",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Twitter",
                    href: l.BA.twitter,
                    icon: (0, a.jsx)(l.QZ, {
                      platform: "twitter",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Discord",
                    onClick: () => v(!0),
                    icon: (0, a.jsx)(l.QZ, {
                      platform: "discord",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "GitHub",
                    href: l.BA.github,
                    icon: (0, a.jsx)(l.QZ, {
                      platform: "github",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Medium",
                    href: l.BA.medium,
                    icon: (0, a.jsx)(l.QZ, {
                      platform: "medium",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                  {
                    content: "Mirror",
                    href: l.BA.mirror,
                    icon: (0, a.jsx)(l.QZ, {
                      platform: "mirror",
                      className: "w-6 h-auto shrink-0",
                    }),
                  },
                ],
              },
            ],
            F = {
              "https://drop-together-help.vercel.app/": f("help"),
              "https://drop-together-ecosystem.vercel.app/": f("ecosystem"),
              "https://drop-together-community.vercel.app/": f("community"),
              "https://drop-together-builder.vercel.app/": f("builders"),
              "/terms": b("termsOfService"),
              "/protocol-disclaimer": b("protocolDisclaimer"),
            },
            Z = F[h.pathname],
            D = "/" === h.pathname || "/ecosystem" === h.pathname;
          return (0, a.jsxs)("div", {
            className: "flex flex-col min-h-screen",
            children: [
              (0, a.jsx)(d(), {
                children: (0, a.jsx)("title", {
                  children: "DropTogether".concat(Z ? " | ".concat(Z) : ""),
                }),
              }),
              !s &&
                (0, a.jsx)(l.wp, {
                  links: E,
                  activePage: h.pathname,
                  linksAs: g(),
                  append: (0, a.jsx)(g(), {
                    href: "https://drop-together-use.vercel.app/",
                    passHref: !0,
                    children: (0, a.jsx)(l.zx, {
                      children: (0, a.jsx)("span", {
                        className: "text-sm md:px-5 md:text-base",
                        children: f("usePt"),
                      }),
                    }),
                  }),
                  onClickBrand: () => h.push("/"),
                  sticky: !w,
                  className: i()(
                    "!px-4 !py-3 bg-transparent !border-opacity-0 sm:!px-8 md:shadow-2xl",
                    {
                      "transition-all": !y,
                      "!shadow-transparent md:!py-8": 0 === C,
                      "md:!py-4 md:bg-pt-bg-purple-darker md:!border-opacity-100":
                        C > 0,
                    }
                  ),
                  linkClassName:
                    "text-xs sm:text-sm md:text-base text-pt-purple-100 hover:text-pt-purple-300",
                  mobileBottomClassName: "!gap-4 sm:!gap-6",
                }),
              (0, a.jsx)(r.M, {
                hCaptchaSiteKey: "11cdabde-af7e-42cb-ba97-76e35b7f7c39",
                header: u("joinDiscord"),
                onVerify: c.hh,
              }),
              (0, a.jsx)("main", {
                className: i()(
                  "relative w-full max-w-[1920px] flex flex-col grow items-center mx-auto shadow-2xl",
                  p
                ),
                children: (0, a.jsx)(a.Fragment, { children: t }),
              }),
              !o &&
                (0, a.jsx)(l.$_, {
                  items: T,
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
        k = (e) => {
          let { svgSrc: t, altText: s } = e;
          return (0, a.jsx)("a", {
            href: l.BA.audits,
            target: "_blank",
            className: "relative flex flex-col",
            children: (0, a.jsx)(u(), {
              src: t,
              alt: s,
              fill: !0,
              className: "!relative",
            }),
          });
        };
    },
    6690: function (e, t, s) {
      s.d(t, {
        $: function () {
          return d;
        },
      });
      var a = s(1527),
        n = s(4875),
        r = s.n(n),
        l = s(2533),
        c = s(8823),
        o = s.n(c),
        i = s(959);
      let m = (e) => {
          let { bg: t, smallBg: s, animatedBg: n, animatedSmallBg: c } = e,
            [o, m] = (0, i.useState)(!1),
            d = (0, l.J)();
          (0, i.useEffect)(() => {
            d && m(!0);
          }, []);
          let h = !!n && !o,
            u = !!c && !o,
            f = "/backgrounds/animated/".concat(n),
            g = "/backgrounds/animated/".concat(c),
            j = "absolute w-full -z-10",
            N = "hidden md:block",
            b = "md:hidden";
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(x, {
                src: h ? f : "/backgrounds/static/".concat(t),
                className: r()(j, N),
              }),
              (0, a.jsx)(x, {
                src: u ? g : "/backgrounds/static/".concat(s),
                className: r()(j, b),
                isSmall: !0,
              }),
              h && (0, a.jsx)(p, { src: f, className: r()(j, N, "-z-[5]") }),
              u && (0, a.jsx)(p, { src: g, className: r()(j, b, "-z-[5]") }),
            ],
          });
        },
        x = (e) => {
          let { src: t, isSmall: s, className: n } = e;
          return (0, a.jsx)(o(), {
            src: t,
            width: s ? 375 : 1920,
            height: s ? 667 : 1080,
            alt: "Static BG",
            className: n,
            priority: !0,
          });
        },
        p = (e) => {
          let { src: t, className: s } = e;
          return (0, a.jsx)("object", {
            type: "image/svg+xml",
            data: t,
            className: s,
          });
        },
        d = (e) => {
          let { children: t, className: s, ...n } = e;
          return (0, a.jsxs)("section", {
            className: r()("relative w-full flex flex-col isolate", s),
            children: [(0, a.jsx)(m, { ...n }), t],
          });
        };
    },
    6945: function (e, t, s) {
      s.d(t, {
        s: function () {
          return o;
        },
      });
      var a = s(1527),
        n = s(4875),
        r = s.n(n),
        l = s(8823),
        c = s.n(l);
      let o = (e) => {
          let { href: t, onClick: s, className: n, ...l } = e,
            c =
              "flex flex-col gap-3 p-8 bg-pt-bg-purple-darker text-pt-purple-100 rounded-2xl hover:shadow-lg md:gap-3 md:p-4 lg:gap- lg:p-8 xl:p-10 2xl:p-12",
            o =
              "outline outline-2 -outline-offset-2 outline-transparent hover:outline-pt-purple-100/20";
          return t
            ? (0, a.jsx)("a", {
                href: t,
                target: "_blank",
                className: r()(c, o, n),
                children: (0, a.jsx)(i, { ...l }),
              })
            : (0, a.jsx)("div", {
                onClick: s,
                className: r()(c, o, "cursor-pointer", n),
                children: (0, a.jsx)(i, { ...l }),
              });
        },
        i = (e) => {
          let { iconSrc: t, title: s, description: n } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex gap-2 items-center md:gap-2 lg:gap-3",
                children: [
                  (0, a.jsx)(c(), {
                    src: t,
                    width: 32,
                    height: 32,
                    alt: s,
                    className: "w-6 h-auto text-pt-teal-dark xl:w-9",
                  }),
                  (0, a.jsx)("span", {
                    className: "text-xl md:text-sm lg:text-base xl:text-xl",
                    children: s,
                  }),
                ],
              }),
              (0, a.jsx)("span", {
                className: "text-sm md:text-xs lg:text-sm xl:text-base",
                children: n,
              }),
            ],
          });
        };
    },
    3654: function (e, t, s) {
      s.d(t, {
        C: function () {
          return l;
        },
      });
      var a = s(1527),
        n = s(4875),
        r = s.n(n);
      let l = (e) => {
        let {
          title: t,
          description: s,
          className: n,
          titleClassName: l,
          descriptionClassName: c,
        } = e;
        return (0, a.jsxs)("div", {
          className: r()(
            "flex flex-col items-center text-center px-4 text-pt-purple-50 md:px-0",
            n
          ),
          children: [
            (0, a.jsx)("span", {
              className: r()(
                "mb-1 font-averta font-bold text-2xl !leading-normal md:text-2xl lg:text-[2rem] xl:text-[2.5rem]",
                l
              ),
              children: (0, a.jsx)(a.Fragment, { children: t }),
            }),
            (0, a.jsx)("span", {
              className: r()("text-sm xl:text-base", c),
              children: (0, a.jsx)(a.Fragment, { children: s }),
            }),
          ],
        });
      };
    },
    1517: function (e, t, s) {
      s.d(t, {
        e: function () {
          return n;
        },
      });
      var a = s(1527);
      let n = {
        "purple-400": (e) =>
          (0, a.jsx)("span", { className: "text-pt-purple-400", children: e }),
        teal: (e) =>
          (0, a.jsx)("span", { className: "text-pt-teal", children: e }),
      };
    },
    600: function (e, t, s) {
      s.d(t, {
        M: function () {
          return o;
        },
      });
      var a = s(1527),
        n = s(4444),
        r = s(9902),
        l = s(2826),
        c = s(959);
      let o = (e) => {
          let {
              hCaptchaSiteKey: t,
              header: s,
              onVerify: n,
              isOnPageContent: c,
            } = e,
            { isModalOpen: o, setIsModalOpen: p } = (0, r.EV)(r.fm.captcha),
            d = () => {
              p(!1);
            };
          return c && t
            ? (0, a.jsxs)("div", {
                className: "flex flex-col gap-6 items-center justify-center",
                children: [
                  (0, a.jsx)("span", { className: "font-medium", children: s }),
                  (0, a.jsx)(m, {
                    hCaptchaSiteKey: t,
                    handleClose: d,
                    onVerify: n,
                  }),
                  (0, a.jsx)(x, {}),
                ],
              })
            : o && t
            ? (0, a.jsx)(l.u_, {
                headerContent: (0, a.jsx)(i, { header: s }),
                bodyContent: (0, a.jsx)(m, {
                  hCaptchaSiteKey: t,
                  handleClose: d,
                  onVerify: n,
                }),
                footerContent: (0, a.jsx)(x, {}),
                onClose: d,
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
        m = (e) => {
          let { hCaptchaSiteKey: t, handleClose: s, onVerify: r } = e,
            l = (0, c.useRef)(null),
            o = () => {
              console.warn("hCaptcha Token Expired"), s();
            };
          return (0, a.jsx)("div", {
            className: "flex flex-col items-center",
            children: (0, a.jsx)(n.Z, {
              sitekey: t,
              onVerify: r,
              onExpire: o,
              ref: l,
              theme: "dark",
            }),
          });
        },
        x = () =>
          (0, a.jsxs)("span", {
            className: "text-center text-xs opacity-70",
            children: [
              "This site is protected by hCaptcha and its",
              " ",
              (0, a.jsx)(l.dL, {
                href: "https://hcaptcha.com/privacy",
                text: "Privacy Policy",
                className: "text-xs text-pt-teal",
              }),
              " ",
              "and",
              " ",
              (0, a.jsx)(l.dL, {
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
]);
