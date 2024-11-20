import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.page__header}>
        <div className={styles.content}>
          <Image src={"/logo.png"} width={80} height={80} alt="empathy" />

          <ul className={styles.header__list}>
            <li className={styles.header__list__content}>
              <Link href={"#"} className={styles.header__list__element}>
                Игровые пк
              </Link>
              <Link href={"#"} className={styles.header__list__element}>
                Пк для учёбы
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
