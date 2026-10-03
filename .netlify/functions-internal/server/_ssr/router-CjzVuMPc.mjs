import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$11 } from "./products._productId-BoE2gTpe.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CjzVuMPc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-udU4OFTl.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Không tìm thấy trang"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Trang bạn đang tìm không tồn tại hoặc đã được chuyển."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Về trang chủ"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Không thể tải trang"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Đã xảy ra sự cố. Bạn có thể thử tải lại hoặc quay về trang chủ."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Thử lại"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Về trang chủ"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SKINREST-BEAUTY" },
			{
				name: "description",
				content: "Trang giới thiệu cá nhân và thông tin tham khảo về các sản phẩm chăm sóc da."
			},
			{
				name: "author",
				content: "SKINREST-BEAUTY"
			},
			{
				property: "og:title",
				content: "SKINREST-BEAUTY"
			},
			{
				property: "og:description",
				content: "Trang giới thiệu cá nhân và thông tin tham khảo về các sản phẩm chăm sóc da."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=Noto+Serif:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "vi",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$9 = () => import("./routes-Ca-fqq71.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "SKINREST-BEAUTY | Góc tham khảo chăm sóc da" },
		{
			name: "description",
			content: "Trang giới thiệu cá nhân và thông tin tham khảo về sản phẩm chăm sóc da Caryophy."
		},
		{
			property: "og:title",
			content: "SKINREST-BEAUTY | Góc tham khảo chăm sóc da"
		},
		{
			property: "og:description",
			content: "Tìm hiểu thông tin về các sản phẩm và thành phần chăm sóc da."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./about-Ca6VoW3H.mjs");
var Route$8 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "Giới thiệu | SKINREST-BEAUTY" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./account-BVCprfU-.mjs");
var Route$7 = createFileRoute("/account")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./best-sellers-CXIXE6NN.mjs");
var Route$6 = createFileRoute("/best-sellers")({
	head: () => ({ meta: [
		{ title: "Sản phẩm tiêu biểu | SKINREST-BEAUTY" },
		{
			name: "description",
			content: "Một số sản phẩm chăm sóc da được giới thiệu trên SKINREST-BEAUTY."
		},
		{
			property: "og:title",
			content: "Sản phẩm tiêu biểu | SKINREST-BEAUTY"
		},
		{
			property: "og:description",
			content: "Thông tin tham khảo về một số sản phẩm chăm sóc da."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./collections-emnQ5uG8.mjs");
var Route$5 = createFileRoute("/collections")({
	head: () => ({ meta: [
		{ title: "Bộ sưu tập chăm sóc da | SKINREST-BEAUTY" },
		{
			name: "description",
			content: "Khám phá bộ sưu tập SKINREST-BEAUTY được tuyển chọn theo chu trình và nhu cầu làn da."
		},
		{
			property: "og:title",
			content: "Bộ sưu tập chăm sóc da | SKINREST-BEAUTY"
		},
		{
			property: "og:description",
			content: "Chu trình chăm sóc da thảo mộc được tuyển chọn cho làn da của bạn."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-B2-ORCyw.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Liên hệ | SKINREST-BEAUTY" },
		{
			name: "description",
			content: "Liên hệ SKINREST-BEAUTY care team for product and order support."
		},
		{
			property: "og:title",
			content: "Liên hệ | SKINREST-BEAUTY"
		},
		{
			property: "og:description",
			content: "Chúng tôi luôn sẵn sàng hỗ trợ chu trình chăm sóc da của bạn."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./favorites-DG2t-a0O.mjs");
var Route$3 = createFileRoute("/favorites")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./new-arrivals-DemtSiEl.mjs");
var Route$2 = createFileRoute("/new-arrivals")({
	head: () => ({ meta: [
		{ title: "Danh mục sản phẩm | SKINREST-BEAUTY" },
		{
			name: "description",
			content: "Danh mục sản phẩm chăm sóc da được giới thiệu trên SKINREST-BEAUTY."
		},
		{
			property: "og:title",
			content: "Danh mục sản phẩm | SKINREST-BEAUTY"
		},
		{
			property: "og:description",
			content: "Thông tin tham khảo về các sản phẩm chăm sóc da."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./shop-DQyrwIwf.mjs");
var Route$1 = createFileRoute("/shop")({
	head: () => ({ meta: [
		{ title: "Danh mục sản phẩm chăm sóc da | SKINREST-BEAUTY" },
		{
			name: "description",
			content: "Thông tin tham khảo về sản phẩm chăm sóc da được giới thiệu trên SKINREST-BEAUTY."
		},
		{
			property: "og:title",
			content: "Danh mục sản phẩm chăm sóc da | SKINREST-BEAUTY"
		},
		{
			property: "og:description",
			content: "Tìm hiểu tên, công dụng và thành phần của các sản phẩm chăm sóc da."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-DBEA1IWW.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Điều khoản sử dụng | SKINREST-BEAUTY" },
		{
			name: "description",
			content: "Điều khoản sử dụng website SKINREST-BEAUTY."
		},
		{
			property: "og:title",
			content: "Điều khoản sử dụng | SKINREST-BEAUTY"
		},
		{
			property: "og:description",
			content: "Thông tin về nội dung, quyền riêng tư và liên hệ của SKINREST-BEAUTY."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	AboutRoute: Route$8.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$10
	}),
	AccountRoute: Route$7.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => Route$10
	}),
	BestSellersRoute: Route$6.update({
		id: "/best-sellers",
		path: "/best-sellers",
		getParentRoute: () => Route$10
	}),
	CollectionsRoute: Route$5.update({
		id: "/collections",
		path: "/collections",
		getParentRoute: () => Route$10
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$10
	}),
	FavoritesRoute: Route$3.update({
		id: "/favorites",
		path: "/favorites",
		getParentRoute: () => Route$10
	}),
	NewArrivalsRoute: Route$2.update({
		id: "/new-arrivals",
		path: "/new-arrivals",
		getParentRoute: () => Route$10
	}),
	ShopRoute: Route$1.update({
		id: "/shop",
		path: "/shop",
		getParentRoute: () => Route$10
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$10
	}),
	ProductsProductIdRoute: Route$11.update({
		id: "/products/$productId",
		path: "/products/$productId",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
