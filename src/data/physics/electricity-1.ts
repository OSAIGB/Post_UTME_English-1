/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const PHYSICS_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'PHYSICS',
    sourceYear: '2005',
    text: "An electric lamp has the following markings: 230V, 250W. How long would it take the lamp to use **one kilowatt-hour** when connected to a 230V mains?",
    options: ["8.0hr", "6.0hr", "4.0hr", "2.0hr"],
    correctAnswer: 2,
    explanation: "Energy (E) = Power (P) × Time (t). 1 kWh = 1000 Wh. t = E / P = 1000Wh / 250W = 4.0hr."
  },
  {
    id: 2,
    category: 'PHYSICS',
    sourceYear: '2006',
    text: "A lamp is rated 240V, 60W; the **resistance** of the filament is:",
    options: ["960Ω", "16Ω", "15Ω", "4Ω"],
    correctAnswer: 0,
    explanation: "P = V² / R => R = V² / P = (240 × 240) / 60 = 57600 / 60 = 960Ω."
  },
  {
    id: 3,
    category: 'PHYSICS',
    sourceYear: '2006',
    text: "Which of the following **obeys Ohm's laws**?",
    options: ["Glass", "Diode", "All electrolytes", "All metals"],
    correctAnswer: 3,
    explanation: "Ohm's law applies to metallic conductors at constant temperature."
  },
  {
    id: 4,
    category: 'PHYSICS',
    sourceYear: '2006',
    text: "The D.C. generator has essentially the same components as the A.C. generator except for the presence of:",
    options: ["Slip-ring", "Carbon brushes", "Split ring", "Armature"],
    correctAnswer: 2,
    explanation: "A D.C. generator uses a split-ring commutator to produce direct current, whereas an A.C. generator uses slip rings."
  },
  {
    id: 5,
    category: 'PHYSICS',
    sourceYear: '2006',
    text: "When a pure **semiconductor is heated**, its resistance:",
    options: ["Increases", "Decreases", "Remains the same", "Increases and then decreases"],
    correctAnswer: 1,
    explanation: "Semiconductors have a negative temperature coefficient of resistance; heating them releases more charge carriers, thus decreasing resistance."
  },
  {
    id: 6,
    category: 'PHYSICS',
    sourceYear: '2008',
    text: "Potentiometer balance lengths for a certain cell of unknown emf E' and a Daniel cell of emf 1.08V are 80.0cm and 48.0cm respectively. Calculate the **unknown emf E'**:",
    options: ["1.5V", "1.8V", "2.0V", "2.5V"],
    correctAnswer: 1,
    explanation: "E₁/E₂ = L₁/L₂ => E'/1.08 = 80/48 => E' = (80/48) × 1.08 = 1.8V."
  },
  {
    id: 7,
    category: 'PHYSICS',
    sourceYear: '2008',
    text: "Find the **cost of operating** an electric appliance for 10 hours at 30 kobo per kWh if it takes 3A when connected to a 220V supply:",
    options: ["₦0.66", "₦1.98", "₦2.31", "₦1.50"],
    correctAnswer: 1,
    explanation: "Power = V × I = 220 × 3 = 660W = 0.66kW. Energy = P × t = 0.66 × 10 = 6.6 kWh. Cost = 6.6 × 30 kobo = 198 kobo = ₦1.98."
  },
  {
    id: 8,
    category: 'PHYSICS',
    sourceYear: '2008',
    text: "A battery of e.m.f. 12 volts and internal resistance 1.2 ohms is connected to an external resistance of 4 ohms. Find the **current flowing** in the circuit:",
    options: ["2.3A", "2.7A", "3.0A", "2.5A"],
    correctAnswer: 0,
    explanation: "I = E / (R + r) = 12 / (4 + 1.2) = 12 / 5.2 ≈ 2.307A."
  },
  {
    id: 9,
    category: 'PHYSICS',
    sourceYear: '2009/2010',
    text: "A **transformer** has 500 turns in the primary coil and 400 turns in the secondary coil. Find the voltage in the secondary coil when the primary coil is connected to a 220V main:",
    options: ["176V", "160V", "132V", "182V"],
    correctAnswer: 0,
    explanation: "Vs/Vp = Ns/Np => Vs/220 = 400/500 => Vs = 220 × 0.8 = 176V."
  },
  {
    id: 10,
    category: 'PHYSICS',
    sourceYear: '2010/2011',
    text: "When a steady current moves in a **long solenoid P**, it is said that:",
    options: ["P settles in a north-south direction if freely suspended", "Both ends of P are south poles", "Both ends of P are north poles", "There is only a magnetic field at the end of P"],
    correctAnswer: 0,
    explanation: "A solenoid carrying current behaves like a bar magnet and will align with the Earth's magnetic field."
  },
  {
    id: 11,
    category: 'PHYSICS',
    sourceYear: '2010/2011',
    text: "A **transformer** has a primary coil of 400 turns and a secondary coil of 200 turns. If the primary coil is connected to 240V a.c. mains, calculate the **efficiency** given that the current in the primary coil is 3A and in the secondary is 5A:",
    options: ["60%", "50%", "83.3%", "62.5%"],
    correctAnswer: 2,
    explanation: "Vp=240, Np=400, Ns=200 => Vs = (Ns/Np)*Vp = (200/400)*240 = 120V. Efficiency = (Power Out / Power In) * 100 = (Vs*Is / Vp*Ip) * 100 = (120*5 / 240*3) * 100 = (600 / 720) * 100 = 83.33%."
  },
  {
    id: 12,
    category: 'PHYSICS',
    sourceYear: '2010/2011',
    text: "When a **P-n junction** of a semi-conductor is forward biased:",
    options: ["A large current is obtained", "A small current is obtained", "No current is obtained", "The current value remains the same"],
    correctAnswer: 0,
    explanation: "Forward biasing reduces the depletion layer, allowing current to flow easily."
  },
  {
    id: 13,
    category: 'PHYSICS',
    sourceYear: '2011/2012',
    text: "A cell needed 0.30m of the wire of a potentiometer to balance its e.m.f. but only 0.20m of its s.p.d. when a resistance of 4Ω was connected across its terminals. Calculate the **internal resistance** of the cell:",
    options: ["1.0Ω", "0.5Ω", "1.5Ω", "2.0Ω"],
    correctAnswer: 3,
    explanation: "r = R * (E/V - 1). E/V is proportional to L₁/L₂ => r = 4 * (0.3/0.2 - 1) = 4 * (1.5 - 1) = 4 * 0.5 = 2.0Ω. (Note: User input had '2.0m' in text but standard physics problem usually uses 0.20m to match balance ratio)."
  },
  {
    id: 14,
    category: 'PHYSICS',
    sourceYear: '2012',
    text: "Which of the following is correct about a **capacitor connected to an A.C. source**?",
    options: ["Current leads the voltage by 90°", "Voltage leads the current by 90°", "Current and voltage are in phase", "Power dissipated is maximum"],
    correctAnswer: 0,
    explanation: "In a purely capacitive circuit, the current leads the voltage by a phase angle of 90 degrees."
  },
  {
    id: 15,
    category: 'PHYSICS',
    sourceYear: '2012',
    text: "A working **electric motor** takes a current of 1.5A when the P.d across it is 250V. If its efficiency is 80%, the power output is:",
    options: ["350W", "250W", "200W", "300W"],
    correctAnswer: 3,
    explanation: "Power In = V × I = 250 × 1.5 = 375W. Power Out = Efficiency × Power In = 0.8 × 375 = 300W."
  },
  {
    id: 16,
    category: 'PHYSICS',
    sourceYear: '2014/2015',
    text: "If two 2μF capacitors are connected in **parallel** and the combination is then connected in **series** with a 4μF capacitor, the net capacitance will be:",
    options: ["6.0μF", "4.0μF", "2.0μF", "0.2μF"],
    correctAnswer: 2,
    explanation: "Parallel: 2 + 2 = 4μF. Series with 4μF: (4 × 4) / (4 + 4) = 16 / 8 = 2.0μF."
  },
  {
    id: 17,
    category: 'PHYSICS',
    sourceYear: '2014/2015',
    text: "Coulomb's Law for the electricity force between two unlike charges each of magnitude q, separated by a distance x in air of permittivity can be written as:",
    options: ["F = q² / (4πε₀x²)", "F = q / (4πε₀x²)", "F = q² / (4πε₀x)", "F = q / (4πε₀x)"],
    correctAnswer: 0,
    explanation: "The force between two charges is proportional to the product of charges and inversely proportional to the square of the distance."
  },
  {
    id: 18,
    category: 'PHYSICS',
    sourceYear: '2014/2015',
    text: "The operation of a **moving car-coil galvanometer** is based on:",
    options: ["Electromagnetic induction", "Magnetic effect of electric current", "Force on a carrying conductor in a magnetic field", "Electrochemical effect"],
    correctAnswer: 1,
    explanation: "A galvanometer works on the principle that a current-carrying coil placed in a magnetic field experiences a torque."
  },
  {
    id: 19,
    category: 'PHYSICS',
    sourceYear: '2023',
    text: "Which of the following instruments measures **both AC and DC current**?",
    options: ["Galvanometer", "Moving iron meter", "Ammeter", "Voltmeter"],
    correctAnswer: 1,
    explanation: "Moving iron instruments can be used for both AC and DC measurements."
  },
  {
    id: 20,
    category: 'PHYSICS',
    sourceYear: '2024',
    text: "If silicon is **doped with phosphorus**, what type of semiconductor material is formed?",
    options: ["Zener material", "P-N junction", "N-type", "P-type"],
    correctAnswer: 2,
    explanation: "Doping with group 5 elements like phosphorus adds extra electrons, forming an N-type semiconductor."
  }
];
