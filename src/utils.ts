import Phaser from "phaser";
export default function(scene: Phaser.Scene) {
        return new Phaser.GameObjects.Rectangle(scene,0, 0, window.innerWidth, window.innerHeight);
}