import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Leaf,
  Droplets,
  ShieldCheck,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { StoreLayout } from "@/components/storefront";
import aboutSkincare from "@/assets/about-skincare.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "Giới thiệu | SKINREST-BEAUTY",
      },
    ],
  }),

  component: AboutPage,
});

function AboutPage() {
  return (
    <StoreLayout>
      <main className="about-page">

        {/* ================= HERO ================= */}
        <section className="about-hero">

          <div className="about-hero__content">

            <div className="about-eyebrow">
              <span>VỀ CHÚNG TÔI</span>
              <i />
            </div>

            <h1>SKINREST-BEAUTY</h1>

            <h2>
              Cùng bạn kiến tạo
              <br />
              làn da khỏe đẹp mỗi ngày
            </h2>

            <p>
              SKINREST BEAUTY là website giới thiệu và cung cấp
              thông tin về các sản phẩm chăm sóc da của thương hiệu
              Caryophy đến từ Hàn Quốc.
            </p>

            <p>
              Không gian được xây dựng theo phong cách hiện đại,
              thân thiện và chuyên nghiệp, giúp bạn dễ dàng tìm hiểu
              về sản phẩm, thành phần, công dụng và cách sử dụng.
            </p>

            <Link to="/shop" className="about-hero__button">
              KHÁM PHÁ SẢN PHẨM
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="about-hero__image">
            <img
              src={aboutSkincare}
              alt="Sản phẩm chăm sóc da Caryophy"
            />
          </div>

        </section>


        {/* ================= FEATURES ================= */}
        <section className="about-features">

          <div className="about-feature">
            <div className="about-feature__icon">
              <Leaf size={30} strokeWidth={1.5} />
            </div>

            <div>
              <h3>TỰ NHIÊN</h3>
              <p>
                Lấy cảm hứng từ vẻ đẹp tự nhiên
                và phong cách chăm sóc da tối giản.
              </p>
            </div>
          </div>


          <div className="about-feature">
            <div className="about-feature__icon">
              <Droplets size={30} strokeWidth={1.5} />
            </div>

            <div>
              <h3>DỄ TÌM HIỂU</h3>
              <p>
                Thông tin được trình bày rõ ràng,
                dễ hiểu và trực quan.
              </p>
            </div>
          </div>


          <div className="about-feature">
            <div className="about-feature__icon">
              <ShieldCheck size={30} strokeWidth={1.5} />
            </div>

            <div>
              <h3>THUẬN TIỆN</h3>
              <p>
                Dễ dàng khám phá sản phẩm và
                tìm hiểu từng bước chăm sóc da.
              </p>
            </div>
          </div>

        </section>


        
        {/* ================= PRODUCT COLLECTION ================= */}
        <section className="about-collection">

          <div className="about-section-heading">
            <span>BỘ SƯU TẬP</span>

            <h2>
              Khám phá
              <br />
              8 sản phẩm Caryophy
            </h2>

            <p>
              Tìm hiểu các nhóm sản phẩm chăm sóc da được
              giới thiệu trên SKINREST BEAUTY.
            </p>
          </div>


          <div className="about-product-grid">

            <div className="about-product-card">
              <div className="about-product-card__number">01</div>
              <h3>Sữa rửa mặt</h3>
              <p>
                Sản phẩm làm sạch da được giới thiệu
                trong bộ sưu tập Caryophy.
              </p>
            </div>

            <div className="about-product-card">
              <div className="about-product-card__number">02</div>
              <h3>Nước cân bằng da</h3>
              <p>
                Thông tin sản phẩm dành cho bước
                cân bằng trong chu trình chăm sóc da.
              </p>
            </div>

            <div className="about-product-card">
              <div className="about-product-card__number">03</div>
              <h3>Tinh chất dưỡng da</h3>
              <p>
                Nhóm sản phẩm được giới thiệu
                trong bộ sưu tập Caryophy.
              </p>
            </div>

            <div className="about-product-card">
              <div className="about-product-card__number">04</div>
              <h3>Kem dưỡng</h3>
              <p>
                Thông tin tham khảo về sản phẩm
                chăm sóc da.
              </p>
            </div>

            <div className="about-product-card">
              <div className="about-product-card__number">05</div>
              <h3>Gel tẩy tế bào chết</h3>
              <p>
                Nhóm sản phẩm dành cho bước
                tẩy tế bào chết.
              </p>
            </div>

            <div className="about-product-card">
              <div className="about-product-card__number">06</div>
              <h3>Nước tẩy trang</h3>
              <p>
                Sản phẩm được giới thiệu cho
                bước làm sạch da.
              </p>
            </div>

            <div className="about-product-card">
              <div className="about-product-card__number">07</div>
              <h3>Mặt nạ</h3>
              <p>
                Các dòng mặt nạ thuộc bộ sưu tập
                được giới thiệu trên website.
              </p>
            </div>

            <div className="about-product-card">
              <div className="about-product-card__number">08</div>
              <h3>Khám phá thêm</h3>
              <p>
                Khám phá danh mục để tìm hiểu
                các sản phẩm được giới thiệu.
              </p>
            </div>

          </div>

          <Link to="/shop" className="about-outline-button">
            XEM DANH MỤC
            <ArrowRight size={17} />
          </Link>

        </section>


        {/* ================= KNOWLEDGE ================= */}
        <section className="about-knowledge">

          <div className="about-knowledge__icon">
            <BookOpen size={32} strokeWidth={1.4} />
          </div>

          <span>KIẾN THỨC LÀM ĐẸP</span>

          <h2>
            Không chỉ là sản phẩm,
            <br />
            mà còn là KNOWLEDGE chăm sóc da.
          </h2>

          <p>
            SKINREST BEAUTY xây dựng không gian chia sẻ kiến thức
            thông qua các bài viết về chăm sóc da, tìm hiểu thành phần
            mỹ phẩm, hướng dẫn sử dụng sản phẩm và gợi ý quy trình
            skincare theo từng nhu cầu.
          </p>

          <Link to="/shop" className="about-knowledge__button">
            KHÁM PHÁ
            <ArrowRight size={17} />
          </Link>

        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="about-final">

          <Sparkles size={25} strokeWidth={1.4} />

          <h2>
            Khám phá sản phẩm, tìm hiểu làn da.</h2>

          <p>
            Nuôi dưỡng vẻ đẹp tự nhiên mỗi ngày.
          </p>

          <Link to="/shop" className="about-hero__button">
            XEM SẢN PHẨM 
            <ArrowRight size={18} />
          </Link>

        </section>

      </main>
    </StoreLayout>
  );
}