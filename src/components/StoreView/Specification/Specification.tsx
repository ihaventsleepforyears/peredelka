import { SpecificationType } from "@/types/SpecificationType";
import styles from "./specification.module.css";
import Image from "next/image";

export type Props = {
  specificationText: string;
  specificationType: SpecificationType;
};

const specificationIcons: Record<SpecificationType, string> = {
  [SpecificationType.Cpu]: "/icons/cpu.png",
  [SpecificationType.Gpu]: "/icons/gpu.png",
  [SpecificationType.Motherboard]: "/icons/motherboard.png",
  [SpecificationType.Ram]: "/icons/ram.png",
  [SpecificationType.Disk]: "/icons/disk.png",
};

export default function Specification(props: Props) {
  return (
    <>
      <div className={styles.specification}>
        <div className="icon">
          <Image
            src={specificationIcons[props.specificationType]}
            width={46}
            height={46}
            alt="PCIcon"
          />
        </div>
        <div className={styles.text}>{props.specificationText}</div>
      </div>
    </>
  );
}
