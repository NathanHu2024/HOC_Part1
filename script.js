function greeter() {
  let name = prompt("The purpose of this website is to inform you about Bill Gates' significant contributions to computer science. Have you heard of Bill Gates?");
  document.getElementById("greet").innerHTML =
  "It's great to hear your response of " +name+ "!";
}
