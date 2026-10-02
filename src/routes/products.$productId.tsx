import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ProductGrid, StoreLayout } from "@/components/storefront";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products/$productId")({
  head: ({ params }) => { const product = products.find((item) => item.id === params.productId); const name = product?.name || "Sản phẩm"; return { meta: [{ title: `${name} | SKINREST-BEAUTY` }, { name: "description", content: product?.description || "Khám phá mỹ phẩm lành tính từ SKINREST-BEAUTY." }, { property: "og:title", content: `${name} | SKINREST-BEAUTY` }, { property: "og:description", content: product?.description || "Khám phá mỹ phẩm lành tính từ SKINREST-BEAUTY." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }; },
  component: ProductPage,
});

function ProductPage() {
  const { productId } = Route.useParams();
  const product = products.find((item) => item.id === productId);
  if (!product) return <StoreLayout><div className="empty-state route-empty"><h1>Không tìm thấy sản phẩm</h1><Link to="/shop" className="primary-button">QUAY LẠI DANH MỤC</Link></div></StoreLayout>;
  return <StoreLayout><section className="product-detail"><div className="detail-image"><img src={product.image} width={768} height={960} alt={product.name}/></div><div className="detail-copy"><Link to="/shop" className="back-link"><ArrowLeft size={16}/> Quay lại danh mục</Link><p>{product.category}</p><h1>{product.name}</h1><span>{product.description}</span><div className="ingredient-box"><b>Thành phần nổi bật</b><p>{product.ingredients}</p></div><div className="buy-row"><Link to="/contact" className="primary-button">GỬI CÂU HỎI</Link></div></div></section><section className="related-section"><div className="section-heading"><h2>Sản phẩm cùng danh mục</h2></div><ProductGrid items={products.filter((item) => item.id !== product.id).slice(0,4)}/></section></StoreLayout>;
}