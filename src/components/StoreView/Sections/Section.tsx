import styles from "./section.module.css";
import { ComputerType } from "@/types/ComputerType";
import Computer from "../Computer/Computer";
type MainProps = {
  sectionName: string;
  computers: ComputerType[];
};

export default function Section(props: MainProps) {
  console.log(props);
  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionName}>{props.sectionName}</div>
        <ul className={styles.computersList}>
          {props.computers.map((computer) => (
            <Computer
              key={computer.id}
              id={computer.id}
              computerName={computer.computerName}
              specifications={computer.specifications}
              imageLocation={computer.imageLocation}
              price={computer.price}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
