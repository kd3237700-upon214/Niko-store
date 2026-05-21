import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.header}>
  <div className={styles.headerInner}>
    <nav className={styles.nav}>
      <ul>
        <li>Trang chủ</li>
        <li>Sản phẩm</li>
        <li>Khuyến mãi</li>
        <li>Liên hệ</li>
      </ul>
    </nav>
    <div className={styles.logoWrapper}>
      <Image src="/logo.png" alt="Logo" width={90} height={90} />
    </div>
  </div>
</div>

      <div className={styles.item2}>
        <div className={styles.mainContent}>
          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src="/niko plush.webp" alt="Niko Plush" width={150} height={150} />
            </div>
            <div className={styles.productName}>Niko plush</div>
            <div className={styles.productPrice}>300.000đ</div>
            <div className={styles.productRemain}>
              <Image src="/images.png" alt="sale icon" width={20} height={20} />
              <span>Còn 30/30 suất</span>
            </div>
            <div className={styles.buyButton}>
              <Link href="/">Mua ngay</Link>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src="/oneshot.webp" alt="Oneshot" width={250} height={150} />
            </div>
            <div className={styles.productName}>Game: Oneshot</div>
            <div className={styles.productPrice}>142.000đ</div>
            <div className={styles.productRemain}>
              <Image src="/images.png" alt="sale icon" width={20} height={20} />
              <span>Giảm 40% còn 85.000đ</span>
            </div>
            <div className={styles.buyButton}>
              <Link href="/">Mua ngay</Link>
            </div>
          </div>
          
          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src="/edition.jpg" alt="Edition" width={250} height={150} />
            </div>
            <div className={styles.productName}>Game: Oneshot World Machine Edition</div>
            <div className={styles.productPrice}>142.500đ</div>
            <div className={styles.productRemain}>
              <Image src="/images.png" alt="sale icon" width={20} height={20} />
              <span>Giảm 20% còn 113.000đ</span>
            </div>
            <div className={styles.buyButton}>
              <Link href="/">Mua ngay</Link>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src="/cup.webp" alt="Cup" width={250} height={150} />
            </div>
            <div className={styles.productName}>Ly nước</div>
            <div className={styles.productPrice}>700.000đ</div>
            <div className={styles.productRemain}>
              <Image src="/images.png" alt="sale icon" width={20} height={20} />
              <span>Còn 100/87 suất</span>
            </div>
            <div className={styles.buyButton}>
              <Link href="/">Mua ngay</Link>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productImage}>
              <Image src="/pin.webp" alt="Pin" width={250} height={150} />
            </div>
            <div className={styles.productName}>Pin</div>
            <div className={styles.productPrice}>80.000đ</div>
            <div className={styles.productRemain}>
              <Image src="/images.png" alt="sale icon" width={20} height={20} />
              <span>Còn 100/75 suất</span>
            </div>
            <div className={styles.buyButton}>
              <Link href="/">Mua ngay</Link>
            </div>
          </div>
          <div className={styles.product}>
                        <div className={styles.productImage}>
              <Image src="/scar.webp" alt="Scar" width={250} height={150} />
            </div>
            <div className={styles.productName}>Khăn choàng</div>
            <div className={styles.productPrice}>300.000đ</div>
            <div className={styles.productRemain}>
              <Image src="/images.png" alt="sale icon" width={20} height={20} />
              <span>Còn 100/89 suất</span>
            </div>
            <div className={styles.buyButton}>
              <Link href="/">Mua ngay</Link>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.item3}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>© 2026 Niko Store.</div>
          <div className={styles.footerRight}>
            <Link href="/">Trang chủ</Link>
            <Link href="/">Sản phẩm</Link>
            <Link href="/">Liên hệ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}