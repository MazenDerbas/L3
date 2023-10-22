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
      this.#createBudget()
      this.displayBudget()
    })
  }

  #createBudget () {
    const amount = parseFloat(this.#budgetAmount.value)
    const category = this.#budgetCategory.value
    if (isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount. Please enter a positive number.')
    }
    if (!category) {
      throw new Error('Invalid category. Category cannot be empty.')
    }
    if (!this.#isBudgetExists(category)) {
      this.#expenseTracker.addBudget(category, amount)
      this.#errorMessage.classList.add('hidden')
      throw new Error('Budget for this category already exists.')
    } else {
      this.#errorMessage.classList.remove('hidden')
    }
  }
  
  /**
   *
   * @param {string} category - The budget category to check.
   * @returns {boolean} true if budget exists, otherwise false
   */
  #isBudgetExists (category) {
    const budgets = this.#expenseTracker.getBudgetList()
    return budgets.some(budget => budget.getCategory() === category)
  }


  #clearBudget () {
    this.#budgetContainer.innerHTML = ''
  }

  /**
   * Renders the budget items.
   */
  displayBudget () {
    this.#clearBudget()
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
