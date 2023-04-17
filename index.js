import { getResistorOhms } from './resistor.js'

document.querySelectorAll(".box").forEach((el) => el.addEventListener("click", (evt, bands = document.querySelectorAll("[id^=b]")) => (bands[evt.target.parentElement.id[5]].className = "band " + evt.target.textContent, document.querySelector(".answer").textContent = getResistorOhms(...[...bands].map((el) => el.className.split(" ")[1])))))