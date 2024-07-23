import { Link } from "react-router-dom";
import "./Section.css";

function linkRender(link) {
  if (link != undefined) {
    return link.map((item, index) => (
      <Link key={index} to={item.href}>
        {item.text}
      </Link>
    ));
  }
}

export function Section(props) {
  return (
    <div className="section-div">
      <div className="section-div-titulo">
        <h1 style={{ textAlign: props.titleAlign }}>{props.title}</h1>
        {linkRender(props.link)}
      </div>
      {props.children}
    </div>
  );
}
