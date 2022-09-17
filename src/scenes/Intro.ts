
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import rectangle from "../utils";
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
	public previousButton: any
	public groupButtons?: Phaser.GameObjects.Group

	// Write your code here

	create() {

		this.editorCreate();

		var categories = this.cache.json.get('questions');
		console.log(categories)
		this.remainingLives = categories.lives;


        var rectCanvas = rectangle(this);
        var data = this.cache.json.get('questions');
        this.remainingLives = data.lives;
        var intoGroup = this.add.group();
        var buttonsGroup = this.createButtons();
        var textGroup = this.createTextHeaders();
		        //  Center the picture in the game
				console.log(rectCanvas);
				
        Phaser.Display.Align.In.Center(rectCanvas, this.add.zone(400, 300, 800, 600));

        //  Center the sprite to the picture
        Phaser.Display.Align.In.BottomCenter(textGroup, rectCanvas);
        // buttonsGroup.alignTo(textGroup,Phaser.BOTTOM_CENTER);
        intoGroup.add(buttonsGroup)
        intoGroup.add(textGroup)
        // intoGroup.alignIn(rectCanvas,Phaser.CENTER);

	}

	createButtons() {
        this.previousButton = null;
        this.groupButtons = this.add.group();
        this.createButtonCategory(0);
        this.createButtonCategory(1);
        this.createButtonCategory(2);
        return this.groupButtons;
	}

    createButtonCategory(index: any) {
        var key = 'buttonCategory_' + (index + 1);
        var context = { 
			category: index,
			game:this,
			remainingLives:this.remainingLives
		};
        // var button = this.game.add.button(0, 0, key, this.onButtonCategoryClicked, context, 2, 1, 0);
        console.log("CONTEXT");
        console.log(context);
        
        
		const button = this.add.text(400, 541.157139008034, "XXX", {});
		const self = this;
		button.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
			self.scene.start('Question',[true,false,context.category,0,context.remainingLives,0]);
		});
        if (this.previousButton) {
            // button.alignTo(this.previousButton, Phaser.RIGHT_CENTER, 16);
        }
        this.previousButton = button;
        this.groupButtons.add(button);

		Phaser.Actions.GridAlign(this.groupButtons.getChildren(), {
            width: 10,
            height: 10,
            cellWidth: 32,
            cellHeight: 32,
            x: 350,
            y: 300
        });
		console.log(this.groupButtons);
		
    }

    onButtonCategoryClicked() {
        this.scene.start('question',[true,false,this.category,0,this.remainingLives,0]);
    }

    createTextHeaders() {
        var previous;
        var texts = ['Welcome on board!','Let\'s test your skills','Choose your age!'];
        var group = this.add.group();
        var that = this;
        texts.forEach( function(text){
            var textEl = that.createText(text);
            if(previous){
                // textEl.alignTo(previous,Phaser.BOTTOM_CENTER);
            }
            previous = textEl;
            group.add(textEl);
        });
        return group;
    }

    createText(textContent){
        var style = this.getStyleCategory();
        style.font = 'Audiowide';
        style.fontSize = '38pt';
        style.backgroundColor = '#ffffff';
        style.fill= '#000000';
        return this.add.text(0,0,textContent, style);
    }

	getStyleCategory() {
        return { 
            font: "38pt Arial", fill: "#000000", wordWrap: false,  align: "left", backgroundColor:'#FFFFFF'
		};
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
