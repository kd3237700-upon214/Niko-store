import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
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
          <Image src="/logo.png" alt="Logo" width={85} height={85} />
        </div>
      </div>
    </header>
  );
}