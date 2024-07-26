import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
