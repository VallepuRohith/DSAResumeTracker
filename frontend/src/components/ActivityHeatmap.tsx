
import { motion } from 'framer-motion';
import { Activity, Github } from 'lucide-react';

const ActivityHeatmap = () => {
  // Generate mock activity data for the past 12 weeks
  const weeks = 12;
  const daysPerWeek = 7;
  const generateActivityData = () => {
    const data = [];
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < daysPerWeek; day++) {
        weekData.push({
          date: new Date(Date.now() - (weeks - week) * 7 * 24 * 60 * 60 * 1000 + day * 24 * 60 * 60 * 1000),
          activity: Math.floor(Math.random() * 5),
          problems: Math.floor(Math.random() * 8)
        });
      }
      data.push(weekData);
    }
    return data;
  };

  const activityData = generateActivityData();
  const dayLabels = ['Mon', 'Wed', 'Fri'];

  const getActivityColor = (level: number) => {
    const colors = [
      'bg-slate-700/50', // 0 - no activity
      'bg-green-900/50', // 1 - low
      'bg-green-700/70', // 2 - medium-low
      'bg-green-500/80', // 3 - medium
      'bg-green-400'     // 4 - high
    ];
    return colors[level] || colors[0];
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white flex items-center">
            <Activity className="w-5 h-5 mr-2 text-green-400" />
            Activity Heatmap
          </h3>
          <p className="text-sm text-slate-400 mt-1">Daily coding activity over the past 12 weeks</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getActivityColor(level)}`}
              />
            ))}
            <span>More</span>
          </div>
          <Github className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      <div className="flex space-x-1">
        {/* Day labels */}
        <div className="flex flex-col justify-between text-xs text-slate-400 pr-2">
          <div className="h-3"></div>
          {dayLabels.map((day, index) => (
            <div key={day} className="h-3 flex items-center">
              {index % 2 === 0 && day}
            </div>
          ))}
        </div>

        {/* Heatmap grid */}
        <div className="flex space-x-1">
          {activityData.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col space-y-1">
              {week.map((day, dayIndex) => (
                <motion.div
                  key={`${weekIndex}-${dayIndex}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: (weekIndex * daysPerWeek + dayIndex) * 0.01 
                  }}
                  className={`w-3 h-3 rounded-sm ${getActivityColor(day.activity)} hover:ring-2 hover:ring-green-400/50 transition-all duration-200 cursor-pointer`}
                  title={`${day.date.toDateString()}: ${day.problems} problems solved`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-slate-700/30 rounded-xl">
          <div className="text-slate-300 text-sm">Current Streak</div>
          <div className="text-2xl font-bold text-green-400 mt-1">23 days</div>
        </div>
        <div className="p-4 bg-slate-700/30 rounded-xl">
          <div className="text-slate-300 text-sm">Longest Streak</div>
          <div className="text-2xl font-bold text-blue-400 mt-1">47 days</div>
        </div>
        <div className="p-4 bg-slate-700/30 rounded-xl">
          <div className="text-slate-300 text-sm">Total Active</div>
          <div className="text-2xl font-bold text-purple-400 mt-1">68 days</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityHeatmap;
