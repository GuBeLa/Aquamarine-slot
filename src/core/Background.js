import * as PIXI from 'pixi.js';
export default class Background {
	constructor() {
		this.container = new PIXI.Container();
		this.container.sortableChildren = true;
		this.container.interactive = true;
		this.background = PIXI.Texture.from('BG');
		this.backgroundFrames = PIXI.Texture.from('BG_Frames');
		this.Right_Stone = PIXI.Texture.from('Right_Stone');
		this.Left_Stone = PIXI.Texture.from('Left_Stone');
		this.Left_Stone_2 = PIXI.Texture.from('Left_Stone_2');
		this.Left_Stone_3 = PIXI.Texture.from('Left_Stone_3');
		this.Menu = PIXI.Texture.from('Menu');
		this.Sounds = PIXI.Texture.from('Sounds');
		this.Burger = PIXI.Texture.from('Burger');
		this.Autoplay = PIXI.Texture.from('Autoplay');
		this.Coins = PIXI.Texture.from('Coins');
		this.Balance = PIXI.Texture.from('Balance');
		this.Bet = PIXI.Texture.from('Bet');
		this.Win = PIXI.Texture.from('Win');
		this.setBackground();
		this.setBackgroundFrames();
		this.setSprite('Logo', 'logo', 1430, 0, 1, 0, 0);
		this.setSprite('bottom_light', 'slot bg_13', 0, 825, 2, 0, 0);
		this.setSprite('Seaplant1', 'seaplant1', 1720, 810, 1, 0, 0);
		this.setSprite('Seaplant2', 'seaplant2', 1660, 870, 3, 0, 0);
		this.setSprite('Seaplant3', 'slot bg_3', 1760, 760, 2, 0, 0);
		this.setSprite('Seaplant4', 'slot bg_4', 300, 600, 1, 0, 0);
		this.setSprite('Seaplant5', 'slot bg_5', 230, 750, 2, 0, 0);
		this.setSprite('Seaplant6', 'slot bg_6', 80, 590, 2, 0, 0);
		this.setSprite('Seaplant7', 'slot bg_7', 270, 860, 3, 0, 0);
		this.setSprite('Seaplant8', 'slot bg_8', 70, 790, 3, 0, 0);
		this.setSprite('Seaplant9', 'slot bg_9', 650, 780, 3, 0, 0);
		this.setSprite('Seaplant9', 'slot bg_9', 830, 780, 3, 0, 0);
		this.setSprite('Seaplant9', 'slot bg_9', 980, 780, 3, 0, 0);
		this.setSprite('Seashell', 'slot bg_10', 1280, 880, 3, 0, 0);
		this.setSprite('Seastar', 'slot bg_11', 490, 880, 1, 0, 0);
		this.setSprite('Surface_light', 'anim_12', 0, 0, 1, 0, 0);
		this.setSprite('Light1', 'light_1', 650, -10, 1, 0, 0);
		this.setSprite('Light2', 'light_2', 920, -10, 1, 0, 0);
		this.setSprite('Light3', 'light_3', 130, -10, 1, 0, 0);
		this.setSprite('Light4', 'light_4', 910, -10, 1, 0, 0);
		this.setSprite('Light5', 'light_5', 440, -10, 1, 0, 0);
		this.setSprite('Light6', 'light_6', 980, -10, 1, 0, 0);
	}

	setSprite(texture, animation, x, y, zIndex, anchorX, anchorY) {
		const animations = PIXI.Assets.cache.get(texture)?.data?.animations;
		console.log(animations, 'animations')
		const sprite = PIXI.AnimatedSprite.fromFrames(animations[animation]);
		sprite.loop = true;
		sprite.animationSpeed = 0.4;
		sprite.gotoAndPlay(0);
		sprite.x = x;
		sprite.y = y;
		sprite.zIndex = zIndex;
		console.log(sprite);
		this.container.addChild(sprite);
	}
	
	setBackground() {
		const BG = new PIXI.Sprite(this.background);
		this.container.addChild(BG);
	}

	setBackgroundFrames() {
		const BG_Frames = new PIXI.Sprite(this.backgroundFrames);
		BG_Frames.anchor.set(-0.5, -0.12);
		BG_Frames.scale.set(0.9, 0.9);
		this.container.addChild(BG_Frames);

		const Right_Stone = new PIXI.Sprite(this.Right_Stone);
		Right_Stone.position.set(1580, 570);
		Right_Stone.zIndex = 2;
		this.container.addChild(Right_Stone);

		const Left_Stone = new PIXI.Sprite(this.Left_Stone);
		Left_Stone.position.set(150, 500);
		Left_Stone.zIndex = 2;
		this.container.addChild(Left_Stone);

		const Left_Stone_2 = new PIXI.Sprite(this.Left_Stone_2);
		Left_Stone_2.position.set(80, 800);
		Left_Stone_2.zIndex = 3;
		this.container.addChild(Left_Stone_2);

		const Left_Stone_3 = new PIXI.Sprite(this.Left_Stone_3);
		Left_Stone_3.position.set(0, 720);
		this.container.addChild(Left_Stone_3);

		const Menu = new PIXI.Sprite(this.Menu);
		Menu.position.set(220, 810);
		Menu.zIndex = 5;
		this.container.addChild(Menu);

		const Sounds = new PIXI.Sprite(this.Sounds);
		Sounds.position.set(1542, 872);
		Sounds.zIndex = 5;
		this.container.addChild(Sounds);

		const Burger = new PIXI.Sprite(this.Burger);
		Burger.position.set(243, 872);
		Burger.zIndex = 5;
		this.container.addChild(Burger);

		const Autoplay = new PIXI.Sprite(this.Autoplay);
		Autoplay.position.set(1020, 865);
		Autoplay.zIndex = 5;
		this.container.addChild(Autoplay);

		const Coins = new PIXI.Sprite(this.Coins);
		Coins.position.set(780, 869);
		Coins.zIndex = 5;
		this.container.addChild(Coins);

		const Balance = new PIXI.Sprite(this.Balance);
		Balance.position.set(330, 867);
		Balance.zIndex = 5;
		this.container.addChild(Balance);

		const Bet = new PIXI.Sprite(this.Bet);
		Bet.position.set(570, 867);
		Bet.zIndex = 5;
		this.container.addChild(Bet);

		const Win = new PIXI.Sprite(this.Win);
		Win.position.set(1170, 867);
		Win.zIndex = 5;
		this.container.addChild(Win);
	}
}