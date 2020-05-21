// should we just standardize the timeunit to ms? that's basically what js uses for all of its time anyways
// Why? The user can set the time that gets drawn however they like. Also, the time is useful for labels

// ts stands for timestep
class dataThingy {
  constructor(data, labels, units, colors, roundAmts, timeUnit, round, labelColor, ctx) {
    this.ctx = ctx;
    this.labelColor = labelColor;
    this.round = round;

    this.data = [];
    this.timeUnit = timeUnit;
    for (let i = 0; i < data.length; i++) {
      this.data.push({
        data: data[i],
        label: labels[i],
        unit: units[i],
        color: colors[i],
        roundAmt: roundAmts[i]
      })
     
    }
    
  }
/*
x: X position
y: Y position
squareSize: The size of the squares that show the color for each piece of data
font: The font, same as you would input to ctx.font
*/
  key(x, y, squareSize, font) {
    this.ctx.font = font;
    for (let i = 0; i < this.data.length; i++) {
      this.ctx.fillStyle = this.data[i].color;
      this.ctx.textBaseline = "top";
      this.ctx.textAlign = "left";
      this.ctx.fillRect(x, y + i * squareSize * 1.5, squareSize, squareSize);
      this.ctx.fillText(`${this.data[i].label}, ${this.data[i].unit}`, x + squareSize * 1.5, y + squareSize * i * 1.5);
    }
  }
/*
ts1 & ts2: The range of time steps to be drawn
labels: Which labels to draw in the graph
yRanges: A list of ranges for the y value in each data array
laberHorizontalSeperation: How far apart the labels for the time step values should be in pixels
labelVerticalSeperation: How far apart the labels for the values should be
x: X position
y: Y position
w Width of graph
h: height of graph
fon: The font, same as you would input to ctx.font
*/
  lineGraph(ts1, ts2, labels, yRanges, labelHorizontalSeperation, labelVerticalSeperation, x, y, w, h, font) {
    this.ctx.strokeStyle = this.labelColor;
    this.ctx.font = font;

    this.ctx.beginPath();
    this.ctx.moveTo(x, y + h * 0.9);
    this.ctx.lineTo(x + w, y + h * 0.9);
    this.ctx.stroke();

    this.ctx.fillStyle = this.labelColor;
    this.ctx.textBaseline = "middle";
    this.ctx.textAlign = "center";
    for (let i = labelHorizontalSeperation / 2; i < w * 0.9; i += labelHorizontalSeperation) {
      this.ctx.fillText(Math.round(this.map(i, 0, w * 0.9, ts1, ts2) / this.round) / (1 / this.round), i + x, y + h * 0.95);
    }

    for (let i = 0; i < labels.length; i++) {
      let data;
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[j].label == labels[i]) {
          data = this.data[j];
        }
      }

      this.ctx.fillStyle = data.color;
      this.ctx.strokeStyle = data.color;
      this.ctx.textAlign = "left";
      for (let j = labelVerticalSeperation / 2; j < h * 0.9; j += labelVerticalSeperation) {
        this.ctx.fillText(Math.round(this.map(j, 0, h * 0.9, yRanges[i][1], yRanges[i][0]) / data.roundAmt) / (1 / data.roundAmt), x + w * (0.905 + i * (0.1 / labels.length)), y + j);
      }

      let points = [];
      for (let j = 0; j < data.data.length; j++) {
        if (data.data[j].ts >= ts1 && data.data[j].ts <= ts2) {
          if (points.length == 0 && j !== 0) {
            points.push(data.data[j - 1]);
          }
          points.push(data.data[j]);
        }
      }

      this.ctx.beginPath();
      this.ctx.moveTo(x + w * (0.9 + i * (0.1 / labels.length)), y);
      this.ctx.lineTo(x + w * (0.9 + i * (0.1 / labels.length)), y + h);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(this.map(points[0].ts, ts1, ts2, x, x + w * 0.9), this.map(points[0].value, yRanges[i][0], yRanges[i][1], y + h * 0.9, y));
      for (let j = 1; j < points.length; j++) {
        this.ctx.lineTo(this.map(points[j].ts, ts1, ts2, x, x + w * 0.9), this.map(points[j].value, yRanges[i][0], yRanges[i][1], y + h * 0.9, y));
      }
      this.ctx.stroke();
    }
  }

  /*
  ts: The time step
  x: X position
  y: Y position
  r: Radius
  labelDistance: The distance from the center, to be added to the next value
  labelPercent: The percentage of the way out of the circle the labels are
  labels: The labels of the data to include in the chart
  font: The font, same as you would input to ctx.font
  */
  pieChart(ts, x, y, r, labelDistance, labelPercent, labels, font) {
    // do pie chart stuff
    let data = this.data;
    let parts = [];
    let total = 0;
    data.forEach((v1) => {
      if (labels.indexOf(v1.label) !== -1) {
        function getValue(data) {
          let i = 0;
          while (data[i].ts <= ts) {
            i++;
          }

          if (i == 0) {
            return 0;
          } else {
            return i - 1;
          }
        }

        let value = v1.data[getValue(v1.data)].value;
        total += value;

        parts.push({
          color: v1.color,
          value: value
        })
      }
    })

    

    let angle1 = 0;

    for (let i = 0; i < parts.length; i++) {
      let percent = (parts[i].value / total)
      let angle2 = angle1 + percent * 2 * Math.PI;

      this.ctx.fillStyle = parts[i].color;
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, angle1, angle2);
      this.ctx.lineTo(x, y);
      this.ctx.fill();

      let labelAngle = (angle1 + angle2) / 2;
      let labelX = Math.cos(labelAngle) * (r * labelPercent + labelDistance) + x;
      let labelY = Math.sin(labelAngle) * (r * labelPercent + labelDistance) + y;
      this.ctx.font = font;
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillStyle = this.labelColor;
      this.ctx.fillText(Math.round(percent * 10) / 10, labelX, labelY);

      angle1 = angle2;
    }
  }
  barChart(ts, x, y, w, h, labels, font) {

  }

  map(v, min1, max1, min2, max2) {
    return ((v - min1) / (max1 - min1)) * (max2 - min2) + min2;
  }
}