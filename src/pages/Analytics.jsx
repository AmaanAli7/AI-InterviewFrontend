import GradientCard from "../components/GradientCard";
import ScoreChart from "../components/ScoreChart";

export default function Analytics() {

  const stored = JSON.parse(localStorage.getItem("interviews")) || [];

  const chartData = stored.map((item, index) => ({
    name: `#${index + 1}`,
    score: item.score,
  }));

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>

      <div className="grid md:grid-cols-2 gap-8">

        <GradientCard>
          <h2 className="text-lg font-semibold mb-4">
            Performance Trend
          </h2>

          {chartData.length > 0 ? (
            <ScoreChart data={chartData} />
          ) : (
            <p className="text-slate-400">
              No interviews completed yet.
            </p>
          )}
        </GradientCard>

        <GradientCard>
          <h2 className="text-lg font-semibold mb-4">
            Recent Interviews
          </h2>

          <ul className="space-y-3 text-slate-400">
            {stored.map((item, i) => (
              <li key={i}>
                Interview #{i + 1} – {item.score}%
              </li>
            ))}
          </ul>

        </GradientCard>

      </div>
    </div>
  );
}
