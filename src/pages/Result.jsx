import CircularScore from "../components/CircularScore";
import GradientCard from "../components/GradientCard";

export default function Result() {

  const stored = JSON.parse(localStorage.getItem("interviews")) || [];
  const latest = stored[stored.length - 1];

  if (!latest) return <div className="p-8 text-white">No Results</div>;

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-10">
        Interview Breakdown
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <GradientCard>
          <CircularScore value={latest.score} />
        </GradientCard>

        <GradientCard>
          <h2 className="text-xl font-semibold mb-4">
            Performance Metrics
          </h2>

          <ul className="space-y-4 text-slate-300">
            <li>Clarity: {latest.clarity}%</li>
            <li>Confidence: {latest.confidence}%</li>
            <li>Technical Knowledge: {latest.technical}%</li>
            <li>Category: {latest.category}</li>
          </ul>
        </GradientCard>

      </div>
    </div>
  );
}
