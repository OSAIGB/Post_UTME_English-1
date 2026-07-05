/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const SOUND_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'PHYSICS',
    text: "When a mechanical bell is placed inside a sealed glass container and the air is gradually pumped out, the sound of the bell fades away until it can no longer be heard. What is the primary reason for this observation?",
    options: [
      "The sound waves are completely reflected by the glass walls.",
      "Sound requires a material medium to propagate, which is removed by the pump.",
      "The mechanical energy of the ringing bell decreases in a vacuum.",
      "Sound waves speed up too much in a vacuum to be detected by the human ear."
    ],
    correctAnswer: 1,
    explanation: "Sound is a mechanical wave that propagates through the vibration of particles in a medium. Removing the air creates a vacuum, leaving no medium for the sound to travel through."
  },
  {
    id: 2,
    category: 'PHYSICS',
    text: "How are the physical disturbances characterized when energy is transferred through a gaseous environment as sound?",
    options: [
      "Electromagnetic",
      "Transverse",
      "Longitudinal",
      "Torsional"
    ],
    correctAnswer: 2,
    explanation: "Sound waves in gases are longitudinal waves, meaning the particles of the medium vibrate parallel to the direction of energy transport, creating alternating areas of compression and rarefaction."
  },
  {
    id: 3,
    category: 'PHYSICS',
    text: "In which of the following substances will a sound wave typically move with the highest velocity?",
    options: [
      "Steel",
      "Water",
      "Air",
      "Oxygen"
    ],
    correctAnswer: 0,
    explanation: "Sound travels fastest in solids because the particles are packed tightly together with strong intermolecular forces, allowing elastic vibrations to transmit rapidly compared to liquids or gases."
  },
  {
    id: 4,
    category: 'PHYSICS',
    text: "An individual standing before a large cliff produces a sharp noise and detects the reflected signal exactly 0.8 seconds later. Given that the ambient acoustic velocity is 340 m/s, determine the separation distance between the person and the cliff.",
    options: [
      "136 m",
      "272 m",
      "544 m",
      "68 m"
    ],
    correctAnswer: 0,
    explanation: "The total distance traveled by the sound to the cliff and back is $2d = v \\times t$. Therefore, $2d = 340 \\times 0.8 = 272\\text{ m}$, which gives a separation distance of $d = 136\\text{ m}$."
  },
  {
    id: 5,
    category: 'PHYSICS',
    text: "Which of the following environmental modifications would result in a measurable increase in the speed at which sound traverses a gaseous medium?",
    options: [
      "A significant rise in atmospheric pressure",
      "An increase in the ambient temperature",
      "A decrease in the signal's pitch",
      "A reduction in the wave's amplitude"
    ],
    correctAnswer: 1,
    explanation: "The speed of sound in a gas is proportional to the square root of its absolute temperature ($v \\propto \\sqrt{T}$). As temperature increases, gas molecules move faster, transferring wave energy more quickly."
  },
  {
    id: 6,
    category: 'PHYSICS',
    text: "Within a gaseous environment, the speed of acoustic propagation remains constant despite fluctuations in which of the following parameters?",
    options: [
      "Temperature",
      "Density",
      "Pressure",
      "Humidity"
    ],
    correctAnswer: 2,
    explanation: "Fluctuations in atmospheric pressure do not affect the speed of sound at a constant temperature, because any increase in pressure is accompanied by a proportional increase in density, keeping the ratio $P/\\rho$ constant."
  },
  {
    id: 7,
    category: 'PHYSICS',
    text: "The specific auditory quality that allows a listener to distinguish a \"high-pitched\" note from a \"low-pitched\" note is primarily determined by the signal's:",
    options: [
      "Amplitude",
      "Wavelength",
      "Frequency",
      "Speed"
    ],
    correctAnswer: 2,
    explanation: "Pitch is the subjective perception of sound frequency. High-frequency sound waves are perceived as high-pitched notes, and low-frequency waves are perceived as low-pitched notes."
  },
  {
    id: 8,
    category: 'PHYSICS',
    text: "When an observer perceives a sound as becoming significantly louder, which physical characteristic of the wave has undergone an increase?",
    options: [
      "Amplitude",
      "Frequency",
      "Period",
      "Phase"
    ],
    correctAnswer: 0,
    explanation: "Loudness is primarily determined by the intensity of the sound wave, which is proportional to the square of its amplitude ($I \\propto A^2$)."
  },
  {
    id: 9,
    category: 'PHYSICS',
    text: "Upon transitioning from an atmospheric environment into a body of water, what change generally occurs to the physical properties of a sound wave?",
    options: [
      "The frequency increases",
      "Both speed and wavelength increase",
      "The speed decreases while wavelength stays constant",
      "The velocity remains constant"
    ],
    correctAnswer: 1,
    explanation: "When a wave enters a new medium, its frequency stays the same. Since sound travels much faster in water than in air ($v_{\\text{water}} \\approx 1500\\text{ m/s}$ vs. $v_{\\text{air}} \\approx 340\\text{ m/s}$), the wavelength must also increase proportionally according to the wave equation $v = f\\lambda$."
  },
  {
    id: 10,
    category: 'PHYSICS',
    text: "In which of the following environments is the transmission of acoustic energy physically impossible?",
    options: [
      "Through solid steel",
      "Through deep water",
      "Through a perfect vacuum",
      "Through carbon dioxide gas"
    ],
    correctAnswer: 2,
    explanation: "Sound is a mechanical wave and absolutely requires a physical medium (solid, liquid, or gas) to propagate. It cannot travel through a vacuum because there are no particles to transmit the vibration."
  },
  {
    id: 11,
    category: 'PHYSICS',
    text: "The operational technique of using acoustic signals to determine the depth of the seafloor relies primarily on which wave phenomenon?",
    options: [
      "Diffraction",
      "Refraction",
      "Reflection",
      "Interference"
    ],
    correctAnswer: 2,
    explanation: "Sonar (Sound Navigation and Ranging) systems calculate depth by emitting sound waves and measuring the time it takes for their echo to reflect back from the seabed."
  },
  {
    id: 12,
    category: 'PHYSICS',
    text: "Two distinct musical instruments playing the same fundamental note at identical volume can be differentiated by the human ear because of their unique:",
    options: [
      "Pitch",
      "Overtones or harmonics",
      "Velocity",
      "Intensity"
    ],
    correctAnswer: 1,
    explanation: "The quality (timbre) of a musical sound is determined by the presence and relative strength of various overtones or harmonics accompanying the fundamental frequency."
  },
  {
    id: 13,
    category: 'PHYSICS',
    text: "The persistence of a sound within an enclosed space after the original source has ceased, caused by multiple internal reflections, is professionally termed:",
    options: [
      "Diffraction",
      "Rarefaction",
      "Reverberation",
      "Superposition"
    ],
    correctAnswer: 2,
    explanation: "Reverberation is the collection of reflected sounds from surrounding surfaces in an enclosed space that causes the sound to persist after the source has stopped."
  },
  {
    id: 14,
    category: 'PHYSICS',
    text: "A wave moving at a velocity of 420 m/s possesses a distance of 42 meters between consecutive crests. What is the duration of a single complete cycle (the period) for this wave?",
    options: [
      "1.0 s",
      "0.1 s",
      "0.5 s",
      "10 s"
    ],
    correctAnswer: 1,
    explanation: "The distance between consecutive crests is the wavelength ($\\lambda = 42\\text{ m}$). Frequency $f = v / \\lambda = 420 / 42 = 10\\text{ Hz}$. The period $T$ is the reciprocal of frequency: $T = 1 / f = 1 / 10 = 0.1\\text{ s}$."
  },
  {
    id: 15,
    category: 'PHYSICS',
    text: "If the sound of thunder reaches an observer 3.0 seconds after the visual perception of a lightning strike, and the speed of sound is 330 m/s, how far away was the electrical discharge?",
    options: [
      "990 m",
      "495 m",
      "110 m",
      "165 m"
    ],
    correctAnswer: 0,
    explanation: "Since the speed of light is extremely fast (virtually instantaneous), the delay is entirely due to the speed of sound. Distance $d = v \\times t = 330 \\times 3 = 990\\text{ m}$."
  }
];
