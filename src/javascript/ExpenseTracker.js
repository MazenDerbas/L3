import { Budget } from './Budget.js'
import { Category } from './Category.js'
import { Expense } from './Expense.js'

/**
 * Represents an Expense Tracker that helps manage expenses and budgets.
 *
 */
export class ExpenseTracker {
  #expenseList
  #categoryList
  #budgetList

  /**
   * Creates a new instance of ExpenseTracker.
   *
   */
  constructor () {
    this.#expenseList = []
    this.#categoryList = []
    this.#budgetList = []
  }

  /**
   * Get the list of expenses.
   *
   * @returns {Expense[]} An array of Expense objects.
   */
  getExpensList () {
    return this.#expenseList
  }

  /**
   * Get the list of categories.
   *
   * @returns {Category[]} An array of Category objects.
   */
  getCategoryList () {
    return this.#categoryList
  }

  /**
   * Get the list of budgets.
   *
   * @returns {Budget[]} An array of Budget objects.
   */
  getBudgetList () {
    return this.#budgetList
  }

  /**
   * Add a new category.
   *
   * @param {string} name - The name of the category to add.
   */
  addCategory (name) {
    const category = new Category(name)
    this.#categoryList.push(category)
  }

  /**
   * Search for a category.
   *
   * @param {string} name - The name of the category to find.
   * @returns {Category[]} An array of Budget objects.
   */
  #findCategory (name) {
    for (let i = 0; i < this.getCategoryList().length; i++) {
      if (this.getCategoryList()[i].getName() === name) {
        return this.getCategoryList()[i]
      }
    }
    return null
  }

  /**
   * Add an expense to the tracker.
   *
   * @param {string} name - The name of the expense.
   * @param {number} amount - The amount of the expense.
   * @param {string} date - The date of the expense in 'YYYY-MM-DD' format.
   * @param {string} category - The category of the expense.
   */
  addExpense (name, amount, date, category) {
    if (!this.#findCategory(category)) {
      this.addCategory(category)
    }
    const expense = new Expense(name, amount, date, category)
    this.#expenseList.push(expense)
  }

  /**
   * Add a new budget for a category.
   *
   * @param {string} category - The category for which to add a budget.
   * @param {number} amount - The budget amount.
   */
  addBudget (category, amount) {
    if (!this.#findCategory(category)) {
      this.addCategory(category)
    }

    const budget = new Budget(category, amount)
    this.#budgetList.push(budget)
  }

  /**
   * Removes an expense from the expense list.
   *
   * @param {string} name - The name of the expense to remove.
   */
  removeExpense (name) {
    for (let i = 0; i < this.#expenseList.length; i++) {
      if (this.#expenseList[i].getName() === name) {
        this.#expenseList.splice(i, 1)
        break
      }
    }
  }

  /**
   * Removes a budget for a specific category .
   *
   * @param {string} category - The name of the category for which the budget is to be removed.
   */
  removeBudget (category) {
    for (let i = 0; i < this.#budgetList.length; i++) {
      if (this.#budgetList[i].getCategory() === category) {
        this.#budgetList.splice(i, 1)
      }
    }
  }

  /**
   * Get expenses for a specific category.
   *
   * @param {string} category - The category for which to retrieve expenses.
   * @returns {Expense[]} An array of Expense objects for the specified category.
   */
  getExpensesByCategory (category) {
    const categoryExpenses = []

    if (!this.#findCategory(category)) {
      throw new Error(category + ' does not exist in the category list ')
    }
    for (const expense of this.getExpensList()) {
      if (expense.getCategory() === category) {
        categoryExpenses.push(expense)
      }
    }
    return categoryExpenses
  }

  /**
   * Get the total expenses across all categories.
   *
   * @returns {number} The total expenses as a numeric value.
   */
  getTotalExpenses () {
    let amount = 0

    for (const expense of this.getExpensList()) {
      if (expense.getAmount()) {
        amount += expense.getAmount()
      }
    }
    return amount
  }

  /**
   * Get the total expenses for a specific category.
   *
   * @param {string} category - The category for which to calculate total expenses.
   * @returns {number} The total expenses for the specified category as a numeric value.
   */
  getExpenesAmountByCategory (category) {
    let amount = 0

    if (!this.#findCategory(category)) {
      throw new Error(category + ' does not exist in the category list ')
    }

    for (const expense of this.getExpensList()) {
      if (expense.getCategory() === category) {
        amount += expense.getAmount()
      }
    }
    return amount
  }

  /**
   * Get the remaining budget amount for a specific category.
   *
   * @param {string} category - The category for which to calculate the remaining budget.
   * @returns {number} The remaining budget amount for the specified category.
   */
  getRemainingBudget (category) {
    let budget
    let remain = 0

    if (!this.#findCategory(category)) {
      throw new Error(category + ' does not exist in the category list')
    }

    for (const b of this.getBudgetList()) {
      if (b.getCategory() === category) {
        budget = b
      }
    }

    if (budget) {
      const categoryExpenses = this.getExpenesAmountByCategory(category)
      remain = budget.getAmount() - categoryExpenses
    }
    return remain
  }

  /**
   * Get a summary report of total expenses for each category.
   *
   * @returns {object} An object where category names are keys, and total expenses are values.
   */
  getExpenseReport () {
    const summary = {}
    let totalExpenses = 0
    const expenses = this.getExpensList()

    for (const expense of expenses) {
      totalExpenses = this.getExpenesAmountByCategory(expense.getCategory())
      summary[expense.getCategory()] = totalExpenses
    }

    return summary
  }

  /**
   * Get a report of budgets and their remaining amounts for each category.
   *
   * @returns {object} An object where category names are keys, and budget information is values.
   */
  getBudgetReport () {
    const budgetReport = {}
    for (const budget of this.getBudgetList()) {
      const category = budget.getCategory()
      const totalBudget = budget.getAmount()
      const categoryExpenses = this.getExpenesAmountByCategory(category)
      const remainingBudget = totalBudget - categoryExpenses

      budgetReport[category] = {
        totalBudget,
        remainingBudget
      }
    }
    return budgetReport
  }

  /**
   * Get expenses for a specific date.
   *
   * @param {string} date - The date for which to retrieve expenses in 'YYYY-MM-DD' format.
   * @returns {Expense[]} An array of Expense objects for the specified date.
   */
  getExpensesByDate (date) {
    const expenses = this.getExpensList()
    const expenseDate = []
    for (const expense of expenses) {
      console.log(expense.getDate())
      if (expense.getDate() === date) {
        expenseDate.push(expense)
      }
    }
    return expenseDate
  }

  /**
   * Get expenses within a specified date interval.
   *
   * @param {string} startDate - The start date of the interval in 'YYYY-MM-DD' format.
   * @param {string} endsDate - The end date of the interval in 'YYYY-MM-DD' format.
   * @returns {Expense[]} An array of Expense objects within the specified date interval.
   */
  getExpensesByDateInterval (startDate, endsDate) {
    const expenses = this.getExpensList()
    const expenseInterval = []

    for (const expense of expenses) {
      if (expense.getDate() <= endsDate && expense.getDate() >= startDate) {
        expenseInterval.push(expense)
      }
    }
    return expenseInterval
  }
}
