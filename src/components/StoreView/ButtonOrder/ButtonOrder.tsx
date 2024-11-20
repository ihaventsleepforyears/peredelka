import styles from "./buttonorder.module.css";

export type Props = {
  text: string;
};
export default function ButtonOrder(props: Props) {
  return (
    <>
      <button className={styles.button}>
        <div className={styles.text}>{props.text}</div>
      </button>
    </>
  );
}
