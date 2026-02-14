import GradientCard from "./GradientCard";

export default function StatCard({ title, value }) {
  return (
    <GradientCard>
      <h3 className="text-slate-400 text-sm">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </GradientCard>
  );
}
