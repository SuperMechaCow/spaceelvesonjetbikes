let masterUnits = [{
		name: "Kayvaan Shrike",
		region: 'AA',
		slot: "HQ",
		faction: "Raven Guard",
		keywords: [
			"chapter master",
			"character",
			"infantry",
			"fly",
			"jump pack",
			"shrike",
			"phobos",
			"primaris"
		],
		models: [{
			name: "Kayvaan Shrike",
			faction: "",
			keywords: [],
			weapons: [{
					name: "Raven's Talons",
					amount: "1",
					cantrips: [],
					range: "Melee",
					type: "Melee",
					s: "User",
					ap: "-3",
					d: "2",
					abilities: "You can re-roll failed wound rolls for this weapon."
				},
				{
					name: "Blackout",
					amount: "1",
					cantrips: [],
					range: "18\"",
					type: "Pistol 2",
					s: "4",
					ap: "-2",
					d: "2",
					abilities: "Each time you select a target for this weapon, you can ignore the Look Out, Sir rule. When resolving an attack made with this weapon, a wound roll of 6+ inflicts 1 mortal wound on the target in addition to any other damage."
				},
				{
					name: "Frag & Krak grenades",
					amount: "1",
					cantrips: [
						"blast"
					],
					range: "6\"",
					type: "Grenade D6",
					s: "3",
					ap: "0",
					d: "1",
					abilities: "Blast."
				},
				{
					name: "Frag & Krak grenades",
					amount: "1",
					cantrips: [],
					range: "6\"",
					type: "Grenade 1",
					s: "6",
					ap: "-1",
					d: "D3",
					abilities: "-"
				}
			],
			wargear: [],
			statlines: [{
				M: "14",
				WS: "2",
				BS: "2",
				S: "4",
				T: "4",
				W: "6",
				A: "6",
				Ld: "9",
				Sv: "3"
			}]
		}],
		rules: [{
				name: "Angels of Death",
				desc: "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Shock Assault and Combat Doctrines.",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Death from Above",
				desc: "During deployment, if every model in this unit has this ability, then you can set up this unit high in the skies instead of setting it up on the battlefield. If you do, then in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9\" away from enemy models.",
				subkeys: null,
				targets: null,
				phases: [
					"Movement"
				]
			},
			{
				name: "Winged Deliverance (Aura)",
				desc: "You can re-roll charge rolls made for RAVEN GUARD JUMP PACK and RAVEN GUARD PHOBOS units if they are within 6\" of this model when the roll is made.",
				subkeys: [
					"RAVEN",
					"GUARD",
					"JUMP",
					"PACK",
					"RAVEN",
					"GUARD",
					"PHOBOS"
				],
				targets: [
					"RAVEN GUARD",
					"JUMP PACK",
					"RAVEN GUARD",
					"PHOBOS"
				],
				phases: []
			},
			{
				name: "Diving Charge",
				desc: "After this model finishes a charge move, you can select one enemy unit within Engagement Range of it and roll one D6: on a 4+, that enemy unit suffers 1 mortal wound.",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Chapter Master",
				desc: "In your Command phase select one friendly <CHAPTER> CORE\t or <CHAPTER> CHARACTER within 6\" of this model. Until the start of your next Command phase, each time a model in that unit makes an attack, you can re-roll the hit roll.",
				subkeys: [
					"CHAPTER",
					"CORE",
					"CHAPTER",
					"CHARACTER"
				],
				targets: [
					"CHAPTER",
					"CORE",
					"CHAPTER",
					"CHARACTER"
				],
				phases: []
			},
			{
				name: "Iron Halo",
				desc: "This model has a 4+ invulnerable save.",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Rites of Battle",
				desc: "While a friendly <CHAPTER> CORE unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a hit roll of 1",
				subkeys: [
					"CHAPTER",
					"CORE"
				],
				targets: [
					"CHAPTER",
					"CORE"
				],
				phases: []
			},
			{
				name: "Shadowmaster",
				desc: "Enemy units cannot fire overwatch at this warlord.",
				subkeys: null,
				targets: null,
				phases: []
			}
		],
		spells: [],
		stratagems: [{
				faction_id: "SM",
				name: "GUERILLA TACTICS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "At the opportune moment, Space Marine infiltration units slip away from battle, only to relocate and strike the foe again.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				id: "000002164025",
				field10: "",
				keys: [
					"phobos",
					"phobos"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "STRANGLEHOLD",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "By the time the enemy engages the Raven Guard, their rear lines are already in the talon-grip of the Chapter’s covert vanguard, choking them off from vital battlefield support.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				id: "000003659004",
				field10: "",
				keys: [
					"raven guard scout",
					"raven guard phobos",
					"raven",
					"guard",
					"scout",
					"raven",
					"guard",
					"phobos"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "GENE-WROUGHT MIGHT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Blessed with incredible strength, Primaris Space Marines deliver blows that inflict terrifying damage.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				id: "000002164007",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "OCULAR NETWORKING",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When fighting as part of Vanguard Spearhead, Space Marines utilise the sophisticated ocular systems of their Phobos armour to greater efficacy. Sharing combat data across inter-squad networks, they identify weaknesses in even the most resilient foe, deficiencies which precise attacks can take advantage of.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				id: "000006923003",
				field10: "",
				keys: [
					"vanguard",
					"spearhead",
					"monster",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase",
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "A DEADLY PRIZE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "If critical objectives look close to falling into enemy hands, the Raven Guard will often plant explosives to deny their capture.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				id: "000003659012",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"End of your turn"
				],
				descText: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "DISPERSAL PROTOCOLS",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Vanguard squads are trained to rapidly disengage from their foe, moving to new positions before attacking once more.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				id: "000006923004",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "STRIKE FROM THE SKIES",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The Raven Guard swoop into battle like dark-winged angels of vengeance.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00836\" data-tooltip-content=\"#tooltip_content00836\" data-tooltip-anchor=\"#tooltip_content00836\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">JUMP</span> <span class=\"kwb\">PACK</span></span> unit. Until the end of that phase, that unit can be chosen to charge with even if it <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn, and when a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 1 to the result.",
				id: "000003659013",
				field10: "",
				keys: [
					"raven guard jump pack",
					"raven",
					"guard",
					"jump",
					"pack"
				],
				activate: [
					"Charge phase"
				],
				descText: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one <span class=\"tooltip00836\" data-tooltip-content=\"#tooltip_content00836\" data-tooltip-anchor=\"#tooltip_content00836\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">JUMP</span> <span class=\"kwb\">PACK</span></span> unit. Until the end of that phase, that unit can be chosen to charge with even if it <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn, and when a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made for that unit, add 1 to the result.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "HAMMER OF WRATH",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Space Marines with jump packs crash into combat with bonebreaking force.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>, when an <span class=\"tooltip01712\" data-tooltip-content=\"#tooltip_content01712\" data-tooltip-anchor=\"#tooltip_content01712\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">JUMP</span> <span class=\"kwb\">PACK</span></span> unit from your army finishes a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that <span class=\"kwb\">JUMP</span> <span class=\"kwb\">PACK</span> unit and roll one D6 for each model in that <span class=\"kwb\">JUMP</span> <span class=\"kwb\">PACK</span> unit that is within Engagement Range of that enemy unit. For each dice result that equals or exceeds that enemy unit’s Toughness characteristic, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>.",
				id: "000002164018",
				field10: "",
				keys: [
					"adeptus astartes jump pack",
					"adeptus",
					"astartes",
					"jump",
					"pack",
					"jump",
					"pack",
					"jump",
					"pack"
				],
				activate: [
					"Charge phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>, when an <span class=\"tooltip01712\" data-tooltip-content=\"#tooltip_content01712\" data-tooltip-anchor=\"#tooltip_content01712\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">JUMP</span> <span class=\"kwb\">PACK</span></span> unit from your army finishes a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that <span class=\"kwb\">JUMP</span> <span class=\"kwb\">PACK</span> unit and roll one D6 for each model in that <span class=\"kwb\">JUMP</span> <span class=\"kwb\">PACK</span> unit that is within Engagement Range of that enemy unit. For each dice result that equals or exceeds that enemy unit’s Toughness characteristic, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a>.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "TACTICAL AUGURY",
				type: "Wargear",
				cp_cost: "1",
				legend: "Vanguard Spearheads utilise advanced scanning equipment and orbital augurs to grant them an awareness of the battle-sphere's layout few forces can match. With such tactical advantage, they make pinpoint shots into enemy strongpoints and through dense defence lines, driving the foe out of cover and onto the blades of the Spearhead's encircling executioners.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				id: "000006923008",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "UNCOMPROMISING FIRE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Switching weapons to full auto, the Space Marines unleash a short-lived but inescapable hail of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				id: "000002164020",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "AUSPEX SCAN",
				type: "Wargear",
				cp_cost: "2",
				legend: "Nearby motion and radiation signatures are detected by a handheld device, forewarning the bearer of ambushes.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				id: "000002164027",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Enemy Movement phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "TRANSHUMAN PHYSIOLOGY",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "Space Marines can fight through even the most grievous of wounds.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000002164005",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Being targeted"
				],
				descText: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "ONLY IN DEATH DOES DUTY END",
				type: "Epic Deed",
				cp_cost: "2",
				legend: "Imminent death does not prevent a Space Marine from enacting his final justice upon the enemies of the Imperium.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01700\" data-tooltip-content=\"#tooltip_content01700\" data-tooltip-anchor=\"#tooltip_content01700\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that has not already been selected to fight this phase is destroyed. Do not remove that model from play - it can fight after the attacking model’s unit has finished <a href=\"/wh40k9ed/the-rules/core-rules/#Making-Attacks\">making attacks</a>. After resolving the destroyed model’s attacks, it is then removed.",
				id: "000002164009",
				field10: "",
				keys: [
					"adeptus astartes character",
					"adeptus",
					"astartes",
					"character"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase",
					"Taking casualties"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01700\" data-tooltip-content=\"#tooltip_content01700\" data-tooltip-anchor=\"#tooltip_content01700\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">CHARACTER</span></span> model from your army that has not already been selected to fight this phase is destroyed. Do not remove that model from play - it can fight after the attacking model’s unit has finished <a href=\"/wh40k9ed/the-rules/core-rules/#Making-Attacks\">making attacks</a>. After resolving the destroyed model’s attacks, it is then removed.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "INFILTRATORS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The Raven Guard are masters of infiltration, slipping unseen across the battlefield before striking from the shadows to annihilate their foes with gun and blade.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				id: "000003659002",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "LAY LOW THE TYRANTS",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Those who would abuse their strength to oppress the weak and humble are amongst the Raven Guard’s most favoured prey.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000003659006",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven guard biker",
					"raven",
					"guard",
					"infantry",
					"raven",
					"guard",
					"biker",
					"character",
					"vehicle",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "STEADY ADVANCE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "A measured advance allows Space Marines to unleash a steady stream of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				id: "000002164021",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "STRIKE FROM THE SHADOWS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The deadliest strike comes always from the least expected quarter. So taught Corax.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				id: "000003659008",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				subfaction: "Raven Guard"
			}
		],
		waha: {
			id: "000000146",
			name: "Kayvaan Shrike",
			link: "https://wahapedia.ru/wh40k9ed/factions/space-marines/Kayvaan-Shrike",
			faction_id: "SM",
			source_id: "000000082",
			role: "HQ",
			unit_composition: "Kayvaan Shrike is a single model equipped with: Blackout; the Raven’s Talons; frag grenades; krak grenades. You can only include one of this model in your army.",
			transport: "",
			power_points: "7",
			priest: "",
			psyker: "",
			open_play_only: "false",
			crusade_only: "false",
			virtual: "false",
			Cost: "",
			cost_per_unit: "false",
			field17: ""
		},
		warlord: true
	},
	{
		name: "Incursor Squad",
		region: 'AA',
		slot: "Troops",
		faction: "Adeptus Astartes",
		keywords: [
			"infantry",
			"phobos",
			"smokescreen",
			"incursor squad",
			"core",
			"primaris"
		],
		models: [{
				name: "Incursor Sergeant",
				faction: "",
				keywords: [],
				weapons: [{
						name: "Bolt pistol",
						amount: "1",
						cantrips: [],
						range: "12\"",
						type: "Pistol 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "-"
					},
					{
						name: "Frag & Krak grenades",
						amount: "1",
						cantrips: [
							"blast"
						],
						range: "6\"",
						type: "Grenade D6",
						s: "3",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Frag & Krak grenades",
						amount: "1",
						cantrips: [],
						range: "6\"",
						type: "Grenade 1",
						s: "6",
						ap: "-1",
						d: "D3",
						abilities: "-"
					},
					{
						name: "Occulus bolt carbine",
						amount: "1",
						cantrips: [],
						range: "24\"",
						type: "Rapid Fire 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "Each time an attack is made with this weapon, the target does not receive the benefits of cover against that attack"
					},
					{
						name: "Paired combat blades",
						amount: "1",
						cantrips: [],
						range: "Melee",
						type: "Melee",
						s: "User",
						ap: "-1",
						d: "1",
						abilities: "-"
					}
				],
				wargear: [],
				amount: "1",
				statlines: [{
					M: "6",
					WS: "3",
					BS: "3",
					S: "4",
					T: "4",
					W: "2",
					A: "3",
					Ld: "8",
					Sv: "3"
				}]
			},
			{
				name: "Incursor",
				faction: "",
				keywords: [],
				weapons: [{
						name: "Bolt pistol",
						amount: "4",
						cantrips: [],
						range: "12\"",
						type: "Pistol 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "-"
					},
					{
						name: "Occulus bolt carbine",
						amount: "4",
						cantrips: [],
						range: "24\"",
						type: "Rapid Fire 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "Each time an attack is made with this weapon, the target does not receive the benefits of cover against that attack"
					},
					{
						name: "Frag & Krak grenades",
						amount: "4",
						cantrips: [
							"blast"
						],
						range: "6\"",
						type: "Grenade D6",
						s: "3",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Frag & Krak grenades",
						amount: "4",
						cantrips: [],
						range: "6\"",
						type: "Grenade 1",
						s: "6",
						ap: "-1",
						d: "D3",
						abilities: "-"
					},
					{
						name: "Paired combat blades",
						amount: "4",
						cantrips: [],
						range: "Melee",
						type: "Melee",
						s: "User",
						ap: "-1",
						d: "1",
						abilities: "-"
					}
				],
				wargear: [],
				amount: "4",
				statlines: [{
					M: "6",
					WS: "3",
					BS: "3",
					S: "4",
					T: "4",
					W: "2",
					A: "2",
					Ld: "7",
					Sv: "3"
				}]
			}
		],
		rules: [{
				name: "Combat Squads",
				desc: "Before any models are deployed at the start of the game, this unit when containing its maximum number of models, may be split into two units each containing an equal number of models.",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Concealed Positions",
				desc: "During Deployment when you set up this unit, if every model in this unit has this ability then it can be set up anywhere on the battlefield that is more than 9\" away from the enemy deployment zone  and any enemy models",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Angels of Death",
				desc: "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Shock Assault and Combat Doctrines.",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Multi-Spectrum Array",
				desc: "Each time a model in this unit makes a ranged attack, you can ignore any or all hit roll and Ballistic Skill modifiers",
				subkeys: null,
				targets: null,
				phases: []
			}
		],
		spells: [],
		stratagems: [{
				faction_id: "SM",
				name: "SPECIAL-ISSUE LOADOUT",
				type: "Wargear",
				cp_cost: "2",
				legend: "Individual shells are loaded when optimised volleys are required.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you select a <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to shoot. Until the end of the phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> (excluding bolt sniper rifles) without the <a href=\"/wh40k9ed/factions/space-marines/#Special-issue-Ammunition\">Special-issue Ammunition</a> ability that models in that unit are equipped with gain that Special-issue Ammunition ability and their Type characteristic is changed to <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy 1</a>.",
				id: "000004846019",
				field10: "",
				keys: [
					"deathwatch infantry",
					"deathwatch",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you select a <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to shoot. Until the end of the phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> (excluding bolt sniper rifles) without the <a href=\"/wh40k9ed/factions/space-marines/#Special-issue-Ammunition\">Special-issue Ammunition</a> ability that models in that unit are equipped with gain that Special-issue Ammunition ability and their Type characteristic is changed to <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy 1</a>.",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "SQUAD DOCTRINES",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Each squad within an Ultramarines strike force at war is ready to switch to a new combat doctrine at a moment’s notice.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army, then select either the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Devastator</a>, <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Tactical</a> or <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault Doctrine</a>. Until the start of your next Movement phase, that unit gains the bonus of that combat doctrine instead of the active combat doctrine.",
				id: "000003607014",
				field10: "",
				keys: [
					"ultramarines infantry",
					"ultramarines biker",
					"ultramarines",
					"infantry",
					"ultramarines",
					"biker"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army, then select either the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Devastator</a>, <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Tactical</a> or <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault Doctrine</a>. Until the start of your next Movement phase, that unit gains the bonus of that combat doctrine instead of the active combat doctrine.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "HONOURED SERGEANT",
				type: "Requisition",
				cp_cost: "1",
				legend: "Should an Ultramarines Sergeant show particular excellence in battle, they may be given the honour of bearing a Chapter relic into battle.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">ULTRAMARINES</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Hellfury-Bolts\">Hellfury Bolts</a>, <a href=\"/wh40k9ed/factions/space-marines/#Sunwrath-Pistol-1\">Sunwrath Pistol</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003607015",
				field10: "",
				keys: [
					"ultramarines",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">ULTRAMARINES</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Hellfury-Bolts\">Hellfury Bolts</a>, <a href=\"/wh40k9ed/factions/space-marines/#Sunwrath-Pistol-1\">Sunwrath Pistol</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "KEEN SENSES",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The heightened senses of the Space Wolves allow them to sniff out prey wherever, or however, it is hidden.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> unit from your army. Until the end of the turn, you can ignore any or all <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, Ballistic skill and Weapon skill modifiers, and each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> for that unit, you can ignore any or all modifiers to that charge roll.",
				id: "000004630016",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves biker",
					"space wolves cavalry",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"biker",
					"space",
					"wolves",
					"cavalry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> unit from your army. Until the end of the turn, you can ignore any or all <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, Ballistic skill and Weapon skill modifiers, and each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> for that unit, you can ignore any or all modifiers to that charge roll.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "THE SHIELD UNWAVERING",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Once the Imperial Fists have captured a site of strategic importance, they dig in and hold their position no matter what the enemy hurls at them.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MORALE-PHASE\">Morale phase</a>. Select one <span class=\"tooltip01756\" data-tooltip-content=\"#tooltip_content01756\" data-tooltip-anchor=\"#tooltip_content01756\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 3\" of any <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective markers</a>. Until the start of your next turn, add 1 to the Attacks characteristic of models in that unit, and when resolving an attack made against that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> (excluding <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saves</a>).",
				id: "000003693014",
				field10: "",
				keys: [
					"imperial fists infantry",
					"imperial",
					"fists",
					"infantry"
				],
				activate: [
					"Morale phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MORALE-PHASE\">Morale phase</a>. Select one <span class=\"tooltip01756\" data-tooltip-content=\"#tooltip_content01756\" data-tooltip-anchor=\"#tooltip_content01756\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 3\" of any <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective markers</a>. Until the start of your next turn, add 1 to the Attacks characteristic of models in that unit, and when resolving an attack made against that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> (excluding <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saves</a>).",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "SANCTION OF THE BLACK VAULT",
				type: "Requisition",
				cp_cost: "1",
				legend: "In missions with certain classes of extremis threat rating, the wardens of the Black Vault may grant an exceptional artefact to a veteran warrior of proven skill in the eradication of the xenos.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATHWATCH</span> keyword. Select one <span class=\"kwb\">DEATHWATCH</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Watch-Fortresses\">Relics of the Watch Fortresses</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Armour-10\">Artificer Armour</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-10\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-10\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Banebolts-of-Eryxia\">Banebolts of Eryxia</a>; <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Bolt-Cache\">Artificer Bolt Cache</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004846007",
				field10: "",
				keys: [
					"warlord",
					"deathwatch",
					"deathwatch",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATHWATCH</span> keyword. Select one <span class=\"kwb\">DEATHWATCH</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Watch-Fortresses\">Relics of the Watch Fortresses</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Armour-10\">Artificer Armour</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-10\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-10\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Banebolts-of-Eryxia\">Banebolts of Eryxia</a>; <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Bolt-Cache\">Artificer Bolt Cache</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "VICIOUS RIPOSTE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Every blow struck against a Black Templar is answered in kind. Even as they are laid low, their blades still lash out at the enemies of the divine Emperor.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the end of the phase, each time a model in that unit is destroyed by a melee attack and does not explode, roll one D6: on a 5+, after the attacking models unit has finished making its attacks, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> (a unit can suffer a maximum of 6 mortal wounds per phase as the result of this ability).",
				id: "000003817003",
				field10: "",
				keys: [
					"black templars core",
					"black",
					"templars",
					"core"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the end of the phase, each time a model in that unit is destroyed by a melee attack and does not explode, roll one D6: on a 5+, after the attacking models unit has finished making its attacks, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> (a unit can suffer a maximum of 6 mortal wounds per phase as the result of this ability).",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "CLOSE-RANGE BOLTER FIRE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "The ability to hose your foe in bolter fire while battling toe to toe has proven vital across countless trenches and battlements.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> type instead of their normal type (e.g. a <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> 2 bolt weapon becomes Pistol 2).",
				id: "000003693006",
				field10: "",
				keys: [
					"imperial fists core",
					"imperial fists character",
					"imperial",
					"fists",
					"core",
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> type instead of their normal type (e.g. a <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> 2 bolt weapon becomes Pistol 2).",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "TRANSHUMAN PHYSIOLOGY",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "Space Marines can fight through even the most grievous of wounds.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000002164005",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Being targeted"
				],
				descText: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "DEVOUT PUSH",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "With a zealous cry, the Black Templars press forward towards victory.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00790\" data-tooltip-content=\"#tooltip_content00790\" data-tooltip-anchor=\"#tooltip_content00790\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one of the following:<br><ul><li>If that unit is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> of up to 3\" with that unit. It must end this move either closer to the closest enemy unit or closer to the closest <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>. That unit cannot use this move to <a href=\"/wh40k9ed/the-rules/core-rules/#Embark\">embark</a> within a <a href=\"/wh40k9ed/the-rules/core-rules/#Transports\"><span class=\"kwb\">TRANSPORT</span></a> model.</li><li>If that unit is within Engagement Range of any enemy units, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in move</a> with that unit.</li></ul>",
				id: "000003817002",
				field10: "",
				keys: [
					"black templars core",
					"black templars character",
					"black",
					"templars",
					"core",
					"black",
					"templars",
					"character",
					"transport"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00790\" data-tooltip-content=\"#tooltip_content00790\" data-tooltip-anchor=\"#tooltip_content00790\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one of the following:<br><ul><li>If that unit is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> of up to 3\" with that unit. It must end this move either closer to the closest enemy unit or closer to the closest <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>. That unit cannot use this move to <a href=\"/wh40k9ed/the-rules/core-rules/#Embark\">embark</a> within a <a href=\"/wh40k9ed/the-rules/core-rules/#Transports\"><span class=\"kwb\">TRANSPORT</span></a> model.</li><li>If that unit is within Engagement Range of any enemy units, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in move</a> with that unit.</li></ul>",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "BUTCHERED QUARRY",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Many attempt to flee from the White Scars’ wrath like prey put to flight. Yet the huntsmen of Chogoris are not so easily evaded.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem when an enemy unit <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Falls Back</a> within 1\" of any <span class=\"tooltip00646\" data-tooltip-content=\"#tooltip_content00646\" data-tooltip-anchor=\"#tooltip_content00646\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01799\" data-tooltip-content=\"#tooltip_content01799\" data-tooltip-anchor=\"#tooltip_content01799\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">BIKER</span></span> units from your army, before it moves. Select one of those <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> units that is not within 1\" of any other enemy units; each model in the selected unit can make one attack with a melee weapon against that enemy unit as if they were within 1\" of it. After these attacks are made, if that enemy unit is not destroyed, it can then make its <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> move; after it has moved, each model in the selected unit can move up to 3\", so long as they end this move closer to that enemy unit and not within 1\" of any enemy units.",
				id: "000003618003",
				field10: "",
				keys: [
					"white scars infantry",
					"white scars biker",
					"white",
					"scars",
					"infantry",
					"white",
					"scars",
					"biker",
					"white",
					"scars"
				],
				activate: [
					"Enemy Movement phase"
				],
				descText: "Use this Stratagem when an enemy unit <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Falls Back</a> within 1\" of any <span class=\"tooltip00646\" data-tooltip-content=\"#tooltip_content00646\" data-tooltip-anchor=\"#tooltip_content00646\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01799\" data-tooltip-content=\"#tooltip_content01799\" data-tooltip-anchor=\"#tooltip_content01799\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">BIKER</span></span> units from your army, before it moves. Select one of those <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> units that is not within 1\" of any other enemy units; each model in the selected unit can make one attack with a melee weapon against that enemy unit as if they were within 1\" of it. After these attacks are made, if that enemy unit is not destroyed, it can then make its <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> move; after it has moved, each model in the selected unit can move up to 3\", so long as they end this move closer to that enemy unit and not within 1\" of any enemy units.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "CUNNING OF THE WOLF",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "The most successful hunts are those where the prey doesn’t know they are being hunted.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem during deployment. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Outflank\">Outflank</a> ability.",
				id: "000004630003",
				field10: "",
				keys: [
					"space wolves infantry",
					"space",
					"wolves",
					"infantry"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during deployment. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Outflank\">Outflank</a> ability.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "UNCOMPROMISING FIRE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Switching weapons to full auto, the Space Marines unleash a short-lived but inescapable hail of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				id: "000002164020",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "LET THEM COME",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Castellans of the Rift drill and train relentlessly, and have honed their reflexes to almost preternatural levels.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, if that unit was charged this turn, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000007313003",
				field10: "",
				keys: [
					"castellans of the rift core",
					"castellans",
					"of",
					"the",
					"rift",
					"core"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, if that unit was charged this turn, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "PIVOTAL MOMENT",
				type: "Epic Deed",
				cp_cost: "2",
				legend: "There comes a crucial juncture in many battles where opportunity presents a key enemy target for the perfect shot. Whether the culmination of patiently outmanoeuvring the enemy or sheer fate, if the moment is seized, it can turn the tide of whole wars, sending far larger forces into rout.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> <span class=\"kwb\">CORE</span> model from your army is selected to shoot. Until the end of the phase, each time that model makes a ranged attack against an enemy <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a>, a successful <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> inflicts a number of <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a> equal to the Damage characteristic of the weapon used for that attack, and the attack sequence ends.",
				id: "000006923009",
				field10: "",
				keys: [
					"vanguard",
					"spearhead",
					"core",
					"warlord"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> <span class=\"kwb\">CORE</span> model from your army is selected to shoot. Until the end of the phase, each time that model makes a ranged attack against an enemy <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a>, a successful <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> inflicts a number of <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a> equal to the Damage characteristic of the weapon used for that attack, and the attack sequence ends.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "GIFT OF THE PHALANX",
				type: "Requisition",
				cp_cost: "1",
				legend: "It is not unheard of for especially accomplished Imperial Fists Sergeants to be granted an artefact from the Phalanx’s Reclusiam.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Imperial-Fists-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-4\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-4\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fist-of-Terra\">Fist of Terra</a>; <a href=\"/wh40k9ed/factions/space-marines/#Gatebreaker-Bolts\">Gatebreaker Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003693013",
				field10: "",
				keys: [
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Imperial-Fists-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-4\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-4\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fist-of-Terra\">Fist of Terra</a>; <a href=\"/wh40k9ed/factions/space-marines/#Gatebreaker-Bolts\">Gatebreaker Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "CAST OUT THY BLACKENED SOUL",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Daemonic possession gives each battle-brother of the Exorcists a personal revelation about the nature of daemonkind, and with this knowledge they banish their foe.",
				source_id: "000000152",
				subfaction_id: "CHES",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is selected to shoot, or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span> or <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span> unit from your army is selected to fight. Select one enemy <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">DAEMON</span> unit within 12\" of that unit. Until the end of the phase, each time a model in that friendly unit makes an attack against that enemy unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000005294002",
				field10: "",
				keys: [
					"exorcists core",
					"exorcists character",
					"exorcists",
					"core",
					"exorcists",
					"character",
					"exorcists",
					"core",
					"exorcists",
					"character",
					"chaos",
					"daemon"
				],
				activate: [
					"Shooting phase",
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is selected to shoot, or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span> or <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span> unit from your army is selected to fight. Select one enemy <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">DAEMON</span> unit within 12\" of that unit. Until the end of the phase, each time a model in that friendly unit makes an attack against that enemy unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Exorcists"
			},
			{
				faction_id: "SM",
				name: "KILLING BLOW",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When their prey is bleeding out, the Wolfspear strike hardest to deliver the killing blow.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack, if the target of that attack was below <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Half Strength</a> when it was selected as the target, or if the target has a <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Starting Strength</a> of 1 and had half or less of its wounds remaining when it was selected as the target, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000005986003",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Shooting phase",
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack, if the target of that attack was below <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Half Strength</a> when it was selected as the target, or if the target has a <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Starting Strength</a> of 1 and had half or less of its wounds remaining when it was selected as the target, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "COGITATED MARTYRDOM",
				type: "Requisition",
				cp_cost: "1",
				legend: "It is not a difficult sum for a warrior of the Iron Hands to cogitate, that his commanding officers’ lives are worth more to the Imperium than his own.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, when a friendly <span class=\"tooltip01760\" data-tooltip-content=\"#tooltip_content01760\" data-tooltip-anchor=\"#tooltip_content01760\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">CHARACTER</span></span> model (excluding <span class=\"kwb\">VEHICLE</span> models) within 3\" of that unit would lose any wounds as a result of an attack made against that model, that unit can attempt to intercept that attack. Roll one D6 before any rolls to ignore wounds (e.g. <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands:-The-Flesh-is-Weak\">The Flesh is Weak</a>, Adamantine Mantle etc.) are made; on a 2+ that model does not lose those wounds and that unit suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> for each of those wounds. Only one attempt can be made to intercept each attack.",
				id: "000003672012",
				field10: "",
				keys: [
					"iron hands infantry",
					"iron hands character",
					"iron",
					"hands",
					"infantry",
					"iron",
					"hands",
					"character",
					"vehicle"
				],
				activate: [
					"Shooting phase",
					"Enemy Shooting phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, when a friendly <span class=\"tooltip01760\" data-tooltip-content=\"#tooltip_content01760\" data-tooltip-anchor=\"#tooltip_content01760\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">CHARACTER</span></span> model (excluding <span class=\"kwb\">VEHICLE</span> models) within 3\" of that unit would lose any wounds as a result of an attack made against that model, that unit can attempt to intercept that attack. Roll one D6 before any rolls to ignore wounds (e.g. <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands:-The-Flesh-is-Weak\">The Flesh is Weak</a>, Adamantine Mantle etc.) are made; on a 2+ that model does not lose those wounds and that unit suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> for each of those wounds. Only one attempt can be made to intercept each attack.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "FIGHT AS BROTHERS",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Having spent years relying on their trusted brothers, when Emperor’s Spears fight together, little can stay their blows.",
				source_id: "000000151",
				subfaction_id: "CHEM",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01752\" data-tooltip-content=\"#tooltip_content01752\" data-tooltip-anchor=\"#tooltip_content01752\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to fight. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that unit and one or more other friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> units. Until the end of the phase, each time a friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> unit makes a melee attack against that unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000005265003",
				field10: "",
				keys: [
					"emperor’s spears infantry",
					"emperor’s",
					"spears",
					"infantry",
					"emperor’s",
					"spears",
					"infantry",
					"emperor’s",
					"spears",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01752\" data-tooltip-content=\"#tooltip_content01752\" data-tooltip-anchor=\"#tooltip_content01752\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to fight. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that unit and one or more other friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> units. Until the end of the phase, each time a friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> unit makes a melee attack against that unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Emperor’s Spears"
			},
			{
				faction_id: "SM",
				name: "ANGEL ASCENDANT",
				type: "Requisition",
				cp_cost: "1",
				legend: "Those who exemplify the finest qualities of the Blood Angels will be entrusted to bear powerful wargear into battle.",
				source_id: "000000021",
				subfaction_id: "CHBA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLOOD</span> <span class=\"kwb\">ANGELS</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Blood-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <span class=\"kwb\">CHARACTER</span> model: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-7\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-7\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fleshrender-Grenades\">Fleshrender Grenades</a>; <a href=\"/wh40k9ed/factions/space-marines/#Quake-Bolts\">Quake Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004543010",
				field10: "",
				keys: [
					"blood",
					"angels",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLOOD</span> <span class=\"kwb\">ANGELS</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Blood-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <span class=\"kwb\">CHARACTER</span> model: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-7\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-7\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fleshrender-Grenades\">Fleshrender Grenades</a>; <a href=\"/wh40k9ed/factions/space-marines/#Quake-Bolts\">Quake Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Blood Angels"
			},
			{
				faction_id: "SM",
				name: "STRENGTH OF CONVICTION",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The presence of these black-clad killers can force any challenger to back down, lest the wrath of the Emperor be visited upon them.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the start of your next Command phase, that unit has the <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Secured\">Objective Secured</a> ability.",
				id: "000003817012",
				field10: "",
				keys: [
					"black templars core",
					"black",
					"templars",
					"core"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the start of your next Command phase, that unit has the <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Secured\">Objective Secured</a> ability.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "STRENGTH OF THE PRIMARCH",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When facing the largest enemies, Vulkan’s sons draw upon their gene-sire’s titanic might, their strength terrible to behold.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">SALAMANDERS</span> unit from your army. Until the end of that phase, add 1 to the Strength characteristic of models in that unit, and when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 double the Damage characteristic of that weapon for that attack.",
				id: "000003699004",
				field10: "",
				keys: [
					"salamanders"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">SALAMANDERS</span> unit from your army. Until the end of that phase, add 1 to the Strength characteristic of models in that unit, and when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 double the Damage characteristic of that weapon for that attack.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "THE CRUCIBLE OF BATTLE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Only where the battle is fiercest and the enemy can be faced eye to eye can the Salamanders truly be tested.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00655\" data-tooltip-content=\"#tooltip_content00655\" data-tooltip-anchor=\"#tooltip_content00655\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00838\" data-tooltip-content=\"#tooltip_content00838\" data-tooltip-anchor=\"#tooltip_content00838\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000003699003",
				field10: "",
				keys: [
					"salamanders core",
					"salamanders character",
					"salamanders",
					"core",
					"salamanders",
					"character"
				],
				activate: [
					"Shooting phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00655\" data-tooltip-content=\"#tooltip_content00655\" data-tooltip-anchor=\"#tooltip_content00655\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00838\" data-tooltip-content=\"#tooltip_content00838\" data-tooltip-anchor=\"#tooltip_content00838\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "UNFAILING NERVE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "The Castellans hold firm in the face of charging foes, waiting until they can see the white of their eyes before opening fire.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a> that targets a unit within half range, improve the Armour Penetration characteristic of that attack by 1.",
				id: "000007313002",
				field10: "",
				keys: [
					"castellans of the rift core",
					"castellans",
					"of",
					"the",
					"rift",
					"core"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a> that targets a unit within half range, improve the Armour Penetration characteristic of that attack by 1.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "STRANGLEHOLD",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "By the time the enemy engages the Raven Guard, their rear lines are already in the talon-grip of the Chapter’s covert vanguard, choking them off from vital battlefield support.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				id: "000003659004",
				field10: "",
				keys: [
					"raven guard scout",
					"raven guard phobos",
					"raven",
					"guard",
					"scout",
					"raven",
					"guard",
					"phobos"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "REJECT THE FLESH, EMBRACE THE MACHINE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "By trusting in the ironclad gifts of the Omnissiah that stud their flesh, the Iron Hands can withstand even the most punishing attacks of their enemies.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem in any phase, when an <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is chosen as the target for an attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6, adding 1 to the result if that model has the <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Warlord-Traits\">All Flesh is Weakness</a> Warlord Trait. On a 5+ that wound is not lost.",
				id: "000003672009",
				field10: "",
				keys: [
					"iron hands infantry",
					"iron",
					"hands",
					"infantry"
				],
				activate: [
					"Being targeted"
				],
				descText: "Use this Stratagem in any phase, when an <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is chosen as the target for an attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6, adding 1 to the result if that model has the <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Warlord-Traits\">All Flesh is Weakness</a> Warlord Trait. On a 5+ that wound is not lost.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "STEADY ADVANCE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "A measured advance allows Space Marines to unleash a steady stream of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				id: "000002164021",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "FAVOUR OF THE RAVENSPIRE",
				type: "Requisition",
				cp_cost: "1",
				legend: "In times of great need, the Raven Guard issue their precious relics to whichever battle-brothers are best placed to employ them, paying little regard to matters of rank.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-2\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-2\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Silentus-Pistol\">Silentus Pistol</a>; <a href=\"/wh40k9ed/factions/space-marines/#Korvidari-Bolts\">Korvidari Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003659015",
				field10: "",
				keys: [
					"raven",
					"guard",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-2\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-2\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Silentus-Pistol\">Silentus Pistol</a>; <a href=\"/wh40k9ed/factions/space-marines/#Korvidari-Bolts\">Korvidari Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "REVERED REPOSITORIES",
				type: "Requisition",
				cp_cost: "1",
				legend: "The crusade ships of the Black Templars maintain vast armouries of blessed weapons and sacred artefacts.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Eternal-Crusade-1\">Relics of the Eternal Crusade</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Witchseeker-Bolts\">Witchseeker Bolts</a>; <a href=\"/wh40k9ed/factions/space-marines/#Sword-of-Judgement\">Sword of Judgement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Skull-of-the-Cacodominus-Aura-\">Skull of the Cacodominus</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-6\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-6\">Digital Weapons</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000003817007",
				field10: "",
				keys: [
					"black",
					"templars",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Eternal-Crusade-1\">Relics of the Eternal Crusade</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Witchseeker-Bolts\">Witchseeker Bolts</a>; <a href=\"/wh40k9ed/factions/space-marines/#Sword-of-Judgement\">Sword of Judgement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Skull-of-the-Cacodominus-Aura-\">Skull of the Cacodominus</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-6\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-6\">Digital Weapons</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "SMOKESCREEN",
				type: "Wargear",
				cp_cost: "1",
				legend: "Throwing down a hail of smoke grenades or deploying their smoke launchers, the Space Marines screen themselves from the enemy.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01721\" data-tooltip-content=\"#tooltip_content01721\" data-tooltip-anchor=\"#tooltip_content01721\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">SMOKESCREEN</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from that attack's <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000002164035",
				field10: "",
				keys: [
					"adeptus astartes smokescreen",
					"adeptus",
					"astartes",
					"smokescreen"
				],
				activate: [
					"Enemy Shooting phase"
				],
				descText: "Use this Stratagem in your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01721\" data-tooltip-content=\"#tooltip_content01721\" data-tooltip-anchor=\"#tooltip_content01721\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">SMOKESCREEN</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from that attack's <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "ORISON CULT",
				type: "Requisition",
				cp_cost: "1/2",
				legend: "The Chapter houses a series of cults, each a proud sub-sect with traditions and associations concerning the role of a battle-brother on the battlefield.",
				source_id: "000000152",
				subfaction_id: "CHES",
				description: "Use this Stratagem before the battle, when you are mustering your army, if every unit in your army has the <span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> keyword (excluding <span class=\"kwb\">AGENT</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">IMPERIUM</span> and <span class=\"kwb\">UNALIGNED</span> units). Select one <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a>. Once per battle, in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, you can select that combat doctrine to be active for that unit instead of any other combat doctrine until the start of your next Command phase. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005294003",
				field10: "",
				keys: [
					"exorcists core",
					"exorcists character",
					"adeptus",
					"astartes",
					"agent",
					"of",
					"the",
					"imperium",
					"unaligned",
					"exorcists",
					"core",
					"exorcists",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if every unit in your army has the <span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> keyword (excluding <span class=\"kwb\">AGENT</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">IMPERIUM</span> and <span class=\"kwb\">UNALIGNED</span> units). Select one <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a>. Once per battle, in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, you can select that combat doctrine to be active for that unit instead of any other combat doctrine until the start of your next Command phase. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Exorcists"
			},
			{
				faction_id: "SM",
				name: "TELEPORTARIUM",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Utilising the arcane secrets of teleportation technology, the Deathwatch burst from nowhere to attack.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem during deployment. Select one <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01748\" data-tooltip-content=\"#tooltip_content01748\" data-tooltip-anchor=\"#tooltip_content01748\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">DREADNOUGHT</span></span> or <span class=\"tooltip00411\" data-tooltip-content=\"#tooltip_content00411\" data-tooltip-anchor=\"#tooltip_content00411\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">BIKER</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Teleport-Strike-1\">Teleport Strike</a> ability. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
				id: "000004846015",
				field10: "",
				keys: [
					"deathwatch infantry",
					"deathwatch dreadnought",
					"deathwatch biker",
					"deathwatch",
					"infantry",
					"deathwatch",
					"dreadnought",
					"deathwatch",
					"biker"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during deployment. Select one <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01748\" data-tooltip-content=\"#tooltip_content01748\" data-tooltip-anchor=\"#tooltip_content01748\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">DREADNOUGHT</span></span> or <span class=\"tooltip00411\" data-tooltip-content=\"#tooltip_content00411\" data-tooltip-anchor=\"#tooltip_content00411\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">BIKER</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Teleport-Strike-1\">Teleport Strike</a> ability. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "HUNTERS’ FUSILLADE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "White Scars train tirelessly to accurately fire even the heaviest weapons whilst racing into battle.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem when a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit from your army <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advances</a>. Until the end of the turn, <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy weapons</a> and <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire weapons</a> models in that unit are equipped with are treated as <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> (e.g. a Rapid Fire 2 weapon is treated as an Assault 2 weapon).",
				id: "000003618008",
				field10: "",
				keys: [
					"white",
					"scars"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem when a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit from your army <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advances</a>. Until the end of the turn, <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy weapons</a> and <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire weapons</a> models in that unit are equipped with are treated as <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> (e.g. a Rapid Fire 2 weapon is treated as an Assault 2 weapon).",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "BOLTER DRILL",
				type: "Crimson Fists Stratagem",
				cp_cost: "1",
				legend: "The Crimson Fists maintain strict fire discipline at all times, standing shoulder to shoulder with their battle-brothers as they unleash devastatingly accurate volleys of bolter fire into the foe.",
				source_id: "000000069",
				subfaction_id: "",
				description: "Use this Stratagem just before a <span class=\"tooltip01737\" data-tooltip-content=\"#tooltip_content01737\" data-tooltip-anchor=\"#tooltip_content01737\"><span class=\"kwb\">CRIMSON</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Until the end of the phase, each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6+ for a model from that unit firing a bolt weapon, that model can immediately make another hit roll using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks). For the purposes of this Stratagem, a bolt weapon is any weapon profile whose name includes the word 'bolt’ (e.g. boltgun, bolt rifle, heavy' bolter, boltstorm gauntlet). Duty’s Burden and <a href=\"/wh40k9ed/factions/space-marines/Pedro-Kantor\">Pedro Kantor’s</a> Dorn’s Arrow are also bolt weapons.",
				id: "000003453002",
				field10: "",
				keys: [
					"crimson fists infantry",
					"crimson",
					"fists",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem just before a <span class=\"tooltip01737\" data-tooltip-content=\"#tooltip_content01737\" data-tooltip-anchor=\"#tooltip_content01737\"><span class=\"kwb\">CRIMSON</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Until the end of the phase, each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6+ for a model from that unit firing a bolt weapon, that model can immediately make another hit roll using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks). For the purposes of this Stratagem, a bolt weapon is any weapon profile whose name includes the word 'bolt’ (e.g. boltgun, bolt rifle, heavy' bolter, boltstorm gauntlet). Duty’s Burden and <a href=\"/wh40k9ed/factions/space-marines/Pedro-Kantor\">Pedro Kantor’s</a> Dorn’s Arrow are also bolt weapons."
			},
			{
				faction_id: "SM",
				name: "MARKED FOR COMMAND",
				type: "Requisition",
				cp_cost: "1",
				legend: "On occasion, a junior-ranking leader will demonstrate ability expected only of those of much loftier rank. Such individuals are highly rewarded, and marked for greater things.",
				source_id: "000000023",
				subfaction_id: "CHDA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> Ravenwing Huntmaster or Knight Master model or a <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Dark-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-8\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-8\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Atonement\">Atonement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Bolts-of-Judgement\">Bolts of Judgement</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004566009",
				field10: "",
				keys: [
					"dark",
					"angels",
					"dark",
					"angels",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> Ravenwing Huntmaster or Knight Master model or a <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Dark-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-8\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-8\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Atonement\">Atonement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Bolts-of-Judgement\">Bolts of Judgement</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Dark Angels"
			},
			{
				faction_id: "SM",
				name: "UNBROKEN AND UNBOWED",
				type: "Battle Tactic",
				cp_cost: "2/3",
				legend: "Even when under extremely heavy fire, the Castellans of the Rift hold their ground.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01736\" data-tooltip-content=\"#tooltip_content01736\" data-tooltip-anchor=\"#tooltip_content01736\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected as the target of an attack. While that unit is within range of an <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>, each time a model in that unit would lose a wound, roll one D6: on a 5+, that wound is not lost.<br><br>If that unit has 5 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
				id: "000007313004",
				field10: "",
				keys: [
					"castellans of the rift core infantry",
					"castellans",
					"of",
					"the",
					"rift",
					"core",
					"infantry"
				],
				activate: [
					"Enemy Shooting phase",
					"Being targeted"
				],
				descText: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01736\" data-tooltip-content=\"#tooltip_content01736\" data-tooltip-anchor=\"#tooltip_content01736\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected as the target of an attack. While that unit is within range of an <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>, each time a model in that unit would lose a wound, roll one D6: on a 5+, that wound is not lost.<br><br>If that unit has 5 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "BOLTER DRILL",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "The sons of Dorn maintain strict fire discipline, standing shoulder to shoulder as they unleash devastating volleys of bolt rounds into the foe.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, when resolving an attack made by a model in that unit with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a>, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 scores 1 additional hit.",
				id: "000003693007",
				field10: "",
				keys: [
					"imperial fists core",
					"imperial fists character",
					"imperial",
					"fists",
					"core",
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, when resolving an attack made by a model in that unit with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a>, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 scores 1 additional hit.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "MASTER ARTISANS",
				type: "Requisition",
				cp_cost: "1",
				legend: "Even amongst the rank and file of the Salamanders, artefacts of peerless craftsmanship can be found.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">SALAMANDERS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following Chapter Relics, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-5\">Master-crafted weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-5\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Drakeblade\">Drakeblade</a>, <a href=\"/wh40k9ed/factions/space-marines/#Dragonrage-Bolts\">Dragonrage Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003699015",
				field10: "",
				keys: [
					"salamanders",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">SALAMANDERS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following Chapter Relics, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-5\">Master-crafted weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-5\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Drakeblade\">Drakeblade</a>, <a href=\"/wh40k9ed/factions/space-marines/#Dragonrage-Bolts\">Dragonrage Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "AUSPEX SCAN",
				type: "Wargear",
				cp_cost: "2",
				legend: "Nearby motion and radiation signatures are detected by a handheld device, forewarning the bearer of ambushes.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				id: "000002164027",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Enemy Movement phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "GENE-WROUGHT MIGHT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Blessed with incredible strength, Primaris Space Marines deliver blows that inflict terrifying damage.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				id: "000002164007",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "SELF SACRIFICE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "The Salamanders are amongst the most noble and selfless of the Adeptus Astartes, laying down their lives in others’ defence.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem at the start of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit that contains 5 or more models from your army that is not within 1\" of any enemy units, and then select one other <span class=\"kwb\">INFANTRY</span> unit from your army that is wholly within 6\" of the selected unit. Until the end of the phase, your opponent cannot target the second unit you selected unless that unit is the closest enemy unit to the firing model and visible to it, or it is no longer wholly within 6\" of the first unit you selected. In addition, until the end of the phase, the first unit you selected is always an eligible target for enemy shooting attacks provided it is within range and is visible to the firing model (i.e. it can be targeted even whilst under the effects of any rules that would prevent it from being targeted, such as the <a href=\"/wh40k9ed/factions/space-marines/#Obscuration-Discipline\">Shrouding</a> psychic power).",
				id: "000003699008",
				field10: "",
				keys: [
					"salamanders infantry",
					"salamanders",
					"infantry",
					"infantry"
				],
				activate: [
					"Enemy Shooting phase"
				],
				descText: "Use this Stratagem at the start of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit that contains 5 or more models from your army that is not within 1\" of any enemy units, and then select one other <span class=\"kwb\">INFANTRY</span> unit from your army that is wholly within 6\" of the selected unit. Until the end of the phase, your opponent cannot target the second unit you selected unless that unit is the closest enemy unit to the firing model and visible to it, or it is no longer wholly within 6\" of the first unit you selected. In addition, until the end of the phase, the first unit you selected is always an eligible target for enemy shooting attacks provided it is within range and is visible to the firing model (i.e. it can be targeted even whilst under the effects of any rules that would prevent it from being targeted, such as the <a href=\"/wh40k9ed/factions/space-marines/#Obscuration-Discipline\">Shrouding</a> psychic power).",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "PAIN IS A LESSON",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "To the Imperial Fists, pain is but another didactic tool, a reminder of what their forebears endured without complaint and which they, too, must weather unwavering.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in any phase, when an <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> unit from your army that is not a <span class=\"kwb\">VEHICLE</span> or <span class=\"kwb\">SERVITOR</span> is chosen as the target of an enemy attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6; on a 6 that wound is not lost.",
				id: "000003693005",
				field10: "",
				keys: [
					"imperial",
					"fists",
					"vehicle",
					"servitor"
				],
				activate: [
					"Any phase"
				],
				descText: "Use this Stratagem in any phase, when an <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> unit from your army that is not a <span class=\"kwb\">VEHICLE</span> or <span class=\"kwb\">SERVITOR</span> is chosen as the target of an enemy attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6; on a 6 that wound is not lost.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "INFILTRATORS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The Raven Guard are masters of infiltration, slipping unseen across the battlefield before striking from the shadows to annihilate their foes with gun and blade.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				id: "000003659002",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "SKOVAKARAH UHL ZAÛRN!",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "The battle cry of the Emperor’s Spears is the call that precedes their red work.",
				source_id: "000000151",
				subfaction_id: "CHEM",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01750\" data-tooltip-content=\"#tooltip_content01750\" data-tooltip-anchor=\"#tooltip_content01750\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01751\" data-tooltip-content=\"#tooltip_content01751\" data-tooltip-anchor=\"#tooltip_content01751\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army that made a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>, was charged or <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">performed a Heroic Intervention</a> this turn is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005265002",
				field10: "",
				keys: [
					"emperor’s spears core",
					"emperor’s spears character",
					"emperor’s",
					"spears",
					"core",
					"emperor’s",
					"spears",
					"character"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01750\" data-tooltip-content=\"#tooltip_content01750\" data-tooltip-anchor=\"#tooltip_content01750\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01751\" data-tooltip-content=\"#tooltip_content01751\" data-tooltip-anchor=\"#tooltip_content01751\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army that made a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>, was charged or <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">performed a Heroic Intervention</a> this turn is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Emperor’s Spears"
			},
			{
				faction_id: "SM",
				name: "STRIKE FROM THE SHADOWS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The deadliest strike comes always from the least expected quarter. So taught Corax.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				id: "000003659008",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "A DEADLY PRIZE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "If critical objectives look close to falling into enemy hands, the Raven Guard will often plant explosives to deny their capture.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				id: "000003659012",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"End of your turn"
				],
				descText: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "WIND-SWIFT",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "It is said on Chogoris that the sons of the Khan ride the stormwinds themselves, racing swift and wrathful into war.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> after a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit (excluding <span class=\"tooltip01798\" data-tooltip-content=\"#tooltip_content01798\" data-tooltip-anchor=\"#tooltip_content01798\"><span class=\"kwb\">ARTILLERY</span></span>) from your army has made a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> or has <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fallen Back</a>. That unit can make an <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> move. Until the end of the turn, that unit cannot shoot, <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">declare a charge</a> or attempt to <a href=\"/wh40k9ed/the-rules/core-rules/#Manifesting-Psychic-Powers\">manifest</a> any psychic powers.",
				id: "000003618004",
				field10: "",
				keys: [
					"artillery",
					"white",
					"scars",
					"artillery"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> after a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit (excluding <span class=\"tooltip01798\" data-tooltip-content=\"#tooltip_content01798\" data-tooltip-anchor=\"#tooltip_content01798\"><span class=\"kwb\">ARTILLERY</span></span>) from your army has made a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> or has <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fallen Back</a>. That unit can make an <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> move. Until the end of the turn, that unit cannot shoot, <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">declare a charge</a> or attempt to <a href=\"/wh40k9ed/the-rules/core-rules/#Manifesting-Psychic-Powers\">manifest</a> any psychic powers.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "CHAMPION OF THE FEAST",
				type: "Requisition",
				cp_cost: "1",
				legend: "To triumph over the champions of other Imperial Fists successors requires a warrior of superlative skill and fortitude.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. Add 1 to that model’s Attacks and Wounds characteristics and improve that model’s Weapon Skill characteristic by 1. You can only use this Stratagem once.",
				id: "000003817009",
				field10: "",
				keys: [
					"black",
					"templars"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. Add 1 to that model’s Attacks and Wounds characteristics and improve that model’s Weapon Skill characteristic by 1. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "LAY LOW THE TYRANTS",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Those who would abuse their strength to oppress the weak and humble are amongst the Raven Guard’s most favoured prey.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000003659006",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven guard biker",
					"raven",
					"guard",
					"infantry",
					"raven",
					"guard",
					"biker",
					"character",
					"vehicle",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "OCULAR NETWORKING",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When fighting as part of Vanguard Spearhead, Space Marines utilise the sophisticated ocular systems of their Phobos armour to greater efficacy. Sharing combat data across inter-squad networks, they identify weaknesses in even the most resilient foe, deficiencies which precise attacks can take advantage of.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				id: "000006923003",
				field10: "",
				keys: [
					"vanguard",
					"spearhead",
					"monster",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase",
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "DISPERSAL PROTOCOLS",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Vanguard squads are trained to rapidly disengage from their foe, moving to new positions before attacking once more.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				id: "000006923004",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "CRUSADER’S WRATH",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "At a critical point in the battle, the Black Templar host channels its fervour into their strikes, breaking the back of the enemy force in a hatred-fuelled flurry of blows.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault doctrine</a> is active for your army. Until the start of your next Command phase, each time a <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army makes an attack with a <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Select-Weapon\">Melee</a> weapon, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 1. This is cumulative with the bonus from the Assault Doctrine. You can only use this Stratagem once.",
				id: "000003817004",
				field10: "",
				keys: [
					"black",
					"templars"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault doctrine</a> is active for your army. Until the start of your next Command phase, each time a <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army makes an attack with a <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Select-Weapon\">Melee</a> weapon, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 1. This is cumulative with the bonus from the Assault Doctrine. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "BESTIAL NATURE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Every son of Russ feels the instinctive feral impulses flood through them in battle, a howling and vicious urge to hunt.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a> if a <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a> is active for your army. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> or <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> unit from your army. Until the start of your next Command phase, that unit gains the bonus of the Assault Doctrine instead of the active combat doctrine.",
				id: "000004630014",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves cavalry",
					"space wolves biker",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"cavalry",
					"space",
					"wolves",
					"biker"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a> if a <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a> is active for your army. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> or <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> unit from your army. Until the start of your next Command phase, that unit gains the bonus of the Assault Doctrine instead of the active combat doctrine.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "MARKSMAN TARGET-TRACKER",
				type: "Wargear",
				cp_cost: "2",
				legend: "Specialised target acquisition devices coupled with their bearer's exceptional marksman instincts enable their squad to identify key enemy combatants, feeding targeting data directly to their visors.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when, a <span class=\"tooltip01797\" data-tooltip-content=\"#tooltip_content01797\" data-tooltip-anchor=\"#tooltip_content01797\"><span class=\"kwb\">MARKSMAN</span> <span class=\"kwb\">TARGET-TRACKER</span></span> unit from your army is selected to shoot. Until the end of the phase, each time you select a target for an occulus bolt carbine a model in that unit is equipped with, you can ignore the <a href=\"/wh40k9ed/the-rules/core-rules/#Look-out-Sir\">Look Out, Sir</a> rule.",
				id: "000006923007",
				field10: "",
				keys: [
					"marksman target-tracker",
					"marksman",
					"target-tracker"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when, a <span class=\"tooltip01797\" data-tooltip-content=\"#tooltip_content01797\" data-tooltip-anchor=\"#tooltip_content01797\"><span class=\"kwb\">MARKSMAN</span> <span class=\"kwb\">TARGET-TRACKER</span></span> unit from your army is selected to shoot. Until the end of the phase, each time you select a target for an occulus bolt carbine a model in that unit is equipped with, you can ignore the <a href=\"/wh40k9ed/the-rules/core-rules/#Look-out-Sir\">Look Out, Sir</a> rule.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "TACTICAL AUGURY",
				type: "Wargear",
				cp_cost: "1",
				legend: "Vanguard Spearheads utilise advanced scanning equipment and orbital augurs to grant them an awareness of the battle-sphere's layout few forces can match. With such tactical advantage, they make pinpoint shots into enemy strongpoints and through dense defence lines, driving the foe out of cover and onto the blades of the Spearhead's encircling executioners.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				id: "000006923008",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "THE EMPEROR’S WILL",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "It is the divine command of the God-Emperor that the Black Templars bring ruin to Humanity’s foes. In battle they are never still, surging towards the enemy, bolters blazing.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01723\" data-tooltip-content=\"#tooltip_content01723\" data-tooltip-anchor=\"#tooltip_content01723\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn. Until the end of the phase:<br><ul><li>That unit is still eligible to shoot with, but you can only make attacks using <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a>, <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> when you select that unit to shoot with.</li><li>Models from that unit do not suffer the penalty incurred to their <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for firing Assault weapons.</li></ul>",
				id: "000003817013",
				field10: "",
				keys: [
					"black templars infantry",
					"black",
					"templars",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01723\" data-tooltip-content=\"#tooltip_content01723\" data-tooltip-anchor=\"#tooltip_content01723\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn. Until the end of the phase:<br><ul><li>That unit is still eligible to shoot with, but you can only make attacks using <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a>, <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> when you select that unit to shoot with.</li><li>Models from that unit do not suffer the penalty incurred to their <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for firing Assault weapons.</li></ul>",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "THANE OF THE RETINUE",
				type: "Requisition",
				cp_cost: "1",
				legend: "The lords of the Fang are stern but generous masters, who may reward a worthy warrior with an artefact of great power.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"kwb\">WARLORD</span> has the <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> keyword. Select one <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> model from your army that has the word ‘Sergeant’ or ‘Pack Leader’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Space-Wolves-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-9\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-9\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Frost-Weapon\">Frost Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Morkai-s-Teeth-Bolts\">Morkai’s Teeth Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004630012",
				field10: "",
				keys: [
					"warlord",
					"space",
					"wolves",
					"space",
					"wolves",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"kwb\">WARLORD</span> has the <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> keyword. Select one <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> model from your army that has the word ‘Sergeant’ or ‘Pack Leader’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Space-Wolves-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-9\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-9\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Frost-Weapon\">Frost Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Morkai-s-Teeth-Bolts\">Morkai’s Teeth Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "GUERILLA TACTICS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "At the opportune moment, Space Marine infiltration units slip away from battle, only to relocate and strike the foe again.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				id: "000002164025",
				field10: "",
				keys: [
					"phobos",
					"phobos"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "ON THE SCENT",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Sensing when an enemy is weakened and fearing for its survival, the Wolfspear emerge from the shadows for a rapid strike.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that had models destroyed or lost any wounds this turn. Until the end of the turn, each time a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made by a friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, if that enemy unit was selected as a target of that charge, you can re-roll the charge roll.",
				id: "000005986004",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Charge phase"
				],
				descText: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that had models destroyed or lost any wounds this turn. Until the end of the turn, each time a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made by a friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, if that enemy unit was selected as a target of that charge, you can re-roll the charge roll.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "LINE UNBREAKABLE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Many foes have charged the Dark Angels’ lines, only to be met by an unbreakable wall of ceramite.",
				source_id: "000000023",
				subfaction_id: "CHDA",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01031\" data-tooltip-content=\"#tooltip_content01031\" data-tooltip-anchor=\"#tooltip_content01031\"><span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, that unit can only be selected as a target for melee attacks if the attacking model is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of it (note that this means that enemy models that are not within Engagement Range but are within 1/2\" of a model from their own unit that is itself within 1/2\" of this <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span> unit cannot target it with melee attacks this phase).",
				id: "000004566006",
				field10: "",
				keys: [
					"dark angels infantry",
					"dark",
					"angels",
					"infantry",
					"dark",
					"angels",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01031\" data-tooltip-content=\"#tooltip_content01031\" data-tooltip-anchor=\"#tooltip_content01031\"><span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, that unit can only be selected as a target for melee attacks if the attacking model is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of it (note that this means that enemy models that are not within Engagement Range but are within 1/2\" of a model from their own unit that is itself within 1/2\" of this <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span> unit cannot target it with melee attacks this phase).",
				subfaction: "Dark Angels"
			},
			{
				faction_id: "SM",
				name: "KHAN’S CHAMPION",
				type: "Requisition",
				cp_cost: "1",
				legend: "To earn the respect and praise of your khan is to be gifted superlative tools of war to wield in their name.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#White-Scars-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-1\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-1\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Headtaker-s-Trophies\">Headtaker’s Trophies</a>; <a href=\"/wh40k9ed/factions/space-marines/#Stormwrath-Bolts\">Stormwrath Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003618007",
				field10: "",
				keys: [
					"white",
					"scars",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#White-Scars-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-1\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-1\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Headtaker-s-Trophies\">Headtaker’s Trophies</a>; <a href=\"/wh40k9ed/factions/space-marines/#Stormwrath-Bolts\">Stormwrath Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "THE SWORDSMAN’S STRIKE",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "The Silver Templars view all battles, no matter their scale, as a duel between two gestalt opposed combatants. Their battle strategies thus focus on how best to deliver the killing blow that swiftly and decisively ends that duel.",
				source_id: "000000149",
				subfaction_id: "CHST",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01766\" data-tooltip-content=\"#tooltip_content01766\" data-tooltip-anchor=\"#tooltip_content01766\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005253002",
				field10: "",
				keys: [
					"silver templars primaris core",
					"silver",
					"templars",
					"primaris",
					"core",
					"silver",
					"templars",
					"primaris",
					"core",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01766\" data-tooltip-content=\"#tooltip_content01766\" data-tooltip-anchor=\"#tooltip_content01766\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Silver Templars"
			},
			{
				faction_id: "SM",
				name: "SONS OF GUILLIMAN",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Ultramarines fight as the Codex dictates, eschewing individual glory to function as a disciplined, cohesive killing machine.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem when an <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to shoot with in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. If that unit has the Troops <a href=\"/wh40k9ed/the-rules/core-rules/#Battlefield-Role\">Battlefield Role</a>, until the end of that phase, when resolving an attack made by that unit, you can re-roll a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. Otherwise, until the end of that phase, when resolving an attack made by that unit, you can re-roll a hit roll of 1.",
				id: "000003607007",
				field10: "",
				keys: [
					"ultramarines infantry",
					"ultramarines biker",
					"ultramarines",
					"infantry",
					"ultramarines",
					"biker"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase",
					"Shooting phase"
				],
				descText: "Use this Stratagem when an <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to shoot with in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. If that unit has the Troops <a href=\"/wh40k9ed/the-rules/core-rules/#Battlefield-Role\">Battlefield Role</a>, until the end of that phase, when resolving an attack made by that unit, you can re-roll a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. Otherwise, until the end of that phase, when resolving an attack made by that unit, you can re-roll a hit roll of 1.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "TRACK AND HUNT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "No foe can escape the hunt, nor hide from the master trackers of the Wolfspear.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, then select one enemy unit within 24\" of it. Until the end of your turn, each time a model in that unit makes an attack against that enemy unit, that enemy unit does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> for that attack.",
				id: "000005986002",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, then select one enemy unit within 24\" of it. Until the end of your turn, each time a model in that unit makes an attack against that enemy unit, that enemy unit does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> for that attack.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "STAND YOUR GROUND",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Such is their famed endurance that the Salamanders are able to stand firm amidst storms of small-arms fire and lesser blows.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem in any phase, when a <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not a <span class=\"tooltip01765\" data-tooltip-content=\"#tooltip_content01765\" data-tooltip-anchor=\"#tooltip_content01765\"><span class=\"kwb\">SERVITOR</span></span> and did not <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> in this phase or your previous <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> is chosen as the target for an attack. Until the end of that phase, when resolving an attack made with a weapon that has a Damage characteristic of 1 against a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a>. This does not affect <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saving throws</a>.",
				id: "000003699011",
				field10: "",
				keys: [
					"salamanders infantry",
					"servitor",
					"salamanders",
					"infantry",
					"servitor"
				],
				activate: [
					"Any phase"
				],
				descText: "Use this Stratagem in any phase, when a <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not a <span class=\"tooltip01765\" data-tooltip-content=\"#tooltip_content01765\" data-tooltip-anchor=\"#tooltip_content01765\"><span class=\"kwb\">SERVITOR</span></span> and did not <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> in this phase or your previous <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> is chosen as the target for an attack. Until the end of that phase, when resolving an attack made with a weapon that has a Damage characteristic of 1 against a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a>. This does not affect <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saving throws</a>.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "HEALING BALMS",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Learned in arcane biomechanics and chirurgery, Wolf Priests apply their rough surgery, shamanistic rites and medicinal balms to drag warriors back from the gates of Morkai’s realm of death.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> model from your army within 3\" of a friendly <span class=\"tooltip01768\" data-tooltip-content=\"#tooltip_content01768\" data-tooltip-anchor=\"#tooltip_content01768\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">WOLF</span> <span class=\"kwb\">PRIEST</span></span> to be healed. That model regains up to D3 lost wounds. Each model can only be healed once per turn.",
				id: "000004630006",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves biker",
					"space wolves cavalry",
					"space wolves wolf priest",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"biker",
					"space",
					"wolves",
					"cavalry",
					"space",
					"wolves",
					"wolf",
					"priest"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> model from your army within 3\" of a friendly <span class=\"tooltip01768\" data-tooltip-content=\"#tooltip_content01768\" data-tooltip-anchor=\"#tooltip_content01768\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">WOLF</span> <span class=\"kwb\">PRIEST</span></span> to be healed. That model regains up to D3 lost wounds. Each model can only be healed once per turn.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "SCION OF THE FORGE",
				type: "Requisition",
				cp_cost: "1",
				legend: "The Iron Hands do not lack for optimised combat armaments, distributed to the most logical bearers before battle begins.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-3\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-3\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Teeth-of-Mars\">Teeth of Mars</a>, <a href=\"/wh40k9ed/factions/space-marines/#Haywire-Bolts\">Haywire Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003672008",
				field10: "",
				keys: [
					"iron",
					"hands",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-3\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-3\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Teeth-of-Mars\">Teeth of Mars</a>, <a href=\"/wh40k9ed/factions/space-marines/#Haywire-Bolts\">Haywire Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "AGGRESSIVE ONSLAUGHT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Flesh Tearers constantly push towards new foes, moving one step closer to engaging the enemy and sating their lust to kill.",
				source_id: "000000021",
				subfaction_id: "CHFT",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01755\" data-tooltip-content=\"#tooltip_content01755\" data-tooltip-anchor=\"#tooltip_content01755\"><span class=\"kwb\">FLESH</span> <span class=\"kwb\">TEARERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time a model in that unit makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Consolidate\">consolidation move</a>, it can move up to an additional 3\".",
				id: "000004543005",
				field10: "",
				keys: [
					"flesh tearers infantry",
					"flesh",
					"tearers",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01755\" data-tooltip-content=\"#tooltip_content01755\" data-tooltip-anchor=\"#tooltip_content01755\"><span class=\"kwb\">FLESH</span> <span class=\"kwb\">TEARERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time a model in that unit makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Consolidate\">consolidation move</a>, it can move up to an additional 3\".",
				subfaction: "Flesh Tearers"
			},
			{
				faction_id: "SM",
				name: "CLAIM RUNES",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When faced with overwhelming numbers, the Silver Templars employ a system of rune-marking their chosen targets on their autosenses, allowing for pinpoint and hyper-efficient slaughter.",
				source_id: "000000149",
				subfaction_id: "CHST",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01767\" data-tooltip-content=\"#tooltip_content01767\" data-tooltip-anchor=\"#tooltip_content01767\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. If, when it was selected to fight, that unit was within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit containing more models than itself, then until the end of the phase, each time a model in that <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> unit makes an attack:<br><ul><li>Add 1 to the Strength characteristic of that attack.</li><li>Improve the Armour Penetration characteristic of that attack by 1.</li></ul>",
				id: "000005253003",
				field10: "",
				keys: [
					"silver templars primaris",
					"silver",
					"templars",
					"primaris",
					"silver",
					"templars"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01767\" data-tooltip-content=\"#tooltip_content01767\" data-tooltip-anchor=\"#tooltip_content01767\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. If, when it was selected to fight, that unit was within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit containing more models than itself, then until the end of the phase, each time a model in that <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> unit makes an attack:<br><ul><li>Add 1 to the Strength characteristic of that attack.</li><li>Improve the Armour Penetration characteristic of that attack by 1.</li></ul>",
				subfaction: "Silver Templars"
			}
		],
		waha: {
			id: "000001666",
			name: "Incursor Squad",
			link: "https://wahapedia.ru/wh40k9ed/factions/space-marines/Incursor-Squad",
			faction_id: "SM",
			source_id: "000000139",
			role: "Troops",
			unit_composition: "If this unit contains 6 or more models, it has <b>Power Rating 10</b>. Every model is equipped with: bolt pistol; occulus bolt carbine; paired combat blades; frag grenades; krak grenades.",
			transport: "",
			power_points: "5",
			priest: "",
			psyker: "",
			open_play_only: "false",
			crusade_only: "false",
			virtual: "false",
			Cost: "",
			cost_per_unit: "false",
			field17: ""
		}
	},
	{
		name: "Incursor Squad",
		region: 'AA',
		slot: "Troops",
		faction: "Adeptus Astartes",
		keywords: [
			"infantry",
			"phobos",
			"smokescreen",
			"incursor squad",
			"core",
			"primaris"
		],
		models: [{
				name: "Incursor Sergeant",
				faction: "",
				keywords: [],
				weapons: [{
						name: "Bolt pistol",
						amount: "1",
						cantrips: [],
						range: "12\"",
						type: "Pistol 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "-"
					},
					{
						name: "Frag & Krak grenades",
						amount: "1",
						cantrips: [
							"blast"
						],
						range: "6\"",
						type: "Grenade D6",
						s: "3",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Frag & Krak grenades",
						amount: "1",
						cantrips: [],
						range: "6\"",
						type: "Grenade 1",
						s: "6",
						ap: "-1",
						d: "D3",
						abilities: "-"
					},
					{
						name: "Occulus bolt carbine",
						amount: "1",
						cantrips: [],
						range: "24\"",
						type: "Rapid Fire 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "Each time an attack is made with this weapon, the target does not receive the benefits of cover against that attack"
					},
					{
						name: "Paired combat blades",
						amount: "1",
						cantrips: [],
						range: "Melee",
						type: "Melee",
						s: "User",
						ap: "-1",
						d: "1",
						abilities: "-"
					}
				],
				wargear: [],
				amount: "1",
				statlines: [{
					M: "6",
					WS: "3",
					BS: "3",
					S: "4",
					T: "4",
					W: "2",
					A: "3",
					Ld: "8",
					Sv: "3"
				}]
			},
			{
				name: "Incursor",
				faction: "",
				keywords: [],
				weapons: [{
						name: "Bolt pistol",
						amount: "4",
						cantrips: [],
						range: "12\"",
						type: "Pistol 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "-"
					},
					{
						name: "Occulus bolt carbine",
						amount: "4",
						cantrips: [],
						range: "24\"",
						type: "Rapid Fire 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "Each time an attack is made with this weapon, the target does not receive the benefits of cover against that attack"
					},
					{
						name: "Frag & Krak grenades",
						amount: "4",
						cantrips: [
							"blast"
						],
						range: "6\"",
						type: "Grenade D6",
						s: "3",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Frag & Krak grenades",
						amount: "4",
						cantrips: [],
						range: "6\"",
						type: "Grenade 1",
						s: "6",
						ap: "-1",
						d: "D3",
						abilities: "-"
					},
					{
						name: "Paired combat blades",
						amount: "4",
						cantrips: [],
						range: "Melee",
						type: "Melee",
						s: "User",
						ap: "-1",
						d: "1",
						abilities: "-"
					}
				],
				wargear: [],
				amount: "4",
				statlines: [{
					M: "6",
					WS: "3",
					BS: "3",
					S: "4",
					T: "4",
					W: "2",
					A: "2",
					Ld: "7",
					Sv: "3"
				}]
			}
		],
		rules: [{
				name: "Combat Squads",
				desc: "Before any models are deployed at the start of the game, this unit when containing its maximum number of models, may be split into two units each containing an equal number of models.",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Concealed Positions",
				desc: "During Deployment when you set up this unit, if every model in this unit has this ability then it can be set up anywhere on the battlefield that is more than 9\" away from the enemy deployment zone  and any enemy models",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Angels of Death",
				desc: "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Shock Assault and Combat Doctrines.",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Multi-Spectrum Array",
				desc: "Each time a model in this unit makes a ranged attack, you can ignore any or all hit roll and Ballistic Skill modifiers",
				subkeys: null,
				targets: null,
				phases: []
			}
		],
		spells: [],
		stratagems: [{
				faction_id: "SM",
				name: "SPECIAL-ISSUE LOADOUT",
				type: "Wargear",
				cp_cost: "2",
				legend: "Individual shells are loaded when optimised volleys are required.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you select a <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to shoot. Until the end of the phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> (excluding bolt sniper rifles) without the <a href=\"/wh40k9ed/factions/space-marines/#Special-issue-Ammunition\">Special-issue Ammunition</a> ability that models in that unit are equipped with gain that Special-issue Ammunition ability and their Type characteristic is changed to <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy 1</a>.",
				id: "000004846019",
				field10: "",
				keys: [
					"deathwatch infantry",
					"deathwatch",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you select a <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to shoot. Until the end of the phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> (excluding bolt sniper rifles) without the <a href=\"/wh40k9ed/factions/space-marines/#Special-issue-Ammunition\">Special-issue Ammunition</a> ability that models in that unit are equipped with gain that Special-issue Ammunition ability and their Type characteristic is changed to <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy 1</a>.",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "SQUAD DOCTRINES",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Each squad within an Ultramarines strike force at war is ready to switch to a new combat doctrine at a moment’s notice.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army, then select either the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Devastator</a>, <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Tactical</a> or <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault Doctrine</a>. Until the start of your next Movement phase, that unit gains the bonus of that combat doctrine instead of the active combat doctrine.",
				id: "000003607014",
				field10: "",
				keys: [
					"ultramarines infantry",
					"ultramarines biker",
					"ultramarines",
					"infantry",
					"ultramarines",
					"biker"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army, then select either the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Devastator</a>, <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Tactical</a> or <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault Doctrine</a>. Until the start of your next Movement phase, that unit gains the bonus of that combat doctrine instead of the active combat doctrine.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "HONOURED SERGEANT",
				type: "Requisition",
				cp_cost: "1",
				legend: "Should an Ultramarines Sergeant show particular excellence in battle, they may be given the honour of bearing a Chapter relic into battle.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">ULTRAMARINES</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Hellfury-Bolts\">Hellfury Bolts</a>, <a href=\"/wh40k9ed/factions/space-marines/#Sunwrath-Pistol-1\">Sunwrath Pistol</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003607015",
				field10: "",
				keys: [
					"ultramarines",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">ULTRAMARINES</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Hellfury-Bolts\">Hellfury Bolts</a>, <a href=\"/wh40k9ed/factions/space-marines/#Sunwrath-Pistol-1\">Sunwrath Pistol</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "KEEN SENSES",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The heightened senses of the Space Wolves allow them to sniff out prey wherever, or however, it is hidden.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> unit from your army. Until the end of the turn, you can ignore any or all <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, Ballistic skill and Weapon skill modifiers, and each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> for that unit, you can ignore any or all modifiers to that charge roll.",
				id: "000004630016",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves biker",
					"space wolves cavalry",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"biker",
					"space",
					"wolves",
					"cavalry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> unit from your army. Until the end of the turn, you can ignore any or all <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, Ballistic skill and Weapon skill modifiers, and each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> for that unit, you can ignore any or all modifiers to that charge roll.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "THE SHIELD UNWAVERING",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Once the Imperial Fists have captured a site of strategic importance, they dig in and hold their position no matter what the enemy hurls at them.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MORALE-PHASE\">Morale phase</a>. Select one <span class=\"tooltip01756\" data-tooltip-content=\"#tooltip_content01756\" data-tooltip-anchor=\"#tooltip_content01756\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 3\" of any <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective markers</a>. Until the start of your next turn, add 1 to the Attacks characteristic of models in that unit, and when resolving an attack made against that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> (excluding <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saves</a>).",
				id: "000003693014",
				field10: "",
				keys: [
					"imperial fists infantry",
					"imperial",
					"fists",
					"infantry"
				],
				activate: [
					"Morale phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MORALE-PHASE\">Morale phase</a>. Select one <span class=\"tooltip01756\" data-tooltip-content=\"#tooltip_content01756\" data-tooltip-anchor=\"#tooltip_content01756\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 3\" of any <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective markers</a>. Until the start of your next turn, add 1 to the Attacks characteristic of models in that unit, and when resolving an attack made against that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> (excluding <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saves</a>).",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "SANCTION OF THE BLACK VAULT",
				type: "Requisition",
				cp_cost: "1",
				legend: "In missions with certain classes of extremis threat rating, the wardens of the Black Vault may grant an exceptional artefact to a veteran warrior of proven skill in the eradication of the xenos.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATHWATCH</span> keyword. Select one <span class=\"kwb\">DEATHWATCH</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Watch-Fortresses\">Relics of the Watch Fortresses</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Armour-10\">Artificer Armour</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-10\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-10\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Banebolts-of-Eryxia\">Banebolts of Eryxia</a>; <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Bolt-Cache\">Artificer Bolt Cache</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004846007",
				field10: "",
				keys: [
					"warlord",
					"deathwatch",
					"deathwatch",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATHWATCH</span> keyword. Select one <span class=\"kwb\">DEATHWATCH</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Watch-Fortresses\">Relics of the Watch Fortresses</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Armour-10\">Artificer Armour</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-10\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-10\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Banebolts-of-Eryxia\">Banebolts of Eryxia</a>; <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Bolt-Cache\">Artificer Bolt Cache</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "VICIOUS RIPOSTE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Every blow struck against a Black Templar is answered in kind. Even as they are laid low, their blades still lash out at the enemies of the divine Emperor.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the end of the phase, each time a model in that unit is destroyed by a melee attack and does not explode, roll one D6: on a 5+, after the attacking models unit has finished making its attacks, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> (a unit can suffer a maximum of 6 mortal wounds per phase as the result of this ability).",
				id: "000003817003",
				field10: "",
				keys: [
					"black templars core",
					"black",
					"templars",
					"core"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the end of the phase, each time a model in that unit is destroyed by a melee attack and does not explode, roll one D6: on a 5+, after the attacking models unit has finished making its attacks, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> (a unit can suffer a maximum of 6 mortal wounds per phase as the result of this ability).",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "CLOSE-RANGE BOLTER FIRE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "The ability to hose your foe in bolter fire while battling toe to toe has proven vital across countless trenches and battlements.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> type instead of their normal type (e.g. a <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> 2 bolt weapon becomes Pistol 2).",
				id: "000003693006",
				field10: "",
				keys: [
					"imperial fists core",
					"imperial fists character",
					"imperial",
					"fists",
					"core",
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> type instead of their normal type (e.g. a <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> 2 bolt weapon becomes Pistol 2).",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "TRANSHUMAN PHYSIOLOGY",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "Space Marines can fight through even the most grievous of wounds.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000002164005",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Being targeted"
				],
				descText: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "DEVOUT PUSH",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "With a zealous cry, the Black Templars press forward towards victory.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00790\" data-tooltip-content=\"#tooltip_content00790\" data-tooltip-anchor=\"#tooltip_content00790\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one of the following:<br><ul><li>If that unit is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> of up to 3\" with that unit. It must end this move either closer to the closest enemy unit or closer to the closest <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>. That unit cannot use this move to <a href=\"/wh40k9ed/the-rules/core-rules/#Embark\">embark</a> within a <a href=\"/wh40k9ed/the-rules/core-rules/#Transports\"><span class=\"kwb\">TRANSPORT</span></a> model.</li><li>If that unit is within Engagement Range of any enemy units, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in move</a> with that unit.</li></ul>",
				id: "000003817002",
				field10: "",
				keys: [
					"black templars core",
					"black templars character",
					"black",
					"templars",
					"core",
					"black",
					"templars",
					"character",
					"transport"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00790\" data-tooltip-content=\"#tooltip_content00790\" data-tooltip-anchor=\"#tooltip_content00790\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one of the following:<br><ul><li>If that unit is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> of up to 3\" with that unit. It must end this move either closer to the closest enemy unit or closer to the closest <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>. That unit cannot use this move to <a href=\"/wh40k9ed/the-rules/core-rules/#Embark\">embark</a> within a <a href=\"/wh40k9ed/the-rules/core-rules/#Transports\"><span class=\"kwb\">TRANSPORT</span></a> model.</li><li>If that unit is within Engagement Range of any enemy units, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in move</a> with that unit.</li></ul>",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "BUTCHERED QUARRY",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Many attempt to flee from the White Scars’ wrath like prey put to flight. Yet the huntsmen of Chogoris are not so easily evaded.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem when an enemy unit <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Falls Back</a> within 1\" of any <span class=\"tooltip00646\" data-tooltip-content=\"#tooltip_content00646\" data-tooltip-anchor=\"#tooltip_content00646\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01799\" data-tooltip-content=\"#tooltip_content01799\" data-tooltip-anchor=\"#tooltip_content01799\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">BIKER</span></span> units from your army, before it moves. Select one of those <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> units that is not within 1\" of any other enemy units; each model in the selected unit can make one attack with a melee weapon against that enemy unit as if they were within 1\" of it. After these attacks are made, if that enemy unit is not destroyed, it can then make its <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> move; after it has moved, each model in the selected unit can move up to 3\", so long as they end this move closer to that enemy unit and not within 1\" of any enemy units.",
				id: "000003618003",
				field10: "",
				keys: [
					"white scars infantry",
					"white scars biker",
					"white",
					"scars",
					"infantry",
					"white",
					"scars",
					"biker",
					"white",
					"scars"
				],
				activate: [
					"Enemy Movement phase"
				],
				descText: "Use this Stratagem when an enemy unit <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Falls Back</a> within 1\" of any <span class=\"tooltip00646\" data-tooltip-content=\"#tooltip_content00646\" data-tooltip-anchor=\"#tooltip_content00646\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01799\" data-tooltip-content=\"#tooltip_content01799\" data-tooltip-anchor=\"#tooltip_content01799\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">BIKER</span></span> units from your army, before it moves. Select one of those <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> units that is not within 1\" of any other enemy units; each model in the selected unit can make one attack with a melee weapon against that enemy unit as if they were within 1\" of it. After these attacks are made, if that enemy unit is not destroyed, it can then make its <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> move; after it has moved, each model in the selected unit can move up to 3\", so long as they end this move closer to that enemy unit and not within 1\" of any enemy units.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "CUNNING OF THE WOLF",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "The most successful hunts are those where the prey doesn’t know they are being hunted.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem during deployment. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Outflank\">Outflank</a> ability.",
				id: "000004630003",
				field10: "",
				keys: [
					"space wolves infantry",
					"space",
					"wolves",
					"infantry"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during deployment. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Outflank\">Outflank</a> ability.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "UNCOMPROMISING FIRE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Switching weapons to full auto, the Space Marines unleash a short-lived but inescapable hail of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				id: "000002164020",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "LET THEM COME",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Castellans of the Rift drill and train relentlessly, and have honed their reflexes to almost preternatural levels.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, if that unit was charged this turn, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000007313003",
				field10: "",
				keys: [
					"castellans of the rift core",
					"castellans",
					"of",
					"the",
					"rift",
					"core"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, if that unit was charged this turn, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "PIVOTAL MOMENT",
				type: "Epic Deed",
				cp_cost: "2",
				legend: "There comes a crucial juncture in many battles where opportunity presents a key enemy target for the perfect shot. Whether the culmination of patiently outmanoeuvring the enemy or sheer fate, if the moment is seized, it can turn the tide of whole wars, sending far larger forces into rout.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> <span class=\"kwb\">CORE</span> model from your army is selected to shoot. Until the end of the phase, each time that model makes a ranged attack against an enemy <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a>, a successful <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> inflicts a number of <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a> equal to the Damage characteristic of the weapon used for that attack, and the attack sequence ends.",
				id: "000006923009",
				field10: "",
				keys: [
					"vanguard",
					"spearhead",
					"core",
					"warlord"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> <span class=\"kwb\">CORE</span> model from your army is selected to shoot. Until the end of the phase, each time that model makes a ranged attack against an enemy <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a>, a successful <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> inflicts a number of <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a> equal to the Damage characteristic of the weapon used for that attack, and the attack sequence ends.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "GIFT OF THE PHALANX",
				type: "Requisition",
				cp_cost: "1",
				legend: "It is not unheard of for especially accomplished Imperial Fists Sergeants to be granted an artefact from the Phalanx’s Reclusiam.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Imperial-Fists-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-4\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-4\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fist-of-Terra\">Fist of Terra</a>; <a href=\"/wh40k9ed/factions/space-marines/#Gatebreaker-Bolts\">Gatebreaker Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003693013",
				field10: "",
				keys: [
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Imperial-Fists-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-4\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-4\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fist-of-Terra\">Fist of Terra</a>; <a href=\"/wh40k9ed/factions/space-marines/#Gatebreaker-Bolts\">Gatebreaker Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "CAST OUT THY BLACKENED SOUL",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Daemonic possession gives each battle-brother of the Exorcists a personal revelation about the nature of daemonkind, and with this knowledge they banish their foe.",
				source_id: "000000152",
				subfaction_id: "CHES",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is selected to shoot, or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span> or <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span> unit from your army is selected to fight. Select one enemy <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">DAEMON</span> unit within 12\" of that unit. Until the end of the phase, each time a model in that friendly unit makes an attack against that enemy unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000005294002",
				field10: "",
				keys: [
					"exorcists core",
					"exorcists character",
					"exorcists",
					"core",
					"exorcists",
					"character",
					"exorcists",
					"core",
					"exorcists",
					"character",
					"chaos",
					"daemon"
				],
				activate: [
					"Shooting phase",
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is selected to shoot, or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span> or <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span> unit from your army is selected to fight. Select one enemy <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">DAEMON</span> unit within 12\" of that unit. Until the end of the phase, each time a model in that friendly unit makes an attack against that enemy unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Exorcists"
			},
			{
				faction_id: "SM",
				name: "KILLING BLOW",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When their prey is bleeding out, the Wolfspear strike hardest to deliver the killing blow.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack, if the target of that attack was below <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Half Strength</a> when it was selected as the target, or if the target has a <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Starting Strength</a> of 1 and had half or less of its wounds remaining when it was selected as the target, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000005986003",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Shooting phase",
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack, if the target of that attack was below <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Half Strength</a> when it was selected as the target, or if the target has a <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Starting Strength</a> of 1 and had half or less of its wounds remaining when it was selected as the target, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "COGITATED MARTYRDOM",
				type: "Requisition",
				cp_cost: "1",
				legend: "It is not a difficult sum for a warrior of the Iron Hands to cogitate, that his commanding officers’ lives are worth more to the Imperium than his own.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, when a friendly <span class=\"tooltip01760\" data-tooltip-content=\"#tooltip_content01760\" data-tooltip-anchor=\"#tooltip_content01760\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">CHARACTER</span></span> model (excluding <span class=\"kwb\">VEHICLE</span> models) within 3\" of that unit would lose any wounds as a result of an attack made against that model, that unit can attempt to intercept that attack. Roll one D6 before any rolls to ignore wounds (e.g. <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands:-The-Flesh-is-Weak\">The Flesh is Weak</a>, Adamantine Mantle etc.) are made; on a 2+ that model does not lose those wounds and that unit suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> for each of those wounds. Only one attempt can be made to intercept each attack.",
				id: "000003672012",
				field10: "",
				keys: [
					"iron hands infantry",
					"iron hands character",
					"iron",
					"hands",
					"infantry",
					"iron",
					"hands",
					"character",
					"vehicle"
				],
				activate: [
					"Shooting phase",
					"Enemy Shooting phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, when a friendly <span class=\"tooltip01760\" data-tooltip-content=\"#tooltip_content01760\" data-tooltip-anchor=\"#tooltip_content01760\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">CHARACTER</span></span> model (excluding <span class=\"kwb\">VEHICLE</span> models) within 3\" of that unit would lose any wounds as a result of an attack made against that model, that unit can attempt to intercept that attack. Roll one D6 before any rolls to ignore wounds (e.g. <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands:-The-Flesh-is-Weak\">The Flesh is Weak</a>, Adamantine Mantle etc.) are made; on a 2+ that model does not lose those wounds and that unit suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> for each of those wounds. Only one attempt can be made to intercept each attack.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "FIGHT AS BROTHERS",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Having spent years relying on their trusted brothers, when Emperor’s Spears fight together, little can stay their blows.",
				source_id: "000000151",
				subfaction_id: "CHEM",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01752\" data-tooltip-content=\"#tooltip_content01752\" data-tooltip-anchor=\"#tooltip_content01752\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to fight. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that unit and one or more other friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> units. Until the end of the phase, each time a friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> unit makes a melee attack against that unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000005265003",
				field10: "",
				keys: [
					"emperor’s spears infantry",
					"emperor’s",
					"spears",
					"infantry",
					"emperor’s",
					"spears",
					"infantry",
					"emperor’s",
					"spears",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01752\" data-tooltip-content=\"#tooltip_content01752\" data-tooltip-anchor=\"#tooltip_content01752\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to fight. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that unit and one or more other friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> units. Until the end of the phase, each time a friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> unit makes a melee attack against that unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Emperor’s Spears"
			},
			{
				faction_id: "SM",
				name: "ANGEL ASCENDANT",
				type: "Requisition",
				cp_cost: "1",
				legend: "Those who exemplify the finest qualities of the Blood Angels will be entrusted to bear powerful wargear into battle.",
				source_id: "000000021",
				subfaction_id: "CHBA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLOOD</span> <span class=\"kwb\">ANGELS</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Blood-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <span class=\"kwb\">CHARACTER</span> model: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-7\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-7\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fleshrender-Grenades\">Fleshrender Grenades</a>; <a href=\"/wh40k9ed/factions/space-marines/#Quake-Bolts\">Quake Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004543010",
				field10: "",
				keys: [
					"blood",
					"angels",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLOOD</span> <span class=\"kwb\">ANGELS</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Blood-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <span class=\"kwb\">CHARACTER</span> model: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-7\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-7\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fleshrender-Grenades\">Fleshrender Grenades</a>; <a href=\"/wh40k9ed/factions/space-marines/#Quake-Bolts\">Quake Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Blood Angels"
			},
			{
				faction_id: "SM",
				name: "STRENGTH OF CONVICTION",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The presence of these black-clad killers can force any challenger to back down, lest the wrath of the Emperor be visited upon them.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the start of your next Command phase, that unit has the <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Secured\">Objective Secured</a> ability.",
				id: "000003817012",
				field10: "",
				keys: [
					"black templars core",
					"black",
					"templars",
					"core"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the start of your next Command phase, that unit has the <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Secured\">Objective Secured</a> ability.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "STRENGTH OF THE PRIMARCH",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When facing the largest enemies, Vulkan’s sons draw upon their gene-sire’s titanic might, their strength terrible to behold.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">SALAMANDERS</span> unit from your army. Until the end of that phase, add 1 to the Strength characteristic of models in that unit, and when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 double the Damage characteristic of that weapon for that attack.",
				id: "000003699004",
				field10: "",
				keys: [
					"salamanders"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">SALAMANDERS</span> unit from your army. Until the end of that phase, add 1 to the Strength characteristic of models in that unit, and when resolving an attack made with a melee weapon by a model in that unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6 double the Damage characteristic of that weapon for that attack.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "THE CRUCIBLE OF BATTLE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Only where the battle is fiercest and the enemy can be faced eye to eye can the Salamanders truly be tested.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00655\" data-tooltip-content=\"#tooltip_content00655\" data-tooltip-anchor=\"#tooltip_content00655\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00838\" data-tooltip-content=\"#tooltip_content00838\" data-tooltip-anchor=\"#tooltip_content00838\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000003699003",
				field10: "",
				keys: [
					"salamanders core",
					"salamanders character",
					"salamanders",
					"core",
					"salamanders",
					"character"
				],
				activate: [
					"Shooting phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00655\" data-tooltip-content=\"#tooltip_content00655\" data-tooltip-anchor=\"#tooltip_content00655\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00838\" data-tooltip-content=\"#tooltip_content00838\" data-tooltip-anchor=\"#tooltip_content00838\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "UNFAILING NERVE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "The Castellans hold firm in the face of charging foes, waiting until they can see the white of their eyes before opening fire.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a> that targets a unit within half range, improve the Armour Penetration characteristic of that attack by 1.",
				id: "000007313002",
				field10: "",
				keys: [
					"castellans of the rift core",
					"castellans",
					"of",
					"the",
					"rift",
					"core"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a> that targets a unit within half range, improve the Armour Penetration characteristic of that attack by 1.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "STRANGLEHOLD",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "By the time the enemy engages the Raven Guard, their rear lines are already in the talon-grip of the Chapter’s covert vanguard, choking them off from vital battlefield support.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				id: "000003659004",
				field10: "",
				keys: [
					"raven guard scout",
					"raven guard phobos",
					"raven",
					"guard",
					"scout",
					"raven",
					"guard",
					"phobos"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "REJECT THE FLESH, EMBRACE THE MACHINE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "By trusting in the ironclad gifts of the Omnissiah that stud their flesh, the Iron Hands can withstand even the most punishing attacks of their enemies.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem in any phase, when an <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is chosen as the target for an attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6, adding 1 to the result if that model has the <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Warlord-Traits\">All Flesh is Weakness</a> Warlord Trait. On a 5+ that wound is not lost.",
				id: "000003672009",
				field10: "",
				keys: [
					"iron hands infantry",
					"iron",
					"hands",
					"infantry"
				],
				activate: [
					"Being targeted"
				],
				descText: "Use this Stratagem in any phase, when an <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is chosen as the target for an attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6, adding 1 to the result if that model has the <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Warlord-Traits\">All Flesh is Weakness</a> Warlord Trait. On a 5+ that wound is not lost.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "STEADY ADVANCE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "A measured advance allows Space Marines to unleash a steady stream of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				id: "000002164021",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "FAVOUR OF THE RAVENSPIRE",
				type: "Requisition",
				cp_cost: "1",
				legend: "In times of great need, the Raven Guard issue their precious relics to whichever battle-brothers are best placed to employ them, paying little regard to matters of rank.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-2\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-2\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Silentus-Pistol\">Silentus Pistol</a>; <a href=\"/wh40k9ed/factions/space-marines/#Korvidari-Bolts\">Korvidari Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003659015",
				field10: "",
				keys: [
					"raven",
					"guard",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-2\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-2\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Silentus-Pistol\">Silentus Pistol</a>; <a href=\"/wh40k9ed/factions/space-marines/#Korvidari-Bolts\">Korvidari Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "REVERED REPOSITORIES",
				type: "Requisition",
				cp_cost: "1",
				legend: "The crusade ships of the Black Templars maintain vast armouries of blessed weapons and sacred artefacts.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Eternal-Crusade-1\">Relics of the Eternal Crusade</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Witchseeker-Bolts\">Witchseeker Bolts</a>; <a href=\"/wh40k9ed/factions/space-marines/#Sword-of-Judgement\">Sword of Judgement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Skull-of-the-Cacodominus-Aura-\">Skull of the Cacodominus</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-6\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-6\">Digital Weapons</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000003817007",
				field10: "",
				keys: [
					"black",
					"templars",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Eternal-Crusade-1\">Relics of the Eternal Crusade</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Witchseeker-Bolts\">Witchseeker Bolts</a>; <a href=\"/wh40k9ed/factions/space-marines/#Sword-of-Judgement\">Sword of Judgement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Skull-of-the-Cacodominus-Aura-\">Skull of the Cacodominus</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-6\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-6\">Digital Weapons</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "SMOKESCREEN",
				type: "Wargear",
				cp_cost: "1",
				legend: "Throwing down a hail of smoke grenades or deploying their smoke launchers, the Space Marines screen themselves from the enemy.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01721\" data-tooltip-content=\"#tooltip_content01721\" data-tooltip-anchor=\"#tooltip_content01721\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">SMOKESCREEN</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from that attack's <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000002164035",
				field10: "",
				keys: [
					"adeptus astartes smokescreen",
					"adeptus",
					"astartes",
					"smokescreen"
				],
				activate: [
					"Enemy Shooting phase"
				],
				descText: "Use this Stratagem in your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01721\" data-tooltip-content=\"#tooltip_content01721\" data-tooltip-anchor=\"#tooltip_content01721\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">SMOKESCREEN</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, subtract 1 from that attack's <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "ORISON CULT",
				type: "Requisition",
				cp_cost: "1/2",
				legend: "The Chapter houses a series of cults, each a proud sub-sect with traditions and associations concerning the role of a battle-brother on the battlefield.",
				source_id: "000000152",
				subfaction_id: "CHES",
				description: "Use this Stratagem before the battle, when you are mustering your army, if every unit in your army has the <span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> keyword (excluding <span class=\"kwb\">AGENT</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">IMPERIUM</span> and <span class=\"kwb\">UNALIGNED</span> units). Select one <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a>. Once per battle, in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, you can select that combat doctrine to be active for that unit instead of any other combat doctrine until the start of your next Command phase. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005294003",
				field10: "",
				keys: [
					"exorcists core",
					"exorcists character",
					"adeptus",
					"astartes",
					"agent",
					"of",
					"the",
					"imperium",
					"unaligned",
					"exorcists",
					"core",
					"exorcists",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if every unit in your army has the <span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> keyword (excluding <span class=\"kwb\">AGENT</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">IMPERIUM</span> and <span class=\"kwb\">UNALIGNED</span> units). Select one <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a>. Once per battle, in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, you can select that combat doctrine to be active for that unit instead of any other combat doctrine until the start of your next Command phase. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Exorcists"
			},
			{
				faction_id: "SM",
				name: "TELEPORTARIUM",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Utilising the arcane secrets of teleportation technology, the Deathwatch burst from nowhere to attack.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem during deployment. Select one <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01748\" data-tooltip-content=\"#tooltip_content01748\" data-tooltip-anchor=\"#tooltip_content01748\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">DREADNOUGHT</span></span> or <span class=\"tooltip00411\" data-tooltip-content=\"#tooltip_content00411\" data-tooltip-anchor=\"#tooltip_content00411\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">BIKER</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Teleport-Strike-1\">Teleport Strike</a> ability. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
				id: "000004846015",
				field10: "",
				keys: [
					"deathwatch infantry",
					"deathwatch dreadnought",
					"deathwatch biker",
					"deathwatch",
					"infantry",
					"deathwatch",
					"dreadnought",
					"deathwatch",
					"biker"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during deployment. Select one <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01748\" data-tooltip-content=\"#tooltip_content01748\" data-tooltip-anchor=\"#tooltip_content01748\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">DREADNOUGHT</span></span> or <span class=\"tooltip00411\" data-tooltip-content=\"#tooltip_content00411\" data-tooltip-anchor=\"#tooltip_content00411\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">BIKER</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Teleport-Strike-1\">Teleport Strike</a> ability. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "HUNTERS’ FUSILLADE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "White Scars train tirelessly to accurately fire even the heaviest weapons whilst racing into battle.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem when a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit from your army <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advances</a>. Until the end of the turn, <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy weapons</a> and <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire weapons</a> models in that unit are equipped with are treated as <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> (e.g. a Rapid Fire 2 weapon is treated as an Assault 2 weapon).",
				id: "000003618008",
				field10: "",
				keys: [
					"white",
					"scars"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem when a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit from your army <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advances</a>. Until the end of the turn, <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy weapons</a> and <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire weapons</a> models in that unit are equipped with are treated as <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> (e.g. a Rapid Fire 2 weapon is treated as an Assault 2 weapon).",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "BOLTER DRILL",
				type: "Crimson Fists Stratagem",
				cp_cost: "1",
				legend: "The Crimson Fists maintain strict fire discipline at all times, standing shoulder to shoulder with their battle-brothers as they unleash devastatingly accurate volleys of bolter fire into the foe.",
				source_id: "000000069",
				subfaction_id: "",
				description: "Use this Stratagem just before a <span class=\"tooltip01737\" data-tooltip-content=\"#tooltip_content01737\" data-tooltip-anchor=\"#tooltip_content01737\"><span class=\"kwb\">CRIMSON</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Until the end of the phase, each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6+ for a model from that unit firing a bolt weapon, that model can immediately make another hit roll using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks). For the purposes of this Stratagem, a bolt weapon is any weapon profile whose name includes the word 'bolt’ (e.g. boltgun, bolt rifle, heavy' bolter, boltstorm gauntlet). Duty’s Burden and <a href=\"/wh40k9ed/factions/space-marines/Pedro-Kantor\">Pedro Kantor’s</a> Dorn’s Arrow are also bolt weapons.",
				id: "000003453002",
				field10: "",
				keys: [
					"crimson fists infantry",
					"crimson",
					"fists",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem just before a <span class=\"tooltip01737\" data-tooltip-content=\"#tooltip_content01737\" data-tooltip-anchor=\"#tooltip_content01737\"><span class=\"kwb\">CRIMSON</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Until the end of the phase, each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6+ for a model from that unit firing a bolt weapon, that model can immediately make another hit roll using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks). For the purposes of this Stratagem, a bolt weapon is any weapon profile whose name includes the word 'bolt’ (e.g. boltgun, bolt rifle, heavy' bolter, boltstorm gauntlet). Duty’s Burden and <a href=\"/wh40k9ed/factions/space-marines/Pedro-Kantor\">Pedro Kantor’s</a> Dorn’s Arrow are also bolt weapons."
			},
			{
				faction_id: "SM",
				name: "MARKED FOR COMMAND",
				type: "Requisition",
				cp_cost: "1",
				legend: "On occasion, a junior-ranking leader will demonstrate ability expected only of those of much loftier rank. Such individuals are highly rewarded, and marked for greater things.",
				source_id: "000000023",
				subfaction_id: "CHDA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> Ravenwing Huntmaster or Knight Master model or a <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Dark-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-8\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-8\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Atonement\">Atonement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Bolts-of-Judgement\">Bolts of Judgement</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004566009",
				field10: "",
				keys: [
					"dark",
					"angels",
					"dark",
					"angels",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> Ravenwing Huntmaster or Knight Master model or a <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Dark-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-8\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-8\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Atonement\">Atonement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Bolts-of-Judgement\">Bolts of Judgement</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Dark Angels"
			},
			{
				faction_id: "SM",
				name: "UNBROKEN AND UNBOWED",
				type: "Battle Tactic",
				cp_cost: "2/3",
				legend: "Even when under extremely heavy fire, the Castellans of the Rift hold their ground.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01736\" data-tooltip-content=\"#tooltip_content01736\" data-tooltip-anchor=\"#tooltip_content01736\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected as the target of an attack. While that unit is within range of an <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>, each time a model in that unit would lose a wound, roll one D6: on a 5+, that wound is not lost.<br><br>If that unit has 5 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
				id: "000007313004",
				field10: "",
				keys: [
					"castellans of the rift core infantry",
					"castellans",
					"of",
					"the",
					"rift",
					"core",
					"infantry"
				],
				activate: [
					"Enemy Shooting phase",
					"Being targeted"
				],
				descText: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01736\" data-tooltip-content=\"#tooltip_content01736\" data-tooltip-anchor=\"#tooltip_content01736\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected as the target of an attack. While that unit is within range of an <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>, each time a model in that unit would lose a wound, roll one D6: on a 5+, that wound is not lost.<br><br>If that unit has 5 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "BOLTER DRILL",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "The sons of Dorn maintain strict fire discipline, standing shoulder to shoulder as they unleash devastating volleys of bolt rounds into the foe.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, when resolving an attack made by a model in that unit with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a>, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 scores 1 additional hit.",
				id: "000003693007",
				field10: "",
				keys: [
					"imperial fists core",
					"imperial fists character",
					"imperial",
					"fists",
					"core",
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, when resolving an attack made by a model in that unit with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a>, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 scores 1 additional hit.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "MASTER ARTISANS",
				type: "Requisition",
				cp_cost: "1",
				legend: "Even amongst the rank and file of the Salamanders, artefacts of peerless craftsmanship can be found.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">SALAMANDERS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following Chapter Relics, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-5\">Master-crafted weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-5\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Drakeblade\">Drakeblade</a>, <a href=\"/wh40k9ed/factions/space-marines/#Dragonrage-Bolts\">Dragonrage Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003699015",
				field10: "",
				keys: [
					"salamanders",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">SALAMANDERS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following Chapter Relics, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-5\">Master-crafted weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-5\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Drakeblade\">Drakeblade</a>, <a href=\"/wh40k9ed/factions/space-marines/#Dragonrage-Bolts\">Dragonrage Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "AUSPEX SCAN",
				type: "Wargear",
				cp_cost: "2",
				legend: "Nearby motion and radiation signatures are detected by a handheld device, forewarning the bearer of ambushes.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				id: "000002164027",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Enemy Movement phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "GENE-WROUGHT MIGHT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Blessed with incredible strength, Primaris Space Marines deliver blows that inflict terrifying damage.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				id: "000002164007",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "SELF SACRIFICE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "The Salamanders are amongst the most noble and selfless of the Adeptus Astartes, laying down their lives in others’ defence.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem at the start of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit that contains 5 or more models from your army that is not within 1\" of any enemy units, and then select one other <span class=\"kwb\">INFANTRY</span> unit from your army that is wholly within 6\" of the selected unit. Until the end of the phase, your opponent cannot target the second unit you selected unless that unit is the closest enemy unit to the firing model and visible to it, or it is no longer wholly within 6\" of the first unit you selected. In addition, until the end of the phase, the first unit you selected is always an eligible target for enemy shooting attacks provided it is within range and is visible to the firing model (i.e. it can be targeted even whilst under the effects of any rules that would prevent it from being targeted, such as the <a href=\"/wh40k9ed/factions/space-marines/#Obscuration-Discipline\">Shrouding</a> psychic power).",
				id: "000003699008",
				field10: "",
				keys: [
					"salamanders infantry",
					"salamanders",
					"infantry",
					"infantry"
				],
				activate: [
					"Enemy Shooting phase"
				],
				descText: "Use this Stratagem at the start of your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit that contains 5 or more models from your army that is not within 1\" of any enemy units, and then select one other <span class=\"kwb\">INFANTRY</span> unit from your army that is wholly within 6\" of the selected unit. Until the end of the phase, your opponent cannot target the second unit you selected unless that unit is the closest enemy unit to the firing model and visible to it, or it is no longer wholly within 6\" of the first unit you selected. In addition, until the end of the phase, the first unit you selected is always an eligible target for enemy shooting attacks provided it is within range and is visible to the firing model (i.e. it can be targeted even whilst under the effects of any rules that would prevent it from being targeted, such as the <a href=\"/wh40k9ed/factions/space-marines/#Obscuration-Discipline\">Shrouding</a> psychic power).",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "PAIN IS A LESSON",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "To the Imperial Fists, pain is but another didactic tool, a reminder of what their forebears endured without complaint and which they, too, must weather unwavering.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in any phase, when an <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> unit from your army that is not a <span class=\"kwb\">VEHICLE</span> or <span class=\"kwb\">SERVITOR</span> is chosen as the target of an enemy attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6; on a 6 that wound is not lost.",
				id: "000003693005",
				field10: "",
				keys: [
					"imperial",
					"fists",
					"vehicle",
					"servitor"
				],
				activate: [
					"Any phase"
				],
				descText: "Use this Stratagem in any phase, when an <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> unit from your army that is not a <span class=\"kwb\">VEHICLE</span> or <span class=\"kwb\">SERVITOR</span> is chosen as the target of an enemy attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6; on a 6 that wound is not lost.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "INFILTRATORS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The Raven Guard are masters of infiltration, slipping unseen across the battlefield before striking from the shadows to annihilate their foes with gun and blade.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				id: "000003659002",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "SKOVAKARAH UHL ZAÛRN!",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "The battle cry of the Emperor’s Spears is the call that precedes their red work.",
				source_id: "000000151",
				subfaction_id: "CHEM",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01750\" data-tooltip-content=\"#tooltip_content01750\" data-tooltip-anchor=\"#tooltip_content01750\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01751\" data-tooltip-content=\"#tooltip_content01751\" data-tooltip-anchor=\"#tooltip_content01751\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army that made a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>, was charged or <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">performed a Heroic Intervention</a> this turn is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005265002",
				field10: "",
				keys: [
					"emperor’s spears core",
					"emperor’s spears character",
					"emperor’s",
					"spears",
					"core",
					"emperor’s",
					"spears",
					"character"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01750\" data-tooltip-content=\"#tooltip_content01750\" data-tooltip-anchor=\"#tooltip_content01750\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01751\" data-tooltip-content=\"#tooltip_content01751\" data-tooltip-anchor=\"#tooltip_content01751\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army that made a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>, was charged or <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">performed a Heroic Intervention</a> this turn is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Emperor’s Spears"
			},
			{
				faction_id: "SM",
				name: "STRIKE FROM THE SHADOWS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The deadliest strike comes always from the least expected quarter. So taught Corax.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				id: "000003659008",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "A DEADLY PRIZE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "If critical objectives look close to falling into enemy hands, the Raven Guard will often plant explosives to deny their capture.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				id: "000003659012",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"End of your turn"
				],
				descText: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "WIND-SWIFT",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "It is said on Chogoris that the sons of the Khan ride the stormwinds themselves, racing swift and wrathful into war.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> after a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit (excluding <span class=\"tooltip01798\" data-tooltip-content=\"#tooltip_content01798\" data-tooltip-anchor=\"#tooltip_content01798\"><span class=\"kwb\">ARTILLERY</span></span>) from your army has made a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> or has <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fallen Back</a>. That unit can make an <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> move. Until the end of the turn, that unit cannot shoot, <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">declare a charge</a> or attempt to <a href=\"/wh40k9ed/the-rules/core-rules/#Manifesting-Psychic-Powers\">manifest</a> any psychic powers.",
				id: "000003618004",
				field10: "",
				keys: [
					"artillery",
					"white",
					"scars",
					"artillery"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> after a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit (excluding <span class=\"tooltip01798\" data-tooltip-content=\"#tooltip_content01798\" data-tooltip-anchor=\"#tooltip_content01798\"><span class=\"kwb\">ARTILLERY</span></span>) from your army has made a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> or has <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fallen Back</a>. That unit can make an <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> move. Until the end of the turn, that unit cannot shoot, <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">declare a charge</a> or attempt to <a href=\"/wh40k9ed/the-rules/core-rules/#Manifesting-Psychic-Powers\">manifest</a> any psychic powers.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "CHAMPION OF THE FEAST",
				type: "Requisition",
				cp_cost: "1",
				legend: "To triumph over the champions of other Imperial Fists successors requires a warrior of superlative skill and fortitude.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. Add 1 to that model’s Attacks and Wounds characteristics and improve that model’s Weapon Skill characteristic by 1. You can only use this Stratagem once.",
				id: "000003817009",
				field10: "",
				keys: [
					"black",
					"templars"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. Add 1 to that model’s Attacks and Wounds characteristics and improve that model’s Weapon Skill characteristic by 1. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "LAY LOW THE TYRANTS",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Those who would abuse their strength to oppress the weak and humble are amongst the Raven Guard’s most favoured prey.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000003659006",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven guard biker",
					"raven",
					"guard",
					"infantry",
					"raven",
					"guard",
					"biker",
					"character",
					"vehicle",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "OCULAR NETWORKING",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When fighting as part of Vanguard Spearhead, Space Marines utilise the sophisticated ocular systems of their Phobos armour to greater efficacy. Sharing combat data across inter-squad networks, they identify weaknesses in even the most resilient foe, deficiencies which precise attacks can take advantage of.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				id: "000006923003",
				field10: "",
				keys: [
					"vanguard",
					"spearhead",
					"monster",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase",
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "DISPERSAL PROTOCOLS",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Vanguard squads are trained to rapidly disengage from their foe, moving to new positions before attacking once more.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				id: "000006923004",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "CRUSADER’S WRATH",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "At a critical point in the battle, the Black Templar host channels its fervour into their strikes, breaking the back of the enemy force in a hatred-fuelled flurry of blows.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault doctrine</a> is active for your army. Until the start of your next Command phase, each time a <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army makes an attack with a <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Select-Weapon\">Melee</a> weapon, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 1. This is cumulative with the bonus from the Assault Doctrine. You can only use this Stratagem once.",
				id: "000003817004",
				field10: "",
				keys: [
					"black",
					"templars"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault doctrine</a> is active for your army. Until the start of your next Command phase, each time a <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army makes an attack with a <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Select-Weapon\">Melee</a> weapon, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 1. This is cumulative with the bonus from the Assault Doctrine. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "BESTIAL NATURE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Every son of Russ feels the instinctive feral impulses flood through them in battle, a howling and vicious urge to hunt.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a> if a <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a> is active for your army. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> or <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> unit from your army. Until the start of your next Command phase, that unit gains the bonus of the Assault Doctrine instead of the active combat doctrine.",
				id: "000004630014",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves cavalry",
					"space wolves biker",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"cavalry",
					"space",
					"wolves",
					"biker"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a> if a <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a> is active for your army. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> or <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> unit from your army. Until the start of your next Command phase, that unit gains the bonus of the Assault Doctrine instead of the active combat doctrine.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "MARKSMAN TARGET-TRACKER",
				type: "Wargear",
				cp_cost: "2",
				legend: "Specialised target acquisition devices coupled with their bearer's exceptional marksman instincts enable their squad to identify key enemy combatants, feeding targeting data directly to their visors.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when, a <span class=\"tooltip01797\" data-tooltip-content=\"#tooltip_content01797\" data-tooltip-anchor=\"#tooltip_content01797\"><span class=\"kwb\">MARKSMAN</span> <span class=\"kwb\">TARGET-TRACKER</span></span> unit from your army is selected to shoot. Until the end of the phase, each time you select a target for an occulus bolt carbine a model in that unit is equipped with, you can ignore the <a href=\"/wh40k9ed/the-rules/core-rules/#Look-out-Sir\">Look Out, Sir</a> rule.",
				id: "000006923007",
				field10: "",
				keys: [
					"marksman target-tracker",
					"marksman",
					"target-tracker"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> when, a <span class=\"tooltip01797\" data-tooltip-content=\"#tooltip_content01797\" data-tooltip-anchor=\"#tooltip_content01797\"><span class=\"kwb\">MARKSMAN</span> <span class=\"kwb\">TARGET-TRACKER</span></span> unit from your army is selected to shoot. Until the end of the phase, each time you select a target for an occulus bolt carbine a model in that unit is equipped with, you can ignore the <a href=\"/wh40k9ed/the-rules/core-rules/#Look-out-Sir\">Look Out, Sir</a> rule.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "TACTICAL AUGURY",
				type: "Wargear",
				cp_cost: "1",
				legend: "Vanguard Spearheads utilise advanced scanning equipment and orbital augurs to grant them an awareness of the battle-sphere's layout few forces can match. With such tactical advantage, they make pinpoint shots into enemy strongpoints and through dense defence lines, driving the foe out of cover and onto the blades of the Spearhead's encircling executioners.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				id: "000006923008",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "THE EMPEROR’S WILL",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "It is the divine command of the God-Emperor that the Black Templars bring ruin to Humanity’s foes. In battle they are never still, surging towards the enemy, bolters blazing.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01723\" data-tooltip-content=\"#tooltip_content01723\" data-tooltip-anchor=\"#tooltip_content01723\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn. Until the end of the phase:<br><ul><li>That unit is still eligible to shoot with, but you can only make attacks using <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a>, <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> when you select that unit to shoot with.</li><li>Models from that unit do not suffer the penalty incurred to their <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for firing Assault weapons.</li></ul>",
				id: "000003817013",
				field10: "",
				keys: [
					"black templars infantry",
					"black",
					"templars",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01723\" data-tooltip-content=\"#tooltip_content01723\" data-tooltip-anchor=\"#tooltip_content01723\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn. Until the end of the phase:<br><ul><li>That unit is still eligible to shoot with, but you can only make attacks using <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a>, <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> when you select that unit to shoot with.</li><li>Models from that unit do not suffer the penalty incurred to their <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for firing Assault weapons.</li></ul>",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "THANE OF THE RETINUE",
				type: "Requisition",
				cp_cost: "1",
				legend: "The lords of the Fang are stern but generous masters, who may reward a worthy warrior with an artefact of great power.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"kwb\">WARLORD</span> has the <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> keyword. Select one <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> model from your army that has the word ‘Sergeant’ or ‘Pack Leader’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Space-Wolves-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-9\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-9\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Frost-Weapon\">Frost Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Morkai-s-Teeth-Bolts\">Morkai’s Teeth Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004630012",
				field10: "",
				keys: [
					"warlord",
					"space",
					"wolves",
					"space",
					"wolves",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"kwb\">WARLORD</span> has the <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> keyword. Select one <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> model from your army that has the word ‘Sergeant’ or ‘Pack Leader’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Space-Wolves-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-9\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-9\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Frost-Weapon\">Frost Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Morkai-s-Teeth-Bolts\">Morkai’s Teeth Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "GUERILLA TACTICS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "At the opportune moment, Space Marine infiltration units slip away from battle, only to relocate and strike the foe again.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				id: "000002164025",
				field10: "",
				keys: [
					"phobos",
					"phobos"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "ON THE SCENT",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Sensing when an enemy is weakened and fearing for its survival, the Wolfspear emerge from the shadows for a rapid strike.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that had models destroyed or lost any wounds this turn. Until the end of the turn, each time a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made by a friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, if that enemy unit was selected as a target of that charge, you can re-roll the charge roll.",
				id: "000005986004",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Charge phase"
				],
				descText: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that had models destroyed or lost any wounds this turn. Until the end of the turn, each time a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made by a friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, if that enemy unit was selected as a target of that charge, you can re-roll the charge roll.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "LINE UNBREAKABLE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Many foes have charged the Dark Angels’ lines, only to be met by an unbreakable wall of ceramite.",
				source_id: "000000023",
				subfaction_id: "CHDA",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01031\" data-tooltip-content=\"#tooltip_content01031\" data-tooltip-anchor=\"#tooltip_content01031\"><span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, that unit can only be selected as a target for melee attacks if the attacking model is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of it (note that this means that enemy models that are not within Engagement Range but are within 1/2\" of a model from their own unit that is itself within 1/2\" of this <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span> unit cannot target it with melee attacks this phase).",
				id: "000004566006",
				field10: "",
				keys: [
					"dark angels infantry",
					"dark",
					"angels",
					"infantry",
					"dark",
					"angels",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01031\" data-tooltip-content=\"#tooltip_content01031\" data-tooltip-anchor=\"#tooltip_content01031\"><span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, that unit can only be selected as a target for melee attacks if the attacking model is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of it (note that this means that enemy models that are not within Engagement Range but are within 1/2\" of a model from their own unit that is itself within 1/2\" of this <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span> unit cannot target it with melee attacks this phase).",
				subfaction: "Dark Angels"
			},
			{
				faction_id: "SM",
				name: "KHAN’S CHAMPION",
				type: "Requisition",
				cp_cost: "1",
				legend: "To earn the respect and praise of your khan is to be gifted superlative tools of war to wield in their name.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#White-Scars-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-1\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-1\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Headtaker-s-Trophies\">Headtaker’s Trophies</a>; <a href=\"/wh40k9ed/factions/space-marines/#Stormwrath-Bolts\">Stormwrath Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003618007",
				field10: "",
				keys: [
					"white",
					"scars",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#White-Scars-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-1\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-1\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Headtaker-s-Trophies\">Headtaker’s Trophies</a>; <a href=\"/wh40k9ed/factions/space-marines/#Stormwrath-Bolts\">Stormwrath Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "THE SWORDSMAN’S STRIKE",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "The Silver Templars view all battles, no matter their scale, as a duel between two gestalt opposed combatants. Their battle strategies thus focus on how best to deliver the killing blow that swiftly and decisively ends that duel.",
				source_id: "000000149",
				subfaction_id: "CHST",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01766\" data-tooltip-content=\"#tooltip_content01766\" data-tooltip-anchor=\"#tooltip_content01766\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005253002",
				field10: "",
				keys: [
					"silver templars primaris core",
					"silver",
					"templars",
					"primaris",
					"core",
					"silver",
					"templars",
					"primaris",
					"core",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01766\" data-tooltip-content=\"#tooltip_content01766\" data-tooltip-anchor=\"#tooltip_content01766\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Silver Templars"
			},
			{
				faction_id: "SM",
				name: "SONS OF GUILLIMAN",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Ultramarines fight as the Codex dictates, eschewing individual glory to function as a disciplined, cohesive killing machine.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem when an <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to shoot with in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. If that unit has the Troops <a href=\"/wh40k9ed/the-rules/core-rules/#Battlefield-Role\">Battlefield Role</a>, until the end of that phase, when resolving an attack made by that unit, you can re-roll a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. Otherwise, until the end of that phase, when resolving an attack made by that unit, you can re-roll a hit roll of 1.",
				id: "000003607007",
				field10: "",
				keys: [
					"ultramarines infantry",
					"ultramarines biker",
					"ultramarines",
					"infantry",
					"ultramarines",
					"biker"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase",
					"Shooting phase"
				],
				descText: "Use this Stratagem when an <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to shoot with in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. If that unit has the Troops <a href=\"/wh40k9ed/the-rules/core-rules/#Battlefield-Role\">Battlefield Role</a>, until the end of that phase, when resolving an attack made by that unit, you can re-roll a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. Otherwise, until the end of that phase, when resolving an attack made by that unit, you can re-roll a hit roll of 1.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "TRACK AND HUNT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "No foe can escape the hunt, nor hide from the master trackers of the Wolfspear.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, then select one enemy unit within 24\" of it. Until the end of your turn, each time a model in that unit makes an attack against that enemy unit, that enemy unit does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> for that attack.",
				id: "000005986002",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, then select one enemy unit within 24\" of it. Until the end of your turn, each time a model in that unit makes an attack against that enemy unit, that enemy unit does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> for that attack.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "STAND YOUR GROUND",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Such is their famed endurance that the Salamanders are able to stand firm amidst storms of small-arms fire and lesser blows.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem in any phase, when a <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not a <span class=\"tooltip01765\" data-tooltip-content=\"#tooltip_content01765\" data-tooltip-anchor=\"#tooltip_content01765\"><span class=\"kwb\">SERVITOR</span></span> and did not <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> in this phase or your previous <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> is chosen as the target for an attack. Until the end of that phase, when resolving an attack made with a weapon that has a Damage characteristic of 1 against a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a>. This does not affect <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saving throws</a>.",
				id: "000003699011",
				field10: "",
				keys: [
					"salamanders infantry",
					"servitor",
					"salamanders",
					"infantry",
					"servitor"
				],
				activate: [
					"Any phase"
				],
				descText: "Use this Stratagem in any phase, when a <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not a <span class=\"tooltip01765\" data-tooltip-content=\"#tooltip_content01765\" data-tooltip-anchor=\"#tooltip_content01765\"><span class=\"kwb\">SERVITOR</span></span> and did not <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> in this phase or your previous <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> is chosen as the target for an attack. Until the end of that phase, when resolving an attack made with a weapon that has a Damage characteristic of 1 against a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a>. This does not affect <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saving throws</a>.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "HEALING BALMS",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Learned in arcane biomechanics and chirurgery, Wolf Priests apply their rough surgery, shamanistic rites and medicinal balms to drag warriors back from the gates of Morkai’s realm of death.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> model from your army within 3\" of a friendly <span class=\"tooltip01768\" data-tooltip-content=\"#tooltip_content01768\" data-tooltip-anchor=\"#tooltip_content01768\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">WOLF</span> <span class=\"kwb\">PRIEST</span></span> to be healed. That model regains up to D3 lost wounds. Each model can only be healed once per turn.",
				id: "000004630006",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves biker",
					"space wolves cavalry",
					"space wolves wolf priest",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"biker",
					"space",
					"wolves",
					"cavalry",
					"space",
					"wolves",
					"wolf",
					"priest"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> model from your army within 3\" of a friendly <span class=\"tooltip01768\" data-tooltip-content=\"#tooltip_content01768\" data-tooltip-anchor=\"#tooltip_content01768\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">WOLF</span> <span class=\"kwb\">PRIEST</span></span> to be healed. That model regains up to D3 lost wounds. Each model can only be healed once per turn.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "SCION OF THE FORGE",
				type: "Requisition",
				cp_cost: "1",
				legend: "The Iron Hands do not lack for optimised combat armaments, distributed to the most logical bearers before battle begins.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-3\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-3\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Teeth-of-Mars\">Teeth of Mars</a>, <a href=\"/wh40k9ed/factions/space-marines/#Haywire-Bolts\">Haywire Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003672008",
				field10: "",
				keys: [
					"iron",
					"hands",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-3\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-3\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Teeth-of-Mars\">Teeth of Mars</a>, <a href=\"/wh40k9ed/factions/space-marines/#Haywire-Bolts\">Haywire Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "AGGRESSIVE ONSLAUGHT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Flesh Tearers constantly push towards new foes, moving one step closer to engaging the enemy and sating their lust to kill.",
				source_id: "000000021",
				subfaction_id: "CHFT",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01755\" data-tooltip-content=\"#tooltip_content01755\" data-tooltip-anchor=\"#tooltip_content01755\"><span class=\"kwb\">FLESH</span> <span class=\"kwb\">TEARERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time a model in that unit makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Consolidate\">consolidation move</a>, it can move up to an additional 3\".",
				id: "000004543005",
				field10: "",
				keys: [
					"flesh tearers infantry",
					"flesh",
					"tearers",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01755\" data-tooltip-content=\"#tooltip_content01755\" data-tooltip-anchor=\"#tooltip_content01755\"><span class=\"kwb\">FLESH</span> <span class=\"kwb\">TEARERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time a model in that unit makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Consolidate\">consolidation move</a>, it can move up to an additional 3\".",
				subfaction: "Flesh Tearers"
			},
			{
				faction_id: "SM",
				name: "CLAIM RUNES",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When faced with overwhelming numbers, the Silver Templars employ a system of rune-marking their chosen targets on their autosenses, allowing for pinpoint and hyper-efficient slaughter.",
				source_id: "000000149",
				subfaction_id: "CHST",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01767\" data-tooltip-content=\"#tooltip_content01767\" data-tooltip-anchor=\"#tooltip_content01767\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. If, when it was selected to fight, that unit was within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit containing more models than itself, then until the end of the phase, each time a model in that <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> unit makes an attack:<br><ul><li>Add 1 to the Strength characteristic of that attack.</li><li>Improve the Armour Penetration characteristic of that attack by 1.</li></ul>",
				id: "000005253003",
				field10: "",
				keys: [
					"silver templars primaris",
					"silver",
					"templars",
					"primaris",
					"silver",
					"templars"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01767\" data-tooltip-content=\"#tooltip_content01767\" data-tooltip-anchor=\"#tooltip_content01767\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. If, when it was selected to fight, that unit was within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit containing more models than itself, then until the end of the phase, each time a model in that <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> unit makes an attack:<br><ul><li>Add 1 to the Strength characteristic of that attack.</li><li>Improve the Armour Penetration characteristic of that attack by 1.</li></ul>",
				subfaction: "Silver Templars"
			}
		],
		waha: {
			id: "000001666",
			name: "Incursor Squad",
			link: "https://wahapedia.ru/wh40k9ed/factions/space-marines/Incursor-Squad",
			faction_id: "SM",
			source_id: "000000139",
			role: "Troops",
			unit_composition: "If this unit contains 6 or more models, it has <b>Power Rating 10</b>. Every model is equipped with: bolt pistol; occulus bolt carbine; paired combat blades; frag grenades; krak grenades.",
			transport: "",
			power_points: "5",
			priest: "",
			psyker: "",
			open_play_only: "false",
			crusade_only: "false",
			virtual: "false",
			Cost: "",
			cost_per_unit: "false",
			field17: ""
		}
	},
	{
		name: "Eliminator Squad",
		region: 'AA',
		slot: "Heavy Support",
		faction: "Adeptus Astartes",
		keywords: [
			"infantry",
			"phobos",
			"primaris",
			"eliminator squad",
			"core"
		],
		models: [{
				name: "Eliminator Sergeant",
				faction: "",
				keywords: [],
				weapons: [{
						name: "Bolt pistol",
						amount: "1",
						cantrips: [],
						range: "12\"",
						type: "Pistol 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "-"
					},
					{
						name: "Frag & Krak grenades",
						amount: "1",
						cantrips: [
							"blast"
						],
						range: "6\"",
						type: "Grenade D6",
						s: "3",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Frag & Krak grenades",
						amount: "1",
						cantrips: [],
						range: "6\"",
						type: "Grenade 1",
						s: "6",
						ap: "-1",
						d: "D3",
						abilities: "-"
					},
					{
						name: "Bolt sniper rifle",
						amount: "1",
						cantrips: [],
						range: "-",
						type: "-",
						s: "-",
						ap: "-",
						d: "-",
						abilities: "This weapon can target a CHARACTER even if it is not the closest enemy unit. In addition, when attacking with this weapon, choose one of the profiles below."
					},
					{
						name: "Bolt sniper rifle",
						amount: "1",
						cantrips: [],
						range: "36\"",
						type: "Heavy 1",
						s: "5",
						ap: "-1",
						d: "1",
						abilities: "Each time you select a target for this weapon, you can ignore the Look Out, Sir rule. When resolving an attack made with this weapon, add 1 to the hit roll, and the target does not receive the benefit of cover to its saving throw."
					},
					{
						name: "Bolt sniper rifle",
						amount: "1",
						cantrips: [
							"blast"
						],
						range: "36\"",
						type: "Heavy D3",
						s: "5",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Bolt sniper rifle",
						amount: "1",
						cantrips: [],
						range: "36\"",
						type: "Heavy 1",
						s: "5",
						ap: "-2",
						d: "2",
						abilities: "Each time you select a target for this weapon, you can ignore the Look Out, Sir rule. When resolving an attack made with this weapon, a wound roll of 6+ inflicts 1 mortal wound on the target in addition to any other damage."
					}
				],
				wargear: [],
				amount: "1",
				statlines: [{
					M: "6",
					WS: "3",
					BS: "2",
					S: "4",
					T: "4",
					W: "2",
					A: "3",
					Ld: "8",
					Sv: "3"
				}]
			},
			{
				name: "Eliminator",
				faction: "",
				keywords: [],
				weapons: [{
						name: "Bolt pistol",
						amount: "2",
						cantrips: [],
						range: "12\"",
						type: "Pistol 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "-"
					},
					{
						name: "Frag & Krak grenades",
						amount: "2",
						cantrips: [
							"blast"
						],
						range: "6\"",
						type: "Grenade D6",
						s: "3",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Frag & Krak grenades",
						amount: "2",
						cantrips: [],
						range: "6\"",
						type: "Grenade 1",
						s: "6",
						ap: "-1",
						d: "D3",
						abilities: "-"
					}
				],
				wargear: [],
				amount: "2",
				statlines: [{
					M: "6",
					WS: "3",
					BS: "2",
					S: "4",
					T: "4",
					W: "2",
					A: "2",
					Ld: "7",
					Sv: "3"
				}]
			}
		],
		rules: [{
				name: "Angels of Death",
				desc: "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Shock Assault and Combat Doctrines.",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Concealed Positions",
				desc: "During Deployment when you set up this unit, if every model in this unit has this ability then it can be set up anywhere on the battlefield that is more than 9\" away from the enemy deployment zone  and any enemy models",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Covering Fire",
				desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units and contains an Eliminator Sergeant equipped with an instigator bolt carbine, it can make a Normal Move as if it were your Movement phase.",
				subkeys: null,
				targets: null,
				phases: []
			}
		],
		spells: [],
		stratagems: [{
				faction_id: "SM",
				name: "CRUSADER’S WRATH",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "At a critical point in the battle, the Black Templar host channels its fervour into their strikes, breaking the back of the enemy force in a hatred-fuelled flurry of blows.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault doctrine</a> is active for your army. Until the start of your next Command phase, each time a <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army makes an attack with a <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Select-Weapon\">Melee</a> weapon, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 1. This is cumulative with the bonus from the Assault Doctrine. You can only use this Stratagem once.",
				id: "000003817004",
				field10: "",
				keys: [
					"black",
					"templars"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault doctrine</a> is active for your army. Until the start of your next Command phase, each time a <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army makes an attack with a <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Select-Weapon\">Melee</a> weapon, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 1. This is cumulative with the bonus from the Assault Doctrine. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "SPECIAL-ISSUE LOADOUT",
				type: "Wargear",
				cp_cost: "2",
				legend: "Individual shells are loaded when optimised volleys are required.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you select a <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to shoot. Until the end of the phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> (excluding bolt sniper rifles) without the <a href=\"/wh40k9ed/factions/space-marines/#Special-issue-Ammunition\">Special-issue Ammunition</a> ability that models in that unit are equipped with gain that Special-issue Ammunition ability and their Type characteristic is changed to <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy 1</a>.",
				id: "000004846019",
				field10: "",
				keys: [
					"deathwatch infantry",
					"deathwatch",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you select a <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to shoot. Until the end of the phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> (excluding bolt sniper rifles) without the <a href=\"/wh40k9ed/factions/space-marines/#Special-issue-Ammunition\">Special-issue Ammunition</a> ability that models in that unit are equipped with gain that Special-issue Ammunition ability and their Type characteristic is changed to <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy 1</a>.",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "OCULAR NETWORKING",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When fighting as part of Vanguard Spearhead, Space Marines utilise the sophisticated ocular systems of their Phobos armour to greater efficacy. Sharing combat data across inter-squad networks, they identify weaknesses in even the most resilient foe, deficiencies which precise attacks can take advantage of.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				id: "000006923003",
				field10: "",
				keys: [
					"vanguard",
					"spearhead",
					"monster",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase",
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "DEVOUT PUSH",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "With a zealous cry, the Black Templars press forward towards victory.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00790\" data-tooltip-content=\"#tooltip_content00790\" data-tooltip-anchor=\"#tooltip_content00790\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one of the following:<br><ul><li>If that unit is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> of up to 3\" with that unit. It must end this move either closer to the closest enemy unit or closer to the closest <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>. That unit cannot use this move to <a href=\"/wh40k9ed/the-rules/core-rules/#Embark\">embark</a> within a <a href=\"/wh40k9ed/the-rules/core-rules/#Transports\"><span class=\"kwb\">TRANSPORT</span></a> model.</li><li>If that unit is within Engagement Range of any enemy units, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in move</a> with that unit.</li></ul>",
				id: "000003817002",
				field10: "",
				keys: [
					"black templars core",
					"black templars character",
					"black",
					"templars",
					"core",
					"black",
					"templars",
					"character",
					"transport"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00790\" data-tooltip-content=\"#tooltip_content00790\" data-tooltip-anchor=\"#tooltip_content00790\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one of the following:<br><ul><li>If that unit is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> of up to 3\" with that unit. It must end this move either closer to the closest enemy unit or closer to the closest <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>. That unit cannot use this move to <a href=\"/wh40k9ed/the-rules/core-rules/#Embark\">embark</a> within a <a href=\"/wh40k9ed/the-rules/core-rules/#Transports\"><span class=\"kwb\">TRANSPORT</span></a> model.</li><li>If that unit is within Engagement Range of any enemy units, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in move</a> with that unit.</li></ul>",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "TACTICAL AUGURY",
				type: "Wargear",
				cp_cost: "1",
				legend: "Vanguard Spearheads utilise advanced scanning equipment and orbital augurs to grant them an awareness of the battle-sphere's layout few forces can match. With such tactical advantage, they make pinpoint shots into enemy strongpoints and through dense defence lines, driving the foe out of cover and onto the blades of the Spearhead's encircling executioners.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				id: "000006923008",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "KHAN’S CHAMPION",
				type: "Requisition",
				cp_cost: "1",
				legend: "To earn the respect and praise of your khan is to be gifted superlative tools of war to wield in their name.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#White-Scars-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-1\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-1\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Headtaker-s-Trophies\">Headtaker’s Trophies</a>; <a href=\"/wh40k9ed/factions/space-marines/#Stormwrath-Bolts\">Stormwrath Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003618007",
				field10: "",
				keys: [
					"white",
					"scars",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#White-Scars-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-1\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-1\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Headtaker-s-Trophies\">Headtaker’s Trophies</a>; <a href=\"/wh40k9ed/factions/space-marines/#Stormwrath-Bolts\">Stormwrath Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "THANE OF THE RETINUE",
				type: "Requisition",
				cp_cost: "1",
				legend: "The lords of the Fang are stern but generous masters, who may reward a worthy warrior with an artefact of great power.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"kwb\">WARLORD</span> has the <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> keyword. Select one <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> model from your army that has the word ‘Sergeant’ or ‘Pack Leader’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Space-Wolves-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-9\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-9\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Frost-Weapon\">Frost Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Morkai-s-Teeth-Bolts\">Morkai’s Teeth Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004630012",
				field10: "",
				keys: [
					"warlord",
					"space",
					"wolves",
					"space",
					"wolves",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"kwb\">WARLORD</span> has the <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> keyword. Select one <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> model from your army that has the word ‘Sergeant’ or ‘Pack Leader’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Space-Wolves-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-9\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-9\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Frost-Weapon\">Frost Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Morkai-s-Teeth-Bolts\">Morkai’s Teeth Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "CAST OUT THY BLACKENED SOUL",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Daemonic possession gives each battle-brother of the Exorcists a personal revelation about the nature of daemonkind, and with this knowledge they banish their foe.",
				source_id: "000000152",
				subfaction_id: "CHES",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is selected to shoot, or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span> or <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span> unit from your army is selected to fight. Select one enemy <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">DAEMON</span> unit within 12\" of that unit. Until the end of the phase, each time a model in that friendly unit makes an attack against that enemy unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000005294002",
				field10: "",
				keys: [
					"exorcists core",
					"exorcists character",
					"exorcists",
					"core",
					"exorcists",
					"character",
					"exorcists",
					"core",
					"exorcists",
					"character",
					"chaos",
					"daemon"
				],
				activate: [
					"Shooting phase",
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is selected to shoot, or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span> or <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span> unit from your army is selected to fight. Select one enemy <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">DAEMON</span> unit within 12\" of that unit. Until the end of the phase, each time a model in that friendly unit makes an attack against that enemy unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Exorcists"
			},
			{
				faction_id: "SM",
				name: "PIVOTAL MOMENT",
				type: "Epic Deed",
				cp_cost: "2",
				legend: "There comes a crucial juncture in many battles where opportunity presents a key enemy target for the perfect shot. Whether the culmination of patiently outmanoeuvring the enemy or sheer fate, if the moment is seized, it can turn the tide of whole wars, sending far larger forces into rout.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> <span class=\"kwb\">CORE</span> model from your army is selected to shoot. Until the end of the phase, each time that model makes a ranged attack against an enemy <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a>, a successful <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> inflicts a number of <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a> equal to the Damage characteristic of the weapon used for that attack, and the attack sequence ends.",
				id: "000006923009",
				field10: "",
				keys: [
					"vanguard",
					"spearhead",
					"core",
					"warlord"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> <span class=\"kwb\">CORE</span> model from your army is selected to shoot. Until the end of the phase, each time that model makes a ranged attack against an enemy <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a>, a successful <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> inflicts a number of <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a> equal to the Damage characteristic of the weapon used for that attack, and the attack sequence ends.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "AGGRESSIVE ONSLAUGHT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Flesh Tearers constantly push towards new foes, moving one step closer to engaging the enemy and sating their lust to kill.",
				source_id: "000000021",
				subfaction_id: "CHFT",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01755\" data-tooltip-content=\"#tooltip_content01755\" data-tooltip-anchor=\"#tooltip_content01755\"><span class=\"kwb\">FLESH</span> <span class=\"kwb\">TEARERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time a model in that unit makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Consolidate\">consolidation move</a>, it can move up to an additional 3\".",
				id: "000004543005",
				field10: "",
				keys: [
					"flesh tearers infantry",
					"flesh",
					"tearers",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01755\" data-tooltip-content=\"#tooltip_content01755\" data-tooltip-anchor=\"#tooltip_content01755\"><span class=\"kwb\">FLESH</span> <span class=\"kwb\">TEARERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time a model in that unit makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Consolidate\">consolidation move</a>, it can move up to an additional 3\".",
				subfaction: "Flesh Tearers"
			},
			{
				faction_id: "SM",
				name: "LET THEM COME",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Castellans of the Rift drill and train relentlessly, and have honed their reflexes to almost preternatural levels.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, if that unit was charged this turn, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000007313003",
				field10: "",
				keys: [
					"castellans of the rift core",
					"castellans",
					"of",
					"the",
					"rift",
					"core"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, if that unit was charged this turn, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "PAIN IS A LESSON",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "To the Imperial Fists, pain is but another didactic tool, a reminder of what their forebears endured without complaint and which they, too, must weather unwavering.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in any phase, when an <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> unit from your army that is not a <span class=\"kwb\">VEHICLE</span> or <span class=\"kwb\">SERVITOR</span> is chosen as the target of an enemy attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6; on a 6 that wound is not lost.",
				id: "000003693005",
				field10: "",
				keys: [
					"imperial",
					"fists",
					"vehicle",
					"servitor"
				],
				activate: [
					"Any phase"
				],
				descText: "Use this Stratagem in any phase, when an <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> unit from your army that is not a <span class=\"kwb\">VEHICLE</span> or <span class=\"kwb\">SERVITOR</span> is chosen as the target of an enemy attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6; on a 6 that wound is not lost.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "UNCOMPROMISING FIRE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Switching weapons to full auto, the Space Marines unleash a short-lived but inescapable hail of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				id: "000002164020",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "A DEADLY PRIZE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "If critical objectives look close to falling into enemy hands, the Raven Guard will often plant explosives to deny their capture.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				id: "000003659012",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"End of your turn"
				],
				descText: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "DISPERSAL PROTOCOLS",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Vanguard squads are trained to rapidly disengage from their foe, moving to new positions before attacking once more.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				id: "000006923004",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "GUERILLA TACTICS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "At the opportune moment, Space Marine infiltration units slip away from battle, only to relocate and strike the foe again.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				id: "000002164025",
				field10: "",
				keys: [
					"phobos",
					"phobos"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "COGITATED MARTYRDOM",
				type: "Requisition",
				cp_cost: "1",
				legend: "It is not a difficult sum for a warrior of the Iron Hands to cogitate, that his commanding officers’ lives are worth more to the Imperium than his own.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, when a friendly <span class=\"tooltip01760\" data-tooltip-content=\"#tooltip_content01760\" data-tooltip-anchor=\"#tooltip_content01760\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">CHARACTER</span></span> model (excluding <span class=\"kwb\">VEHICLE</span> models) within 3\" of that unit would lose any wounds as a result of an attack made against that model, that unit can attempt to intercept that attack. Roll one D6 before any rolls to ignore wounds (e.g. <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands:-The-Flesh-is-Weak\">The Flesh is Weak</a>, Adamantine Mantle etc.) are made; on a 2+ that model does not lose those wounds and that unit suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> for each of those wounds. Only one attempt can be made to intercept each attack.",
				id: "000003672012",
				field10: "",
				keys: [
					"iron hands infantry",
					"iron hands character",
					"iron",
					"hands",
					"infantry",
					"iron",
					"hands",
					"character",
					"vehicle"
				],
				activate: [
					"Shooting phase",
					"Enemy Shooting phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, when a friendly <span class=\"tooltip01760\" data-tooltip-content=\"#tooltip_content01760\" data-tooltip-anchor=\"#tooltip_content01760\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">CHARACTER</span></span> model (excluding <span class=\"kwb\">VEHICLE</span> models) within 3\" of that unit would lose any wounds as a result of an attack made against that model, that unit can attempt to intercept that attack. Roll one D6 before any rolls to ignore wounds (e.g. <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands:-The-Flesh-is-Weak\">The Flesh is Weak</a>, Adamantine Mantle etc.) are made; on a 2+ that model does not lose those wounds and that unit suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> for each of those wounds. Only one attempt can be made to intercept each attack.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "MASTER ARTISANS",
				type: "Requisition",
				cp_cost: "1",
				legend: "Even amongst the rank and file of the Salamanders, artefacts of peerless craftsmanship can be found.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">SALAMANDERS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following Chapter Relics, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-5\">Master-crafted weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-5\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Drakeblade\">Drakeblade</a>, <a href=\"/wh40k9ed/factions/space-marines/#Dragonrage-Bolts\">Dragonrage Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003699015",
				field10: "",
				keys: [
					"salamanders",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">SALAMANDERS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following Chapter Relics, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-5\">Master-crafted weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-5\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Drakeblade\">Drakeblade</a>, <a href=\"/wh40k9ed/factions/space-marines/#Dragonrage-Bolts\">Dragonrage Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "TELEPORTARIUM",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Utilising the arcane secrets of teleportation technology, the Deathwatch burst from nowhere to attack.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem during deployment. Select one <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01748\" data-tooltip-content=\"#tooltip_content01748\" data-tooltip-anchor=\"#tooltip_content01748\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">DREADNOUGHT</span></span> or <span class=\"tooltip00411\" data-tooltip-content=\"#tooltip_content00411\" data-tooltip-anchor=\"#tooltip_content00411\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">BIKER</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Teleport-Strike-1\">Teleport Strike</a> ability. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
				id: "000004846015",
				field10: "",
				keys: [
					"deathwatch infantry",
					"deathwatch dreadnought",
					"deathwatch biker",
					"deathwatch",
					"infantry",
					"deathwatch",
					"dreadnought",
					"deathwatch",
					"biker"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during deployment. Select one <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01748\" data-tooltip-content=\"#tooltip_content01748\" data-tooltip-anchor=\"#tooltip_content01748\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">DREADNOUGHT</span></span> or <span class=\"tooltip00411\" data-tooltip-content=\"#tooltip_content00411\" data-tooltip-anchor=\"#tooltip_content00411\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">BIKER</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Teleport-Strike-1\">Teleport Strike</a> ability. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "CHAMPION OF THE FEAST",
				type: "Requisition",
				cp_cost: "1",
				legend: "To triumph over the champions of other Imperial Fists successors requires a warrior of superlative skill and fortitude.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. Add 1 to that model’s Attacks and Wounds characteristics and improve that model’s Weapon Skill characteristic by 1. You can only use this Stratagem once.",
				id: "000003817009",
				field10: "",
				keys: [
					"black",
					"templars"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. Add 1 to that model’s Attacks and Wounds characteristics and improve that model’s Weapon Skill characteristic by 1. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "CLOSE-RANGE BOLTER FIRE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "The ability to hose your foe in bolter fire while battling toe to toe has proven vital across countless trenches and battlements.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> type instead of their normal type (e.g. a <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> 2 bolt weapon becomes Pistol 2).",
				id: "000003693006",
				field10: "",
				keys: [
					"imperial fists core",
					"imperial fists character",
					"imperial",
					"fists",
					"core",
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> type instead of their normal type (e.g. a <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> 2 bolt weapon becomes Pistol 2).",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "CUNNING OF THE WOLF",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "The most successful hunts are those where the prey doesn’t know they are being hunted.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem during deployment. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Outflank\">Outflank</a> ability.",
				id: "000004630003",
				field10: "",
				keys: [
					"space wolves infantry",
					"space",
					"wolves",
					"infantry"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during deployment. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Outflank\">Outflank</a> ability.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "HEALING BALMS",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Learned in arcane biomechanics and chirurgery, Wolf Priests apply their rough surgery, shamanistic rites and medicinal balms to drag warriors back from the gates of Morkai’s realm of death.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> model from your army within 3\" of a friendly <span class=\"tooltip01768\" data-tooltip-content=\"#tooltip_content01768\" data-tooltip-anchor=\"#tooltip_content01768\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">WOLF</span> <span class=\"kwb\">PRIEST</span></span> to be healed. That model regains up to D3 lost wounds. Each model can only be healed once per turn.",
				id: "000004630006",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves biker",
					"space wolves cavalry",
					"space wolves wolf priest",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"biker",
					"space",
					"wolves",
					"cavalry",
					"space",
					"wolves",
					"wolf",
					"priest"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> model from your army within 3\" of a friendly <span class=\"tooltip01768\" data-tooltip-content=\"#tooltip_content01768\" data-tooltip-anchor=\"#tooltip_content01768\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">WOLF</span> <span class=\"kwb\">PRIEST</span></span> to be healed. That model regains up to D3 lost wounds. Each model can only be healed once per turn.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "THE SHIELD UNWAVERING",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Once the Imperial Fists have captured a site of strategic importance, they dig in and hold their position no matter what the enemy hurls at them.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MORALE-PHASE\">Morale phase</a>. Select one <span class=\"tooltip01756\" data-tooltip-content=\"#tooltip_content01756\" data-tooltip-anchor=\"#tooltip_content01756\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 3\" of any <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective markers</a>. Until the start of your next turn, add 1 to the Attacks characteristic of models in that unit, and when resolving an attack made against that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> (excluding <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saves</a>).",
				id: "000003693014",
				field10: "",
				keys: [
					"imperial fists infantry",
					"imperial",
					"fists",
					"infantry"
				],
				activate: [
					"Morale phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MORALE-PHASE\">Morale phase</a>. Select one <span class=\"tooltip01756\" data-tooltip-content=\"#tooltip_content01756\" data-tooltip-anchor=\"#tooltip_content01756\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 3\" of any <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective markers</a>. Until the start of your next turn, add 1 to the Attacks characteristic of models in that unit, and when resolving an attack made against that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> (excluding <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saves</a>).",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "SANCTION OF THE BLACK VAULT",
				type: "Requisition",
				cp_cost: "1",
				legend: "In missions with certain classes of extremis threat rating, the wardens of the Black Vault may grant an exceptional artefact to a veteran warrior of proven skill in the eradication of the xenos.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATHWATCH</span> keyword. Select one <span class=\"kwb\">DEATHWATCH</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Watch-Fortresses\">Relics of the Watch Fortresses</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Armour-10\">Artificer Armour</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-10\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-10\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Banebolts-of-Eryxia\">Banebolts of Eryxia</a>; <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Bolt-Cache\">Artificer Bolt Cache</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004846007",
				field10: "",
				keys: [
					"warlord",
					"deathwatch",
					"deathwatch",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATHWATCH</span> keyword. Select one <span class=\"kwb\">DEATHWATCH</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Watch-Fortresses\">Relics of the Watch Fortresses</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Armour-10\">Artificer Armour</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-10\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-10\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Banebolts-of-Eryxia\">Banebolts of Eryxia</a>; <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Bolt-Cache\">Artificer Bolt Cache</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "STRENGTH OF CONVICTION",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The presence of these black-clad killers can force any challenger to back down, lest the wrath of the Emperor be visited upon them.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the start of your next Command phase, that unit has the <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Secured\">Objective Secured</a> ability.",
				id: "000003817012",
				field10: "",
				keys: [
					"black templars core",
					"black",
					"templars",
					"core"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the start of your next Command phase, that unit has the <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Secured\">Objective Secured</a> ability.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "STRANGLEHOLD",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "By the time the enemy engages the Raven Guard, their rear lines are already in the talon-grip of the Chapter’s covert vanguard, choking them off from vital battlefield support.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				id: "000003659004",
				field10: "",
				keys: [
					"raven guard scout",
					"raven guard phobos",
					"raven",
					"guard",
					"scout",
					"raven",
					"guard",
					"phobos"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "UNBROKEN AND UNBOWED",
				type: "Battle Tactic",
				cp_cost: "2/3",
				legend: "Even when under extremely heavy fire, the Castellans of the Rift hold their ground.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01736\" data-tooltip-content=\"#tooltip_content01736\" data-tooltip-anchor=\"#tooltip_content01736\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected as the target of an attack. While that unit is within range of an <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>, each time a model in that unit would lose a wound, roll one D6: on a 5+, that wound is not lost.<br><br>If that unit has 5 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
				id: "000007313004",
				field10: "",
				keys: [
					"castellans of the rift core infantry",
					"castellans",
					"of",
					"the",
					"rift",
					"core",
					"infantry"
				],
				activate: [
					"Enemy Shooting phase",
					"Being targeted"
				],
				descText: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01736\" data-tooltip-content=\"#tooltip_content01736\" data-tooltip-anchor=\"#tooltip_content01736\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected as the target of an attack. While that unit is within range of an <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>, each time a model in that unit would lose a wound, roll one D6: on a 5+, that wound is not lost.<br><br>If that unit has 5 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "GENE-WROUGHT MIGHT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Blessed with incredible strength, Primaris Space Marines deliver blows that inflict terrifying damage.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				id: "000002164007",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "VICIOUS RIPOSTE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Every blow struck against a Black Templar is answered in kind. Even as they are laid low, their blades still lash out at the enemies of the divine Emperor.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the end of the phase, each time a model in that unit is destroyed by a melee attack and does not explode, roll one D6: on a 5+, after the attacking models unit has finished making its attacks, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> (a unit can suffer a maximum of 6 mortal wounds per phase as the result of this ability).",
				id: "000003817003",
				field10: "",
				keys: [
					"black templars core",
					"black",
					"templars",
					"core"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the end of the phase, each time a model in that unit is destroyed by a melee attack and does not explode, roll one D6: on a 5+, after the attacking models unit has finished making its attacks, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> (a unit can suffer a maximum of 6 mortal wounds per phase as the result of this ability).",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "THE SWORDSMAN’S STRIKE",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "The Silver Templars view all battles, no matter their scale, as a duel between two gestalt opposed combatants. Their battle strategies thus focus on how best to deliver the killing blow that swiftly and decisively ends that duel.",
				source_id: "000000149",
				subfaction_id: "CHST",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01766\" data-tooltip-content=\"#tooltip_content01766\" data-tooltip-anchor=\"#tooltip_content01766\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005253002",
				field10: "",
				keys: [
					"silver templars primaris core",
					"silver",
					"templars",
					"primaris",
					"core",
					"silver",
					"templars",
					"primaris",
					"core",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01766\" data-tooltip-content=\"#tooltip_content01766\" data-tooltip-anchor=\"#tooltip_content01766\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Silver Templars"
			},
			{
				faction_id: "SM",
				name: "REJECT THE FLESH, EMBRACE THE MACHINE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "By trusting in the ironclad gifts of the Omnissiah that stud their flesh, the Iron Hands can withstand even the most punishing attacks of their enemies.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem in any phase, when an <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is chosen as the target for an attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6, adding 1 to the result if that model has the <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Warlord-Traits\">All Flesh is Weakness</a> Warlord Trait. On a 5+ that wound is not lost.",
				id: "000003672009",
				field10: "",
				keys: [
					"iron hands infantry",
					"iron",
					"hands",
					"infantry"
				],
				activate: [
					"Being targeted"
				],
				descText: "Use this Stratagem in any phase, when an <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is chosen as the target for an attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6, adding 1 to the result if that model has the <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Warlord-Traits\">All Flesh is Weakness</a> Warlord Trait. On a 5+ that wound is not lost.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "STEADY ADVANCE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "A measured advance allows Space Marines to unleash a steady stream of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				id: "000002164021",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "SKOVAKARAH UHL ZAÛRN!",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "The battle cry of the Emperor’s Spears is the call that precedes their red work.",
				source_id: "000000151",
				subfaction_id: "CHEM",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01750\" data-tooltip-content=\"#tooltip_content01750\" data-tooltip-anchor=\"#tooltip_content01750\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01751\" data-tooltip-content=\"#tooltip_content01751\" data-tooltip-anchor=\"#tooltip_content01751\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army that made a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>, was charged or <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">performed a Heroic Intervention</a> this turn is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005265002",
				field10: "",
				keys: [
					"emperor’s spears core",
					"emperor’s spears character",
					"emperor’s",
					"spears",
					"core",
					"emperor’s",
					"spears",
					"character"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01750\" data-tooltip-content=\"#tooltip_content01750\" data-tooltip-anchor=\"#tooltip_content01750\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01751\" data-tooltip-content=\"#tooltip_content01751\" data-tooltip-anchor=\"#tooltip_content01751\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army that made a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>, was charged or <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">performed a Heroic Intervention</a> this turn is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Emperor’s Spears"
			},
			{
				faction_id: "SM",
				name: "KEEN SENSES",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The heightened senses of the Space Wolves allow them to sniff out prey wherever, or however, it is hidden.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> unit from your army. Until the end of the turn, you can ignore any or all <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, Ballistic skill and Weapon skill modifiers, and each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> for that unit, you can ignore any or all modifiers to that charge roll.",
				id: "000004630016",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves biker",
					"space wolves cavalry",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"biker",
					"space",
					"wolves",
					"cavalry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> unit from your army. Until the end of the turn, you can ignore any or all <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, Ballistic skill and Weapon skill modifiers, and each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> for that unit, you can ignore any or all modifiers to that charge roll.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "TRACK AND HUNT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "No foe can escape the hunt, nor hide from the master trackers of the Wolfspear.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, then select one enemy unit within 24\" of it. Until the end of your turn, each time a model in that unit makes an attack against that enemy unit, that enemy unit does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> for that attack.",
				id: "000005986002",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, then select one enemy unit within 24\" of it. Until the end of your turn, each time a model in that unit makes an attack against that enemy unit, that enemy unit does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> for that attack.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "SONS OF GUILLIMAN",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Ultramarines fight as the Codex dictates, eschewing individual glory to function as a disciplined, cohesive killing machine.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem when an <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to shoot with in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. If that unit has the Troops <a href=\"/wh40k9ed/the-rules/core-rules/#Battlefield-Role\">Battlefield Role</a>, until the end of that phase, when resolving an attack made by that unit, you can re-roll a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. Otherwise, until the end of that phase, when resolving an attack made by that unit, you can re-roll a hit roll of 1.",
				id: "000003607007",
				field10: "",
				keys: [
					"ultramarines infantry",
					"ultramarines biker",
					"ultramarines",
					"infantry",
					"ultramarines",
					"biker"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase",
					"Shooting phase"
				],
				descText: "Use this Stratagem when an <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to shoot with in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. If that unit has the Troops <a href=\"/wh40k9ed/the-rules/core-rules/#Battlefield-Role\">Battlefield Role</a>, until the end of that phase, when resolving an attack made by that unit, you can re-roll a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. Otherwise, until the end of that phase, when resolving an attack made by that unit, you can re-roll a hit roll of 1.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "FIGHT AS BROTHERS",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Having spent years relying on their trusted brothers, when Emperor’s Spears fight together, little can stay their blows.",
				source_id: "000000151",
				subfaction_id: "CHEM",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01752\" data-tooltip-content=\"#tooltip_content01752\" data-tooltip-anchor=\"#tooltip_content01752\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to fight. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that unit and one or more other friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> units. Until the end of the phase, each time a friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> unit makes a melee attack against that unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000005265003",
				field10: "",
				keys: [
					"emperor’s spears infantry",
					"emperor’s",
					"spears",
					"infantry",
					"emperor’s",
					"spears",
					"infantry",
					"emperor’s",
					"spears",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01752\" data-tooltip-content=\"#tooltip_content01752\" data-tooltip-anchor=\"#tooltip_content01752\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to fight. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that unit and one or more other friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> units. Until the end of the phase, each time a friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> unit makes a melee attack against that unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Emperor’s Spears"
			},
			{
				faction_id: "SM",
				name: "HUNTERS’ FUSILLADE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "White Scars train tirelessly to accurately fire even the heaviest weapons whilst racing into battle.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem when a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit from your army <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advances</a>. Until the end of the turn, <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy weapons</a> and <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire weapons</a> models in that unit are equipped with are treated as <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> (e.g. a Rapid Fire 2 weapon is treated as an Assault 2 weapon).",
				id: "000003618008",
				field10: "",
				keys: [
					"white",
					"scars"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem when a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit from your army <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advances</a>. Until the end of the turn, <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy weapons</a> and <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire weapons</a> models in that unit are equipped with are treated as <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> (e.g. a Rapid Fire 2 weapon is treated as an Assault 2 weapon).",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "SCION OF THE FORGE",
				type: "Requisition",
				cp_cost: "1",
				legend: "The Iron Hands do not lack for optimised combat armaments, distributed to the most logical bearers before battle begins.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-3\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-3\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Teeth-of-Mars\">Teeth of Mars</a>, <a href=\"/wh40k9ed/factions/space-marines/#Haywire-Bolts\">Haywire Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003672008",
				field10: "",
				keys: [
					"iron",
					"hands",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-3\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-3\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Teeth-of-Mars\">Teeth of Mars</a>, <a href=\"/wh40k9ed/factions/space-marines/#Haywire-Bolts\">Haywire Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "KILLING BLOW",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When their prey is bleeding out, the Wolfspear strike hardest to deliver the killing blow.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack, if the target of that attack was below <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Half Strength</a> when it was selected as the target, or if the target has a <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Starting Strength</a> of 1 and had half or less of its wounds remaining when it was selected as the target, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000005986003",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Shooting phase",
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack, if the target of that attack was below <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Half Strength</a> when it was selected as the target, or if the target has a <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Starting Strength</a> of 1 and had half or less of its wounds remaining when it was selected as the target, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "BOLTER DRILL",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "The sons of Dorn maintain strict fire discipline, standing shoulder to shoulder as they unleash devastating volleys of bolt rounds into the foe.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, when resolving an attack made by a model in that unit with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a>, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 scores 1 additional hit.",
				id: "000003693007",
				field10: "",
				keys: [
					"imperial fists core",
					"imperial fists character",
					"imperial",
					"fists",
					"core",
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, when resolving an attack made by a model in that unit with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a>, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 scores 1 additional hit.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "UNFAILING NERVE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "The Castellans hold firm in the face of charging foes, waiting until they can see the white of their eyes before opening fire.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a> that targets a unit within half range, improve the Armour Penetration characteristic of that attack by 1.",
				id: "000007313002",
				field10: "",
				keys: [
					"castellans of the rift core",
					"castellans",
					"of",
					"the",
					"rift",
					"core"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a> that targets a unit within half range, improve the Armour Penetration characteristic of that attack by 1.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "THE EMPEROR’S WILL",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "It is the divine command of the God-Emperor that the Black Templars bring ruin to Humanity’s foes. In battle they are never still, surging towards the enemy, bolters blazing.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01723\" data-tooltip-content=\"#tooltip_content01723\" data-tooltip-anchor=\"#tooltip_content01723\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn. Until the end of the phase:<br><ul><li>That unit is still eligible to shoot with, but you can only make attacks using <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a>, <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> when you select that unit to shoot with.</li><li>Models from that unit do not suffer the penalty incurred to their <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for firing Assault weapons.</li></ul>",
				id: "000003817013",
				field10: "",
				keys: [
					"black templars infantry",
					"black",
					"templars",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01723\" data-tooltip-content=\"#tooltip_content01723\" data-tooltip-anchor=\"#tooltip_content01723\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn. Until the end of the phase:<br><ul><li>That unit is still eligible to shoot with, but you can only make attacks using <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a>, <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> when you select that unit to shoot with.</li><li>Models from that unit do not suffer the penalty incurred to their <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for firing Assault weapons.</li></ul>",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "BUTCHERED QUARRY",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Many attempt to flee from the White Scars’ wrath like prey put to flight. Yet the huntsmen of Chogoris are not so easily evaded.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem when an enemy unit <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Falls Back</a> within 1\" of any <span class=\"tooltip00646\" data-tooltip-content=\"#tooltip_content00646\" data-tooltip-anchor=\"#tooltip_content00646\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01799\" data-tooltip-content=\"#tooltip_content01799\" data-tooltip-anchor=\"#tooltip_content01799\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">BIKER</span></span> units from your army, before it moves. Select one of those <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> units that is not within 1\" of any other enemy units; each model in the selected unit can make one attack with a melee weapon against that enemy unit as if they were within 1\" of it. After these attacks are made, if that enemy unit is not destroyed, it can then make its <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> move; after it has moved, each model in the selected unit can move up to 3\", so long as they end this move closer to that enemy unit and not within 1\" of any enemy units.",
				id: "000003618003",
				field10: "",
				keys: [
					"white scars infantry",
					"white scars biker",
					"white",
					"scars",
					"infantry",
					"white",
					"scars",
					"biker",
					"white",
					"scars"
				],
				activate: [
					"Enemy Movement phase"
				],
				descText: "Use this Stratagem when an enemy unit <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Falls Back</a> within 1\" of any <span class=\"tooltip00646\" data-tooltip-content=\"#tooltip_content00646\" data-tooltip-anchor=\"#tooltip_content00646\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01799\" data-tooltip-content=\"#tooltip_content01799\" data-tooltip-anchor=\"#tooltip_content01799\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">BIKER</span></span> units from your army, before it moves. Select one of those <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> units that is not within 1\" of any other enemy units; each model in the selected unit can make one attack with a melee weapon against that enemy unit as if they were within 1\" of it. After these attacks are made, if that enemy unit is not destroyed, it can then make its <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> move; after it has moved, each model in the selected unit can move up to 3\", so long as they end this move closer to that enemy unit and not within 1\" of any enemy units.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "SQUAD DOCTRINES",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Each squad within an Ultramarines strike force at war is ready to switch to a new combat doctrine at a moment’s notice.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army, then select either the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Devastator</a>, <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Tactical</a> or <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault Doctrine</a>. Until the start of your next Movement phase, that unit gains the bonus of that combat doctrine instead of the active combat doctrine.",
				id: "000003607014",
				field10: "",
				keys: [
					"ultramarines infantry",
					"ultramarines biker",
					"ultramarines",
					"infantry",
					"ultramarines",
					"biker"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army, then select either the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Devastator</a>, <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Tactical</a> or <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault Doctrine</a>. Until the start of your next Movement phase, that unit gains the bonus of that combat doctrine instead of the active combat doctrine.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "THE CRUCIBLE OF BATTLE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Only where the battle is fiercest and the enemy can be faced eye to eye can the Salamanders truly be tested.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00655\" data-tooltip-content=\"#tooltip_content00655\" data-tooltip-anchor=\"#tooltip_content00655\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00838\" data-tooltip-content=\"#tooltip_content00838\" data-tooltip-anchor=\"#tooltip_content00838\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000003699003",
				field10: "",
				keys: [
					"salamanders core",
					"salamanders character",
					"salamanders",
					"core",
					"salamanders",
					"character"
				],
				activate: [
					"Shooting phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00655\" data-tooltip-content=\"#tooltip_content00655\" data-tooltip-anchor=\"#tooltip_content00655\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00838\" data-tooltip-content=\"#tooltip_content00838\" data-tooltip-anchor=\"#tooltip_content00838\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "LAY LOW THE TYRANTS",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Those who would abuse their strength to oppress the weak and humble are amongst the Raven Guard’s most favoured prey.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000003659006",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven guard biker",
					"raven",
					"guard",
					"infantry",
					"raven",
					"guard",
					"biker",
					"character",
					"vehicle",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "LINE UNBREAKABLE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Many foes have charged the Dark Angels’ lines, only to be met by an unbreakable wall of ceramite.",
				source_id: "000000023",
				subfaction_id: "CHDA",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01031\" data-tooltip-content=\"#tooltip_content01031\" data-tooltip-anchor=\"#tooltip_content01031\"><span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, that unit can only be selected as a target for melee attacks if the attacking model is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of it (note that this means that enemy models that are not within Engagement Range but are within 1/2\" of a model from their own unit that is itself within 1/2\" of this <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span> unit cannot target it with melee attacks this phase).",
				id: "000004566006",
				field10: "",
				keys: [
					"dark angels infantry",
					"dark",
					"angels",
					"infantry",
					"dark",
					"angels",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01031\" data-tooltip-content=\"#tooltip_content01031\" data-tooltip-anchor=\"#tooltip_content01031\"><span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, that unit can only be selected as a target for melee attacks if the attacking model is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of it (note that this means that enemy models that are not within Engagement Range but are within 1/2\" of a model from their own unit that is itself within 1/2\" of this <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span> unit cannot target it with melee attacks this phase).",
				subfaction: "Dark Angels"
			},
			{
				faction_id: "SM",
				name: "INFILTRATORS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The Raven Guard are masters of infiltration, slipping unseen across the battlefield before striking from the shadows to annihilate their foes with gun and blade.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				id: "000003659002",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "FAVOUR OF THE RAVENSPIRE",
				type: "Requisition",
				cp_cost: "1",
				legend: "In times of great need, the Raven Guard issue their precious relics to whichever battle-brothers are best placed to employ them, paying little regard to matters of rank.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-2\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-2\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Silentus-Pistol\">Silentus Pistol</a>; <a href=\"/wh40k9ed/factions/space-marines/#Korvidari-Bolts\">Korvidari Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003659015",
				field10: "",
				keys: [
					"raven",
					"guard",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-2\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-2\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Silentus-Pistol\">Silentus Pistol</a>; <a href=\"/wh40k9ed/factions/space-marines/#Korvidari-Bolts\">Korvidari Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "BESTIAL NATURE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Every son of Russ feels the instinctive feral impulses flood through them in battle, a howling and vicious urge to hunt.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a> if a <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a> is active for your army. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> or <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> unit from your army. Until the start of your next Command phase, that unit gains the bonus of the Assault Doctrine instead of the active combat doctrine.",
				id: "000004630014",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves cavalry",
					"space wolves biker",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"cavalry",
					"space",
					"wolves",
					"biker"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a> if a <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a> is active for your army. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> or <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> unit from your army. Until the start of your next Command phase, that unit gains the bonus of the Assault Doctrine instead of the active combat doctrine.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "AUSPEX SCAN",
				type: "Wargear",
				cp_cost: "2",
				legend: "Nearby motion and radiation signatures are detected by a handheld device, forewarning the bearer of ambushes.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				id: "000002164027",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Enemy Movement phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "REVERED REPOSITORIES",
				type: "Requisition",
				cp_cost: "1",
				legend: "The crusade ships of the Black Templars maintain vast armouries of blessed weapons and sacred artefacts.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Eternal-Crusade-1\">Relics of the Eternal Crusade</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Witchseeker-Bolts\">Witchseeker Bolts</a>; <a href=\"/wh40k9ed/factions/space-marines/#Sword-of-Judgement\">Sword of Judgement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Skull-of-the-Cacodominus-Aura-\">Skull of the Cacodominus</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-6\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-6\">Digital Weapons</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000003817007",
				field10: "",
				keys: [
					"black",
					"templars",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Eternal-Crusade-1\">Relics of the Eternal Crusade</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Witchseeker-Bolts\">Witchseeker Bolts</a>; <a href=\"/wh40k9ed/factions/space-marines/#Sword-of-Judgement\">Sword of Judgement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Skull-of-the-Cacodominus-Aura-\">Skull of the Cacodominus</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-6\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-6\">Digital Weapons</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "STAND YOUR GROUND",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Such is their famed endurance that the Salamanders are able to stand firm amidst storms of small-arms fire and lesser blows.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem in any phase, when a <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not a <span class=\"tooltip01765\" data-tooltip-content=\"#tooltip_content01765\" data-tooltip-anchor=\"#tooltip_content01765\"><span class=\"kwb\">SERVITOR</span></span> and did not <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> in this phase or your previous <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> is chosen as the target for an attack. Until the end of that phase, when resolving an attack made with a weapon that has a Damage characteristic of 1 against a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a>. This does not affect <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saving throws</a>.",
				id: "000003699011",
				field10: "",
				keys: [
					"salamanders infantry",
					"servitor",
					"salamanders",
					"infantry",
					"servitor"
				],
				activate: [
					"Any phase"
				],
				descText: "Use this Stratagem in any phase, when a <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not a <span class=\"tooltip01765\" data-tooltip-content=\"#tooltip_content01765\" data-tooltip-anchor=\"#tooltip_content01765\"><span class=\"kwb\">SERVITOR</span></span> and did not <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> in this phase or your previous <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> is chosen as the target for an attack. Until the end of that phase, when resolving an attack made with a weapon that has a Damage characteristic of 1 against a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a>. This does not affect <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saving throws</a>.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "BOLTER DRILL",
				type: "Crimson Fists Stratagem",
				cp_cost: "1",
				legend: "The Crimson Fists maintain strict fire discipline at all times, standing shoulder to shoulder with their battle-brothers as they unleash devastatingly accurate volleys of bolter fire into the foe.",
				source_id: "000000069",
				subfaction_id: "",
				description: "Use this Stratagem just before a <span class=\"tooltip01737\" data-tooltip-content=\"#tooltip_content01737\" data-tooltip-anchor=\"#tooltip_content01737\"><span class=\"kwb\">CRIMSON</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Until the end of the phase, each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6+ for a model from that unit firing a bolt weapon, that model can immediately make another hit roll using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks). For the purposes of this Stratagem, a bolt weapon is any weapon profile whose name includes the word 'bolt’ (e.g. boltgun, bolt rifle, heavy' bolter, boltstorm gauntlet). Duty’s Burden and <a href=\"/wh40k9ed/factions/space-marines/Pedro-Kantor\">Pedro Kantor’s</a> Dorn’s Arrow are also bolt weapons.",
				id: "000003453002",
				field10: "",
				keys: [
					"crimson fists infantry",
					"crimson",
					"fists",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem just before a <span class=\"tooltip01737\" data-tooltip-content=\"#tooltip_content01737\" data-tooltip-anchor=\"#tooltip_content01737\"><span class=\"kwb\">CRIMSON</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Until the end of the phase, each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6+ for a model from that unit firing a bolt weapon, that model can immediately make another hit roll using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks). For the purposes of this Stratagem, a bolt weapon is any weapon profile whose name includes the word 'bolt’ (e.g. boltgun, bolt rifle, heavy' bolter, boltstorm gauntlet). Duty’s Burden and <a href=\"/wh40k9ed/factions/space-marines/Pedro-Kantor\">Pedro Kantor’s</a> Dorn’s Arrow are also bolt weapons."
			},
			{
				faction_id: "SM",
				name: "GIFT OF THE PHALANX",
				type: "Requisition",
				cp_cost: "1",
				legend: "It is not unheard of for especially accomplished Imperial Fists Sergeants to be granted an artefact from the Phalanx’s Reclusiam.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Imperial-Fists-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-4\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-4\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fist-of-Terra\">Fist of Terra</a>; <a href=\"/wh40k9ed/factions/space-marines/#Gatebreaker-Bolts\">Gatebreaker Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003693013",
				field10: "",
				keys: [
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Imperial-Fists-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-4\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-4\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fist-of-Terra\">Fist of Terra</a>; <a href=\"/wh40k9ed/factions/space-marines/#Gatebreaker-Bolts\">Gatebreaker Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "WIND-SWIFT",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "It is said on Chogoris that the sons of the Khan ride the stormwinds themselves, racing swift and wrathful into war.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> after a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit (excluding <span class=\"tooltip01798\" data-tooltip-content=\"#tooltip_content01798\" data-tooltip-anchor=\"#tooltip_content01798\"><span class=\"kwb\">ARTILLERY</span></span>) from your army has made a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> or has <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fallen Back</a>. That unit can make an <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> move. Until the end of the turn, that unit cannot shoot, <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">declare a charge</a> or attempt to <a href=\"/wh40k9ed/the-rules/core-rules/#Manifesting-Psychic-Powers\">manifest</a> any psychic powers.",
				id: "000003618004",
				field10: "",
				keys: [
					"artillery",
					"white",
					"scars",
					"artillery"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> after a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit (excluding <span class=\"tooltip01798\" data-tooltip-content=\"#tooltip_content01798\" data-tooltip-anchor=\"#tooltip_content01798\"><span class=\"kwb\">ARTILLERY</span></span>) from your army has made a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> or has <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fallen Back</a>. That unit can make an <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> move. Until the end of the turn, that unit cannot shoot, <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">declare a charge</a> or attempt to <a href=\"/wh40k9ed/the-rules/core-rules/#Manifesting-Psychic-Powers\">manifest</a> any psychic powers.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "MARKED FOR COMMAND",
				type: "Requisition",
				cp_cost: "1",
				legend: "On occasion, a junior-ranking leader will demonstrate ability expected only of those of much loftier rank. Such individuals are highly rewarded, and marked for greater things.",
				source_id: "000000023",
				subfaction_id: "CHDA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> Ravenwing Huntmaster or Knight Master model or a <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Dark-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-8\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-8\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Atonement\">Atonement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Bolts-of-Judgement\">Bolts of Judgement</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004566009",
				field10: "",
				keys: [
					"dark",
					"angels",
					"dark",
					"angels",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> Ravenwing Huntmaster or Knight Master model or a <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Dark-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-8\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-8\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Atonement\">Atonement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Bolts-of-Judgement\">Bolts of Judgement</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Dark Angels"
			},
			{
				faction_id: "SM",
				name: "HONOURED SERGEANT",
				type: "Requisition",
				cp_cost: "1",
				legend: "Should an Ultramarines Sergeant show particular excellence in battle, they may be given the honour of bearing a Chapter relic into battle.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">ULTRAMARINES</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Hellfury-Bolts\">Hellfury Bolts</a>, <a href=\"/wh40k9ed/factions/space-marines/#Sunwrath-Pistol-1\">Sunwrath Pistol</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003607015",
				field10: "",
				keys: [
					"ultramarines",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">ULTRAMARINES</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Hellfury-Bolts\">Hellfury Bolts</a>, <a href=\"/wh40k9ed/factions/space-marines/#Sunwrath-Pistol-1\">Sunwrath Pistol</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "ANGEL ASCENDANT",
				type: "Requisition",
				cp_cost: "1",
				legend: "Those who exemplify the finest qualities of the Blood Angels will be entrusted to bear powerful wargear into battle.",
				source_id: "000000021",
				subfaction_id: "CHBA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLOOD</span> <span class=\"kwb\">ANGELS</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Blood-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <span class=\"kwb\">CHARACTER</span> model: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-7\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-7\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fleshrender-Grenades\">Fleshrender Grenades</a>; <a href=\"/wh40k9ed/factions/space-marines/#Quake-Bolts\">Quake Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004543010",
				field10: "",
				keys: [
					"blood",
					"angels",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLOOD</span> <span class=\"kwb\">ANGELS</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Blood-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <span class=\"kwb\">CHARACTER</span> model: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-7\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-7\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fleshrender-Grenades\">Fleshrender Grenades</a>; <a href=\"/wh40k9ed/factions/space-marines/#Quake-Bolts\">Quake Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Blood Angels"
			},
			{
				faction_id: "SM",
				name: "TRANSHUMAN PHYSIOLOGY",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "Space Marines can fight through even the most grievous of wounds.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000002164005",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Being targeted"
				],
				descText: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "ORISON CULT",
				type: "Requisition",
				cp_cost: "1/2",
				legend: "The Chapter houses a series of cults, each a proud sub-sect with traditions and associations concerning the role of a battle-brother on the battlefield.",
				source_id: "000000152",
				subfaction_id: "CHES",
				description: "Use this Stratagem before the battle, when you are mustering your army, if every unit in your army has the <span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> keyword (excluding <span class=\"kwb\">AGENT</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">IMPERIUM</span> and <span class=\"kwb\">UNALIGNED</span> units). Select one <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a>. Once per battle, in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, you can select that combat doctrine to be active for that unit instead of any other combat doctrine until the start of your next Command phase. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005294003",
				field10: "",
				keys: [
					"exorcists core",
					"exorcists character",
					"adeptus",
					"astartes",
					"agent",
					"of",
					"the",
					"imperium",
					"unaligned",
					"exorcists",
					"core",
					"exorcists",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if every unit in your army has the <span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> keyword (excluding <span class=\"kwb\">AGENT</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">IMPERIUM</span> and <span class=\"kwb\">UNALIGNED</span> units). Select one <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a>. Once per battle, in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, you can select that combat doctrine to be active for that unit instead of any other combat doctrine until the start of your next Command phase. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Exorcists"
			},
			{
				faction_id: "SM",
				name: "ON THE SCENT",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Sensing when an enemy is weakened and fearing for its survival, the Wolfspear emerge from the shadows for a rapid strike.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that had models destroyed or lost any wounds this turn. Until the end of the turn, each time a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made by a friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, if that enemy unit was selected as a target of that charge, you can re-roll the charge roll.",
				id: "000005986004",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Charge phase"
				],
				descText: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that had models destroyed or lost any wounds this turn. Until the end of the turn, each time a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made by a friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, if that enemy unit was selected as a target of that charge, you can re-roll the charge roll.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "CLAIM RUNES",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When faced with overwhelming numbers, the Silver Templars employ a system of rune-marking their chosen targets on their autosenses, allowing for pinpoint and hyper-efficient slaughter.",
				source_id: "000000149",
				subfaction_id: "CHST",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01767\" data-tooltip-content=\"#tooltip_content01767\" data-tooltip-anchor=\"#tooltip_content01767\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. If, when it was selected to fight, that unit was within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit containing more models than itself, then until the end of the phase, each time a model in that <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> unit makes an attack:<br><ul><li>Add 1 to the Strength characteristic of that attack.</li><li>Improve the Armour Penetration characteristic of that attack by 1.</li></ul>",
				id: "000005253003",
				field10: "",
				keys: [
					"silver templars primaris",
					"silver",
					"templars",
					"primaris",
					"silver",
					"templars"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01767\" data-tooltip-content=\"#tooltip_content01767\" data-tooltip-anchor=\"#tooltip_content01767\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. If, when it was selected to fight, that unit was within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit containing more models than itself, then until the end of the phase, each time a model in that <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> unit makes an attack:<br><ul><li>Add 1 to the Strength characteristic of that attack.</li><li>Improve the Armour Penetration characteristic of that attack by 1.</li></ul>",
				subfaction: "Silver Templars"
			},
			{
				faction_id: "SM",
				name: "STRIKE FROM THE SHADOWS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The deadliest strike comes always from the least expected quarter. So taught Corax.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				id: "000003659008",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				subfaction: "Raven Guard"
			}
		],
		waha: {
			id: "000001611",
			name: "Eliminator Squad",
			link: "https://wahapedia.ru/wh40k9ed/factions/space-marines/Eliminator-Squad",
			faction_id: "SM",
			source_id: "000000139",
			role: "Heavy Support",
			unit_composition: "Every model is equipped with: bolt pistol; bolt sniper rifle; frag grenades; krak grenades; camo cloak.",
			transport: "",
			power_points: "4",
			priest: "",
			psyker: "",
			open_play_only: "false",
			crusade_only: "false",
			virtual: "false",
			Cost: "",
			cost_per_unit: "false",
			field17: ""
		}
	},
	{
		name: "Eliminator Squad",
		region: 'AA',
		slot: "Heavy Support",
		faction: "Adeptus Astartes",
		keywords: [
			"infantry",
			"phobos",
			"primaris",
			"eliminator squad",
			"core"
		],
		models: [{
				name: "Eliminator Sergeant",
				faction: "",
				keywords: [],
				weapons: [{
						name: "Bolt pistol",
						amount: "1",
						cantrips: [],
						range: "12\"",
						type: "Pistol 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "-"
					},
					{
						name: "Frag & Krak grenades",
						amount: "1",
						cantrips: [
							"blast"
						],
						range: "6\"",
						type: "Grenade D6",
						s: "3",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Frag & Krak grenades",
						amount: "1",
						cantrips: [],
						range: "6\"",
						type: "Grenade 1",
						s: "6",
						ap: "-1",
						d: "D3",
						abilities: "-"
					},
					{
						name: "Bolt sniper rifle",
						amount: "1",
						cantrips: [],
						range: "-",
						type: "-",
						s: "-",
						ap: "-",
						d: "-",
						abilities: "This weapon can target a CHARACTER even if it is not the closest enemy unit. In addition, when attacking with this weapon, choose one of the profiles below."
					},
					{
						name: "Bolt sniper rifle",
						amount: "1",
						cantrips: [],
						range: "36\"",
						type: "Heavy 1",
						s: "5",
						ap: "-1",
						d: "1",
						abilities: "Each time you select a target for this weapon, you can ignore the Look Out, Sir rule. When resolving an attack made with this weapon, add 1 to the hit roll, and the target does not receive the benefit of cover to its saving throw."
					},
					{
						name: "Bolt sniper rifle",
						amount: "1",
						cantrips: [
							"blast"
						],
						range: "36\"",
						type: "Heavy D3",
						s: "5",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Bolt sniper rifle",
						amount: "1",
						cantrips: [],
						range: "36\"",
						type: "Heavy 1",
						s: "5",
						ap: "-2",
						d: "2",
						abilities: "Each time you select a target for this weapon, you can ignore the Look Out, Sir rule. When resolving an attack made with this weapon, a wound roll of 6+ inflicts 1 mortal wound on the target in addition to any other damage."
					}
				],
				wargear: [],
				amount: "1",
				statlines: [{
					M: "6",
					WS: "3",
					BS: "2",
					S: "4",
					T: "4",
					W: "2",
					A: "3",
					Ld: "8",
					Sv: "3"
				}]
			},
			{
				name: "Eliminator",
				faction: "",
				keywords: [],
				weapons: [{
						name: "Bolt pistol",
						amount: "2",
						cantrips: [],
						range: "12\"",
						type: "Pistol 1",
						s: "4",
						ap: "0",
						d: "1",
						abilities: "-"
					},
					{
						name: "Frag & Krak grenades",
						amount: "2",
						cantrips: [
							"blast"
						],
						range: "6\"",
						type: "Grenade D6",
						s: "3",
						ap: "0",
						d: "1",
						abilities: "Blast."
					},
					{
						name: "Frag & Krak grenades",
						amount: "2",
						cantrips: [],
						range: "6\"",
						type: "Grenade 1",
						s: "6",
						ap: "-1",
						d: "D3",
						abilities: "-"
					}
				],
				wargear: [],
				amount: "2",
				statlines: [{
					M: "6",
					WS: "3",
					BS: "2",
					S: "4",
					T: "4",
					W: "2",
					A: "2",
					Ld: "7",
					Sv: "3"
				}]
			}
		],
		rules: [{
				name: "Angels of Death",
				desc: "This unit has the following abilities: And They Shall Know No Fear, Bolter Discipline, Shock Assault and Combat Doctrines.",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Concealed Positions",
				desc: "During Deployment when you set up this unit, if every model in this unit has this ability then it can be set up anywhere on the battlefield that is more than 9\" away from the enemy deployment zone  and any enemy models",
				subkeys: null,
				targets: null,
				phases: []
			},
			{
				name: "Covering Fire",
				desc: "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units and contains an Eliminator Sergeant equipped with an instigator bolt carbine, it can make a Normal Move as if it were your Movement phase.",
				subkeys: null,
				targets: null,
				phases: []
			}
		],
		spells: [],
		stratagems: [{
				faction_id: "SM",
				name: "CRUSADER’S WRATH",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "At a critical point in the battle, the Black Templar host channels its fervour into their strikes, breaking the back of the enemy force in a hatred-fuelled flurry of blows.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault doctrine</a> is active for your army. Until the start of your next Command phase, each time a <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army makes an attack with a <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Select-Weapon\">Melee</a> weapon, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 1. This is cumulative with the bonus from the Assault Doctrine. You can only use this Stratagem once.",
				id: "000003817004",
				field10: "",
				keys: [
					"black",
					"templars"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, if the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault doctrine</a> is active for your army. Until the start of your next Command phase, each time a <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army makes an attack with a <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Select-Weapon\">Melee</a> weapon, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 1. This is cumulative with the bonus from the Assault Doctrine. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "SPECIAL-ISSUE LOADOUT",
				type: "Wargear",
				cp_cost: "2",
				legend: "Individual shells are loaded when optimised volleys are required.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you select a <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to shoot. Until the end of the phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> (excluding bolt sniper rifles) without the <a href=\"/wh40k9ed/factions/space-marines/#Special-issue-Ammunition\">Special-issue Ammunition</a> ability that models in that unit are equipped with gain that Special-issue Ammunition ability and their Type characteristic is changed to <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy 1</a>.",
				id: "000004846019",
				field10: "",
				keys: [
					"deathwatch infantry",
					"deathwatch",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you select a <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army to shoot. Until the end of the phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> (excluding bolt sniper rifles) without the <a href=\"/wh40k9ed/factions/space-marines/#Special-issue-Ammunition\">Special-issue Ammunition</a> ability that models in that unit are equipped with gain that Special-issue Ammunition ability and their Type characteristic is changed to <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy 1</a>.",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "OCULAR NETWORKING",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When fighting as part of Vanguard Spearhead, Space Marines utilise the sophisticated ocular systems of their Phobos armour to greater efficacy. Sharing combat data across inter-squad networks, they identify weaknesses in even the most resilient foe, deficiencies which precise attacks can take advantage of.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				id: "000006923003",
				field10: "",
				keys: [
					"vanguard",
					"spearhead",
					"monster",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase",
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack that targets a <span class=\"kwb\">MONSTER</span> or <span class=\"kwb\">VEHICLE</span> unit, on an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 6, improve the Armour Penetration characteristic of that attack by 2 (this is cumulative with the bonus gained from the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Combat Doctrines</a> ability).",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "DEVOUT PUSH",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "With a zealous cry, the Black Templars press forward towards victory.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00790\" data-tooltip-content=\"#tooltip_content00790\" data-tooltip-anchor=\"#tooltip_content00790\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one of the following:<br><ul><li>If that unit is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> of up to 3\" with that unit. It must end this move either closer to the closest enemy unit or closer to the closest <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>. That unit cannot use this move to <a href=\"/wh40k9ed/the-rules/core-rules/#Embark\">embark</a> within a <a href=\"/wh40k9ed/the-rules/core-rules/#Transports\"><span class=\"kwb\">TRANSPORT</span></a> model.</li><li>If that unit is within Engagement Range of any enemy units, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in move</a> with that unit.</li></ul>",
				id: "000003817002",
				field10: "",
				keys: [
					"black templars core",
					"black templars character",
					"black",
					"templars",
					"core",
					"black",
					"templars",
					"character",
					"transport"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00790\" data-tooltip-content=\"#tooltip_content00790\" data-tooltip-anchor=\"#tooltip_content00790\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one of the following:<br><ul><li>If that unit is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> of up to 3\" with that unit. It must end this move either closer to the closest enemy unit or closer to the closest <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>. That unit cannot use this move to <a href=\"/wh40k9ed/the-rules/core-rules/#Embark\">embark</a> within a <a href=\"/wh40k9ed/the-rules/core-rules/#Transports\"><span class=\"kwb\">TRANSPORT</span></a> model.</li><li>If that unit is within Engagement Range of any enemy units, make a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in move</a> with that unit.</li></ul>",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "TACTICAL AUGURY",
				type: "Wargear",
				cp_cost: "1",
				legend: "Vanguard Spearheads utilise advanced scanning equipment and orbital augurs to grant them an awareness of the battle-sphere's layout few forces can match. With such tactical advantage, they make pinpoint shots into enemy strongpoints and through dense defence lines, driving the foe out of cover and onto the blades of the Spearhead's encircling executioners.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				id: "000006923008",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes a ranged attack, the target does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> against that attack.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "KHAN’S CHAMPION",
				type: "Requisition",
				cp_cost: "1",
				legend: "To earn the respect and praise of your khan is to be gifted superlative tools of war to wield in their name.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#White-Scars-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-1\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-1\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Headtaker-s-Trophies\">Headtaker’s Trophies</a>; <a href=\"/wh40k9ed/factions/space-marines/#Stormwrath-Bolts\">Stormwrath Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003618007",
				field10: "",
				keys: [
					"white",
					"scars",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#White-Scars-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-1\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-1\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Headtaker-s-Trophies\">Headtaker’s Trophies</a>; <a href=\"/wh40k9ed/factions/space-marines/#Stormwrath-Bolts\">Stormwrath Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "THANE OF THE RETINUE",
				type: "Requisition",
				cp_cost: "1",
				legend: "The lords of the Fang are stern but generous masters, who may reward a worthy warrior with an artefact of great power.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"kwb\">WARLORD</span> has the <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> keyword. Select one <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> model from your army that has the word ‘Sergeant’ or ‘Pack Leader’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Space-Wolves-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-9\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-9\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Frost-Weapon\">Frost Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Morkai-s-Teeth-Bolts\">Morkai’s Teeth Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004630012",
				field10: "",
				keys: [
					"warlord",
					"space",
					"wolves",
					"space",
					"wolves",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if your <span class=\"kwb\">WARLORD</span> has the <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> keyword. Select one <span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> model from your army that has the word ‘Sergeant’ or ‘Pack Leader’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Space-Wolves-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-9\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-9\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Frost-Weapon\">Frost Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Morkai-s-Teeth-Bolts\">Morkai’s Teeth Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "CAST OUT THY BLACKENED SOUL",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Daemonic possession gives each battle-brother of the Exorcists a personal revelation about the nature of daemonkind, and with this knowledge they banish their foe.",
				source_id: "000000152",
				subfaction_id: "CHES",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is selected to shoot, or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span> or <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span> unit from your army is selected to fight. Select one enemy <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">DAEMON</span> unit within 12\" of that unit. Until the end of the phase, each time a model in that friendly unit makes an attack against that enemy unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000005294002",
				field10: "",
				keys: [
					"exorcists core",
					"exorcists character",
					"exorcists",
					"core",
					"exorcists",
					"character",
					"exorcists",
					"core",
					"exorcists",
					"character",
					"chaos",
					"daemon"
				],
				activate: [
					"Shooting phase",
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when an <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is selected to shoot, or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span> or <span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span> unit from your army is selected to fight. Select one enemy <span class=\"kwb\">CHAOS</span> <span class=\"kwb\">DAEMON</span> unit within 12\" of that unit. Until the end of the phase, each time a model in that friendly unit makes an attack against that enemy unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Exorcists"
			},
			{
				faction_id: "SM",
				name: "PIVOTAL MOMENT",
				type: "Epic Deed",
				cp_cost: "2",
				legend: "There comes a crucial juncture in many battles where opportunity presents a key enemy target for the perfect shot. Whether the culmination of patiently outmanoeuvring the enemy or sheer fate, if the moment is seized, it can turn the tide of whole wars, sending far larger forces into rout.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> <span class=\"kwb\">CORE</span> model from your army is selected to shoot. Until the end of the phase, each time that model makes a ranged attack against an enemy <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a>, a successful <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> inflicts a number of <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a> equal to the Damage characteristic of the weapon used for that attack, and the attack sequence ends.",
				id: "000006923009",
				field10: "",
				keys: [
					"vanguard",
					"spearhead",
					"core",
					"warlord"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> <span class=\"kwb\">CORE</span> model from your army is selected to shoot. Until the end of the phase, each time that model makes a ranged attack against an enemy <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a>, a successful <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> inflicts a number of <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a> equal to the Damage characteristic of the weapon used for that attack, and the attack sequence ends.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "AGGRESSIVE ONSLAUGHT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Flesh Tearers constantly push towards new foes, moving one step closer to engaging the enemy and sating their lust to kill.",
				source_id: "000000021",
				subfaction_id: "CHFT",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01755\" data-tooltip-content=\"#tooltip_content01755\" data-tooltip-anchor=\"#tooltip_content01755\"><span class=\"kwb\">FLESH</span> <span class=\"kwb\">TEARERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time a model in that unit makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Consolidate\">consolidation move</a>, it can move up to an additional 3\".",
				id: "000004543005",
				field10: "",
				keys: [
					"flesh tearers infantry",
					"flesh",
					"tearers",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01755\" data-tooltip-content=\"#tooltip_content01755\" data-tooltip-anchor=\"#tooltip_content01755\"><span class=\"kwb\">FLESH</span> <span class=\"kwb\">TEARERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, each time a model in that unit makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Pile-In\">pile-in</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#Consolidate\">consolidation move</a>, it can move up to an additional 3\".",
				subfaction: "Flesh Tearers"
			},
			{
				faction_id: "SM",
				name: "LET THEM COME",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Castellans of the Rift drill and train relentlessly, and have honed their reflexes to almost preternatural levels.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, if that unit was charged this turn, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000007313003",
				field10: "",
				keys: [
					"castellans of the rift core",
					"castellans",
					"of",
					"the",
					"rift",
					"core"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack, if that unit was charged this turn, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "PAIN IS A LESSON",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "To the Imperial Fists, pain is but another didactic tool, a reminder of what their forebears endured without complaint and which they, too, must weather unwavering.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in any phase, when an <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> unit from your army that is not a <span class=\"kwb\">VEHICLE</span> or <span class=\"kwb\">SERVITOR</span> is chosen as the target of an enemy attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6; on a 6 that wound is not lost.",
				id: "000003693005",
				field10: "",
				keys: [
					"imperial",
					"fists",
					"vehicle",
					"servitor"
				],
				activate: [
					"Any phase"
				],
				descText: "Use this Stratagem in any phase, when an <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> unit from your army that is not a <span class=\"kwb\">VEHICLE</span> or <span class=\"kwb\">SERVITOR</span> is chosen as the target of an enemy attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6; on a 6 that wound is not lost.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "UNCOMPROMISING FIRE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Switching weapons to full auto, the Space Marines unleash a short-lived but inescapable hail of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				id: "000002164020",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is performing an <a href=\"/wh40k9ed/the-rules/core-rules/#Actions\">action</a>. That unit can shoot this phase without that action failing.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "A DEADLY PRIZE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "If critical objectives look close to falling into enemy hands, the Raven Guard will often plant explosives to deny their capture.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				id: "000003659012",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"End of your turn"
				],
				descText: "Use this Stratagem at the end of your turn. Select one <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a> that is within 3\" of any <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> units from your army and not within 3\" of any enemy units. The next time an enemy unit ends a move within 3\" of that objective marker, roll one D6; on a 2-4, that enemy unit suffers D3 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wounds</a>; on a 5+ it suffers 3 mortal wounds. You cannot use this Stratagem on the same objective marker more than once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "DISPERSAL PROTOCOLS",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "Vanguard squads are trained to rapidly disengage from their foe, moving to new positions before attacking once more.",
				source_id: "000000176",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				id: "000006923004",
				field10: "",
				keys: [
					"vanguard",
					"spearhead"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"kwb\">VANGUARD</span> <span class=\"kwb\">SPEARHEAD</span> unit from your army that is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>.",
				subfaction: "Vanguard Spearhead"
			},
			{
				faction_id: "SM",
				name: "GUERILLA TACTICS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "At the opportune moment, Space Marine infiltration units slip away from battle, only to relocate and strike the foe again.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				id: "000002164025",
				field10: "",
				keys: [
					"phobos",
					"phobos"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when a <span class=\"tooltip00637\" data-tooltip-content=\"#tooltip_content00637\" data-tooltip-anchor=\"#tooltip_content00637\"><span class=\"kwb\">PHOBOS</span></span> unit from your army that is more than 6\" from any enemy models is selected to move. If the mission you are playing is using the <a href=\"/wh40k9ed/the-rules/core-rules/#Strategic-Reserves\">Strategic Reserves</a> rule, place that unit into Strategic Reserves. That unit cannot arrive from Strategic Reserves in the same turn it is placed into Strategic Reserves.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "COGITATED MARTYRDOM",
				type: "Requisition",
				cp_cost: "1",
				legend: "It is not a difficult sum for a warrior of the Iron Hands to cogitate, that his commanding officers’ lives are worth more to the Imperium than his own.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, when a friendly <span class=\"tooltip01760\" data-tooltip-content=\"#tooltip_content01760\" data-tooltip-anchor=\"#tooltip_content01760\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">CHARACTER</span></span> model (excluding <span class=\"kwb\">VEHICLE</span> models) within 3\" of that unit would lose any wounds as a result of an attack made against that model, that unit can attempt to intercept that attack. Roll one D6 before any rolls to ignore wounds (e.g. <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands:-The-Flesh-is-Weak\">The Flesh is Weak</a>, Adamantine Mantle etc.) are made; on a 2+ that model does not lose those wounds and that unit suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> for each of those wounds. Only one attempt can be made to intercept each attack.",
				id: "000003672012",
				field10: "",
				keys: [
					"iron hands infantry",
					"iron hands character",
					"iron",
					"hands",
					"infantry",
					"iron",
					"hands",
					"character",
					"vehicle"
				],
				activate: [
					"Shooting phase",
					"Enemy Shooting phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, when a friendly <span class=\"tooltip01760\" data-tooltip-content=\"#tooltip_content01760\" data-tooltip-anchor=\"#tooltip_content01760\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">CHARACTER</span></span> model (excluding <span class=\"kwb\">VEHICLE</span> models) within 3\" of that unit would lose any wounds as a result of an attack made against that model, that unit can attempt to intercept that attack. Roll one D6 before any rolls to ignore wounds (e.g. <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands:-The-Flesh-is-Weak\">The Flesh is Weak</a>, Adamantine Mantle etc.) are made; on a 2+ that model does not lose those wounds and that unit suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> for each of those wounds. Only one attempt can be made to intercept each attack.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "MASTER ARTISANS",
				type: "Requisition",
				cp_cost: "1",
				legend: "Even amongst the rank and file of the Salamanders, artefacts of peerless craftsmanship can be found.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">SALAMANDERS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following Chapter Relics, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-5\">Master-crafted weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-5\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Drakeblade\">Drakeblade</a>, <a href=\"/wh40k9ed/factions/space-marines/#Dragonrage-Bolts\">Dragonrage Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003699015",
				field10: "",
				keys: [
					"salamanders",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">SALAMANDERS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following Chapter Relics, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-5\">Master-crafted weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-5\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Drakeblade\">Drakeblade</a>, <a href=\"/wh40k9ed/factions/space-marines/#Dragonrage-Bolts\">Dragonrage Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "TELEPORTARIUM",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Utilising the arcane secrets of teleportation technology, the Deathwatch burst from nowhere to attack.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem during deployment. Select one <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01748\" data-tooltip-content=\"#tooltip_content01748\" data-tooltip-anchor=\"#tooltip_content01748\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">DREADNOUGHT</span></span> or <span class=\"tooltip00411\" data-tooltip-content=\"#tooltip_content00411\" data-tooltip-anchor=\"#tooltip_content00411\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">BIKER</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Teleport-Strike-1\">Teleport Strike</a> ability. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
				id: "000004846015",
				field10: "",
				keys: [
					"deathwatch infantry",
					"deathwatch dreadnought",
					"deathwatch biker",
					"deathwatch",
					"infantry",
					"deathwatch",
					"dreadnought",
					"deathwatch",
					"biker"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during deployment. Select one <span class=\"tooltip00410\" data-tooltip-content=\"#tooltip_content00410\" data-tooltip-anchor=\"#tooltip_content00410\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01748\" data-tooltip-content=\"#tooltip_content01748\" data-tooltip-anchor=\"#tooltip_content01748\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">DREADNOUGHT</span></span> or <span class=\"tooltip00411\" data-tooltip-content=\"#tooltip_content00411\" data-tooltip-anchor=\"#tooltip_content00411\"><span class=\"kwb\">DEATHWATCH</span> <span class=\"kwb\">BIKER</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Teleport-Strike-1\">Teleport Strike</a> ability. You can only use this Stratagem once, unless you are playing a Strike Force battle (in which case you can use this Stratagem twice), or an Onslaught battle (in which case you can use this Stratagem three times).",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "CHAMPION OF THE FEAST",
				type: "Requisition",
				cp_cost: "1",
				legend: "To triumph over the champions of other Imperial Fists successors requires a warrior of superlative skill and fortitude.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. Add 1 to that model’s Attacks and Wounds characteristics and improve that model’s Weapon Skill characteristic by 1. You can only use this Stratagem once.",
				id: "000003817009",
				field10: "",
				keys: [
					"black",
					"templars"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. Add 1 to that model’s Attacks and Wounds characteristics and improve that model’s Weapon Skill characteristic by 1. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "CLOSE-RANGE BOLTER FIRE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "The ability to hose your foe in bolter fire while battling toe to toe has proven vital across countless trenches and battlements.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> type instead of their normal type (e.g. a <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> 2 bolt weapon becomes Pistol 2).",
				id: "000003693006",
				field10: "",
				keys: [
					"imperial fists core",
					"imperial fists character",
					"imperial",
					"fists",
					"core",
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapons</a> models in that unit are equipped with have the <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a> type instead of their normal type (e.g. a <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> 2 bolt weapon becomes Pistol 2).",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "CUNNING OF THE WOLF",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "The most successful hunts are those where the prey doesn’t know they are being hunted.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem during deployment. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Outflank\">Outflank</a> ability.",
				id: "000004630003",
				field10: "",
				keys: [
					"space wolves infantry",
					"space",
					"wolves",
					"infantry"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during deployment. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. All models in that unit gain the <a href=\"/wh40k9ed/factions/space-marines/#Outflank\">Outflank</a> ability.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "HEALING BALMS",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Learned in arcane biomechanics and chirurgery, Wolf Priests apply their rough surgery, shamanistic rites and medicinal balms to drag warriors back from the gates of Morkai’s realm of death.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> model from your army within 3\" of a friendly <span class=\"tooltip01768\" data-tooltip-content=\"#tooltip_content01768\" data-tooltip-anchor=\"#tooltip_content01768\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">WOLF</span> <span class=\"kwb\">PRIEST</span></span> to be healed. That model regains up to D3 lost wounds. Each model can only be healed once per turn.",
				id: "000004630006",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves biker",
					"space wolves cavalry",
					"space wolves wolf priest",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"biker",
					"space",
					"wolves",
					"cavalry",
					"space",
					"wolves",
					"wolf",
					"priest"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> model from your army within 3\" of a friendly <span class=\"tooltip01768\" data-tooltip-content=\"#tooltip_content01768\" data-tooltip-anchor=\"#tooltip_content01768\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">WOLF</span> <span class=\"kwb\">PRIEST</span></span> to be healed. That model regains up to D3 lost wounds. Each model can only be healed once per turn.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "THE SHIELD UNWAVERING",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Once the Imperial Fists have captured a site of strategic importance, they dig in and hold their position no matter what the enemy hurls at them.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MORALE-PHASE\">Morale phase</a>. Select one <span class=\"tooltip01756\" data-tooltip-content=\"#tooltip_content01756\" data-tooltip-anchor=\"#tooltip_content01756\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 3\" of any <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective markers</a>. Until the start of your next turn, add 1 to the Attacks characteristic of models in that unit, and when resolving an attack made against that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> (excluding <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saves</a>).",
				id: "000003693014",
				field10: "",
				keys: [
					"imperial fists infantry",
					"imperial",
					"fists",
					"infantry"
				],
				activate: [
					"Morale phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MORALE-PHASE\">Morale phase</a>. Select one <span class=\"tooltip01756\" data-tooltip-content=\"#tooltip_content01756\" data-tooltip-anchor=\"#tooltip_content01756\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is within 3\" of any <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective markers</a>. Until the start of your next turn, add 1 to the Attacks characteristic of models in that unit, and when resolving an attack made against that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a> (excluding <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saves</a>).",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "SANCTION OF THE BLACK VAULT",
				type: "Requisition",
				cp_cost: "1",
				legend: "In missions with certain classes of extremis threat rating, the wardens of the Black Vault may grant an exceptional artefact to a veteran warrior of proven skill in the eradication of the xenos.",
				source_id: "000000035",
				subfaction_id: "CHDW",
				description: "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATHWATCH</span> keyword. Select one <span class=\"kwb\">DEATHWATCH</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Watch-Fortresses\">Relics of the Watch Fortresses</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Armour-10\">Artificer Armour</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-10\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-10\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Banebolts-of-Eryxia\">Banebolts of Eryxia</a>; <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Bolt-Cache\">Artificer Bolt Cache</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004846007",
				field10: "",
				keys: [
					"warlord",
					"deathwatch",
					"deathwatch",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if your <a href=\"/wh40k9ed/the-rules/core-rules/#The-Warlord\"><span class=\"kwb\">WARLORD</span></a> has the <span class=\"kwb\">DEATHWATCH</span> keyword. Select one <span class=\"kwb\">DEATHWATCH</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Watch-Fortresses\">Relics of the Watch Fortresses</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Armour-10\">Artificer Armour</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-10\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-10\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Banebolts-of-Eryxia\">Banebolts of Eryxia</a>; <a href=\"/wh40k9ed/factions/space-marines/#Artificer-Bolt-Cache\">Artificer Bolt Cache</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Deathwatch"
			},
			{
				faction_id: "SM",
				name: "STRENGTH OF CONVICTION",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The presence of these black-clad killers can force any challenger to back down, lest the wrath of the Emperor be visited upon them.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the start of your next Command phase, that unit has the <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Secured\">Objective Secured</a> ability.",
				id: "000003817012",
				field10: "",
				keys: [
					"black templars core",
					"black",
					"templars",
					"core"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the start of your next Command phase, that unit has the <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Secured\">Objective Secured</a> ability.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "STRANGLEHOLD",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "By the time the enemy engages the Raven Guard, their rear lines are already in the talon-grip of the Chapter’s covert vanguard, choking them off from vital battlefield support.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				id: "000003659004",
				field10: "",
				keys: [
					"raven guard scout",
					"raven guard phobos",
					"raven",
					"guard",
					"scout",
					"raven",
					"guard",
					"phobos"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins, if your army includes any <span class=\"tooltip01763\" data-tooltip-content=\"#tooltip_content01763\" data-tooltip-anchor=\"#tooltip_content01763\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">SCOUT</span></span> or <span class=\"tooltip00837\" data-tooltip-content=\"#tooltip_content00837\" data-tooltip-anchor=\"#tooltip_content00837\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">PHOBOS</span></span> units. Until the end of that battle round, you can roll one D6 each time your opponent spends <a href=\"/wh40k9ed/the-rules/core-rules/#Command-Points\">Command Points</a> to use a Stratagem; on a 5+ your opponent must spend 1 additional Command Point, or else that Stratagem has no effect and cannot be used again this phase (the Command Points spent so far are lost). You can only use this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "UNBROKEN AND UNBOWED",
				type: "Battle Tactic",
				cp_cost: "2/3",
				legend: "Even when under extremely heavy fire, the Castellans of the Rift hold their ground.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01736\" data-tooltip-content=\"#tooltip_content01736\" data-tooltip-anchor=\"#tooltip_content01736\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected as the target of an attack. While that unit is within range of an <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>, each time a model in that unit would lose a wound, roll one D6: on a 5+, that wound is not lost.<br><br>If that unit has 5 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
				id: "000007313004",
				field10: "",
				keys: [
					"castellans of the rift core infantry",
					"castellans",
					"of",
					"the",
					"rift",
					"core",
					"infantry"
				],
				activate: [
					"Enemy Shooting phase",
					"Being targeted"
				],
				descText: "Use this Stratagem in your opponent’s <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01736\" data-tooltip-content=\"#tooltip_content01736\" data-tooltip-anchor=\"#tooltip_content01736\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected as the target of an attack. While that unit is within range of an <a href=\"/wh40k9ed/the-rules/core-rules/#Objective-Markers\">objective marker</a>, each time a model in that unit would lose a wound, roll one D6: on a 5+, that wound is not lost.<br><br>If that unit has 5 or fewer models, this Stratagem costs 2CP; otherwise, it costs 3CP.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "GENE-WROUGHT MIGHT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Blessed with incredible strength, Primaris Space Marines deliver blows that inflict terrifying damage.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				id: "000002164007",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 automatically wounds the target.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "VICIOUS RIPOSTE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Every blow struck against a Black Templar is answered in kind. Even as they are laid low, their blades still lash out at the enemies of the divine Emperor.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the end of the phase, each time a model in that unit is destroyed by a melee attack and does not explode, roll one D6: on a 5+, after the attacking models unit has finished making its attacks, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> (a unit can suffer a maximum of 6 mortal wounds per phase as the result of this ability).",
				id: "000003817003",
				field10: "",
				keys: [
					"black templars core",
					"black",
					"templars",
					"core"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip00543\" data-tooltip-content=\"#tooltip_content00543\" data-tooltip-anchor=\"#tooltip_content00543\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">CORE</span></span> unit from your army. Until the end of the phase, each time a model in that unit is destroyed by a melee attack and does not explode, roll one D6: on a 5+, after the attacking models unit has finished making its attacks, it suffers 1 <a href=\"/wh40k9ed/the-rules/core-rules/#Mortal-Wounds\">mortal wound</a> (a unit can suffer a maximum of 6 mortal wounds per phase as the result of this ability).",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "THE SWORDSMAN’S STRIKE",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "The Silver Templars view all battles, no matter their scale, as a duel between two gestalt opposed combatants. Their battle strategies thus focus on how best to deliver the killing blow that swiftly and decisively ends that duel.",
				source_id: "000000149",
				subfaction_id: "CHST",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01766\" data-tooltip-content=\"#tooltip_content01766\" data-tooltip-anchor=\"#tooltip_content01766\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005253002",
				field10: "",
				keys: [
					"silver templars primaris core",
					"silver",
					"templars",
					"primaris",
					"core",
					"silver",
					"templars",
					"primaris",
					"core",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01766\" data-tooltip-content=\"#tooltip_content01766\" data-tooltip-anchor=\"#tooltip_content01766\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot, or in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span> <span class=\"kwb\">CORE</span> unit from your army is selected to fight. Until the end of the phase, each time a model in that unit makes an attack against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Silver Templars"
			},
			{
				faction_id: "SM",
				name: "REJECT THE FLESH, EMBRACE THE MACHINE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "By trusting in the ironclad gifts of the Omnissiah that stud their flesh, the Iron Hands can withstand even the most punishing attacks of their enemies.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem in any phase, when an <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is chosen as the target for an attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6, adding 1 to the result if that model has the <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Warlord-Traits\">All Flesh is Weakness</a> Warlord Trait. On a 5+ that wound is not lost.",
				id: "000003672009",
				field10: "",
				keys: [
					"iron hands infantry",
					"iron",
					"hands",
					"infantry"
				],
				activate: [
					"Being targeted"
				],
				descText: "Use this Stratagem in any phase, when an <span class=\"tooltip01757\" data-tooltip-content=\"#tooltip_content01757\" data-tooltip-anchor=\"#tooltip_content01757\"><span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is chosen as the target for an attack. Until the end of that phase, when a model in that unit would lose a wound, roll one D6, adding 1 to the result if that model has the <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Warlord-Traits\">All Flesh is Weakness</a> Warlord Trait. On a 5+ that wound is not lost.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "STEADY ADVANCE",
				type: "Strategic Ploy",
				cp_cost: "2",
				legend: "A measured advance allows Space Marines to unleash a steady stream of fire.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				id: "000002164021",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>, when an <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army makes a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a>. Until the end of the turn, that unit is considered to have <a href=\"/wh40k9ed/the-rules/core-rules/#Remain-Stationary\">Remained Stationary</a>.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "SKOVAKARAH UHL ZAÛRN!",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "The battle cry of the Emperor’s Spears is the call that precedes their red work.",
				source_id: "000000151",
				subfaction_id: "CHEM",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01750\" data-tooltip-content=\"#tooltip_content01750\" data-tooltip-anchor=\"#tooltip_content01750\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01751\" data-tooltip-content=\"#tooltip_content01751\" data-tooltip-anchor=\"#tooltip_content01751\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army that made a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>, was charged or <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">performed a Heroic Intervention</a> this turn is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005265002",
				field10: "",
				keys: [
					"emperor’s spears core",
					"emperor’s spears character",
					"emperor’s",
					"spears",
					"core",
					"emperor’s",
					"spears",
					"character"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01750\" data-tooltip-content=\"#tooltip_content01750\" data-tooltip-anchor=\"#tooltip_content01750\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01751\" data-tooltip-content=\"#tooltip_content01751\" data-tooltip-anchor=\"#tooltip_content01751\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army that made a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge move</a>, was charged or <a href=\"/wh40k9ed/the-rules/core-rules/#Performing-a-Heroic-Intervention\">performed a Heroic Intervention</a> this turn is selected to fight. Until the end of the phase, each time a model in that unit makes a melee attack, add 1 to that attack’s <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Emperor’s Spears"
			},
			{
				faction_id: "SM",
				name: "KEEN SENSES",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The heightened senses of the Space Wolves allow them to sniff out prey wherever, or however, it is hidden.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> unit from your army. Until the end of the turn, you can ignore any or all <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, Ballistic skill and Weapon skill modifiers, and each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> for that unit, you can ignore any or all modifiers to that charge roll.",
				id: "000004630016",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves biker",
					"space wolves cavalry",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"biker",
					"space",
					"wolves",
					"cavalry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> or <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> unit from your army. Until the end of the turn, you can ignore any or all <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>, Ballistic skill and Weapon skill modifiers, and each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> for that unit, you can ignore any or all modifiers to that charge roll.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "TRACK AND HUNT",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "No foe can escape the hunt, nor hide from the master trackers of the Wolfspear.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, then select one enemy unit within 24\" of it. Until the end of your turn, each time a model in that unit makes an attack against that enemy unit, that enemy unit does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> for that attack.",
				id: "000005986002",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the end of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, then select one enemy unit within 24\" of it. Until the end of your turn, each time a model in that unit makes an attack against that enemy unit, that enemy unit does not receive the <a href=\"/wh40k9ed/the-rules/core-rules/#Terrain-and-Cover\">benefits of cover</a> for that attack.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "SONS OF GUILLIMAN",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Ultramarines fight as the Codex dictates, eschewing individual glory to function as a disciplined, cohesive killing machine.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem when an <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to shoot with in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. If that unit has the Troops <a href=\"/wh40k9ed/the-rules/core-rules/#Battlefield-Role\">Battlefield Role</a>, until the end of that phase, when resolving an attack made by that unit, you can re-roll a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. Otherwise, until the end of that phase, when resolving an attack made by that unit, you can re-roll a hit roll of 1.",
				id: "000003607007",
				field10: "",
				keys: [
					"ultramarines infantry",
					"ultramarines biker",
					"ultramarines",
					"infantry",
					"ultramarines",
					"biker"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase",
					"Shooting phase"
				],
				descText: "Use this Stratagem when an <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to shoot with in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. If that unit has the Troops <a href=\"/wh40k9ed/the-rules/core-rules/#Battlefield-Role\">Battlefield Role</a>, until the end of that phase, when resolving an attack made by that unit, you can re-roll a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>. Otherwise, until the end of that phase, when resolving an attack made by that unit, you can re-roll a hit roll of 1.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "FIGHT AS BROTHERS",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "Having spent years relying on their trusted brothers, when Emperor’s Spears fight together, little can stay their blows.",
				source_id: "000000151",
				subfaction_id: "CHEM",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01752\" data-tooltip-content=\"#tooltip_content01752\" data-tooltip-anchor=\"#tooltip_content01752\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to fight. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that unit and one or more other friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> units. Until the end of the phase, each time a friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> unit makes a melee attack against that unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				id: "000005265003",
				field10: "",
				keys: [
					"emperor’s spears infantry",
					"emperor’s",
					"spears",
					"infantry",
					"emperor’s",
					"spears",
					"infantry",
					"emperor’s",
					"spears",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when an <span class=\"tooltip01752\" data-tooltip-content=\"#tooltip_content01752\" data-tooltip-anchor=\"#tooltip_content01752\"><span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army is selected to fight. Select one enemy unit within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of that unit and one or more other friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> units. Until the end of the phase, each time a friendly <span class=\"kwb\">EMPEROR’S</span> <span class=\"kwb\">SPEARS</span> <span class=\"kwb\">INFANTRY</span> unit makes a melee attack against that unit, you can re-roll the <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a>.",
				subfaction: "Emperor’s Spears"
			},
			{
				faction_id: "SM",
				name: "HUNTERS’ FUSILLADE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "White Scars train tirelessly to accurately fire even the heaviest weapons whilst racing into battle.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem when a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit from your army <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advances</a>. Until the end of the turn, <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy weapons</a> and <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire weapons</a> models in that unit are equipped with are treated as <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> (e.g. a Rapid Fire 2 weapon is treated as an Assault 2 weapon).",
				id: "000003618008",
				field10: "",
				keys: [
					"white",
					"scars"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem when a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit from your army <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advances</a>. Until the end of the turn, <a href=\"/wh40k9ed/the-rules/core-rules/#HEAVY\">Heavy weapons</a> and <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire weapons</a> models in that unit are equipped with are treated as <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> (e.g. a Rapid Fire 2 weapon is treated as an Assault 2 weapon).",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "SCION OF THE FORGE",
				type: "Requisition",
				cp_cost: "1",
				legend: "The Iron Hands do not lack for optimised combat armaments, distributed to the most logical bearers before battle begins.",
				source_id: "000000083",
				subfaction_id: "CHIH",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-3\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-3\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Teeth-of-Mars\">Teeth of Mars</a>, <a href=\"/wh40k9ed/factions/space-marines/#Haywire-Bolts\">Haywire Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003672008",
				field10: "",
				keys: [
					"iron",
					"hands",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IRON</span> <span class=\"kwb\">HANDS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Iron-Hands-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-3\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-3\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Teeth-of-Mars\">Teeth of Mars</a>, <a href=\"/wh40k9ed/factions/space-marines/#Haywire-Bolts\">Haywire Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Iron Hands"
			},
			{
				faction_id: "SM",
				name: "KILLING BLOW",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When their prey is bleeding out, the Wolfspear strike hardest to deliver the killing blow.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack, if the target of that attack was below <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Half Strength</a> when it was selected as the target, or if the target has a <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Starting Strength</a> of 1 and had half or less of its wounds remaining when it was selected as the target, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000005986003",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Shooting phase",
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a> or the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot or fight. Until the end of the phase, each time a model in that unit makes an attack, if the target of that attack was below <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Half Strength</a> when it was selected as the target, or if the target has a <a href=\"/wh40k9ed/the-rules/core-rules/#Starting-Strength-Half-strength-and-Destroyed-Units\">Starting Strength</a> of 1 and had half or less of its wounds remaining when it was selected as the target, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "BOLTER DRILL",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "The sons of Dorn maintain strict fire discipline, standing shoulder to shoulder as they unleash devastating volleys of bolt rounds into the foe.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, when resolving an attack made by a model in that unit with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a>, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 scores 1 additional hit.",
				id: "000003693007",
				field10: "",
				keys: [
					"imperial fists core",
					"imperial fists character",
					"imperial",
					"fists",
					"core",
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when you choose an <span class=\"tooltip00652\" data-tooltip-content=\"#tooltip_content00652\" data-tooltip-anchor=\"#tooltip_content00652\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00653\" data-tooltip-content=\"#tooltip_content00653\" data-tooltip-anchor=\"#tooltip_content00653\"><span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army to shoot with. Until the end of that phase, when resolving an attack made by a model in that unit with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a>, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6 scores 1 additional hit.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "UNFAILING NERVE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "The Castellans hold firm in the face of charging foes, waiting until they can see the white of their eyes before opening fire.",
				source_id: "000000193",
				subfaction_id: "CHCR",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a> that targets a unit within half range, improve the Armour Penetration characteristic of that attack by 1.",
				id: "000007313002",
				field10: "",
				keys: [
					"castellans of the rift core",
					"castellans",
					"of",
					"the",
					"rift",
					"core"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, when a <span class=\"tooltip01735\" data-tooltip-content=\"#tooltip_content01735\" data-tooltip-anchor=\"#tooltip_content01735\"><span class=\"kwb\">CASTELLANS</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">RIFT</span> <span class=\"kwb\">CORE</span></span> unit from your army is selected to shoot. Until the end of the phase, each time a model in that unit makes an attack with a <a href=\"/wh40k9ed/factions/space-marines/#Bolt-Weapons\">bolt weapon</a> that targets a unit within half range, improve the Armour Penetration characteristic of that attack by 1.",
				subfaction: "Castellans of the Rift"
			},
			{
				faction_id: "SM",
				name: "THE EMPEROR’S WILL",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "It is the divine command of the God-Emperor that the Black Templars bring ruin to Humanity’s foes. In battle they are never still, surging towards the enemy, bolters blazing.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01723\" data-tooltip-content=\"#tooltip_content01723\" data-tooltip-anchor=\"#tooltip_content01723\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn. Until the end of the phase:<br><ul><li>That unit is still eligible to shoot with, but you can only make attacks using <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a>, <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> when you select that unit to shoot with.</li><li>Models from that unit do not suffer the penalty incurred to their <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for firing Assault weapons.</li></ul>",
				id: "000003817013",
				field10: "",
				keys: [
					"black templars infantry",
					"black",
					"templars",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Select one <span class=\"tooltip01723\" data-tooltip-content=\"#tooltip_content01723\" data-tooltip-anchor=\"#tooltip_content01723\"><span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advanced</a> this turn. Until the end of the phase:<br><ul><li>That unit is still eligible to shoot with, but you can only make attacks using <a href=\"/wh40k9ed/the-rules/core-rules/#PISTOL\">Pistol</a>, <a href=\"/wh40k9ed/the-rules/core-rules/#RAPID-FIRE\">Rapid Fire</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#ASSAULT\">Assault weapons</a> when you select that unit to shoot with.</li><li>Models from that unit do not suffer the penalty incurred to their <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit rolls</a> for firing Assault weapons.</li></ul>",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "BUTCHERED QUARRY",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Many attempt to flee from the White Scars’ wrath like prey put to flight. Yet the huntsmen of Chogoris are not so easily evaded.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem when an enemy unit <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Falls Back</a> within 1\" of any <span class=\"tooltip00646\" data-tooltip-content=\"#tooltip_content00646\" data-tooltip-anchor=\"#tooltip_content00646\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01799\" data-tooltip-content=\"#tooltip_content01799\" data-tooltip-anchor=\"#tooltip_content01799\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">BIKER</span></span> units from your army, before it moves. Select one of those <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> units that is not within 1\" of any other enemy units; each model in the selected unit can make one attack with a melee weapon against that enemy unit as if they were within 1\" of it. After these attacks are made, if that enemy unit is not destroyed, it can then make its <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> move; after it has moved, each model in the selected unit can move up to 3\", so long as they end this move closer to that enemy unit and not within 1\" of any enemy units.",
				id: "000003618003",
				field10: "",
				keys: [
					"white scars infantry",
					"white scars biker",
					"white",
					"scars",
					"infantry",
					"white",
					"scars",
					"biker",
					"white",
					"scars"
				],
				activate: [
					"Enemy Movement phase"
				],
				descText: "Use this Stratagem when an enemy unit <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Falls Back</a> within 1\" of any <span class=\"tooltip00646\" data-tooltip-content=\"#tooltip_content00646\" data-tooltip-anchor=\"#tooltip_content00646\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01799\" data-tooltip-content=\"#tooltip_content01799\" data-tooltip-anchor=\"#tooltip_content01799\"><span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> <span class=\"kwb\">BIKER</span></span> units from your army, before it moves. Select one of those <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> units that is not within 1\" of any other enemy units; each model in the selected unit can make one attack with a melee weapon against that enemy unit as if they were within 1\" of it. After these attacks are made, if that enemy unit is not destroyed, it can then make its <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fall Back</a> move; after it has moved, each model in the selected unit can move up to 3\", so long as they end this move closer to that enemy unit and not within 1\" of any enemy units.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "SQUAD DOCTRINES",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Each squad within an Ultramarines strike force at war is ready to switch to a new combat doctrine at a moment’s notice.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army, then select either the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Devastator</a>, <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Tactical</a> or <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault Doctrine</a>. Until the start of your next Movement phase, that unit gains the bonus of that combat doctrine instead of the active combat doctrine.",
				id: "000003607014",
				field10: "",
				keys: [
					"ultramarines infantry",
					"ultramarines biker",
					"ultramarines",
					"infantry",
					"ultramarines",
					"biker"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01791\" data-tooltip-content=\"#tooltip_content01791\" data-tooltip-anchor=\"#tooltip_content01791\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">INFANTRY</span></span> or <span class=\"tooltip01792\" data-tooltip-content=\"#tooltip_content01792\" data-tooltip-anchor=\"#tooltip_content01792\"><span class=\"kwb\">ULTRAMARINES</span> <span class=\"kwb\">BIKER</span></span> unit from your army, then select either the <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Devastator</a>, <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Tactical</a> or <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">Assault Doctrine</a>. Until the start of your next Movement phase, that unit gains the bonus of that combat doctrine instead of the active combat doctrine.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "THE CRUCIBLE OF BATTLE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Only where the battle is fiercest and the enemy can be faced eye to eye can the Salamanders truly be tested.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00655\" data-tooltip-content=\"#tooltip_content00655\" data-tooltip-anchor=\"#tooltip_content00655\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00838\" data-tooltip-content=\"#tooltip_content00838\" data-tooltip-anchor=\"#tooltip_content00838\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000003699003",
				field10: "",
				keys: [
					"salamanders core",
					"salamanders character",
					"salamanders",
					"core",
					"salamanders",
					"character"
				],
				activate: [
					"Shooting phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting</a> or <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip00655\" data-tooltip-content=\"#tooltip_content00655\" data-tooltip-anchor=\"#tooltip_content00655\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip00838\" data-tooltip-content=\"#tooltip_content00838\" data-tooltip-anchor=\"#tooltip_content00838\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army is chosen to shoot or fight with. Until the end of that phase, when resolving an attack made by a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "LAY LOW THE TYRANTS",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Those who would abuse their strength to oppress the weak and humble are amongst the Raven Guard’s most favoured prey.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				id: "000003659006",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven guard biker",
					"raven",
					"guard",
					"infantry",
					"raven",
					"guard",
					"biker",
					"character",
					"vehicle",
					"vehicle"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem when a <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit or <span class=\"tooltip01762\" data-tooltip-content=\"#tooltip_content01762\" data-tooltip-anchor=\"#tooltip_content01762\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">BIKER</span></span> unit from your army is chosen to fight with in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Until the end of the phase, when resolving an attack made by a model in that unit against a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a> unit that is not a <span class=\"kwb\">VEHICLE</span>, or against a unit that is not a <span class=\"kwb\">VEHICLE</span> and contains any models with a Wounds characteristic of 4 or more, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a>.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "LINE UNBREAKABLE",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Many foes have charged the Dark Angels’ lines, only to be met by an unbreakable wall of ceramite.",
				source_id: "000000023",
				subfaction_id: "CHDA",
				description: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01031\" data-tooltip-content=\"#tooltip_content01031\" data-tooltip-anchor=\"#tooltip_content01031\"><span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, that unit can only be selected as a target for melee attacks if the attacking model is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of it (note that this means that enemy models that are not within Engagement Range but are within 1/2\" of a model from their own unit that is itself within 1/2\" of this <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span> unit cannot target it with melee attacks this phase).",
				id: "000004566006",
				field10: "",
				keys: [
					"dark angels infantry",
					"dark",
					"angels",
					"infantry",
					"dark",
					"angels",
					"infantry"
				],
				activate: [
					"Fight phase",
					"Enemy Fight phase"
				],
				descText: "Use this Stratagem at the start of the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>. Select one <span class=\"tooltip01031\" data-tooltip-content=\"#tooltip_content01031\" data-tooltip-anchor=\"#tooltip_content01031\"><span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. Until the end of the phase, that unit can only be selected as a target for melee attacks if the attacking model is within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of it (note that this means that enemy models that are not within Engagement Range but are within 1/2\" of a model from their own unit that is itself within 1/2\" of this <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> <span class=\"kwb\">INFANTRY</span> unit cannot target it with melee attacks this phase).",
				subfaction: "Dark Angels"
			},
			{
				faction_id: "SM",
				name: "INFILTRATORS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The Raven Guard are masters of infiltration, slipping unseen across the battlefield before striking from the shadows to annihilate their foes with gun and blade.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				id: "000003659002",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"At the start of battle round"
				],
				descText: "Use this Stratagem at the start of the first battle round, before the first turn begins. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is on the battlefield. That unit can move as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. The unit must end that move more than 9\" away from any enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first. Each unit can only be selected for this Stratagem once per battle.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "FAVOUR OF THE RAVENSPIRE",
				type: "Requisition",
				cp_cost: "1",
				legend: "In times of great need, the Raven Guard issue their precious relics to whichever battle-brothers are best placed to employ them, paying little regard to matters of rank.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-2\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-2\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Silentus-Pistol\">Silentus Pistol</a>; <a href=\"/wh40k9ed/factions/space-marines/#Korvidari-Bolts\">Korvidari Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003659015",
				field10: "",
				keys: [
					"raven",
					"guard",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-2\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-2\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Silentus-Pistol\">Silentus Pistol</a>; <a href=\"/wh40k9ed/factions/space-marines/#Korvidari-Bolts\">Korvidari Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Raven Guard"
			},
			{
				faction_id: "SM",
				name: "BESTIAL NATURE",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Every son of Russ feels the instinctive feral impulses flood through them in battle, a howling and vicious urge to hunt.",
				source_id: "000000036",
				subfaction_id: "CHSW",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a> if a <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a> is active for your army. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> or <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> unit from your army. Until the start of your next Command phase, that unit gains the bonus of the Assault Doctrine instead of the active combat doctrine.",
				id: "000004630014",
				field10: "",
				keys: [
					"space wolves infantry",
					"space wolves cavalry",
					"space wolves biker",
					"space",
					"wolves",
					"infantry",
					"space",
					"wolves",
					"cavalry",
					"space",
					"wolves",
					"biker"
				],
				activate: [
					"Command phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a> if a <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a> is active for your army. Select one <span class=\"tooltip00423\" data-tooltip-content=\"#tooltip_content00423\" data-tooltip-anchor=\"#tooltip_content00423\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">INFANTRY</span></span>, <span class=\"tooltip01043\" data-tooltip-content=\"#tooltip_content01043\" data-tooltip-anchor=\"#tooltip_content01043\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">CAVALRY</span></span> or <span class=\"tooltip01049\" data-tooltip-content=\"#tooltip_content01049\" data-tooltip-anchor=\"#tooltip_content01049\"><span class=\"kwb\">SPACE</span> <span class=\"kwb\">WOLVES</span> <span class=\"kwb\">BIKER</span></span> unit from your army. Until the start of your next Command phase, that unit gains the bonus of the Assault Doctrine instead of the active combat doctrine.",
				subfaction: "Space Wolves"
			},
			{
				faction_id: "SM",
				name: "AUSPEX SCAN",
				type: "Wargear",
				cp_cost: "2",
				legend: "Nearby motion and radiation signatures are detected by a handheld device, forewarning the bearer of ambushes.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				id: "000002164027",
				field10: "",
				keys: [
					"adeptus astartes infantry",
					"adeptus",
					"astartes",
					"infantry"
				],
				activate: [
					"Enemy Movement phase"
				],
				descText: "Use this Stratagem at the end of the <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Reinforcements\">Reinforcements step</a> of your opponent's <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a>. Select one <span class=\"tooltip01713\" data-tooltip-content=\"#tooltip_content01713\" data-tooltip-anchor=\"#tooltip_content01713\"><span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of any enemy units. That unit can shoot as if it were your <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>, but its models can only target a single eligible enemy unit that was set up as Reinforcements this turn and that is within 12\" of their unit when doing so.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "REVERED REPOSITORIES",
				type: "Requisition",
				cp_cost: "1",
				legend: "The crusade ships of the Black Templars maintain vast armouries of blessed weapons and sacred artefacts.",
				source_id: "000000162",
				subfaction_id: "CHBT",
				description: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Eternal-Crusade-1\">Relics of the Eternal Crusade</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Witchseeker-Bolts\">Witchseeker Bolts</a>; <a href=\"/wh40k9ed/factions/space-marines/#Sword-of-Judgement\">Sword of Judgement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Skull-of-the-Cacodominus-Aura-\">Skull of the Cacodominus</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-6\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-6\">Digital Weapons</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000003817007",
				field10: "",
				keys: [
					"black",
					"templars",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army. Select one <span class=\"kwb\">BLACK</span> <span class=\"kwb\">TEMPLARS</span> model from your army that has the word ‘Sergeant’ or ‘Sword Brother’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Relics-of-the-Eternal-Crusade-1\">Relics of the Eternal Crusade</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Witchseeker-Bolts\">Witchseeker Bolts</a>; <a href=\"/wh40k9ed/factions/space-marines/#Sword-of-Judgement\">Sword of Judgement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Skull-of-the-Cacodominus-Aura-\">Skull of the Cacodominus</a>; <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-6\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-6\">Digital Weapons</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Black Templars"
			},
			{
				faction_id: "SM",
				name: "STAND YOUR GROUND",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "Such is their famed endurance that the Salamanders are able to stand firm amidst storms of small-arms fire and lesser blows.",
				source_id: "000000085",
				subfaction_id: "CHSA",
				description: "Use this Stratagem in any phase, when a <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not a <span class=\"tooltip01765\" data-tooltip-content=\"#tooltip_content01765\" data-tooltip-anchor=\"#tooltip_content01765\"><span class=\"kwb\">SERVITOR</span></span> and did not <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> in this phase or your previous <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> is chosen as the target for an attack. Until the end of that phase, when resolving an attack made with a weapon that has a Damage characteristic of 1 against a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a>. This does not affect <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saving throws</a>.",
				id: "000003699011",
				field10: "",
				keys: [
					"salamanders infantry",
					"servitor",
					"salamanders",
					"infantry",
					"servitor"
				],
				activate: [
					"Any phase"
				],
				descText: "Use this Stratagem in any phase, when a <span class=\"tooltip01764\" data-tooltip-content=\"#tooltip_content01764\" data-tooltip-anchor=\"#tooltip_content01764\"><span class=\"kwb\">SALAMANDERS</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army that is not a <span class=\"tooltip01765\" data-tooltip-content=\"#tooltip_content01765\" data-tooltip-anchor=\"#tooltip_content01765\"><span class=\"kwb\">SERVITOR</span></span> and did not <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> in this phase or your previous <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> is chosen as the target for an attack. Until the end of that phase, when resolving an attack made with a weapon that has a Damage characteristic of 1 against a model in that unit, add 1 to the <a href=\"/wh40k9ed/the-rules/core-rules/#4.-Saving-Throw\">saving throw</a>. This does not affect <a href=\"/wh40k9ed/the-rules/core-rules/#Invulnerable-Saves\">invulnerable saving throws</a>.",
				subfaction: "Salamanders"
			},
			{
				faction_id: "SM",
				name: "BOLTER DRILL",
				type: "Crimson Fists Stratagem",
				cp_cost: "1",
				legend: "The Crimson Fists maintain strict fire discipline at all times, standing shoulder to shoulder with their battle-brothers as they unleash devastatingly accurate volleys of bolter fire into the foe.",
				source_id: "000000069",
				subfaction_id: "",
				description: "Use this Stratagem just before a <span class=\"tooltip01737\" data-tooltip-content=\"#tooltip_content01737\" data-tooltip-anchor=\"#tooltip_content01737\"><span class=\"kwb\">CRIMSON</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Until the end of the phase, each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6+ for a model from that unit firing a bolt weapon, that model can immediately make another hit roll using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks). For the purposes of this Stratagem, a bolt weapon is any weapon profile whose name includes the word 'bolt’ (e.g. boltgun, bolt rifle, heavy' bolter, boltstorm gauntlet). Duty’s Burden and <a href=\"/wh40k9ed/factions/space-marines/Pedro-Kantor\">Pedro Kantor’s</a> Dorn’s Arrow are also bolt weapons.",
				id: "000003453002",
				field10: "",
				keys: [
					"crimson fists infantry",
					"crimson",
					"fists",
					"infantry"
				],
				activate: [
					"Shooting phase"
				],
				descText: "Use this Stratagem just before a <span class=\"tooltip01737\" data-tooltip-content=\"#tooltip_content01737\" data-tooltip-anchor=\"#tooltip_content01737\"><span class=\"kwb\">CRIMSON</span> <span class=\"kwb\">FISTS</span> <span class=\"kwb\">INFANTRY</span></span> unit attacks in the <a href=\"/wh40k9ed/the-rules/core-rules/#SHOOTING-PHASE\">Shooting phase</a>. Until the end of the phase, each time you make a <a href=\"/wh40k9ed/the-rules/core-rules/#1.-Hit-Roll\">hit roll</a> of 6+ for a model from that unit firing a bolt weapon, that model can immediately make another hit roll using the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks). For the purposes of this Stratagem, a bolt weapon is any weapon profile whose name includes the word 'bolt’ (e.g. boltgun, bolt rifle, heavy' bolter, boltstorm gauntlet). Duty’s Burden and <a href=\"/wh40k9ed/factions/space-marines/Pedro-Kantor\">Pedro Kantor’s</a> Dorn’s Arrow are also bolt weapons."
			},
			{
				faction_id: "SM",
				name: "GIFT OF THE PHALANX",
				type: "Requisition",
				cp_cost: "1",
				legend: "It is not unheard of for especially accomplished Imperial Fists Sergeants to be granted an artefact from the Phalanx’s Reclusiam.",
				source_id: "000000084",
				subfaction_id: "CHIF",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Imperial-Fists-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-4\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-4\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fist-of-Terra\">Fist of Terra</a>; <a href=\"/wh40k9ed/factions/space-marines/#Gatebreaker-Bolts\">Gatebreaker Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003693013",
				field10: "",
				keys: [
					"imperial",
					"fists",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">IMPERIAL</span> <span class=\"kwb\">FISTS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Imperial-Fists-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-4\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-4\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fist-of-Terra\">Fist of Terra</a>; <a href=\"/wh40k9ed/factions/space-marines/#Gatebreaker-Bolts\">Gatebreaker Bolts</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Imperial Fists"
			},
			{
				faction_id: "SM",
				name: "WIND-SWIFT",
				type: "Battle Tactic",
				cp_cost: "2",
				legend: "It is said on Chogoris that the sons of the Khan ride the stormwinds themselves, racing swift and wrathful into war.",
				source_id: "000000078",
				subfaction_id: "CHWS",
				description: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> after a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit (excluding <span class=\"tooltip01798\" data-tooltip-content=\"#tooltip_content01798\" data-tooltip-anchor=\"#tooltip_content01798\"><span class=\"kwb\">ARTILLERY</span></span>) from your army has made a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> or has <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fallen Back</a>. That unit can make an <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> move. Until the end of the turn, that unit cannot shoot, <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">declare a charge</a> or attempt to <a href=\"/wh40k9ed/the-rules/core-rules/#Manifesting-Psychic-Powers\">manifest</a> any psychic powers.",
				id: "000003618004",
				field10: "",
				keys: [
					"artillery",
					"white",
					"scars",
					"artillery"
				],
				activate: [
					"Movement phase"
				],
				descText: "Use this Stratagem in your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phase</a> after a <span class=\"kwb\">WHITE</span> <span class=\"kwb\">SCARS</span> unit (excluding <span class=\"tooltip01798\" data-tooltip-content=\"#tooltip_content01798\" data-tooltip-anchor=\"#tooltip_content01798\"><span class=\"kwb\">ARTILLERY</span></span>) from your army has made a <a href=\"/wh40k9ed/the-rules/core-rules/#Normal-Move\">Normal Move</a> or has <a href=\"/wh40k9ed/the-rules/core-rules/#Fall-Back\">Fallen Back</a>. That unit can make an <a href=\"/wh40k9ed/the-rules/core-rules/#Advance\">Advance</a> move. Until the end of the turn, that unit cannot shoot, <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">declare a charge</a> or attempt to <a href=\"/wh40k9ed/the-rules/core-rules/#Manifesting-Psychic-Powers\">manifest</a> any psychic powers.",
				subfaction: "White Scars"
			},
			{
				faction_id: "SM",
				name: "MARKED FOR COMMAND",
				type: "Requisition",
				cp_cost: "1",
				legend: "On occasion, a junior-ranking leader will demonstrate ability expected only of those of much loftier rank. Such individuals are highly rewarded, and marked for greater things.",
				source_id: "000000023",
				subfaction_id: "CHDA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> Ravenwing Huntmaster or Knight Master model or a <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Dark-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-8\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-8\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Atonement\">Atonement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Bolts-of-Judgement\">Bolts of Judgement</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004566009",
				field10: "",
				keys: [
					"dark",
					"angels",
					"dark",
					"angels",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> Ravenwing Huntmaster or Knight Master model or a <span class=\"kwb\">DARK</span> <span class=\"kwb\">ANGELS</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Dark-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-8\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-8\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Atonement\">Atonement</a>; <a href=\"/wh40k9ed/factions/space-marines/#Bolts-of-Judgement\">Bolts of Judgement</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Dark Angels"
			},
			{
				faction_id: "SM",
				name: "HONOURED SERGEANT",
				type: "Requisition",
				cp_cost: "1",
				legend: "Should an Ultramarines Sergeant show particular excellence in battle, they may be given the honour of bearing a Chapter relic into battle.",
				source_id: "000000077",
				subfaction_id: "CHUL",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">ULTRAMARINES</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Hellfury-Bolts\">Hellfury Bolts</a>, <a href=\"/wh40k9ed/factions/space-marines/#Sunwrath-Pistol-1\">Sunwrath Pistol</a>. All of the Relics your army includes must be different and be given to different models.",
				id: "000003607015",
				field10: "",
				keys: [
					"ultramarines",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">ULTRAMARINES</span> model from your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Ultramarines-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <a href=\"/wh40k9ed/the-rules/core-rules/#Characters\"><span class=\"kwb\">CHARACTER</span></a>: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon\">Master-crafted Weapon</a>, <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons\">Digital Weapons</a>, <a href=\"/wh40k9ed/factions/space-marines/#Hellfury-Bolts\">Hellfury Bolts</a>, <a href=\"/wh40k9ed/factions/space-marines/#Sunwrath-Pistol-1\">Sunwrath Pistol</a>. All of the Relics your army includes must be different and be given to different models.",
				subfaction: "Ultramarines"
			},
			{
				faction_id: "SM",
				name: "ANGEL ASCENDANT",
				type: "Requisition",
				cp_cost: "1",
				legend: "Those who exemplify the finest qualities of the Blood Angels will be entrusted to bear powerful wargear into battle.",
				source_id: "000000021",
				subfaction_id: "CHBA",
				description: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLOOD</span> <span class=\"kwb\">ANGELS</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Blood-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <span class=\"kwb\">CHARACTER</span> model: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-7\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-7\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fleshrender-Grenades\">Fleshrender Grenades</a>; <a href=\"/wh40k9ed/factions/space-marines/#Quake-Bolts\">Quake Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				id: "000004543010",
				field10: "",
				keys: [
					"blood",
					"angels",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle. Select one <span class=\"kwb\">BLOOD</span> <span class=\"kwb\">ANGELS</span> model in your army that has the word ‘Sergeant’ in their profile. That model can have one of the following <a href=\"/wh40k9ed/factions/space-marines/#Blood-Angels-Special-issue-Wargear\">Special-issue Wargear Relics</a>, even though they are not a <span class=\"kwb\">CHARACTER</span> model: <a href=\"/wh40k9ed/factions/space-marines/#Master-crafted-Weapon-7\">Master-crafted Weapon</a>; <a href=\"/wh40k9ed/factions/space-marines/#Digital-Weapons-7\">Digital Weapons</a>; <a href=\"/wh40k9ed/factions/space-marines/#Fleshrender-Grenades\">Fleshrender Grenades</a>; <a href=\"/wh40k9ed/factions/space-marines/#Quake-Bolts\">Quake Bolts</a>. Each Relic in your army must be unique, and you cannot use this Stratagem to give a model two Relics. You can only use this Stratagem once.",
				subfaction: "Blood Angels"
			},
			{
				faction_id: "SM",
				name: "TRANSHUMAN PHYSIOLOGY",
				type: "Battle Tactic",
				cp_cost: "1/2",
				legend: "Space Marines can fight through even the most grievous of wounds.",
				source_id: "",
				subfaction_id: "",
				description: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000002164005",
				field10: "",
				keys: [
					"primaris",
					"primaris"
				],
				activate: [
					"Being targeted"
				],
				descText: "Use this Stratagem in any phase, when a <span class=\"tooltip00325\" data-tooltip-content=\"#tooltip_content00325\" data-tooltip-anchor=\"#tooltip_content00325\"><span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified <a href=\"/wh40k9ed/the-rules/core-rules/#2.-Wound-Roll\">wound roll</a> of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Adeptus Astartes"
			},
			{
				faction_id: "SM",
				name: "ORISON CULT",
				type: "Requisition",
				cp_cost: "1/2",
				legend: "The Chapter houses a series of cults, each a proud sub-sect with traditions and associations concerning the role of a battle-brother on the battlefield.",
				source_id: "000000152",
				subfaction_id: "CHES",
				description: "Use this Stratagem before the battle, when you are mustering your army, if every unit in your army has the <span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> keyword (excluding <span class=\"kwb\">AGENT</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">IMPERIUM</span> and <span class=\"kwb\">UNALIGNED</span> units). Select one <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a>. Once per battle, in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, you can select that combat doctrine to be active for that unit instead of any other combat doctrine until the start of your next Command phase. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				id: "000005294003",
				field10: "",
				keys: [
					"exorcists core",
					"exorcists character",
					"adeptus",
					"astartes",
					"agent",
					"of",
					"the",
					"imperium",
					"unaligned",
					"exorcists",
					"core",
					"exorcists",
					"character"
				],
				activate: [
					"Before battle"
				],
				descText: "Use this Stratagem before the battle, when you are mustering your army, if every unit in your army has the <span class=\"kwb\">ADEPTUS</span> <span class=\"kwb\">ASTARTES</span> keyword (excluding <span class=\"kwb\">AGENT</span> <span class=\"kwb2\">OF</span> <span class=\"kwb2\">THE</span> <span class=\"kwb\">IMPERIUM</span> and <span class=\"kwb\">UNALIGNED</span> units). Select one <span class=\"tooltip01753\" data-tooltip-content=\"#tooltip_content01753\" data-tooltip-anchor=\"#tooltip_content01753\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CORE</span></span> or <span class=\"tooltip01754\" data-tooltip-content=\"#tooltip_content01754\" data-tooltip-anchor=\"#tooltip_content01754\"><span class=\"kwb\">EXORCISTS</span> <span class=\"kwb\">CHARACTER</span></span> unit from your army, then select one <a href=\"/wh40k9ed/factions/space-marines/#Combat-Doctrines\">combat doctrine</a>. Once per battle, in your <a href=\"/wh40k9ed/the-rules/core-rules/#COMMAND-PHASE\">Command phase</a>, you can select that combat doctrine to be active for that unit instead of any other combat doctrine until the start of your next Command phase. If that unit contains 5 or fewer models, this Stratagem costs 1CP; otherwise, it costs 2CP.",
				subfaction: "Exorcists"
			},
			{
				faction_id: "SM",
				name: "ON THE SCENT",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "Sensing when an enemy is weakened and fearing for its survival, the Wolfspear emerge from the shadows for a rapid strike.",
				source_id: "000000163",
				subfaction_id: "CHWO",
				description: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that had models destroyed or lost any wounds this turn. Until the end of the turn, each time a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made by a friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, if that enemy unit was selected as a target of that charge, you can re-roll the charge roll.",
				id: "000005986004",
				field10: "",
				keys: [
					"wolfspear core",
					"wolfspear",
					"core"
				],
				activate: [
					"Charge phase"
				],
				descText: "Use this Stratagem at the start of your <a href=\"/wh40k9ed/the-rules/core-rules/#CHARGE-PHASE\">Charge phase</a>. Select one enemy unit that had models destroyed or lost any wounds this turn. Until the end of the turn, each time a <a href=\"/wh40k9ed/the-rules/core-rules/#Charging-with-a-Unit\">charge roll</a> is made by a friendly <span class=\"tooltip01801\" data-tooltip-content=\"#tooltip_content01801\" data-tooltip-anchor=\"#tooltip_content01801\"><span class=\"kwb\">WOLFSPEAR</span> <span class=\"kwb\">CORE</span></span> unit, if that enemy unit was selected as a target of that charge, you can re-roll the charge roll.",
				subfaction: "Wolfspear"
			},
			{
				faction_id: "SM",
				name: "CLAIM RUNES",
				type: "Battle Tactic",
				cp_cost: "1",
				legend: "When faced with overwhelming numbers, the Silver Templars employ a system of rune-marking their chosen targets on their autosenses, allowing for pinpoint and hyper-efficient slaughter.",
				source_id: "000000149",
				subfaction_id: "CHST",
				description: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01767\" data-tooltip-content=\"#tooltip_content01767\" data-tooltip-anchor=\"#tooltip_content01767\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. If, when it was selected to fight, that unit was within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit containing more models than itself, then until the end of the phase, each time a model in that <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> unit makes an attack:<br><ul><li>Add 1 to the Strength characteristic of that attack.</li><li>Improve the Armour Penetration characteristic of that attack by 1.</li></ul>",
				id: "000005253003",
				field10: "",
				keys: [
					"silver templars primaris",
					"silver",
					"templars",
					"primaris",
					"silver",
					"templars"
				],
				activate: [
					"Enemy Fight phase",
					"Fight phase"
				],
				descText: "Use this Stratagem in the <a href=\"/wh40k9ed/the-rules/core-rules/#FIGHT-PHASE\">Fight phase</a>, when a <span class=\"tooltip01767\" data-tooltip-content=\"#tooltip_content01767\" data-tooltip-anchor=\"#tooltip_content01767\"><span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> <span class=\"kwb\">PRIMARIS</span></span> unit from your army is selected to fight. If, when it was selected to fight, that unit was within <a href=\"/wh40k9ed/the-rules/core-rules/#Engagement-Range\">Engagement Range</a> of an enemy unit containing more models than itself, then until the end of the phase, each time a model in that <span class=\"kwb\">SILVER</span> <span class=\"kwb\">TEMPLARS</span> unit makes an attack:<br><ul><li>Add 1 to the Strength characteristic of that attack.</li><li>Improve the Armour Penetration characteristic of that attack by 1.</li></ul>",
				subfaction: "Silver Templars"
			},
			{
				faction_id: "SM",
				name: "STRIKE FROM THE SHADOWS",
				type: "Strategic Ploy",
				cp_cost: "1",
				legend: "The deadliest strike comes always from the least expected quarter. So taught Corax.",
				source_id: "000000082",
				subfaction_id: "CHRG",
				description: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				id: "000003659008",
				field10: "",
				keys: [
					"raven guard infantry",
					"raven",
					"guard",
					"infantry"
				],
				activate: [
					"During deployment"
				],
				descText: "Use this Stratagem during the Declare Reserves and Transports step of your mission. Select one <span class=\"tooltip01761\" data-tooltip-content=\"#tooltip_content01761\" data-tooltip-anchor=\"#tooltip_content01761\"><span class=\"kwb\">RAVEN</span> <span class=\"kwb\">GUARD</span> <span class=\"kwb\">INFANTRY</span></span> unit from your army. You can set up that unit in ambush instead of setting it up on the battlefield. If you do, at the end of one of your <a href=\"/wh40k9ed/the-rules/core-rules/#MOVEMENT-PHASE\">Movement phases</a> you can set up that unit anywhere on the battlefield that is more than 9\" away from any enemy models.",
				subfaction: "Raven Guard"
			}
		],
		waha: {
			id: "000001611",
			name: "Eliminator Squad",
			link: "https://wahapedia.ru/wh40k9ed/factions/space-marines/Eliminator-Squad",
			faction_id: "SM",
			source_id: "000000139",
			role: "Heavy Support",
			unit_composition: "Every model is equipped with: bolt pistol; bolt sniper rifle; frag grenades; krak grenades; camo cloak.",
			transport: "",
			power_points: "4",
			priest: "",
			psyker: "",
			open_play_only: "false",
			crusade_only: "false",
			virtual: "false",
			Cost: "",
			cost_per_unit: "false",
			field17: ""
		}
	}
]
