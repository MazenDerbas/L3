import { ExpenseDisplay } from './ExpenseDisplay.js'

/**
 *
 */
export class ExpenseForm {
  #expenseTracker
  #expenseForm
  #expenseName
  #amount
  #date
  #categorySelect
  #newCategoryInput
  #addCategoryButton
  #expenseDisplay
  #budgetDisplay

  /**
   * Constructs a new ExpenseForm instance.
   *
   * @param {expenseTracker} expenseTracker - The expense tracker insatce.
   */
  constructor (expenseTracker, budgetDisplay) {
    this.#expenseTracker = expenseTracker
    this.#budgetDisplay = budgetDisplay
    this.#expenseForm = document.getElementById('expenseForm')
    this.#expenseName = document.getElementById('exname')
    this.#amount = document.getElementById('amount')
    this.#date = document.getElementById('date')
    this.#categorySelect = document.getElementById('category')
    this.#newCategoryInput = document.getElementById('newCategory')
    this.#addCategoryButton = document.getElementById('addCategory')
    this.#expenseDisplay = new ExpenseDisplay(expenseTracker,budgetDisplay )
    
  }


  registerEventHandlers () {
    this.#expenseForm.addEventListener('submit', (e) => {
      e.preventDefault()
      this.#createExpense()
      this.#budgetDisplay.displayBudget()
      this.#expenseDisplay.displayExpenses()
    })

    this.#categorySelect.addEventListener('change', (e) => {
      if (e.target.value === 'addNew') {
        this.#newCategoryInput.style.display = 'block'
        this.#addCategoryButton.style.display = 'block'
      } else {
        this.#newCategoryInput.style.display = 'none'
        this.#addCategoryButton.style.display = 'none'
      }
    })
  }

  #createExpense () {
    try {
      const expenseNameValue = this.#expenseName.value
      const amountValue = this.#amount.value
      const dateValue = this.#date.value
      let categoryValue = this.#categorySelect.value

      this.#validateExpenseNameInput(expenseNameValue)
      this.#validateExpenseAmountInput(amountValue)
      this.#validateDateinput(dateValue)
      this.#validateCategoryinput(categoryValue)
      
      if (categoryValue === 'addNew') {
        categoryValue = this.#newCategoryInput.value
        this.#createCategory(categoryValue)
      }

      this.#expenseTracker.addExpense(expenseNameValue, parseFloat(amountValue), dateValue, categoryValue)
      this.#expenseForm.reset()
    } catch (error) {

    }
  }

  #validateExpenseNameInput(name) {
    if (!name)
    throw new Error('Expense name cannot be empty.')
  }

  #validateExpenseAmountInput(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount. Please enter a positive number.')
    }
  }

  #validateCategoryinput(category) {
    if (!category) {
      throw new Error('Invalid category. Category cannot be empty.')
    }
  }

  #validateDateinput(dateValue) {
    if (!dateValue) {
      throw new Error('Please select a valid date.')
    }
  }  

  #createCategory (categoryValue) {
    this.#addOptionToDropDown(this.#categorySelect, categoryValue)
    const budgetCategoryDropdown = document.getElementById('budgetCategory')
    this.#addOptionToDropDown(budgetCategoryDropdown, categoryValue)

    this.#expenseTracker.addCategory(categoryValue)
    this.#newCategoryInput.value = ''
    this.#newCategoryInput.style.display = 'none'
    this.#addCategoryButton.style.display = 'none'
    this.#categorySelect.value = categoryValue
  }

  /**
   * Adds a new option to the provided dropdown element.
   *
   * @param {HTMLSelectElement} dropDown .
   * @param {string} categoryValue .
   */
  #addOptionToDropDown (dropDown, categoryValue) {
    const option = document.createElement('option')
    option.innerText = categoryValue
    option.value = categoryValue
    dropDown.add(option, dropDown.options[dropDown.options.length - 1])
  }
}
