import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          AI Interview
        </h1>

        <Link
          to="/dashboard"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          Launch App
        </Link>
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col items-center text-center px-6 mt-20">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold max-w-4xl leading-tight"
        >
          Master Interviews with
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            {" "}AI-Powered Feedback
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-slate-400 mt-6 max-w-2xl text-lg"
        >
          Practice real interview questions, get instant AI evaluation,
          and track your improvement like a pro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex gap-6 mt-10 flex-wrap justify-center"
        >
          <Link
            to="/dashboard"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>

          <button className="px-8 py-4 border border-[#1E293B] rounded-xl hover:bg-[#1F2937] transition">
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* FEATURES SECTION */}
      <div className="mt-32 px-10 grid md:grid-cols-3 gap-10">

        <FeatureCard
          title="Real AI Evaluation"
          desc="Get scored on technical depth, clarity and communication instantly."
        />

        <FeatureCard
          title="Voice + Webcam Simulation"
          desc="Practice in a real interview environment."
        />

        <FeatureCard
          title="Performance Analytics"
          desc="Track your growth with advanced visual reports."
        />

      </div>

      {/* FOOTER */}
      <div className="mt-32 py-10 text-center text-slate-500 border-t border-[#1E293B]">
        © 2026 AI Interview. Built to dominate placements.
      </div>

    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-[#1F2937]/60 backdrop-blur-xl border border-[#1E293B] 
    p-8 rounded-2xl hover:scale-105 transition duration-300">

      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-slate-400">
        {desc}
      </p>
    </div>
  );
}
