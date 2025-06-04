
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Calendar, TrendingUp } from 'lucide-react';

const PracticeChart = () => {
  const data = [
    { date: 'Jan', problems: 12, rating: 1620 },
    { date: 'Feb', problems: 18, rating: 1685 },
    { date: 'Mar', problems: 25, rating: 1742 },
    { date: 'Apr', problems: 22, rating: 1798 },
    { date: 'May', problems: 35, rating: 1847 },
    { date: 'Jun', problems: 28, rating: 1823 }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
            Progress Tracking
          </h3>
          <p className="text-sm text-slate-400 mt-1">Monthly problem solving and rating trends</p>
        </div>
        <div className="flex items-center space-x-2 text-xs text-slate-300">
          <Calendar className="w-4 h-4" />
          <span>Last 6 months</span>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorProblems" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="date" 
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis 
              yAxisId="left"
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right"
              stroke="#64748b"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #475569',
                borderRadius: '8px',
                color: '#f1f5f9'
              }}
            />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="problems"
              stroke="#60a5fa"
              fillOpacity={1}
              fill="url(#colorProblems)"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="rating"
              stroke="#a855f7"
              strokeWidth={3}
              dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <div className="text-blue-400 text-sm font-medium">Problems This Month</div>
          <div className="text-2xl font-bold text-white mt-1">28</div>
          <div className="text-xs text-green-400 mt-1">+12% from last month</div>
        </div>
        <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
          <div className="text-purple-400 text-sm font-medium">Rating Change</div>
          <div className="text-2xl font-bold text-white mt-1">+156</div>
          <div className="text-xs text-green-400 mt-1">+8.5% improvement</div>
        </div>
      </div>
    </div>
  );
};

export default PracticeChart;
