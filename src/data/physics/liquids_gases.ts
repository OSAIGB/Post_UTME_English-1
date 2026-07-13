/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const LIQUIDS_GASES_QUESTIONS: Question[] = [
  // Section A: Liquids (Electrolytes and Electrolysis)
  {
    id: 1,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "The specialized container in which the chemical decomposition of a substance occurs through the passage of an electric current is known as a:",
    options: [
      "Voltmeter",
      "Electrolyte",
      "Voltameter",
      "Voltaic cell"
    ],
    correctAnswer: 2,
    explanation: "A voltameter (or coulometer) is the vessel or apparatus in which electrolysis takes place. Note the spelling difference from 'voltmeter' (which measures electrical potential difference)."
  },
  {
    id: 2,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "Which of the following substances is classified as an electrolyte based on its ability to conduct electricity in aqueous form?",
    options: [
      "Alcohol",
      "Sodium acetate solution",
      "Solid potassium hydroxide",
      "Mercury"
    ],
    correctAnswer: 1,
    explanation: "Sodium acetate dissolves in water to release sodium (Na+) and acetate (CH3COO-) ions, which are free to move and conduct electricity. Alcohol is non-electrolyte, solid KOH has ions locked in a crystal lattice (non-conducting in solid form), and mercury is a metallic liquid conductor, not an electrolyte."
  },
  {
    id: 3,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "In a salt-water electrolyte, the primary carriers of electric charge that facilitate the flow of current are:",
    options: [
      "Atoms",
      "Free electrons",
      "Salt molecules",
      "Ions"
    ],
    correctAnswer: 3,
    explanation: "Unlike metals where charge is carried by free electrons, electrolytes conduct electricity through the migration of positive ions (cations) and negative ions (anions) to the respective electrodes."
  },
  {
    id: 4,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "According to Faraday’s Laws of Electrolysis, if a graph is plotted showing the mass of a substance deposited (m) against the quantity of electricity consumed (Q), the slope of the resulting straight line represents the:",
    options: [
      "Electrochemical equivalent (z)",
      "Charge released",
      "Current flowing",
      "Total energy"
    ],
    correctAnswer: 0,
    explanation: "Faraday's first law states that m = z * Q. Thus, a plot of m (y-axis) against Q (x-axis) yields a straight line through the origin, where the gradient/slope is equal to the electrochemical equivalent, z."
  },
  {
    id: 5,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "Determine the steady current required to deposit 36.0g of silver on a surface over a duration of 5.0 minutes, given that the electrochemical equivalent (z) of silver is 0.0012g/C:",
    options: [
      "6000 A",
      "100 A",
      "10 A",
      "1.0 A"
    ],
    correctAnswer: 1,
    explanation: "Using m = z * I * t: Here, m = 36.0g, z = 0.0012 g/C, and t = 5.0 minutes = 5.0 * 60 = 300 seconds. Solving for current: I = m / (z * t) = 36.0 / (0.0012 * 300) = 36.0 / 0.36 = 100 A."
  },
  {
    id: 6,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "During the electrolytic purification of crude copper using a copper (II) sulphate solution, the process is successful only if the:",
    options: [
      "Platinum electrodes are used",
      "Crude copper is made the anode of the cell",
      "Crude copper is made the cathode of the cell",
      "Solution is highly diluted"
    ],
    correctAnswer: 1,
    explanation: "In electrolytic refining, the impure/crude metal is always made the anode (positive electrode), where it dissolves into the electrolyte, while pure metal deposits onto the cathode (negative electrode)."
  },
  {
    id: 7,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "In an experiment to verify the accuracy of an ammeter (calibration), a student finds that 1.0A of current flowing for 30 minutes (1/2 hr) liberates 6.6×10^-4 kg of copper. The percentage error in the ammeter reading is calculated to be:",
    options: [
      "12%",
      "11%",
      "1.2%",
      "1.1%"
    ],
    correctAnswer: 1,
    explanation: "Theoretical mass m_t = z * I * t. Taking standard z of copper as 3.3×10^-7 kg/C, m_t = (3.3×10^-7) * 1.0A * (30 * 60s) = 5.94×10^-4 kg. Error = |Actual - Theoretical| / Theoretical = (6.6×10^-4 - 5.94×10^-4) / 5.94×10^-4 = 0.66 / 5.94 = 11.11%, which rounds to 11%."
  },
  {
    id: 8,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "If 1 Faraday (96,500 C) of electricity is passed through a 1M CuSO4 solution for one minute, the correct observation is that:",
    options: [
      "The pH of the solution at the cathode decreases",
      "The pH of the solution at the anode decreases",
      "1 mole of Cu will be liberated at the cathode",
      "60 moles of Cu will be liberated at the anode"
    ],
    correctAnswer: 1,
    explanation: "At the anode, water molecules are oxidized to discharge oxygen gas and hydrogen ions (2H2O -> O2 + 4H+ + 4e-). The accumulation of H+ ions causes the pH at the anode to decrease."
  },
  {
    id: 9,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "When electroplating a metal object (X) with another metal (Y), which configuration must be used?",
    options: [
      "Y is the cathode and X is the anode",
      "X is the anode and a high alternating current is used",
      "X is the cathode and Y is the anode",
      "Y is the cathode and X is the anode"
    ],
    correctAnswer: 2,
    explanation: "To electroplate object X with metal Y, X (the object to be plated) must be connected to the negative terminal to serve as the cathode, and Y (the plating metal) must serve as the anode."
  },
  {
    id: 10,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "The same current is passed for the same time through solutions of AgNO3 and CuSO4 connected in series. If 1.0g of copper is produced, the amount of silver deposited is approximately:",
    options: [
      "1.7 g",
      "3.4 g",
      "0.5 g",
      "2.0 g"
    ],
    correctAnswer: 1,
    explanation: "Faraday's second law: Mass is proportional to Chemical Equivalent (Molar Mass / Valency). Silver valency = 1 (Ag+), Copper valency = 2 (Cu2+). Mass_Ag / Mass_Cu = (MolarMass_Ag / 1) / (MolarMass_Cu / 2) = 108 / (64 / 2) = 108 / 32 = 3.375. Mass_Ag = 3.375 * 1.0g = 3.4g."
  },
  // Section B: Gases (Discharge and Conduction)
  {
    id: 11,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "Under which specific set of physical conditions do gases effectively conduct electricity within a discharge tube?",
    options: [
      "High pressure and low potential difference",
      "Low pressure and high potential difference",
      "Low pressure and low potential difference",
      "High pressure and high potential difference"
    ],
    correctAnswer: 1,
    explanation: "Gases conduct electricity when pressure is reduced significantly (low pressure) and potential difference across the electrodes is very high (high potential difference)."
  },
  {
    id: 12,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "In a discharge tube, the gas is pumped out until the internal pressure is significantly lower than atmospheric pressure primarily to:",
    options: [
      "Enable electricity to be conducted at lower voltages",
      "Prevent the tube from exploding",
      "Increase the density of the gas",
      "Solidify the gas particles"
    ],
    correctAnswer: 0,
    explanation: "Reducing pressure increases the mean free path of gas ions, permitting them to accelerate and ionize other atoms under lower potential differences, thereby conducting electricity easily."
  },
  {
    id: 13,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "Identify the gas that typically produces a characteristic pink or reddish-coloured light when conducting electricity in a discharge tube:",
    options: [
      "Mercury",
      "Argon",
      "Air",
      "Neon"
    ],
    correctAnswer: 3,
    explanation: "Neon gas produces a distinctive, vibrant red or orange-pink glow when excited by electric current inside a discharge tube (used commonly in neon advertising signs)."
  },
  {
    id: 14,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "Which of the following statements is NOT true regarding a discharge tube?",
    options: [
      "The tube must have two electrodes",
      "The characteristic light produced can be used to study atomic structure",
      "The gas pressure must be slightly higher than atmospheric pressure",
      "It is used to obtain light of different colours"
    ],
    correctAnswer: 2,
    explanation: "The gas pressure in a discharge tube must be extremely low (near vacuum, around 0.01 mm Hg to 1 mm Hg), which is vastly lower than atmospheric pressure (~760 mm Hg). Hence, the third statement is false."
  },
  {
    id: 15,
    category: 'PHYSICS',
    sourceYear: 'UNIBEN Physics Quick Drill',
    text: "Cathode rays, which are produced in a discharge tube at low pressure, are professionally described as:",
    options: [
      "High-energy electromagnetic waves",
      "Streams of protons",
      "Streams of neutrons",
      "Streams of electrons"
    ],
    correctAnswer: 3,
    explanation: "Cathode rays are streams of fast-moving electrons emitted from the negative electrode (cathode) of an evacuated discharge tube when a high voltage is applied."
  }
];
