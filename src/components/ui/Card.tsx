type CardProps = {
    title?: string;
    children: React.ReactNode;
    className?: string;
  };
  
  export default function Card({ title, children, className = "" }: CardProps) {
    return (
      <div className={`bg-fundoCard text-textoPrincipal p-6 rounded-xl shadow-md ${className}`}>
        {title && <h3 className="text-lg font-bold text-titulo mb-2">{title}</h3>}
        <div>{children}</div>
      </div>
    );
  }
  