import * as PIXI from 'pixi.js';

export default class Scoreboard {
    constructor(app) {
        this.container = new PIXI.Container();
        this.generate(app.screen.width, app.screen.height);

        this.outOfMoney = false;
        this.winAmountText = PIXI.Text;
        this.moneyText = PIXI.Text;
        this.winAmount = 0;
        this.money = 100;
        this.bet = 5;
    }

    decrement() {
        if (!this.outOfMoney) {
            this.money -= this.bet;
            this.moneyText.text = `money: $${this.money}`;
        }
        if (this.money - this.bet < 0) {
            this.outOfMoney = true;
        }
    }

    increment() {
        this.money += this.bet * 2;
        this.moneyText.text = `money: $${this.money}`;
        this.winAmount += this.bet;
        this.winAmountText.text = `win: $${this.winAmount}`;
        if (this.outOfMoney) this.outOfMoney = false;
    }

    generate(appWidth, appHeight) {
        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 'yellow',
        });

        this.moneyText = new PIXI.Text(`money: $${this.money}`, style);
        this.moneyText.y = 5;

        const betText = new PIXI.Text(`bet: $${this.bet}`, style);
        betText.y = this.moneyText.height + 10;

        this.winAmountText = new PIXI.Text(`win: $${this.winAmount}`, style);
        this.winAmountText.y = betText.y + betText.height + 5;

        betText.x = this.moneyText.x = this.winAmountText.x = 10;

        const rect = new PIXI.Graphics();
        rect.beginFill(0x02474E, 0.8);
        const rectHeight = this.moneyText.height + betText.height + this.winAmountText.height + 25;
        rect.drawRect(0, 0, 160, rectHeight);
        rect.endFill();

        this.container.x = appWidth - rect.width - 7;
        this.container.y = appHeight / 2 + 70;
        this.container.addChild(rect, this.moneyText, betText, this.winAmountText);
    }
}