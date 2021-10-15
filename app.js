var button = document.querySelector(".btn");

var textInput = document.querySelector("#text-input");

var textOutput = document.querySelector(".output");

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
  return url + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error Occurred", error);
}

function clickButton() {
  var inputText = textInput.value;

  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      textOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

button.addEventListener("click", clickButton);
