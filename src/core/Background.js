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

		const animations = PIXI.Assets.cache.get('Fish_1')?.data?.animations;
		console.log(animations, 'animations')
		const sprite = PIXI.AnimatedSprite.fromFrames(animations["1-FISH"]);
		sprite.loop = true;
		sprite.gotoAndPlay(0);
		sprite.x = 100;
		sprite.y = 100;
		console.log(sprite);
		this.container.addChild(sprite);
	}
}