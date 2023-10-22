/**
 * Represents a specific category, which can be associated with expenses.
 */
export class Category {
  #name

  /**
   * Creates a new Category instance.
   *
   * @param {string} name - The name of the category.
   */
  constructor (name) {
    this.#setName(name)
  }

  /**
   * Sets the name for the category.
   *
   * @param {string} name - The name of the category.
   */
  #setName (name) {
    this.#name = name
  }

  /**
   * Gets the name of the category.
   *
   * @returns {string} - The name of the category.
   */
  getName () {
    return this.#name
  }
}
