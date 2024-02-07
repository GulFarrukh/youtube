// script.js

let myPlot = document.getElementById('myPlot');

const xarray = ["italy", "iran", "america", "china"];
const yarray = [55, 45, 34, 23];

const data = [{
    x: xarray,
    y: yarray,
    type: "bar",
    orientation: "v",
    marker: { color: "rgba(0, 255, 255, 0.5)" }
}];

const layout = { title: "World Wide Wine Production"};
Plotly.newPlot("myPlot", data, layout);
