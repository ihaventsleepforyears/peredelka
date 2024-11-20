import { SpecificationType } from "@/types/SpecificationType";
import Section from "./Sections/Section";
import { ComputerType } from "@/types/ComputerType";

export default function StoreView() {
  const gamingPCs: ComputerType[] = [
    {
      id: 1,
      imageLocation: "/pc_1.png",
      computerName: "Игровой тигр",
      specifications: [
        { type: SpecificationType.Cpu, value: "AMD Ryzen 7 7800X" },
        { type: SpecificationType.Gpu, value: "NVIDIA GeForce RTX 4070 Ti" },
        {
          type: SpecificationType.Motherboard,
          value: "ASUS ROG STRIX B760-F Gaming WiFi",
        },
        { type: SpecificationType.Ram, value: "Corsair Vengeance LPX 32GB" },
        {
          type: SpecificationType.Disk,
          value: "Samsung 990 PRO 2TB (SSD NVMe M.2)",
        },
      ],
      price: 100000,
    },
  ];

  const eduPCs: ComputerType[] = [
    {
      id: 1,
      imageLocation: "/pc_1.png",
      computerName: "прост тигр)",
      specifications: [
        { type: SpecificationType.Cpu, value: "AMD Ryzen 7 7800X" },
        { type: SpecificationType.Gpu, value: "NVIDIA GeForce RTX 4070 Ti" },
        {
          type: SpecificationType.Motherboard,
          value: "ASUS ROG STRIX B760-F Gaming WiFi",
        },
        { type: SpecificationType.Ram, value: "Corsair Vengeance LPX 32GB" },
        {
          type: SpecificationType.Disk,
          value: "Samsung 990 PRO 2TB (SSD NVMe M.2)",
        },
      ],
      price: 50000,
    },
  ];

  return (
    <>
      <Section sectionName="Игровые пк" computers={gamingPCs} />
      <Section sectionName="Пк для учёбы" computers={eduPCs} />
    </>
  );
}
