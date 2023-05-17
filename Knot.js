// add knots
var knots = [
  "/assets/knots/complete_button.svg",
  "/assets/knots/complete_cross.svg",
  "/assets/knots/complete_mandala.svg",
  "/assets/knots/complete_pineapple.svg",
  "/assets/knots/complete_ruyi.svg",
];
document.getElementById("stop").addEventListener("click", function () {
  var svgobj = document.createElement("object");
  svgobj.setAttribute("type", "image/svg+xml");
  svgobj.setAttribute("data", knots[Math.floor(Math.random() * 5)]);

  // Append the <object> element to the SVG container
  var svgContainer = document.getElementById("svgContainer");
  svgContainer.appendChild(svgobj);
});
// document.createElement("div");
