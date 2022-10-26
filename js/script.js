// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-3-01-JS/sw.js", {
    scope: "/ICS2O-Unit-3-01-JS/",
  })
}

/**
 * This function calculates area of a triangle
 */
function calculate() {
  // input
  const abase = parseInt(document.getElementById("a-trapezoid").value)
  const bbase = parseInt(document.getElementById("b-trapezoid").value)
  const height = parseInt(document.getElementById("height").value)

  // process
  const area = ((abase + bbase) / 2) * height

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}
