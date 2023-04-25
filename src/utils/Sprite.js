export default AddSprite = (texture, x, y, anchorX, anchorY) => {
    const sprite = new PIXI.Sprite(texture);
    sprite.position.x = x;
    sprite.position.y = y;
    sprite.anchor.x = anchorX;
    sprite.anchor.y = anchorY;
    return sprite;
}