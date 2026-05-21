import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";
export default function ProductCard({ image, name, price, remain, slug }) {
  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <Image src={image} alt={name} width={200} height={150} style={{ objectFit: 'contain' }} />
      </div>
      <div className={styles.productName}>{name}</div>
      <div className={styles.productPrice}>{price}</div>
      <div className={styles.productRemain}>
        <Image src="/images.png" alt="sale icon" width={20} height={20} />
        <span>{remain}</span>
      </div>
      <div className={styles.buyButton}>
        <Link href={`/chitietsanpham?slug=${slug}`}>Mua ngay</Link>
      </div>
    </div>
  );
}