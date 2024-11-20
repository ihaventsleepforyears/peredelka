import styles from "./mainorderbutton.module.css";
import Link from "next/link";

type MainProps = {
  text: string;
};

export default function MainOrderButton(props: MainProps) {
  return (
    <>
      <button className={styles.button}>
        <Link href={"store"}>
          <div className={styles.text}>{props.text}</div>
        </Link>
      </button>
    </>
  );
}
