/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Target, BookOpen, AlertCircle, ArrowRight } from 'lucide-react';
import { Question, QuestionCategory, ResultAnalysis } from '../types';
import { cn } from '../lib/utils';

interface ResultsProps {
  analysis: ResultAnalysis;
  onRestart: () => void;
}

const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  COMPREHENSION: 'Reading Comprehension',
  IDIOMS: 'Idioms & Interpretation',
  LEXIS_STRUCTURE: 'Use of English & Word Stress',
  SYNONYMS: 'Synonyms (Vocabulary)',
  ANTONYMS: 'Antonyms (Vocabulary)',
  PHYSICS: 'Physics (Sound & Acoustics)',
  CHEMISTRY: 'Chemistry (Electrolysis)',
  BIOLOGY: 'Biology (Heredity & Variation)',
  GOVERNMENT: 'Government (Political Parties & Pressure Groups)',
  GENERAL_PAPER: 'General Paper (Current Affairs & History)',
  ECONOMICS: 'Economics (Money & Inflation)',
  ENGLISH: 'English Language Quick Drill',
};

export const Results: React.FC<ResultsProps> = ({ analysis, onRestart }) => {
  return (
    <div className="max-w-3xl mx-auto p-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-50"
      >
        {/* Header Section */}
        <div className="bg-emerald-600 p-8 text-white text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-full mb-4 shadow-inner">
              <Trophy size={40} className="text-emerald-50" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Quiz Completed!</h1>
            <p className="text-emerald-100 opacity-90">Great job on finishing the ReadySpace evaluation.</p>
          </motion.div>
        </div>

        {/* Score Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16 mb-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 text-center"
            >
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Your Score</p>
              <h2 className="text-4xl font-black text-emerald-600">{analysis.score} / {analysis.total}</h2>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 text-center"
            >
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Percentage</p>
              <h2 className="text-4xl font-black text-emerald-600">{analysis.percentage}%</h2>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 text-center"
            >
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Performance</p>
              <h2 className="text-lg font-bold text-emerald-700 mt-2">
                {analysis.percentage >= 80 ? 'Exceptional' : analysis.percentage >= 60 ? 'Commendable' : 'Keep Improving'}
              </h2>
            </motion.div>
          </div>

          {/* Detailed Analysis */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="text-emerald-600" size={24} />
                Category Performance
              </h3>
              <div className="grid grid-cols-1 gap-4">
                    {Object.entries(analysis.categoryPerformance)
                      .filter(([_, stats]) => stats.total > 0)
                      .map(([cat, stats], i) => {
                        const categoryLabel = CATEGORY_LABELS[cat as QuestionCategory] || cat;
                        const percentage = Math.round((stats.correct / stats.total) * 100);
                        
                        return (
                          <motion.div
                            key={cat}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + (i * 0.1) }}
                            className="flex flex-col gap-2"
                          >
                            <div className="flex justify-between text-sm font-medium">
                              <span className="text-gray-700">{categoryLabel}</span>
                              <span className="text-emerald-700">{percentage}%</span>
                            </div>
                            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                                className={cn(
                                  "h-full rounded-full transition-all",
                                  percentage >= 75 ? "bg-emerald-500" : 
                                  percentage >= 50 ? "bg-amber-500" : "bg-red-500"
                                )}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <section className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <Trophy className="text-emerald-600" size={20} />
                  Top Strengths
                </h3>
                <ul className="space-y-2">
                  {analysis.strengths.length > 0 ? analysis.strengths.map((str, i) => (
                    <li key={i} className="flex items-center gap-2 text-emerald-800 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {str}
                    </li>
                  )) : (
                    <li className="text-gray-500 text-sm italic">Keep practicing to build your strengths!</li>
                  )}
                </ul>
              </section>

              <section className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="text-amber-600" size={20} />
                  Areas to Focus
                </h3>
                <ul className="space-y-2">
                  {analysis.weaknesses.length > 0 ? analysis.weaknesses.map((weak, i) => (
                    <li key={i} className="flex items-center gap-2 text-amber-800 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {weak}
                    </li>
                  )) : (
                    <li className="text-emerald-700 text-sm font-medium">No major weaknesses identified. Stellar work!</li>
                  )}
                </ul>
              </section>
            </div>

            {/* Recommended Learning Path */}
            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-3xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen size={28} />
                Recommended Learning Path
              </h3>
              <p className="text-emerald-50 leading-relaxed mb-6">
                {analysis.recommendation}
              </p>
              
              <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                <p className="text-sm font-medium opacity-90 mb-2 uppercase tracking-widest text-emerald-200">
                  {analysis.subject === 'ENGLISH' && 'Strategic Professional Advice for Use of English'}
                  {analysis.subject === 'ENGLISH_DRILL' && 'Strategic Professional Advice for English Quick Drill'}
                  {analysis.subject === 'PHYSICS_DRILL' && 'Strategic Professional Advice for Physics Quick Drill'}
                  {analysis.subject === 'GENERAL_PAPER' && 'Strategic Professional Advice for General Paper'}
                  {analysis.subject === 'ECONOMICS' && 'Strategic Professional Advice for Economics'}
                  {analysis.subject === 'GOVERNMENT' && 'Strategic Professional Advice for Government'}
                </p>
                <ul className="space-y-3">
                  {(analysis.subject === 'ENGLISH' || analysis.subject === 'ENGLISH_DRILL') && (
                    <>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>The &ldquo;-tion&rdquo; Rule:</strong> In words like <em>Termination</em>, <em>Dedication</em>, and <em>Demarcation</em>, stress almost always falls on the syllable immediately preceding the suffix &ldquo;-tion&rdquo;.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>The &ldquo;-ity&rdquo; Rule:</strong> For words ending in &ldquo;-ity,&rdquo; such as <em>Captivity</em>, the stress typically falls on the third syllable from the end.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Emphatic Stress:</strong> The correct response always contradicts or directly questions the capitalized word (e.g., in '<strong>EMEKA</strong> finished...', the focus is on *Who* finished).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Practice Without Audio:</strong> Learn to identify sounds visually; frequent trap questions use words like <em>Coup</em> (sounding like <em>coo</em>) to test spelling vs. phonetics.</span>
                      </li>
                    </>
                  )}
                  {analysis.subject === 'PHYSICS_DRILL' && (
                    <>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Faraday's Laws:</strong> Mass deposited is directly proportional to quantity of charge (m = zIt). Always convert time into seconds before performing calculations!</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Electrolytic Purification:</strong> Make sure the impure/crude metal is connected to the positive terminal (anode), while the pure metal is the negative terminal (cathode).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Gaseous Conduction:</strong> Conduction of electricity through gases is achieved primarily under extremely low pressure and highly elevated potential difference.</span>
                      </li>
                    </>
                  )}
                  {analysis.subject === 'GENERAL_PAPER' && (
                    <>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Administrative History:</strong> Memorize pivotal historical dates such as the creation of the first 12 states (May 27, 1967) and the movement of the capital city to Abuja (December 12, 1991).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Pioneering Figures:</strong> Study outstanding national leaders and educational leaders (e.g., Herbert Macaulay's nationalism milestones and Prof. Grace Alele Williams as Nigeria's first female VC).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Regional History:</strong> Have a solid grasp of key pre-colonial administrative setups, such as the roles within the Benin Empire (e.g., the Iyiasere as traditional Prime Minister).</span>
                      </li>
                    </>
                  )}
                  {analysis.subject === 'ECONOMICS' && (
                    <>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Monetary Interventions:</strong> Remember that during high inflation, the Central Bank sells treasury bills under Open Market Operations (OMO) to restrict the money supply.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Liquidity Motives:</strong> Review the Keynesian motives for holding cash—transactional, speculative, and precautionary (for emergencies like illness or accidents).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Velocity & Quantity Theory:</strong> Master the Equation of Exchange (MV=PY) and understand that velocity of money is Nominal GDP / Money Supply.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span><strong>Unemployment and Inflation:</strong> Be ready for stagflation questions where high unemployment and persistent inflation occur simultaneously.</span>
                      </li>
                    </>
                  )}
                  {analysis.subject === 'GOVERNMENT' && (
                    <>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span>Differentiate clearly between political parties (power-seeking) and pressure groups (policy-influencing).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight size={18} className="mt-0.5 flex-shrink-0 text-emerald-200" />
                        <span>Study the mechanics of different electoral systems (e.g., proportional representation, single-party vs. multi-party structures).</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </section>

            <div className="flex justify-center pt-4">
              <button
                onClick={onRestart}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-emerald-200 active:scale-95"
              >
                Restart Evaluation
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
