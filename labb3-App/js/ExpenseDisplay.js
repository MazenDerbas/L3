
/**
 *
 */
export class ExpenseDisplay {
  #expenseTracker
  #expenseContainer
  #budgetDisplay

  /**
   * Constructs a new ExpenseChart instance.
   *
   * @param {expenseTracker} expenseTracker - The expense tracker insatce.
   */
  constructor (expenseTracker, budgetDisplay) {
    this.#expenseTracker = expenseTracker
    this.#expenseContainer = document.getElementById('expenseContainer')
    this.#budgetDisplay = budgetDisplay
  }

  displayExpenses () {
    this.#clearExpenses()
    const expenses = this.#expenseTracker.getExpensList()
    expenses.forEach(expense => this.#displaySingleExpense(expense))
  }

  #clearExpenses () {
    this.#expenseContainer.innerHTML = ''
  }

  #displaySingleExpense (expense) {
    const expenseDiv = this.#createExpenseElement(expense)
    this.#expenseContainer.appendChild(expenseDiv)
  }

  #createExpenseElement (expense) {
    const expenseDiv = document.createElement('tr')
    expenseDiv.className = 'expense'
    expenseDiv.innerHTML = `
      <td>${expense.getName()}</td>
      <td>${expense.getAmount()}</td>
      <td>${expense.getDate()}</td>
      <td>${expense.getCategory()}</td>
      <td><button>Delete</button></td>
  `

    // Add event listener for the delete button
    this.#addDeleteButtonEventListener(expenseDiv, expense)

    return expenseDiv
  }

  /**
   * Adds an event listener to the delete button of an expense element.
   *
   * @param {object} expenseElement -
   * @param {object} expense The expense data object
   */
  #addDeleteButtonEventListener (expenseElement, expense) {
    const deleteButton = expenseElement.querySelector('button')
    deleteButton.addEventListener('click', () => {
      this.#expenseTracker.removeExpense(expense.getName())
      this.#expenseContainer.removeChild(expenseElement)
      this.#budgetDisplay.displayBudget()
    })
  }
}
