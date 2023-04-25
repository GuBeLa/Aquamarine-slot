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
    Assets.add('Logo', 'src/assets/BG/Logo/logo.json');
    Assets.add('bottom_light', 'src/assets/BG/bottom light/bottom light.json');
    Assets.add('Left_Stone', 'src/assets/BG/Left Stone/left stone_00000.png');
    Assets.add('Left_Stone_2', 'src/assets/BG/Left Stone 2/Left Stone_00000.png');
    Assets.add('Left_Stone_3', 'src/assets/BG/Left Stone 3/leftstone3_00000.png');
    Assets.add('Right_Stone', 'src/assets/BG/Right Stone/Right stone_00000.png');
    Assets.add('Light1', 'src/assets/BG/Light1/light1.json');
    Assets.add('Light2', 'src/assets/BG/Light2/light2.json');
    Assets.add('Light3', 'src/assets/BG/Light3/light3.json');
    Assets.add('Light4', 'src/assets/BG/Light4/light4.json');
    Assets.add('Light5', 'src/assets/BG/Light5/light5.json');
    Assets.add('Light6', 'src/assets/BG/Light6/light6.json');
    Assets.add('Seaplant1', 'src/assets/BG/Seaplant1/seaplant1.json');
    Assets.add('Seaplant2', 'src/assets/BG/Seaplant2/seaplant2.json');
    Assets.add('Seaplant3', 'src/assets/BG/Seaplant3/Seaplant3.json');
    Assets.add('Seaplant4', 'src/assets/BG/Seaplant4/Seaplant4.json');
    Assets.add('Seaplant5', 'src/assets/BG/Seaplant5/seaplant5.json');
    Assets.add('Seaplant6', 'src/assets/BG/Seaplant6/Seaplant6.json');
    Assets.add('Seaplant7', 'src/assets/BG/Seaplant7/seaplant7.json');
    Assets.add('Seaplant8', 'src/assets/BG/Seaplant8/seaplant8.json');
    Assets.add('Seaplant9', 'src/assets/BG/Seaplant9/seaplant9.json');
    Assets.add('Seashell', 'src/assets/BG/Seashell/seashell.json');
    Assets.add('Seastar', 'src/assets/BG/Seastar/Seastar.json');
    Assets.add('Surface_light', 'src/assets/BG/Surface light/Surface light.json');
    Assets.add('Menu', 'src/assets/Ui/menu/ui low_00000.png');
    Assets.add('Sounds', 'src/assets/Ui/parts/sound_00000.png');
    Assets.add('Burger', 'src/assets/Ui/parts/menu_00000.png');
    Assets.add('Autoplay', 'src/assets/Ui/parts/autoplay_00000.png');
    Assets.add('Coins', 'src/assets/Ui/parts/coins_00000.png');
    Assets.add('Balance', 'src/assets/Ui/parts/balance_00000.png');
    Assets.add('Bet', 'src/assets/Ui/parts/bet_00000.png');
    Assets.add('Win', 'src/assets/Ui/parts/win_00000.png');

    const texturesPromise = Assets.load([
      'BG',
      'BG_Frames',
      'btn_active',
      'btn_inactive',
      'Menu',
      'Sounds',
      'Burger',
      'Autoplay',
      'Coins',
      'Balance',
      'Bet',
      'Win',
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
      'Logo',
      'bottom_light',
      'Left_Stone',
      'Left_Stone_2',
      'Left_Stone_3',
      'Right_Stone',
      'Light1',
      'Light2',
      'Light3',
      'Light4',
      'Light5',
      'Light6',
      'Seaplant1',
      'Seaplant2',
      'Seaplant3',
      'Seaplant4',
      'Seaplant5',
      'Seaplant6',
      'Seaplant7',
      'Seaplant8',
      'Seaplant9',
      'Seashell',
      'Seastar',
      'Surface_light'
    ]);
    texturesPromise.then((textures) => {
      console.log(textures, 'textures');
      onAssetsLoaded();
    });
  }
}
