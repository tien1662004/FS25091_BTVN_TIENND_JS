
const textare = document.getElementById("textInput");
textare.oninput = function(){
  const text = textare.value;

  document.getElementById("wordCount").innerText = 
  "Số từ:" + text.split(" ").length;
  document.getElementById("charCount").innerText = 
  "số ký tự còn lại:" + (200 - text.length)
};