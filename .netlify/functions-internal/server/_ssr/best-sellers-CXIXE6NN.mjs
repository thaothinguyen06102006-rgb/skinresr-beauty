import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as StoreLayout, n as ProductGrid, t as PageHero } from "./storefront-rD6pkOmu.mjs";
import { t as products } from "./products-CWSUt8KG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/best-sellers-CXIXE6NN.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
	eyebrow: "DANH MỤC THAM KHẢO",
	title: "Sản phẩm tiêu biểu",
	copy: "Một số sản phẩm chăm sóc da được giới thiệu trên trang."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
	className: "catalog-section",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: products.slice(0, 4) })
})] });
//#endregion
export { SplitComponent as component };
