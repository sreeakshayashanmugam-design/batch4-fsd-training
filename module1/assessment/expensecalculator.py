# Personal Expense Calculator

income = float(input("Enter your income: "))

food = float(input("Enter food expense: "))
travel = float(input("Enter travel expense: "))
shopping = float(input("Enter shopping expense: "))
other = float(input("Enter other expense: "))

total_expense = food + travel + shopping + other
savings = income - total_expense

print("\n----- Expense Summary -----")
print("Income:", income)
print("Food:", food)
print("Travel:", travel)
print("Shopping:", shopping)
print("Other:", other)
print("Total Expense:", total_expense)
print("Savings:", savings)