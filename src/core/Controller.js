import * as PIXI from 'pixi.js';
export default class Controller {
	constructor() {
		this.width = window.innerWidth ? window.innerWidth : 800;
		this.height = window.innerHeight ? window.innerHeight : 600;
		this.stopCount = 0;
		

		this.app = new PIXI.Application({
			width: this.width,
			height: this.height,
			backgroundColor: 0x1099bb
		});

		this.stage = this.app.state;
	}

	createRenderer() {
		

		// this.stage = this.app.stage;
		  
		document.body.appendChild(this.app.view);
		
		// this.app.stage.addChild(this.stage);

		console.log(this.app, 'app', this.stage);
	}

	stageAdd(item) {
		this.app.stage.addChild(item);
		// this.app.renderer.render(this.stage);
	}

	onStartSpin() {
		this.stopCount = 0;
		this.reels.rotate(this.onEndSpin.bind(this));
	}

	onEndSpin() {
		this.stopCount++;
		if (this.stopCount === 5) {
			this.button.buttonActiveToggle();
			this.reels.checkRows(this.reels.finalResult)
		}
	}

	animate() {
		// requestAnimationFrame(this.animate.bind(this));
		// this.renderer.render(this.stage);
		PIXI.Ticker.shared.add(() => {
			this.app.renderer.render(this.app.stage);
		});
	}
}