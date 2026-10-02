import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, ProductGrid, StoreLayout } from "@/components/storefront";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [
    { title: "Danh mục sản phẩm chăm sóc da | SKINREST-BEAUTY" }, { name: "description", content: "Thông tin tham khảo về sản phẩm chăm sóc da được giới thiệu trên SKINREST-BEAUTY." },
    { property: "og:title", content: "Danh mục sản phẩm chăm sóc da | SKINREST-BEAUTY" }, { property: "og:description", content: "Tìm hiểu tên, công dụng và thành phần của các sản phẩm chăm sóc da." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ShopPage,
});

function ShopPage() {
  const query = typeof window === "undefined" ? "" : new URLSearchParams(window.location.search).get("q") || "";
  const [category, setCategory] = useState("Tất cả");
  const categories = ["Tất cả", ...Array.from(new Set(products.map((product) => product.category)))];
  const visible = useMemo(() => products.filter((product) => (category === "Tất cả" || product.category === category) && (!query || product.name.toLowerCase().includes(query.toLowerCase()))), [category, query]);
  return <StoreLayout><PageHero eyebrow="THÔNG TIN THAM KHẢO" title="Danh mục sản phẩm" copy="Tìm hiểu các sản phẩm chăm sóc da theo từng nhóm."/><section className="catalog-section"><div className="filter-row">{categories.map((item) => <button className={category === item ? "is-selected" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>{visible.length ? <ProductGrid items={visible}/> : <div className="empty-state"><h2>Không tìm thấy sản phẩm</h2><p>Hãy thử từ khóa khác hoặc xem tất cả sản phẩm.</p></div>}</section></StoreLayout>;
}