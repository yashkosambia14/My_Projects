# CPE 551-A YASH KOSAMBIA
# CWID - 10475286
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Step 1 Load the dataset

dataset = pd.read_csv("Salary_Data-1.csv")
x = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 1].values


# Step 2 Statistics operation:
# Here y is the variable which has all the salaries
print("Statistics operation")
# average salary for the 30 employees in the company
print('\nAverage Salary for the 30 employees in the company is ', y.mean())

# Maximum salary of the 30 employees in the company
print('\nMaximum Salary for the 30 employees in the company is ', y.max())

# Minimum salary of the 30 employees in the company
print('\nMinimum Salary for the 30 employees in the company is ', y.min())


# Step 3 split dataset into training and test sets

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=1 / 3)

# computing the number of records of x_train, x_train, y_train, y_test
print('Computing number of records')
print('\n\nNumber of records of x_train is ', len(x_train))
print('\nNumber of records of y_train is ', len(y_train))
print('\nNumber of records of x_test is ', len(x_test))
print('\nNumber of records of y_test is ', len(y_test))

# step 4 FIT simple Linear Regression model to training set

regressor = LinearRegression()
regressor.fit(x_train, y_train)

# Step 5 Predict the test set

y_pred = regressor.predict(x_test)
print('\n\n Difference between y_pred and y_test\n\n', y_pred)
print('\n', y_test)
print('Difference between the test and actual : values 1-3 are very close and values 7-10 are close with an deviation of 10-12k')

# comments on difference - values 1-3 were predicted close as compared to the values 4-10 within a deviation of 10000-12000
# the values generated by the regression have float values as compared to the test values


# step 6 visualizing the training set

plt.scatter(x_train, y_train, color='red')
plt.plot(x_train, regressor.predict(x_train), color='blue')

# Naming all the elements of the graph

plt.title('Salary vs Experience (Training set)')
plt.xlabel('Years of Experience')
plt.ylabel('Salary')
plt.show()

# Step 7 Visualizing the test set

plt.scatter(x_test, y_test, color= 'red')
plt.plot(x_test, regressor.predict(x_test), color= 'yellow')
plt.title('Salary vs Experience (Test set)')
plt.xlabel('Years of Experience')
plt.ylabel('Salary')
plt.show()


# Step 8  Make new predictions
print('\n\nMaking new predictions')
salary_fifteenyears_prediction = regressor.predict([[15]])
print('\n\n Predicted salary for a person with 15 years of experience is ', salary_fifteenyears_prediction)