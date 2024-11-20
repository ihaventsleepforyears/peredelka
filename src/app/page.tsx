import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/components/Header/Header";
import MainView from "@/components/MainView/MainView";

export default function Home() {
  return (
    <>
      <Header />
      <MainView />
    </>
  );
}
