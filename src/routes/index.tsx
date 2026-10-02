import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Beaker,
  ChevronRight,
  Globe2,
  Home,
  Leaf,
  Menu,
  Play,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/about-skincare.jpg";
import cleanserImage from "@/assets/product-cleansing-foam.jpg";
import serumImage from "@/assets/product-ampoule.jpg";
import moisturizerImage from "@/assets/product-repair-cream.jpg";
import sunscreenImage from "@/assets/product-sunscreen.jpg";
import maskImage from "@/assets/product-portulaca-mask.jpg";
import arrivalImage from "@/assets/new-arrival-caryophy.jpg";
import { StoreFooter } from "@/components/storefront";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SKINREST-BEAUTY | Góc tham khảo chăm sóc da" },
      { name: "description", content: "Trang giới thiệu cá nhân và thông tin tham khảo về sản phẩm chăm sóc da Caryophy." },
      { property: "og:title", content: "SKINREST-BEAUTY | Góc tham khảo chăm sóc da" },
      { property: "og:description", content: "Tìm hiểu thông tin về các sản phẩm và thành phần chăm sóc da." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  { name: "Sữa rửa mặt", image: cleanserImage },
  { name: "Tinh chất", image: serumImage },
  { name: "Kem dưỡng ẩm", image: moisturizerImage },
  { name: "Kem chống nắng", image: sunscreenImage },
  { name: "Mặt nạ", image: maskImage },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const exploreProducts = () => document.querySelector("#categories")?.scrollIntoView({ behavior: "smooth" });
  return (
    <main>
      <section className="hero-shell" id="home">
        <img src={heroImage} width={1536} height={1024} alt="Nước hoa hồng rau má trên bệ đá" className="hero-image" />
        <div className="hero-wash" />

        <header className="site-header">
          <a href="#home" className="brand" aria-label="Trang chủ SKINREST-BEAUTY">SKINREST-BEAUTY</a>
          <nav className="desktop-nav" aria-label="Điều hướng chính">
            <a className="home-link" href="#home" aria-label="Trang chủ"><Home size={17} /></a>
            <Link className="active" to="/">Trang chủ</Link>
            <Link to="/shop">Danh mục</Link>
            <Link to="/collections">Bộ sưu tập</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/contact">Liên hệ</Link>
          </nav>
          <div className="header-actions">
            <button className="icon-button search-button" onClick={() => setSearchOpen((value) => !value)} aria-label="Tìm trong danh mục"><Search size={20} /></button>
            <button className="icon-button mobile-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Bật/Tắt menu">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
          {searchOpen && (
            <form className="search-panel" onSubmit={(event) => { event.preventDefault(); shopNow(); setSearchOpen(false); }}>
              <Search size={18} /><input autoFocus aria-label="Tìm trong danh mục" placeholder="Tìm trong danh mục..." /><button type="submit">Tìm kiếm</button>
            </form>
          )}
          {menuOpen && (
            <nav className="mobile-nav" aria-label="Điều hướng di động">
              <Link to="/" onClick={() => setMenuOpen(false)}>Trang chủ</Link><Link to="/shop" onClick={() => setMenuOpen(false)}>Danh mục</Link><Link to="/collections" onClick={() => setMenuOpen(false)}>Bộ sưu tập</Link><Link to="/about" onClick={() => setMenuOpen(false)}>Giới thiệu</Link><Link to="/contact" onClick={() => setMenuOpen(false)}>Liên hệ</Link>
            </nav>
          )}
        </header>

        <div className="hero-content">
          <p className="eyebrow">SKINREST-BEAUTY · GÓC THAM KHẢO CÁ NHÂN</p>
          <h1>Tìm hiểu.<br />Chăm sóc.<br /><em>Chọn điều phù hợp.</em></h1>
          <p className="intro">Mình tổng hợp thông tin về sản phẩm chăm sóc da<br />để bạn tiện tham khảo.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={exploreProducts}>XEM DANH MỤC <ArrowRight size={18} /></button>
            <button className="video-button" onClick={() => setVideoOpen(true)}><span><Play size={17} fill="currentColor" /></span><b>Ghé thăm bộ sưu tập<small>Tìm hiểu sản phẩm</small></b></button>
          </div>
        </div>

        <div className="benefit-strip">
          {[
            { icon: Leaf, title: "Sản phẩm", subtitle: "được giới thiệu" },
            { icon: Beaker, title: "Thành phần", subtitle: "thông tin tham khảo" },
            { icon: Sparkles, title: "Chăm sóc", subtitle: "da hằng ngày" },
            { icon: Globe2, title: "Mục đích", subtitle: "giới thiệu thông tin" },
          ].map(({ icon: Icon, title, subtitle }) => (
            <div className="benefit" key={title}><span><Icon size={20} /></span><p>{title}<small>{subtitle}</small></p></div>
          ))}
        </div>
      </section>

      <section className="shop-section" id="categories">
        <div className="section-heading"><h2>Danh Mục Sản Phẩm</h2><button onClick={() => window.alert("Các danh mục sản phẩm được hiển thị bên dưới.")}>Xem Các Danh Mục <ChevronRight size={18} /></button></div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.name}>
              <img src={category.image} width={768} height={960} loading="lazy" alt={`${category.name} chăm sóc da thảo mộc`} />
              <div><h3>{category.name}</h3><Link to="/shop">Tìm hiểu <ArrowRight size={14} /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="arrival-section" id="arrival">
        <img src={arrivalImage} width={1536} height={640} loading="lazy" alt="Bộ sưu tập kem dưỡng và tinh chất thảo mộc mới" />
        <div className="arrival-copy">
          <p>GÓC THAM KHẢO</p><h2>Tìm Hiểu.<br /><em>Chăm Sóc Dịu Nhẹ.</em></h2><span>Khám phá thông tin về các sản phẩm và thành phần chăm sóc da.</span>
          <Link className="primary-button" to="/about">VỀ MÌNH <ArrowRight size={18} /></Link>
        </div>
      </section>

<section className="story-section" id="story">
  <p className="story-label">MỘT TRANG GIỚI THIỆU CÁ NHÂN</p>

  <div className="story-content">
    <h2>SKINREST-BEAUTY</h2>

    <p className="story-description">
      Caryophy là thương hiệu mỹ phẩm chăm sóc da đến từ Hàn Quốc,
      thành lập năm 2012 và đã đứng vững hơn 10 năm trên thị trường.
      Thương hiệu nổi tiếng với các sản phẩm làm dịu da, ngăn ngừa
      và hỗ trợ chăm sóc da mụn, được phân phối chính hãng tại Việt Nam.
      Điểm nổi bật của thương hiệu là định hướng sử dụng các thành phần
      có nguồn gốc thực vật, hướng đến sự an toàn và dịu nhẹ cho làn da.
    </p>
  </div>
</section>
      {videoOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Phim về bộ sưu tập">
          <button className="modal-close" onClick={() => setVideoOpen(false)} aria-label="Đóng video"><X /></button>
          <div className="film-card"><Leaf size={52} /><h2>Tìm hiểu về sản phẩm</h2><p>Thông tin tham khảo về các danh mục chăm sóc da.</p><button className="primary-button" onClick={() => { setVideoOpen(false); exploreProducts(); }}>XEM DANH MỤC</button></div>
        </div>
      )}
      <StoreFooter />
    </main>
  );
}
