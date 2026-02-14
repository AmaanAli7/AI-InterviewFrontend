import GradientCard from "../components/GradientCard";
import PrimaryButton from "../components/PrimaryButton";

export default function Settings() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="grid md:grid-cols-2 gap-8">

        <GradientCard>
          <h2 className="text-lg font-semibold mb-4">
            Profile
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-[#1E293B] mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-[#1E293B]"
          />
        </GradientCard>

        <GradientCard>
          <h2 className="text-lg font-semibold mb-4">
            Subscription
          </h2>

          <p className="text-slate-400 mb-6">
            Current Plan: Pro
          </p>

          <PrimaryButton>
            Upgrade Plan
          </PrimaryButton>
        </GradientCard>

      </div>
    </div>
  );
}
