const c = document.getElementById("c");
const draw = c.getContext("2d");

let CO2 = [];
let temperature = [];

for (let i = 0; i < CO2UTC.length; i++) {
  CO2.push(({
    ts: CO2UTC[i][0] / 31536000000 + 1970,
    value: CO2UTC[i][1]
  }))
}

for (let i = 0; i < temperatureUTC.length; i++) {
  temperature.push(({
    ts: temperatureUTC[i][0] / 31536000000 + 1970,
    value: temperatureUTC[i][1]
  }))
}

c.width = window.innerWidth;
c.height = window.innerHeight;

let renderer = new dataThingy([CO2, temperature], ["CO2", "Temperature anomaly"], ["ppm", "°C"], ["rgb(64, 64, 255)", "rgb(255, 64, 64)"], [1, 0.1], "years", 1, "#fff", draw);
let i = 0;
function drawLoop() {
  // setTimeout(drawLoop, 1000/60)
  draw.fillStyle = "#000";
  draw.fillRect(0, 0, c.width, c.height);

  // renderer.lineGraph(1950, 2020, ["CO2", "Temperature anomaly"], [
  //   [290, 420],
  //   [-0.9, 1.5]
  // ], 128, 48, 0, 0, c.width, c.height, "italic 32px Spectral");
  renderer.key(16, 16, 32, "italic 32px Spectral");
  renderer.pieChart(1972, c.width/2, (3/4)*c.height, 100, 0, 0.5, ["CO2", "Temperature anomaly"], "italic 32px Spectral");
  console.log("bruh");
  // setTimeout(()=>{requestAnimationFrame(drawLoop); i++;},1000)
}

drawLoop();