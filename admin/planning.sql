--************IN ALL CASES CHANGE THIS MONTH TO MEAN NEAREST FULL MONTH**********--

---------------------------OVERVIEW PAGE-----------------------------------------------------------------------------------------
-- Sum of assets:
SELECT SUM(balance)
FROM UserAccountDetails
JOIN AccountTypes
ON AccountType_id = id
WHERE AccountName = "cash" OR "Investments" OR "Property"
-- Sum of Liabilities:
SELECT SUM(balance)
FROM UserAccountDetails
JOIN AccountTypes
ON AccountType_id = id
WHERE AccountName = "Credit Cards" OR "Loans"

-- Income
-- **********Should we have some code that regularly deposits income into checking account
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'deposit'
AND AccountName = 'checking'
GROUP BY Date (should be month only)
-- Expenses
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
GROUP BY Date (should be month only)

--******** PUT INCOME AND EXPENSES BAR CHART ON INSIGHTS PAGE AND REPLACE IT WITH A NET WORTH TIMELINE BECAUSE THE THEME OF THE OVERVIEW PAGE IS ASSETS AND LIABILITIES
-- -- Net worth timeline
SELECT SUM(balance)
FROM UserAccountDetails
JOIN AccountTypes
ON AccountType_id = id
WHERE AccountName = "cash" OR "Investments" OR "Property"
GROUP BY Date

SELECT SUM(balance)
FROM UserAccountDetails
JOIN AccountTypes
ON AccountType_id = id
WHERE AccountName = "Credit Cards" OR "Loans"
GROUP BY Date

---------------------------TRANSACTIONS PAGE-------------------------------------------------------------------------------------
-- Pie chart categories - Total spent in a given time frame
SELECT SUM(Amount)
FROM Transactions
WHERE Date ???? 'May', 'June'

-- Pie chart categories - Amount spent on each category in a given time frame
SELECT SUM(Amount)
FROM Transactions
JOIN Category 
ON Category_id = id
WHERE Date = ???? 'May', 'June'
GROUP BY CategoryName

-- Transactions Table
SELECT Date, Description, CategoryName, Amount
FROM Transactions
JOIN Category
ON Category_id = id
ORDER BY Date



---------------------------INSIGHTS PAGE-------------------------------------------------------------------------------------

-- This month, your savings increased or decreased by $_____
-- -- savings = income - expenses
-- -- -- Income this month:
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'deposit'
AND AccountName = 'checking'
AND Date = ????Current month
-- -- -- Income last month:
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'deposit'
AND AccountName = 'checking'
AND Date = ????last month

-- -- -- Expenses this month:
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
AND Date = ????this month
-- -- -- Expenses last month:
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
AND Date = ????this month

-- This month, your expenditures increased or decreased by $____
-- -- (All withdrawals this month) - (all withdrawals last month)
-- -- -- All withdrawals this month
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
AND Date = ????this month
-- -- -- All withdrawals last month
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
AND Date = ????last month

-- A bar chart showing the average Canadian's expenditures per category vs what the user spent in each category.
-- -- Will hard code govn't data and sql out user's data:
SELECT SUM(Amount)
FROM Transactions
JOIN Category
ON Transactions.Category_id = Category.id
WHERE Date = ???? (try using datepart ex. DATEPART(month, '2017/08/25') AS DatePartInt;)


-- Personal Inflation rate = (Sum of current yearly expenses / sum of expenses the previous year) - 1. Generally, it is bad if your expenses are increasing year after year at a higher rate than the inflation in your country. Can do this for each expense category ie. personal food inflation rate.
-- -- Note: Canada's current inflation rate is 3.4%
-- -- -- Sum of previous year's expenses
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
AND Date = ????last year
-- -- -- Sum of 2 year's ago expenses
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
AND Date = ????year before last

-- Savings rate = (Income - Expenses) / income. It is recommended that your retirement savings rate is at least 10%.
-- -- Income this month
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'deposit'
AND AccountName = 'checking'
AND Date = ????Current month
-- -- Expenses this month
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
AND Date = ????this month

-- Liquidity ratio = Monetary assets / monthly expenses. Monetary assets include cash, cash-equivalent securities, money markets, savings bonds, savings, checking accounts. Not private equity. Not house and car.
-- -- Monetary Assets:
SELECT SUM(balance)
FROM UserAccountDetails
JOIN AccountTypes
ON AccountType_id = id
WHERE AccountName = "cash" OR "Investments" 
-- -- Monthly Expenses
SELECT AVERAGE(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'

-- Emergency funds ratio = 6 * monthly expenses. We should use total average monthly expenses for accuracy
-- -- multiply the result from the following table by 6.
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
AND Date = ????this month

---------------------------ACHIEVEMENTS PAGE-------------------------------------------------------------------------------------
-- Spent less than or equal to average Canadian in 1, 2, 3, ......all categories this month
SELECT SUM(Amount)
FROM Transactions
JOIN Category
ON Transactions.Category_id = Category.id
WHERE Transaction_type = withdrawal
AND date = current month
GROUP BY Category.CategoryName

-- Spent less than or equal to the average Canadian in specific category for ___ months in a rowSELECT SUM(Amount)
FROM Transactions
JOIN Category
ON Transactions.Category_id = Category.id
WHERE Transaction_type = withdrawal
GROUP BY Category.CategoryName
ORDER BY Date

-- Spent less on ___ compared to last month
SELECT SUM(Amount)
FROM Transactions
JOIN Category
ON Transactions.Category_id = Category.id
WHERE Transaction_type = withdrawal
AND date = current month
GROUP BY Category.CategoryName

SELECT SUM(Amount)
FROM Transactions
JOIN Category
ON Transactions.Category_id = Category.id
WHERE Transaction_type = withdrawal
AND date = previous month
GROUP BY Category.CategoryName

-- ___ month streak of staying within your own average monthly spending
SELECT AVERAGE(Amount)
FROM Transactions
JOIN Category
ON Transactions.Category_id = Category.id
WHERE Transaction_type = withdrawal
ORDER BY Date

-- Savings of 10% or more for ___ months in a row
-- -- Get the user's current savings rate and include it if it is 10% or more
-- -- --Income this month
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'deposit'
AND AccountName = 'checking'
AND Date = ????Current month
-- -- --Expenses this month
SELECT SUM(Amount), Date
FROM Transactions
JOIN UserAccountDetails
ON Transactions.id = UserAccountDetails.AccountType_id
JOIN AccountTypes
ON UserAccountDetails.id = AccountType_id
WHERE Transaction_type = 'withdrawal'
AND Date = ????this month


--------------------------- REQUIRES ADDITIONAL INPUT/TABLES --------------------------------------------------------------------
-- Saving Challenge - Saving streaks
-- Spent within budget for ___ months in a row ****NEEDS NEW TABLE**
-- You are now only ___ months away from repaying your student loans