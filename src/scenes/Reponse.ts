
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Reponse extends Phaser.Scene {

	constructor() {
		super("Reponse");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text_1
		const text_1 = this.add.text(398.5, 164.5, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Correcte !";

		// btn_1
		const btn_1 = this.add.rectangle(395, 275, 128, 128);
		btn_1.scaleX = 1.0833337318981657;
		btn_1.scaleY = 0.2948050982760956;
		btn_1.isFilled = true;

		// text_2
		const text_2 = this.add.text(396, 274, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Suivant";
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
			this.scene.start('Question');
		}, this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
