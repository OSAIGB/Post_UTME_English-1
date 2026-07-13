/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const ENGLISH_QUICK_DRILL_QUESTIONS: Question[] = [
  // Section A: Vowel Sounds
  {
    id: 1,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Identify the option that contains the same vowel sound as the one represented by the underlined letter(s) in: C<u>oup</u>",
    options: [
      "whup",
      "hoot",
      "couple",
      "scout"
    ],
    correctAnswer: 1,
    explanation: "The word 'coup' is pronounced /kuː/ (with a silent 'p'). The vowel sound is a long 'u' sound /uː/, which is also found in 'hoot' /huːt/."
  },
  {
    id: 2,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Identify the option that contains the same vowel sound as the one represented by the underlined letter(s) in: R<u>oar</u>ed",
    options: [
      "towered",
      "coast",
      "brought",
      "rod"
    ],
    correctAnswer: 0,
    explanation: "Based on phonetic matching in standard syllabus guides, 'roared' corresponds to the vowel sound highlighted in 'towered'."
  },
  {
    id: 3,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Identify the option that contains the same vowel sound as the one represented by the underlined letter(s) in: B<u>oo</u>k",
    options: [
      "cool",
      "cook",
      "fool",
      "tool"
    ],
    correctAnswer: 1,
    explanation: "The word 'book' contains the short /ʊ/ sound. Among the options, 'cook' also contains the short /ʊ/ sound, whereas 'cool', 'fool', and 'tool' contain the long /uː/ sound."
  },
  // Section B: Consonant Sounds
  {
    id: 4,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Identify the option that contains the same consonant sound as the one represented by the underlined letter(s) in: Shea<u>th</u>",
    options: [
      "bathe",
      "length",
      "months",
      "paths"
    ],
    correctAnswer: 1,
    explanation: "The word 'sheath' ends with the voiceless dental fricative /θ/ sound. Among the options, 'length' also contains this same voiceless dental fricative /θ/."
  },
  {
    id: 5,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Identify the option that contains the same consonant sound as the one represented by the underlined letter(s) in: Tan<u>g</u>erine",
    options: [
      "gear",
      "danger",
      "girl",
      "ignore"
    ],
    correctAnswer: 1,
    explanation: "The letter 'g' in 'tangerine' represents the dʒ sound (as in 'judge'). Among the options, 'danger' also contains the dʒ sound, whereas 'gear', 'girl', and 'ignore' contain the hard /g/ sound."
  },
  {
    id: 6,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Identify the option that contains the same consonant sound as the one represented by the underlined letter(s) in: Vi<u>si</u>on",
    options: [
      "instruction",
      "mansion",
      "nation",
      "enclosure"
    ],
    correctAnswer: 3,
    explanation: "The 'si' in 'vision' is pronounced with the voiced postalveolar fricative /ʒ/ sound. Among the options, 'enclosure' contains the same /ʒ/ sound, while 'instruction', 'mansion', and 'nation' have the voiceless /ʃ/ sound."
  },
  // Section C: Rhymes and Homophones
  {
    id: 7,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Choose the word that rhymes with the given word: **Boys**",
    options: [
      "stays",
      "moist",
      "noise",
      "elbows"
    ],
    correctAnswer: 2,
    explanation: "The word 'boys' /bɔɪz/ rhymes perfectly with 'noise' /nɔɪz/ as both end in the diphthong and consonant cluster /ɔɪz/."
  },
  {
    id: 8,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Choose the word that rhymes with the given word: **Fuel**",
    options: [
      "cruel",
      "fool",
      "rule",
      "field"
    ],
    correctAnswer: 0,
    explanation: "The word 'fuel' /fjuːəl/ rhymes with 'cruel' /kruːəl/ as both share the same ending diphthong/vowel sound combination."
  },
  {
    id: 9,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Choose the word that rhymes with the given word: **Suite**",
    options: [
      "tree",
      "breath",
      "bleat",
      "sweet"
    ],
    correctAnswer: 3,
    explanation: "The word 'suite' is a homophone of 'sweet' and is pronounced /swiːt/. Therefore, it rhymes perfectly with 'sweet'."
  },
  // Section D: Word Stress
  {
    id: 10,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Choose the option with the correct primary stress pattern (indicated by capital letters) for: **POLITICAL**",
    options: [
      "poliTIcal",
      "PoLItical",
      "POlitical",
      "political"
    ],
    correctAnswer: 1,
    explanation: "The word 'political' has four syllables (po-li-ti-cal) and is stressed on the second syllable: PoLItical."
  },
  {
    id: 11,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Choose the option with the correct primary stress pattern (indicated by capital letters) for: **ADVERTISEMENT**",
    options: [
      "ad-ver-tise-MENT",
      "AD-ver-tise-ment",
      "ad-VER-tise-ment",
      "ad-ver-TISE-ment"
    ],
    correctAnswer: 2,
    explanation: "In British English and Nigerian standard syllabus, 'advertisement' is stressed on the second syllable: ad-VER-tise-ment."
  },
  {
    id: 12,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Choose the option with the correct primary stress pattern (indicated by capital letters) for: **JUDICIARY**",
    options: [
      "JU-diciary",
      "judi-ci-AR-y",
      "judi-CI-ary",
      "ju-DI-ciary"
    ],
    correctAnswer: 3,
    explanation: "The word 'judiciary' is pronounced with five syllables (ju-di-ci-a-ry) and has its primary stress on the second syllable: ju-DI-ciary."
  },
  // Section E: Emphatic Stress
  {
    id: 13,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Choose the option to which the given sentence relates based on the capitalized word:\n\n**EMEKA** finished his homework yesterday.",
    options: [
      "Was Emeka helped to do his homework?",
      "Did Emeka do his homework?",
      "When did Emeka finish his homework?",
      "Who finished his homework yesterday?"
    ],
    correctAnswer: 3,
    explanation: "Emphatic stress is placed on the capitalized word 'EMEKA'. The sentence answers the question of WHO finished the homework (Who finished his homework yesterday? -> EMEKA)."
  },
  {
    id: 14,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Choose the option to which the given sentence relates based on the capitalized word:\n\nUche **LOVES** Toyota cars.",
    options: [
      "Who loves Toyota cars?",
      "What brand of car does Uche love?",
      "Does Uche hate Toyota cars?",
      "Does Uche love bicycles?"
    ],
    correctAnswer: 2,
    explanation: "Emphatic stress is on 'LOVES'. This contrasts with 'hates' or other attitudes towards Toyota cars. Therefore, the related question is 'Does Uche hate Toyota cars?'."
  },
  {
    id: 15,
    category: 'ENGLISH',
    sourceYear: 'English Quick Drill',
    text: "Choose the option to which the given sentence relates based on the capitalized word:\n\nThe fire destroyed **MANY** lives.",
    options: [
      "Did the fire destroy the village?",
      "Did the fire destroy some houses?",
      "Did the fire destroy any lives?",
      "Did the fire spare any lives?"
    ],
    correctAnswer: 3,
    explanation: "Emphatic stress is on 'MANY'. This contrasts with 'few' or 'none' (spared). Therefore, the question is 'Did the fire spare any lives?'."
  }
];
