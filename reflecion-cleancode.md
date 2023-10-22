# Reflections on "Clean Code" by Robert C. Martin

Dear [Your Name],

## Chapter 2: Meaningful Names

Chapter 2 taught me a lot about picking good names for things in my code. Like in my "ExpenseChart" class, I started using clearer names. Instead of just "sDate" and "eDate," I use "startDate" and "endDate" now, so people know exactly what I'm talking about. I even changed some method names to make them really different from each other. For example, I renamed the "getCategoryExpenses" method to "getExpenesAmountByCategory." I did this because there's another method called "getExpensesByCategory," and I didn't want anyone to get mixed up. Overall, this chapter made me way better at naming stuff in my code!


## Chapter 3: Functions

Chapter 3 made me realize how important it is to keep my code clean and organized. One exemple was how I improved my "Chart.js" file. Before, my code was kind of messy and hard to read because everything was crammed into the drawBarChart method. I tried to keep the new verison of the code as small as possible and each method just do one thing. In my application I tried to code all methods to do just one thing to make them easier to read, debug, and maintain.
This chapter showed me that cleaning up my code makes it easier for others to read and for me to manage. It's all about making everything simpler and more logical!

![Functions Example]()


## Chapter 4: Comments

The book made a good point: often, we write comments because our code is confusing. This made me really think about how I name my classes and methods. Before, I used to add comments everywhere, even when they weren't needed, just because it was a requirement. 
For instance, in my ExpenseForm.js file, I had methods like createExpense and createCategory. The names were already clear, so the comments were just there for no real reason. I realized I didn't need to say "create a new expense" or "create a new category" because the method names said it all. So, I got rid of those unnecessary comments.

This chapter taught me an important lesson: good code should be able to stand on its own. If I'm thinking about adding a comment, I first try to make the code clearer itself. That way, it's easy for everyone to understand, without extra explanations.

![Comments Example]()


## Chapter 5: Formatting

I worked on structuring my code according to the guidelines in Chapter 5.I tried to apply the 'Newspaper Metaphor' by arranging the methods in my class so the higher-level functions are at the top. I also made sure there's space between different methods, so it's easier to tell when one ends and another starts, I kept the lines in my methods close to show they're related, but I'm wondering if some parts look cramped? Maybe I got too focused on keeping them 'vertically dense. For the lines themselves, I tried to keep everything balanced — not too long but not too short either.

![Formatting Example]()


## Chapter 6: Objects and Data Structures

After reading Chapter 6 in "Clean Code," I learned a lot about keeping things hidden in my code. So, in my project, I worked with classes like "BudgetForm" and "ExpenseDisplay." I made sure things inside them, like "#expenseTracker" and "#budgetForm," were private. This way, they're kind of locked away and safe, just like the chapter said they should be. This encapsulation aligns with the idea presented in the chapter that objects hide their data and expose functions that opeate on that data.

I tried to hold the encapsulation even im the module and follow the law of demeter. I kept all the important info private and made special "getter" and "setter" functions to use the info when I need to. This way, everything stays organized and protected, and I can control how everything is used or changed.

This chapter really helped me make my code neat and safe!

![Objects and Data Structures Example]()


## Chapter 7: Error Handling



## Chapter 8: Boundaries



## Chapter 9: Unit Tests



## Chapter 10: Classes



## Chapter 11: Systems
