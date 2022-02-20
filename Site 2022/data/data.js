var questions=[
    {
        text: "Какую силу называют силой трения?:",
        answers: ["Силу взаимодействия между телами",
        "Силу, которая препятствует движению тела",
              "Силу взаимодействия поверхностей тел, которая препят­ствует их относительному движению",
            "Силу взаимодействия между телами, которая останавлива­ет движущееся тело"],
        correctAnswer: 2
    },
    {
        text: "Почему возникает сила трения?",
        answers: ["Потому что поверхности тел шероховатые",
              "Потому что молекулы соприкасающихся тел притягивают­ся друг к другу",
              "Потому что шероховатости поверхностей тел зацепляются друг за друга, а молекулы, находящиеся на поверхностях, притягиваются",
              "Потому что по закону всемирного тяготения тела притяги­ваются друг к другу"],
        correctAnswer: 2
    },
    {
        text: "Какие существуют силы трения?",
        answers: ["Трения скольжения",
              "Трения покоя",
              "Все названные виды"],
        correctAnswer: 2
    },
    {
        text: "При каком виде трения тел возникает наименьшая сила трения?",
        answers: ["При трении качения",
              "В случае трения скольжения",
              "При всех видах трения силы одинаковы"],
        correctAnswer: 0
    },
    {
        text: "Как можно уменьшить трение?",
        answers: ["Смазать поверхности соприкасающихся тел, сгладить поверхности",
              "Прижать тела друг к другу, отполировать поверхности",
              "Смазать поверхности соприкасающихся тел, отполировать поверхности"],
        correctAnswer: 0
    },
    ];
    
    var yourAns = new Array;
    var score = 0;
    
    function Engine(question, answer) {yourAns[question]=answer;}
    
    function Score(){
       var answerText = "Результаты:\n";
       for(var i = 0; i < yourAns.length; ++i){
        var num = i+1;
        answerText=answerText+"\n    Вопрос №"+ num +"";
        if(yourAns[i]!=questions[i].correctAnswer){
            answerText=answerText+"\n    Правильный ответ: " +
            questions[i].answers[questions[i].correctAnswer] + "\n";
          }
            else{
            answerText=answerText+": Верно! \n";
            ++score;
            }
           }
    
       answerText=answerText+"\nВсего правильных ответов: "+score+"\n";
    
       alert(answerText);
       yourAns = [];
       score = 0;
       clearForm("quiz");
    }
    function clearForm(name) {
       var f = document.forms[name];
       for(var i = 0; i < f.elements.length; ++i) {
        if(f.elements[i].checked)
            f.elements[i].checked = false;
    }
    }
