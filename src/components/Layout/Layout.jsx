import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout(props) {
  return (
    <>
      <Header showResto={props.showResto} showNavBar={props.showNavBar} />
      {props.children}
      <Footer />
    </>
  );
}
