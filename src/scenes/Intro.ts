
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

		// rectangle_1
		const rectangle_1 = this.add.rectangle(415, 482, 128, 128);
		rectangle_1.scaleX = 1.5115197830474845;
		rectangle_1.scaleY = 0.4464428520727569;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 2873884;
		rectangle_1.fillAlpha = 0.8;

		// rectangle
		const rectangle = this.add.rectangle(144, 482, 128, 128);
		rectangle.scaleX = 1.5115197830474845;
		rectangle.scaleY = 0.4464428520727569;
		rectangle.isFilled = true;
		rectangle.fillColor = 2873884;
		rectangle.fillAlpha = 0.8;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(668, 482, 128, 128);
		rectangle_2.scaleX = 1.5115197830474845;
		rectangle_2.scaleY = 0.4464428520727569;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 2873884;
		rectangle_2.fillAlpha = 0.8;

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

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
