import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as StoreLayout, t as PageHero } from "./storefront-rD6pkOmu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-DBEA1IWW.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "THÔNG TIN PHÁP LÝ",
		title: "Điều khoản sử dụng",
		copy: "Các nguyên tắc khi truy cập và sử dụng website SKINREST-BEAUTY."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "terms-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Thông tin sản phẩm" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nội dung trên website mang tính chất giới thiệu và tư vấn tham khảo. Thông tin sản phẩm có thể được cập nhật để phản ánh bao bì và công thức mới nhất." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Quyền riêng tư" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Danh sách yêu thích được lưu trên thiết bị của bạn. Biểu mẫu liên hệ hiện chỉ mang tính minh họa, chưa gửi thông tin đến chúng tôi." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Bản quyền" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Vui lòng không sao chép hoặc sử dụng lại hình ảnh và nội dung của website khi chưa được cho phép." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Liên hệ" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Nếu cần giải đáp về điều khoản, vui lòng ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					children: "liên hệ với chúng tôi"
				}),
				"."
			] })
		]
	})] });
}
//#endregion
export { TermsPage as component };
