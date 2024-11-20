import styles from "./mainview.module.css";
import MainOrderButton from "../MainOrderButton/MainOrderButton";
export default function MainView() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Компьютерный салон</h1>
        <div className={styles.subtitle}>
          Здесь вы найдете готовые компьютеры
        </div>

        <MainOrderButton text={"Заказать"} />
      </main>
    </>
  );
}
