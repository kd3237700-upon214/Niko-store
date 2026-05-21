import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./page.module.css";
const products = [
  { id: 1, name: "Niko plush", price: "300.000đ", image: "/niko plush.webp", remain: "Còn 30/30 suất", slug: "niko-plush" },
  { id: 2, name: "Game: Oneshot", price: "85.000đ", image: "/oneshot.webp", remain: "Giảm 40% còn 85.000đ", slug: "oneshot" },
  { id: 3, name: "Game: Oneshot World Machine Edition", price: "113.000đ", image: "/edition.jpg", remain: "Giảm 20% còn 113.000đ", slug: "oneshot-edition" },
  { id: 4, name: "Ly nước", price: "700.000đ", image: "/cup.webp", remain: "Còn 100/87 suất", slug: "cup" },
  { id: 5, name: "Pin", price: "80.000đ", image: "/pin.webp", remain: "Còn 100/75 suất", slug: "pin" },
  { id: 6, name: "Khăn choàng", price: "300.000đ", image: "/scar.webp", remain: "Còn 100/89 suất", slug: "scarf" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />     
      <main className={styles.item2}>
        <div className={styles.mainContent}>
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              remain={product.remain}
              slug={product.slug}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}