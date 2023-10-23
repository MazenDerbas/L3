import { Chart } from './Chart.js'

/**
 *
 */
export class ExpenseChart {
  #expenseTracker
  #expenseForm
  #budgetForm
  #chartButton
  #outputContainer
  #startDate
  #endDate
  #generateButton
  #showButton

  /**
   * Constructs a new ExpenseChart instance.
   *
   * @param {expenseTracker} expenseTracker - The expense tracker insatce.
   */
  constructor (expenseTracker) {
    this.#expenseTracker = expenseTracker
    this.#expenseForm = document.querySelector('.expense-container')
    this.#budgetForm = document.querySelector('.budget-container')
    this.#chartButton = document.getElementById('chart')
    this.#outputContainer = document.querySelector('.output-container')
    this.#startDate = document.getElementById('startDate')
    this.#endDate = document.getElementById('endDate')
    this.#generateButton = document.getElementById('create')
    this.#showButton = document.getElementById('show')
    this.#generateChartEvent()
    this.#hideElements()
    this.#showElements()
  }

  /**
   * Event to generate a bar chart.
   */
  #generateChartEvent () {
    this.#generateButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.#filterExpenses()
    })
  }

  /**
   *
   */
  #filterExpenses () {
    const startDate = this.#startDate.value
    const endDate = this.#endDate.value
    const interval = this.#expenseTracker.getExpensesByDateInterval(startDate, endDate)
    this.#displayFilterdExpenses(interval)
  }

  /**
   * Renders the filtered date.
   *
   * @param interval
   */
  #displayFilterdExpenses (interval) {
    const dateChartDate = interval.map(expense => ({
      label: expense.getName(),
      value: expense.getAmount()
    }))
    this.#createChart(dateChartDate)
  }

  /**
   * Generates a new chart in the DOM using the provided data.
   *
   * @param dateChartData
   */
  #createChart (dateChartData) {
    const dateChart = new Chart('barChart', dateChartData)
    dateChart.drawBarChart()
  }

  /**
   * Event to hide HTML elements.
   */
  #hideElements () {
    this.#chartButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.#outputContainer.classList.add('hidden')
      this.#expenseForm.classList.add('hidden')
      this.#budgetForm.classList.add('hidden')
      this.#chartButton.classList.add('hidden')
      this.#startDate.classList.remove('hidden')
      this.#endDate.classList.remove('hidden')
      this.#generateButton.classList.remove('hidden')
      this.#showButton.classList.remove('hidden')
    })
  }

  /**
   * Event to show HTML elements.
   */
  #showElements () {
    this.#showButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.#outputContainer.classList.remove('hidden')
      this.#expenseForm.classList.remove('hidden')
      this.#budgetForm.classList.remove('hidden')
      this.#chartButton.classList.remove('hidden')
      this.#startDate.classList.add('hidden')
      this.#endDate.classList.add('hidden')
      this.#generateButton.classList.add('hidden')
      this.#showButton.classList.add('hidden')
    })
  }
}
