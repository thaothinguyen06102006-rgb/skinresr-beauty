import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Beaker, a as Search, c as Menu, d as Leaf, f as House, h as ChevronRight, n as Sprout, o as Play, p as Earth, r as Sparkles, t as X, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as StoreFooter } from "./storefront-rD6pkOmu.mjs";
import { t as about_skincare_default } from "./about-skincare-BBT9b5Gl.mjs";
import { n as product_repair_cream_default, t as product_cleansing_foam_default } from "./product-repair-cream-BdXXzfSJ.mjs";
import { n as product_portulaca_mask_default, r as product_sunscreen_default, t as product_ampoule_default } from "./product-sunscreen-Dv4Nf48W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ca-fqq71.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var new_arrival_caryophy_default = "/assets/new-arrival-caryophy-BNQUcUjZ.jpg";
var categories = [
	{
		name: "Sữa rửa mặt",
		image: product_cleansing_foam_default
	},
	{
		name: "Tinh chất",
		image: product_ampoule_default
	},
	{
		name: "Kem dưỡng ẩm",
		image: product_repair_cream_default
	},
	{
		name: "Kem chống nắng",
		image: product_sunscreen_default
	},
	{
		name: "Mặt nạ",
		image: product_portulaca_mask_default
	}
];
function Index() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [videoOpen, setVideoOpen] = (0, import_react.useState)(false);
	const storyRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const section = storyRef.current;
		if (!section) return;
		if (!("IntersectionObserver" in window)) {
			section.classList.add("is-visible");
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				section.classList.add("is-visible");
				observer.disconnect();
			}
		}, { threshold: .18 });
		observer.observe(section);
		return () => observer.disconnect();
	}, []);
	const exploreProducts = () => document.querySelector("#categories")?.scrollIntoView({ behavior: "smooth" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero-shell",
			id: "home",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_skincare_default,
					width: 1536,
					height: 1024,
					alt: "Nước hoa hồng rau má trên bệ đá",
					className: "hero-image"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-wash" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "site-header",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#home",
							className: "brand",
							"aria-label": "Trang chủ SKINREST-BEAUTY",
							children: "SKINREST-BEAUTY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "desktop-nav",
							"aria-label": "Điều hướng chính",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "home-link",
									href: "#home",
									"aria-label": "Trang chủ",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 17 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "active",
									to: "/",
									children: "Trang chủ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									children: "Danh mục"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/collections",
									children: "Bộ sưu tập"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									children: "Giới thiệu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Liên hệ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "header-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "icon-button search-button",
								onClick: () => setSearchOpen((value) => !value),
								"aria-label": "Tìm trong danh mục",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "icon-button mobile-menu-button",
								onClick: () => setMenuOpen((value) => !value),
								"aria-label": "Bật/Tắt menu",
								children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 24 })
							})]
						}),
						searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "search-panel",
							onSubmit: (event) => {
								event.preventDefault();
								shopNow();
								setSearchOpen(false);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									autoFocus: true,
									"aria-label": "Tìm trong danh mục",
									placeholder: "Tìm trong danh mục..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									children: "Tìm kiếm"
								})
							]
						}),
						menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "mobile-nav",
							"aria-label": "Điều hướng di động",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									onClick: () => setMenuOpen(false),
									children: "Trang chủ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									onClick: () => setMenuOpen(false),
									children: "Danh mục"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/collections",
									onClick: () => setMenuOpen(false),
									children: "Bộ sưu tập"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									onClick: () => setMenuOpen(false),
									children: "Giới thiệu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									onClick: () => setMenuOpen(false),
									children: "Liên hệ"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "SKINREST-BEAUTY · GÓC THAM KHẢO CÁ NHÂN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							"Tìm hiểu.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Chăm sóc.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Chọn điều phù hợp." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "intro",
							children: [
								"Mình tổng hợp thông tin về sản phẩm chăm sóc da",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"để bạn tiện tham khảo."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "primary-button",
								onClick: exploreProducts,
								children: ["XEM DANH MỤC ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "video-button",
								onClick: () => setVideoOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
									size: 17,
									fill: "currentColor"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["Ghé thăm bộ sưu tập", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Tìm hiểu sản phẩm" })] })]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "benefit-strip",
					children: [
						{
							icon: Leaf,
							title: "Sản phẩm",
							subtitle: "được giới thiệu"
						},
						{
							icon: Beaker,
							title: "Thành phần",
							subtitle: "thông tin tham khảo"
						},
						{
							icon: Sparkles,
							title: "Chăm sóc",
							subtitle: "da hằng ngày"
						},
						{
							icon: Earth,
							title: "Mục đích",
							subtitle: "giới thiệu thông tin"
						}
					].map(({ icon: Icon, title, subtitle }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "benefit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 20 }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: subtitle })] })]
					}, title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "shop-section",
			id: "categories",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Danh Mục Sản Phẩm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => window.alert("Các danh mục sản phẩm được hiển thị bên dưới."),
					children: ["Xem Các Danh Mục ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "category-grid",
				children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "category-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: category.image,
						width: 768,
						height: 960,
						loading: "lazy",
						alt: `${category.name} chăm sóc da thảo mộc`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: category.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						children: ["Tìm hiểu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})] })]
				}, category.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "arrival-section",
			id: "arrival",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: new_arrival_caryophy_default,
				width: 1536,
				height: 640,
				loading: "lazy",
				alt: "Bộ sưu tập kem dưỡng và tinh chất thảo mộc mới"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "arrival-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "GÓC THAM KHẢO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Tìm Hiểu.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Chăm Sóc Dịu Nhẹ." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Khám phá thông tin về các sản phẩm và thành phần chăm sóc da." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "primary-button",
						to: "/about",
						children: ["VỀ MÌNH ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "caryophy-story",
			id: "story",
			ref: storyRef,
			"aria-labelledby": "caryophy-story-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "caryophy-story__botanical caryophy-story__botanical--left",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "caryophy-story__sprout" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "caryophy-story__leaf caryophy-story__leaf--one" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "caryophy-story__leaf caryophy-story__leaf--two" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "caryophy-story__botanical caryophy-story__botanical--right",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "caryophy-story__sprout" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "caryophy-story__leaf caryophy-story__leaf--one" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "caryophy-story__leaf caryophy-story__leaf--two" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "caryophy-story__content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "caryophy-story__eyebrow",
							children: "MỘT HÀNH TRÌNH CHĂM SÓC LÀN DA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "caryophy-story-title",
							children: "SKINREST BEAUTY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "caryophy-story__divider",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
									size: 19,
									strokeWidth: 1.25
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Khám phá vẻ đẹp từ thiên nhiên cùng Caryophy" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "caryophy-story__description",
							children: "Caryophy là thương hiệu mỹ phẩm chăm sóc da đến từ Hàn Quốc, thành lập năm 2012, với các sản phẩm hướng đến chăm sóc, làm dịu và hỗ trợ cải thiện làn da mụn. Thương hiệu chú trọng các thành phần có nguồn gốc thực vật, mang đến giải pháp chăm sóc da nhẹ nhàng, phù hợp với nhu cầu của người tiêu dùng."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							className: "caryophy-story__cta",
							to: "/about",
							children: ["KHÁM PHÁ THƯƠNG HIỆU ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "caryophy-story__footer-rule",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
									size: 16,
									strokeWidth: 1.2
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
							]
						})
					]
				})
			]
		}),
		videoOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-backdrop",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Phim về bộ sưu tập",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "modal-close",
				onClick: () => setVideoOpen(false),
				"aria-label": "Đóng video",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "film-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { size: 52 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Tìm hiểu về sản phẩm" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thông tin tham khảo về các danh mục chăm sóc da." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "primary-button",
						onClick: () => {
							setVideoOpen(false);
							exploreProducts();
						},
						children: "XEM DANH MỤC"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreFooter, {})
	] });
}
//#endregion
export { Index as component };
