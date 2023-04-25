import Controller from './core/Controller';
import Loader from './core/Loader';
import Background from './core/Background';
import Button from './core/Button';
import ReelContainer from './core/ReelContainer';
import Scoreboard from './core/Scoreboard';
import VictoryScreen from './core/VictoryScreen';


export default class App extends Controller {
	constructor() {
		super();
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.createRenderer();
		
		new Loader(this.init.bind(this));
	}

	init() {
		this.createScene();
		this.createReels();
		this.createButton();
		this.animate()
	}

	createScene() {
		this.background = new Background();
		this.stageAdd(this.background.container);
	}

	createReels() {
		this.reels = new ReelContainer(this.stageAdd.bind(this));
		this.stageAdd(this.reels.container);
	}

	createScoreboard() {
		this.score = new Scoreboard(this.stageAdd.bind(this));
		this.stageAdd(this.score.container);
	}

	createVictoryScreen() {
		this.victory = new VictoryScreen(this.stageAdd.bind(this));
		this.stageAdd(this.victory.container);
	}

	createButton() {
		this.button = new Button(this.onStartSpin.bind(this));
		this.stageAdd(this.button.container);
	}
}