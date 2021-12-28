# YASH JAYESH KOSAMBIA
# CWID - 10475286
import random

"""

Function check_max checks if the value entered by user is int or string


"""


def check_max():
    try:
        maximum_random_number = int((input('\nPlease enter what is the max possible random number\n')))
        Game(maximum_random_number)
    except ValueError:
        print('You have entered a string value please use a number next time')
        check_max()


""" 

Function Game runs the guessing game 
the users get to choose a maximum value of random numbers 
using the random module we generate random_bygame as the random number
once the user tries to guess the random number it will increment the number of guesses
After the user successfully guessed the right answer user get to know how may tries they did to get the correct answers

"""


def Game(maximum_random_number):
    random_bygame = random.randint(1, maximum_random_number)
    #print(maximum_random_number, random_bygame)
    attempts_of_guess = 0
    while attempts_of_guess < maximum_random_number:
        guess = int(input("\nGuess the random number"))
        attempts_of_guess += 1
        if guess < random_bygame:
            print('Your guess is lower than random number ')
        if guess > random_bygame:
            print('Your guess is higher than random number ')
        if guess == random_bygame:
            break
    if guess == random_bygame:
        print('Correct Answer! you have taken ' + str(attempts_of_guess) + ' tries!')
    else:
        print('You did not guess the number, The number was ' + str(maximum_random_number))


# calling the function to start and check if the value is number or not
check_max()
