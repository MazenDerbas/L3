/**
 * Represents an individual expense.
 */
export class Expense {
  #name
  #amount
  #date
  #category

  /**
   * Creates a new Expense instance.
   *
   * @param {string} name - The name of the expense.
   * @param {number} amount - The amount of the expense.
   * @param {string} date - The date of the expense in 'YYYY-MM-DD' format.
   * @param {string} category - The category of the expense.
   */
  constructor (name, amount, date, category) {
    this.#setName(name)
    this.#setAmount(amount)
    this.#setDate(date)
    this.#setCategory(category)
  }

  /**
   * Gets the name of the expense.
   *
   * @returns {string} - The name of the expense.
   */
  getName () {
    return this.#name
  }

  /**
   * Sets the name of the expense.
   *
   * @param {string} name - The name of the expense.
   */
  #setName (name) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('Invalid expense name provided. It should be a non-empty string.')
    }
    this.#name = name
  }

  /**
   * Gets the amount of the expense.
   *
   * @returns {number} - The amount of the expense.
   */
  getAmount () {
    return this.#amount
  }

  /**
   * Sets the amount of the expense.
   *
   * @param {number} amount - The amount of the expense.
   * @private
   */
  #setAmount (amount) {
    if (typeof amount !== 'number' || amount < 0) {
      throw new Error('Invalid expense amount provided. It should be a non-negative number.')
    }
    this.#amount = amount
  }

  /**
   * Gets the date of the expense.
   *
   * @returns {string} - The date of the expense in 'YYYY-MM-DD' format.
   */
  getDate () {
    return this.#date
  }

  /**
   * Sets the date of the expense.
   *
   * @param {string} date - The date of the expense in 'YYYY-MM-DD' format.
   */
  #setDate (date) {
    this.#date = date
  }

  /**
   * Gets the category of the expense.
   *
   * @returns {string} - The category of the expense.
   */
  getCategory () {
    return this.#category
  }

  /**
   * Sets the category of the expense.
   *
   * @param {string} category - The category of the expense.
   */
  #setCategory (category) {
    if (typeof category !== 'string' || category.trim() === '') {
      throw new Error('Invalid category provided for expense. It should be a non-empty string.')
    }
    this.#category = category
  }
}
