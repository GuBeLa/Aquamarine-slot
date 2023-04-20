import { Assets } from 'pixi.js';

export default class Loader {
  constructor(onAssetsLoaded) {
    // this.loader = Assets.loader;
    this.addAssets();
    // this.loader.once('complete', onAssetsLoaded);
    
  }

   addAssets() {
    Assets.add({format: 'png', alias: 'BG', src: '../assets/bg_final.png'});
    Assets.add({format: 'png', alias: 'btn_active', src: '../assets/btn_active.png'});
    Assets.add({format: 'png', alias: 'btn_inactive', src: '../assets/btn_inactive.png'});
    Assets.add({format: 'png', alias: 'lowwin_club', src: '../assets/lowwin_club.png'});
    // Assets.add({alias: 'lowwin_diamond', src: '../assets/lowwin_diamond.png'});
    // Assets.add({alias: 'lowwin_heart', src: '../assets/lowwin_heart.png'});
    // Assets.add({alias: 'lowwin_spade', src: '../assets/lowwin_spade.png'});
    // Assets.add({alias: 'lowwin_star', src: '../assets/lowwin_star.png'});
    // Assets.add({alias: 'wild', src: '../assets/wild.png'});
	Assets.load('BG');
	Assets.load('btn_active');
	Assets.load('btn_inactive');
	Assets.load('lowwin_club');
  }
}
