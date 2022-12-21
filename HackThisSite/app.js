let now = new Date().getTime();

console.log(now);


function giveHint() {
  const node = document.createElement("p");
const textnode = document.createTextNode("Please wait");

node.appendChild(textnode);
document.getElementById("hint-label").appendChild(node);
}