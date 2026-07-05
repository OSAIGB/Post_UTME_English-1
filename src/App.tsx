/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Trophy, Sparkles, ShieldCheck } from 'lucide-react';
import { SOUND_QUESTIONS } from './data/physics/sound';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { AntiCheatGuard } from './components/AntiCheatGuard';
import { QuizState, ResultAnalysis, QuestionCategory } from './types';

export default function App() {
  const [gameState, setGameState] = useState<'START' | 'QUIZ' | 'RESULTS'>('START');
  const [cheatWarnings, setCheatWarnings] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(SOUND_QUESTIONS.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(6 * 60); // 6 minutes in seconds

  const startQuiz = () => {
    setGameState('QUIZ');
    setTimeLeft(6 * 60);
  };

  const handleWarning = useCallback(() => {
    setCheatWarnings(prev => prev + 1);
  }, []);

  const finishQuiz = () => {
    setGameState('RESULTS');
  };

  const restartQuiz = () => {
    setGameState('START');
    setAnswers(new Array(SOUND_QUESTIONS.length).fill(null));
    setCurrentQuestionIndex(0);
    setCheatWarnings(0);
    setTimeLeft(6 * 60);
  };

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
    };

    SOUND_QUESTIONS.forEach((q, idx) => {
      categoryStats[q.category].total++;
      if (answers[idx] === q.correctAnswer) {
        score++;
        categoryStats[q.category].correct++;
      }
    });

    const percentage = Math.round((score / SOUND_QUESTIONS.length) * 100);
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
    if (percentage >= 80) {
      recommendation = "Exceptional understanding of acoustics and wave properties! Your mastery of speed, reflection, and wave characteristics is outstanding.";
    } else if (percentage >= 60) {
      recommendation = "Good grasp of physics of sound. We recommend reviewing wave calculations (velocity, frequency, period, wavelength) to improve your score.";
    } else {
      recommendation = "There is room for growth in your acoustic physics journey. Focus on fundamental concepts like wave classifications, medium requirements, and speed equations.";
    }

    return {
      score,
      total: SOUND_QUESTIONS.length,
      percentage,
      categoryPerformance: categoryStats,
      strengths,
      weaknesses,
      recommendation
    };
  }, [answers]);

  return (
    <AntiCheatGuard warnings={cheatWarnings} onWarning={handleWarning}>
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-100 select-none">
        <AnimatePresence mode="wait">
          {gameState === 'START' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
            >
              <div className="w-24 h-24 bg-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl rotate-3">
                <BookOpen size={48} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tighter">
                Ready<span className="text-emerald-600">Space.</span>
              </h1>
              <p className="max-w-2xl text-xl text-gray-500 mb-12 leading-relaxed">
                A specialized environment for students to evaluate their performance. 
                15 curated questions to measure your aptitude in **Physics (Sound & Acoustics)**.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full">
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <Trophy className="text-emerald-600 mb-3 mx-auto" />
                  <h3 className="font-bold">Real-time Score</h3>
                  <p className="text-sm text-gray-600">Get instant feedback on every answer.</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <ShieldCheck className="text-emerald-600 mb-3 mx-auto" />
                  <h3 className="font-bold">Proctor Mode</h3>
                  <p className="text-sm text-gray-600">Anti-cheat measures enabled for integrity.</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <Sparkles className="text-emerald-600 mb-3 mx-auto" />
                  <h3 className="font-bold">Smart Insights</h3>
                  <p className="text-sm text-gray-600">Personalized path recommendation at the end.</p>
                </div>
              </div>

              <button
                onClick={startQuiz}
                className="group relative px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xl rounded-2xl transition-all shadow-xl shadow-emerald-200 active:scale-95"
              >
                Begin Assessment
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              
              <p className="mt-8 text-gray-400 text-sm font-medium uppercase tracking-widest">
                Quick Drill: 15 Questions | Time Limit: 6 Minutes
              </p>
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
                questions={SOUND_QUESTIONS}
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
        <footer className="py-8 text-center text-gray-300 text-xs font-medium uppercase tracking-[0.2em] pointer-events-none">
          ReadySpace &copy; {new Date().getFullYear()} &bull; Academic Evaluation Platform
        </footer>
      </div>
    </AntiCheatGuard>
  );
}
