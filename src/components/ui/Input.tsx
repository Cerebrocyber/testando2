type InputProps = {
    label?: string;
    placeholder?: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
  };
  
  export default function Input({
    label,
    placeholder = "",
    type = "text",
    name,
    value,
    onChange,
    className = ""
  }: InputProps) {
    return (
      <div className="flex flex-col gap-1">
        {label && <label className="text-sm font-medium text-titulo">{label}</label>}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`bg-fundoCard text-textoPrincipal border border-cinzaMedio rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primario ${className}`.trim()}
        />
      </div>
    );
  }
  