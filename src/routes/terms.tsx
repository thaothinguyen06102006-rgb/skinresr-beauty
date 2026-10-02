import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, StoreLayout } from "@/components/storefront";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Điều khoản sử dụng | SKINREST-BEAUTY" },
    { name: "description", content: "Điều khoản sử dụng website SKINREST-BEAUTY." },
    { property: "og:title", content: "Điều khoản sử dụng | SKINREST-BEAUTY" },
    { property: "og:description", content: "Thông tin về nội dung, quyền riêng tư và liên hệ của SKINREST-BEAUTY." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TermsPage,
});

function TermsPage() {
  return <StoreLayout><PageHero eyebrow="THÔNG TIN PHÁP LÝ" title="Điều khoản sử dụng" copy="Các nguyên tắc khi truy cập và sử dụng website SKINREST-BEAUTY."/><section className="terms-content"><h2>Thông tin sản phẩm</h2><p>Nội dung trên website mang tính chất giới thiệu và tư vấn tham khảo. Thông tin sản phẩm có thể được cập nhật để phản ánh bao bì và công thức mới nhất.</p><h2>Quyền riêng tư</h2><p>Danh sách yêu thích được lưu trên thiết bị của bạn. Biểu mẫu liên hệ hiện chỉ mang tính minh họa, chưa gửi thông tin đến chúng tôi.</p><h2>Bản quyền</h2><p>Vui lòng không sao chép hoặc sử dụng lại hình ảnh và nội dung của website khi chưa được cho phép.</p><h2>Liên hệ</h2><p>Nếu cần giải đáp về điều khoản, vui lòng <Link to="/contact">liên hệ với chúng tôi</Link>.</p></section></StoreLayout>;
}
