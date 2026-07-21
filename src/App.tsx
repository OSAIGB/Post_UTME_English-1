/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Trophy, Sparkles, ShieldCheck, GraduationCap, Flame, ArrowRight, ShieldAlert, Dna, BookText } from 'lucide-react';
import { GOVERNMENT_QUESTIONS } from './data/government/governance_ideologies';
import { GOVERNMENT_QUESTIONS as GOVERNMENT_POLITICAL_QUESTIONS } from './data/government/political_science';
import { ENGLISH_QUESTIONS } from './data/english/oral_english';
import { ECONOMICS_QUESTIONS } from './data/economics/money_inflation';
import { EQUILIBRIUM_FRICTION_QUESTIONS } from './data/physics/equilibrium_friction';
import { LIQUIDS_GASES_QUESTIONS } from './data/physics/liquids_gases';
import { ENGLISH_QUICK_DRILL_QUESTIONS } from './data/english/quick_drill';
import { ORGANIC_CHEMISTRY_QUESTIONS } from './data/chemistry/organic_chemistry';
import { BIOLOGY_CELL_ORG_QUESTIONS } from './data/biology/living_cell_org';
import { LITERATURE_QUESTIONS } from './data/literature/general_literary_terms';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { AntiCheatGuard } from './components/AntiCheatGuard';
import { QuizState, ResultAnalysis, QuestionCategory } from './types';

type SubjectType = 'BIOLOGY_DRILL' | 'LITERATURE_DRILL' | 'PHYSICS_DRILL' | 'GOVERNMENT_DRILL' | 'CHEMISTRY_DRILL' | 'ENGLISH_DRILL' | 'ECONOMICS' | 'ENGLISH' | 'PHYSICS_LIQUIDS' | 'GOVERNMENT_POLITICAL';

export default function App() {
  const [gameState, setGameState] = useState<'START' | 'QUIZ' | 'RESULTS'>('START');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('BIOLOGY_DRILL');
  const [cheatWarnings, setCheatWarnings] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // Default to 15 minutes in seconds
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);

  const startQuiz = (subject: SubjectType) => {
    setSelectedSubject(subject);
    let questionsCount = 15;
    if (subject === 'BIOLOGY_DRILL') questionsCount = BIOLOGY_CELL_ORG_QUESTIONS.length;
    else if (subject === 'LITERATURE_DRILL') questionsCount = LITERATURE_QUESTIONS.length;
    else if (subject === 'PHYSICS_DRILL') questionsCount = EQUILIBRIUM_FRICTION_QUESTIONS.length;
    else if (subject === 'ENGLISH_DRILL') questionsCount = ENGLISH_QUICK_DRILL_QUESTIONS.length;
    else if (subject === 'CHEMISTRY_DRILL') questionsCount = ORGANIC_CHEMISTRY_QUESTIONS.length;
    else if (subject === 'ECONOMICS') questionsCount = ECONOMICS_QUESTIONS.length;
    else if (subject === 'GOVERNMENT_DRILL') questionsCount = GOVERNMENT_QUESTIONS.length;
    else if (subject === 'PHYSICS_LIQUIDS') questionsCount = LIQUIDS_GASES_QUESTIONS.length;
    else if (subject === 'GOVERNMENT_POLITICAL') questionsCount = GOVERNMENT_POLITICAL_QUESTIONS.length;
    else if (subject === 'ENGLISH') questionsCount = ENGLISH_QUESTIONS.length;

    setAnswers(new Array(questionsCount).fill(null));
    if (subject === 'BIOLOGY_DRILL' || subject === 'LITERATURE_DRILL' || subject === 'PHYSICS_DRILL' || subject === 'ENGLISH_DRILL' || subject === 'CHEMISTRY_DRILL' || subject === 'GOVERNMENT_DRILL') {
      setTimeLeft(3 * 60); // 3 minutes for quick drills
    } else if (subject === 'ECONOMICS') {
      setTimeLeft(4 * 60); // 4 minutes tops for Economics
    } else {
      setTimeLeft(15 * 60); // 15 minutes for other full subjects
    }
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
    if (selectedSubject === 'BIOLOGY_DRILL') return BIOLOGY_CELL_ORG_QUESTIONS;
    if (selectedSubject === 'LITERATURE_DRILL') return LITERATURE_QUESTIONS;
    if (selectedSubject === 'PHYSICS_DRILL') return EQUILIBRIUM_FRICTION_QUESTIONS;
    if (selectedSubject === 'PHYSICS_LIQUIDS') return LIQUIDS_GASES_QUESTIONS;
    if (selectedSubject === 'ENGLISH_DRILL') return ENGLISH_QUICK_DRILL_QUESTIONS;
    if (selectedSubject === 'CHEMISTRY_DRILL') return ORGANIC_CHEMISTRY_QUESTIONS;
    if (selectedSubject === 'ECONOMICS') return ECONOMICS_QUESTIONS;
    if (selectedSubject === 'GOVERNMENT_DRILL') return GOVERNMENT_QUESTIONS;
    if (selectedSubject === 'GOVERNMENT_POLITICAL') return GOVERNMENT_POLITICAL_QUESTIONS;
    return ENGLISH_QUESTIONS;
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
      ECONOMICS: { correct: 0, total: 0 },
      ENGLISH: { correct: 0, total: 0 },
      LITERATURE: { correct: 0, total: 0 },
      GENERAL_PAPER: { correct: 0, total: 0 },
    };

    activeQuestions.forEach((q, idx) => {
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
    if (selectedSubject === 'BIOLOGY_DRILL') {
      if (percentage >= 80) {
        recommendation = "Exceptional biological precision! Your understanding of living characteristics, cellular organelle functions (nucleus, mitochondria, chloroplasts, lysosomes), and levels of organisation is outstanding.";
      } else if (percentage >= 60) {
        recommendation = "Good grasp of cellular biology and organisation levels. We recommend revising organelle functions (like tonoplast and lysosomes) and organ vs tissue classifications to achieve perfection.";
      } else {
        recommendation = "There is room for improvement in Biology. Focus on core organelle functions, characteristics of living things, and the hierarchy from cells to tissues, organs, and systems.";
      }
    } else if (selectedSubject === 'LITERATURE_DRILL') {
      if (percentage >= 80) {
        recommendation = "Masterful literary analysis! Your grasp of literary terms (allegory, verbal irony, oxymoron), dramatic devices (aside), and prosody (iambic pentameter, metre) is top-tier.";
      } else if (percentage >= 60) {
        recommendation = "Strong literary understanding. Revise specific metrical patterns, figures of speech (like oxymoron), and narrative techniques (flashback and foreshadowing) to perfect your score.";
      } else {
        recommendation = "Review fundamental literary terms and techniques. Pay close attention to dramatic devices, figures of speech, and the distinction between tone and mood.";
      }
    } else if (selectedSubject === 'PHYSICS_DRILL') {
      if (percentage >= 80) {
        recommendation = "Incredible physics aptitude! Your understanding of vector resolution, equilibrium conditions, principle of moments, and laws of friction is phenomenal.";
      } else if (percentage >= 60) {
        recommendation = "Good grasp of equilibrium of forces and friction laws. We recommend reviewing calculation problems with moments, metre rules, and coefficient of static friction to perfect your score.";
      } else {
        recommendation = "There is room for improvement. Focus on the core definitions of stable/neutral equilibrium, the difference between resultant and equilibrant vectors, and the laws of friction.";
      }
    } else if (selectedSubject === 'ENGLISH_DRILL') {
      if (percentage >= 80) {
        recommendation = "Superb language skills! Your mastery of vowel sounds, consonant stress, homophones, and emphatic stress is outstanding.";
      } else if (percentage >= 60) {
        recommendation = "Commendable performance in English. Pay close attention to emphatic stress rules and word stress patterns to secure a perfect score.";
      } else {
        recommendation = "Keep studying Use of English. Review basic vowel/consonant sound associations, rhyming patterns, and how emphatic stress answers specific contrasting questions.";
      }
    } else if (selectedSubject === 'CHEMISTRY_DRILL') {
      if (percentage >= 80) {
        recommendation = "Outstanding Organic Chemistry mastery! Your understanding of IUPAC nomenclature, reaction mechanisms, and the structural properties of different homologous series is exceptional.";
      } else if (percentage >= 60) {
        recommendation = "Good grasp of Organic Chemistry concepts. We recommend revising IUPAC rules for branched chains and specific test reagents like Fehling's solution.";
      } else {
        recommendation = "Focus on organic chemistry basics. Revise the general formulas for homologous series, hybridization concepts, and the distinct test reactions for different functional groups.";
      }
    } else if (selectedSubject === 'ECONOMICS') {
      if (percentage >= 80) {
        recommendation = "Outstanding mastery of money and inflation! You clearly understand Keynesian motives for liquidity, OMO tools of central banking, and macroeconomic metrics.";
      } else if (percentage >= 60) {
        recommendation = "Good grasp of monetary principles. We recommend practicing structural equations (like the equation of exchange) and stagflation characteristics to secure a higher band.";
      } else {
        recommendation = "Focus on the basics of economics. Pay close attention to central bank instruments for controlling inflation, standard definitions of near-money, and motives for holding cash.";
      }
    } else if (selectedSubject === 'GOVERNMENT_DRILL') {
      if (percentage >= 80) {
        recommendation = "Exceptional understanding of governance systems and political ideologies! Your knowledge of presidentialism, parliamentarianism, capitalism, and Marxist theories is top-tier.";
      } else if (percentage >= 60) {
        recommendation = "Good grasp of government systems and ideologies. We recommend studying the specific characteristics of feudalism, fascism, and collective responsibility to perfect your score.";
      } else {
        recommendation = "There is room for growth. Focus on core distinctions between presidential and parliamentary executives, and the primary features of communalism vs. capitalism.";
      }
    } else if (selectedSubject === 'GOVERNMENT_POLITICAL') {
      if (percentage >= 80) {
        recommendation = "Exceptional understanding of political systems, parties, and pressure groups! Your knowledge of electoral processes and group dynamics is top-tier.";
      } else if (percentage >= 60) {
        recommendation = "Good grasp of government concepts. We recommend studying different party systems and proportional representation mechanics to perfect your score.";
      } else {
        recommendation = "There is room for growth. Focus on core distinctions between political parties and pressure groups, as well as the classifications of party systems.";
      }
    } else if (selectedSubject === 'PHYSICS_LIQUIDS') {
      if (percentage >= 80) {
        recommendation = "Incredible physics aptitude! Your understanding of electrolytes, Faraday's laws of electrolysis, and gaseous conduction in discharge tubes is phenomenal.";
      } else if (percentage >= 60) {
        recommendation = "Good grasp of liquids and gases conduction. We recommend reviewing Faraday's calculation problems (m = zIt) and pressure criteria for discharge tubes to perfect your score.";
      } else {
        recommendation = "There is room for improvement. Focus on the core definitions of electrolytes, how ions migrate, and why low pressure is required for gases to conduct electricity.";
      }
    } else {
      if (percentage >= 80) {
        recommendation = "Exceptional understanding of Use of English and stress rules! Your grasp of syllable stress rules and phonetic identification is stellar.";
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
      <div className="min-h-screen bg-slate-50 text-gray-900 font-sans selection:bg-emerald-100 select-none flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {gameState === 'START' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-6xl mx-auto w-full px-3 sm:px-6 py-4 sm:py-8 flex flex-col items-center justify-center flex-grow"
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
              
              <p className="max-w-2xl text-[11px] sm:text-sm md:text-base text-slate-500 text-center mb-2 sm:mb-6 leading-relaxed px-2">
                A specialized, secure diagnostic sandbox designed to measure and elevate your performance. {showHiddenMenu ? (
                  <>Evaluate your precision in <strong className="text-slate-800">Physics Drills</strong>, <strong className="text-slate-800">Government Drills</strong>, <strong className="text-slate-800">Economics</strong>, <strong className="text-slate-800">Use of English</strong>, <strong className="text-slate-800">Liquids & Gases</strong>, and <strong className="text-slate-800">Organic Chemistry</strong>.</>
                ) : (
                  <>Attempt our high-yield <strong className="text-slate-800">Biology</strong> and <strong className="text-slate-800">Literature-in-English</strong> quick drills now.</>
                )}
              </p>

              {/* Menu Selector - Segmented Controller */}
              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/40 mb-3 sm:mb-6 max-w-xs sm:max-w-md w-full shadow-inner">
                <button
                  onClick={() => setShowHiddenMenu(false)}
                  className={`flex-1 py-1.5 sm:py-2.5 text-[10px] sm:text-xs font-black rounded-lg transition-all ${!showHiddenMenu ? 'bg-white text-emerald-700 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Quick Drills
                </button>
                <button
                  onClick={() => setShowHiddenMenu(true)}
                  className={`flex-1 py-1.5 sm:py-2.5 text-[10px] sm:text-xs font-black rounded-lg transition-all ${showHiddenMenu ? 'bg-white text-emerald-700 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Other Drills
                </button>
              </div>

              {/* Subject Selection Grid - 2 Column Layout */}
              <div className="grid grid-cols-2 gap-3 sm:gap-8 w-full max-w-4xl mb-3 sm:mb-12 px-2 sm:px-0">
                
                {!showHiddenMenu ? (
                  <>
                    {/* Biology Quick Drill Card */}
                    <motion.div 
                      key="biology_drill"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                          <div className="p-1.5 sm:p-3.5 bg-emerald-50 text-emerald-700 rounded-xl sm:rounded-2xl border border-emerald-100/60">
                            <Dna className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-emerald-50 text-emerald-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            3 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Biology Quick Drill</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Master living characteristics, cellular organelle functions (tonoplast, lysosomes), and levels of organisation.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-emerald-600" />
                            <span>15 High-Yield Sourced Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-emerald-600" />
                            <span>Living Organisms, Cells & Organisation</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('BIOLOGY_DRILL')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-emerald-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-emerald-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch Biology Drill</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>

                    {/* Literature Drill Card */}
                    <motion.div 
                      key="literature_drill"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                          <div className="p-1.5 sm:p-3.5 bg-amber-50 text-amber-700 rounded-xl sm:rounded-2xl border border-amber-100/60">
                            <BookText className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-amber-50 text-amber-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            3 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Literature Drill</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Master technical literary terms, allegory, dramatic devices, figures of speech, and metrical analysis.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-amber-600" />
                            <span>15 High-Yield Sourced Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-amber-600" />
                            <span>Literary Terms, Figures & Analysis</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('LITERATURE_DRILL')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-amber-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-amber-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch Literature Drill</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Physics Quick Drill (Equilibrium & Friction) Card */}
                    <motion.div 
                      key="physics_equilibrium_drill"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                          <div className="p-1.5 sm:p-3.5 bg-emerald-50 text-emerald-700 rounded-xl sm:rounded-2xl border border-emerald-100/60">
                            <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-emerald-50 text-emerald-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            3 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Physics Quick Drill</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Test your knowledge of Equilibrium of Forces (vector analysis, moments) and Friction.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-emerald-600" />
                            <span>15 High-Yield Sourced Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-emerald-600" />
                            <span>Equilibrium, Vectors and Friction Laws</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('PHYSICS_DRILL')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-emerald-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-emerald-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch Physics Drill</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>

                    {/* Government Quick Drill (Systems & Ideologies) Card */}
                    <motion.div 
                      key="government_ideologies_drill"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                          <div className="p-1.5 sm:p-3.5 bg-amber-50 text-amber-700 rounded-xl sm:rounded-2xl border border-amber-100/60">
                            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-amber-50 text-amber-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            3 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Government Drill</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Evaluate your precision on Systems of Governance (Presidential, Parliamentary, Monarchical) and Political Ideologies.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-amber-600" />
                            <span>15 High-Yield Sourced Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-amber-600" />
                            <span>Governance Systems & Ideologies</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('GOVERNMENT_DRILL')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-amber-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-amber-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch Government Drill</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                    {/* Economics Card */}
                    <motion.div 
                      key="economics"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                          <div className="p-1.5 sm:p-3.5 bg-emerald-50 text-emerald-700 rounded-xl sm:rounded-2xl border border-emerald-100/60">
                            <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-emerald-50 text-emerald-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            4 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Economics</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Test your mastery of monetary principles, Keynesian liquidity motives, and inflation dynamics.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-emerald-600" />
                            <span>15 High-Yield Sourced Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-emerald-600" />
                            <span>Money & Inflation Mastery</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('ECONOMICS')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-emerald-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-emerald-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch Economics</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>

                    {/* Government: Political Science Card */}
                    <motion.div 
                      key="government_political"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                          <div className="p-1.5 sm:p-3.5 bg-amber-50 text-amber-700 rounded-xl sm:rounded-2xl border border-amber-100/60">
                            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-amber-50 text-amber-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            15 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Political Science</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Evaluate your knowledge of political systems, party structures, pressure groups, and elections.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-amber-600" />
                            <span>15 Curated JAMB Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-amber-600" />
                            <span>Parties, Pressure Groups & Systems</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('GOVERNMENT_POLITICAL')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-amber-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-amber-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch Political Science</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>

                    {/* Use of English (Phonetics/Oral) Card */}
                    <motion.div 
                      key="use_of_english"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full mt-3 sm:mt-0"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                          <div className="p-1.5 sm:p-3.5 bg-emerald-50 text-emerald-700 rounded-xl sm:rounded-2xl border border-emerald-100/60">
                            <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-emerald-50 text-emerald-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            15 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Use of English</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Master phonetics, oral word stress, and key pronunciation traps in standard examinations.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-emerald-600" />
                            <span>15 High-Yield Sourced Items</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-emerald-600" />
                            <span>Suffix Pronunciation Advice</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('ENGLISH')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-emerald-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-emerald-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch English</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>

                    {/* Physics: Liquids & Gases Card */}
                    <motion.div 
                      key="physics_liquids"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full mt-3 sm:mt-0"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                          <div className="p-1.5 sm:p-3.5 bg-amber-50 text-amber-700 rounded-xl sm:rounded-2xl border border-amber-100/60">
                            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-amber-50 text-amber-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            15 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Liquids & Gases</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Test your knowledge of liquids conduction (electrolytes, electrolysis) and gaseous discharge tubes.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-amber-600" />
                            <span>15 Curated JAMB Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-amber-600" />
                            <span>Faraday's Laws & Conduction</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('PHYSICS_LIQUIDS')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-amber-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-amber-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch Liquids & Gases</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>

                    {/* English Quick Drill Card */}
                    <motion.div 
                      key="english_drill_other"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full mt-3 sm:mt-0"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                          <div className="p-1.5 sm:p-3.5 bg-emerald-50 text-emerald-700 rounded-xl sm:rounded-2xl border border-emerald-100/60">
                            <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-emerald-50 text-emerald-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            3 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">English Quick Drill</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Sharpen your skills in Vowels, Consonants, Rhymes, Word Stress, and Emphatic Stress questions.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-emerald-600" />
                            <span>15 High-Yield Syllabus Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-emerald-600" />
                            <span>Oral English & Emphatic Stress Focus</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('ENGLISH_DRILL')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-emerald-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-emerald-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch English Drill</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>

                    {/* Chemistry Quick Drill Card */}
                    <motion.div 
                      key="chemistry_drill"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between h-full mt-3 sm:mt-0"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex justify-between items-start mb-2 sm:mb-6">
                           <div className="p-1.5 sm:p-3.5 bg-amber-50 text-amber-700 rounded-xl sm:rounded-2xl border border-amber-100/60">
                            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                          <span className="bg-amber-50 text-amber-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                            3 Mins
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-2xl font-black text-slate-900 mb-1 sm:mb-2">Chemistry Quick Drill</h3>
                        <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          Master Organic Chemistry requirements: IUPAC nomenclature, reaction mechanisms, and homologous series.
                        </p>

                        <div className="space-y-2.5 mb-8 hidden sm:block">
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <Flame size={14} className="text-amber-600" />
                            <span>15 High-Yield Curated Questions</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                            <ShieldCheck size={14} className="text-amber-600" />
                            <span>Aliphatic, Aromatic & Functional Groups</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => startQuiz('CHEMISTRY_DRILL')}
                        className="w-full py-2 sm:py-4 bg-slate-950 hover:bg-amber-600 text-white font-bold text-[10px] sm:text-base rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-amber-100 flex items-center justify-center gap-1 sm:gap-2 group"
                      >
                        <span className="hidden sm:inline">Launch Chemistry Drill</span>
                        <span className="inline sm:hidden">Launch</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                  </>
                )}

              </div>

              {/* Global Trust Factors / Features Row */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full border-t border-slate-200/60 pt-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm text-emerald-600">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Real-time Score Analysis</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Instant scoring, breakdown, and detailed explanations for every option.</p>
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
                    <h4 className="text-sm font-bold text-slate-900">Custom Recommendations</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Actionable strategic feedback aligned directly with your diagnostic performance.</p>
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
