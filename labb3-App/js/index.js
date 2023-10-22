import { ExpenseTracker } from '../../src/javascript/ExpenseTracker.js'
import { ExpenseForm } from './ExpenseForm.js'
import { BudgetForm } from './BudgetForm.js'
import { ExpenseChart } from './ExpenseChart.js'

document.addEventListener('DOMContentLoaded', () => {
  const expenseTracker = new ExpenseTracker()
  const expenseForm = new ExpenseForm(expenseTracker)
  const budgetForm = new BudgetForm(expenseTracker)
  // eslint-disable-next-line no-unused-vars
  const chart = new ExpenseChart(expenseTracker)

  budgetForm.registerEventHandlers()
  expenseForm.registerEventHandlers()
})
