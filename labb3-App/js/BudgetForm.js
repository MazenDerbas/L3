import { ExpenseTracker } from '../../src/javascript/ExpenseTracker.js'

/**
 *
 */
export class BudgetForm {
  #expenseTracker
  #budgetForm
  #budgetAmount
  #budgetCategory
  #outputContainer
  #budgetContainer
  #errorMessage

  /**
   * Constructs a new BudgetForm instance.
   *
   * @param {ExpenseTracker} expenseTracker the expense tracker insatce.
   */
  constructor (expenseTracker) {
    this.#expenseTracker = expenseTracker
    this.#budgetForm = document.getElementById('budgetForm')
    this.#budgetAmount = document.getElementById('total-amount')
    this.#budgetCategory = document.getElementById('budgetCategory')
    this.#outputContainer = document.querySelector('.output-container')
    this.#budgetContainer = document.getElementById('budgetContainer')
    this.#errorMessage = document.getElementById('errorBudget')
  }

  /**
   * Registers event handlers for the budget form.
   */
  registerEventHandlers () {
    this.#budgetForm.addEventListener('submit', (e) => {
      e.preventDefault()
      this.createBudget()
      this.displayBudget()
    })
  }

  /**
   * Creates a budget.
   */
  createBudget () {
    const amount = parseFloat(this.#budgetAmount.value)
    const category = this.#budgetCategory.value

    if (!this.budgetExists(category)) {
      this.#expenseTracker.addBudget(category, amount)
      this.#errorMessage.classList.add('hidden')
    } else {
      this.#errorMessage.classList.remove('hidden')
    }
  }

  /**
   * Desc.
   *
   * @param {string} category - The budget category to check.
   * @returns {boolean} true if budget exists, otherwise false
   */
  budgetExists (category) {
    const budgets = this.#expenseTracker.getBudgetList()
    return budgets.some(budget => budget.getCategory() === category)
  }

  /**
   * Clears the budget display.
   */
  clearBudget () {
    this.#budgetContainer.innerHTML = ''
  /**
   *
   */
  }

  /**
   * Renders the budget items.
   */
  displayBudget () {
    this.clearBudget()
    const budgets = this.#expenseTracker.getBudgetList()

    budgets.forEach(budget => {
      const budgetDiv = document.createElement('tr')
      budgetDiv.className = 'budget'

      budgetDiv.innerHTML = `
          <td> ${budget.getCategory()} </td>
          <td> ${budget.getAmount()} </td>
          <td> ${this.#expenseTracker.getExpenesAmountByCategory(budget.getCategory())} </td>
          <td> ${this.#expenseTracker.getRemainingBudget(budget.getCategory())} </td>
        `

      this.#budgetContainer.appendChild(budgetDiv)
    }
    )
  }
}
