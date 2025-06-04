
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const SkillRadar = () => {
  const data = [
    { skill: 'Arrays', current: 85, target: 95 },
    { skill: 'Strings', current: 75, target: 90 },
    { skill: 'Trees', current: 90, target: 95 },
    { skill: 'Graphs', current: 60, target: 85 },
    { skill: 'DP', current: 45, target: 80 },
    { skill: 'Greedy', current: 70, target: 85 },
    { skill: 'Backtrack', current: 55, target: 75 }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Skill Analysis</h3>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-400" />
            <span className="text-slate-300">Current</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-400" />
            <span className="text-slate-300">Target</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid gridType="polygon" stroke="#334155" />
            <PolarAngleAxis 
              dataKey="skill" 
              tick={{ fill: '#cbd5e1', fontSize: 12 }}
              className="text-slate-300"
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: '#64748b', fontSize: 10 }}
              tickCount={5}
            />
            <Radar
              name="Current Level"
              dataKey="current"
              stroke="#60a5fa"
              fill="#60a5fa"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar
              name="Target Level"
              dataKey="target"
              stroke="#a855f7"
              fill="#a855f7"
              fillOpacity={0.1}
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-4 bg-slate-700/30 rounded-xl">
        <h4 className="text-sm font-medium text-white mb-2">Recommendations</h4>
        <div className="space-y-1 text-xs text-slate-300">
          <p>• Focus on Dynamic Programming - 35 point gap</p>
          <p>• Improve Graph algorithms - practice BFS/DFS</p>
          <p>• Backtracking needs attention for tree problems</p>
        </div>
      </div>
    </div>
  );
};

export default SkillRadar;
