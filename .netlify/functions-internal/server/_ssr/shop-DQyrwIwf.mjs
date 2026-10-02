import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as StoreLayout, n as ProductGrid, t as PageHero } from "./storefront-rD6pkOmu.mjs";
import { t as products } from "./products-CWSUt8KG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DQyrwIwf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const query = typeof window === "undefined" ? "" : new URLSearchParams(window.location.search).get("q") || "";
	const [category, setCategory] = (0, import_react.useState)("Tất cả");
	const categories = ["Tất cả", ...Array.from(new Set(products.map((product) => product.category)))];
	const visible = (0, import_react.useMemo)(() => products.filter((product) => (category === "Tất cả" || product.category === category) && (!query || product.name.toLowerCase().includes(query.toLowerCase()))), [category, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "THÔNG TIN THAM KHẢO",
		title: "Danh mục sản phẩm",
		copy: "Tìm hiểu các sản phẩm chăm sóc da theo từng nhóm."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "catalog-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "filter-row",
			children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: category === item ? "is-selected" : "",
				onClick: () => setCategory(item),
				children: item
			}, item))
		}), visible.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: visible }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "empty-state",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Không tìm thấy sản phẩm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hãy thử từ khóa khác hoặc xem tất cả sản phẩm." })]
		})]
	})] });
}
//#endregion
export { ShopPage as component };
