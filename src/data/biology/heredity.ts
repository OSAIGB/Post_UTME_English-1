/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const HEREDITY_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'BIOLOGY',
    text: "Which of the following is an example of **discontinuous variation**?",
    options: ["Shape of the head", "Blood group", "Body complexion", "Pointed nose"],
    correctAnswer: 1,
    explanation: "Blood group is an example of discontinuous variation because it is controlled by a single gene or a few genes, resulting in distinct categories with no intermediate forms (you are either blood group A, B, AB, or O)."
  },
  {
    id: 2,
    category: 'BIOLOGY',
    text: "In genetics, an organism's **physical appearance** is referred to as its:",
    options: ["Genotype", "Phenotype", "Allele", "Chromosome"],
    correctAnswer: 1,
    explanation: "The phenotype of an organism refers to its observable physical, physiological, or biochemical traits, which are determined by its genetic makeup (genotype) and environmental influences."
  },
  {
    id: 3,
    category: 'BIOLOGY',
    text: "The **law of segregation** in genetics states that:",
    options: [
      "Genes are located on chromosomes",
      "Alleles separate during gamete formation",
      "Traits blend in offspring",
      "Dominant traits mask recessive ones"
    ],
    correctAnswer: 1,
    explanation: "Mendel's First Law (Law of Segregation) states that the two alleles for a heritable character segregate (separate) during gamete formation (meiosis) and end up in different gametes."
  },
  {
    id: 4,
    category: 'BIOLOGY',
    text: "A cross between two **heterozygous individuals** for a single trait would produce a **genotypic ratio** of:",
    options: ["3:1", "1:2:1", "9:3:3:1", "1:1"],
    correctAnswer: 1,
    explanation: "Crossing two heterozygotes ($Aa \\times Aa$) yields a genotypic ratio of $1\\text{ }AA : 2\\text{ }Aa : 1\\text{ }aa$ ($1:2:1$), and a phenotypic ratio of $3$ dominant : $1$ recessive ($3:1$)."
  },
  {
    id: 5,
    category: 'BIOLOGY',
    text: "Which of the following is an example of a **sex-linked trait**?",
    options: ["Blood group", "Colour blindness", "Tongue rolling", "Hair type"],
    correctAnswer: 1,
    explanation: "Colour blindness is a classic sex-linked recessive trait. The gene responsible is located on the non-homologous portion of the X chromosome."
  },
  {
    id: 6,
    category: 'BIOLOGY',
    text: "The transfer of alleles from one population to another through **migration** is referred to as:",
    options: ["Genetic drift", "Gene flow", "Mutation", "Natural selection"],
    correctAnswer: 1,
    explanation: "Gene flow is the transfer of alleles into or out of a population due to the movement of fertile individuals or their gametes (migration)."
  },
  {
    id: 7,
    category: 'BIOLOGY',
    text: "In **agricultural genetics**, the principles of heredity are mainly applied to:",
    options: [
      "Study evolutionary relationships",
      "Improve yield, disease resistance and nutrition",
      "Predict genetic diseases in livestock",
      "Extend shelf life of produce"
    ],
    correctAnswer: 1,
    explanation: "Applying genetics in agriculture helps select and breed crops and livestock with desirable traits such as high yield, high nutrient content, and improved pest/disease resistance."
  },
  {
    id: 8,
    category: 'BIOLOGY',
    text: "The ability to taste **phenylthiocarbamide (PTC)** is an example of what type of variation?",
    options: ["Continuous variation", "Discontinuous variation", "Morphological variation", "Environmental variation"],
    correctAnswer: 1,
    explanation: "PTC tasting is a discontinuous variation since individuals are divided into two distinct, non-overlapping categories: tasters and non-tasters, controlled primarily by a single gene."
  },
  {
    id: 9,
    category: 'BIOLOGY',
    text: "If a DNA strand has the base sequence **TCA**, its complementary strand would be:",
    options: ["ATG", "TAG", "GAT", "AGT"],
    correctAnswer: 3,
    explanation: "In DNA base pairing, Thymine ($T$) pairs with Adenine ($A$), and Cytosine ($C$) pairs with Guanine ($G$). Hence, the complementary sequence of $TCA$ is $AGT$."
  },
  {
    id: 10,
    category: 'BIOLOGY',
    text: "A man heterozygous for blood group A marries a woman heterozygous for blood group B. What is the **probability** that their child will have blood group **AB**?",
    options: ["25%", "50%", "75%", "0%"],
    correctAnswer: 0,
    explanation: "Heterozygous A ($I^A I^O$) crossed with Heterozygous B ($I^B I^O$) can produce genotypes $I^A I^B$ (AB), $I^A I^O$ (A), $I^B I^O$ (B), and $I^O I^O$ (O). Each genotype has a 25% (1 in 4) probability."
  },
  {
    id: 11,
    category: 'BIOLOGY',
    text: "Sex-linked traits are usually **more common in males** because:",
    options: [
      "Males have two X chromosomes",
      "Males have one X and one Y chromosome",
      "Males inherit traits only from their fathers",
      "Males inherit traits only from their mothers"
    ],
    correctAnswer: 1,
    explanation: "Males are hemizygous ($XY$). A single recessive allele on their lone X chromosome is sufficient to express a sex-linked trait, whereas females ($XX$) require two copies of the recessive allele to show the trait."
  },
  {
    id: 12,
    category: 'BIOLOGY',
    text: "Which of the following describes a **non-heritable character**?",
    options: [
      "The ability of a hawk to fly south for the winter",
      "The blood group A, B, AB or O of a human",
      "The height of a plant determined by its genes",
      "A scar acquired by an individual from an accident"
    ],
    correctAnswer: 3,
    explanation: "Acquired characteristics or physical changes from injuries/accidents (like scars) do not alter the genetic code in gametes, and therefore cannot be inherited by offspring."
  },
  {
    id: 13,
    category: 'BIOLOGY',
    text: "Sickle cell anaemia is caused by a mutation in the haemoglobin gene and shows incomplete dominance in heterozygotes. What **advantage** do heterozygotes have in malaria-endemic areas?",
    options: ["Resistance to malaria", "Higher oxygen capacity", "Normal red blood cells", "Increased immunity"],
    correctAnswer: 0,
    explanation: "Individuals with the sickle-cell trait (heterozygotes, $HbAS$) have a survival advantage in regions where malaria is common because their red blood cells are less hospitable to the *Plasmodium* parasite."
  },
  {
    id: 14,
    category: 'BIOLOGY',
    text: "In genetics, the term **F1 generation** refers to:",
    options: ["The parent generation", "The first filial generation", "The second filial generation", "The grandparent generation"],
    correctAnswer: 1,
    explanation: "The F1 generation is the first filial generation, which consists of offspring resulting from a cross between two parental ($P$) organisms."
  },
  {
    id: 15,
    category: 'BIOLOGY',
    text: "Which of the following statements about **alleles** is correct?",
    options: [
      "They are always identical in a heterozygous organism",
      "They are alternative forms of the same gene",
      "They are found only in the cytoplasm",
      "They code for different traits on different chromosomes"
    ],
    correctAnswer: 1,
    explanation: "Alleles are different or alternative molecular forms of a gene that locate at the same locus on homologous chromosomes and influence the same trait."
  }
];
