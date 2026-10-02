import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { type Product } from "@/lib/products";

const navigation = [
  ["Danh mục", "/shop"], ["Bộ sưu tập", "/collections"], ["Giới thiệu", "/about"], ["Liên hệ", "/contact"],
] as const;

export function StoreHeader() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  return <header className="store-header">
    <div className="store-header-inner">
      <Link to="/" className="store-brand">SKINREST-BEAUTY</Link>
      <nav className="store-nav" aria-label="Điều hướng chính">
        {navigation.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "is-active" }}>{label}</Link>)}
      </nav>
      <div className="store-tools">
        <button className="icon-button" onClick={() => setSearch((value) => !value)} aria-label="Tìm kiếm"><Search size={20}/></button>
        <button className="icon-button store-menu" onClick={() => setOpen((value) => !value)} aria-label="Bật/Tắt điều hướng">{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
    {search && <form className="store-search" action="/shop"><Search size={18}/><input name="q" autoFocus placeholder="Tìm trong danh mục..." aria-label="Tìm trong danh mục"/><button>Tìm kiếm</button></form>}
    {open && <nav className="store-mobile-nav" aria-label="Điều hướng di động">{navigation.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}
  </header>;
}

export function StoreFooter() {
  return <footer className="store-footer"><div className="footer-intro"><Link to="/" className="store-brand">SKINREST-BEAUTY</Link><p>Không gian tham khảo về sản phẩm và chăm sóc da.</p></div><div className="footer-links"><div><strong>Khám phá</strong><Link to="/shop">Danh mục sản phẩm</Link><Link to="/collections">Bộ sưu tập</Link></div><div><strong>Thông tin</strong><Link to="/about">Giới thiệu</Link><Link to="/contact">Liên hệ</Link></div></div><div className="footer-contact"><strong>Liên hệ</strong><Link to="/contact">Gửi lời nhắn</Link></div><small>© 2026 SKINREST-BEAUTY.</small></footer>;
}

export function StoreLayout({ children }: { children: ReactNode }) {
  return <><StoreHeader/><main className="store-main">{children}</main><StoreFooter/></>;
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="page-hero"><p>{eyebrow}</p><h1>{title}</h1><span>{copy}</span></section>;
}

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link to="/products/$productId" params={{ productId: product.id }} className="product-image-wrap">
      <img src={product.image} width={768} height={960} loading="lazy" alt={product.name}/>
    </Link>
    <div className="product-info"><p>{product.category}</p><Link to="/products/$productId" params={{ productId: product.id }}>{product.name}</Link><div><Link to="/products/$productId" params={{ productId: product.id }}>Tìm hiểu thêm</Link></div></div>
  </article>;
}

export function ProductGrid({ items }: { items: Product[] }) {
  return <div className="product-grid">{items.map((product) => <ProductCard key={product.id} product={product}/>)}</div>;
}
