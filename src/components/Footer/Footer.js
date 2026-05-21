import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.item3}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Niko Store</h3>
          <p className={styles.text}>Bán hàng, game hiện đại.</p>
          <div className={styles.footerLeft}>© 2026 Niko Store.</div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Liên kết</h3>
          <div className={styles.footerLinks}>
            <Link href="/">Trang chủ</Link>
            <Link href="/">Sản phẩm</Link>
            <Link href="/">Dịch vụ</Link>
            <Link href="/">Liên hệ</Link>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Thông tin liên hệ</h3>
          <p className={styles.text}>Địa chỉ: Quận 12, TP. Hồ Chí Minh</p>
          <p className={styles.text}>Hotline: 0123 456 789</p>
        </div>
      </div>
    </footer>
  );
}