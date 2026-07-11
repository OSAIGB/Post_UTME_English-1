/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Trophy, Sparkles, ShieldCheck, GraduationCap, Flame, ArrowRight, ShieldAlert } from 'lucide-react';
import { GOVERNMENT_QUESTIONS } from './data/government/political_science';
import { ENGLISH_QUESTIONS } from './data/english/oral_english';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { AntiCheatGuard } from './components/AntiCheatGuard';
import { QuizState, ResultAnalysis, QuestionCategory } from './types';

export default function App() {
  const [gameState, setGameState] = useState<'START' | 'QUIZ' | 'RESULTS'>('START');
  const [selectedSubject, setSelectedSubject] = useState<'GOVERNMENT' | 'ENGLISH'>('GOVERNMENT');
  const [cheatWarnings, setCheatWarnings] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // Default to 15 minutes in seconds

  const startQuiz = (subject: 'GOVERNMENT' | 'ENGLISH') => {
    setSelectedSubject(subject);
    const questionsCount = subject === 'GOVERNMENT' ? GOVERNMENT_QUESTIONS.length : ENGLISH_QUESTIONS.length;
    setAnswers(new Array(questionsCount).fill(null));
    setTimeLeft(15 * 60); // 15 minutes for both subjects
    setCurrentQuestionIndex(0);
    setCheatWarnings(0);
    setGameState('QUIZ');
  };

  const handleWarning = useCallback(() => {
    setCheatWarnings(prev => prev + 1);
  }, []);

  const finishQuiz = () => {
    setGameState('RESULTS');
  };

  const restartQuiz = () => {
    setGameState('START');
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setCheatWarnings(0);
  };

  const activeQuestions = useMemo(() => {
    return selectedSubject === 'GOVERNMENT' ? GOVERNMENT_QUESTIONS : ENGLISH_QUESTIONS;
  }, [selectedSubject]);

  const analysis = useMemo((): ResultAnalysis => {
    let score = 0;
    const categoryStats: Record<QuestionCategory, { correct: number; total: number }> = {
      COMPREHENSION: { correct: 0, total: 0 },
      IDIOMS: { correct: 0, total: 0 },
      LEXIS_STRUCTURE: { correct: 0, total: 0 },
      SYNONYMS: { correct: 0, total: 0 },
      ANTONYMS: { correct: 0, total: 0 },
      PHYSICS: { correct: 0, total: 0 },
      CHEMISTRY: { correct: 0, total: 0 },
      BIOLOGY: { correct: 0, total: 0 },
      GOVERNMENT: { correct: 0, total: 0 },
    };

    activeQuestions.forEach((q, idx) => {
      // Safety check in case answers array is not initialized or shorter
      const userAnswer = answers[idx];
      categoryStats[q.category].total++;
      if (userAnswer === q.correctAnswer) {
        score++;
        categoryStats[q.category].correct++;
      }
    });

    const totalQuestions = activeQuestions.length || 15;
    const percentage = Math.round((score / totalQuestions) * 100);
    const strengths: string[] = [];
    const weaknesses: string[] = [];

    (Object.entries(categoryStats) as [QuestionCategory, { correct: number; total: number }][]).forEach(([cat, stats]) => {
      if (stats.total === 0) return;
      const p = (stats.correct / stats.total) * 100;
      const label = cat.replace('_', ' ');
      if (p >= 80) strengths.push(label);
      else if (p < 50) weaknesses.push(label);
    });

    let recommendation = "";
    if (selectedSubject === 'GOVERNMENT') {
      if (percentage >= 80) {
        recommendation = "Exceptional understanding of political systems, parties, and pressure groups! Your knowledge of electoral processes and group dynamics is top-tier.";
      } else if (percentage >= 60) {
        recommendation = "Good grasp of government concepts. We recommend studying different party systems and proportional representation mechanics to perfect your score.";
      } else {
        recommendation = "There is room for growth. Focus on core distinctions between political parties and pressure groups, as well as the classifications of party systems.";
      }
    } else {
      if (percentage >= 80) {
        recommendation = "Exceptional understanding of Use of English and stress rules! Your grasp of syllable stress rules (like the -tion and -ity suffixes) and phonetic identification is stellar.";
      } else if (percentage >= 60) {
        recommendation = "Good grasp of Use of English and stress patterns. We recommend practicing visual identification of vowel and consonant sounds to boost your score.";
      } else {
        recommendation = "There is room for improvement in Use of English. Review structural rules like the -tion stress rule, -ity stress rule, and noun vs. verb stress changes.";
      }
    }

    return {
      score,
      total: totalQuestions,
      percentage,
      categoryPerformance: categoryStats,
      strengths,
      weaknesses,
      recommendation,
      subject: selectedSubject,
    };
  }, [answers, activeQuestions, selectedSubject]);

  return (
    <AntiCheatGuard warnings={cheatWarnings} onWarning={handleWarning}>
      <div className={`${gameState === 'START' ? 'h-[100dvh] overflow-hidden' : 'min-h-screen'} bg-slate-50 text-gray-900 font-sans selection:bg-emerald-100 select-none flex flex-col justify-between`}>
        <AnimatePresence mode="wait">
          {gameState === 'START' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-6xl mx-auto w-full px-3 sm:px-6 py-2 sm:py-6 md:py-16 flex flex-col items-center justify-center flex-grow overflow-hidden"
            >
              {/* Brand Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 bg-white px-3 sm:px-5 py-1 sm:py-2.5 rounded-full shadow-sm border border-slate-100">
                <div className="w-6 h-6 sm:w-8 h-8 bg-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                  <BookOpen size={12} className="text-white" />
                </div>
                <span className="text-[11px] sm:text-sm font-black text-slate-800 tracking-wide">ReadySpace Platform</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 text-center tracking-tight max-w-4xl leading-none mb-1 sm:mb-4">
                Accelerate Your Exam <span className="text-emerald-600 relative inline-block">Preparation.</span>
              </h1>
              
              <p className="max-w-2xl text-[11px] sm:text-lg md:text-xl text-slate-500 text-center mb-3 sm:mb-12 leading-relaxed px-2">
                A specialized, secure diagnostic sandbox designed to measure and elevate your performance. Evaluate your precision in <strong className="text-slate-800">Government</strong> or master <strong className="text-slate-800">Use of English & Word Stress</strong> today.
              </p>

              {/* Subject Selection Grid - Highly Attractive Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-8 w-full max-w-4xl mb-3 sm:mb-12 px-2 sm:px-0">
                
                {/* Government Card */}
                <motion.div 
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                  <div>
                    <div className="flex justify-between items-start mb-3 sm:mb-6">
                      <div className="p-1.5 sm:p-3.5 bg-emerald-50 text-emerald-700 rounded-xl sm:rounded-2xl border border-emerald-100/60">
                        <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7" />
                      </div>
                      <span className="bg-emerald-50 text-emerald-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                        15 Mins
                      </span>
                    </div>
                    
                    <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Government</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 hidden sm:block">
                      Evaluate your grasp on political parties, pressure groups, electoral structures, and key power classification frameworks. Ideal for JAMB & Post-UTME candidates.
                    </p>

                    <div className="space-y-2.5 mb-8 hidden sm:block">
                      <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                        <Flame size={14} className="text-emerald-600" />
                        <span>15 Curated Comprehensive Questions</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                        <ShieldCheck size={14} className="text-emerald-600" />
                        <span>Interactive Proctored Mode Enabled</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => startQuiz('GOVERNMENT')}
                    className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-emerald-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-emerald-100 flex items-center justify-center gap-1 sm:gap-2 group"
                  >
                    <span className="hidden sm:inline">Launch Government Drill</span>
                    <span className="inline sm:hidden">Launch</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                {/* English Card */}
                <motion.div 
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                  <div>
                    <div className="flex justify-between items-start mb-3 sm:mb-6">
                      <div className="p-1.5 sm:p-3.5 bg-amber-50 text-amber-700 rounded-xl sm:rounded-2xl border border-amber-100/60">
                        <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" />
                      </div>
                      <span className="bg-amber-50 text-amber-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                        15 Mins
                      </span>
                    </div>
                    
                    <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Use of English</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 hidden sm:block">
                      Master phonetics, word stress patterns, and professional pronunciation keys. Gain insights on standard exam guidelines, suffix shifts, and phonetic traps.
                    </p>

                    <div className="space-y-2.5 mb-8 hidden sm:block">
                      <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                        <Flame size={14} className="text-amber-600" />
                        <span>15 High-Yield JAMB & UNIBEN Past Items</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                        <ShieldCheck size={14} className="text-amber-600" />
                        <span>Strategic Advice & Suffix Rules Included</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => startQuiz('ENGLISH')}
                    className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-amber-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-amber-100 flex items-center justify-center gap-1 sm:gap-2 group"
                  >
                    <span className="hidden sm:inline">Launch English Drill</span>
                    <span className="inline sm:hidden">Launch</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

              </div>

              {/* Global Trust Factors / Features Row */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full border-t border-slate-200/60 pt-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm text-emerald-600">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Real-time Score Analysis</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Instant scoring, breakdown, and detailed phonetic or structural explanations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm text-emerald-600">
                    <ShieldAlert size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">AI-Powered Proctor Mode</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Tracks focus loss, tab changes, and exit events to protect academic integrity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm text-emerald-600">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Smart Suffix Advice</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Actionable strategic suggestions aligned directly with your weaknesses.</p>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {gameState === 'QUIZ' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Quiz
                questions={activeQuestions}
                onFinish={finishQuiz}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                answers={answers}
                setAnswers={setAnswers}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
              />
            </motion.div>
          )}

          {gameState === 'RESULTS' && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Results analysis={analysis} onRestart={restartQuiz} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Footer Decoration */}
        <footer className="py-2.5 sm:py-8 text-center text-slate-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] pointer-events-none mt-auto">
          ReadySpace &copy; {new Date().getFullYear()} &bull; Academic Evaluation Platform
        </footer>
      </div>
    </AntiCheatGuard>
  );
}
