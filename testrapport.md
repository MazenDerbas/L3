# Test Specification: ExpenseTracker Application

## Test Case 1: Add Expense

- **Objective**: Verify that the user can successfully add an expense.
- **Prerequisites**: Application is launched, and user is on the main expense tracker screen.
- **Test Steps**:
  1. Fill in valid details for the expense (e.g., name, amount, date, category).
  3. Click on the "Submit" button.
- **Expected Result**: The new expense should be listed in the expense list. Relevant fields in the UI should update to reflect this addition (e.g., total expense amount, list of expenses).
- **Result**: Pass

## Test Case 2: Delete Expense

- **Objective**: Verify that the user can successfully delete an expense.
- **Prerequisites**: At least one expense is listed on the screen.
- **Test Steps**:
  1. Locate the expense you want to delete.
  2. Click on the "Delete" button next to the expense.
- **Expected Result**: The expense should be removed from the list, and the total expense amount should update accordingly.
- **Result**: Pass

## Test Case 3: Add Budget

- **Objective**: Verify that the user can successfully add a budget.
- **Prerequisites**: Application is launched.
- **Test Steps**:
  1. Navigate to the budget section.
  2. Fill in valid details for the budget (e.g., category, amount).
  3. Click on the "Set Budget" button.
- **Expected Result**: The new budget should be listed in the budget section. Relevant fields in the UI should update to reflect this addition (e.g., total budget amount, list of budgets).
- **Result**: Pass

## Test Case 4: Validate Input Fields

- **Objective**: Ensure that the application validates input fields correctly.
- **Prerequisites**: Application is launched.
- **Test Steps**:
  1. Try to add an expense with invalid data (e.g., negative amount, empty name).
  2. Try to add a budget with invalid data (e.g., negative amount, empty category).
- **Expected Result**: The application should not accept the invalid data and should display an appropriate error message.
- **Result**: Pass

## Test Case 5: Generate Chart

- **Objective**: Verify that the user can successfully generate a chart based on expenses.
- **Prerequisites**: There are existing expenses entered into the application.
- **Test Steps**:
  1. Click on the "Generate Chart" button.
  2. Select a valid date range for which expenses exist.
  3. Click on the "Generate chart" button.
- **Expected Result**: A chart should be displayed showing expenses over the selected date range
- **Result**: Pass