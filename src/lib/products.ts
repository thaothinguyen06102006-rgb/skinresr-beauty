import foamImage from "@/assets/product-cleansing-foam.jpg";
import waterImage from "@/assets/product-cleansing-water.jpg";
import tonerImage from "@/assets/product-toner.jpg";
import ampouleImage from "@/assets/product-ampoule.jpg";
import repairCreamImage from "@/assets/product-repair-cream.jpg";
import portulacaMaskImage from "@/assets/product-portulaca-mask.jpg";
import repairMaskImage from "@/assets/product-repair-mask.jpg";
import sunscreenImage from "@/assets/product-sunscreen.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  ingredients: string;
};

export const products: Product[] = [
  { id: "centella-cleanser", name: "Sữa rửa mặt CARYOPHY Portulaca", category: "Sữa rửa mặt", image: foamImage, description: "Sữa rửa mặt dạng gel mỏng nhẹ giúp loại bỏ tạp chất trong khi vẫn giữ cho làn da bình tĩnh và thoải mái.", ingredients: "Rau má (Centella asiatica), trà xanh, panthenol" },
  { id: "niacinamide-serum", name: "Tinh chất CARYOPHY Portulaca Ampoule", category: "Tinh chất", image: ampouleImage, description: "Tinh chất làm sáng da hàng ngày giúp cải thiện rõ rệt kết cấu da và hỗ trợ hàng rào bảo vệ da khỏe mạnh, rạng rỡ.", ingredients: "Niacinamide, kẽm PCA, axit hyaluronic" },
  { id: "barrier-repair-cream", name: "Kem dưỡng phục hồi CARYOPHY Repair Cream", category: "Kem dưỡng ẩm", image: repairCreamImage, description: "Kem dưỡng phục hồi mượt mà cung cấp độ ẩm kéo dài mà không gây nặng nề.", ingredients: "Ceramide, squalane, rau má" },
  { id: "daily-sheer-sunscreen", name: "Kem chống nắng CARYOPHY SPF 50+", category: "Kem chống nắng", image: sunscreenImage, description: "Bảo vệ phổ rộng vô hình với kết thúc mềm mại, ẩm mượt và không để lại vệt trắng.", ingredients: "Màng lọc UV, vitamin E, panthenol" },
  { id: "matcha-detox-mask", name: "Mặt nạ giấy CARYOPHY Portulaca", category: "Mặt nạ", image: portulacaMaskImage, description: "Mặt nạ giấy thấm đẫm tinh chất rau sam giúp làm dịu và cấp ẩm cho da nhạy cảm.", ingredients: "Rau sam, rau má, madecassoside" },
  { id: "glow-boost-oil", name: "Nước tẩy trang CARYOPHY Cleansing Water", category: "Nước tẩy trang", image: waterImage, description: "Nước tẩy trang dịu nhẹ làm sạch lớp trang điểm và bụi bẩn, không gây khô căng.", ingredients: "Chiết xuất rau sam, rau má, panthenol" },
  { id: "deep-hydration-cream", name: "Mặt nạ phục hồi CARYOPHY Repair Mask", category: "Mặt nạ", image: repairMaskImage, description: "Mặt nạ phục hồi chuyên sâu giúp làm dịu và cấp ẩm tức thì cho làn da mệt mỏi.", ingredients: "Axit hyaluronic, ectoin, ceramides" },
  { id: "calming-toner", name: "Nước hoa hồng CARYOPHY Portulaca Toner", category: "Nước hoa hồng", image: tonerImage, description: "Nước hoa hồng tươi mát giúp làm mềm, cấp ẩm và chuẩn bị cho các bước dưỡng da tiếp theo.", ingredients: "Rau má, beta-glucan, panthenol" },
];
