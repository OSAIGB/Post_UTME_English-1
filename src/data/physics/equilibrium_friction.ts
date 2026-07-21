/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const EQUILIBRIUM_FRICTION_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "The resultant of three vectors is at its maximum when the angle of inclination between them is:",
    options: [
      "180⁰",
      "90⁰",
      "45⁰",
      "0⁰"
    ],
    correctAnswer: 3,
    explanation: "The resultant of vectors is maximized when they act in the exact same direction (angle of inclination is 0⁰), allowing their magnitudes to simply add up constructively."
  },
  {
    id: 2,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "The resultant of two vectors is at its minimum when they are:",
    options: [
      "Parallel",
      "Anti-parallel (180⁰)",
      "Perpendicular",
      "Coplanar"
    ],
    correctAnswer: 1,
    explanation: "Two vectors yield the minimum possible resultant when they act in opposite directions (anti-parallel, 180⁰), causing them to subtract from one another."
  },
  {
    id: 3,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "Which of the following instruments operates on the principle of Hooke’s law, where extension is proportional to force?",
    options: [
      "Principle of moments",
      "Newton’s first law",
      "Spring balance",
      "Pascal’s law"
    ],
    correctAnswer: 2,
    explanation: "A spring balance measures weight (force) directly using a calibrated spring. According to Hooke's Law (F = kx), the extension (x) of the spring is directly proportional to the applied force (F)."
  },
  {
    id: 4,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "In a system representing balls on an undulating surface, positions of stable equilibrium are those where the object is at the lowest point of a curve, such as points:",
    options: [
      "II, V and VIII",
      "I, II and VII",
      "III, VI and IX",
      "III, IV and VIII"
    ],
    correctAnswer: 2,
    explanation: "An object is in stable equilibrium when any small displacement produces a restoring force that returns it to its original position. On an undulating surface, this occurs at the local minimum points (valleys/lowest points of the curves), represented here by points III, VI, and IX."
  },
  {
    id: 5,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "Which of the following is considered to be in neutral equilibrium?",
    options: [
      "A heavy weight suspended on a string",
      "The beam of a balance in use",
      "A heavy-based table lamp",
      "A cone resting on its slant edge"
    ],
    correctAnswer: 3,
    explanation: "A cone resting on its slant edge is in neutral equilibrium because if it is slightly rolled/displaced, its center of gravity remains at the same height above the surface and it does not tend to return or roll further away."
  },
  {
    id: 6,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "Which of the following pairs of physical quantities have equivalent units?",
    options: [
      "Work done and moments",
      "Energy and momentum",
      "Strain and Young's modulus",
      "Energy and pressure"
    ],
    correctAnswer: 0,
    explanation: "Both work done (Force × distance) and the moment of a force (Force × perpendicular distance) are measured in Newton-meters (N·m) in SI units."
  },
  {
    id: 7,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "One of the conditions for three coplanar non-parallel forces to be in equilibrium is that their:",
    options: [
      "lines of action are parallel",
      "magnitudes must be equal",
      "directions must be the same",
      "lines of action meet at a common point"
    ],
    correctAnswer: 3,
    explanation: "For three coplanar non-parallel forces to be in translational and rotational equilibrium, their lines of action must be concurrent—meaning they must intersect/meet at a single common point."
  },
  {
    id: 8,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "A uniform metre rule is pivoted at the 35.0cm mark. If a mass of 50g is hung at the 15.0cm mark to balance the rule horizontally, the mass of the rule is:",
    options: [
      "55.0g",
      "66.7g",
      "75.0g",
      "77.7g"
    ],
    correctAnswer: 1,
    explanation: "A uniform metre rule has its center of gravity at the 50.0cm mark. Let its mass be M. Taking moments about the pivot at 35.0cm: Anticlockwise moment = Clockwise moment. 50g × (35cm - 15cm) = M × (50cm - 35cm) => 50 × 20 = M × 15 => 1000 = 15M => M = 1000 / 15 = 66.7g."
  },
  {
    id: 9,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "For an object to be in equilibrium when acted upon by a number of parallel forces, the vector sum of these forces must be:",
    options: [
      "Average",
      "Zero",
      "Negative",
      "Positive"
    ],
    correctAnswer: 1,
    explanation: "For any object in translational equilibrium, the net force acting on it must be zero. For parallel forces, the algebraic vector sum of forces acting upwards must equal the sum of forces acting downwards, resulting in a net sum of zero."
  },
  {
    id: 10,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "Which of the following substances can be effectively used to reduce the frictional force between two surfaces?",
    options: [
      "Petrol",
      "Kerosene",
      "Grease",
      "Water"
    ],
    correctAnswer: 2,
    explanation: "Lubricants like grease and oil are highly effective at reducing friction because they form a thin slippery layer between solid surfaces, preventing direct contact of surface asperities."
  },
  {
    id: 11,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "The coefficient of friction between two perfectly smooth surfaces is theoretically defined as:",
    options: [
      "infinity",
      "one",
      "half",
      "zero"
    ],
    correctAnswer: 3,
    explanation: "Perfectly smooth surfaces offer zero resistance to relative motion, which theoretically means the friction force is zero, resulting in a coefficient of friction (μ = F / R) of zero."
  },
  {
    id: 12,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "Which of the following best describes the concept of relative velocity?",
    options: [
      "Velocity measured from the ground",
      "Velocity of one object with respect to another",
      "Sum of individual velocities",
      "Product of speed and time"
    ],
    correctAnswer: 1,
    explanation: "Relative velocity is the velocity of an object or observer B in the rest frame of another object or observer A."
  },
  {
    id: 13,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "Two vectors of 6.0N and 8.0N act at right angles to each other. The magnitude of their resultant vector is:",
    options: [
      "13.0N",
      "14.0N",
      "10.0N",
      "12.0N"
    ],
    correctAnswer: 2,
    explanation: "Since the forces act at right angles (90°), we can use the Pythagorean theorem: Resultant = √(6² + 8²) = √(36 + 64) = √100 = 10.0N."
  },
  {
    id: 14,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "An object of mass 80kg is pulled on rough horizontal ground by a force of 500N. The coefficient of static friction is approximately (take g = 10ms⁻²):",
    options: [
      "0.6",
      "0.4",
      "1.0",
      "0.8"
    ],
    correctAnswer: 0,
    explanation: "The normal reaction force R = mass × g = 80kg × 10ms⁻² = 800N. If the pulling force at threshold is 500N, then the coefficient of static friction is μ = F / R = 500 / 800 = 0.625, which is approximately 0.6."
  },
  {
    id: 15,
    category: 'PHYSICS',
    sourceYear: 'Equilibrium and Friction',
    text: "The process whereby an oscillating system gradually loses its energy to the environment and eventually comes to rest is known as:",
    options: [
      "Forced vibration",
      "Damping",
      "Resonance",
      "Energy oscillation"
    ],
    correctAnswer: 1,
    explanation: "Damping is the progressive dissipation of energy in an oscillating system due to resistive forces like air resistance, friction, or viscosity, which causes the amplitude of the oscillations to decay to zero over time."
  }
];
