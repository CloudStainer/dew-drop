"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [564],
  {
    2966: function (e, t, s) {
      s.d(t, {
        e: function () {
          return m;
        },
      });
      var a = s(1527),
        n = s(5137),
        r = s(4875),
        l = s.n(r),
        c = s(3886),
        o = s(8823),
        i = s.n(o);
      let m = (e) => {
        var t;
        let {
            href: s,
            iconSrc: r,
            title: o,
            author: m,
            tags: x,
            description: p,
            className: d,
          } = e,
          h = (0, c.useTranslations)("Common"),
          u = (0, c.useTranslations)("Tags"),
          f =
            null ===
              (t =
                /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/i.exec(
                  s
                )) || void 0 === t
              ? void 0
              : t[1];
        return (0, a.jsxs)("a", {
          href: s,
          target: "_blank",
          className: l()(
            "flex flex-col gap-3 p-6 bg-[#8247E5]/30 rounded-2xl",
            "outline outline-2 -outline-offset-2 outline-transparent hover:outline-pt-purple-100/20 hover:shadow-lg",
            "md:gap-4",
            "bg-[radial-gradient(farthest-corner_at_0%_5%,_#440BA0B3_0%,_#5820CFB3_100%),_radial-gradient(farthest-corner_at_0%_0%,_#634E90_50%,_#36147D_100%)]",
            d
          ),
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex gap-2 items-center md:flex-col md:gap-0 md:items-start",
              children: [
                (0, a.jsx)(i(), {
                  src: r,
                  width: 48,
                  height: 48,
                  alt: o,
                  className: "h-12 w-auto",
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, a.jsx)("span", {
                      className: "text-base text-pt-purple-50 md:text-xl",
                      children: o,
                    }),
                    (0, a.jsx)("span", {
                      className: "text-xs text-pt-purple-300",
                      children: h("author", { author: m }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "flex gap-2 items-center",
              children: x.map((e, t) =>
                (0, a.jsx)(
                  "span",
                  {
                    className:
                      "px-3 py-1 text-xs font-medium bg-pt-transparent text-pt-purple-100 rounded-lg",
                    children: u(e),
                  },
                  ""
                    .concat(o.toLowerCase().replace(" ", "-"), "-card-tag-")
                    .concat(t)
                )
              ),
            }),
            (0, a.jsx)("span", {
              className:
                "min-h-[32px] text-xs text-pt-purple-100 line-clamp-2 md:min-h-[48px] md:text-base",
              children: p,
            }),
            (0, a.jsxs)("div", {
              className:
                "flex gap-2 items-center ml-auto text-pt-purple-300 whitespace-nowrap",
              children: [
                (0, a.jsx)("span", {
                  className: "text-base",
                  children: h("openURL", { url: f }),
                }),
                (0, a.jsx)(n, { className: "w-4 h-auto" }),
              ],
            }),
          ],
        });
      };
    },
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
        j = s.n(f),
        g = s(1689),
        N = s(959);
      let b = (e) => {
          let { children: t, hideNavbar: s, hideFooter: o, className: p } = e,
            h = (0, g.useRouter)(),
            u = (0, x.useTranslations)("Common"),
            f = (0, x.useTranslations)("Navigation"),
            b = (0, x.useTranslations)("Footer"),
            { setIsModalOpen: w } = (0, n.EV)(n.fm.captcha),
            { isMobile: k } = (0, n.eI)(),
            y = (0, m.J)(),
            [C, _] = (0, N.useState)(0),
            A = () => {
              _(window.scrollY);
            },
            B = (e) => {
              let { pathname: t, query: s, asPath: a } = h;
              h.push({ pathname: t, query: s }, a, { locale: e });
            };
          (0, N.useEffect)(
            () => (
              window.addEventListener("scroll", A),
              () => window.removeEventListener("scroll", A)
            ),
            []
          );
          let T = [
              { href: "/help", name: f("help") },
              { href: "/ecosystem", name: f("ecosystem") },
              { href: "/community", name: f("community") },
              { href: "/builders", name: f("builders") },
            ],
            E = [
              {
                title: b("audits"),
                content: [
                  {
                    content: (0, a.jsx)(v, {
                      svgSrc: "/graphics/c4Logo.svg",
                      altText: "CodeArena Audits",
                    }),
                  },
                  {
                    content: (0, a.jsx)(v, {
                      svgSrc: "/graphics/macroLogo.svg",
                      altText: "0xMacro Audits",
                    }),
                  },
                  {
                    content: (0, a.jsx)(v, {
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
                    onClick: () => w(!0),
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
              {
                title: b("languages"),
                content: [
                  { content: "English", onClick: () => B("en") },
                  { content: "Espa\xf1ol", onClick: () => B("es") },
                  { content: "Deutsch", onClick: () => B("de") },
                  { content: "Fran\xe7ais", onClick: () => B("fr") },
                  { content: "हिन्दी", onClick: () => B("hi") },
                  { content: "한국어", onClick: () => B("ko") },
                  { content: "Portugu\xeas", onClick: () => B("pt") },
                  { content: "T\xfcrk\xe7e", onClick: () => B("tr") },
                  { content: "中文", onClick: () => B("zh") },
                  { content: "Русский", onClick: () => B("ru") },
                  { content: "Filipino", onClick: () => B("fil") },
                ],
              },
            ],
            S = {
              "/help": f("help"),
              "/ecosystem": f("ecosystem"),
              "/community": f("community"),
              "/builders": f("builders"),
              "/terms": b("termsOfService"),
              "/protocol-disclaimer": b("protocolDisclaimer"),
            },
            F = S[h.pathname],
            L = "/" === h.pathname || "/ecosystem" === h.pathname;
          return (0, a.jsxs)("div", {
            className: "flex flex-col min-h-screen",
            children: [
              (0, a.jsx)(d(), {
                children: (0, a.jsx)("title", {
                  children: "PoolTogether".concat(F ? " | ".concat(F) : ""),
                }),
              }),
              !s &&
                (0, a.jsx)(l.wp, {
                  links: T,
                  activePage: h.pathname,
                  linksAs: j(),
                  append: (0, a.jsx)(j(), {
                    href: "/interfaces",
                    passHref: !0,
                    children: (0, a.jsx)(l.zx, {
                      children: (0, a.jsx)("span", {
                        className: "text-sm md:px-5 md:text-base",
                        children: f("usePt"),
                      }),
                    }),
                  }),
                  onClickBrand: () => h.push("/"),
                  sticky: !k,
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
                  items: E,
                  className: i()({
                    "bg-pt-bg-purple-darker": L,
                    "bg-pt-purple-800": !L,
                  }),
                  containerClassName: "max-w-[1440px]",
                  titleClassName: "text-pt-purple-400",
                }),
            ],
          });
        },
        v = (e) => {
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
            j = "/backgrounds/animated/".concat(c),
            g = "absolute w-full -z-10",
            N = "hidden md:block",
            b = "md:hidden";
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(x, {
                src: h ? f : "/backgrounds/static/".concat(t),
                className: r()(g, N),
              }),
              (0, a.jsx)(x, {
                src: u ? j : "/backgrounds/static/".concat(s),
                className: r()(g, b),
                isSmall: !0,
              }),
              h && (0, a.jsx)(p, { src: f, className: r()(g, N, "-z-[5]") }),
              u && (0, a.jsx)(p, { src: j, className: r()(g, b, "-z-[5]") }),
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
