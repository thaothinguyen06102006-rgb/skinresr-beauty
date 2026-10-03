import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as StoreLayout, n as ProductGrid } from "./storefront-rD6pkOmu.mjs";
import { t as products } from "./products-CWSUt8KG.mjs";
import { t as Route } from "./products._productId-BoE2gTpe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._productId-B7rpizcn.js
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { productId } = Route.useParams();
	const product = products.find((item) => item.id === productId);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "empty-state route-empty",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Không tìm thấy sản phẩm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "primary-button",
			children: "QUAY LẠI DANH MỤC"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "product-detail",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "detail-image",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				width: 768,
				height: 960,
				alt: product.name
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "detail-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "back-link",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Quay lại danh mục"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.category }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: product.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.description }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ingredient-box",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Thành phần nổi bật" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.ingredients })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "buy-row",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "primary-button",
						children: "GỬI CÂU HỎI"
					})
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "related-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Sản phẩm cùng danh mục" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: products.filter((item) => item.id !== product.id).slice(0, 4) })]
	})] });
}
//#endregion
export { ProductPage as component };
