import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "New Interview", path: "/interview" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 bg-[#111827] border-r border-[#1E293B] p-6 relative">

      {/* Logo */}
      <h1 className="text-2xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
        AI Interview
      </h1>

      <nav className="space-y-3 relative">

        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} end>

            {({ isActive }) => (
              <div className="relative">

                {/* Active Glow Background */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r 
                    from-blue-500/20 to-indigo-600/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Left Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-bar"
                    className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r"
                  />
                )}

                {/* Link Content */}
                <div
                  className={`relative px-4 py-3 rounded-xl transition 
                  ${isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-[#1F2937]"
                    }`}
                >
                  {item.name}
                </div>

              </div>
            )}

          </NavLink>
        ))}

      </nav>
    </div>
  );
}
