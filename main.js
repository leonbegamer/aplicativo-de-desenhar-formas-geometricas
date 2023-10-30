x = 0;
y = 0;
drawCircle = "";
drawRect = "";
var SpeechRecognition = webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "o sistema esta te escutando, por favor fale";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "a fala foi reconhecida como: " + content;
   if(content=="desenhe um círculo")
    { 
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "desenhando um circulo";
        drawCircle = "set"
    }

    if(content=="desenhe um retângulo")
    { 
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "desenhando um retangulo";
        drawRect = "set"
    }
}

function setup()
{
    canvas = createCanvas(900, 600);
}

function draw()
{
    if(drawCircle == "set")
    {
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "circulo desenhado";
        drawCircle = "";
    }

    if(drawRect == "set")
    {
        rect(x,y, 100 , 50);
        document.getElementById("status").innerHTML = "retangulo desenhado";
        drawRect = "";
    }
}