import styles from "./page.module.css";
import Image from "next/image";
import coverImg from "../../public/icet_viva_1.jpg";

export default function Home() {
  return (
    <>
      <h1>Image Handling</h1>
      <Image src={coverImg} alt="Cover Image" className={styles.coverImage} />
      <Image
        src={
          "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5"
        }
        alt="Cover Image"
        className={styles.coverImage}
        width={1000}
        height={1000}
      />
      <Image
        src={
          "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_538/https://blog.snappa.com/wp-content/uploads/2022/02/Freestocks.jpg"
        }
        alt="Cover Image"
        className={styles.coverImage}
        width={1000}
        height={1000}
      />
    </>
  );
}
