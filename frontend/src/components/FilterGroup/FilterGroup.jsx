import "./FilterGroup.css";

export function FilterGroup({ title, inputType, options }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>
      {options.map((option, index) => (
        <label key={index} className="filter-option">
          <input type={inputType} name={title} />
          {option.text}
        </label>
      ))}
    </div>
  );
}
