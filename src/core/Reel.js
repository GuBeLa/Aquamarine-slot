import * as PIXI from 'pixi.js';
export default class Reel {
	constructor(turn){
		this.width = 150;
		this.height = 160;
		this.cached = {};
		this.animation = true;
		this.position = {
			x: 0,
			y: 0
		};
		this.delayStop = 0;
		this.singleReel = [
			{ id: 0, texture: PIXI.Texture.from('symbol_crab') },
			{ id: 1, texture: PIXI.Texture.from('symbol_fish_1') },
			{ id: 2, texture: PIXI.Texture.from('symbol_fish_2') },
			{ id: 3, texture: PIXI.Texture.from('symbol_fish_3') },
			{ id: 4, texture: PIXI.Texture.from('symbol_fish_4') },
			{ id: 5, texture: PIXI.Texture.from('symbol_fish_5') },
			{ id: 6, texture: PIXI.Texture.from('symbol_horse') },
			{ id: 7, texture: PIXI.Texture.from('symbol_octopus') },
			{ id: 8, texture: PIXI.Texture.from('symbol_star') },
			{ id: 9, texture: PIXI.Texture.from('symbol_fish_1') },
			{ id: 10, texture: PIXI.Texture.from('symbol_fish_2') },
			{ id: 11, texture: PIXI.Texture.from('symbol_fish_3') }
		];
		
		this.container = new PIXI.Container();
		this.container.position.x = this.position.x;
		this.container.position.y = this.position.y;

		this.createTurn(turn);
		this.createReels();
		
	}
	
	createTurn(turn) {
		let i;
		let turned = [];
		for (i = 0; i < turn.length; i++) {
			this.singleReel.forEach(item => {
				if (item.id === turn[i]) turned.push(item)
			})
		}
		this.singleReel = turned;
	}
	
	createReels() {
		let i;
		let item;
		for(i = 0; i < this.singleReel.length; i++) {
			item = new PIXI.Sprite(this.singleReel[i].texture);
			item.position.y = i * this.height;
			this.cached[`id_${this.singleReel[i].id}`] = item;
			this.container.addChild(item);
		}
	}
	
	startRotation(randomReel, callback) {
		this.animation = true;
		this.selected = randomReel;
		this.stopAnimation()
		this.startAnimation(randomReel, callback);
	}

	startAnimation(reel, callback) {
		let selectedReel = this.cached[`id_${reel}`].position.y;
		let i;
		
		if (
			!this.animation &&
			selectedReel === this.height
		) {
			callback();
			return false;
		}
		
		for (i = 0; i < this.singleReel.length; i++) {
			let current = this.cached[`id_${i}`];
			current.position.y -= 39;
			if (current.position.y <= -this.height) {
				current.position.y = (this.singleReel.length - 1) * this.height;
			}
		}

		requestAnimationFrame(this.startAnimation.bind(this, reel, callback));
	}

	stopAnimation() {
		let delay = 3000 + this.delayStop;
		setTimeout(() => this.animation = false, delay);
	}

	get result() {
		let result = {};
		this.singleReel.forEach((item, i) => {
			if (item.id === this.selected) {
				result.middleRow = item.id;
				result.lastRow = this.singleReel[(i + 1 === 6 ? 0 : i + 1)].id;
				result.firstRow = this.singleReel[(i - 1 < 0 ? 5 : i - 1)].id;
			}
		})
		return result;
	}
}