import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as MapPin, l as Mail, o as MessageCircle } from "../_libs/lucide-react.mjs";
import { i as StoreLayout, t as PageHero } from "./storefront-rD6pkOmu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B2-ORCyw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "CHÚNG TÔI LUÔN SẴN SÀNG",
		title: "Liên hệ",
		copy: "Bạn có câu hỏi về chu trình hoặc sản phẩm? Hãy gửi lời nhắn cho chúng tôi."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "contact-layout",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "contact-details",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Gửi lời nhắn" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Điền thông tin vào biểu mẫu để đặt câu hỏi." })] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Tư vấn sản phẩm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Chúng tôi sẵn sàng giải đáp thắc mắc về sản phẩm." })] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "SKINREST-BEAUTY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Chăm sóc làn da của bạn mỗi ngày." })] })] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "contact-form",
			onSubmit: (event) => {
				event.preventDefault();
				setSent(true);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Họ và tên", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					placeholder: "Tên của bạn"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "email",
					placeholder: "you@example.com"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Chủ đề", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					required: true,
					defaultValue: "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Chọn chủ đề"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Tư vấn sản phẩm" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Thắc mắc về website" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Báo chí và hợp tác" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Nội dung", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					required: true,
					rows: 5,
					placeholder: "Chúng tôi có thể giúp gì cho bạn?"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "primary-button",
					children: "GỬI TIN NHẮN"
				}),
				sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "form-success",
					children: "Đây là biểu mẫu minh họa; chưa có tin nhắn nào được gửi đi."
				})
			]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
