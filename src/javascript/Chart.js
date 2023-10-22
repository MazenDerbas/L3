/**
 * Represents a basic bar chart that can be drawn on a canvas.
 */
export class Chart {
  /**
   * Constructs a new Chart instance.
   *
   * @param {string} canvasId - The ID of the canvas element where the chart will be drawn.
   * @param {object[]} data - The dataset for the chart.
   */
  constructor (canvasId, data) {
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext('2d')
    this.data = data
  }

  /**
   * Draws a bar chart on the canvas.
   */
  drawBarChart () {
    const PADDING_BOTTOM = 20
    const PADDING_TOP = 40
    const BAR_WIDTH = 60
    const SPACE_BETWEEN_BARS = 80
    const LABEL_OFFSET_X = 20 / 2 // Half of 20 to center the label
    const LABEL_OFFSET_Y = 5
    let maxValue = 0
    // Find the maximum value in the dataset
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i]
      if (item.value > maxValue) {
        maxValue = item.value
      }
    }
    const chartHeight = this.canvas.height - PADDING_TOP
    // Draw each bar based on its value
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i]
      const x = PADDING_TOP + i * SPACE_BETWEEN_BARS
      const barHeight = (item.value / maxValue) * chartHeight
      const y = this.canvas.height - PADDING_BOTTOM - barHeight
      this.ctx.fillStyle = this.generateRandomColor()
      this.ctx.fillRect(x, y, BAR_WIDTH, barHeight)
      this.ctx.fillText(item.label, x + LABEL_OFFSET_X, this.canvas.height - LABEL_OFFSET_Y)
    }
  }

  /**
   * Generate a random RGB colors.
   *
   * @returns {string} A string representing the random RGB color in the format "rgb(r,g,b)".
   */
  generateRandomColor () {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
  }
}
