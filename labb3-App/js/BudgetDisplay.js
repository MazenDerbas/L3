/**
 * Class responsible for displaying budget items.
 */
export class BudgetDisplay {
  #expenseTracker
  #budgetContainer

  /**
     * Constructs a new BudgetDisplay instance.
     *
     * @param {ExpenseTracker} expenseTracker - The expense tracker instance.
     * @param {HTMLElement} budgetContainer - The HTML element where the budget items will be displayed.
     */
  constructor(expenseTracker) {
    this.#expenseTracker = expenseTracker
    this.#budgetContainer = document.getElementById('budgetContainer')
  }

  /**
     * Renders the budget items.
     */
  displayBudget() {
    this.#clearBudget()
    const budgets = this.#expenseTracker.getBudgetList()

    budgets.forEach((budget) => {
      const budgetDiv = document.createElement('tr')
      budgetDiv.className = 'budget'
      const category = budget.getCategory()
      const amount = budget.getAmount()
      budgetDiv.innerHTML = `
          <td> ${category} </td>
          <td> ${amount} </td>
          <td> ${this.#expenseTracker.getExpenesAmountByCategory(category)} </td>
          <td> ${this.#expenseTracker.getRemainingBudget(amount)} </td>
       `
      this.#budgetContainer.appendChild(budgetDiv)
    })
  }

  /**
     * Clears the budget items from the display container.
     */
  #clearBudget () {
    this.#budgetContainer.innerHTML = '';
  }
}
