import { Assets } from 'pixi.js';

export default class Loader {
  constructor(onAssetsLoaded) {
    this.addAssets(onAssetsLoaded);
  }

  addAssets(onAssetsLoaded) {
    Assets.add('BG', 'src/assets/BG_00000.png');
    Assets.add('BG_Frames', 'src/assets/frames.png');
    Assets.add('btn_active', 'src/assets/btn_active.png');
    Assets.add('btn_inactive', 'src/assets/btn_inactive.png');
    Assets.add('symbol_crab', 'src/assets/Symbols/Crab/crab.png');
    Assets.add('symbol_fish_1', 'src/assets/Symbols/Fish_1/fish_1.png');
    Assets.add('symbol_fish_2', 'src/assets/Symbols/Fish_2/fish_2.png');
    Assets.add('symbol_fish_3', 'src/assets/Symbols/Fish_3/fish_3.png');
    Assets.add('symbol_fish_4', 'src/assets/Symbols/Fish_4/fish_4.png');
    Assets.add('symbol_fish_5', 'src/assets/Symbols/Fish_5/fish_5.png');
    Assets.add('symbol_horse', 'src/assets/Symbols/Horse/horse.png');
    Assets.add('symbol_octopus', 'src/assets/Symbols/Octopus/octopus.png');
    Assets.add('symbol_star', 'src/assets/Symbols/Star/star.png');
    Assets.add('Fish_1', 'src/assets/Fish 1/fish 1.json');
    Assets.add('Logo', 'src/assets/BG/Logo/logo.json');

    const texturesPromise = Assets.load([
      'BG',
      'BG_Frames',
      'btn_active',
      'btn_inactive',
      'symbol_crab',
      'symbol_fish_1',
      'symbol_fish_2',
      'symbol_fish_3',
      'symbol_fish_4',
      'symbol_fish_5',
      'symbol_horse',
      'symbol_octopus',
      'symbol_star',
      'Fish_1',
      'Logo'
    ]);
    texturesPromise.then((textures) => {
      console.log(textures);
      onAssetsLoaded();
    });
  }
}
