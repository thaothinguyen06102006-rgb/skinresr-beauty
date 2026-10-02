import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as products } from "./products-CWSUt8KG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._productId-BoE2gTpe.js
var $$splitComponentImporter = () => import("./products._productId-B7rpizcn.mjs");
var Route = createFileRoute("/products/$productId")({
	head: ({ params }) => {
		const product = products.find((item) => item.id === params.productId);
		const name = product?.name || "Sản phẩm";
		return { meta: [
			{ title: `${name} | SKINREST-BEAUTY` },
			{
				name: "description",
				content: product?.description || "Khám phá mỹ phẩm lành tính từ SKINREST-BEAUTY."
			},
			{
				property: "og:title",
				content: `${name} | SKINREST-BEAUTY`
			},
			{
				property: "og:description",
				content: product?.description || "Khám phá mỹ phẩm lành tính từ SKINREST-BEAUTY."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
