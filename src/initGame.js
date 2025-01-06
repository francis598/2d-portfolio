import makeKaplayCtx from "./makeKaplayCtx";

export default async function initGame() {
    const k = makeKaplayCtx();
    k.loadSprite("player", "./player.png", {});
}



