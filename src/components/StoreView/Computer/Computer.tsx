import { ComputerType } from "@/types/ComputerType";
import Image from "next/image";
import styles from "./computer.module.css";
import ButtonOrder from "../ButtonOrder/ButtonOrder";
import Specification from "../Specification/Specification";

export default function Computer(props: ComputerType) {
  return (
    <>
      <div className={styles.computer}>
        <div className={styles.sectionImage}>
          <Image
            src={props.imageLocation}
            width={572}
            height={572}
            alt="PCImage"
          />
        </div>
        <div className={styles.sectionSpecifications}>
          <div className={styles.specificationTitle}>Характеристики</div>
          <ul className={styles.specificationsList}>
            {props.specifications.map((spec, index) => (
              <li key={index} className={styles.specificationsListContent}>
                <Specification
                  specificationType={spec.type}
                  specificationText={spec.value}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sectionOrder}>
          <div className={styles.priceText}>Цена: {props.price} руб.</div>
          <ButtonOrder text="Купить" />
        </div>
      </div>
    </>
  );
}
