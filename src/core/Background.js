import * as PIXI from 'pixi.js';
export default class Background {
	constructor() {
		this.container = new PIXI.Container();
		this.background = PIXI.Texture.from('BG');
		this.backgroundFrames = PIXI.Texture.from('BG_Frames');
		this.setBackground();
		this.setBackgroundFrames();
		// this.setSprite('Fish_1', '1-FISH', 100, 100, 0, 0);
		this.setSprite('Logo', 'logo', 1230, 0, 0, 0);
	}

	setSprite(texture, animation, x, y, anchorX, anchorY) {
		const animations = PIXI.Assets.cache.get(texture)?.data?.animations;
		console.log(animations, 'animations')
		const sprite = PIXI.AnimatedSprite.fromFrames(animations[animation]);
		sprite.loop = true;
		sprite.gotoAndPlay(0);
		sprite.x = x;
		sprite.y = y;
		console.log(sprite);
		this.container.addChild(sprite);
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