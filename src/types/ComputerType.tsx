import { SpecificationType } from "./SpecificationType";

export type Specification = {
  type: SpecificationType;
  value: string;
};

export type ComputerType = {
  id: number;
  imageLocation: string;
  computerName: string;
  specifications: Specification[];
  price: number;
};
