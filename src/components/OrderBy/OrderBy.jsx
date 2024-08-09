import "./OrderBy.css";

export function OrderBy() {
  return (
    <div className="order-by-wrapper">
      <span> Resultados para "Tênis" - </span> 389 produtos
      <div className="order-container">
        <label htmlFor="order-select" className="order-label">
          Ordenar por:
        </label>
        <select id="order-select" className="order-select">
          <option value="menor-preco">Menor preço</option>
          <option value="maior-preco">Maior preço</option>
        </select>
      </div>
    </div>
  );
}
