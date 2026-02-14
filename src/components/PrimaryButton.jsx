export default function PrimaryButton({
  children,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold 
      bg-gradient-to-r from-blue-600 to-indigo-600 
      hover:scale-105 hover:shadow-xl transition duration-300 
      ${className}`}
    >
      {children}
    </button>
  );
}
