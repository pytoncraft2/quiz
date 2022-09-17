
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PushOnClick from "../components/PushOnClick";
/* START-USER-IMPORTS */
import rectangle from "../utils";
import { maxHeightImageQuestion } from "../constants";
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
		
        this.categoryIndexSelected = infos[2];
        this.currentQuestionIndex = infos[3];
        this.remainingLives = infos[4];
        this.score = infos[5];
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

        // this.marioWinSound = this.game.add.audio('mario_haha');
        // this.marioLoseSound = this.game.add.audio('mario_lose');
        this.rectCanvas = rectangle(this);

        var data = this.cache.json.get('questions');
        this.data = data;
        this.totalLives = data.lives;

        var imageQuestion = this.showImageQuestion(this.categoryIndexSelected,this.currentQuestionIndex);
        this.livesGroups = this.showLives(this.remainingLives);
        var questionItem = this.getQuestionItem(this.categoryIndexSelected,this.currentQuestionIndex);
        this.showQuestion(questionItem,imageQuestion);
        var totalQuestions = this.listQuestionsByCategory(this.categoryIndexSelected).length
        this.showScore(this.score,totalQuestions);
        this.showExitButton();

	}

    showQuestion(questionItem,imageQuestion){
        var questionTitleElement = this.addQuestionTitle(questionItem.question,imageQuestion);
        this.addButtonsChoice(questionItem.choices,questionItem.answer,questionTitleElement);
    }

    addQuestionTitle(textContent,imageQuestion){
        var questionTitleElement = this.game.add.text(0,0,textContent, {
            font: "24pt Audiowide", 
            fill: "#000000", 
            wordWrap: true,  
            wordWrapWidth:800,
            align: "left", 
            backgroundColor: '#ffffff' 
        });
        questionTitleElement.alignTo(imageQuestion,Phaser.BOTTOM_CENTER);
        return questionTitleElement;
    }
    addButtonsChoice(choicesText,answerIndex,questionTitleElement){
        var groupButtons = this.game.add.group();
        var previousGroup;
        for(var index=0;index<choicesText.length;index++){
            var isRightAnswer = (index===answerIndex);
            var group = this.addChoiceGroup(choicesText[index],isRightAnswer);
            if(previousGroup){
                group.alignTo(previousGroup, Phaser.BOTTOM_LEFT, 0);
            }
            previousGroup = group;
            groupButtons.add(group);
        }
        groupButtons.alignTo(questionTitleElement, Phaser.BOTTOM_CENTER, 0);
    }
    addChoiceGroup(title,isRightAnswer){
        var button = this.game.add.button(0,0, 'button', this.onButtonChoiceClicked, {context:this,isRightAnswer:isRightAnswer}, 2, 1, 0);
        button.scale.set(0.5);
        var text = this.game.add.text(0,0,title, {font: "12pt Audiowide", fill: "#000000", wordWrap: false,  align: "left", backgroundColor: '#ffffff' });
        text.alignTo(button, Phaser.RIGHT_CENTER, 0);
        var group = this.game.add.group();
        group.add(button);
        group.add(text);
        return group;
    }
    onButtonChoiceClicked(){
        var context = this.context;
        if(this.isRightAnswer){
            context.score++;            
            context.marioWinSound.play();
        }else{
            context.marioLoseSound.play();
            context.remainingLives--;
        }
        if(context.remainingLives>0){
            context.game.state.start('answer',true,false,context.categoryIndexSelected,context.currentQuestionIndex,this.isRightAnswer,context.remainingLives,context.score);
        }else{
            var isWin = false
            context.game.state.start('endgame',true,false,isWin);
        }
    }
    listQuestionsByCategory(categoryIndex){
        return this.data.categories[categoryIndex].questions;
    }
    getQuestionItem(categoryIndex,questionIndex){
        return this.listQuestionsByCategory(categoryIndex)[questionIndex];
    }
    showImageQuestion(categoryIndex,questionIndex){
        var key = ['image_question',categoryIndex,questionIndex].join('_');
        var image_question = this.add.image(0,0, key);
        var scale = 1;
        if(image_question.height > maxHeightImageQuestion){
            scale = QuizGame.Constants.maxHeightImageQuestion/image_question.height;      
        }
        image_question.scale.set(scale);
        image_question.alignIn(this.rectCanvas,Phaser.TOP_CENTER);
        return image_question;
    }
    showLives(lives){
        var group = this.game.add.group();
        var previous;
        for(var index=0;index<lives;index++){
            var heart = this.game.add.sprite(0,0, 'heart');
            if(previous){
                heart.alignTo(previous, Phaser.RIGHT_CENTER, 0);
            }
            previous = heart;
            group.add(heart);
        }
        group.alignIn(this.rectCanvas,Phaser.TOP_RIGHT)
        return group;
    }
    showScore(score,total){
        var style = { 
            font: "20pt Audiowide", fill: "#7C00F8", wordWrap: false,  align: "right", backgroundColor: '#ffffff'
        };
        var textContent = 'Score : '+score+'/'+total;
        var textEl = this.game.add.text(0,0,textContent, style);
        textEl.alignTo(this.livesGroups,Phaser.BOTTOM_RIGHT);
    }
    showExitButton(){
        var button = this.game.add.button(0,0, 'exitButton', this.onButtonExitClicked, this, 2, 1, 0);        
        button.alignIn(this.rectCanvas,Phaser.BOTTOM_RIGHT);
    }
    onButtonExitClicked(){
        this.scene.start('intro');
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
