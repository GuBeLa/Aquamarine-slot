import * as PIXI from 'pixi.js';
export default class Background {
	constructor() {
		this.container = new PIXI.Container();
		this.background = PIXI.Texture.from('BG');
		this.backgroundFrames = PIXI.Texture.from('BG_Frames');
		this.setBackground();
		this.setBackgroundFrames();
	}
	
	setBackground() {
		const BG = new PIXI.Sprite(this.background);
		this.container.addChild(BG);
	}

	setBackgroundFrames() {
		const BG_Frames = new PIXI.Sprite(this.backgroundFrames);
		BG_Frames.anchor.set(-0.2, 0);
		this.container.addChild(BG_Frames);
	}
}