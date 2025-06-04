
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ResumeAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResume, setHasResume] = useState(true);

  const analysisResults = {
    overallScore: 78,
    strengths: [
      'Strong mention of data structures in projects',
      'Good variety of programming languages',
      'Relevant internship experience'
    ],
    gaps: [
      'Resume mentions "Graph Algorithms" but low practice count (12 problems)',
      'Dynamic Programming skills not demonstrated in projects',
      'Missing system design experience'
    ],
    suggestions: [
      'Add a project showcasing graph algorithms implementation',
      'Solve 20+ DP problems to match resume claims',
      'Include system design project or coursework'
    ]
  };

  const handleFileUpload = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResume(true);
    }, 2000);
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white flex items-center">
            <FileText className="w-5 h-5 mr-2 text-blue-400" />
            Resume Analysis
          </h3>
          <p className="text-sm text-slate-400 mt-1">AI-powered resume vs. coding profile analysis</p>
        </div>
        {!hasResume && (
          <Button 
            onClick={handleFileUpload}
            disabled={isAnalyzing}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Upload className="w-4 h-4 mr-2" />
            {isAnalyzing ? 'Analyzing...' : 'Upload Resume'}
          </Button>
        )}
      </div>

      {!hasResume ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-700/50 flex items-center justify-center">
            <Upload className="w-8 h-8 text-slate-400" />
          </div>
          <h4 className="text-lg font-medium text-white mb-2">Upload Your Resume</h4>
          <p className="text-slate-400 mb-6">Let AI analyze your resume against your coding profile</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Overall Score */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
            <div>
              <h4 className="text-lg font-semibold text-white">Resume-Profile Alignment</h4>
              <p className="text-sm text-slate-300">How well your coding matches your resume</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-400">{analysisResults.overallScore}%</div>
              <div className="text-xs text-slate-400">Match Score</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Strengths */}
            <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
              <h5 className="font-medium text-green-400 mb-3 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Strengths
              </h5>
              <div className="space-y-2">
                {analysisResults.strengths.map((strength, index) => (
                  <div key={index} className="text-xs text-slate-300 p-2 bg-slate-700/30 rounded">
                    {strength}
                  </div>
                ))}
              </div>
            </div>

            {/* Gaps */}
            <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
              <h5 className="font-medium text-orange-400 mb-3 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                Gaps Found
              </h5>
              <div className="space-y-2">
                {analysisResults.gaps.map((gap, index) => (
                  <div key={index} className="text-xs text-slate-300 p-2 bg-slate-700/30 rounded">
                    {gap}
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <h5 className="font-medium text-blue-400 mb-3 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Action Items
              </h5>
              <div className="space-y-2">
                {analysisResults.suggestions.map((suggestion, index) => (
                  <div key={index} className="text-xs text-slate-300 p-2 bg-slate-700/30 rounded">
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <Button variant="outline" size="sm" className="border-slate-600 hover:border-blue-400">
              Generate Report
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-slate-600 hover:border-green-400">
                Update Resume
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Start Practice Plan
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
