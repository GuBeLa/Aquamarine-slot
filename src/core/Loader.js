import { Assets, Spritesheet } from 'pixi.js';

export default class Loader {
  constructor(onAssetsLoaded) {
    this.addAssets(onAssetsLoaded);
  }

  addAssets(onAssetsLoaded) {
    Assets.add('BG', 'src/assets/BG_00000.png');
	Assets.add('BG_Frames', 'src/assets/frames.png');
    Assets.add('btn_active', 'src/assets/btn_active.png');
    Assets.add('btn_inactive', 'src/assets/btn_inactive.png');
    Assets.add('lowwin_club', 'src/assets/lowwin_club.png');
    Assets.add('lowwin_diamond', 'src/assets/lowwin_diamond.png');
    Assets.add('lowwin_heart', 'src/assets/lowwin_heart.png');
    Assets.add('lowwin_spade', 'src/assets/lowwin_spade.png');
    Assets.add('lowwin_star', 'src/assets/lowwin_star.png');
    Assets.add('wild', 'src/assets/wild.png');
	Assets.add('Fish_1', 'src/assets/Fish 1/fish 1.json');

    const texturesPromise = Assets.load(['BG', 'BG_Frames', 'btn_active', 'btn_inactive', 'lowwin_club', 'lowwin_diamond', 'lowwin_heart', 'lowwin_spade', 'lowwin_star', 'wild', 'Fish_1']);
    texturesPromise.then((textures) => {
      console.log(textures);
      onAssetsLoaded();
    });
  }
}