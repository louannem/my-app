import Link from "next/link";
import { useRouter } from "next/router";

export default function About() {

  //Javascript
  const title = "About";
  const router = useRouter();

  function toPreviousPage() {
    router.back();
  }


  //HTML
  return (
    <main>
      <h1>{title}</h1>
      <p onClick={toPreviousPage}>Précédent</p>
    </main>
  )
}