var units = []
var unitIndex = 0
var teamTurn = 0

class Unit {
	constructor(id, team, name, options) {
		this.id = id;
		this.name = name;
		this.team = team;
		this.region = 'AA';
		this.graphic = 'jetbike.png';
		this.faceLeft = false;
		this.wp = 10; //Float, wound percentage (percent/10)
		this.coords = {
			x: 0,
			y: 0
		}
		if (typeof options === 'object')
			for (var key of Object.keys(options)) {
				this[key] = options[key];
			}
		this.e = document.createElement('div');
		this.e.classList.add('unitGFX');
		this.e.gfx = document.createElement('img');
		this.e.w = document.createElement('img');
		this.e.w.classList.add('woundmarker');
		this.e.appendChild(this.e.gfx);
		this.e.appendChild(this.e.w);
		document.getElementById('map').appendChild(this.e);
		this.move();
	}

	size() {
		return {
			w: this.e.gfx.width,
			h: this.e.gfx.height,
			ow: this.e.gfx.width / 2,
			oh: this.e.gfx.height / 2
		}
	}

	move() {
		this.coords = gameMap.regions.find(reg => reg.name == this.region);
		if (this.coords) this.coords = this.coords.center;
		this.e.style.left = this.coords.x - this.size().ow + 'px';
		this.e.style.top = this.coords.y - this.size().oh + 'px';
		this.draw();
	}

	calcWP() {
		//This will be replaced by calculating all models' wounds later
		this.wp = this.wp;
		return this.wp;
	}

	draw() {
		this.e.gfx.src = this.graphic;
		this.e.w.width = '16px';
		if (this.faceLeft) this.e.gfx.style.transform = 'scaleX(-1)';
		if (this.hue !== undefined) this.e.gfx.style.filter = `hue-rotate(${this.hue}deg)`
		if (this.calcWP() < 10) this.e.w.src = `img/icons/${this.wp}.svg`;
		else this.e.w.src = ''
	}

} // End Unit

function init() {
	for (var i = 0; i < 6; i++) {
		let newBike = {}
		if (i < 3) newBike = { team: 0, name: 'Elf Bike ', options: {hue: 0, faceLeft: false, region: 'AB'} }
		else newBike = { team: 1, name: 'Dark Bike ', options: {hue: 180, faceLeft: true, region: 'CC'} }
		units.push(new Unit(unitIndex++, newBike.team, newBike.name + i, newBike.options));
	}
	from();
}

// let idIndex = 0;
// for (var unit of units) {
//   unit.id = idIndex++;
//   unit.marches = 1;
// }

function from() {
	let controlBox = document.getElementById('controlBox');
	controlBox.innerHTML = `<h2><b>${((teamTurn) ? `Dark Elves` : `Space Elves`)}</b></h2>`;
	controlBox.innerHTML += `<h3><b>Select Sector:</b></h3>`;
	for (var region of gameMap.regions) {
		let occupants = units.filter(unit => unit.region == region.name && unit.team == teamTurn);
		if (occupants.length) {
			let from = region;
			let link = document.createElement('div');
			link.classList.add('button');
			link.innerHTML = region.name;
			link.onclick = function() {
				who(from, occupants);
			};
			controlBox.appendChild(link);
		}
	}
}


function who(from, occupants) {
	let controlBox = document.getElementById('controlBox');
	controlBox.innerHTML = '<h3><b>Select Unit:</b></h3>';
	for (var occ of occupants) {
		let goto = from.routes;
		let link = document.createElement('div');
		link.classList.add('button');
		link.innerHTML = occ.name;
		let occupant = occ;
		link.onclick = function() {
			to(from, occupant, goto);
		};
		controlBox.appendChild(link);
	}
}

function to(from, who, routes) {
	let controlBox = document.getElementById('controlBox');
	controlBox.innerHTML = '<h3><b>Select Destination:</b></h3>';
	for (var route of routes) {
		let link = document.createElement('div');
		link.classList.add('button');
		let goto = route
		link.innerHTML = route;
		link.onclick = function() {
			move(from, who, goto);
		};
		controlBox.appendChild(link);
	}
}

function move(fromArg, whoArg, toArg) {
	let fromRegion = gameMap.regions.find(reg => reg.name == fromArg);
	let gotoRegion = gameMap.regions.find(reg => reg.name == toArg);
	let whoRegion = units.find(unit => unit.id == whoArg.id);
	whoRegion.region = gotoRegion.name;
	whoRegion.move();
	document.getElementById('controlBox').innerHTML = '';
	document.getElementById('controlBox').innerHTML = '';
	document.getElementById('controlBox').innerHTML = '';
	teamTurn = !teamTurn
	from();
}
