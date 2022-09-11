
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Fin extends Phaser.Scene {

	constructor() {
		super("Fin");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text_1
		const text_1 = this.add.text(400, 254.5, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Victoire ou défaite";

		// btn_1
		const btn_1 = this.add.rectangle(404, 319, 128, 128);
		btn_1.scaleX = 0.9453162738997063;
		btn_1.scaleY = 0.20159846586159716;
		btn_1.isFilled = true;

		// text_2
		const text_2 = this.add.text(404, 319, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "OK";
		text_2.setStyle({ "color": "#000000ff" });

		this.btn_1 = btn_1;

		this.events.emit("scene-awake");
	}

	public btn_1!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.btn_1
		.setInteractive(({ useHandCursor: true }))
	      .on('pointerdown', function() {
			this.scene.start('Intro');
		}, this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
