export default function Topbar() {
  return (
    <div className="h-16 border-b border-[#1E293B] flex items-center justify-between px-8 bg-[#0F172A]">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      </div>
    </div>
  );
}
