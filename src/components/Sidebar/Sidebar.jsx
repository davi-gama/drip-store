import { FilterGroup } from "../FilterGroup/FilterGroup";
import "./Sidebar.css";

const opc1 = [
  { text: "Adiddas", value: "adiddas" },
  { text: "Calenciaga", value: "calenciaga" },
  { text: "K-Swiss", value: "kswiss" },
  { text: "Nike", value: "nike" },
  { text: "Puma", value: "puma" },
];

const opc2 = [
  { text: "Esporte e lazer", value: "esporte" },
  { text: "Casual", value: "casual" },
  { text: "Utilitário", value: "utilitario" },
  { text: "Corrida", value: "corrida" },
];

const opc3 = [
  { text: "Masculino", value: "masculino" },
  { text: "Feminino", value: "feminino" },
  { text: "Unissex", value: "unissex" },
];

const opc4 = [
  { text: "Novo", value: "novo" },
  { text: "Usado", value: "usado" },
];

export function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Filtrar por</h2>
      <hr />
      <FilterGroup title="Marca" inputType="checkbox" options={opc1} />
      <FilterGroup title="Categoria" inputType="checkbox" options={opc2} />
      <FilterGroup title="Gênero" inputType="checkbox" options={opc3} />
      <FilterGroup title="Estado" inputType="radio" options={opc4} />
    </div>
  );
}
