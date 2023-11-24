"use client";

import Container from "@/app/components/Container";
import ClientOnly from "./components/ClientOnly";

import styles from './page.module.css'


export default function Home() {
  return (
    <ClientOnly>
      <Container>
        <div className={styles.wrapper}>content</div>
      </Container>
    </ClientOnly>
  )
}
