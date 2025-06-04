
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WeakAreas = () => {
  const weakAreas = [
    {
      topic: 'Dynamic Programming',
      score: 45,
      improvement: 35,
      difficulty: 'Hard',
      problems: ['Longest Common Subsequence', 'Edit Distance', 'Coin Change'],
      color: 'from-red-500 to-orange-500'
    },
    {
      topic: 'Graph Algorithms',
      score: 60,
      improvement: 25,
      difficulty: 'Medium',
      problems: ['Dijkstra\'s Algorithm', 'Topological Sort', 'Union Find'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      topic: 'Backtracking',
      score: 55,
      improvement: 20,
      difficulty: 'Medium',
      problems: ['N-Queens', 'Sudoku Solver', 'Word Search'],
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-orange-400" />
          Improvement Areas
        </h3>
        <Button variant="outline" size="sm" className="border-slate-600 hover:border-orange-400">
          <BookOpen className="w-4 h-4 mr-2" />
          Study Plan
        </Button>
      </div>

      <div className="space-y-4">
        {weakAreas.map((area, index) => (
          <motion.div
            key={area.topic}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-4 rounded-xl bg-slate-700/30 border border-slate-600/30 hover:border-orange-400/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-medium text-white">{area.topic}</h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs px-2 py-1 rounded bg-slate-600/50 text-slate-300">
                    {area.difficulty}
                  </span>
                  <span className="text-xs text-slate-400">
                    Score: {area.score}/100
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-orange-400 font-semibold">+{area.improvement}</div>
                <div className="text-xs text-slate-400">potential</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="w-full bg-slate-600/50 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${area.score}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-2 rounded-full bg-gradient-to-r ${area.color}`}
                />
              </div>
            </div>

            {/* Recommended Problems */}
            <div className="space-y-2">
              <div className="text-xs text-slate-400 font-medium">Recommended Problems:</div>
              {area.problems.map((problem, problemIndex) => (
                <div
                  key={problemIndex}
                  className="flex items-center justify-between text-xs py-1 px-2 rounded bg-slate-600/20 hover:bg-slate-600/40 transition-colors cursor-pointer"
                >
                  <span className="text-slate-300">{problem}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-orange-400 transition-colors" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
        <h4 className="text-sm font-medium text-orange-400 mb-2">Quick Tips</h4>
        <ul className="space-y-1 text-xs text-slate-300">
          <li>• Start with easier DP problems like Fibonacci variations</li>
          <li>• Practice graph traversal patterns daily</li>
          <li>• Use visual tools to understand recursive patterns</li>
        </ul>
      </div>
    </div>
  );
};

export default WeakAreas;
