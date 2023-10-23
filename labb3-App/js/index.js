import { ExpenseTracker } from '../../src/javascript/ExpenseTracker.js'
import { ExpenseForm } from './ExpenseForm.js'
import { BudgetForm } from './BudgetForm.js'
import { ExpenseChart } from './ExpenseChart.js'
import { BudgetDisplay } from './BudgetDisplay.js'

document.addEventListener('DOMContentLoaded', () => {
  const expenseTracker = new ExpenseTracker()
  const budgetDisplay = new BudgetDisplay(expenseTracker)
  const expenseForm = new ExpenseForm(expenseTracker, budgetDisplay)
  
  const budgetForm = new BudgetForm(expenseTracker, budgetDisplay)
  // eslint-disable-next-line no-unused-vars
  const chart = new ExpenseChart(expenseTracker)

  budgetForm.registerEventHandlers()
  expenseForm.registerEventHandlers()
})
