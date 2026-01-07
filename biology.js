// Biology Flashcard Data - Organized by 19 Topics
const allFlashcards = [
// Practical - General Planning Structure (CORMSS)
    { fullSection: "SECTION: Practical - General Planning Structure (CORMSS)", topic: "Practical", q: "What does CORMSS stand for in practical planning?", a: "C - Change, O - Organism, R - Repeat, M - Measure, S - Same, S - Safety" },
    { fullSection: "SECTION: Practical - General Planning Structure (CORMSS)", topic: "Practical", q: "What is an example of a Change (Independent Variable)?", a: "Example - Change in light intensity (Dark, Low, Medium)" },
    { fullSection: "SECTION: Practical - General Planning Structure (CORMSS)", topic: "Practical", q: "What is an example of an Organism (Control Variable Biotic)?", a: "Example - Same Species, Same Age" },
    { fullSection: "SECTION: Practical - General Planning Structure (CORMSS)", topic: "Practical", q: "What does Repeat mean in CORMSS?", a: "Redo experiment or readings and calculate mean to improve reliability and identify anomalies. Redo at least 3 times." },
    { fullSection: "SECTION: Practical - General Planning Structure (CORMSS)", topic: "Practical", q: "What is an example of Measure (Dependent Variable)?", a: "Example - Number of oxygen bubbles per unit time, Volume of carbon dioxide" },
    { fullSection: "SECTION: Practical - General Planning Structure (CORMSS)", topic: "Practical", q: "What is an example of Same (Control Variable Abiotic)?", a: "Example - Temperature, Volume" },
    { fullSection: "SECTION: Practical - General Planning Structure (CORMSS)", topic: "Practical", q: "What is included under Safety in CORMSS?", a: "Safety Goggles and Gloves, Lab Coat" },

    // Practical - Food Tests
    { fullSection: "SECTION: Practical - Food Tests", topic: "Practical", q: "How do you test for Reducing Sugar (Benedict's Test)?", a: "Add 2 cm3 of Benedict’s solution with 2 cm3 of the sample solution. Put the test tube in a hot water bath for 3 minutes at 80°C. Observe the colour change. Negative Result - Solution Remains Blue. Positive Result - Solution turns from Blue to Green, Yellow, Orange or Brick Red. Green - Low concentration, Yellow/Orange - Moderate, Brick Red - High concentration of Reducing Sugar." },
    { fullSection: "SECTION: Practical - Food Tests", topic: "Practical", q: "How do you test for Non-Reducing Sugar?", a: "Sample must first give negative result with Benedict’s solution. Boil 2 cm3 of the sample solution with 2 cm3 of HCl in a hot water bath. Cool and neutralise with 2 cm3 of NaHCO3 until fizzing stops. Add 1 cm3 of Benedict’s solution with 2 cm3 of sample. Heat in a hot water bath for 3 minutes at 80°C. Observe colour change. Negative - Blue, Positive - Green/Yellow/Orange/Brick Red. Green - Low concentration, Yellow/Orange - Moderate, Brick Red - High concentration of Non-Reducing Sugar." },
    { fullSection: "SECTION: Practical - Food Tests", topic: "Practical", q: "How do you perform the Fat Test (Ethanol Emulsion Test)?", a: "Add 2 cm3 of ethanol with 2 cm3 of sample solution. Mix gently and wait 1 minute for solids to settle. Decant ethanol into another test tube. Add 2 cm3 of water and shake properly. Observe colour change. Negative Result - No Change. Positive Result - Cloudy white emulsion forms." },
    { fullSection: "SECTION: Practical - Food Tests", topic: "Practical", q: "How do you perform the Protein Test with Biuret Solution?", a: "Add 2 cm3 of Biuret Solution with 2 cm3 of sample solution and mix. Observe colour change. Negative - Blue, Positive - Solution turns from Blue to Purple." },
    { fullSection: "SECTION: Practical - Food Tests", topic: "Practical", q: "How do you perform the Protein Test without Biuret Solution?", a: "Add 2 cm3 of NaOH with 2 cm3 of sample solution and mix. Add Cu(II)SO4 solution drop by drop. Observe colour change. Negative - Blue, Positive - Solution turns from Blue to Purple." },
    { fullSection: "SECTION: Practical - Food Tests", topic: "Practical", q: "How do you perform the Vitamin C Test (DCPIP Test)?", a: "Add DCPIP to sample solution drop by drop. Observe colour change. Negative - Solution remains dark blue, Positive - Solution turns from dark blue to colourless." },
    { fullSection: "SECTION: Practical - Food Tests", topic: "Practical", q: "How do you perform the Starch Test/Iodine Test for plants?", a: "Dip the leaf in boiling water to kill it. Boil the leaf in hot ethanol to remove chlorophyll. Rinse with water to soften. Perform starch test using iodine solution which turns blue-black." },
    { fullSection: "SECTION: Practical - Food Tests", topic: "Practical", q: "How do you perform the General Starch Test/Iodine Test?", a: "Add a few drops of iodine solution with 2 cm3 of sample solution. Observe colour change. Negative - Solution remains brown. Positive - Solution turns from brown to blue-black." },

    // Practical - General
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "What are the two pieces of information needed to calculate actual length of a cell under a microscope?", a: "Magnification, Image length" },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why should we use a white tile?", a: "To see colour change clearly" },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why should we shake the mixture?", a: "To evenly distribute the nutrients or organism. This increases surface area for maximum enzyme activity." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why should we add water to the solution?", a: "To ensure all solutions have the same volume but not same concentration." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why are the test tubes containing yeast left in a beaker of water for 5 minutes?", a: "To allow the yeast to get used to the temperature." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why was there a small increase in microorganism population?", a: "The nutrients were used up." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why should a part of the testa be cut?", a: "Easier for oxygen and water to enter. Easier for root and shoot to emerge." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why is it necessary to clean your cutting equipment?", a: "To ensure small pieces of A do not mix with solution of B and to prevent cross contamination." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "How can we prepare and examine epidermis tissue under a microscope?", a: "Peel off epidermis / make impression of leaf surface (with nail varnish or wax); place on slide with mountant/stain; use cover slip; prevent air bubbles; use of microscope." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why should A and B be cut to a similar number of pieces?", a: "To ensure the surface area of both is same. So results can be compared validly. Reliability increases." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why were the three plant tissues crushed before adding hydrogen peroxide?", a: "To release catalase enzyme by breaking open cells." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why do we repeat experiments?", a: "To improve reliability and identify anomalies." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why should X be kept constant?", a: "X is a variable and should be controlled as Y is the only factor being investigated. This prevents X from affecting the results." },
    { fullSection: "SECTION: Practical - General", topic: "Practical", q: "Why should X be kept the same?", a: "So valid comparison of results can be made." },

    // Practical - Possible Sources of Error and Prevention
    { fullSection: "SECTION: Practical - Possible Sources of Error and Prevention", topic: "Practical", q: "What should be done if yeast is not completely mixed in the solution?", a: "Stir for longer." },
    { fullSection: "SECTION: Practical - Possible Sources of Error and Prevention", topic: "Practical", q: "What should be done if top of the mixture is not level?", a: "Average the highest and lowest point." },
    { fullSection: "SECTION: Practical - Possible Sources of Error and Prevention", topic: "Practical", q: "What should be done if some yeast sticks to the rod?", a: "Provide yeast in suitable container." },
    { fullSection: "SECTION: Practical - Possible Sources of Error and Prevention", topic: "Practical", q: "What should be done if it is difficult to cut A and B into same volume?", a: "Use mass instead." },
    { fullSection: "SECTION: Practical - Possible Sources of Error and Prevention", topic: "Practical", q: "What should be done if it is difficult to judge intensity of colours?", a: "Use a colorimeter." },
    { fullSection: "SECTION: Practical - Possible Sources of Error and Prevention", topic: "Practical", q: "What happens if any control variable is not kept constant?", a: "Results may not be comparable, e.g., unequal volume of water, or pieces of potato cut inaccurately." },

    // Practical - Possible Control Variables
    { fullSection: "SECTION: Practical - Possible Control Variables", topic: "Practical", q: "What are some possible control variables?", a: "Same Volume, Same Concentration, Same Age, Same Species, Same Source. Perform experiment in dark room to prevent natural light affecting light intensity. Check the ones in Physics." },

    
// CHAPTER 1: CELLS
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What are cells?", a: "Cells are the structural and functional units of life. They are often incapable of independent existence. Cell membrane, cytoplasm and nucleus are common to all cells." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the cell membrane?", a: "The cell membrane is a partially permeable membrane that surrounds the cell, controls movement of substances in and out of the cell, separates the cell from the external environment and allows osmosis and active transport to occur." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the cytoplasm?", a: "The cytoplasm fills the cell, holds organelles in place and is the site where metabolic reactions occur." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the nucleus?", a: "The nucleus contains genetic material (DNA) and controls cellular activities." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "How does the nucleus control cellular activity?", a: "The nucleus synthesises mRNA which is required for protein synthesis." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the function of mitochondria?", a: "Mitochondria are the site of aerobic respiration and release energy for processes such as protein synthesis, cell division and active transport." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the function of ribosomes?", a: "Ribosomes are the site of protein synthesis with the help of mRNA." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is a cellulose cell wall?", a: "The cell wall is a rigid structure made of cellulose found outside the cell membrane of plant cells. It protects the cell, maintains its shape and is completely permeable." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the permanent vacuole?", a: "The permanent vacuole contains cell sap made of sugars, amino acids and waste products. It maintains turgidity and helps maintain the water potential gradient." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the function of chloroplasts?", a: "Chloroplasts contain chlorophyll which traps light energy and carry out photosynthesis." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "Describe a bacterial cell.", a: "A bacterial cell is a microscopic unicellular organism with a cell membrane, cytoplasm, ribosomes, a cell wall not made of cellulose, freely suspended genetic material and may contain plasmids." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What are specialised cells?", a: "Specialised cells are cells adapted or modified in structure to perform their function efficiently." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the function of a root hair cell?", a: "Root hair cells absorb water by osmosis, absorb dissolved mineral ions by active transport and help anchor the plant." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What are the adaptations of a root hair cell?", a: "They are long and elongated to increase surface area and have a large vacuole to maintain water potential gradient." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the function of xylem tissue?", a: "Xylem transports water and dissolved mineral ions from roots to leaves and provides mechanical support." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What are the adaptations of xylem vessels?", a: "They are hollow tubes made of dead cells, lignified for strength and have no end walls for continuous water flow." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is the function of red blood cells?", a: "Red blood cells transport oxygen in the form of oxyhaemoglobin and help return carbon dioxide." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What are the adaptations of red blood cells?", a: "They are biconcave, contain haemoglobin, are flexible and lack a nucleus to increase surface area." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is meant by biconcave?", a: "Thinner at the centre and thicker at the edges." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is a tissue?", a: "A group of cells working together to perform a specific function." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is an organ?", a: "Different tissues working together to perform a specific function." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is an organ system?", a: "A group of organs working together to perform a function." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is an organism?", a: "Different organ systems working together to keep an organism alive." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What is magnification?", a: "Magnification is image size divided by actual size." },
    { fullSection: "SECTION: Cells - Saiful", topic: "Cells", q: "What information is needed to calculate magnification?", a: "Image size and actual size." },
    { fullSection: "SECTION: Cells - Error List", topic: "Cells", q: "What is a villus?", a: "A villus is a cell involved in absorption while microvilli are projections on the cell." },
    { fullSection: "SECTION: Cells - Error List", topic: "Cells", q: "What is the function of epithelial cells?", a: "They act as a protective layer." },

    // CHAPTER 2: CLASSIFICATION
    { fullSection: "SECTION: Classification - Definitions", topic: "Classification", q: "What is a species?", a: "A group of organisms that can reproduce to produce fertile offspring." },
    { fullSection: "SECTION: Classification - Definitions", topic: "Classification", q: "What is binomial nomenclature?", a: "An internationally agreed naming system using two names: genus and species." },
    { fullSection: "SECTION: Classification - Definitions", topic: "Classification", q: "Why is binomial nomenclature used?", a: "To avoid confusion caused by common names and ensure universal identification." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "State the main features of viruses.", a: "Protein coat and genetic material." },
    { fullSection: "SECTION: Classification - Error List", topic: "Classification", q: "How can organisms be grouped?", a: "By DNA, morphology and taxonomy." },
    { fullSection: "SECTION: Classification - Error List", topic: "Classification", q: "What is nutrition?", a: "Taking in materials for energy, growth and development." },
    { fullSection: "SECTION: Classification - Error List", topic: "Classification", q: "What is excretion?", a: "Removal of toxic materials and substances in excess of requirements." },
    { fullSection: "SECTION: Classification - Error List", topic: "Classification", q: "What is reproduction?", a: "Processes that make more of the same kind of organism." },
    { fullSection: "SECTION: Classification - Error List", topic: "Classification", q: "What is growth?", a: "A permanent increase in size." },
    { fullSection: "SECTION: Classification - Error List", topic: "Classification", q: "What is movement?", a: "An action by an organism causing a change of position or place." },
    { fullSection: "SECTION: Classification - Error List", topic: "Classification", q: "What is respiration?", a: "Chemical reactions in cells that break down nutrients and release energy." },
    { fullSection: "SECTION: Classification - Error List", topic: "Classification", q: "What is sensitivity?", a: "The ability to detect and respond to changes in the environment." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of animals?", a: "Animals ingest organic materials from other living organisms for energy, growth and development. They are capable of locomotion. Most reproduce sexually using gametes, where the male gamete is sperm and the female gamete is the egg or ovum, although some reproduce asexually. Most animals have diploid nuclei with matching chromosomes except the sex chromosomes (X and Y). Animal cells do not have a rigid cell wall." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of plants?", a: "Plants manufacture their own food by photosynthesis using carbon dioxide, water and light energy trapped by chlorophyll. Their cells have rigid cellulose cell walls and turgidity provides rigidity. Plants have complex reproductive cycles involving pollination and seed or fruit dispersal. They have identifiable organs such as roots, stems, leaves and flowers. Asexual reproduction is common. Most plants are diploid and do not have non-matching XY sex chromosomes." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are prokaryotes?", a: "Prokaryotes are unicellular organisms with a size range of 0.5–5 micrometres. They have no true nucleus as their DNA lies loose in the cytoplasm. Some contain plasmids. They may be pathogenic parasites or saprotrophs and some are involved in nitrogen fixation and denitrification. They are killed by antibiotics." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of fungi?", a: "Fungi are usually large organisms visible to the naked eye such as yeasts, moulds and mushrooms. They have no chlorophyll and are parasites or saprophytes. Their cell walls are made of chitin. They are made of tubular threads called hyphae that form a mycelium." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are protoctists?", a: "Protoctists are mostly microscopic, truly living organisms. Most are unicellular but some are multicellular eukaryotes. They may be free-living or parasitic. They carry out aerobic respiration using mitochondria. Their cell structures are membrane-bound and they have a true nucleus. They reproduce both sexually and asexually. They include animal-like protozoa, plant-like algae and fungus-like forms." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of viruses?", a: "Viruses are not truly living organisms. They are less than 300 nanometres in size, much smaller than bacteria. They contain nucleic acid (DNA or RNA) surrounded by a protein coat called a capsid. They can reproduce only inside living host cells. They are parasitic and cause disease. Viruses are not affected by antibiotics." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of mammals?", a: "Mammals have fur or hair, give birth to live young, have a placenta, produce milk, have visible external ears and are endothermic." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of birds?", a: "Birds have feathers, two legs and two wings, lay eggs with hard shells on land, have a beak and are endothermic." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of reptiles?", a: "Reptiles have dry, fixed scales on their skin and lay eggs with rubbery shells on land." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of amphibians?", a: "Amphibians have smooth, moist skin. They lay eggs without shells in water. Adults live on land without gills, while larvae live in water and have gills." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of fish?", a: "Fish have loose, wet scales, lay eggs without shells in water and breathe using gills." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of myriapods?", a: "Myriapods have bodies made of many segments, each segment has at least one pair of jointed legs and they have one pair of antennae." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of insects?", a: "Insects have a three-part body consisting of head, thorax and abdomen, three pairs of jointed legs, usually two pairs of wings, one pair of antennae and compound eyes." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of arachnids?", a: "Arachnids have two body parts called the cephalothorax and abdomen, four pairs of jointed legs and no antennae." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of crustaceans?", a: "Crustaceans have more than four pairs of jointed legs, a chalky exoskeleton made of calcium, breathe through gills and have two pairs of antennae." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of ferns?", a: "Ferns are green photosynthesising plants with xylem and phloem forming veins. They have rhizomes, do not produce flowers and reproduce using spores. Spores are produced in sporangia found on the lower surfaces of fronds and are dispersed by wind." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of flowering plants?", a: "Flowering plants reproduce sexually using flowers and seeds. Seeds are produced inside the ovary. They are divided into monocotyledons and dicotyledons." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of monocotyledons?", a: "Monocotyledons have one cotyledon per seed, narrow strap-like leaves with parallel veins, fibrous root systems and flower parts usually in threes." },
    { fullSection: "SECTION: Classification - Saiful Booklet", topic: "Classification", q: "What are the main characteristics of dicotyledons?", a: "Dicotyledons have two cotyledons per seed, broad leaves with branched veins, a tap root system and flower parts usually in fours or fives." },

    // MOVEMENT INTO AND OUT OF CELLS
    // CHAPTER 3: MOVEMENT INTO AND OUT OF CELLS
    { fullSection: "SECTION: Movement Into and Out of Cells - Definitions", topic: "Movement Into and Out of Cells", q: "What is diffusion?", a: "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, as a result of random movement of particles. It does not require energy and may occur with or without a partially permeable membrane." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Definitions", topic: "Movement Into and Out of Cells", q: "What causes diffusion?", a: "Diffusion occurs due to the random movement of particles." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Definitions", topic: "Movement Into and Out of Cells", q: "How long will diffusion continue?", a: "Diffusion continues until particles are evenly distributed and the concentration gradient is eliminated." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Definitions", topic: "Movement Into and Out of Cells", q: "What is osmosis?", a: "Osmosis is the net movement of water molecules across a partially permeable membrane from a region of higher water potential to a region of lower water potential." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Definitions", topic: "Movement Into and Out of Cells", q: "Does osmosis require energy?", a: "Osmosis does not require energy." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Definitions", topic: "Movement Into and Out of Cells", q: "How long will osmosis continue?", a: "Osmosis continues until water potential is equal on both sides of the partially permeable membrane." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Definitions", topic: "Movement Into and Out of Cells", q: "What is meant by water potential?", a: "Water potential is a measure of the tendency of water molecules to move. High water potential means more water and fewer solutes, while low water potential means less water and more solutes." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Definitions", topic: "Movement Into and Out of Cells", q: "What is active transport?", a: "Active transport is the movement of substances from a region of lower concentration to a region of higher concentration, against a concentration gradient, using energy from respiration." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Importance & Functions", topic: "Movement Into and Out of Cells", q: "What is the importance of diffusion?", a: "Diffusion allows carbon dioxide to enter leaves for photosynthesis, oxygen produced in photosynthesis to move from air spaces to the atmosphere through stomata, oxygen to move from alveoli into the blood and carbon dioxide to move from the blood into the alveoli, and water to move from the soil into root hair cells." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Importance & Functions", topic: "Movement Into and Out of Cells", q: "What is the importance of water in plants?", a: "Water is required for photosynthesis, to maintain turgidity of cells, and to replace water lost by transpiration." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Importance & Functions", topic: "Movement Into and Out of Cells", q: "Why is active transport important in cells?", a: "Active transport allows cells to take in substances such as mineral ions even when their concentration inside the cell is higher than outside." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Importance & Functions", topic: "Movement Into and Out of Cells", q: "Why do animals need to gain proteins by eating other animals but plants don't?", a: "Plants do not absorb amino acids as they produce their own amino acids using nitrates and glucose without needing to rely on eating meat from other organisms. Humans cannot produce own amino acids and rely on eating other organisms or plants to obtain amino acids for protein synthesis" },
    { fullSection: "SECTION: Movement Into and Out of Cells - Adaptations", topic: "Movement Into and Out of Cells", q: "What are the adaptations of a root hair cell for absorption?", a: "Root hair cells have a long extension to increase surface area, thin cell walls to reduce diffusion distance, a large vacuole to maintain a water potential gradient, and many mitochondria to supply energy for active transport." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Turgidity & Plasmolysis", topic: "Movement Into and Out of Cells", q: "What is meant by turgidity?", a: "Turgidity is the state of a plant cell when it is swollen with water and firm due to water entering by osmosis." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Turgidity & Plasmolysis", topic: "Movement Into and Out of Cells", q: "What is plasmolysis?", a: "Plasmolysis is the shrinking of the cytoplasm away from the cell wall when water leaves a plant cell by osmosis." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Turgidity & Plasmolysis", topic: "Movement Into and Out of Cells", q: "Why is turgidity needed in plants?", a: "Turgidity keeps cells upright, keeps leaves flat towards sunlight to maximise light absorption for photosynthesis, and keeps stomata open so more carbon dioxide can enter the leaf." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Plant Cells in Solutions", topic: "Movement Into and Out of Cells", q: "What happens to a plant cell placed in a solution with high water potential and what is its appearance?", a: "Water enters the cell by osmosis, the vacuole increases in size, the cell becomes turgid and the cell membrane is pushed against the cell wall." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Plant Cells in Solutions", topic: "Movement Into and Out of Cells", q: "What happens to a plant cell placed in a solution with equal water potential and what is its appearance?", a: "There is no net movement of water as both sides have equal water potential. The cell is flaccid and its appearance remains unchanged." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Plant Cells in Solutions", topic: "Movement Into and Out of Cells", q: "What happens to a plant cell placed in a solution with low water potential and what is its appearance?", a: "Water moves out of the cell by osmosis, the vacuole decreases in size, the cytoplasm shrinks and the cell membrane moves away from the cell wall." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Plant Cells in Solutions", topic: "Movement Into and Out of Cells", q: "What is present in the gaps between the cell membrane and the cell wall in a plasmolysed or flaccid plant cell?", a: "The outside solution is present in the gaps and also within the cell wall." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Plant Cells in Solutions", topic: "Movement Into and Out of Cells", q: "Why does the solution not enter the plant cell?", a: "The cell wall is completely permeable and allows the solution to pass through, but the cell membrane is partially permeable and prevents the solute from entering the cell." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Animal Cells in Solutions", topic: "Movement Into and Out of Cells", q: "What happens to an animal cell placed in a solution with high water potential and what is its appearance?", a: "Water enters the cell by osmosis, the cell swells and eventually bursts because animal cells do not have a cell wall." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Animal Cells in Solutions", topic: "Movement Into and Out of Cells", q: "What happens to an animal cell placed in a solution with equal water potential and what is its appearance?", a: "There is no net movement of water because water potential is equal on both sides, although water molecules continue to move in both directions." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Animal Cells in Solutions", topic: "Movement Into and Out of Cells", q: "What happens to an animal cell placed in a solution with low water potential and what is its appearance?", a: "Water leaves the cell by osmosis and the cell shrinks." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Factors Affecting Diffusion", topic: "Movement Into and Out of Cells", q: "Why is diffusion faster over short distances?", a: "Diffusion is faster over short distances because particles take less time to move between regions of different concentration." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Factors Affecting Diffusion", topic: "Movement Into and Out of Cells", q: "How does surface area affect diffusion?", a: "An increased surface area allows more particles to diffuse at the same time, increasing the rate of diffusion." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Factors Affecting Diffusion", topic: "Movement Into and Out of Cells", q: "How does concentration gradient affect diffusion?", a: "A steeper concentration gradient increases the rate of diffusion because the difference in concentration is greater." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Factors Affecting Diffusion", topic: "Movement Into and Out of Cells", q: "How does temperature affect diffusion?", a: "An increase in temperature increases the kinetic energy of particles, causing them to move faster and increasing the rate of diffusion." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Transport in Multicellular Organisms", topic: "Movement Into and Out of Cells", q: "Why do multicellular organisms need transport systems?", a: "Multicellular organisms have a small surface area to volume ratio, so diffusion alone is too slow to meet the demands of all cells." },
    { fullSection: "SECTION: Movement Into and Out of Cells - Transport in Multicellular Organisms", topic: "Movement Into and Out of Cells", q: "Why is active transport not possible to investigate using dead material?", a: "Active transport can only occur in living partially permeable membranes because it requires energy from respiration." },


    // BIOLOGICAL MOLECULES
    // Biological Molecules - Carbohydrates
    { fullSection: "SECTION: Biological Molecules - Carbohydrates", topic: "Biological Molecules", q: "What are the sources of carbohydrates?", a: "Rice, Potatoes, Beans, Peas, Bread, etc." },
    { fullSection: "SECTION: Biological Molecules - Carbohydrates", topic: "Biological Molecules", q: "What are the constituent elements of carbohydrates?", a: "Carbon, Hydrogen, and Oxygen in the ratio 1:2:1." },
    { fullSection: "SECTION: Biological Molecules - Carbohydrates", topic: "Biological Molecules", q: "How much energy does 1 gram of carbohydrate yield?", a: "Approximately 4 cal / 17 J of energy." },
    { fullSection: "SECTION: Biological Molecules - Carbohydrates", topic: "Biological Molecules", q: "What are monosaccharides?", a: "Simplest of all sugars; building blocks of all carbohydrates. Examples: Glucose, Galactose, Fructose." },
    { fullSection: "SECTION: Biological Molecules - Carbohydrates", topic: "Biological Molecules", q: "What are disaccharides?", a: "Two sugar units joined together by a glycosidic bond. Examples: Lactose (Glucose & Galactose), Sucrose (Glucose & Fructose), Maltose (Glucose + Glucose)." },
    { fullSection: "SECTION: Biological Molecules - Carbohydrates", topic: "Biological Molecules", q: "What are polysaccharides?", a: "Many monosaccharide molecules joined by glycosidic bonds, formed by polymerization. Examples: Starch, Cellulose, Glycogen." },
    { fullSection: "SECTION: Biological Molecules - Carbohydrates", topic: "Biological Molecules", q: "Why are carbohydrates important?", a: "Molecules contain energy released during respiration. Lactose is the main sugar in milk. Cellulose is needed for cell walls in plants and rayon. Starch is stored food in plants; Glycogen is main storage form in animals." },
    { fullSection: "SECTION: Biological Molecules - Carbohydrates", topic: "Biological Molecules", q: "How do you test for glucose (reducing sugars)?", a: "Benedict's solution turns brick-red or orange when heated in a water-bath for a few minutes in the presence of glucose." },

    // Biological Molecules - Proteins
    { fullSection: "SECTION: Biological Molecules - Proteins", topic: "Biological Molecules", q: "What are the sources of proteins?", a: "Meat, Fish, Liver, Egg white, Peanuts, etc." },
    { fullSection: "SECTION: Biological Molecules - Proteins", topic: "Biological Molecules", q: "What are the constituent elements of proteins?", a: "Carbon, Hydrogen, Oxygen, Nitrogen, sometimes Sulfur and Phosphate." },
    { fullSection: "SECTION: Biological Molecules - Proteins", topic: "Biological Molecules", q: "How much energy does 1 gram of protein yield?", a: "Approximately 4 cal / 17 J of energy." },
    { fullSection: "SECTION: Biological Molecules - Proteins", topic: "Biological Molecules", q: "What is the structure of proteins?", a: "Polymers of amino acids arranged in polypeptide chains. Amino acids are amphoteric with acidic (carboxylic acid) and basic (amino) groups." },
    { fullSection: "SECTION: Biological Molecules - Proteins", topic: "Biological Molecules", q: "Why are proteins important?", a: "Used for growth and repair, development of muscles, making cell membranes, bone matrix, and protoplasm." },
    { fullSection: "SECTION: Biological Molecules - Proteins", topic: "Biological Molecules", q: "What is deamination?", a: "The removal of an amino group from a molecule; excess amino acids are converted to urea by the liver." },

    // Biological Molecules - Lipids
    { fullSection: "SECTION: Biological Molecules - Lipids", topic: "Biological Molecules", q: "What are the types of lipids (fats)?", a: "Saturated fats: tightly packed, no double bonds, solid at room temperature, usually from animal sources, can contribute to cardiovascular diseases. Unsaturated fats: loosely packed, at least one double bond, liquid at room temperature, usually from plant sources, helps reduce cardiovascular diseases." },
    { fullSection: "SECTION: Biological Molecules - Lipids", topic: "Biological Molecules", q: "Why are lipids important?", a: "High energy content (more than carbohydrates), main insulating layer under skin, protects internal organs, phospholipids are needed to make cell membranes." },
    { fullSection: "SECTION: Biological Molecules - Lipids", topic: "Biological Molecules", q: "How do you test for fats (emulsion test)?", a: "Food is crushed and shaken with ethanol, then decanted into water. A layer of cloudy white suspension indicates the presence of fat." },

    // Biological Molecules - Nucleic Acids
    { fullSection: "SECTION: Biological Molecules - Nucleic Acids", topic: "Biological Molecules", q: "What are nucleic acids?", a: "Genetic material carrying hereditary information." },
    { fullSection: "SECTION: Biological Molecules - Nucleic Acids", topic: "Biological Molecules", q: "What are the types of nucleic acids?", a: "Deoxyribonucleic acid (DNA) and Ribonucleic acid (RNA)." },
    { fullSection: "SECTION: Biological Molecules - Nucleic Acids", topic: "Biological Molecules", q: "What is the monomer of nucleic acids?", a: "Nucleotide, composed of a nitrogenous base, pentose sugar, and phosphate." },
    { fullSection: "SECTION: Biological Molecules - Nucleic Acids", topic: "Biological Molecules", q: "What are the nitrogenous bases in DNA and RNA?", a: "DNA: adenine, guanine, cytosine, thymine. RNA: thymine is replaced by uracil." },
    { fullSection: "SECTION: Biological Molecules - Nucleic Acids", topic: "Biological Molecules", q: "What is the structure of DNA?", a: "Double-helix structure formed by hydrogen bonding between antiparallel polynucleotide chains; looks like a twisted ladder." },
    { fullSection: "SECTION: Biological Molecules - Water", topic: "Biological Molecules", q: "What are the roles of water in organisms?", a: "Solvent, transport medium, reagent, lubrication, constituent of cytoplasm, and helps cool body by sweat" },

    // ENZYMES
    // SECTION: Biological Molecules - Enzymes
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "How can the progress of enzyme-catalysed reactions be followed?", a: "By measuring the concentrations of reactants and products." },

    // Definitions
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What are enzymes according to the syllabus?", a: "Enzymes are proteins that function as biological catalysts and are involved in all metabolic reactions. They speed up chemical reactions without being chemically changed at the end of the reaction." },
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What is a catalyst?", a: "A catalyst is a substance that increases the rate of a chemical reaction and is not changed by the reaction." },

    // Error List
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What is the lock and key hypothesis?", a: "Enzyme is the lock and the substrate is the key." },
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "How can enzymes be used in cooking meat?", a: "Enzymes such as proteases break down proteins in meat to tenderise it." },
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What happens to enzymes when exposed to heat?", a: "Enzymes denature permanently due to heat." },

    // Role of DNA
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What is the role of DNA in enzyme production?", a: "DNA stores genetic information, codes for proteins, the sequence of bases in DNA codes for sequence of amino acids, transfers information to daughter cells in mitosis, and DNA is copied as mRNA." },

    // Catalyst
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What are catalysts and how do they work?", a: "Catalysts are chemicals that speed up chemical reactions. They are not used up or changed by the reactions and can keep catalysing the same reaction as long as substrate molecules are present. Only small amounts are needed." },

    // Enzymes
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What are enzymes and how are they made?", a: "Enzymes are proteins which speed up the rate of reactions and remain unchanged at the end. They are made in the cytoplasm under instruction from genes on the chromosomes in the nucleus by cells. They are produced in small amounts and are very specific for their substrates due to the specific shaped active site." },
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What are the features of enzymes?", a: "They are all protein molecules, have an active site where the substrate fits, are specific, required in minute amounts, and have optimum temperature and pH at which they work fastest." },

    // Lock and Key Hypothesis
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "How does the Lock and Key hypothesis explain enzyme action?", a: "Each enzyme has a specific shape with an active site (lock) where its substrate (key) fits exactly. When bound, it forms an enzyme-substrate complex. Once product is formed, it leaves the active site, allowing binding of further substrate molecules." },

    // Effect of pH
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What is optimum pH for enzymes?", a: "Every enzyme has its own optimum pH at which it works best. Most enzymes have optimum pH of 7; enzymes in acidic conditions (stomach) have lower optimum pH (~2); enzymes in alkaline conditions (duodenum) have higher optimum pH (8-9)." },
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What happens if the pH is too high or too low?", a: "Bonds holding amino acid chains are destroyed, changing the shape of the active site, so the substrate cannot fit and less enzyme-substrate complex forms. This is called denaturation." },
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What is denaturation?", a: "Denaturation is the three-dimensional structural change in an enzyme (or other soluble protein) due to mild heat or chemicals, making it coagulate and altering or destroying active sites, resulting in loss of activity." },

    // Effect of Substrate Concentration
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "How does substrate concentration affect enzyme activity?", a: "Increasing substrate concentration increases collisions between enzyme and substrate, forming enzyme-substrate complexes more quickly, increasing reaction rate. Eventually, all active sites become saturated and further increase has no effect." },

    // Effect of Enzyme Concentration
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "How does enzyme concentration affect enzyme activity?", a: "Increasing enzyme concentration increases collisions with substrate, forming enzyme-substrate complexes faster. Eventually, there may be more enzyme than substrate, so some enzymes are redundant. Further increase has no effect." },

    // Effect of Temperature
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "How does temperature affect enzyme activity?", a: "Enzymes work fastest at optimum temperature. Increasing temperature from 0°C to optimum increases kinetic energy, collisions, and enzyme-substrate complex formation. Beyond optimum, bonds break, active site distorts, enzyme denatures, and activity stops. Low temperatures do not denature enzymes but slow reaction due to fewer collisions." },
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "Is denaturation reversible?", a: "Denaturation is largely irreversible; once enzymes are denatured they cannot regain their proper shape and activity stops." },

    // Anabolic vs Catabolic
    { fullSection: "SECTION: Biological Molecules - Enzymes", topic: "Enzymes", q: "What is the difference between anabolic and catabolic reactions?", a: "Anabolic reactions build larger molecules from smaller ones and require energy. Catabolic reactions break down larger molecules into smaller ones and release energy." },

    // PLANT NUTRITION
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "What is the function of stomata?", a: "Stomata allow gas exchange (CO2 in, O2 out) and water vapour to leave the leaf by diffusion." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "How do guard cells open and close stomata?", a: "In light, guard cells take in water by osmosis, become turgid, and curve apart to open the stomata. In darkness, guard cells lose water, become flaccid, and the stomata close." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "What is photosynthesis?", a: "Photosynthesis is the process by which light energy is trapped by chlorophyll and converted into chemical energy in the form of glucose/carbohydrate using water and carbon dioxide. Oxygen is released during this process" },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Why cannot glucose be transported as glucose?", a: "Glucose is soluble and very reactive.\nIt would get used up before reaching its destination." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Why is glucose so soluble and reactive?", a: "Glucose is a monosaccharide." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Why is glucose not transported as starch?", a: "Starch is a polysaccharide.\nIt is very large and insoluble.\nIt cannot be distributed through the phloem." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Why is glucose transported as sucrose?", a: "Sucrose is a disaccharide.\nIt is small and soluble enough to move through the phloem.\nIt is less reactive so it can be transported to the sink." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "What are the raw materials for photosynthesis?", a: "Light trapped by chlorophyll.\nWater absorbed by root hair cells from soil by osmosis." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Which traps light: chlorophyll or chloroplast?", a: "Chlorophyll traps light.\nPhotosynthesis occurs in the chloroplast." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Why does a root hair cell have low water potential?", a: "It has a large central vacuole containing concentrated cell sap." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Name two components of cell sap.", a: "Sugar (sucrose).\nWaste products.\nSalts." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "What are xylem and phloem together called?", a: "They are called a vascular bundle." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Which tissue carries water in plants?", a: "Xylem carries water." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Which tissue carries sucrose in plants?", a: "Phloem carries water." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "How does transpiration pull move water through xylem?", a: "Water evaporates from leaves.\nThis creates a pressure difference.\nA suction pull draws water up the xylem." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "What is root pressure?", a: "Water enters roots from the soil.\nThis creates pressure that helps push water up the xylem." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "What is cohesion in water transport?", a: "Cohesion is attraction between water molecules.\nWater molecules pull each other up the xylem." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "How does water vapour leave the leaf?", a: "Water vapour diffuses out because its concentration is lower outside the leaf." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "How does CO2 from animal respiration become starch in plants?", a: "CO2 diffuses into the leaf through stomata down a concentration gradient.\nIt moves through air spaces and dissolves in water.\nIt enters mesophyll cells and chloroplasts.\nIn presence of sunlight trapped by chlorophyll, CO2 reacts with water to form glucose.\nGlucose is converted to starch." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "How does CO2 become part of plant protein?", a: "CO2 is used to make glucose.\nGlucose reacts with nitrate ions to form amino acids.\nAmino acids join together to form proteins." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "State two importance of photosynthesis.", a: "Converts light energy into chemical energy stored as starch.\nUses carbon dioxide, reducing greenhouse effect.\nReleases oxygen for aerobic respiration." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "State uses of glucose in plants.", a: "Converted to starch for storage.\nUsed in respiration.\nUsed to make cellulose for cell walls.\nConverted to sucrose for transport." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Why don't plants use nitrogen from air?", a: "Plants do not contain any enzyme to break down atmospheric nitrogen into its ionic form (nitrate or ammonium) for absorption." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Why does increasing light energy increase the rate of photosynthesis?", a: "More light energy is available to convert into chemical energy and to react CO2 and water to form carbohydrates." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Factors affecting the rate of photosynthesis?", a: "Temperature, carbon dioxide concentration, and light intensity." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "In a light intensity vs photosynthesis graph, what is the limiting factor when the graph is constant?", a: "Carbon dioxide concentration." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "In a light intensity vs photosynthesis graph, what is the limiting factor when the graph is increasing?", a: "Light energy." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "Why does increasing temperature increase the rate of photosynthesis?", a: "Higher temperature increases kinetic energy, reactants move faster, collisions between substrate and enzyme active sites occur more frequently, forming more enzyme-substrate complexes. This continues up to the optimum temperature; beyond this, enzymes denature." },
    { fullSection: "SECTION: Plant Nutrition - Saiful", topic: "Plant Nutrition", q: "What is the function of stomata?", a: "Stomata allow gas exchange (CO2 in, O2 out) and water vapour to leave the leaf by diffusion." },
    { fullSection: "SECTION: Plant Nutrition - Adaptation of Plants", topic: "Plant Nutrition", q: "Why do most leaves have a large surface area and are thin?", a: "Increases surface area for sunlight absorption and increases surface area for gas diffusion" },
    { fullSection: "SECTION: Plant Nutrition - Stomata and Guard Cells", topic: "Plant Nutrition", q: "What is the role of stomata and guard cells?", a: "Guard cells open and close the stomata which allow gases (CO2 and O2) to diffuse in and out" },
    { fullSection: "SECTION: Plant Nutrition - Mesophyll Cells", topic: "Plant Nutrition", q: "What do spongy and palisade mesophyll cells do?", a: "They perform photosynthesis to produce glucose" },
    { fullSection: "SECTION: Plant Nutrition - Air Spaces", topic: "Plant Nutrition", q: "Why are air spaces important in leaves?", a: "Carbon dioxide and oxygen move easily between cells. Also increases surface area for gas exchange" },
    { fullSection: "SECTION: Plant Nutrition - Vascular Bundle", topic: "Plant Nutrition", q: "What is the role of the vascular bundle?", a: "Delivers water and minerals to every part of the leaf and takes away the glucose produced by photosynthesis" },
    { fullSection: "SECTION: Plant Nutrition - Chloroplast Distribution", topic: "Plant Nutrition", q: "Where are most chloroplasts found in leaves and why?", a: "Most chloroplasts are in the palisade layer so they can get the most light and maximise rate of photosynthesis" },
    { fullSection: "SECTION: Plant Nutrition - Upper Epidermis", topic: "Plant Nutrition", q: "What is the function of the upper epidermis?", a: "Has a waxy cuticle to reduce water loss by evaporation" },
    { fullSection: "SECTION: Plant Nutrition - Lower Epidermis", topic: "Plant Nutrition", q: "Why are stomata found on the lower epidermis?", a: "The lower surface of the leaf is full of stomata to allow gases to diffuse in and out" },

    // TRANSPORT IN FLOWERING PLANTS
    { fullSection: "SECTION: Transport in Flowering Plants - Xylem Function", topic: "Transport in Flowering Plants", q: "What is the function of xylem?", a: "Transports water and dissolved mineral ions from root to leaves, and provides mechanical support" },
    { fullSection: "SECTION: Transport in Flowering Plants - Xylem Pathway", topic: "Transport in Flowering Plants", q: "What is the pathway of water through the plant?", a: "Root hair cells → Root cortex cells → Xylem → Mesophyll cells" },
    { fullSection: "SECTION: Transport in Flowering Plants - Translocation", topic: "Transport in Flowering Plants", q: "What is translocation?", a: "The movement of sucrose and amino acids in the phloem from parts that produce/release them (sources) to parts that use/store them (sinks)" },
    { fullSection: "SECTION: Transport in Flowering Plants - Transpiration", topic: "Transport in Flowering Plants", q: "What is transpiration?", a: "The loss of water vapour from leaves or aerial parts of plants" },
    { fullSection: "SECTION: Transport in Flowering Plants - Plant Shape", topic: "Transport in Flowering Plants", q: "How do plants maintain their shape?", a: "Plant cells have a cell wall which generates turgor pressure, and xylem provides mechanical support" },
    { fullSection: "SECTION: Transport in Flowering Plants - Wilting", topic: "Transport in Flowering Plants", q: "What happens to leaves during wilting?", a: "The leaves fold up to reduce surface area for transpiration" },

    // HUMAN NUTRITION
    { fullSection: "SECTION: Human Nutrition - Peristalsis", topic: "Human Nutrition", q: "What happens to the circular muscle in front of food during peristalsis?", a: "Circular muscle relaxes, causing the lumen to widen" },
    { fullSection: "SECTION: Human Nutrition - Peristalsis", topic: "Human Nutrition", q: "What happens to the circular muscle behind food during peristalsis?", a: "Circular muscle contracts, lumen constricts, food is forced to move forward" },
    { fullSection: "SECTION: Human Nutrition - Peristalsis", topic: "Human Nutrition", q: "What happens to the longitudinal muscle during peristalsis?", a: "In front: contracts, Behind: relaxes. This coordinated action moves food forward" },

    // HUMAN GAS EXCHANGE
    { fullSection: "SECTION: Human Gas Exchange - Alveoli Adaptation", topic: "Human Gas Exchange", q: "What adaptations do alveoli have for gas exchange?", a: "Large surface area, thin surface, good blood supply, and air supply" },
    { fullSection: "SECTION: Human Gas Exchange - Advantage of Reflex", topic: "Human Gas Exchange", q: "What is an advantage of reflex actions during breathing?", a: "They can occur while asleep, maintaining continuous respiration" },

    // RESPIRATION
    { fullSection: "SECTION: Respiration - Aerobic", topic: "Respiration", q: "What is aerobic respiration?", a: "The release of a relatively large amount of energy by breakdown of glucose in the presence of oxygen" },
    { fullSection: "SECTION: Respiration - Anaerobic", topic: "Respiration", q: "What is anaerobic respiration?", a: "The release of a relatively small amount of energy by breakdown of glucose without using oxygen" },
    { fullSection: "SECTION: Respiration - Oxygen Debt", topic: "Respiration", q: "How is oxygen debt removed?", a: "Continuation of fast heart rate to transport lactic acid to the liver, and deeper/faster breathing to supply oxygen for lactic acid breakdown" },
    { fullSection: "SECTION: Respiration - Uses of Energy", topic: "Respiration", q: "What are the uses of energy from respiration?", a: "Muscle contraction, protein synthesis, cell division, active transport, growth, electrical impulses, and maintaining body temperature" },
    { fullSection: "SECTION: Respiration - Yeast Products", topic: "Respiration", q: "What does yeast produce during anaerobic respiration?", a: "CO₂ (used in bread making) and ethanol (used in alcohol and biofuels)" },

    // TRANSPORT IN HUMANS
    { fullSection: "SECTION: Transport in Humans - Artery", topic: "Transport in Humans", q: "What are the properties of arteries?", a: "Thick wall with more elastic tissue and smooth muscle, narrow lumen, no valves (except aorta), high pressure carries blood away from heart" },
    { fullSection: "SECTION: Transport in Humans - Vein", topic: "Transport in Humans", q: "What are the properties of veins?", a: "Thin wall with less elastic tissue and smooth muscle, wide lumen, have valves (except pulmonary vein), low pressure carries blood to heart" },
    { fullSection: "SECTION: Transport in Humans - Capillary", topic: "Transport in Humans", q: "What are the properties of capillaries?", a: "One cell thick wall, no elastic tissue or smooth muscle, narrow lumen, no valves, allows gas and nutrient exchange" },
    { fullSection: "SECTION: Transport in Humans - Pressure and Lumen", topic: "Transport in Humans", q: "How does lumen relate to pressure in blood vessels?", a: "Narrow lumen increases pressure, wide lumen decreases pressure" },

    // DISEASE AND IMMUNITY
    { fullSection: "SECTION: Disease and Immunity - Active Immunity", topic: "Disease and Immunity", q: "What is active immunity?", a: "Antibodies are produced by the body in response to an antigen. Includes memory cell production for long-term immunity" },
    { fullSection: "SECTION: Disease and Immunity - Active Natural", topic: "Disease and Immunity", q: "What is natural active immunity?", a: "Naturally infected by a pathogen. Body produces antibodies and memory cells. Example: Natural infection by a pathogen" },
    { fullSection: "SECTION: Disease and Immunity - Active Artificial", topic: "Disease and Immunity", q: "What is artificial active immunity?", a: "Non-self substances injected artificially (vaccination). Body produces antibodies and memory cells. Example: Vaccination" },
    { fullSection: "SECTION: Disease and Immunity - Passive Immunity", topic: "Disease and Immunity", q: "What is passive immunity?", a: "Antibodies are given/obtained from outside the body. No immune response. No memory cell production. Short-term immunity" },
    { fullSection: "SECTION: Disease and Immunity - Passive Natural", topic: "Disease and Immunity", q: "What is natural passive immunity?", a: "Antibodies obtained naturally from mother via placenta or breast milk. No immune response or memory cells" },
    { fullSection: "SECTION: Disease and Immunity - Passive Artificial", topic: "Disease and Immunity", q: "What is artificial passive immunity?", a: "Antibodies given artificially. Example: Injecting blood serum. No immune response or memory cell production" },

    // EXCRETION
    { fullSection: "SECTION: Excretion - Kidney Transplant - Advantages", topic: "Excretion", q: "What are the advantages of kidney transplant?", a: "No need to do dialysis regularly, permanent solution, lead a normal life, metabolic wastes are removed" },
    { fullSection: "SECTION: Excretion - Kidney Transplant - Disadvantages", topic: "Excretion", q: "What are the disadvantages of kidney transplant?", a: "Expert needed, high risk, tissue rejection may occur, costly process" },
    { fullSection: "SECTION: Excretion - Dialysis - Advantages", topic: "Excretion", q: "What are the advantages of dialysis?", a: "Less costly than transplant, allows normal life, metabolic wastes are removed" },
    { fullSection: "SECTION: Excretion - Dialysis - Disadvantages", topic: "Excretion", q: "What are the disadvantages of dialysis?", a: "High risk of infection, can affect concentration of blood, must do dialysis on regular basis, affects daily life, costly" },

    // COORDINATION AND CONTROL - DEFINITIONS
    { fullSection: "SECTION: Coordination and Control - CNS", topic: "Coordination and Control", q: "What is the Central Nervous System (CNS)?", a: "The CNS consists of the brain and the spinal cord" },
    { fullSection: "SECTION: Coordination and Control - PNS", topic: "Coordination and Control", q: "What is the Peripheral Nervous System (PNS)?", a: "The PNS consists of the nerves outside the brain and spinal cord" },
    { fullSection: "SECTION: Coordination and Control - Reflex Action", topic: "Coordination and Control", q: "What is a reflex action?", a: "A rapid involuntary response to a stimulus for the purpose of protection" },
    { fullSection: "SECTION: Coordination and Control - Hormone", topic: "Coordination and Control", q: "What is a hormone?", a: "A chemical substance secreted by an endocrine gland directly into the bloodstream to alter the activity of one or more target organs. It is ultimately destroyed in the liver" },
    { fullSection: "SECTION: Coordination and Control - Sense Organs", topic: "Coordination and Control", q: "What are sense organs?", a: "Groups of receptor cells responding to specific stimuli: light, sound, touch, temperature and chemicals" },
    { fullSection: "SECTION: Coordination and Control - Homeostasis", topic: "Coordination and Control", q: "What is homeostasis?", a: "The maintenance of a constant internal environment" },

    // NITROGEN CYCLE
    { fullSection: "SECTION: Relationships - Nitrogen Cycle", topic: "Relationships and Environment", q: "What is nitrogen fixation?", a: "Process that brings atmospheric nitrogen (N₂) into usable forms like ammonia (NH₃) or ammonium (NH₄⁺)" },
    { fullSection: "SECTION: Relationships - Nitrogen Cycle - Nitrification", topic: "Relationships and Environment", q: "What is nitrification?", a: "Converts ammonia to nitrates (NO₃⁻) for plants to use. Requires oxygen (aerobic process)" },
    { fullSection: "SECTION: Relationships - Nitrogen Cycle - Denitrification", topic: "Relationships and Environment", q: "What is denitrification?", a: "Converts nitrates back to nitrogen gas (N₂). Happens in low-oxygen/anaerobic conditions" },

    // BIOLOGICAL MOLECULES
    { fullSection: "SECTION: Biological Molecules - Polymers", topic: "Biological Molecules", q: "What polymers can be made from glucose?", a: "Starch, cellulose, and glycogen" },
    { fullSection: "SECTION: Biological Molecules - Proteins", topic: "Biological Molecules", q: "What are proteins made from?", a: "Amino acids" },
    { fullSection: "SECTION: Biological Molecules - Lipids", topic: "Biological Molecules", q: "What are lipids made from?", a: "Fatty acids and glycerol" },
    { fullSection: "SECTION: Biological Molecules - DNA", topic: "Biological Molecules", q: "What is DNA made from?", a: "Nucleotides" },
    { fullSection: "SECTION: Biological Molecules - DNA Function", topic: "Biological Molecules", q: "What is the role of DNA?", a: "Stores genetic information, codes for proteins, and transfers information to daughter cells during mitosis" },
    { fullSection: "SECTION: Biological Molecules - Water", topic: "Biological Molecules", q: "What are the roles of water in organisms?", a: "Solvent, transport medium, reagent, lubrication, constituent of cytoplasm, and helps cool body by sweat" },

    // ENZYMES
    { fullSection: "SECTION: Enzymes - Definition", topic: "Enzymes", q: "What are enzymes?", a: "Proteins that function as biological catalysts and are involved in all metabolic reactions" },
    { fullSection: "SECTION: Enzymes - Catalyst", topic: "Enzymes", q: "What is a catalyst?", a: "A substance that increases the rate of a chemical reaction and is not changed by the reaction" },
    { fullSection: "SECTION: Enzymes - Lock and Key", topic: "Enzymes", q: "What is the lock and key model of enzyme action?", a: "The enzyme is the lock and the substrate is the key - they fit together specifically" },
    { fullSection: "SECTION: Enzymes - Uses", topic: "Enzymes", q: "How can enzymes be used in cooking?", a: "Proteases are used to tenderise meat by breaking down proteins" },
    { fullSection: "SECTION: Enzymes - Denaturation", topic: "Enzymes", q: "What happens when an enzyme is heated?", a: "The enzyme denatures permanently due to heat, and loses its ability to catalyse reactions" },

    // TRANSPORT IN FLOWERING PLANTS
    { fullSection: "SECTION: Transport in Flowering Plants - Xylem Function", topic: "Transport in Flowering Plants", q: "What is the function of xylem?", a: "Transports water and dissolved mineral ions from root to leaves, and provides mechanical support" },
    { fullSection: "SECTION: Transport in Flowering Plants - Xylem Pathway", topic: "Transport in Flowering Plants", q: "What is the pathway of water through the plant?", a: "Root hair cells → Root cortex cells → Xylem → Mesophyll cells" },
    { fullSection: "SECTION: Transport in Flowering Plants - Translocation", topic: "Transport in Flowering Plants", q: "What is translocation?", a: "The movement of sucrose and amino acids in the phloem from parts that produce/release them (sources) to parts that use/store them (sinks)" },
    { fullSection: "SECTION: Transport in Flowering Plants - Transpiration", topic: "Transport in Flowering Plants", q: "What is transpiration?", a: "The loss of water vapour from leaves or aerial parts of plants" },
    { fullSection: "SECTION: Transport in Flowering Plants - Plant Shape", topic: "Transport in Flowering Plants", q: "How do plants maintain their shape?", a: "Plant cells have a cell wall which generates turgor pressure, and xylem provides mechanical support" },
    { fullSection: "SECTION: Transport in Flowering Plants - Wilting", topic: "Transport in Flowering Plants", q: "What happens to leaves during wilting?", a: "The leaves fold up to reduce surface area for transpiration" },

    // HUMAN GAS EXCHANGE
    { fullSection: "SECTION: Human Gas Exchange - Alveoli Adaptation", topic: "Human Gas Exchange", q: "What adaptations do alveoli have for gas exchange?", a: "Large surface area, thin surface, good blood supply, and air supply" },
    { fullSection: "SECTION: Human Gas Exchange - Advantage of Reflex", topic: "Human Gas Exchange", q: "What is an advantage of reflex actions during breathing?", a: "They can occur while asleep, maintaining continuous respiration" },

    // RESPIRATION
    { fullSection: "SECTION: Respiration - Aerobic", topic: "Respiration", q: "What is aerobic respiration?", a: "The release of a relatively large amount of energy by breakdown of glucose in the presence of oxygen" },
    { fullSection: "SECTION: Respiration - Anaerobic", topic: "Respiration", q: "What is anaerobic respiration?", a: "The release of a relatively small amount of energy by breakdown of glucose without using oxygen" },
    { fullSection: "SECTION: Respiration - Oxygen Debt", topic: "Respiration", q: "How is oxygen debt removed?", a: "Continuation of fast heart rate to transport lactic acid to the liver, and deeper/faster breathing to supply oxygen for lactic acid breakdown" },
    { fullSection: "SECTION: Respiration - Uses of Energy", topic: "Respiration", q: "What are the uses of energy from respiration?", a: "Muscle contraction, protein synthesis, cell division, active transport, growth, electrical impulses, and maintaining body temperature" },
    { fullSection: "SECTION: Respiration - Yeast Products", topic: "Respiration", q: "What does yeast produce during anaerobic respiration?", a: "CO₂ (used in bread making) and ethanol (used in alcohol and biofuels)" },

    // COORDINATION AND RESPONSE IN PLANTS
    { fullSection: "SECTION: Coordination in Plants - Tropism Purpose", topic: "Coordination and Response in Plants", q: "Why is tropism needed in plants?", a: "Shoot grows upward for more light absorption, root grows downward for better anchoring and mineral/water uptake" },
    { fullSection: "SECTION: Coordination in Plants - Auxin", topic: "Coordination and Response in Plants", q: "What is auxin and where is it made?", a: "A hormone made in the shoot tip that spreads through the plant and accumulates in shaded/lower parts" },
    { fullSection: "SECTION: Coordination in Plants - Auxin Function", topic: "Coordination and Response in Plants", q: "What does auxin do?", a: "It stimulates cell elongation causing shoots to bend towards light and upwards" },
    { fullSection: "SECTION: Coordination in Plants - Cancelling Effects", topic: "Coordination and Response in Plants", q: "How can the effect of gravity be cancelled on plant growth?", a: "Rotating the plant causes equal distribution of auxin, so roots grow straight" },

    // DEVELOPMENT OF ORGANISMS AND CONTINUITY OF LIFE
    { fullSection: "SECTION: Development - Cell Division Roles", topic: "Development of Organisms and Continuity of Life", q: "What are the roles of mitosis?", a: "Growth, repair of damaged tissues, replacement of dying cells, and asexual reproduction" },
    { fullSection: "SECTION: Development - Stem Cells", topic: "Development of Organisms and Continuity of Life", q: "What are stem cells?", a: "Unspecialised cells that divide by mitosis to produce daughter cells that can become specialised" },
    { fullSection: "SECTION: Development - Mitosis", topic: "Development of Organisms and Continuity of Life", q: "What is mitosis?", a: "Nuclear division giving rise to genetically identical cells with maintained chromosome number" },
    { fullSection: "SECTION: Development - Meiosis", topic: "Development of Organisms and Continuity of Life", q: "What is meiosis?", a: "A reduction division that halves chromosome number from diploid to haploid, producing genetically different cells" },
    { fullSection: "SECTION: Development - Asexual Reproduction", topic: "Development of Organisms and Continuity of Life", q: "What is asexual reproduction?", a: "A process resulting in production of genetically identical offspring from one parent" },
    { fullSection: "SECTION: Development - Sexual Reproduction", topic: "Development of Organisms and Continuity of Life", q: "What is sexual reproduction?", a: "Process involving fusion of haploid nuclei (fertilisation) to form diploid zygote, producing genetically different offspring" },
    { fullSection: "SECTION: Development - Zygote Development", topic: "Development of Organisms and Continuity of Life", q: "What happens during early zygote development?", a: "A ball of cells (embryo) forms and becomes implanted in the uterus lining" },
    { fullSection: "SECTION: Development - Cancer", topic: "Development of Organisms and Continuity of Life", q: "What causes cancer?", a: "Uncontrolled cell division" },

    // INHERITANCE
    { fullSection: "SECTION: Inheritance - Variation", topic: "Inheritance", q: "What is variation?", a: "Differences between individuals of the same species" },
    { fullSection: "SECTION: Inheritance - Definition", topic: "Inheritance", q: "What is inheritance?", a: "The transmission of genetic information from generation to generation" },
    { fullSection: "SECTION: Inheritance - Genetic Variation Sources", topic: "Inheritance", q: "What are the sources of genetic variation?", a: "Mutation, meiosis, random mating, and random fertilisation" },
    { fullSection: "SECTION: Inheritance - Natural Selection", topic: "Inheritance", q: "How does natural selection work?", a: "Mutation causes variation → Competition for resources → Variation allows survival → Organism reproduces → Genes pass to next generation" },
    { fullSection: "SECTION: Inheritance - Selective Breeding", topic: "Inheritance", q: "How does selective breeding work?", a: "Select animals/plants with desirable features → Cross them → Select offspring with desirable features → Repeat over generations" },
    { fullSection: "SECTION: Inheritance - Chromosome", topic: "Inheritance", q: "What is a chromosome?", a: "A length of DNA which carries genetic information in the form of genes" },
    { fullSection: "SECTION: Inheritance - Gene", topic: "Inheritance", q: "What is a gene?", a: "A section of DNA responsible for coding for a protein and can be passed to next generation" },
    { fullSection: "SECTION: Inheritance - Alleles", topic: "Inheritance", q: "What are alleles?", a: "Different versions of a gene. New alleles are caused by mutations and changes in DNA or base sequence" },
    { fullSection: "SECTION: Inheritance - Genotype vs Phenotype", topic: "Inheritance", q: "What is the difference between genotype and phenotype?", a: "Genotype is the alleles present in chromosomes. Phenotype shows how alleles are expressed" },

    // BIOTECHNOLOGY AND GENETIC MODIFICATION
    { fullSection: "SECTION: Biotechnology - Fermenters", topic: "Biotechnology and Genetic Modification", q: "What conditions need to be controlled in fermenters?", a: "Temperature, pH, oxygen, nutrient supply, and waste products" },
    { fullSection: "SECTION: Biotechnology - GM Crops", topic: "Biotechnology and Genetic Modification", q: "What are the uses of genetic modification in crops?", a: "Herbicide resistance, insect pest resistance, and providing additional vitamins" },
    { fullSection: "SECTION: Biotechnology - Genetic Modification", topic: "Biotechnology and Genetic Modification", q: "What is genetic modification?", a: "Changing the genetic material of an organism by removing, changing or inserting individual genes" },
    { fullSection: "SECTION: Biotechnology - Enzymes in GM", topic: "Biotechnology and Genetic Modification", q: "What enzymes are used in genetic modification?", a: "Restriction enzyme (cuts DNA), DNA ligase (joins DNA), DNA polymerase (builds DNA)" },
    { fullSection: "SECTION: Biotechnology - Sticky Ends", topic: "Biotechnology and Genetic Modification", q: "What are sticky ends?", a: "Complementary single-stranded overhangs created when restriction enzymes cut DNA" },
    { fullSection: "SECTION: Biotechnology - GM Advantages", topic: "Biotechnology and Genetic Modification", q: "What are the advantages of genetic modification?", a: "Increased yield, grow in extreme environments, more predictable results, transfer genes between species, improved nutrition" },
    { fullSection: "SECTION: Biotechnology - GM Dangers", topic: "Biotechnology and Genetic Modification", q: "What are the dangers of genetic modification?", a: "Risk of genetic spread to other species, may be patented and costly, possible unknown risks to health and genes" },
    { fullSection: "SECTION: Biotechnology - Why Bacteria Used", topic: "Biotechnology and Genetic Modification", q: "Why is bacteria used in biotechnology?", a: "No ethical concerns, presence of plasmids that can carry foreign genes" },
];

// Topic list
const topicList = [...new Set(allFlashcards.map(card => card.topic))].sort();

let currentCardIndex = 0;
let filteredFlashcards = allFlashcards;

function getUniqueSections() {
    const sections = {};
    allFlashcards.forEach(card => {
        if (!sections[card.topic]) {
            sections[card.topic] = [];
        }
        sections[card.topic].push(card.fullSection);
    });
    
    // Convert to array of unique topics
    return Object.keys(sections).sort();
}

function filterCardsByTopic(topic) {
    filteredFlashcards = allFlashcards.filter(card => card.topic === topic);
    currentCardIndex = 0;
    displayCard(0);
}

function initializeFlashcards() {
    const totalCards = document.getElementById('totalCards');

    const isPhysicsPage = document.body && document.body.classList.contains('physics-page');
    const isChemistryPage = document.body && document.body.classList.contains('chemistry-page');

    // Filter cards by page: physics page shows only SECTION: Physics entries;
    // chemistry page shows non-physics entries (existing chemistry content).
    if (isPhysicsPage) {
        filteredFlashcards = allFlashcards.filter(c => c.fullSection && c.fullSection.startsWith('SECTION: Physics'));
    } else if (isChemistryPage) {
        filteredFlashcards = allFlashcards.filter(c => !(c.fullSection && c.fullSection.startsWith('SECTION: Physics')));
    } else {
        filteredFlashcards = allFlashcards;
    }

    currentCardIndex = 0;
    totalCards.textContent = filteredFlashcards.length;
    if (filteredFlashcards.length > 0) displayCard(0);

    // Populate topic list using only topics present in the current filtered set
    const topicList = document.getElementById('topicList');
    const topics = Array.from(new Set(filteredFlashcards.map(c => c.topic))).sort();
    topicList.innerHTML = '';

    topics.forEach(topic => {
        const topicCount = filteredFlashcards.filter(c => c.topic === topic).length;
        const item = document.createElement('div');
        item.className = 'topic-item';
        if (isPhysicsPage) item.classList.add('physics');
        if (isChemistryPage) item.classList.add('chemistry');
        // default active topic for physics page is the generic 'Physics' if present, otherwise first
        const defaultActive = isPhysicsPage ? 'Physics' : (isChemistryPage ? 'Practical' : topics[0]);
        if (topic === defaultActive) item.classList.add('active');
        item.textContent = `${topic} (${topicCount} cards)`;
        item.onclick = () => {
            document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            filterCardsByTopic(topic);
            closeModal();
        };
        topicList.appendChild(item);
    });
}

function displayCard(index) {
    if (index < 0 || index >= filteredFlashcards.length) return;
    
    const card = filteredFlashcards[index];
    document.getElementById('sectionText').textContent = card.fullSection;
    const questionEl = document.getElementById('questionText');
    // Render question (text or image)
    if (typeof card.q === 'string' && card.q.match(/\.(png|jpe?g|gif|svg)$/i)) {
        const src = card.q.includes('/') ? card.q : `Images/${card.q}`;
        questionEl.innerHTML = `<img src="${src}" alt="Question image" class="question-image">`;
        questionEl.classList.add('has-image');
    } else {
        questionEl.textContent = card.q;
        questionEl.classList.remove('has-image');
    }

    const answerEl = document.getElementById('answerText');
    // Render answer as image if filename provided, otherwise text
    if (typeof card.a === 'string' && card.a.match(/\.(png|jpe?g|gif|svg)$/i)) {
        const src = card.a.includes('/') ? card.a : `Images/${card.a}`;
        answerEl.innerHTML = `<img src="${src}" alt="Answer image" class="answer-image">`;
        answerEl.classList.add('has-image');
    } else {
        answerEl.textContent = card.a;
        answerEl.classList.remove('has-image');
    }
    document.getElementById('cardCount').textContent = `${index + 1} / ${filteredFlashcards.length}`;
    
    const flashcardEl = document.getElementById('flashcard');
    flashcardEl.classList.remove('flipped');
    
    const progress = ((index + 1) / filteredFlashcards.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function nextCard() {
    if (currentCardIndex < filteredFlashcards.length - 1) {
        currentCardIndex++;
        displayCard(currentCardIndex);
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayCard(currentCardIndex);
    }
}

function toggleFlip() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

function openModal() {
    document.getElementById('topicModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('topicModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    initializeFlashcards();
    
    // Modal controls
    const modal = document.getElementById('topicModal');
    const closeBtn = document.querySelector('.close');
    const sectionHeader = document.getElementById('sectionHeader');
    
    sectionHeader.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    document.getElementById('flashcard').addEventListener('click', toggleFlip);
    document.getElementById('nextBtn').addEventListener('click', nextCard);
    document.getElementById('prevBtn').addEventListener('click', prevCard);
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') nextCard();
        if (event.key === 'ArrowLeft') prevCard();
        if (event.key === ' ') {
            event.preventDefault();
            toggleFlip();
        }
    });
});


