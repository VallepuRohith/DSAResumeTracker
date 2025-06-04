
import { motion } from 'framer-motion';
import { TrendingUp, Target, Star, Calendar } from 'lucide-react';

interface StatsOverviewProps {
  user: {
    resumeScore: number;
    level: string;
  };
}

const StatsOverview = ({ user }: StatsOverviewProps) => {
  const stats = [
    {
      title: "Resume Score",
      value: user.resumeScore,
      suffix: "/100",
      icon: Target,
      color: "from-green-400 to-emerald-600",
      trend: "+12 this week"
    },
    {
      title: "Problems Solved",
      value: 342,
      suffix: "",
      icon: Star,
      color: "from-blue-400 to-cyan-600",
      trend: "+8 this week"
    },
    {
      title: "Contest Rating",
      value: 1847,
      suffix: "",
      icon: TrendingUp,
      color: "from-purple-400 to-violet-600",
      trend: "+156 this month"
    },
    {
      title: "Active Days",
      value: 28,
      suffix: "/30",
      icon: Calendar,
      color: "from-orange-400 to-red-500",
      trend: "93% consistency"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300"
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 mb-1">This period</div>
                <div className="text-xs text-green-400">{stat.trend}</div>
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-slate-300 text-sm font-medium">{stat.title}</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-slate-400 ml-1">{stat.suffix}</span>
              </div>
            </div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl group-hover:ring-purple-500/30 transition-all duration-300" />
        </motion.div>
      ))}
    </div>
  );
};

export default StatsOverview;
