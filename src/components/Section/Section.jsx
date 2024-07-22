import "./Section.css";

function linkRender(link) {
  if (link != undefined) {
    return link.map((item, index) => (
      <a key={index} href={item.href}>
        {item.text}
      </a>
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
