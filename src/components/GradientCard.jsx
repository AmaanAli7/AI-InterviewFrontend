export default function GradientCard({ children, className = "" }) {
  return (
    <div
      className={`relative p-[1px] rounded-2xl bg-gradient-to-r 
      from-blue-500 via-indigo-500 to-purple-500 ${className}`}
    >
      <div className="bg-[#111827] rounded-2xl p-6 h-full">
        {children}
      </div>
    </div>
  );
}
