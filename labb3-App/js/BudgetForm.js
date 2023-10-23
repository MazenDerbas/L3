import { BudgetDisplay } from './BudgetDisplay.js'
/**
 *
 */
export class BudgetForm {
  #expenseTracker
  #budgetForm
  #budgetAmount
  #budgetCategory
  #errorMessage

  /**
   * Constructs a new BudgetForm instance.
   *
   * @param {ExpenseTracker} expenseTracker the expense tracker insatce.
   */
  constructor (expenseTracker, budgetDisplay) {
    this.#expenseTracker = expenseTracker
    this.#budgetForm = document.getElementById('budgetForm')
    this.#budgetAmount = document.getElementById('total-amount')
    this.#budgetCategory = document.getElementById('budgetCategory')
    this.#errorMessage = document.getElementById('errorBudget')
    this.budgetDisplay = budgetDisplay
  }

  /**
   * Registers event handlers for the budget form.
   */
  registerEventHandlers () {
    this.#budgetForm.addEventListener('submit', (e) => {
      e.preventDefault()
      this.#createBudget()
      this.budgetDisplay.displayBudget()
    })
  }

  #createBudget () {
    try {
      const amount = parseFloat(this.#budgetAmount.value)
      const category = this.#budgetCategory.value
      
      this.#validateBudgetInput(amount)
      this.#validateCategoryinput(category)
      this.#validateBudgetExist(category , amount)
    
      this.#errorMessage.classList.add('hidden')
    } catch (error) {
      this.#errorMessage.classList.remove('hidden')
    }
  }

  #validateBudgetInput(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount. Please enter a positive number.')
    }
  }

  #validateCategoryinput(category){
    if (!category) {
      throw new Error('Invalid category. Category cannot be empty.')
    }
  }

  #validateBudgetExist(category, amount) {
    if (this.#isBudgetExists(category)) {
      throw new Error('Budget for this category already exists.')
      
    } else {
      this.#expenseTracker.addBudget(category, amount)
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
}
