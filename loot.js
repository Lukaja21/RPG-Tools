function loot_generator() {
	var loots = ["Air Rune(s)", "Arcane Rune(s)", "Astral Rune(s)", "Blood Rune(s)", "Body Rune(s)", "Bone Rune(s)", "Chaos Rune(s)", "Cosmic Rune(s)", "Death Rune(s)", "Dust Rune(s)", "Earth Rune(s)", "Fire Rune(s)", "Fury Rune(s)", "Ice Rune(s)", "Iron Rune(s)", "Lava Rune(s)", "Life Rune(s)", "Light Rune(s)", "Lunar Rune(s)", "Metal Rune(s)", "Mind Rune(s)", "Nature Rune(s)", "Shadow Rune(s)", "Smoke Rune(s)", "Solar Rune(s)", "Soul Rune(s)", "Spirit Rune(s)", "Tempest Rune(s)", "Void Rune(s)", "Water Rune(s)", "Arbalest", "Axe", "Barrier", "Battlehamer", "Bow", "Broad Axe", "Broadsword", "Buckler", "Bulwark", "Claymore", "Crossbow", "Dagger", "Etcher", "Flail", "Greatshield", "Halberd", "Harpoon", "Javelin", "Katana", "Kite Shield", "Lance", "Longbow", "Longsword", "Maul", "Morning Star", "Pike", "Polearm", "Ranseur", "Rapier", "Reaver", "Recurve", "Sabre", "Scimitar", "Shield", "Shiv", "Spear", "Staff", "Stiletto", "Tower Shield", "Trident", "Wand", "Warbow", "Warmace", "Amulet(s)", "Anklet(s)", "Armlet(s)", "Bracelet(s)", "Brooch(es)", "Choker(s)", "Crown(s)", "Earring(s)", "Emblem(s)", "Hairpin(s)", "Locket(s)", "Medallion(s)", "Necklace(s)", "Pendant(s)", "Pin(s)", "Ring(s)", "Tiara(s)", "Set(s) of Bagpipes", "Bell(s)", "Set(s) of Chimes", "Cymbal(s)", "Djembe(s)", "Drum(s)", "Fiddle(s)", "Flute(s)", "Guitar(s)", "Harmonica(s)", "Harp(s)", "Horn(s)", "Lute(s)", "Lyre(s)", "Mandolin(s)", "Ocarina(s)", "Set(s) of Pipes", "Tambourine(s)", "Viola(s)", "Violin(s)", "Abyss Root(s)", "Angel's Ivy(s)", "Animal Fat(s)", "Antler(s)", "Arctic Weed(s)", "Aspen Conk(s)", "Assassin Brier(s)", "Banded Polypore(s)", "Banshee Joy(s)", "Beehive Husk(s)", "Bindweed(s)", "Bird Egg(s)", "Bird Feather(s)", "Bird's Nest(s)", "Bitter Lily(s)", "Black Sorrel(s)", "Blister Thorn(s)", "Boar Tusk(s)", "Bone Meal(s)", "Branched Inkcap(s)", "Brittle Cap(s)", "Bug Thorax(es)", "Butterfly Wing(s)", "Cactus Spine(s)", "Chameleon Sage(s)", "Charcoal(s)", "Chitin(s)", "Clean Ash(es)", "Clustered Ball Lichen(s)", "Cobweb(s)", "Crimson Deathcap(s)", "Dawn Clove(s)", "Death Lotus(es)", "Death's Nightshade(s)", "Demon Daisy(s)", "Demon Needle(s)", "Devil Cassia(s)", "Dragon Poppy(s)", "Dragon's Tea(s)", "Drake Weed(s)", "Eagle Root(s)", "Ectoplasm(s)", "Eyeball(s)", "Eyelash Morel(s)", "Fairy Slipper(s)", "Fairymoss(es)", "False Coral(s)", "Fawn Amanita(s)", "Feverfew(s)", "Firefly(s)", "Fish Oil(s)", "Fish Scale(s)", "Fragile Elfcup(s)", "Fragrant Sugarplum(s)", "Frog Spawn(s)", "Garlic Flake(s)", "Giant Root(s)", "Glacier Lilac(s)", "Glow Dust(s)", "Glow Nettle(s)", "Golden Fluxroot(s)", "Grand Aconite(s)", "Grand Broadleaf(s)", "Grass Pod(s)", "Hairy Lichen(s)", "Handful(s) of Roe", "Horn Flake(s)", "Lion Laurel(s)", "Living Bark(s)", "Long Horn(s)", "Lunar Flake(s)", "Lunar Hair(s)", "Meadow Beacon(s)", "Mimic Tassel(s)", "Moth Wing(s)", "Mountain Dindle(s)", "Nightmare Sanguinary(s)", "Nordic Snowdrop(s)", "Ocean Bloom(s)", "Pygmy Blossom(s)", "Rash Rye(s)", "Raven Vine(s)", "Sanguine Seed(s)", "Screaming Nettle(s)", "Seaweed(s)", "Serpent Hemp(s)", "Set(s) of Inky Tooth", "Set(s) of Jelly Fungus", "Silver Dust(s)", "Skin Flake(s)", "Skull Grass(es)", "Slime Mold(s)", "Snowy Rooter(s)", "Solar Cap(s)", "Solar Salt(s)", "Spider Berry(s)", "Spider Egg(s)", "Swamp Tar(s)", "Sweet Button(s)", "Sweetbread Mushroom(s)", "Tall Bindweed(s)", "Thunder Thorn(s)", "Toad Slime(s)", "Tree Sap(s)", "Truffle Tongue(s)", "Tusk Powder(s)", "Twilight Flower(s)", "Vial(s) of Serpent Venom", "Waxy Mildew(s)", "Weeping Deadnettle(s)", "Winter Stinkhorn(s)", "Wolf Rose(s)", "Adorned Cup(s)", "Adorned Drinking Horn(s)", "Adorned Vial(s)", "Animal Bone(s)", "Animal Cage(s)", "Animal Figurine(s)", "Animal Fur(s)", "Animal Hide(s)", "Animal Horn(s)", "Animal Paw(s)", "Animal Scale(s)", "Animal Skin(s)", "Animal Skull(s)", "Animal Tail(s)", "Animal Trap(s)", "Animal Tusk(s)", "Belt(s)", "Bird Cage(s)", "Bolt(s) of Cotton", "Bolt(s) of Leather", "Bolt(s) of Silk", "Bolt(s) of Wool", "Bone Statuette(s)", "Book(s)", "Bottle(s) of Beer", "Bottle(s) of Wine", "Bowl(s)", "Button(s)", "Cane(s)", "Carved Wood", "Ceremonial Blade(s)", "Ceremonial Bowl(s)", "Ceremonial Cup(s)", "Ceremonial Dagger(s)", "Ceremonial Robe(s)", "Ceremonial Staff(s)", "Compass(es)", "Cup(s) of Ointment", "Cushion(s)", "Drinking Horn(s)", "Exotic Spice(s)", "Fan(s)", "Figurine(s)", "Ivory Figurine(s)", "Jewelry Box(es)", "Keg(s)", "Lantern(s)", "Leather Bag(s)", "Marble Figurine(s)", "Mask(s)", "Mirror(s)", "Monocle(s)", "Mug(s)", "Music Box(es)", "Perfume Bottle(s)", "Perfume Vial(s)", "Pillow(s)", "Plate(s)", "Prayer Beads Necklace(s)", "Quill(s)", "Rare Bird Feather(s)", "Rare Book(s)", "Rare Tome(s)", "Religious Figurine(s)", "Rod(s)", "Satchel(s)", "Scepter(s)", "Set of Animal Teeth", "Set(s) of Goggles", "Set(s) of Playing Cards", "Set(s) of Shackles", "Set(s) of Spectacles", "Sextant(s)", "Spyglass(es)", "Statuette(s)", "Tome(s)", "Urn(s)", "Vestment(s)", "Vial(s) of Ink", "Vial(s) of Liquid", "War Mask(s)", "Watch(es)", "Agate(s)", "Amber(s)", "Amethyst(s)", "Aquamarine(s)", "Azurite(s)", "Beryl(s)", "Black Pearl(s)", "Bloodstone(s)", "Citrine(s)", "Coral(s)", "Diamond(s)", "Emerald(s)", "Fluorite(s)", "Hematite(s)", "Jade(s)", "Jasper(s)", "Lapis Lazuli(s)", "Malachite(s)", "Moonstone(s)", "Moss Agate(s)", "Obsidian(s)", "Onyx(es)", "Opal(s)", "Pearl(s)", "Peridot(s)", "Pyrite(s)", "Quartz(es)", "Ruby(s)", "Sapphire(s)", "Spinel(s)", "Tanzanite(s)", "Tiger Eye(s)", "Topaz(es)", "Turquoise(s)", "Zircon(s)", "Blazer(s)", "Blouse(s)", "Pair(s) of Boots", "Bow(s)", "Pair(s) of Breeches", "Cloak(s)", "Corset(s)", "Dress(es)", "Pair(s) of Gloves", "Hat(s)", "Jersey(s)", "Jumper(s)", "Kilt(s)", "Kimono(s)", "Nightgown(s)", "Nightshirt(s)", "Robe(s)", "Scarf(s)", "Shirt(s)", "Pair(s) of Shorts", "Skirt(s)", "Pair(s) of Slippers", "Pair(s) of Stockings", "Sweater(s)", "Pair(s) of Trousers", "Turban(s)", "Vest(s)", "Bronze Arrow(s)", "Iron Arrow(s)", "Steel Arrow(s)", "Mitrhril Arrow(s)", "Stone Arrow(s)", "Bone Arrow(s)", "Quartz Arrow(s)", "Obsidian Arrow(s)", "Flint Arrow(s)", "Wooden Arrow(s)", "Glass Arrow(s)", "Armguard(s)", "Armwrap(s)", "Band(s)", "Binding(s)", "Pair of Boots", "Breastplate(s)", "Breeches", "Cloak(s)", "Coif(s)", "Cord(s)", "Cowl(s)", "Pair of Cuffs", "Facemask(s)", "Pair of Footguards", "Pair of Footpads", "Garment(s)", "Gauntlets", "Girdle(s)", "Pair of Gloves", "Pair of Grips", "Pair of Handguard", "Pair of Handwrap", "Headguard(s)", "Headpiece(s)", "Helm(ets)", "Jerkin(s)", "Kilt(s)", "Leggings", "Legwraps", "Mantle(s)", "Mask(s)", "Raiment(s)", "Robes", "Sandal(s)", "Sash(es)", "Shoulderguards", "Shoulderwraps", "Shroud(s)", "Skirt(s)", "Spaulder(s)", "Tunic(s)", "Pair of Vambrace", "Vestment(s)", "Waistband(s)", "Wrap(s)", "Wristband(s)"];
	var baad = ["Cheap","Cracked","Damaged","Fractured","Frayed","Inferior","Lesser","Low-end","Low-grade","Mediocre","Minor","Paltry","Poor","Ragged","Run-of-the-mill","Shabby","Sub-par","Substandard","Tawdry"];
  	var goood = ["Excellent","Exemplary","Exquisite","Fine","First-class","First-rate","Immaculate","Intact","Magnificent","Master","Ornate","Premium","Prime","Pristine","Rare","Refined","Spotless","Sterling","Superb","Superior","Supreme"];
  	var noormal = ["Average","Common","Fair","Generic","Mundane","Ordinary","Plain","Regular","Simple","Standard","Stock","Traditional"];
	var final = []
	
	var itemcount = document.getElementById("itemcount").value;
	var amount = document.getElementById("amount").value;
	var bad = $('[value="Bad"]').prop('checked');
	var good = $('[value="Good"]').prop('checked');
	var normal = $('[value="Normal"]').prop('checked');

	if (bad === true) {
		grade = 'bad'
		price = 10
	} else if (normal === true) {
		grade = 'normal'
		price = 25
	} else if (good === true) {
		grade = 'good'
		price = 40
	}

	for (let i = 0; i < itemcount; i++) {
		var adjusted_quant = Math.floor(Math.random() * 2) + 1;
		while (adjusted_quant < 1) {
			var adjusted_quant = Math.floor(Math.random() * 2) + 1;
		}
		var adjusted_price = price + Math.floor(Math.random() * 20) - 20;
		while (adjusted_price < 1) {
			var adjusted_price = price + Math.floor(Math.random() * 20) - 20;
		}
		var item = loots[Math.floor(Math.random() * loots.length)];
		if (grade === 'bad') {
			itemgrade = baad[Math.floor(Math.random() * baad.length)];
		} else if (grade === 'normal') {
			itemgrade = noormal[Math.floor(Math.random() * noormal.length)];
		} else if (grade === 'good') {
			itemgrade = goood[Math.floor(Math.random() * goood.length)];
		}
		final.push(adjusted_quant + ' ' + itemgrade + ' ' + item + ' ' + '-' + ' ' + adjusted_quant*adjusted_price + ' ' + 'Coins')
	}
	$("#loot").html(final.join("</br>"));
	}