import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/storefront-rD6pkOmu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navigation = [
	["Danh mục", "/shop"],
	["Bộ sưu tập", "/collections"],
	["Giới thiệu", "/about"],
	["Liên hệ", "/contact"]
];
function StoreHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "store-header",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "store-header-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "store-brand",
						children: "SKINREST-BEAUTY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "store-nav",
						"aria-label": "Điều hướng chính",
						children: navigation.map(([label, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to,
							activeProps: { className: "is-active" },
							children: label
						}, to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "store-tools",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "icon-button",
							onClick: () => setSearch((value) => !value),
							"aria-label": "Tìm kiếm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 20 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "icon-button store-menu",
							onClick: () => setOpen((value) => !value),
							"aria-label": "Bật/Tắt điều hướng",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})]
					})
				]
			}),
			search && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "store-search",
				action: "/shop",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "q",
						autoFocus: true,
						placeholder: "Tìm trong danh mục...",
						"aria-label": "Tìm trong danh mục"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { children: "Tìm kiếm" })
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "store-mobile-nav",
				"aria-label": "Điều hướng di động",
				children: navigation.map(([label, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					onClick: () => setOpen(false),
					children: label
				}, to))
			})
		]
	});
}
function StoreFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "store-footer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-intro",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "store-brand",
					children: "SKINREST-BEAUTY"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Không gian tham khảo về sản phẩm và chăm sóc da." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-links",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Khám phá" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: "Danh mục sản phẩm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collections",
						children: "Bộ sưu tập"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Thông tin" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						children: "Giới thiệu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Liên hệ"
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-contact",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Liên hệ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					children: "Gửi lời nhắn"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "© 2026 SKINREST-BEAUTY." })
		]
	});
}
function StoreLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "store-main",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreFooter, {})
	] });
}
function PageHero({ eyebrow, title, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy })
		]
	});
}
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "product-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/products/$productId",
			params: { productId: product.id },
			className: "product-image-wrap",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				width: 768,
				height: 960,
				loading: "lazy",
				alt: product.name
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "product-info",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.category }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products/$productId",
					params: { productId: product.id },
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products/$productId",
					params: { productId: product.id },
					children: "Tìm hiểu thêm"
				}) })
			]
		})]
	});
}
function ProductGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "product-grid",
		children: items.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
	});
}
//#endregion
export { StoreLayout as i, ProductGrid as n, StoreFooter as r, PageHero as t };
