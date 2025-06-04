
import { motion } from 'framer-motion';
import { User, Github, Trophy, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  user: {
    name: string;
    avatar: string;
    resumeScore: number;
    level: string;
    streak: number;
  };
}

const Header = ({ user }: HeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-900/30"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">AlgoScore</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="text-slate-300">{user.streak} day streak</span>
              </div>
              <div className="text-slate-300">
                Level: <span className="text-purple-400 font-semibold">{user.level}</span>
              </div>
              <div className="text-slate-300">
                Score: <span className="text-green-400 font-semibold">{user.resumeScore}/100</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full border-2 border-purple-400"
              />
              <span className="hidden sm:block text-white font-medium">{user.name}</span>
            </div>

            <Button variant="outline" size="sm" className="border-slate-600 hover:border-purple-400">
              <Github className="w-4 h-4 mr-2" />
              Connect
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
