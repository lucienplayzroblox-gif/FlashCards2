// Chemistry Flashcard Data - Organized by Full Section with Topic Headers
const allFlashcards = [
    // PRACTICAL
    { fullSection: "SECTION: Practical - Observations of Qualitative Analysis - Ppt Forms", topic: "Practical", q: "What observations should be noted when a precipitate forms?", a: "Colour of ppt, Solubility test by aqueous NaOH or aqueous NH3 (No need for any other reagent), Mention the colour of the solution (if ppt dissolves)" },
    { fullSection: "SECTION: Practical - Observations of Qualitative Analysis - Gas Forms", topic: "Practical", q: "What observations should be noted when a gas forms?", a: "Effervescence of gas (for insoluble gas), A gas is given off (for soluble gas), You should test the gas, You must identify the gas" },
    { fullSection: "SECTION: Practical - Tips and Tricks", topic: "Practical", q: "When should you hold damp red litmus paper?", a: "When sample is heated with NaOH/Aluminium foil + NaOH/Sample only" },
    { fullSection: "SECTION: Practical - Tips and Tricks", topic: "Practical", q: "When should you introduce a glowing splint?", a: "When bubbles of gas is seen with hydrogen peroxide (H2O2) for Oxygen gas" },
    { fullSection: "SECTION: Practical - Tips and Tricks", topic: "Practical", q: "How many observations should be made when filtrate is collected?", a: "There is only one observation when filtrate is collected - Observation: Colour of filtrate only" },
    { fullSection: "SECTION: Practical - Tips and Tricks", topic: "Practical", q: "How do you identify if a gas is Carbon Dioxide?", a: "If any colour of solid (except silvery colour) forms bubbles of gas with a liquid, the gas is nothing but Carbon Dioxide. Observations: Effervescence of gas, Turns limewater milky, The gas is Carbon Dioxide" },
    { fullSection: "SECTION: Practical - Tips and Tricks", topic: "Practical", q: "How do you identify if a gas is Hydrogen?", a: "If silvery coloured solid forms bubbles of gas with a liquid, the gas is nothing but Hydrogen. Observations: Effervescence of gas, 'Pop's with a lighted splint, The gas is hydrogen" },
    { fullSection: "SECTION: Practical - Tips and Tricks", topic: "Practical", q: "What colour is the precipitate with Ba(NO3)2 or BaCl2?", a: "Ppt with Ba(NO3)2 or BaCl2 is nothing but white in colour" },
    { fullSection: "SECTION: Practical - Tips and Tricks", topic: "Practical", q: "What colour solution observations should be mentioned?", a: "Mention only the colour of solution if filtrate is collected" },
    { fullSection: "SECTION: Practical - Solution Colours", topic: "Practical", q: "What metal produces a blue solution?", a: "Copper" },
    { fullSection: "SECTION: Practical - Solution Colours", topic: "Practical", q: "What metal produces a green solution?", a: "Chromium" },
    { fullSection: "SECTION: Practical - Solution Colours", topic: "Practical", q: "What metal produces a brown/yellow solution?", a: "Iron (III)" },
    { fullSection: "SECTION: Practical - General Advice", topic: "Practical", q: "Why should we stir the mixture?", a: "To make it react or dissolve faster" },
    { fullSection: "SECTION: Practical - General Advice", topic: "Practical", q: "When can we know a reaction is complete?", a: "When the effervescence stops" },
    { fullSection: "SECTION: Practical - General Advice", topic: "Practical", q: "What will happen if we don't wash the burette with its respective solution?", a: "The titration result will increase as water will dilute the solution" },
    { fullSection: "SECTION: Practical - General Advice", topic: "Practical", q: "Why shouldn't we use measuring cylinders?", a: "It is not precise enough as it cannot measure 1 dp. Use burette or pipette instead" },
    { fullSection: "SECTION: Practical - General Advice", topic: "Practical", q: "How to do a flame test?", a: "Dip the nichrome wire/rod in the solution, Place the wire in the blue or non-luminous part of the flame" },
    { fullSection: "SECTION: Practical - General Advice", topic: "Practical", q: "What equipment should be mentioned when doing a filtration experiment?", a: "Filter paper, Filter funnel, Suitable container like conical flask" },
    { fullSection: "SECTION: Practical - General Advice", topic: "Practical", q: "Why should we not use tap water?", a: "It is impure and contains dissolved minerals" },
    { fullSection: "SECTION: Practical - General Advice", topic: "Practical", q: "Why do we rinse burette with distilled water?", a: "To remove impurities" },
    { fullSection: "SECTION: Practical - General Advice", topic: "Practical", q: "What are the general tips for salt preparation?", a: "When making salt solution, add excess acid. Use bunsen burner not heater" },
    { fullSection: "SECTION: Practical - General Advice - Sulfite/Sulfate Exception", topic: "Practical", q: "What is the exception when testing with silver nitrate and nitric acid?", a: "When there is a sample to be tested and we add silver nitrate in part (a) and then nitric acid in part (b), then an exception occurs. Sulfate ions will form white ppt in both, so in (a) we will write white ppt forms and in (b) we will write ppt remains, not no change. Sulfite ions dissolve in excess dilute nitric acid so ppt dissolves in (b)." },

    // STATES OF MATTER
    { fullSection: "SECTION: States of Matter - Error List - General", topic: "States of Matter", q: "How does bromine absorb energy to become gas?", a: "Bromine absorbs energy to become gas. The gas particles collide and mix with air particles. Gas particles are in constant random motion. The gas particles move from higher concentration to lower concentration" },
    { fullSection: "SECTION: States of Matter - Error List - General", topic: "States of Matter", q: "How do tea particles behave in water?", a: "Tea particles collide and mix with water and then move from higher concentration to lower concentration." },
    { fullSection: "SECTION: States of Matter - Error List - General", topic: "States of Matter", q: "How do aqueous NH3 and HCl behave and why?", a: "Aqueous NH3 and HCl absorb energy and have enough energy to become gas and escape from aqueous NH3 and HCl. Gas is in constant random motion and collides and mixes with air particles. Gases move from high concentration to low concentration by diffusion. NH3 molecules have lower RMM so they move faster than HCl and solid forms where NH3 and HCl react." },
    { fullSection: "SECTION: States of Matter - Error List - General", topic: "States of Matter", q: "When should you mention molecules when mentioning RMM/Mr?", a: "Mention molecules when mentioning RMM/Mr in respect to diffusion" },
    { fullSection: "SECTION: States of Matter - Error List - General", topic: "States of Matter", q: "When discussing separation, what should be written?", a: "For separation we write if it increases or decreases" },
    { fullSection: "SECTION: States of Matter - Error List - General", topic: "States of Matter", q: "Why is the rate of evaporation low at low temperature?", a: "Rate of evaporation is low at low temp as particles have low kinetic energy and dont have enough energy to escape as gas" },
    { fullSection: "SECTION: States of Matter - Error List - General", topic: "States of Matter", q: "Is solubility a physical or chemical property?", a: "Solubility is a physical property" },
    { fullSection: "SECTION: States of Matter - Error List - General", topic: "States of Matter", q: "What is diffusion?", a: "Diffusion is the net movement of particles from higher concentration to lower concentration with the concentration gradient due to random motion in any direction" },
    { fullSection: "SECTION: States of Matter - Error List - General", topic: "States of Matter", q: "How should diffusion be described in chemistry?", a: "In chemistry we write 'with the concentration gradient', not 'down the concentration gradient'" },

    // ATOMS, ELEMENTS AND COMPOUNDS
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "What are isotopes?", a: "Isotopes are atoms of the same element with the same number of protons and electrons but different number of neutrons or different nucleon number" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Why is graphite slippery?", a: "Atoms are arranged in layer/It has layered structure. The layers slide over each other if force is applied as there are weak forces between layers" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "What are the similarities between diamond and silicon dioxide?", a: "Tetrahedral structure, Giant structure, Covalent bonds" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Why are noble gases unreactive?", a: "It has a full electronic structure and its outer shell has 8/2 electrons, so it does not want to take or give electrons." },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Why does X have a higher RAM?", a: "It has a greater proportion of heavier isotopes" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Why is X a neutral particle?", a: "It has same number of protons and electrons. Protons have +1 positive charge and electrons have -1 negative charge. So they cancel each other" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "What are the physical properties of ions?", a: "Dissolves in water, Conducts electricity when molten, High melting point" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Why do covalent compounds have high melting point?", a: "Giant covalent structure, Strong covalent bonds, High energy needed to break bonds" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Why do ionic compounds have high melting point?", a: "They have giant ionic lattice structure, They have strong electrostatic force of attraction between positive and negative ions, A high amount of energy is needed to overcome the forces" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Why does chlorine have low melting point?", a: "It is a simple covalent structure, It has weak forces between molecules, Small amount of energy required to separate molecules or overcome force" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Why does metal X have a much higher melting point than metal Y?", a: "Stronger force of attraction, Require more energy to overcome, Greater charge on cation, More delocalised electrons" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Describe how a francium ion and an oxide ion are formed from a francium atom and an oxygen atom?", a: "Francium atom loses one electron to form Francium ion, Oxygen atom gains two electron to form Oxide ion, So both atoms have 8 electrons in their outer shell or full outer shell" },
    { fullSection: "SECTION: Atoms, Elements and Compounds - Error List", topic: "Atoms, Elements and Compounds", q: "Why is the formula of an ion X rather than Y or Z?", a: "X has full outer shell of electron" },

    // STOICHIOMETRY
    { fullSection: "SECTION: Stoichiometry - Error List", topic: "Stoichiometry", q: "What is a common question about Alum?", a: "Check for specific Alum information (reference to be completed)" },

    // ELECTROCHEMISTRY
    { fullSection: "SECTION: Electrochemistry - Error List - Important Reaction", topic: "Electrochemistry", q: "What is the anode reaction?", a: "Anode: 4OH- – 4e- → 2H2O + O2. Alternative: 4OH- → O2 + 2H2O + 4e-" },
    { fullSection: "SECTION: Electrochemistry - Error List - Hydrogen Oxygen Fuel Cell Reactions", topic: "Electrochemistry", q: "What are the hydrogen oxygen fuel cell reactions?", a: "H2 → 2H+ + 2e-, O2 + 4H+ + 4e- → 2H2O" },
    { fullSection: "SECTION: Electrochemistry - Error List", topic: "Electrochemistry", q: "What is the direction of electron flow in electrolysis?", a: "From the anode to the cathode because electrons are released at anode" },
    { fullSection: "SECTION: Electrochemistry - Error List", topic: "Electrochemistry", q: "Why can X be electrolysed but not Y?", a: "X has ions. Y does not have ions" },
    { fullSection: "SECTION: Electrochemistry - Error List", topic: "Electrochemistry", q: "Explain in terms of transfer of electrons why hydrogen and not sodium is produced at the negative electrode?", a: "Hydrogen ions gain electrons more easily" },
    { fullSection: "SECTION: Electrochemistry - Error List - General", topic: "Electrochemistry", q: "What should be mentioned when the cathode increases in mass?", a: "Mention cathode gets plated when it increases in mass" },
    { fullSection: "SECTION: Electrochemistry - Error List - General", topic: "Electrochemistry", q: "What is the mole ratio of hydrogen and oxygen in water?", a: "Mole ratio of hydrogen and oxygen in water is 2:1 so volume of hydrogen produced is approximately double that of oxygen" },
    { fullSection: "SECTION: Electrochemistry - Error List - General", topic: "Electrochemistry", q: "What is electroplating used for?", a: "Electroplating is used to increase hardness and resistance to corrosion" },
    { fullSection: "SECTION: Electrochemistry - Error List - General", topic: "Electrochemistry", q: "What are the advantages of hydrogen as a fuel?", a: "Produces only water as a product (Non-polluting), Hydrogen can be obtained from a renewable source" },
    { fullSection: "SECTION: Electrochemistry - Error List - General", topic: "Electrochemistry", q: "What are the disadvantages of hydrogen as a fuel?", a: "It is flammable/explosive" },

    // CHEMICAL ENERGETICS
    { fullSection: "SECTION: Chemical Energetics - Error List - Common Questions", topic: "Chemical Energetics", q: "What should be done instead of mentioning overall energy change?", a: "Replace overall energy change with ΔH" },
    { fullSection: "SECTION: Chemical Reactions - Definitions - General", topic: "Chemical Energetics", q: "What is an exothermic reaction?", a: "State that an exothermic reaction transfers thermal energy to the surroundings leading to an increase in the temperature of the surroundings" },
    { fullSection: "SECTION: Chemical Reactions - Definitions - General", topic: "Chemical Energetics", q: "What is an endothermic reaction?", a: "State that an endothermic reaction takes in thermal energy from the surroundings leading to a decrease in the temperature of the surroundings" },
    { fullSection: "SECTION: Chemical Reactions - Definitions - General", topic: "Chemical Energetics", q: "What is the transfer of thermal energy during a reaction called?", a: "The transfer of thermal energy during a reaction is called the enthalpy change, ΔH, of the reaction" },

    // INDUSTRIAL CHEMISTRY
    { fullSection: "SECTION: Industrial Chemistry", topic: "Industrial Chemistry", q: "What are the uses of sulfur dioxide?", a: "Food preservative, Manufacture of wood pulp/paper (by acting as a bleach), Manufacture of sulfuric acid" },
    { fullSection: "SECTION: Industrial Chemistry", q: "What are the uses of sulfuric acid?", a: "Manufacture of fertilisers, Battery acid, Manufacture of detergents" },
    { fullSection: "SECTION: Industrial Chemistry", topic: "Industrial Chemistry", q: "Why does a reaction/catalyst become hot?", a: "Reaction is exothermic, Heat is released" },

    // ACIDS, BASES AND SALTS
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - General", topic: "Acids, Bases and Salts", q: "What should be done when using universal indicator?", a: "When using universal indicator, compare the colour with a colour chart" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List", topic: "Acids, Bases and Salts", q: "Why is H2SO4 stronger than ethanoic acid?", a: "H2SO4 has 2 H+ ions per mole but ethanoic acid only has 1 H+ per mole" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List", topic: "Acids, Bases and Salts", q: "What is an acid?", a: "A proton donor which disassociates in water to form H+ ions" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List", topic: "Acids, Bases and Salts", q: "What is a weak acid?", a: "An acid which only partially disassociates in water to form H+ ions. An equilibrium reaction is created" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - Solubility Chart", topic: "Acids, Bases and Salts", q: "What can be said about nitrates?", a: "All nitrates are soluble in water" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - Solubility Chart", topic: "Acids, Bases and Salts", q: "What can be said about ammonium compounds?", a: "All ammonium compounds are soluble in water" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - Solubility Chart", topic: "Acids, Bases and Salts", q: "What can be said about chlorides?", a: "All chlorides are soluble in water except Lead (II) Chloride and Silver Chloride" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - Solubility Chart", topic: "Acids, Bases and Salts", q: "What can be said about sulfates?", a: "All sulfates are soluble in water except Lead (II) Sulfate, Barium Sulfate and Calcium Sulfate" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - Solubility Chart", topic: "Acids, Bases and Salts", q: "What can be said about carbonates?", a: "All carbonates are insoluble in water except G1 Carbonates and Ammonium Carbonate" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - Solubility Chart - Oxides and Hydroxides", topic: "Acids, Bases and Salts", q: "What can be said about G1 oxides and hydroxides?", a: "All G1 oxides and hydroxides are soluble in water" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - Solubility Chart - Oxides and Hydroxides", topic: "Acids, Bases and Salts", q: "What can be said about G2 oxides and hydroxides?", a: "G2 oxides and hydroxides have increasing solubility down the group" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - Solubility Chart - Oxides and Hydroxides", topic: "Acids, Bases and Salts", q: "What can be said about ammonium hydroxide?", a: "Ammonium hydroxide is soluble in water" },
    { fullSection: "SECTION: Acids, Bases and Salts - Error List - Solubility Chart - Oxides and Hydroxides", topic: "Acids, Bases and Salts", q: "What can be said about other oxides and hydroxides?", a: "No other Oxide or Hydroxide is soluble in water" },

    // THE PERIODIC TABLE
    { fullSection: "SECTION: The Periodic Table - Error List - General", topic: "The Periodic Table", q: "Is Carbon Dioxide acidic or neutral?", a: "Carbon Dioxide is acidic, Carbon Monoxide is neutral" },
    { fullSection: "SECTION: The Periodic Table - Error List - General", topic: "The Periodic Table", q: "What are the colours of copper compounds?", a: "Copper is pink, Copper (II) Oxide is black, Copper (I) Oxide is red" },
    { fullSection: "SECTION: The Periodic Table - Error List - General", topic: "The Periodic Table", q: "What are monoatomic elements?", a: "Monoatomic elements are those which exist as an atom and do not from molecules" },
    { fullSection: "SECTION: The Periodic Table - Error List - General", topic: "The Periodic Table", q: "How do transition metals compare to alkali metals?", a: "Transition metals have higher melting points and densities than alkali metals" },
    { fullSection: "SECTION: The Periodic Table - Error List - General", topic: "The Periodic Table", q: "Why are catalysts used?", a: "Catalysts are used to produce products quickly and lower costs as less energy has to be supplied" },
    { fullSection: "SECTION: The Periodic Table - Error List - Properties of Transition Metals", topic: "The Periodic Table", q: "What are the properties of transition metals?", a: "High melting and boiling point, Variable oxidation state, Form coloured compounds, High density, Compound for complex ions, Catalytic activity" },
    { fullSection: "SECTION: The Periodic Table - Error List - Properties of Transition Metals", topic: "The Periodic Table", q: "Is being a good conductor of electricity a strong or weak point for transition metals?", a: "Good conductor of electricity is a weak point" },
    { fullSection: "SECTION: The Periodic Table - Error List - Difference Between Transition Metal and Other Metals", topic: "The Periodic Table", q: "What are the differences between transition metals and other metals?", a: "High melting and boiling point, High density, Harder" },
    { fullSection: "SECTION: The Periodic Table - Error List - Difference Between G1 Metals and Other Metals", topic: "The Periodic Table", q: "What are the differences between G1 metals and other metals?", a: "Less dense, Softer, Low melting and boiling point" },
    { fullSection: "SECTION: The Periodic Table - Error List - Typical Properties of Metals", topic: "The Periodic Table", q: "What are the typical properties of metals?", a: "Malleable, Good conductor of electricity, Ductile, Shiny" },
    { fullSection: "SECTION: The Periodic Table - Error List - Uses of Argon", topic: "The Periodic Table", q: "What are the uses of Argon?", a: "Steelmaking, In light bulbs, Welding" },

    // METALS
    { fullSection: "SECTION: Metals - Error List", topic: "Metals", q: "Why is aluminium unreactive?", a: "Aluminium is unreactive as it forms a non-porous oxide layer which is impermeable to water and oxygen" },
    { fullSection: "SECTION: Metals - Error List - Alloys", topic: "Metals", q: "How do alloys differ from pure metals?", a: "Alloys have different sized atoms which prevent ions from sliding over each other easily but pure metals have same sized atoms so layers of atoms can slide over each other easily when force is applied. For example, in an alloy of Iron and Manganese, the larger Manganese atoms stop the layers from sliding easily." },
    { fullSection: "SECTION: Metals - Error List - Alloys", topic: "Metals", q: "What are the differences between alloys and pure metals?", a: "Alloys are harder, Alloys are less malleable, Metals have greater electrical conductivity, Alloys are more brittle [Weaker point]" },
    { fullSection: "SECTION: Metals - Error List", topic: "Metals", q: "Why are metals malleable?", a: "Metals are malleable as metal ions form layers which can slide over each other easily if force is applied" },
    { fullSection: "SECTION: Metals - Error List", topic: "Metals", q: "What are the uses of materials in blast furnace?", a: "Haematite – Iron ore which contains the iron and is reduced to form iron, Limestone – Decomposes to form calcium oxide (and carbon dioxide) which removes impurities. (Such as silicon dioxide by reacting with it to form slag), Coke – Forms carbon dioxide with oxygen and then reduces it to carbon monoxide. Carbon monoxide reduces iron ore to form iron" },
    { fullSection: "SECTION: Metals - Error List", topic: "Metals", q: "Describe the processes that occur in a blast furnace?", a: "Carbon reacts with oxygen in air blast to form carbon dioxide, Carbon reduces carbon dioxide to form carbon monoxide, Carbon monoxide reduces haematite to form iron, Carbon can also reduce haematite in hotter parts of the furnace [Weaker point], Calcium carbonate thermally decomposes to form calcium oxide, Calcium oxide reacts with silicon dioxide in the ore, Calcium oxide also reacts with acidic impurities [Weaker point, mention only if the details of limestone role are asked for], This forms slag/calcium silicate, These impurities would have clogged up the blast furnace if not removed by limestone. [Weaker point, mention only if the details of limestone role are asked for]" },
    { fullSection: "SECTION: Metals - Error List", topic: "Metals", q: "How does zinc protect iron from rusting?", a: "Zinc is more reactive than iron so it reacts with air and moisture to corrode instead of iron. This. zinc loses electrons more readily than iron. However, with a less reactive metal (Tin), oxygen and water can still react with the water if there is a scratch [Mention only if asked]" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "Does Zinc Carbonate release much carbon dioxide initially?", a: "Zinc Carbonate does not release much carbon dioxide initially as it is not hot enough to decompose" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "When is the greatest voltage produced in an electrochemical cell?", a: "Greatest voltage is produced in an electrochemical cell when the least reactive and most reactive metals are combined together." },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "What is brass?", a: "Brass is a mixture of copper and zinc" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "What is stainless steel?", a: "Stainless steel is a mixture of iron and other elements like copper, nickel, carbon" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "When does thermal decomposition occur?", a: "Thermal decomposition of less reactive metals occur first" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "What should be mentioned when Potassium/Sodium/Lithium reacts with water?", a: "If Potassium/Sodium/Lithium is in a reaction with water and the question asks for observations, mention their reaction with water, such as float on water, move rapidly, melt, lilac flame" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "How does the percentage of carbon affect the alloy?", a: "The greater the percentage of carbon, the more brittle the alloy but the stronger/less malleable the allow" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "Which metal takes a long time to react with cold water but rapidly with steam?", a: "If the question asks which metal takes a long time to react with cold water but rapidly with steam, the metal is iron" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "What is mild steel used for?", a: "Mild steel is used in car bodies" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "Is pure iron formed in blast furnace?", a: "Pure iron is not formed in blast furnace" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "What happens when a hydrated carbonate decomposes thermally?", a: "When a hydrated carbonate decomposes thermally it produces the carbonate and water" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "How does reactivity affect thermal stability of metal carbonate?", a: "More reactive metal carbonate is more thermally stable so takes more time to decompose" },
    { fullSection: "SECTION: Metals - Error List - General Errors", topic: "Metals", q: "What is an alloy?", a: "Alloy is a mixture of metal with other elements" },

    // CHEMISTRY OF THE ENVIRONMENT
    { fullSection: "SECTION: Chemistry of the Environment - Full Notes - Fractional Distillation of Liquid Air", topic: "Chemistry of the Environment", q: "How does fractional distillation of liquid air separate nitrogen and oxygen?", a: "It separates nitrogen and oxygen from the air. At first, the air is liquified by lowering the temperature to around -200 C. Then the temperature is allowed to increase. Nitrogen boils off first at around -196 C. It is collected and therefore removed. As there is further increase in temperature, the oxygen also boils off at around -183 C. Thus, they are being separated. Oxygen - 21%, Nitrogen - 78%" },
    { fullSection: "SECTION: Chemistry of the Environment - Full Notes", topic: "Chemistry of the Environment", q: "What are the uses of Oxygen?", a: "Making Steel, Welding, In hospitals to treat patients" },
    { fullSection: "SECTION: Chemistry of the Environment - Full Notes", topic: "Chemistry of the Environment", q: "What are the uses of Nitrogen?", a: "For making ammonia in the Haber process" },
    { fullSection: "SECTION: Chemistry of the Environment - Pollutants of Air - Carbon Dioxide", topic: "Chemistry of the Environment", q: "What is the source and adverse effect of Carbon Dioxide?", a: "Source: From complete combustion of carbon containing fuel. Adverse Effect: Act as a pollutant at higher concentration as it contributes to global warming" },
    { fullSection: "SECTION: Chemistry of the Environment - Pollutants of Air - Carbon Monoxide", topic: "Chemistry of the Environment", q: "What is the source and adverse effect of Carbon Monoxide?", a: "Source: From incomplete combustion of carbon containing fuel. Adverse Effect: It is a toxic gas that lowers the oxygen carrying capacity of blood" },
    { fullSection: "SECTION: Chemistry of the Environment - Pollutants of Air - Particulates", topic: "Chemistry of the Environment", q: "What is the source and adverse effect of Particulates?", a: "Source: From incomplete combustion of carbon containing fuel. Adverse Effect: Increased risk of respiratory problems and cancer" },
    { fullSection: "SECTION: Chemistry of the Environment - Pollutants of Air - Methane", topic: "Chemistry of the Environment", q: "What is the source and adverse effect of Methane?", a: "Source: Decomposition of vegetation and waste gases from digestion of animal. Adverse Effect: Higher level of methane also contributes to global warming" },
    { fullSection: "SECTION: Chemistry of the Environment - Pollutants of Air - Nitrogen Oxides", topic: "Chemistry of the Environment", q: "What is the source and adverse effect of Nitrogen Oxides?", a: "Source: From the car engines and lightning during thunderstorms. Adverse Effect: Mixes with rainwater and causes acid rain. It destroys the stoneworks, corrodes the metals and causes harm to aquatic life. Also causes photochemical smog and respiratory problems" },
    { fullSection: "SECTION: Chemistry of the Environment - Pollutants of Air - Sulfur Dioxide", topic: "Chemistry of the Environment", q: "What is the source and adverse effect of Sulfur Dioxide?", a: "Source: Combustion of fossil fuels containing sulfur, coal and from volcanoes. Adverse Effect: Mixes with rainwater and causes acid rain. It destroys the stoneworks, corrodes the metals and causes harm to the aquatic life" },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "What are catalytic converters and how do they work?", a: "Due to the high temperature in car engines, the nitrogen and oxygen may combine to form nitrogen oxides. Also due to the incomplete combustion of fuel, some carbon monoxide may be formed. Catalytic converters are placed in the car's exhaust system that reconverts the oxides of nitrogen back to nitrogen and oxygen and combines this oxygen with the carbon monoxide to form carbon dioxide. After that the gases are being released. Reaction: 2CO + 2NO → N2 + 2CO2" },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "What are greenhouse gases?", a: "Greenhouse gases are gases which absorb infrared radiation. They absorb thermal energy and reflect thermal energy back to earth by emitting the thermal energy, preventing thermal energy loss into space. Examples include Carbon Dioxide, Methane, Steam, Sulfur Dioxide" },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "What are the effects of global warming?", a: "Greenhouse gases trap energy from sunlight that can cause global warming. The effects are: Melting of polar ice caps and rising of sea level, Sudden climate change, Extinction of species affecting the biodiversity" },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "What is the effect of excess carbon dioxide in the atmosphere?", a: "Carbon dioxide acts as a pollutant at higher concentration. As it is a greenhouse gas, it causes global warming. However, carbon dioxide is naturally balanced in the carbon cycle. It can be removed by the method of photosynthesis." },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "What are the strategies to reduce environmental issues?", a: "Plant more trees, Reduction of livestock farming, Decreasing the use of fossil fuels, Increasing use of hydrogen and renewable energy. Flue-gas desulfurisation uses Calcium Oxide to remove sulfur dioxide from power plant exhaust." },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "What are fertilisers?", a: "These are chemicals that promote growth and increase the yield of plants. Ammonium salts and nitrate salts and phosphate salts are used as fertilisers. NPK fertilisers provides Nitrogen, Phosphorus and Potassium for improved plant growth." },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "How can the purity of water be tested?", a: "Pure substance always has fixed melting and boiling point. Melting Point – 0°C (decreases if impurities present), Boiling Point – 100°C (increases if impurities present)" },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "Why is distilled water used in practical chemistry rather than tap water?", a: "Distilled water is used in practical chemistry rather than tap water because it contains fewer chemical impurities" },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "What substances are found in water from natural sources?", a: "Dissolved oxygen, Metal compounds, Plastic, Sewage, Harmful microbes, Nitrates from fertiliser, Phosphates from fertilisers and detergent" },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "What substances in water are beneficial?", a: "Dissolved oxygen for aquatic life, Some metal compounds provide essential minerals for life" },
    { fullSection: "SECTION: Chemistry of the Environment", topic: "Chemistry of the Environment", q: "What substances in water are potentially harmful?", a: "Some metal compounds are toxic, Some plastics harm aquatic life, Sewage contains harmful microbes, Nitrates and phosphates lead to deoxygenation of water" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - Important Questions", topic: "Chemistry of the Environment", q: "How does the carbon cycle help keep air composition constant?", a: "Photosynthesis decreases carbon dioxide. Respiration increases carbon dioxide. The amount released into the atmosphere equals the amount absorbed." },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - Important Questions", topic: "Chemistry of the Environment", q: "How is oxygen/nitrogen extracted from the air?", a: "The air is liquefied. Fractional distillation of liquid air. The liquid air is heated gradually. The gas with the lowest boiling point vaporises first and is collected from the top" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - Important Questions", topic: "Chemistry of the Environment", q: "What is eutrophication?", a: "Increased growth of algae causes algal bloom. This blocks out sunlight so plants cant photosynthesise. Plants die. Decomposers use up oxygen. Other aquatic organisms die due to lack of oxygen" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - Important Questions", topic: "Chemistry of the Environment", q: "What percentage of air is nitrogen and oxygen?", a: "78% of air is nitrogen and 21% of air is oxygen" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List", topic: "Chemistry of the Environment", q: "Why does adding calcium hydroxide cause loss of nitrogen from fertiliser?", a: "Ammonia is produced which is a gas and escapes" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - General Questions", topic: "Chemistry of the Environment", q: "How do CFCs deplete the ozone layer?", a: "CFCs deplete the ozone layer and it is caused by chlorine" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - General Questions", topic: "Chemistry of the Environment", q: "What is desalination?", a: "Desalination is the removal of salt from sea water" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - General Questions", topic: "Chemistry of the Environment", q: "What is calcium carbonate used for?", a: "Calcium carbonate is used in Flue-gas desulfurisation and to neutralise acidic water" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - General Questions", topic: "Chemistry of the Environment", q: "Why should ozone be conserved?", a: "Ozone absorbs UV radiation. Too much UV increases risk of Skin Cancer and Cataracts" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - General Questions", topic: "Chemistry of the Environment", q: "What is a photochemical reaction?", a: "A photochemical reaction is a reaction where light acts as a catalyst" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - General Questions", topic: "Chemistry of the Environment", q: "What is methane used for?", a: "Methane is used as fuel" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - General Questions", topic: "Chemistry of the Environment", q: "How does sulfur dioxide form acid rain?", a: "Sulfur dioxide reacts with oxygen to form sulfur trioxide which dissolves in rain to form sulfuric acid" },
    { fullSection: "SECTION: Chemistry of the Environment - Error List - Effect of Acid Rain", topic: "Chemistry of the Environment", q: "What are the effects of acid rain?", a: "Kills organisms in lakes, Damage to tree leaves, Erosion/Corrosion of buildings" },

    // ORGANIC CHEMISTRY
    { fullSection: "SECTION: Organic Chemistry - Important Notes By Cambridge - Fuel", topic: "Organic Chemistry", q: "What environmental challenges do plastics cause?", a: "Non-biodegradable, no reaction with water, accumulate in oceans, formation of toxic gases when burned (Hydrogen Chloride and Carbon Monoxide)" },
    { fullSection: "SECTION: Organic Chemistry - Error List", topic: "Organic Chemistry", q: "Why is X an alkane and Y an alkene?", a: "X fits the general formula CnH2n+2. Y fits the general formula CnH2n" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Some Identifications", topic: "Organic Chemistry", q: "How do you identify if X is a hydrocarbon?", a: "X is a hydrocarbon as it contains only hydrogen and carbon" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Some Identifications", topic: "Organic Chemistry", q: "How do you identify if X is unsaturated?", a: "X is unsaturated as it contains a carbon carbon double bond" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Some Identifications", topic: "Organic Chemistry", q: "How do you identify if X is saturated?", a: "X is saturated as it contains only carbon carbon single bonds" },
    { fullSection: "SECTION: Organic Chemistry - Error List", topic: "Organic Chemistry", q: "How much product is made from 100 tonne of reactant in an addition reaction?", a: "For addition reaction if 100 tonne of reactant is used, 100 tonne of product is made" },
    { fullSection: "SECTION: Organic Chemistry - Error List", topic: "Organic Chemistry", q: "What does non biodegradable mean?", a: "Non biodegradable means it cannot be decomposed by decomposers like fungi and bacteria" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Macromolecule Definitions", topic: "Organic Chemistry", q: "What is addition polymerisation?", a: "Addition polymerisation is where monomers react together to form only one product" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Macromolecule Definitions", topic: "Organic Chemistry", q: "What is an addition reaction?", a: "Addition reaction is one where reactants join together to form one product with no other products" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Macromolecule Definitions", topic: "Organic Chemistry", q: "What is condensation polymerisation?", a: "Condensation polymerisation is where monomers react together to form a polymer and a small molecule like water" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Macromolecule Definitions", topic: "Organic Chemistry", q: "What is condensation reaction?", a: "Condensation reaction is one where molecules combine to make a product and a small molecule" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Macromolecule Definitions", topic: "Organic Chemistry", q: "What is isomerism?", a: "Isomerism is when two compounds have the same molecular formula but different structures" },
    { fullSection: "SECTION: Organic Chemistry - Error List", topic: "Organic Chemistry", q: "Why does X decolourise bromine?", a: "It has Carbon Carbon double bond" },
    { fullSection: "SECTION: Organic Chemistry - Error List", topic: "Organic Chemistry", q: "What are the uses of nylon?", a: "Clothing, Fishing line/nets, Rope, Curtain materials, Sleeping bag, Parachutes" },
    { fullSection: "SECTION: Organic Chemistry - Error List", topic: "Organic Chemistry", q: "What are the uses of PET?", a: "Clothing, Bottles, Sheets, Ropes" },
    { fullSection: "SECTION: Organic Chemistry - Error List", topic: "Organic Chemistry", q: "What are the uses of polythene?", a: "Bottles, Bags, Packaging, Moisture barrier, Toys, Cling film" },
    { fullSection: "SECTION: Organic Chemistry - Error List", topic: "Organic Chemistry", q: "What are the uses of Esters?", a: "Flavourings, Solvents, Perfumes, Making PET, Nail polish remover" },
    { fullSection: "SECTION: Organic Chemistry - Error List - General", topic: "Organic Chemistry", q: "What do condensation reactions always produce?", a: "Condensation reactions always produce water" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 1", topic: "Reactions", q: "What is the reaction between Alkane and Halogen?", a: "Type: Substitution. Conditions: UV Light. Alkane + Halogen → Halogenoalkane + Hydrogen Halide" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 2", topic: "Reactions", q: "What is the reaction between Alkene and Halogen?", a: "Type: Addition. Alkene + Halogen → Dihalogenoalkane" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 3", topic: "Reactions", q: "What is the reaction between Alkene and Hydrogen?", a: "Type: Addition/Hydrogenation. Conditions: Nickel Catalyst, Heat. Alkene + Hydrogen → Alkane" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 4", topic: "Reactions", q: "What is the reaction between Alkene and Hydrogen Halide?", a: "Type: Addition. Conditions: Room temperature. Alkene + Hydrogen Halide → Halogenoalkane" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 5", topic: "Reactions", q: "What is the reaction of Alkanes breaking into Alkene?", a: "Type: Elimination/Cracking. Conditions: Catalyst (SiO2/Al2O3), Heat. Alkane → Alkene + H2" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 6", topic: "Reactions", q: "What is the dehydration of alcohol reaction?", a: "Type: Elimination. Conditions: Heat, Aluminium Oxide Catalyst. Alcohol → Alkene + Water" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 7", topic: "Reactions", q: "What is the fermentation reaction?", a: "Conditions: Temperature 25-40°C, Yeast, Anaerobic. Glucose → Ethanol + Carbon Dioxide" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 8", topic: "Reactions", q: "What is the hydration reaction?", a: "Conditions: 300°C, 60-70 atm, H3PO4 catalyst. Alkene + Steam → Alcohol" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 9", topic: "Reactions", q: "What is the oxidation reaction of alcohol?", a: "Type: Oxidation. Alcohol → Carboxylic Acid with acidified potassium dichromate or permanganate" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 10", topic: "Reactions", q: "What is the esterification reaction?", a: "Type: Esterification. Conditions: Concentrated H2SO4, Heat. Alcohol + Carboxylic Acid → Ester + Water" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 11", topic: "Reactions", q: "What is the reaction of ethanol with oxygen?", a: "Conditions: Bacteria, Oxygen. Ethanol + Oxygen → Vinegar + Water" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 12", topic: "Reactions", q: "What is the reaction for PET formation?", a: "Conditions: Dilute H2SO4, Heat. Dicarboxylic acid + Diol → PET" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 13", topic: "Reactions", q: "What is the decomposition of hydrogen peroxide?", a: "2H2O2 → 2H2O + O2. Conditions: Heat, MnO4 Catalyst" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 14", topic: "Reactions", q: "What is the decomposition of metal carbonate?", a: "Metal Carbonate → Metal Oxide + Carbon Dioxide. Conditions: Heat" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 15", topic: "Reactions", q: "What is the reaction of calcium hydroxide with carbon dioxide?", a: "Ca(OH)2 (aq) + CO2 → CaCO3 (s) + H2O" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 16", topic: "Reactions", q: "What is the reaction involving calcium carbonate, water and carbon dioxide?", a: "CaCO3 (s) + H2O + CO2 → Ca(HCO3)2 (aq)" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 17", topic: "Reactions", q: "What is the reaction between ammonium salt and alkali?", a: "Ammonium Salt + Alkali → Metal Salt + Ammonia + Water. Conditions: Heat" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 18", topic: "Reactions", q: "What is the reaction of ammonia and copper oxide?", a: "2NH3 + CuO → 3Cu + N2 + 3H2O. Conditions: Heat" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 19", topic: "Reactions", q: "What is the reaction between sulfite salt and dilute acid?", a: "Sulfite Salt + Dilute Acid → Salt + Water + Sulfur Dioxide" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 20", topic: "Reactions", q: "What is the reaction between sulfur dioxide and alkali?", a: "Sulfur Dioxide + Alkali → Sulfite Salt + Water" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 21", topic: "Reactions", q: "What happens when sulfur dioxide reacts with water?", a: "Sulfur dioxide reacts with water to form sulfurous acid (Not sulfuric)" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 22", topic: "Reactions", q: "What is the reaction between Group 1 metals and hydrogen?", a: "Group 1 metals + Hydrogen → Ionic solid of metal hydride" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 23", topic: "Reactions", q: "What is the reaction between Group 1 metal hydride and water?", a: "Group 1 Metal Hydride + Water → Metal Hydroxide + Hydrogen" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 24", topic: "Reactions", q: "What is the thermal decomposition of lithium nitrate?", a: "4LiNO3 → 2Li2O + 4NO2 + O2. Conditions: Heat" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 25", topic: "Reactions", q: "What is the reaction between permanganate and hydrochloric acid?", a: "MnO4 + 4HCl → MnCl2 + Cl2 + 2H2O. Conditions: Heat" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 26", topic: "Reactions", q: "When is a reaction a displacement reaction?", a: "Reaction of metal with the following is displacement reaction: Cold Water, Steam, Dilute acid" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 27", topic: "Reactions", q: "What is the reaction of iron with steam?", a: "Fe + H2O (Steam) → Fe3O4 + H2" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 28", topic: "Reactions", q: "What are the raw materials and products in the extraction of iron?", a: "Raw Materials: Iron Ore/Hematite/FeO3, Carbon/C, Limestone/CaCO3. Products: Slag - Low Density, Iron - High Density" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 29", topic: "Reactions", q: "What is the reaction between iron and chlorine?", a: "2Fe + 3Cl2 → 2FeCl3. Conditions: Heat" },
    { fullSection: "SECTION: Organic Chemistry - Error List - Reactions - Reaction 30", topic: "Reactions", q: "What is the reaction of protein?", a: "Protein → Amino acid. Conditions: Heat/reflux, HCl" },

    // QUALITATIVE ANALYSIS
    // Tests for anions
    { fullSection: "SECTION: Qualitative analysis - Tests for Anions - Carbonate", topic: "Qualitative analysis", q: "How do you test for carbonate ions?", a: "Add dilute acid; effervescence occurs and CO2 is produced (turns limewater milky)" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Anions - Chloride", topic: "Qualitative analysis", q: "How do you test for chloride ions?", a: "Acidify with dilute nitric acid, then add aqueous silver nitrate → white precipitate (AgCl)" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Anions - Bromide", topic: "Qualitative analysis", q: "How do you test for bromide ions?", a: "Acidify with dilute nitric acid, then add aqueous silver nitrate → cream precipitate (AgBr)" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Anions - Iodide", topic: "Qualitative analysis", q: "How do you test for iodide ions?", a: "Acidify with dilute nitric acid, then add aqueous silver nitrate → yellow precipitate (AgI)" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Anions - Nitrate", topic: "Qualitative analysis", q: "How do you test for nitrate ions?", a: "Add aqueous sodium hydroxide and aluminium foil, warm carefully → ammonia produced" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Anions - Sulfate", topic: "Qualitative analysis", q: "How do you test for sulfate ions?", a: "Acidify with dilute nitric acid, then add aqueous barium nitrate → white precipitate (BaSO4)" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Anions - Sulfite", topic: "Qualitative analysis", q: "How do you test for sulfite ions?", a: "Add a small volume of acidified potassium manganate(VII) → purple KMnO4 is decolourised (to colourless)" },

    // Tests for aqueous cations
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Aluminium", topic: "Qualitative analysis", q: "What is the test result for aluminium with aqueous sodium hydroxide?", a: "White precipitate; soluble in excess giving a colourless solution" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Aluminium", topic: "Qualitative analysis", q: "What is the test result for aluminium with aqueous ammonia?", a: "White precipitate; insoluble in excess" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Ammonium", topic: "Qualitative analysis", q: "How do you test for ammonium ions?", a: "Add aqueous sodium hydroxide and warm → ammonia produced (turns damp red litmus blue)" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Calcium", topic: "Qualitative analysis", q: "What is the result for calcium with aqueous sodium hydroxide?", a: "White precipitate, insoluble in excess" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Calcium", topic: "Qualitative analysis", q: "What is the result for calcium with aqueous ammonia?", a: "No precipitate or very slight white precipitate" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Chromium(III)", topic: "Qualitative analysis", q: "What is the result for chromium(III) with aqueous sodium hydroxide?", a: "Green precipitate; soluble in excess" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Chromium(III)", topic: "Qualitative analysis", q: "What is the result for chromium(III) with aqueous ammonia?", a: "Green precipitate; insoluble in excess" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Copper(II)", topic: "Qualitative analysis", q: "What is the result for copper(II) with aqueous sodium hydroxide?", a: "Light blue precipitate; insoluble in excess" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Copper(II)", topic: "Qualitative analysis", q: "What is the result for copper(II) with aqueous ammonia?", a: "Light blue precipitate; soluble in excess giving a dark blue solution" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Iron(II)", topic: "Qualitative analysis", q: "What is the result for iron(II) with aqueous sodium hydroxide?", a: "Green precipitate; insoluble in excess. Precipitate turns brown near surface on standing" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Iron(II)", topic: "Qualitative analysis", q: "What is the result for iron(II) with aqueous ammonia?", a: "Green precipitate; insoluble in excess; precipitate turns brown near surface on standing" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Iron(III)", topic: "Qualitative analysis", q: "What is the result for iron(III) with aqueous sodium hydroxide?", a: "Red-brown precipitate; insoluble in excess" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Zinc", topic: "Qualitative analysis", q: "What is the result for zinc with aqueous sodium hydroxide?", a: "White precipitate; soluble in excess giving a colourless solution" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Cations - Zinc", topic: "Qualitative analysis", q: "What is the result for zinc with aqueous ammonia?", a: "White precipitate; soluble in excess giving a colourless solution" },

    // Tests for gases
    { fullSection: "SECTION: Qualitative analysis - Tests for Gases - Ammonia", topic: "Qualitative analysis", q: "How do you test for ammonia gas?", a: "Turns damp red litmus paper blue" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Gases - Carbon Dioxide", topic: "Qualitative analysis", q: "How do you test for carbon dioxide gas?", a: "Turns limewater milky" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Gases - Chlorine", topic: "Qualitative analysis", q: "How do you test for chlorine gas?", a: "Bleaches damp litmus paper" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Gases - Hydrogen", topic: "Qualitative analysis", q: "How do you test for hydrogen gas?", a: "Produces a 'pop' with a lighted splint" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Gases - Oxygen", topic: "Qualitative analysis", q: "How do you test for oxygen gas?", a: "Relights a glowing splint" },
    { fullSection: "SECTION: Qualitative analysis - Tests for Gases - Sulfur Dioxide", topic: "Qualitative analysis", q: "How do you test for sulfur dioxide gas?", a: "Turns acidified aqueous potassium manganate(VII) from purple to colourless" },

    // Flame tests for metal ions
    { fullSection: "SECTION: Qualitative analysis - Flame Tests - Lithium", topic: "Qualitative analysis", q: "What flame colour does lithium produce?", a: "Red" },
    { fullSection: "SECTION: Qualitative analysis - Flame Tests - Sodium", topic: "Qualitative analysis", q: "What flame colour does sodium produce?", a: "Yellow" },
    { fullSection: "SECTION: Qualitative analysis - Flame Tests - Potassium", topic: "Qualitative analysis", q: "What flame colour does potassium produce?", a: "Lilac" },
    { fullSection: "SECTION: Qualitative analysis - Flame Tests - Calcium", topic: "Qualitative analysis", q: "What flame colour does calcium produce?", a: "Orange-red" },
    { fullSection: "SECTION: Qualitative analysis - Flame Tests - Barium", topic: "Qualitative analysis", q: "What flame colour does barium produce?", a: "Light green" },
    { fullSection: "SECTION: Qualitative analysis - Flame Tests - Copper(II)", topic: "Qualitative analysis", q: "What flame colour does copper(II) produce?", a: "Blue-green" },

    // EXPERIMENTAL TECHNIQUES
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Distillation", topic: "Experimental Techniques", q: "How does distillation work?", a: "A condenser is attached to a flask. The solution is heated. Water with lower boiling point vaporises first. Water vapour is condensed into liquid in condenser and collected in a separate flask" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List", topic: "Experimental Techniques", q: "Why should we not let the solvent front reach the top of the paper?", a: "This makes it impossible to calculate Rf values as the distance travelled by solvent is unknown" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Washing Procedures", topic: "Experimental Techniques", q: "What are the washing procedures for a pipette?", a: "Distilled water, then Liquid to be taken" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Washing Procedures", topic: "Experimental Techniques", q: "What are the washing procedures for a burette?", a: "Distilled water, then Liquid to be taken" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Washing Procedures", topic: "Experimental Techniques", q: "What are the washing procedures for a conical flask?", a: "Tap Water, then Distilled Water" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Apparatus", topic: "Experimental Techniques", q: "What is a stopwatch used for?", a: "To measure time. Measurement ability: Minute or Second" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Apparatus", topic: "Experimental Techniques", q: "What is a thermometer used for?", a: "To measure temperature. Range: -10°C to 110°C. Graduation: 1°C" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Apparatus", topic: "Experimental Techniques", q: "What is a balance used for?", a: "To measure mass. Measurement ability: 2 dp or 1 dp" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Apparatus", topic: "Experimental Techniques", q: "What is a burette used for?", a: "To deliver liquid. Used in titration. Range: 0.0 to 50.0. Graduation: 0.1 cm³" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Apparatus", topic: "Experimental Techniques", q: "What is a volumetric pipette used for?", a: "Fixed volume of liquid. Measurement: 20 cm³, 25 cm³, etc. High accuracy, fixed volume only" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Apparatus", topic: "Experimental Techniques", q: "What is a gas syringe used for?", a: "To collect gas. Range: 100 cm³" },
    { fullSection: "SECTION: Experimental Techniques and Chemical Analysis - Error List - Apparatus", topic: "Experimental Techniques", q: "What is a measuring cylinder used for?", a: "To measure liquid. Cannot measure 1 dp. For 1 dp use Burette" },

    // INDICATORS TABLE QUESTIONS
    { fullSection: "SECTION: Practical - Indicators - Methyl Orange", topic: "Practical", q: "What colours does Methyl Orange show in acidic, neutral, and alkaline solutions?", a: "Acidic: Red, Neutral: Orange, Alkaline: Yellow" },
    { fullSection: "SECTION: Practical - Indicators - Phenolphthalein", topic: "Practical", q: "What colours does Phenolphthalein show in acidic, neutral, and alkaline solutions?", a: "Acidic: Colourless, Neutral: Colourless, Alkaline: Pink" },
    { fullSection: "SECTION: Practical - Indicators - Thymolphthalein", topic: "Practical", q: "What colours does Thymolphthalein show in acidic, neutral, and alkaline solutions?", a: "Acidic: Colourless, Neutral: Colourless, Alkaline: Blue" },
    { fullSection: "SECTION: Practical - Indicators - Litmus", topic: "Practical", q: "What colours does Litmus show in acidic and alkaline solutions?", a: "Acidic: Red, Alkaline: Blue" },
    { fullSection: "SECTION: Practical - Indicators - Comparison", topic: "Practical", q: "Which indicator changes colour across the entire pH range?", a: "Methyl Orange (Red in acidic, Orange in neutral, Yellow in alkaline)" },
    { fullSection: "SECTION: Practical - Indicators - Comparison", topic: "Practical", q: "Which indicators only change colour in alkaline solutions?", a: "Phenolphthalein (Pink in alkaline) and Thymolphthalein (Blue in alkaline)" },

    // pH SCALE QUESTIONS
    { fullSection: "SECTION: Acids, Bases and Salts - pH Scale", topic: "Acids, Bases and Salts", q: "What is the pH range scale?", a: "0 to 14. pH 0-6 is acidic, pH 7 is neutral, pH 8-14 is alkaline" },
    { fullSection: "SECTION: Acids, Bases and Salts - pH Scale", topic: "Acids, Bases and Salts", q: "What pH value represents a neutral solution?", a: "pH 7" },
    { fullSection: "SECTION: Acids, Bases and Salts - pH Scale", topic: "Acids, Bases and Salts", q: "What pH range represents an acidic solution?", a: "pH 0 to 6 (below pH 7)" },
    { fullSection: "SECTION: Acids, Bases and Salts - pH Scale", topic: "Acids, Bases and Salts", q: "What pH range represents an alkaline solution?", a: "pH 8 to 14 (above pH 7)" }
];

// PHYSICS FLASHCARDS (extracted from Physics/Physics.html)
allFlashcards.push(
    { fullSection: "SECTION: Physics - Practical - Planning and Variables", topic: "Physics", q: "What should you mention for variables in a practical?", a: "State the independent and dependent variables and list control variables" },
    { fullSection: "SECTION: Physics - Practical - Method", topic: "Physics", q: "What are key method points for experiments?", a: "Describe method, measure both variables, state instruments and repeats for averages" },
    { fullSection: "SECTION: Physics - Practical - Tables and Graphs", topic: "Physics", q: "What should a results table include?", a: "Include all measurements with units; draw appropriate graph (y vs x) for analysis" },

    { fullSection: "SECTION: Physics - General and Mechanics - Centre of Mass", topic: "Mechanics", q: "How can you find the centre of mass of a lamina?", a: "Suspend from two points, draw plumb lines; intersection gives centre of mass" },
    { fullSection: "SECTION: Physics - General and Mechanics - Moments", topic: "Mechanics", q: "What is the moment of a force?", a: "Moment = force × perpendicular distance from pivot; measure turning effect" },
    { fullSection: "SECTION: Physics - Motion, Forces and Energy - Definitions", topic: "Mechanics", q: "Define speed and velocity", a: "Speed = distance/time; Velocity = change in displacement/time" },
    { fullSection: "SECTION: Physics - Motion, Forces and Energy - Definitions", topic: "Mechanics", q: "Define momentum and impulse", a: "Momentum = mass × velocity; Impulse = force × time" },
    { fullSection: "SECTION: Physics - Motion, Forces and Energy - Energy", topic: "Mechanics", q: "Name common energy stores", a: "Kinetic, gravitational potential, chemical, elastic, nuclear, electrostatic, thermal" },

    { fullSection: "SECTION: Physics - Thermal Physics - Precautions", topic: "Thermal", q: "What precaution when taking temperature readings?", a: "Wait ~30 s for thermometer to stabilise; view at eye level and use lower meniscus" },
    { fullSection: "SECTION: Physics - Thermal Physics - Definitions", topic: "Thermal", q: "What is specific heat capacity?", a: "Energy required per unit mass per unit temperature increase" },
    { fullSection: "SECTION: Physics - Thermal Physics - Transfer", topic: "Thermal", q: "Describe conduction in solids", a: "Vibrational transfer of energy through lattice; in metals also by free electrons" },

    { fullSection: "SECTION: Physics - Waves - General", topic: "Waves", q: "What is frequency and wavelength?", a: "Frequency = wavelengths passing per second; Wavelength = distance between consecutive crests" },
    { fullSection: "SECTION: Physics - Waves - Sound", topic: "Waves", q: "What frequency range is audible to humans?", a: "Approximately 20 Hz to 20,000 Hz" },
    { fullSection: "SECTION: Physics - Light and EM - Electromagnetic Spectrum", topic: "Waves", q: "What is a use of X-rays?", a: "X-rays pass through soft tissue but not bone; used for imaging bones" },

    { fullSection: "SECTION: Physics - Optics - Practical", topic: "Optics", q: "Name a tip when doing lens experiments", a: "Perform in a dark room, use a protractor for accurate angles and move lens to get clear image" },

    { fullSection: "SECTION: Physics - Electricity and Magnetism - Definitions", topic: "Electricity", q: "Define electric current and e.m.f.", a: "Current = charge per unit time; e.m.f. = work done per unit charge around a complete circuit" },
    { fullSection: "SECTION: Physics - Electricity and Magnetism - Circuits", topic: "Electricity", q: "Why place the fuse in the live wire?", a: "So melting the fuse disconnects the live supply and prevents the device casing remaining live" },
    { fullSection: "SECTION: Physics - Electricity and Magnetism - Practical", topic: "Electricity", q: "What is a kilowatt-hour?", a: "Energy used by 1 kW device running for one hour; unit for domestic energy" },

    { fullSection: "SECTION: Physics - Nuclear Physics - Radioactivity", topic: "Nuclear", q: "What is half-life?", a: "Time taken for half the nuclei in a sample to decay" },
    { fullSection: "SECTION: Physics - Nuclear Physics - Applications", topic: "Nuclear", q: "Give an application of gamma radiation", a: "Sterilisation of equipment or food irradiation" },

    { fullSection: "SECTION: Physics - Space Physics - Solar System", topic: "Space", q: "How long does light from the Sun take to reach Earth?", a: "About 500 seconds (≈8 minutes 20 seconds)" },
    { fullSection: "SECTION: Physics - Space Physics - Orbits", topic: "Space", q: "What keeps a planet in orbit?", a: "Gravitational attraction provides the centripetal force for orbital motion" }
);

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
    document.getElementById('questionText').textContent = card.q;
    document.getElementById('answerText').textContent = card.a;
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
