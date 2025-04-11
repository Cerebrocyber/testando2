type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'solid' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
  };
  
  export default function Button({
    children,
    onClick,
    variant = 'solid',
    size = 'md',
    className = '',
    type = 'button'
  }: ButtonProps) {
    const base = "rounded font-bold transition-colors focus:outline-none";
  
    const variants = {
      solid: "bg-primario text-fundoGeral hover:bg-secundario",
      ghost: "bg-transparent text-primario hover:bg-fundoCard border border-primario",
    };
  
    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()}
      >
        {children}
      </button>
    );
  }
  