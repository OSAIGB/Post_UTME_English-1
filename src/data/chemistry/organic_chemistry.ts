/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const ORGANIC_CHEMISTRY_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "The tetravalency of carbon is fundamentally explained by the fact that:",
    options: [
      "the electrons in all orbitals are equivalent",
      "the electrons in the 2s and 2p orbitals hybridize",
      "carbon has an atomic number of six",
      "carbon belongs to group IV of the periodic table"
    ],
    correctAnswer: 1,
    explanation: "The tetravalency of carbon is explained by hybridization, where the 2s and 2p orbitals mix to form four equivalent sp3 hybrid orbitals, allowing carbon to form four stable covalent bonds."
  },
  {
    id: 2,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "Which of the following is the correct general molecular formula for the alkane homologous series?",
    options: [
      "C_n H_{2n}",
      "C_n H_{2n–2}",
      "C_n H_{2n+2}",
      "C_n H_{2n} O_2"
    ],
    correctAnswer: 2,
    explanation: "The general formula for alkanes (saturated hydrocarbons) is C_n H_{2n+2}."
  },
  {
    id: 3,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "Identify the IUPAC nomenclature for the following branched hydrocarbon: CH3-CH(CH3)-CH2-CH=CH2",
    options: [
      "4-methylpent-1-ene",
      "3-methylpent-2-ene",
      "2-methylpent-1-ene",
      "2-methylpent-4-ene"
    ],
    correctAnswer: 0,
    explanation: "The longest continuous carbon chain containing the double bond has 5 carbon atoms (pentene). Numbering starts from the end nearest the double bond (right to left): C1=C2-C3-C4-C5. The methyl group is attached to carbon 4, giving 4-methylpent-1-ene."
  },
  {
    id: 4,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "Which of the following organic compounds is a structural isomer of pentane (C5H12)?",
    options: [
      "2-ethylbutane",
      "butane",
      "2-methylbutane",
      "2-methylprop-1-ene"
    ],
    correctAnswer: 2,
    explanation: "Pentane (C5H12) has three structural isomers: n-pentane, 2-methylbutane (isopentane), and 2,2-dimethylpropane (neopentane)."
  },
  {
    id: 5,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "The process of heating large hydrocarbon molecules at high temperatures in the presence of a catalyst to obtain smaller, more volatile molecules is known as:",
    options: [
      "disintegration",
      "polymerization",
      "cracking",
      "reforming"
    ],
    correctAnswer: 2,
    explanation: "Cracking is the thermal or catalytic breakdown of heavy, long-chain petroleum hydrocarbons into lighter, more valuable short-chain products like petrol."
  },
  {
    id: 6,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "Geometric isomerism (cis-trans isomerism) is most likely to exist in which of the following compounds?",
    options: [
      "hex-3-ene",
      "hexane",
      "prop-1-ene",
      "3-methylbut-1-ene"
    ],
    correctAnswer: 0,
    explanation: "Geometric isomerism occurs when there is restricted rotation around a double bond and each of the doubly bonded carbons has two different groups attached. In hex-3-ene (CH3-CH2-CH=CH-CH2-CH3), each double-bonded carbon is attached to a hydrogen and an ethyl group, allowing cis-trans structures."
  },
  {
    id: 7,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "When water is added to calcium carbide in a container, the gas produced is ethyne, which burns with a:",
    options: [
      "blue flame",
      "non-luminous flame",
      "sooty flame",
      "smokeless flame"
    ],
    correctAnswer: 2,
    explanation: "Ethyne (acetylene) has a very high carbon-to-hydrogen ratio, which causes incomplete combustion in normal air, producing a highly luminous and smoky (sooty) flame."
  },
  {
    id: 8,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "Benzene reacts with hydrogen in the presence of a nickel catalyst at 180°C to produce:",
    options: [
      "xylene",
      "toluene",
      "cyclopentane",
      "cyclohexane"
    ],
    correctAnswer: 3,
    explanation: "The catalytic hydrogenation of benzene (C6H6) using nickel at 180°C yields cyclohexane (C6H12)."
  },
  {
    id: 9,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "The biochemical process of converting starch or sugar into ethanol using yeast as a source of enzymes is professionally termed:",
    options: [
      "cracking",
      "distillation",
      "fermentation",
      "oxidation"
    ],
    correctAnswer: 2,
    explanation: "Fermentation is the anaerobic biochemical breakdown of organic substances (like sugars) by micro-organisms like yeast to produce ethanol and carbon dioxide."
  },
  {
    id: 10,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "Alkanals can be distinguished from alkanones by their reaction with which specific reagent?",
    options: [
      "Sudan III stain",
      "starch iodide paper",
      "lithium tetrahydridoaluminate (III)",
      "Fehling’s solution"
    ],
    correctAnswer: 3,
    explanation: "Alkanals (aldehydes) are strong reducing agents and easily reduce Fehling's solution to form a brick-red precipitate of copper(I) oxide, whereas alkanones (ketones) are not oxidized and show no reaction."
  },
  {
    id: 11,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "The chemical reaction between ethanoic acid (CH3COOH) and ethanol (C2H5OH) in the presence of concentrated H2SO4 is best described as:",
    options: [
      "esterification",
      "condensation",
      "saponification",
      "neutralization"
    ],
    correctAnswer: 0,
    explanation: "The acid-catalyzed reversible reaction between an organic acid and an alkanol to form an ester (ethyl ethanoate) and water is called esterification."
  },
  {
    id: 12,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "The alkaline hydrolysis of an alkanoate (fat or oil) to produce soap and an alkanol is known as:",
    options: [
      "acidification",
      "hydration",
      "saponification",
      "esterification"
    ],
    correctAnswer: 2,
    explanation: "Saponification is the alkaline hydrolysis of fats or oils (esters of glycerol and long-chain fatty acids) with an alkali (like NaOH) to produce soap and glycerol."
  },
  {
    id: 13,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "Which of the following represents a primary amine?",
    options: [
      "(CH3)3N",
      "CH3NH2",
      "CH3C-NH2",
      "(CH3)2NH"
    ],
    correctAnswer: 1,
    explanation: "A primary amine has one alkyl group attached to the nitrogen atom (R-NH2), such as methylamine (CH3NH2)."
  },
  {
    id: 14,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "An example of a polysaccharide that can be detected using the iodine test is:",
    options: [
      "dextrose",
      "mannose",
      "glucose",
      "starch"
    ],
    correctAnswer: 3,
    explanation: "Starch is a polysaccharide that forms an intense blue-black complex in the presence of iodine."
  },
  {
    id: 15,
    category: 'CHEMISTRY',
    sourceYear: 'Organic Chemistry',
    text: "A hydrocarbon contains 0.12 moles of carbon and 0.36 moles of hydrogen. What is its empirical formula?",
    options: [
      "CH2",
      "CH3",
      "C2H2",
      "C2H4"
    ],
    correctAnswer: 1,
    explanation: "To find the empirical formula, divide each mole value by the smallest: Carbon = 0.12 / 0.12 = 1, Hydrogen = 0.36 / 0.12 = 3. The empirical formula is CH3."
  }
];
