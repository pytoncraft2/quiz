
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

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */
	public remainingLives: any;

	// Write your code here

	create() {

		this.editorCreate();

		var categories = this.cache.json.get('questions');
		console.log(categories)
		this.remainingLives = categories.lives;

		Object.keys(categories.categories).forEach((element, i) => {
			this.creerBouton(i + 200, 482, `${i}`)
				.setInteractive(({ useHandCursor: true }))
				.on('pointerdown', function(e, f) {
					console.log(e.x)
					//this.scene.start('Question');
				}, this);
			});
		console.log(this.remainingLives)
	}

	creerBouton(x, y = 482, texte = 'vide') {
		const btn_1 = this.add.rectangle(x, y, 128, 128);
		btn_1.scaleX = 1.5115197830474845;
		btn_1.scaleY = 0.4464428520727569;
		btn_1.isFilled = true;
		btn_1.fillColor = 2873884;
		btn_1.fillAlpha = 0.8;

		const text_4 = this.add.text(x, y, "", {});
		text_4.setOrigin(0.5, 0.5);
		text_4.text = texte;
		text_4.setStyle({ "color": "#ffffffff" });
		return btn_1;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
