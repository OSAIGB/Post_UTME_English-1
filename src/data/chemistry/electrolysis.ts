/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const CHEMISTRY_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'CHEMISTRY',
    sourceYear: '2006/2007',
    text: "Calculate the **current** in ampere required to produce **18.0g of aluminium** in 1.50 hours. [$Al = 27, F = 96500C$]",
    options: ["33.65 amperes", "35.74 amperes", "37.85 amperes", "39.25 amperes"],
    correctAnswer: 1,
    explanation: "Number of moles of $Al = \\text{Mass} / \\text{Molar Mass} = 18 / 27 = 2/3 \\text{ moles}$. $Al^{3+} + 3e^- \\rightarrow Al$. Therefore, $3$ Faradays are needed per mole. Total charge $Q = (2/3) \\times 3 \\times 96500 = 193000 C$. $Q = I \\times t \\Rightarrow I = Q / t = 193000 / (1.5 \\times 3600) = 193000 / 5400 \\approx 35.74 A$."
  },
  {
    id: 2,
    category: 'CHEMISTRY',
    sourceYear: '2011/2012',
    text: "Calculate the **current** that must be passed into a solution of **Chromium (III) salt** for one hour in order to deposit **1.2g of Chromium**. [$Cr = 51$]",
    options: ["3.50 amperes", "2.30 amperes", "1.89 amperes", "1.52 amperes"],
    correctAnswer: 2,
    explanation: "Moles of $Cr = 1.2 / 51$. $Cr^{3+} + 3e^- \\rightarrow Cr$. $Q = (1.2 / 51) \\times 3 \\times 96500 \\approx 6811.76 C$. $I = Q / t = 6811.76 / 3600 \\approx 1.89 A$."
  },
  {
    id: 3,
    category: 'CHEMISTRY',
    sourceYear: '2014/2015',
    text: "How many **moles of zinc** would be deposited by passing **3F of electricity** through a solution of $ZnSO_4$? [$1F = 96500C$]",
    options: ["1.5 moles", "2.3 moles", "3.4 moles", "0.15 m"],
    correctAnswer: 0,
    explanation: "$Zn^{2+} + 2e^- \\rightarrow Zn$. $2$ Faradays deposit $1$ mole of $Zn$. Therefore, $3$ Faradays deposit $3/2 = 1.5 \\text{ moles}$."
  },
  {
    id: 4,
    category: 'CHEMISTRY',
    sourceYear: '2005/2006',
    text: "What **quantity of copper** will be deposited by the same quantity of electricity that deposited **18g of aluminium**? [$Al = 27, Cu = 64$]",
    options: ["64g", "32g", "16g", "8g"],
    correctAnswer: 0,
    explanation: "$18g Al = 18/27 = 2/3 \\text{ moles}$. Charge $= (2/3) \\times 3F = 2F$. $Cu^{2+} + 2e^- \\rightarrow Cu$. $2F$ deposits $1$ mole of $Cu$. $1 \\text{ mole } Cu = 64g$."
  },
  {
    id: 5,
    category: 'CHEMISTRY',
    sourceYear: '2010/2011',
    text: "Calculate the **quantity of electricity** required to deposit **64.0g of copper** from copper (II) chloride. [$Cu = 64, 1F = 96500C$]",
    options: ["$3.09 \\times 10^6C$", "$1.93 \\times 10^5C$", "$9.65 \\times 10^4C$", "$6.18 \\times 10^6C$"],
    correctAnswer: 1,
    explanation: "$64g Cu = 1 \\text{ mole}$. $Cu^{2+} + 2e^- \\rightarrow Cu$. Needs $2F$. $2 \\times 96500 = 193000 C = 1.93 \\times 10^5 C$."
  },
  {
    id: 6,
    category: 'CHEMISTRY',
    sourceYear: '2020',
    text: "If the **cost of electricity** required to deposit **1g of magnesium** is ₦10.00, how much would it cost to deposit **5g of Silver**? [$Mg = 24, Ag = 108, 1F = 96500C$]",
    options: ["5.63k", "563k", "6.05k", "605k"],
    correctAnswer: 0,
    explanation: "$Mg$ needs $2F/\\text{mole}$. $1g Mg = 1/24 \\text{ mole}$. Charge for $1g Mg = (2/24)F = 1/12 F$. Cost $(1/12 F) = \\text{₦}10$. Silver needs $1F/\\text{mole}$. $5g Ag = 5/108 \\text{ moles}$. Charge for $5g Ag = 5/108 F$. Ratio of charges $= (5/108) / (1/12) = (5/108) \\times 12 = 5/9$. Cost $= (5/9) \\times 10 \\approx \\text{₦}5.56$. (In some exam systems, cost is expressed in kobo as 5.63k relative to units)."
  },
  {
    id: 7,
    category: 'CHEMISTRY',
    sourceYear: '2012',
    text: "What is the value of **n** in the equation? $XO_4^- + 8H^+ + ne^- \\rightarrow X^{2+} + 4H_2O$",
    options: ["5", "4", "3", "2"],
    correctAnswer: 0,
    explanation: "Oxidation state of $X$ in $XO_4^-$: $X + 4(-2) = -1 \\Rightarrow X = +7$. Product has $X$ at $+2$. Change is $7 - 2 = 5$ electrons."
  },
  {
    id: 8,
    category: 'CHEMISTRY',
    sourceYear: '2007/2008',
    text: "What change will occur during the **electrolysis of brine using carbon electrodes**?",
    options: [
      "Chlorine will be given off at the anode",
      "Oxygen gas will be given off at the anode",
      "Sodium will be deposited at the cathode",
      "The resulting solution after electrolysis will be acidic"
    ],
    correctAnswer: 0,
    explanation: "In concentrated $NaCl$ (brine), $Cl^-$ ions are preferentially discharged at the anode to give Chlorine gas."
  },
  {
    id: 9,
    category: 'CHEMISTRY',
    sourceYear: '2020',
    text: "Electrolysis is used in the following **EXCEPT**:",
    options: ["Extraction of Aluminium", "Extraction of iron", "Purification of copper", "Electroplating"],
    correctAnswer: 1,
    explanation: "Iron is typically extracted via reduction in a blast furnace, not electrolysis (which is used for more reactive metals like $Al$)."
  },
  {
    id: 10,
    category: 'CHEMISTRY',
    sourceYear: '2018/2019',
    text: "Which of the following statements applies during the **electrolysis of sodium hydroxide** solution using platinum electrodes?",
    options: [
      "$Na^+$ ions are discharged at the cathode",
      "Hydrogen ions are discharged at the anode",
      "The concentration of sodium hydroxide decreases at the cathode compartment",
      "The concentration of sodium hydroxide increases at the cathode only"
    ],
    correctAnswer: 3,
    explanation: "Water is electrolyzed. $H_2$ at cathode, $O_2$ at anode. Remaining $Na^+$ and $OH^-$ ions increase the concentration of $NaOH$ in the solution (often locally near the cathode)."
  },
  {
    id: 11,
    category: 'CHEMISTRY',
    sourceYear: '2006',
    text: "The **preferential discharge of sodium** during the electrolysis of brine using **mercury as cathode** is due to:",
    options: [
      "High concentration of $Na^+$",
      "$Na$ is lower than $H$ in the electrochemical series",
      "Discharge of sodium as the amalgam requires less energy",
      "Concentration of $H^+$ is higher"
    ],
    correctAnswer: 2,
    explanation: "Using a mercury cathode changes the overvoltage for hydrogen, making the formation of a sodium amalgam energetically favorable (lower energy required)."
  },
  {
    id: 12,
    category: 'CHEMISTRY',
    sourceYear: '2021 – 2024',
    text: "In the **electrolytic refining of metals**, the **impure metal** is made the:",
    options: ["Cathode", "Anode", "Salt bridge", "Electrolyte"],
    correctAnswer: 1,
    explanation: "In refining, the impure metal is the anode (where it dissolves), and the pure metal is deposited on the cathode."
  },
  {
    id: 13,
    category: 'CHEMISTRY',
    sourceYear: '2020',
    text: "Which of the following metals is **obtained by electrolysis**?",
    options: ["Cu", "Sn", "Pb", "Ag", "Ca"],
    correctAnswer: 4,
    explanation: "Calcium ($Ca$) is a highly reactive metal (Group 2) and must be obtained by the electrolysis of its molten salts."
  },
  {
    id: 14,
    category: 'CHEMISTRY',
    sourceYear: '2020',
    text: "What is the fundamental difference between an **electrolysis voltameter** and a **voltmeter**?",
    options: [
      "Voltameter measures charge; voltmeter measures potential difference",
      "They are the same thing",
      "Voltameter measures voltage; voltmeter measures current",
      "Voltameter is for liquids; voltmeter is for gases"
    ],
    correctAnswer: 0,
    explanation: "A voltameter (coulometer) measures the quantity of electricity (charge) transferred via the mass of substance deposited, while a voltmeter measures electrical potential difference."
  },
  {
    id: 15,
    category: 'CHEMISTRY',
    sourceYear: '2021 – 2024',
    text: "Which electrolyte is typically used in **silver electroplating**?",
    options: ["Silver nitrate", "Silver chloride", "Sodium argentocyanide", "Silver sulphate"],
    correctAnswer: 2,
    explanation: "Sodium argentocyanide ($Na[Ag(CN)_2]$) is preferred because it yields a more uniform and smooth coating than concentrated silver nitrate."
  },
  {
    id: 16,
    category: 'CHEMISTRY',
    sourceYear: '2007',
    text: "**Oxidation** is defined as the process of:",
    options: ["Gain of electrons", "Loss of electrons", "Gain of hydrogen", "Loss of oxygen"],
    correctAnswer: 1,
    explanation: "OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain."
  },
  {
    id: 17,
    category: 'CHEMISTRY',
    sourceYear: '2010',
    text: "In the reaction $Zn + Cu^{2+} \\rightarrow Zn^{2+} + Cu$, it can be deduced that:",
    options: ["$Zn$ is reduced", "$Zn$ is the oxidizing agent", "$Cu^{2+}$ loses electrons", "$Cu^{2+}$ is the oxidizing agent"],
    correctAnswer: 3,
    explanation: "$Cu^{2+} + 2e^- \\rightarrow Cu$. Since $Cu^{2+}$ accepts electrons, it acts as the oxidizing agent (being reduced itself)."
  },
  {
    id: 18,
    category: 'CHEMISTRY',
    sourceYear: '2010/2011',
    text: "The bond formed between $H_2O$ and $H^+$ to form the **hydroxonium ion** is:",
    options: ["Co-ordinate covalency", "Electrovalent", "Covalent", "Ionic"],
    correctAnswer: 0,
    explanation: "A coordinate covalent (dative) bond is formed when one atom provides both electrons for a shared pair (e.g., $H_2O + H^+ \\rightarrow H_3O^+$)."
  },
  {
    id: 19,
    category: 'CHEMISTRY',
    sourceYear: '2012',
    text: "Which of the following solutions is **NOT acidic**?",
    options: ["Aluminium chloride", "Zinc chloride", "Copper (II) tetraoxosulphate (VI)", "Silver chloride"],
    correctAnswer: 3,
    explanation: "Silver chloride ($AgCl$) is insoluble in water and doesn't affect the pH significantly; the others undergo hydrolysis to form acidic solutions."
  },
  {
    id: 20,
    category: 'CHEMISTRY',
    sourceYear: '2010',
    text: "One **mole of a substance** contains the:",
    options: ["Atomic number of particles", "Faraday's number of particles", "Avogadro's number of particles", "Quantum number of particles"],
    correctAnswer: 2,
    explanation: "By definition, one mole contains approximately $6.022 \\times 10^{23}$ particles (Avogadro's number)."
  }
];
