import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as StoreLayout, t as PageHero } from "./storefront-rD6pkOmu.mjs";
import { n as product_portulaca_mask_default, r as product_sunscreen_default, t as product_ampoule_default } from "./product-sunscreen-Dv4Nf48W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections-emnQ5uG8.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "CHĂM SÓC TUYỂN CHỌN",
		title: "Bộ sưu tập",
		copy: "Xây dựng chu trình đơn giản theo đúng nhu cầu của làn da."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "collection-grid",
		children: [
			{
				name: "Nghi thức Rau Má",
				copy: "Làm dịu, củng cố và nuôi dưỡng.",
				image: product_ampoule_default
			},
			{
				name: "Bộ Sưu Tập Rạng Rỡ",
				copy: "Làm sáng bề mặt và khôi phục vẻ rạng rỡ.",
				image: product_portulaca_mask_default
			},
			{
				name: "Thiết Yếu Cho Hàng Rào Da",
				copy: "Vỗ về làn da khô và nhạy cảm.",
				image: product_sunscreen_default
			}
		].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: item.image,
			width: 768,
			height: 960,
			alt: item.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "BỘ SƯU TẬP SKINREST-BEAUTY" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: item.name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.copy }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/shop",
				children: ["Khám phá ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
			})
		] })] }, item.name))
	})] });
}
//#endregion
export { CollectionsPage as component };
