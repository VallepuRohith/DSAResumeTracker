
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import StatsOverview from '@/components/StatsOverview';
import SkillRadar from '@/components/SkillRadar';
import PracticeChart from '@/components/PracticeChart';
import ResumeAnalyzer from '@/components/ResumeAnalyzer';
import WeakAreas from '@/components/WeakAreas';
import ActivityHeatmap from '@/components/ActivityHeatmap';

const Index = () => {
  const [user] = useState({
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    resumeScore: 78,
    level: "Intermediate",
    streak: 23
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative z-10">
        <Header user={user} />
        
        <main className="container mx-auto px-6 py-8 space-y-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              DSA Resume Ranker
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Analyze your coding profile across platforms and boost your FAANG interview readiness
            </p>
          </motion.div>

          {/* Stats Overview */}
          <StatsOverview user={user} />

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Skill Radar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="xl:col-span-1"
            >
              <SkillRadar />
            </motion.div>

            {/* Practice Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="xl:col-span-2"
            >
              <PracticeChart />
            </motion.div>

            {/* Activity Heatmap */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 xl:col-span-2"
            >
              <ActivityHeatmap />
            </motion.div>

            {/* Weak Areas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="xl:col-span-1"
            >
              <WeakAreas />
            </motion.div>

            {/* Resume Analyzer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:col-span-2 xl:col-span-3"
            >
              <ResumeAnalyzer />
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
