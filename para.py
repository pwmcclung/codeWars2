# import urllib.request
#
# url = input('Enter Link to the download pdf: ')
# Name = input('Enter a Name for the PDF file: ')
# FileName = Name + '.pdf.'
# urllib.request.urlretrieve(url, FileName)




"""Birthday paradox. """




import datetime, random



def getBirthdays(numberOfBirthdays):
    """REturns a list of number random date objects for birthdays."""
    birthdays = []

    for i in range(numberOfBirthdays):
        ## the year is unimportant for our simulation, as long as all
        # birthdays have the same year
        startOfYear = datetime.date(2001,1,1)

        # get random day into the year
        randomNumberOfDays = datetime.timedelta(random.randint(0, 364))
        birthday = startOfYear + randomNumberOfDays
        birthdays.append(birthday)
    return birthdays

def getMatch(birthdays):
    """returns the date object of a birthday that occurs more than once in the birthdays list"""
    if len(birthdays) == len(set(birthdays)):
        return None  # all birthdays are unique, so return none

    # compare each birthday to every other birthday
    for a, birthdayA in enumerate(birthdays):
        for b, birthdayB in enumerate(birthdays[a + 1:]):
            if birthdayA == birthdayB:
                return birthdayA # rEturn the matching birthday

print('''Birthday Paradox! The Birthday Paradox show us that in a group of N people, the odds that two of them have matching birthdays is surprsingly large.
This program does a monte carlo simulation to explore this concept.''')

# Set up a tuple of month names in order:
MONTHS = ('Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec')

while True:
    print('How many birthdays shall I generate? (Max 100)')
    response = input('> ')
    if response.isdecimal() and ( 0< int(response) <= 100):
        numBDays = int(response)
        break
print()

# Generate and display the birthdays
print('Here are', numBDays, 'birthdays:')
birthdays = getBirthdays(numBDays)
for i, birthday in enumerate(birthdays):
    if i != 0:
        # display a comma for each birthday after the first birthday
        print(', ', end='')
        monthName= MONTHS[birthday.month - 1]
        dateText = '{} {}'.format(monthName, birthday.day)
        print(dateText, end='')
print()
print()

#Determine if there are two birthdays that match
match = getMatch(birthdays)

# display the results
print('In this simulation, ', end='')
if match != None:
    monthName = MONTHS[match.month - 1]
    dateText = '{} {}'.format(monthName,match.day)
    print('Multiple people have a birthday on', dateText)
else:
    print('There are no matching birthdays.')
print()

# run through 100, 000 simulations
print('Generating',  numBDays, 'random birthdays 100,000 times...')
input('Press Enter to begin...')

print('Let\'s run another 100,000 simulations.')
simMatch = 0
for i in range(100_000):
    # Report on the progress every 10,000 simulations
    if i % 10_000 == 0:
        print(i, 'simulations run...')
    birthdays = getBirthdays(numBDays)
    if getMatch(birthdays) != None:
        simMatch = simMatch + 1
print('100,000 simulations run.')

# display simulation results
probability = round(simMatch / 100_000 * 100, 2)
print('Out of 100,000 simulations of', numBDays, 'people, there was a')
print('matching birthday in that group', simMatch, 'times. This means')
print('that', numBDays, 'people have a', probability, '% chance of')
print('having a matching birthday in their group.')