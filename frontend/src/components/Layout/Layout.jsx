import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";

export function Layout(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
