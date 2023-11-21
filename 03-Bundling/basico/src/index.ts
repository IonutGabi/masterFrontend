import "./styles.scss";
import logo from "./content/logo_2.png";

const title = document.querySelector(".background");

title.textContent = "Hello world";

const image = document.createElement("img");
image.src = logo;

document.getElementById("image").appendChild(image);
