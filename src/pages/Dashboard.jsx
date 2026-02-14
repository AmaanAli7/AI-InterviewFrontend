import StatCard from "../components/StatCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {

  const data = [
    { name: "Week 1", score: 55 },
    { name: "Week 2", score: 68 },
    { name: "Week 3", score: 72 },
    { name: "Week 4", score: 82 },
  ];

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, Amaan 👑
        </h1>
        <p className="text-slate-400 mt-2">
          Here’s your AI interview performance overview.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Total Interviews" value="18" trend="+4 this week" />
        <StatCard title="Average Score" value="82%" trend="+6% improvement" />
        <StatCard title="Confidence Level" value="High" trend="+12% growth" />
      </div>

      {/* Chart Section */}
      <div className="bg-[#1F2937]/60 backdrop-blur-xl border border-[#1E293B] 
      p-8 rounded-2xl shadow-lg">

        <h2 className="text-xl font-semibold mb-6">
          Performance Trend
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 6 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Activity Section */}
      <div className="bg-[#1F2937]/60 backdrop-blur-xl border border-[#1E293B] 
      p-8 rounded-2xl shadow-lg">

        <h2 className="text-xl font-semibold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4 text-slate-300">
          <p>✅ Completed Frontend Interview — Score: 84%</p>
          <p>📈 Communication improved by 12%</p>
          <p>🎯 Practiced System Design questions</p>
        </div>
      </div>

    </div>
  );
}
