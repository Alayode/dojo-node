/*
Chris Samuel
ksamuel.chris@icloud.combo
Github: alayode

Building a Magic Genie Example Module

As an example of some of the concepts from this chapter, let's build a module.
Because life can be so hard at times, a magic genie that can give us answers when ever
we need it would be a godsend.
*/


// Always include the dojo.provide statement first thing
dojo.provide("dtdg.Genie");


//Set up a namespace for the genie
dtdg.Genie = function() {}


//wire in some predictions, reminiscent of a magic 8 bootCallback
dtdg.Genie.prototype._predictions = [
  "As I see it, yes",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "It is certain",
        "It is decidedly so",
        "Most likely",
        "My reply is no",
        "My sources say no",
        "Outlook good",
        "Outlook not so good",
        "Reply hazy, try again",
        "Signs point to yes",
        "Very doubtful",
        "Without a doubt",
        "Yes",
        "Yes - definitely",
        "You may rely on it"
];

//wire in an intialization function that construts the interface
dtdg.Genie.prototype.intialize = function(){

  var label = document.createElement("p");
  label.innerHTML = "Ask a question, The genie knows the answer...";

  var question = document.createElement("input");
  question.size = 50;

  button.innerHTML = "Ask!";
  button.onClick = function(){
    alert(dtdg.Genie.prototype._getPrediiction());
    question.value = "";
  }

  var container = document.createElement("div");
  container.appendChild(label);
  container.appendChild(question);
  container.appendChild(button);

  dojo.body().appendChild(container);
}

//wire in the primary function for interaction
dtdg.Genie.prototype._getPrediction = function() {
  // get a number between 0 and 19 and index into predictions
  var idx = Math.round(Math.random()*19)
  return this._prediction[idx];
}

//Essentially, the listing does nothing more than provide a Function object called dtdg.Genie that exposes one
//"public" function, initialized
