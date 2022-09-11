
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Intro extends Phaser.Scene {

	constructor() {
		super("Intro");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text_1
		const text_1 = this.add.text(400, 94, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Bienvenue au quiz scout !";
		text_1.setStyle({ "color": "#ffffffff", "fontSize": "28px" });

		// text
		const text = this.add.text(400, 241.157139008034, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Testons votre culture !";
		text.setStyle({ "color": "#ffffffff", "fontSize": "26px" });

		// btn_2
		const btn_2 = this.add.rectangle(415, 482, 128, 128);
		btn_2.scaleX = 1.5115197830474845;
		btn_2.scaleY = 0.4464428520727569;
		btn_2.isFilled = true;
		btn_2.fillColor = 2873884;
		btn_2.fillAlpha = 0.8;

		// btn_1
		const btn_1 = this.add.rectangle(144, 482, 128, 128);
		btn_1.scaleX = 1.5115197830474845;
		btn_1.scaleY = 0.4464428520727569;
		btn_1.isFilled = true;
		btn_1.fillColor = 2873884;
		btn_1.fillAlpha = 0.8;

		// btn_3
		const btn_3 = this.add.rectangle(668, 482, 128, 128);
		btn_3.scaleX = 1.5115197830474845;
		btn_3.scaleY = 0.4464428520727569;
		btn_3.isFilled = true;
		btn_3.fillColor = 2873884;
		btn_3.fillAlpha = 0.8;

		// text_2
		const text_2 = this.add.text(144, 482, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Au hazard";
		text_2.setStyle({ "color": "#ffffffff" });

		// text_3
		const text_3 = this.add.text(417, 483, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "histoire";
		text_3.setStyle({ "color": "#ffffffff" });

		// text_4
		const text_4 = this.add.text(668, 482, "", {});
		text_4.setOrigin(0.5, 0.5);
		text_4.text = "Outils";
		text_4.setStyle({ "color": "#ffffffff" });

		this.btn_2 = btn_2;
		this.btn_1 = btn_1;
		this.btn_3 = btn_3;

		this.events.emit("scene-awake");
	}

	public btn_2!: Phaser.GameObjects.Rectangle;
	public btn_1!: Phaser.GameObjects.Rectangle;
	public btn_3!: Phaser.GameObjects.Rectangle;

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
