/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, XCircle, Info, Timer as TimerIcon } from 'lucide-react';
import { Question } from '../types';
import { cn } from '../lib/utils';
import Markdown from 'react-markdown';

interface QuizProps {
  questions: Question[];
  onFinish: (answers: (number | null)[]) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (idx: number) => void;
  answers: (number | null)[];
  setAnswers: (answers: (number | null)[]) => void;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export const Quiz: React.FC<QuizProps> = ({
  questions,
  onFinish,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  answers,
  setAnswers,
  timeLeft,
  setTimeLeft,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const hasAnswered = answers[currentQuestionIndex] !== null;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinish(answers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onFinish, setTimeLeft, answers]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionIndex: number) => {
    if (hasAnswered) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-4 py-8">
      {/* Progress Section */}
      <div className="mb-8 space-y-4">
        <div className="flex justify-between items-end mb-2">
          <div>
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">Question {currentQuestionIndex + 1} of {questions.length}</span>
            <h2 className="text-gray-900 text-2xl font-bold mt-1">ReadySpace Assessment</h2>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className={cn(
              "flex items-center gap-2 font-mono text-xl font-bold px-3 py-1 rounded-lg mb-1",
              timeLeft < 60 ? "bg-red-50 text-red-600 animate-pulse" : "bg-emerald-50 text-emerald-700"
            )}>
              <TimerIcon size={18} />
              {formatTime(timeLeft)}
            </div>
            <span className="text-gray-400 text-sm font-medium">{Math.round(progress)}% Complete</span>
          </div>
        </div>
        <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Passages (if any) */}
        {currentQuestion.passage && (
          <div className="lg:col-span-5 bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 overflow-y-auto max-h-[60vh] custom-scrollbar">
            <div className="prose prose-emerald prose-sm max-w-none prose-headings:text-emerald-900">
              <Markdown>{currentQuestion.passage}</Markdown>
            </div>
          </div>
        )}

        {/* Right Side: Question & Options */}
        <div className={cn("space-y-6", currentQuestion.passage ? "lg:col-span-7" : "lg:col-span-12")}>
          <motion.div
            key={currentQuestionIndex}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div className="mb-2">
               <span className="inline-block px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-bold uppercase mb-4 tracking-tighter">
                {currentQuestion.category.replace('_', ' ')}
              </span>
            </div>
            <div className="text-xl font-medium text-gray-800 leading-relaxed mb-8">
               <Markdown>{currentQuestion.text}</Markdown>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = answers[currentQuestionIndex] === idx;
                const isCorrect = currentQuestion.correctAnswer === idx;
                const showResult = hasAnswered;

                return (
                  <button
                    key={idx}
                    disabled={hasAnswered}
                    onClick={() => handleAnswer(idx)}
                    className={cn(
                      "w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-4 group relative overflow-hidden",
                      !showResult && "border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30",
                      showResult && isCorrect && "border-emerald-500 bg-emerald-50 text-emerald-900",
                      showResult && isSelected && !isCorrect && "border-red-500 bg-red-50 text-red-900",
                      showResult && !isSelected && !isCorrect && "border-gray-50 opacity-50 capitalize"
                    )}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs mt-0.5",
                      !showResult && "border-gray-300 group-hover:border-emerald-500",
                      showResult && isCorrect && "border-emerald-600 bg-emerald-600 text-white",
                      showResult && isSelected && !isCorrect && "border-red-600 bg-red-600 text-white"
                    )}>
                      {showResult ? (
                        isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />
                      ) : (
                        String.fromCharCode(65 + idx)
                      )}
                    </div>
                    <span className="font-medium text-inherit leading-tight">{option}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {hasAnswered && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-8 pt-6 border-t border-gray-100"
                >
                  <div className="bg-emerald-50 rounded-xl p-4 flex gap-3 text-sm text-emerald-800">
                    <Info className="flex-shrink-0 mt-0.5 text-emerald-600" size={18} />
                    <div>
                      <p className="font-bold mb-1">Explanation</p>
                      <p className="opacity-90">{currentQuestion.explanation}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <button
              onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2 p-2 px-4 rounded-xl text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition-all font-medium"
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            <div className="hidden md:flex gap-1">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "w-2 h-1 rounded-full transition-all",
                    currentQuestionIndex === idx ? "w-6 bg-emerald-600" : (answers[idx] !== null ? "bg-emerald-300" : "bg-gray-200")
                  )}
                />
              ))}
            </div>
            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={() => onFinish(answers)}
                disabled={!hasAnswered}
                className="flex items-center gap-2 p-2 px-6 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 transition-all font-bold shadow-lg shadow-emerald-100"
              >
                Finish Test
              </button>
            ) : (
                <button
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                disabled={!hasAnswered}
                className="flex items-center gap-2 p-2 px-6 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 transition-all font-bold shadow-lg shadow-emerald-100"
              >
                Next
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
