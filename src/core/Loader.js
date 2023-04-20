import { Assets } from 'pixi.js';

export default class Loader {
  constructor(onAssetsLoaded) {
    Assets.onComplete.addOnce(onAssetsLoaded);
    this.addAssets();
  }

  addAssets() {
    Assets.add([
      { format: 'png', alias: 'BG', src: '../assets/bg_final.png' },
      { format: 'png', alias: 'btn_active', src: '../assets/btn_active.png' },
      { format: 'png', alias: 'btn_inactive', src: '../assets/btn_inactive.png' },
      { format: 'png', alias: 'lowwin_club', src: '../assets/lowwin_club.png' },
      { format: 'png', alias: 'lowwin_diamond', src: '../assets/lowwin_diamond.png' },
      { format: 'png', alias: 'lowwin_heart', src: '../assets/lowwin_heart.png' },
      { format: 'png', alias: 'lowwin_spade', src: '../assets/lowwin_spade.png' },
      { format: 'png', alias: 'lowwin_star', src: '../assets/lowwin_star.png' },
      { format: 'png', alias: 'wild', src: '../assets/wild.png' }
    ]);
    Assets.load();
  }
}
