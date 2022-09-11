
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
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

		// rectangle_1
		const rectangle_1 = this.add.rectangle(400, 373, 128, 128);
		rectangle_1.scaleX = 1.3974921969956955;
		rectangle_1.scaleY = 0.37766287512812813;
		rectangle_1.isFilled = true;

		// text_2
		const text_2 = this.add.text(400, 374, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Vert";
		text_2.setStyle({ "color": "#000000ff" });

		// container_1
		const container_1 = this.add.container(0, 0);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(400, 492, 128, 128);
		rectangle_2.scaleX = 1.3974921969956955;
		rectangle_2.scaleY = 0.37766287512812813;
		rectangle_2.isFilled = true;
		container_1.add(rectangle_2);

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
