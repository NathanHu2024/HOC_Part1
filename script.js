function greeter() {
  let name = prompt("The purpose of this website is to inform you about Bill Gates' significant contributions to conputer science. Have you heard of Bill Gates?");
  document.getElementById("greet").innerHTML =
  "Your response "+name+ "is great";
}
