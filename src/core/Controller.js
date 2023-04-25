import * as PIXI from 'pixi.js';
export default class Controller {
	constructor() {
		this.width = window.innerWidth ? window.innerWidth : 1920;
		this.height = window.innerHeight ? window.innerHeight : 978;
		this.stopCount = 0;

		this.app = new PIXI.Application({
			width: this.width,
			height: this.height,
			backgroundColor: 0x1099bb,
			resizeTo: window
		});

		this.app.renderer.resize(window.innerWidth, window.innerHeight);
		this.app.stage.scale.x = window.innerWidth / 1920;
		this.app.stage.scale.y = window.innerHeight / 978;
		window.addEventListener('resize', () => {
			this.app.renderer.resize(window.innerWidth, window.innerHeight);
			this.app.stage.scale.x = window.innerWidth / 1920;
			this.app.stage.scale.y = window.innerHeight / 978;
		});

		this.stage = this.app.state;

		// this.resize();
	}

	createRenderer() {
		document.body.appendChild(this.app.view);
	}

	stageAdd(item) {
		this.app.stage.addChild(item);
	}

	onStartSpin() {
		this.stopCount = 0;
		this.reels.rotate(this.onEndSpin.bind(this));
	}

	onEndSpin() {
		this.stopCount++;
		console.log(this.stopCount, 'this.stopCount')
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

	
	resize() {
		if (window.innerWidth / window.innerHeight >= (1920 / 1080)) {
			var w = window.innerHeight * (1920 / 1080);
			var h = window.innerHeight;
		} else {
			var w = window.innerWidth;
			var h = window.innerWidth / (1920 / 1080);
		}
		this.app.renderer.view.style.width = w + 'px';
		this.app.renderer.view.style.height = h + 'px';
	}
}
