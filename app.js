// ===================================
// BASE D'EXERCICES ENRICHIE (111 exercices)
// ===================================
const exercices = [
  // ===== ÉCHAUFFEMENTS (10) =====
  {
    id: 1,
    titre: "Jeu de passes en mouvement sur tout le terrain",
    type: "echauffement",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["grand_espace", "montee_de_balle", "general"],
    nbMin: 8,
    nbMax: 20,
    description: "Les joueurs se font des passes en se déplaçant librement sur le terrain."
  },
  {
    id: 2,
    titre: "Parcours moteur avec ballon (sauts, slalom, appuis)",
    type: "echauffement",
    categories: ["Babyhand", "U9", "U11", "U13"],
    niveaux: ["Débutant", "Intermédiaire"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 20,
    description: "Parcours complexe combinant vitesse, agilité et maniabilité du ballon."
  },
  {
    id: 3,
    titre: "Tir à 9m en ligne - 5 tirs par joueur",
    type: "echauffement",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 20,
    description: "Chaque joueur effectue 5 tirs d'affilée à 9m, puis change de place."
  },
  {
    id: 4,
    titre: "Jeu de passes par 2 en mouvement",
    type: "echauffement",
    categories: ["U9", "U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire"],
    tags: ["general", "montee_de_balle"],
    nbMin: 6,
    nbMax: 20,
    description: "Binômes se font des passes en se déplaçant avec arrêts/démarrages."
  },
  {
    id: 5,
    titre: "Étirements dynamiques sans ballon",
    type: "echauffement",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé", "Performance"],
    tags: ["general"],
    nbMin: 5,
    nbMax: 15,
    description: "Préparation musculaire et articulaire avant l'effort."
  },
  {
    id: 6,
    titre: "Passes en ligne droite sans opposition",
    type: "echauffement",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 16,
    description: "Deux colonnes qui se font des passes en avançant progressivement."
  },
  {
    id: 7,
    titre: "Décélérations et changements de direction rapides",
    type: "echauffement",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 18,
    description: "Travail de l'agilité et de la stabilité articulaire."
  },
  {
    id: 8,
    titre: "Passes en triangle - 1 groupe par 3",
    type: "echauffement",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 18,
    description: "Chaque groupe de 3 forme un triangle et se fait des passes."
  },
  {
    id: 9,
    titre: "Montée de balle sans opposition par 2",
    type: "echauffement",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["montee_de_balle", "grand_espace"],
    nbMin: 8,
    nbMax: 16,
    description: "Binômes qui montent le ballon d'un bout à l'autre du terrain."
  },
  {
    id: 10,
    titre: "Échauffement en cercle avec ballon - Passes actives",
    type: "echauffement",
    categories: ["U9", "U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 20,
    description: "Joueurs en cercle qui se font des passes rapidement."
  },

  // ===== TECHNIQUE / FONDAMENTAUX (20) =====
  {
    id: 11,
    titre: "Montée de balle sans opposition en 2 groupes",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["grand_espace", "montee_de_balle"],
    nbMin: 8,
    nbMax: 16,
    description: "Perfectionnement de la transition offensive de gardien."
  },
  {
    id: 12,
    titre: "Passes en mouvement par 3 avec changement de direction",
    type: "technique",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 18,
    description: "Trois joueurs se font des passes en effectuant des changements de direction."
  },
  {
    id: 13,
    titre: "Tir en course après passe et va",
    type: "technique",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course", "duel_1c1"],
    nbMin: 6,
    nbMax: 16,
    description: "Le joueur reçoit la balle, effectue un va et tire en suspension."
  },
  {
    id: 14,
    titre: "Tir en placement à 9m - Série de 10 tirs",
    type: "technique",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 16,
    description: "Travail de la régularité et de la précision au tir."
  },
  {
    id: 15,
    titre: "Passes et décalages latéraux",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 16,
    description: "Jeu de passes horizontal avec décalages pour créer de l'espace."
  },
  {
    id: 16,
    titre: "Réception et tir à une main - 5 répétitions",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 12,
    description: "Technique du tir puissant à une main après réception."
  },
  {
    id: 17,
    titre: "Passes en profondeur et arrêt du ballon",
    type: "technique",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 18,
    description: "Travail du contrôle du ballon après réception en profondeur."
  },
  {
    id: 18,
    titre: "Passes en une-deux avec retour",
    type: "technique",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 16,
    description: "Combinaison rapide entre 2 joueurs avec retour du ballon."
  },
  {
    id: 19,
    titre: "Dribble et changement de main",
    type: "technique",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 16,
    description: "Dribble de la main faible et changements de main successifs."
  },
  {
    id: 20,
    titre: "Tir depuis l'aile gauche - Série spécifique",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 12,
    description: "Spécialisation du tir depuis la position d'ailier gauche."
  },
  {
    id: 21,
    titre: "Tir depuis l'aile droite - Série spécifique",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 12,
    description: "Spécialisation du tir depuis la position d'ailier droit."
  },
  {
    id: 22,
    titre: "Passes avec appel de balle - Rythme rapide",
    type: "technique",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 16,
    description: "Travail de l'appel de balle et de la réactivité."
  },
  {
    id: 23,
    titre: "Tir en suspension après pas chassé",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 14,
    description: "Technique avancée de préparation et de tir."
  },
  {
    id: 24,
    titre: "Passes en arrière avec accélération vers l'avant",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 14,
    description: "Combinaison offensive créant de l'espace."
  },
  {
    id: 25,
    titre: "Tir après feinte de tir",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 12,
    description: "Travail de la feinte pour tromper le défenseur."
  },
  {
    id: 26,
    titre: "Contrôle et arrêt en zone dangereuse",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 14,
    description: "Stabilité avec ballon dans les positions offensives clés."
  },
  {
    id: 27,
    titre: "Dribble en slalom - Exercice de coordination",
    type: "technique",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 12,
    description: "Amélioration du contrôle du ballon avec changements rapides de direction."
  },
  {
    id: 28,
    titre: "Passes rapides en petits groupes",
    type: "technique",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 16,
    description: "Réactivité et précision des passes au-delà du cadre simple."
  },
  {
    id: 29,
    titre: "Tir combiné 1h/2h - Maîtrise complète",
    type: "technique",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 14,
    description: "Alternance entre tir à une main et tir à deux mains."
  },

  // ===== THÈME PRINCIPAL (30) =====
  {
    id: 30,
    titre: "3c2 grand espace avec départ gardien",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["grand_espace", "montee_de_balle", "transition"],
    nbMin: 8,
    nbMax: 14,
    description: "Travail de la transition gardien-3 attaquants face à 2 défenseurs."
  },
  {
    id: 31,
    titre: "2c2 duels 1c1 avec aide défensive",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["duel_1c1"],
    nbMin: 6,
    nbMax: 12,
    description: "Travail du duel 1c1 offensif et défensif avec basculement."
  },
  {
    id: 32,
    titre: "Bloc central défense 1-5 vs 3 arrières",
    type: "theme",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["defense_1_5"],
    nbMin: 8,
    nbMax: 14,
    description: "Défense en bloc 1-5 positionnée face à 3 arrières."
  },
  {
    id: 33,
    titre: "Montée de balle avec transitions rapides",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["grand_espace", "montee_de_balle"],
    nbMin: 8,
    nbMax: 16,
    description: "Perfectionnement de la transition défense-attaque rapide."
  },
  {
    id: 34,
    titre: "Défense 0-6 avec repli et pressing",
    type: "theme",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["defense_0_6"],
    nbMin: 8,
    nbMax: 14,
    description: "Défense en chaîne 0-6 avec pressing en montée."
  },
  {
    id: 35,
    titre: "Jeu en supériorité 5c4 (attaque)",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 14,
    description: "Exploitation tactique d'une situation favorable en attaque."
  },
  {
    id: 36,
    titre: "Jeu en infériorité 4c5 (défense)",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 14,
    description: "Organisation défensive en infériorité numérique."
  },
  {
    id: 37,
    titre: "Tirs depuis les ailes avec circulation rapide",
    type: "theme",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 8,
    nbMax: 14,
    description: "Offensif basée sur les tirs des ailiers."
  },
  {
    id: 38,
    titre: "Jeu d'aile avec crochet à 6m",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 12,
    description: "Crochets et tirs rapides depuis la position d'ailier."
  },
  {
    id: 39,
    titre: "Cirque avec pivot - Combinaisons offensives",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 12,
    description: "Travail du pivot dans les jeux offensifs."
  },
  {
    id: 40,
    titre: "Contre-attaque rapide 3c2",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["grand_espace", "transition"],
    nbMin: 8,
    nbMax: 12,
    description: "Transition immédiate après récupération du ballon."
  },
  {
    id: 41,
    titre: "Jeu d'aile gauche spécifique",
    type: "theme",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 12,
    description: "Spécialisation offensive aile gauche."
  },
  {
    id: 42,
    titre: "Jeu d'aile droit spécifique",
    type: "theme",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 6,
    nbMax: 12,
    description: "Spécialisation offensive aile droit."
  },
  {
    id: 43,
    titre: "Défense en 1-5 avec aide mutuelle",
    type: "theme",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["defense_1_5"],
    nbMin: 8,
    nbMax: 14,
    description: "Défense de zone avancée avec décalages et couvertures."
  },
  {
    id: 44,
    titre: "Défense homme à homme 1c1 en rotation",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["duel_1c1"],
    nbMin: 8,
    nbMax: 14,
    description: "Marquage individuel avec échanges de défenseurs."
  },
  {
    id: 45,
    titre: "Pressing haut offensif en montée",
    type: "theme",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["defense_1_5"],
    nbMin: 8,
    nbMax: 14,
    description: "Défense agressive qui monte haut sur terrain adverse."
  },
  {
    id: 46,
    titre: "Montée de balle en 2c0 avec finition",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["montee_de_balle", "grand_espace"],
    nbMin: 6,
    nbMax: 12,
    description: "Entraînement de la transition rapide sans défense."
  },
  {
    id: 47,
    titre: "3c1 grand espace - Attaque de transition",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["grand_espace", "transition"],
    nbMin: 8,
    nbMax: 14,
    description: "Travail de l'attaque rapide 3 attaquants vs 1 défenseur."
  },
  {
    id: 48,
    titre: "Jeu d'action pivot-aile",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 12,
    description: "Combinaisons offensives entre pivot et ailiers."
  },
  {
    id: 49,
    titre: "Tirs latéraux après circulation d'ailes",
    type: "theme",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 8,
    nbMax: 14,
    description: "Offensif basée sur la circulation depuis les ailes."
  },
  {
    id: 50,
    titre: "Défense en chaîne avec basculements",
    type: "theme",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["defense_1_5"],
    nbMin: 8,
    nbMax: 14,
    description: "Défense où les joueurs basculent latéralement."
  },
  {
    id: 51,
    titre: "Jeu de pivot central",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 12,
    description: "Spécialisation du jeu du pivot en zone centrale."
  },
  {
    id: 52,
    titre: "Attaque de pivot avec cirque",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 12,
    description: "Combinaisons offensives centrées autour du pivot."
  },
  {
    id: 53,
    titre: "Transition courte - 2 passes et tir",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["transition", "tir_course"],
    nbMin: 8,
    nbMax: 12,
    description: "Travail de la transition ultra-rapide."
  },
  {
    id: 54,
    titre: "Défense zone progressive",
    type: "theme",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["defense_1_5"],
    nbMin: 8,
    nbMax: 14,
    description: "Défense qui monte progressivement pour presser."
  },
  {
    id: 55,
    titre: "Jeu rapide côté - 2c2 + circulation",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 8,
    nbMax: 12,
    description: "Jeu rapide sur les côtés avec cirque."
  },
  {
    id: 56,
    titre: "Défense alternée - Échanges de marquage",
    type: "theme",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["defense_1_5"],
    nbMin: 8,
    nbMax: 14,
    description: "Défense avec échanges de marquage constants."
  },
  {
    id: 57,
    titre: "Attaque par le milieu - 2-1-3",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 14,
    description: "Configuration offensive centrée sur le milieu du terrain."
  },
  {
    id: 58,
    titre: "Attaque par les ailes - 1-2-2",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["tir_course"],
    nbMin: 8,
    nbMax: 14,
    description: "Configuration offensive centrée sur les ailes."
  },
  {
    id: 59,
    titre: "Contre-attaque défenseur récupération",
    type: "theme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["transition"],
    nbMin: 8,
    nbMax: 12,
    description: "Travail de la contre-attaque après récupération défensive."
  },

  // ===== JEU / OPPOSITION (20) =====
  {
    id: 60,
    titre: "5c5 à thème : chaque récupération jouée en montée",
    type: "jeu",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["grand_espace", "montee_de_balle"],
    nbMin: 10,
    nbMax: 14,
    description: "5c5 complet avec obligation de jouer en transition."
  },
  {
    id: 61,
    titre: "4c4 avec obligation de duel 1c1 avant tir",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["duel_1c1", "tir_course"],
    nbMin: 8,
    nbMax: 12,
    description: "4c4 où chaque tir doit être précédé d'un duel."
  },
  {
    id: 62,
    titre: "3c3 zone réduite - Intense et rapide",
    type: "jeu",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["duel_1c1", "tir_course"],
    nbMin: 6,
    nbMax: 10,
    description: "Jeu intensif sur terrain réduit."
  },
  {
    id: 63,
    titre: "5c5 complet sans thème spécifique",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["general"],
    nbMin: 10,
    nbMax: 14,
    description: "Jeu complet pour intégrer toutes les compétences."
  },
  {
    id: 64,
    titre: "2c2 rapide - Série de 5 min",
    type: "jeu",
    categories: ["U9", "U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire"],
    tags: ["general"],
    nbMin: 4,
    nbMax: 8,
    description: "Jeu simple et rapide pour débutants."
  },
  {
    id: 65,
    titre: "6c6 complet sur demi-terrain",
    type: "jeu",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["general"],
    nbMin: 12,
    nbMax: 18,
    description: "Jeu complet avec plus de joueurs."
  },
  {
    id: 66,
    titre: "Tournoi 5c5 - Deux équipes",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["general"],
    nbMin: 10,
    nbMax: 16,
    description: "Matchs de compétition en situation réelle."
  },
  {
    id: 67,
    titre: "3c3 avec gardiens",
    type: "jeu",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 12,
    description: "Jeu réduit avec gardiens pour tous les joueurs."
  },
  {
    id: 68,
    titre: "4c4 en supériorité numérique (5c4)",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 9,
    nbMax: 14,
    description: "Travail de la supériorité numérique en match."
  },
  {
    id: 69,
    titre: "Jeu en infériorité (4c5)",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 9,
    nbMax: 14,
    description: "Défense en infériorité et contre-attaque."
  },
  {
    id: 70,
    titre: "Jeu libre classique 5c5",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 10,
    nbMax: 14,
    description: "Match sans contrainte spécifique - jeu complet."
  },
  {
    id: 71,
    titre: "7c7 terrain complet",
    type: "jeu",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["general"],
    nbMin: 14,
    nbMax: 20,
    description: "Jeu complète avec plus de joueurs par équipe."
  },
  {
    id: 72,
    titre: "Match de gala - 2c2 en rotation",
    type: "jeu",
    categories: ["U9", "U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire"],
    tags: ["general"],
    nbMin: 4,
    nbMax: 8,
    description: "Succession de 2c2 rapides avec rotation."
  },
  {
    id: 73,
    titre: "Jeu avec lancer franc à clé",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 10,
    nbMax: 14,
    description: "5c5 avec point bonus pour tir à 6m."
  },
  {
    id: 74,
    titre: "Jeu de cirque - 3c3 au centre",
    type: "jeu",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 6,
    nbMax: 12,
    description: "Jeu réduit centré sur les actions intérieures."
  },
  {
    id: 75,
    titre: "Jeu avec limitation - 3 passes maxi",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["general"],
    nbMin: 10,
    nbMax: 14,
    description: "5c5 avec limitation du nombre de passes avant tir."
  },
  {
    id: 76,
    titre: "Match éducatif - Discussion entre périodes",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 10,
    nbMax: 14,
    description: "Match avec pauses pour réflexion collective."
  },
  {
    id: 77,
    titre: "Jeu de transition - 3c2 en couloir",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["transition"],
    nbMin: 8,
    nbMax: 12,
    description: "Succession d'attaques 3c2 en transition rapide."
  },
  {
    id: 78,
    titre: "Jeu position - Attaque statique face défense dynamique",
    type: "jeu",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 10,
    nbMax: 14,
    description: "Travail défensif contre attaque organisée."
  },
  {
    id: 79,
    titre: "Jeu débat - Liberté totale avec analyse",
    type: "jeu",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["general"],
    nbMin: 10,
    nbMax: 14,
    description: "Match avec analyse collective pendant le jeu."
  },

  // ===== RETOUR AU CALME (8) =====
  {
    id: 90,
    titre: "Étirements + débrief collectif",
    type: "retour_calme",
    categories: ["Babyhand", "U9", "U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé", "Performance", "Pro"],
    tags: ["general"],
    nbMin: 4,
    nbMax: 20,
    description: "Retour au calme et discussion des points clés de la séance."
  },
  {
    id: 91,
    titre: "Étirements passifs dynamiques",
    type: "retour_calme",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 5,
    nbMax: 15,
    description: "Étirements avec l'aide du coach ou d'un partenaire."
  },
  {
    id: 92,
    titre: "Jeu léger sans opposition - 2-3 min",
    type: "retour_calme",
    categories: ["U9", "U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire"],
    tags: ["general"],
    nbMin: 2,
    nbMax: 10,
    description: "Jeu simple sans intensité pour décélérer."
  },
  {
    id: 93,
    titre: "Respiration et relaxation guidée",
    type: "retour_calme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 5,
    nbMax: 15,
    description: "Travail de la respiration et de la relaxation mentale."
  },
  {
    id: 94,
    titre: "Passes lentes en marche",
    type: "retour_calme",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 3,
    nbMax: 8,
    description: "Passes avec déplacement progressif très lent."
  },
  {
    id: 95,
    titre: "Tirs libres - Sans compétition",
    type: "retour_calme",
    categories: ["U11", "U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["general"],
    nbMin: 5,
    nbMax: 15,
    description: "Tirs dans une ambiance décontractée."
  },
  {
    id: 96,
    titre: "Débriefing assis - Analyse vidéo",
    type: "retour_calme",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["general"],
    nbMin: 5,
    nbMax: 15,
    description: "Analyse collective des points clés assis."
  },
  {
    id: 97,
    titre: "Étirements statiques complets - 10 min",
    type: "retour_calme",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance", "Pro"],
    tags: ["general"],
    nbMin: 8,
    nbMax: 15,
    description: "Programme complet d'étirements statiques."
  },

  // ===== SPÉCIFIQUE GARDIENS (12) =====
  {
    id: 100,
    titre: "Échauffement gardien : déplacements + tirs 6m",
    type: "specifique_gardien",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé", "Performance"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 4,
    description: "Préparation physique et technique du gardien."
  },
  {
    id: 101,
    titre: "Duels gardien/tireur - 1c0 puis 1c1",
    type: "specifique_gardien",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["gardien", "grand_espace"],
    nbMin: 1,
    nbMax: 4,
    description: "Jeu gardien face aux tirs et duels."
  },
  {
    id: 102,
    titre: "Tirs sur gardien - Série 15 tirs",
    type: "specifique_gardien",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 4,
    description: "Séance intensive de tirs sur le gardien."
  },
  {
    id: 103,
    titre: "Jeu gardien face à cirque/pivot",
    type: "specifique_gardien",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 3,
    description: "Travail du gardien face aux actions rapides intérieures."
  },
  {
    id: 104,
    titre: "Relâchement et distribution du ballon",
    type: "specifique_gardien",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["gardien", "montee_de_balle"],
    nbMin: 1,
    nbMax: 3,
    description: "Travail du jeu au pied et du relâchement gardien."
  },
  {
    id: 105,
    titre: "Jeu en zone 6m - Avec autres gardiens",
    type: "specifique_gardien",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Débutant", "Intermédiaire", "Confirmé"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 4,
    description: "Apprentissage des bases de la position 6m."
  },
  {
    id: 106,
    titre: "Travail des bases gardien - Statique",
    type: "specifique_gardien",
    categories: ["U11", "U13", "U15", "U18"],
    niveaux: ["Débutant"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 4,
    description: "Apprentissage des gestes de base gardien."
  },
  {
    id: 107,
    titre: "Tirs en suspension sur gardien",
    type: "specifique_gardien",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 4,
    description: "Entraînement face aux tirs en suspension."
  },
  {
    id: 108,
    titre: "Jeu gardien 3c3 complet",
    type: "specifique_gardien",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 4,
    description: "Travail complet du gardien en jeu 3c3."
  },
  {
    id: 109,
    titre: "Réactions rapides - Tirs rapides successifs",
    type: "specifique_gardien",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Confirmé", "Performance"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 3,
    description: "Développement des réflexes du gardien."
  },
  {
    id: 110,
    titre: "Travail sortie gardien - 1c0",
    type: "specifique_gardien",
    categories: ["U13", "U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 3,
    description: "Technique de sortie en 1c0."
  },
  {
    id: 111,
    titre: "Tirs longue distance sur gardien",
    type: "specifique_gardien",
    categories: ["U15", "U18", "Seniors"],
    niveaux: ["Intermédiaire", "Confirmé", "Performance"],
    tags: ["gardien"],
    nbMin: 1,
    nbMax: 4,
    description: "Entraînement face aux tirs de loin."
  }
];

// ===================================
// FONCTIONS UTILITAIRES
// ===================================

function extraireTags(theme) {
  theme = theme.toLowerCase();
  const tags = [];
  if (theme.includes("grand espace")) tags.push("grand_espace");
  if (theme.includes("montée de balle") || theme.includes("montee de balle"))
    tags.push("montee_de_balle");
  if (theme.includes("repli")) tags.push("repli_defensif");
  if (
    theme.includes("defense 1-5") ||
    theme.includes("défense 1-5")
  )
    tags.push("defense_1_5");
  if (
    theme.includes("defense 0-6") ||
    theme.includes("défense 0-6")
  )
    tags.push("defense_0_6");
  if (theme.includes("duel") || theme.includes("1c1")) tags.push("duel_1c1");
  if (theme.includes("tir en course") || theme.includes("tir")) tags.push("tir_course");
  if (theme.includes("gardien")) tags.push("gardien");
  if (tags.length === 0) tags.push("general");
  return tags;
}

function construireSquelette(duree, nbGardiens) {
  const blocs = [];
  if (duree <= 70) {
    blocs.push(["echauffement", 10]);
    if (nbGardiens > 0) blocs.push(["specifique_gardien", 10]);
    blocs.push(["technique", 15]);
    blocs.push(["theme", 20]);
    blocs.push(["jeu", 10]);
    blocs.push(["retour_calme", 5]);
  } else if (duree <= 90) {
    blocs.push(["echauffement", 15]);
    if (nbGardiens > 0) blocs.push(["specifique_gardien", 10]);
    blocs.push(["technique", 20]);
    blocs.push(["theme", 30]);
    blocs.push(["jeu", 15]);
    blocs.push(["retour_calme", 10]);
  } else if (duree <= 105) {
    blocs.push(["echauffement", 15]);
    if (nbGardiens > 0) blocs.push(["specifique_gardien", 15]);
    blocs.push(["technique", 20]);
    blocs.push(["theme", 30]);
    blocs.push(["jeu", 20]);
    blocs.push(["retour_calme", 10]);
  } else {
    blocs.push(["echauffement", 20]);
    if (nbGardiens > 0) blocs.push(["specifique_gardien", 15]);
    blocs.push(["technique", 20]);
    blocs.push(["theme", 40]);
    blocs.push(["jeu", 20]);
    blocs.push(["retour_calme", 10]);
  }
  return blocs;
}

function filtrerExercices(typeBloc, categorie, niveau, nbJoueurs, tags) {
  return exercices.filter(ex => {
    if (ex.type !== typeBloc) return false;
    if (!ex.categories.includes(categorie)) return false;
    if (!ex.niveaux.includes(niveau)) return false;
    if (typeBloc !== "specifique_gardien") {
      if (nbJoueurs < ex.nbMin || nbJoueurs > ex.nbMax) return false;
    }
    if (typeBloc === "theme" || typeBloc === "technique" || typeBloc === "jeu") {
      return tags.some(t => ex.tags.includes(t));
    }
    return true;
  });
}

function choisirExercice(candidats) {
  if (candidats.length === 0) return null;
  return candidats[Math.floor(Math.random() * candidats.length)];
}

function getLabelType(type) {
  const labels = {
    echauffement: "🔥 Échauffement",
    technique: "🎯 Technique",
    theme: "⭐ Thème principal",
    jeu: "🏐 Jeu complet",
    retour_calme: "😌 Retour au calme",
    specifique_gardien: "🧤 Gardiens"
  };
  return labels[type] || type;
}

// ===================================
// GÉNÉRATION DE LA SÉANCE
// ===================================

function genererSeance() {
  const theme = document.getElementById("theme").value;
  const categorie = document.getElementById("categorie").value;
  const niveau = document.getElementById("niveau").value;
  const duree = parseInt(document.getElementById("duree").value, 10);
  const joueurs = parseInt(document.getElementById("joueurs").value, 10);
  const gardiens = parseInt(document.getElementById("gardiens").value, 10);

  const tags = extraireTags(theme);
  const squelette = construireSquelette(duree, gardiens);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  let total = 0;
  const seance = [];

  squelette.forEach(([typeBloc, dureeBloc]) => {
    const candidats = filtrerExercices(typeBloc, categorie, niveau, joueurs, tags);
    const ex = choisirExercice(candidats);
    total += dureeBloc;
    seance.push({ type: typeBloc, duree: dureeBloc, exercice: ex });
  });

  // Header avec infos
  const header = document.createElement("div");
  header.className = "result-header-info";
  header.innerHTML = `
    <div class="duration">
      ⏱️ Durée totale: ${total} min ${duree > total ? `(${duree - total} min flex)` : ""}
    </div>
    <div class="metadata">
      <strong>Thème:</strong> ${theme || "(non renseigné)"} | 
      <strong>Catégorie:</strong> ${categorie} | 
      <strong>Niveau:</strong> ${niveau} | 
      <strong>Joueurs:</strong> ${joueurs} | 
      <strong>Gardiens:</strong> ${gardiens}
    </div>
  `;
  resultDiv.appendChild(header);

  // Affichage des blocs
  seance.forEach((bloc, idx) => {
    const div = document.createElement("div");
    div.className = `bloc ${bloc.type}`;

    const labelType = getLabelType(bloc.type);

    div.innerHTML = `
      <h3>
        ${labelType}
        <span class="bloc-type">${bloc.duree} min</span>
      </h3>
      <p>${bloc.exercice ? bloc.exercice.titre : `<em style="color: #e74c3c;">Aucun exercice trouvé - Base à enrichir!</em>`}</p>
      ${bloc.exercice ? `<p class="small">💡 ${bloc.exercice.description}</p>` : ""}
    `;
    resultDiv.appendChild(div);
  });

  // Affichage de la section résultats
  document.getElementById("resultsSection").style.display = "block";

  // Scroll vers les résultats
  document.getElementById("resultsSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  // Sauvegarder la séance pour téléchargement
  window.seanceActuelle = {
    theme,
    categorie,
    niveau,
    duree: total,
    joueurs,
    gardiens,
    seance
  };
}

// ===================================
// TÉLÉCHARGEMENT PDF
// ===================================

function telechargerPDF() {
  if (!window.seanceActuelle) {
    alert("Générez une séance d'abord!");
    return;
  }

  const s = window.seanceActuelle;
  const data = `
HANDBOLL PLANNER - SÉANCE D'ENTRAÎNEMENT
==========================================

INFORMATIONS
Thème: ${s.theme}
Catégorie: ${s.categorie}
Niveau: ${s.niveau}
Durée: ${s.duree} minutes
Joueurs: ${s.joueurs}
Gardiens: ${s.gardiens}
Date: ${new Date().toLocaleDateString("fr-FR")}

PROGRAMME DÉTAILLÉ
==========================================
${s.seance.map((bloc, idx) => {
  const labelType = getLabelType(bloc.type);
  return `
${idx + 1}. ${labelType} (${bloc.duree} min)
   ${bloc.exercice ? bloc.exercice.titre : "Exercice à définir"}
   ${bloc.exercice ? "💡 " + bloc.exercice.description : ""}
  `;
}).join("\n")}

==========================================
Généré par Handball Planner
https://julienbadenas-prog.github.io/handball-planner
`;

  const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `seance_handball_${new Date().toISOString().slice(0, 10)}.txt`;
  link.click();
}