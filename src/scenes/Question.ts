
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PushOnClick from "../components/PushOnClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Question extends Phaser.Scene {

	constructor() {
		super("Question");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text_1
		const text_1 = this.add.text(6, 15, "", {});
		text_1.text = "Question X";

		// btn_1
		const btn_1 = this.add.rectangle(400, 373, 128, 128);
		btn_1.scaleX = 1.3974921969956955;
		btn_1.scaleY = 0.37766287512812813;
		btn_1.isFilled = true;

		// text_2
		const text_2 = this.add.text(400, 374, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Vert";
		text_2.setStyle({ "color": "#000000ff" });

		// container_1
		const container_1 = this.add.container(0, 0);

		// btn_2
		const btn_2 = this.add.rectangle(400, 492, 128, 128);
		btn_2.scaleX = 1.3974921969956955;
		btn_2.scaleY = 0.37766287512812813;
		btn_2.isFilled = true;
		container_1.add(btn_2);

		// text_3
		const text_3 = this.add.text(401, 491, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "Blanc";
		text_3.setStyle({ "color": "#000000ff" });
		container_1.add(text_3);

		// text_4
		const text_4 = this.add.text(400, 201.5, "", {});
		text_4.setOrigin(0.5, 0.5);
		text_4.text = "Quelle est la couleur du cheval blanc d'Henry IV ?";

		// btn_2 (components)
		new PushOnClick(btn_2);

		this.btn_1 = btn_1;
		this.btn_2 = btn_2;

		this.events.emit("scene-awake");
	}

	public btn_1!: Phaser.GameObjects.Rectangle;
	public btn_2!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here

	init(infos) {
		console.log(infos);
	}

	create() {

		this.editorCreate();
		this.btn_1
		.setInteractive(({ useHandCursor: true }))
	      .on('pointerdown', function() {
			this.scene.start('Reponse');
		}, this);
		this.btn_2
		.setInteractive(({ useHandCursor: true }))
	      .on('pointerdown', function() {
			this.scene.start('Fin');
		}, this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
