"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./product.module.css";
const products = [
  { 
    id: 1, name: "Niko plush", price: "300.000đ", image: "/niko plush.webp", remain: "Còn 30/30 suất", slug: "niko-plush",
    description: "Bé Niko nhồi bông siêu dễ thương, mềm mại, ôm cực thích. Vật phẩm không thể thiếu cho các fan cứng của OneShot để mang theo trong những chuyến hành trình.",
    brand: "Fangamer", condition: "Mới 100%", category: "Thú bông / Merchandise"
  },
  { 
    id: 2, name: "Game: Oneshot", price: "85.000đ", image: "/oneshot.webp", remain: "Giảm 40% còn 85.000đ", slug: "oneshot",
    description: "Tựa game giải đố phiêu lưu siêu thực với cốt truyện phá vỡ bức tường thứ tư. Hãy dẫn dắt Niko mang ánh sáng mặt trời trở lại thế giới tàn lụi. Bạn chỉ có một cơ hội duy nhất.",
    brand: "Future Cat LLC", condition: "Digital (Key Steam)", category: "Trò chơi điện tử"
  },
  { 
    id: 3, name: "Game: Oneshot World Machine Edition", price: "113.00đ", image: "/edition.jpg", remain: "Giảm 20% còn 113.000đ", slug: "oneshot-edition",
    description: "Phiên bản đặc biệt mang trải nghiệm OneShot lên hệ máy console. Bao gồm giao diện World Machine độc quyền, tính năng xem lại các tệp tin và nhiều bí ẩn mới đang chờ khám phá.",
    brand: "DANGEN Entertainment", condition: "Console Digital", category: "Trò chơi điện tử"
  },
  { 
    id: 4, name: "Ly nước", price: "700.000đ", image: "/cup.webp", remain: "Còn 100/87 suất", slug: "cup",
    description: "Chiếc ly sứ cao cấp in hình đôi mắt phát sáng của Niko. Giữ nhiệt tốt, hoàn hảo để nhâm nhi một tách cà phê nóng trong lúc cày game.",
    brand: "Niko Store", condition: "Mới 100%", category: "Đồ gia dụng"
  },
  { 
    id: 5, name: "Pin", price: "80.000đ", image: "/pin.webp", remain: "Còn 100/75 suất", slug: "pin",
    description: "Huy hiệu kim loại tráng men (enamel pin) cao cấp hình bóng đèn mặt trời. Rất thích hợp để gắn lên balo, áo khoác hoặc túi xách để khoe độ fan của bạn.",
    brand: "Fangamer", condition: "Mới 100%", category: "Phụ kiện thời trang"
  },
  { 
    id: 6, name: "Khăn choàng", price: "300.000đ", image: "/scar.webp", remain: "Còn 100/89 suất", slug: "scarf",
    description: "Chiếc khăn choàng len màu xanh lam dệt kim, giống hệt chiếc khăn mà Niko đeo trong game. Dày dặn, ấm áp, bảo vệ bạn khỏi mùa đông.",
    brand: "Niko Store", condition: "Mới 100%", category: "Trang phục / Cosplay"
  },
];

function ProductContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <h1>Sản phẩm không tồn tại!</h1>
        <p>Không tìm thấy slug: {slug}</p>
      </div>
    );
  }

  return (
    <main className={styles.main}> 
      <div className={styles.detailWrapper}>
        <div className={styles.imageSection}>
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className={styles.infoSection}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
          <div className={styles.price}>{product.price}</div>
          <p style={{ margin: '20px 0', color: '#555', fontWeight: 'bold' }}>{product.remain}</p>
          
          <button className={styles.buyButton}>
            Mua ngay
          </button>

          <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <h3 style={{ marginBottom: '10px' }}>Mô tả sản phẩm</h3>
            <p style={{ lineHeight: '1.6', color: '#444', marginBottom: '20px' }}>
              {product.description}
            </p>

            <h3 style={{ marginBottom: '10px' }}>Thông tin chi tiết</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#666', lineHeight: '1.8' }}>
              <li>• <strong>Thương hiệu / NPH:</strong> {product.brand}</li>
              <li>• <strong>Tình trạng:</strong> {product.condition}</li>
              <li>• <strong>Thể loại:</strong> {product.category}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProductDetailPage() {
  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<div>Đang tải thông tin sản phẩm...</div>}>
        <ProductContent />
      </Suspense>
      <Footer />
    </div>
  );
}