/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';

const AI_PASSAGE = `### **SECTION A: COMPREHENSION PASSAGE**
**Instruction:** Read the following passage carefully and answer questions **1 to 5** that follow.

## **Artificial Intelligence: The Modern Fire**

Modern humanity is perhaps more concerned with **Artificial Intelligence (AI)** as a tool for automation and rapid data processing than as a mirror of human consciousness. Before society developed the sophisticated neural networks we see today, early computing focused on basic calculations and repetitive tasks. The discovery that these machines could simulate reasoning and learn from vast amounts of information was, in many ways, an evolution of the primary goal of making work more efficient.

Just as primitive man fashioned a vessel for a lamp after observing fat and fiber, early researchers built the first AI models by observing the intricate networks of the human brain. They realized that by creating digital "neurons" that pass information to one another, a machine could eventually recognize patterns, translate languages, and even generate art. These early concepts of machine learning have persisted and evolved, leading us from simple algorithms to the powerful systems that now shape our digital world.`;

export const QUESTIONS: Question[] = [
  // Comprehension (1-5)
  {
    id: 1,
    passage: AI_PASSAGE,
    category: 'COMPREHENSION',
    text: "According to the passage, the transition of AI from simple calculation to reasoning is best described as:",
    options: [
      "A planned architectural shift in computing",
      "A byproduct of the pursuit of industrial efficiency",
      "A philosophical departure from modern automation",
      "An accidental discovery by primitive researchers"
    ],
    correctAnswer: 1,
    explanation: "The passage states that the evolution into reasoning was 'in many ways, an evolution of the primary goal of making work more efficient', which aligns with the pursuit of industrial efficiency."
  },
  {
    id: 2,
    passage: AI_PASSAGE,
    category: 'COMPREHENSION',
    text: "Which of the following can be inferred from the author’s comparison between the 'lamp' and 'early AI models'?",
    options: [
      "Both were developed primarily to mimic biological structures",
      "Both resulted from the careful observation of natural phenomena",
      "Both have remained unchanged since their initial conception",
      "Both were originally intended to serve as mirrors of consciousness"
    ],
    correctAnswer: 1,
    explanation: "The author compares the observation of 'fat and fiber' (for the lamp) with the observation of the 'human brain' (for AI), both of which are natural phenomena used as inspiration."
  },
  {
    id: 3,
    passage: AI_PASSAGE,
    category: 'COMPREHENSION',
    text: "The word 'sophisticated' as used in the first paragraph most nearly means:",
    options: [
      "Complicated and worldly",
      "Highly developed and complex",
      "Artificial and deceptive",
      "Elegant and expensive"
    ],
    correctAnswer: 1,
    explanation: "In the context of 'sophisticated neural networks', the word refers to systems that are highly developed and technologically complex."
  },
  {
    id: 4,
    passage: AI_PASSAGE,
    category: 'COMPREHENSION',
    text: "Based on the passage, what is the 'Modern Fire'?",
    options: [
      "The literal heat produced by computer servers",
      "The human desire to automate data processing",
      "Artificial Intelligence as a transformative utility",
      "The neural network of the human brain"
    ],
    correctAnswer: 2,
    explanation: "The title and the passage establish AI as a transformative tool for humanity, much like fire was for primitive man."
  },
  {
    id: 5,
    passage: AI_PASSAGE,
    category: 'COMPREHENSION',
    text: " '<u>Modern humanity</u> is perhaps more concerned with AI as a tool... than as a mirror of human consciousness.' The grammatical name given to the underlined part of this sentence is a/an:",
    options: [
      "Adjectival Clause",
      "Adverbial Phrase of Reason",
      "Noun Phrase",
      "Prepositional Phrase"
    ],
    correctAnswer: 2,
    explanation: "'Modern humanity' functions as the subject of the sentence and is a Noun Phrase."
  },

  // Idioms (6-10)
  {
    id: 6,
    category: 'IDIOMS',
    text: "The new Inspector of Police decided that culprits **should be brought to book**.",
    options: [
      "should be made to answer for their conduct",
      "should have their names recorded in a book",
      "should be booked",
      "should be brought before him to show whether they could read or not"
    ],
    correctAnswer: 0,
    explanation: "'Brought to book' means to be made to account for one's actions or punished."
  },
  {
    id: 7,
    category: 'IDIOMS',
    text: "In their desire to impress their friends and relatives, many young workers **bite off more than they can chew**, in terms of financial obligators.",
    options: [
      "have more money than sense",
      "spend too much money on food",
      "care too much for their relatives",
      "take on more responsibility than they can afford"
    ],
    correctAnswer: 3,
    explanation: "To 'bite off more than one can chew' means to take on a task that is way too big or difficult."
  },
  {
    id: 8,
    category: 'IDIOMS',
    text: "The preacher has **made good** his promise to visit some of his converts today.",
    options: [
      "fulfilled",
      "improved on",
      "seen to",
      "accepted"
    ],
    correctAnswer: 0,
    explanation: "To 'make good' a promise or debt means to fulfill or pay it."
  },
  {
    id: 9,
    category: 'IDIOMS',
    text: "The armed robbers who raided passengers on the outskirts of the city **came to grief** when they had shoot-out.",
    options: [
      "came to a bad end",
      "became defeated",
      "became grieved",
      "came to a dead end"
    ],
    correctAnswer: 0,
    explanation: "To 'come to grief' means to experience a sudden failure, disaster, or bad end."
  },
  {
    id: 10,
    category: 'IDIOMS',
    text: "My brother **left me in the lurch** last year.",
    options: [
      "made me learn my lesson in a hard way",
      "did not wait for me before he took an important decision",
      "forsook me in time of problem",
      "set a trap for me"
    ],
    correctAnswer: 2,
    explanation: "To 'leave someone in the lurch' means to desert or abandon them in a difficult situation."
  },

  // Lexis and Structure (11-20)
  {
    id: 11,
    category: 'LEXIS_STRUCTURE',
    text: "The rich man _____ money to his wives and children every Monday.",
    options: ["disperses", "dispensed", "discusses", "dispenses"],
    correctAnswer: 3,
    explanation: "'Dispenses' is the correct present tense verb for distributing something."
  },
  {
    id: 12,
    category: 'LEXIS_STRUCTURE',
    text: "If I had known that the man was not a genuine pastor, I would not have _____ too much confidence in him.",
    options: ["imposed", "reposed", "inputted", "disposed"],
    correctAnswer: 1,
    explanation: "'Reposed' confidence means to place trust or confidence in someone."
  },
  {
    id: 13,
    category: 'LEXIS_STRUCTURE',
    text: "The poor woman has _____ herself to fate.",
    options: ["consigned", "concerned", "resigned", "reposed"],
    correctAnswer: 2,
    explanation: "'Resigned herself to fate' means to accept an unpleasant situation because you feel you cannot change it."
  },
  {
    id: 14,
    category: 'LEXIS_STRUCTURE',
    text: "The clergy _____ everyday for the success of the present government.",
    options: ["are praying", "is praying", "pray", "prays"],
    correctAnswer: 3,
    explanation: "The clergy is usually treated as a collective singular noun in this context, or simply 'prays' for the singular subject concord if referring to the group as one."
  },
  {
    id: 15,
    category: 'LEXIS_STRUCTURE',
    text: "The young girl _____ mind her language.",
    options: ["has better", "had better", "have best", "had best"],
    correctAnswer: 1,
    explanation: "'Had better' is an idiom used to give strong advice."
  },
  {
    id: 16,
    category: 'LEXIS_STRUCTURE',
    text: "Many a secondary school student _____ afraid of English language examination nowadays.",
    options: ["are", "is", "was", "were"],
    correctAnswer: 1,
    explanation: "The expression 'Many a' is followed by a singular noun and a singular verb."
  },
  {
    id: 17,
    category: 'LEXIS_STRUCTURE',
    text: "The man with his three wives and seventeen children _____ just travelled abroad.",
    options: ["is", "are", "has", "have"],
    correctAnswer: 2,
    explanation: "The subject is 'The man' (singular); phrases starting with 'with' do not change the number of the subject."
  },
  {
    id: 18,
    category: 'LEXIS_STRUCTURE',
    text: "The lecturer does not _____ his real age.",
    options: ["seem", "look", "appear", "resemble"],
    correctAnswer: 0,
    explanation: "'Seem' fits best here, though 'look' is often used colloquially, 'seem' is grammatically strong for perceived age versus real."
  },
  {
    id: 19,
    category: 'LEXIS_STRUCTURE',
    text: "During the recent communal crisis, the palace of the monarch was _____ amulets.",
    options: ["decorated", "fortified", "embellished", "ensured"],
    correctAnswer: 1,
    explanation: "'Fortified' means strengthened against attack, appropriate for a crisis."
  },
  {
    id: 20,
    category: 'LEXIS_STRUCTURE',
    text: "I _____ your father to stop going out with politicians, then I changed my mind.",
    options: ["had told", "have told", "was going to tell", "have being telling"],
    correctAnswer: 2,
    explanation: "Indicates an intended past action that was not carried out."
  },

  // Antonyms (21-25) - Opposite meaning
  {
    id: 21,
    category: 'ANTONYMS',
    text: "Choose the option **opposite** in meaning to: **confrontation**",
    options: ["mediation", "arbitration", "exultation"],
    correctAnswer: 0,
    explanation: "Mediation is the opposite of a direct, often hostile, confrontation."
  },
  {
    id: 22,
    category: 'ANTONYMS',
    text: "Choose the option **opposite** in meaning to: **alcoholic**",
    options: ["teetotaler", "dipsomaniac", "agoraphobic", "saboteur"],
    correctAnswer: 0,
    explanation: "A teetotaler is someone who never drinks alcohol."
  },
  {
    id: 23,
    category: 'ANTONYMS',
    text: "Choose the option **opposite** in meaning to: **parsimonic**",
    options: ["ingenious", "curious", "judicious", "extravagant"],
    correctAnswer: 3,
    explanation: "Parsimonic means being very unwilling to spend money; extravagant is the opposite."
  },
  {
    id: 24,
    category: 'ANTONYMS',
    text: "Choose the option **opposite** in meaning to: **lackadaisical**",
    options: ["enthusiastic", "listless", "classical", "obtuse"],
    correctAnswer: 0,
    explanation: "Lackadaisical means lacking enthusiasm; enthusiastic is more energetic."
  },
  {
    id: 25,
    category: 'ANTONYMS',
    text: "Choose the option **opposite** in meaning to: **wrath**",
    options: ["anger", "anointing", "favour", "pleasure"],
    correctAnswer: 2,
    explanation: "Wrath is extreme anger; favour is kind or beneficial treatment."
  },

  // Synonyms (26-30) - Nearest meaning
  {
    id: 26,
    category: 'SYNONYMS',
    text: "Choose the option **nearest** in meaning to: **celestial**",
    options: ["terrestrial", "heavenly", "religious", "sacrificial"],
    correctAnswer: 1,
    explanation: "Celestial means positioned in or relating to the sky, or outer space as observed in astronomy; astronomical or heavenly."
  },
  {
    id: 27,
    category: 'SYNONYMS',
    text: "Choose the option **nearest** in meaning to: **indigent**",
    options: ["indolent", "diligent", "efficient", "needy"],
    correctAnswer: 3,
    explanation: "Indigent means poor or needy."
  },
  {
    id: 28,
    category: 'SYNONYMS',
    text: "Choose the option **nearest** in meaning to: **seldom**",
    options: ["frequently", "rarely", "usually", "reluctantly"],
    correctAnswer: 1,
    explanation: "Seldom and rarely both mean not often."
  },
  {
    id: 29,
    category: 'SYNONYMS',
    text: "Choose the option **nearest** in meaning to: **ephemeral**",
    options: ["enjoyable", "difficult", "transient", "permanent"],
    correctAnswer: 2,
    explanation: "Ephemeral means lasting for a very short time; transient."
  },
  {
    id: 30,
    category: 'SYNONYMS',
    text: "Choose the option **nearest** in meaning to: **eclectic**",
    options: ["shocking", "versatile", "narrow", "critical"],
    correctAnswer: 1,
    explanation: "Eclectic means deriving ideas, style, or taste from a broad and diverse range of sources; versatile is the closest here."
  }
];
