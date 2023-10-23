# Reflections on "Clean Code" by Robert C. Martin

Dear [Your Name],

## Chapter 2: Meaningful Names

Chapter 2 taught me a lot about picking good names for things in my code. Like in my "ExpenseChart" class, I started using clearer names. Instead of just "sDate" and "eDate," I use "startDate" and "endDate" now, so people know exactly what I'm talking about. I even changed some method names to make them really different from each other. For example, I renamed the "getCategoryExpenses" method to "getExpenesAmountByCategory." I did this because there's another method called "getExpensesByCategory," and I didn't want anyone to get mixed up. Overall, this chapter made me way better at naming stuff in my code!

![Meaningful Names Example](/img/1.png)
![Meaningful Names Example](/img/2.png)


## Chapter 3: Functions

Chapter 3 made me realize how important it is to keep my code clean and organized. One exemple was how I improved my "Chart.js" file. Before, my code was kind of messy and hard to read because everything was crammed into the drawBarChart method. I tried to keep the new verison of the code as small as possible and each method just do one thing. In my application I tried to code all methods to do just one thing to make them easier to read, debug, and maintain.
This chapter showed me that cleaning up my code makes it easier for others to read and for me to manage. It's all about making everything simpler and more logical!

![Functions Example](/img/3.png)
![Functions Example](/img/4.png)


## Chapter 4: Comments

The book made a good point: often, we write comments because our code is confusing. This made me really think about how I name my classes and methods. Before, I used to add comments everywhere, even when they weren't needed, just because it was a requirement. 
For instance, in my ExpenseForm.js file, I had methods like createExpense and createCategory. The names were already clear, so the comments were just there for no real reason. I realized I didn't need to say "create a new expense" or "create a new category" because the method names said it all. So, I got rid of those unnecessary comments.

This chapter taught me an important lesson: good code should be able to stand on its own. If I'm thinking about adding a comment, I first try to make the code clearer itself. That way, it's easy for everyone to understand, without extra explanations.

![Comments Example](/img/5.png)


## Chapter 5: Formatting

I worked on structuring my code according to the guidelines in Chapter 5. I tried to apply the 'Newspaper Metaphor' by arranging the methods in my class so the higher-level functions are at the top. I also made sure there's space between different methods, so it's easier to tell when one ends and another starts, I tried to follow the vertical ordering so a function that is called exist below a function so that does the calling, but I'm wondering if some parts look cramped? Maybe I got too focused on keeping them 'vertically dense. For the lines themselves, I tried to keep everything balanced — not too long but not too short either and follow the horizintal formatting rule.

![Formatting Example](/img/6.png)


## Chapter 6: Objects and Data Structures

After reading Chapter 6 in "Clean Code," I learned a lot about keeping things hidden in my code. So, in my project, I worked with classes like "BudgetForm" and "ExpenseDisplay." I made sure things inside them, like "#expenseTracker" and "#budgetForm," were private. This way, they're kind of locked away and safe, just like the chapter said they should be. This encapsulation aligns with the idea presented in the chapter that objects hide their data and expose functions that opeate on that data.

I tried to hold the encapsulation even im the module and follow the law of demeter. I kept all the important info private and made special "getter" and "setter" functions to use the info when I need to. This way, everything stays organized and protected, and I can control how everything is used or changed.

This chapter really helped me make my code neat and safe!

![Objects and Data Structures Example](/img/7.png)
![Objects and Data Structures Example](/img/8.png)


## Chapter 7: Error Handling

In my code, I chose to use exceptions, not error codes, because it makes my code cleaner and easier to follow. 
I used try-catch early in my methods to catch mistakes before they become big problems.

I made sure my error messages were clear so people can understand what went wrong and where. This helps anyone who reads my code or tries to fix issues with it. 

I made the mistake of return null before in module but I change this. In my application didn't use "null" returns. Instead, my methods show if they did the work right or had a problem through exceptions.

Using error handling is an area I'm looking to strengthen. I recognize there's room for growth and continuous improvement in this aspect.

![Error Handling](/img/9.png)

## Chapter 8: Boundaries

When I built the app, I didn't use any external libraries; I just used my own creation, the ExpenseTracker module. I knew that using the module everywhere would make the app harder to look after. So, I made sure only a few parts of the code rely on it. I only import the module in index.js, and in other classes, I just pass the ExpenseTracker as a private parameter. This approach will make it easier for me to keep the app up to date later on.
![Boundaries](/img/11.png)

## Chapter 9: Unit Tests

In the module ExpenseTracker I used automatic tests for every function. I did not follow the the three lws of TDD where I made my test after coding the functions. On the other hand I kept my tests clean and tidy and easy to understand. Almost all my tests check one thing at a time and each test is about one idea.. This helps me know exactly what's broken when I see a problem following the one assert per test rule and sngle Concept per Test.

The unit testing held me make sure my code is doing what it should also they help me changing some parts of my code which hade bug or minor mistake.

In the application I implemented manual testing The manual tests were straightforward and uncomplicated. I tried to follow the book rules even here by making the tests easy to read and use.
![Unit Tests](/img/10.png)


## Chapter 10: Classes
As I mentioned before I use the encapsulation in all of my classes both for the fields and method that is not nessesery to be public. I tried also to keep my class small and about 100 lines. The largest class I have is ExpenseTracker which is the main class in the module and I tried hard to keep it below 300 lines. 
My code the application obey the rule single responsibility so each class do just one thing. I did not use this concept in the module. Appling this on my module will make it much hard to understand. Inside each class, I've kept things close-knit. That means everything inside a class is related to its main job. For example, the budget class only deals with budget stuff, which makes it easier to understand and use.

![Classes](/img/12.png)
![Classes](/img/13.png)

## Chapter 11: Systems

I made sure that different parts of my program are created separately to apply. Each class, such as ExpenseForm, ExpenseDisplay, and ExpenseChart, has a specific job, making it easier to understand the main logic. I tried also to separated the construction of the classes form its use, till exemple I create instances of the classes ExpenseTracker and ExpenseForm in DOMContentLoaded event listener. I also tried to apply the dependency Injection by pasing expenseTracker as a constructor arguemnt. ä
![Systems](/img/14.png)
![Systems](/img/15.png)