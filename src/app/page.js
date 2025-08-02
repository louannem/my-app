"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import PageTitle from "./components/page-title/page-title";
import PageHeader from "./components/page-header/page-header";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const pathName = usePathname();

  const title = {
    as: "h1",
    title: "Titre niveau 1"
  };
  const subtitle = {
    as: "h2",
    title: "Titre niveau 2"
  };
  const header = {
    currentPage: pathName,
  }


  const headerData = {
    path: pathName,
    signature: "Portfolio",
  };
  
  return (
    <div className={styles.page}>
      <PageHeader {...headerData} />
      <main className={styles.main}>
       
      </main>
    </div>
  );
}
