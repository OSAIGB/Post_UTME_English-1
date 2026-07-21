/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type QuestionCategory = 'COMPREHENSION' | 'IDIOMS' | 'LEXIS_STRUCTURE' | 'SYNONYMS' | 'ANTONYMS' | 'PHYSICS' | 'CHEMISTRY' | 'BIOLOGY' | 'GOVERNMENT' | 'ECONOMICS' | 'ENGLISH' | 'LITERATURE' | 'GENERAL_PAPER';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index in options
  category: QuestionCategory;
  explanation: string;
  passage?: string; // Optional for comprehension
  sourceYear?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: (number | null)[];
  startTime: number;
  endTime: number | null;
  cheatWarnings: number;
  isFinished: boolean;
}

export interface ResultAnalysis {
  score: number;
  total: number;
  percentage: number;
  categoryPerformance: Record<QuestionCategory, { correct: number; total: number }>;
  strengths: string[];
  weaknesses: string[];
  recommendation: string;
  subject?: 'GOVERNMENT' | 'ENGLISH' | 'ECONOMICS' | 'PHYSICS_DRILL' | 'ENGLISH_DRILL' | 'CHEMISTRY_DRILL' | 'GOVERNMENT_DRILL' | 'PHYSICS_LIQUIDS' | 'GOVERNMENT_POLITICAL' | 'BIOLOGY_DRILL' | 'LITERATURE_DRILL';
}
