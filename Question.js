class Question {
    constructor() 
    {
      this.input = createInput("Enter your name here");
      this.input2  = createInput("Enter the correct response here")
     
    }
     
  
  
    display(){
      var title = createElement('h2')
      var button = createButton('Submit')
      var question = createElement('h2')
      var option1 = createElement('h2')
      var option2 = createElement('h2')
      var option3 = createElement('h2')
      var option4 = createElement('h2')

      title.html("My Quiz Game");
      title.position(350, 0);
      
      question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
      question.position(150, 80);

      option1.html("1: Everyone");
      option1.position(150, 200);
      option2.html("2: Envelope");
      option2.position(150, 220);
      option3.html("3: Estimate");
      option3.position(150, 240);
      option4.html("4: Example");
      option4.position(150, 260);
      button.position(1025,430)

      this.input1.position(50,200)
      this.input2.position(150,200)

      button.mousePressed(function()
      {
        title.hide();
        input1.hide();
        input2.hide();
        button.hide();
        contestant.name = this.input1.value();
        contestantCount +=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);

        });




    } 
}
  