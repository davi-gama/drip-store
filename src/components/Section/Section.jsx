import { Link } from "react-router-dom";
import "./Section.css";

export function Section(props) {
  return (
    <div className={props.className}>
      <div className="section-div-titulo">
        {props.title != undefined ? (
          <h1 style={{ textAlign: props.titleAlign }}>{props.title}</h1>
        ) : null}

        {props.link != undefined
          ? props.link.map((item, index) => (
              <Link key={index} to={item.href}>
                {item.text}
              </Link>
            ))
          : null}
      </div>
      {props.children}
    </div>
  );
}
