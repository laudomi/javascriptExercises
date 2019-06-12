# JavaScript Exercises
###### may/2019

#### **Phone rate price calculator**

Program the calculator of the fee to be paid by the users of a mobile telephone company. All users must pay a base rate of 10 euros per month as long as they do not speak more than 180 minutes per month. After 180 minutes, users must pay 10 cents for each minute spoken from 180 to 240 minutes.
After 240 minutes, users pay 20 cents per minute for each extra minute consumed after 240 minutes.
The calculator should ask the user for the minutes spoken and return the euros to be paid. <br>Execution example: <br>How many minutes have you talked? ```60 ```<br>Must pay 10.00 euros


#### **Shopping List**

Create a program that allows you to generate your shopping list. The program request the user an item. The program will ignore the items that have already been added and will not add them again. When the user finish introducing items, the program will show the list of items introduce.

#### **Simulate Battle**

**diceThrow Function:** Create a function called diceThrow that take a number of sides by parameter, and simulates a dice throw with the number of sides. Return the result of the throw.

**createRPGCharacter Function:** Create a function called createRPGCharacter that will create the attributes of a role character: strength, speed, vitality, dexterity and magic. The function will take a string by parameter called race and that will specify the race of the character. The function will return an array the values of strength (STR), speed (SPD), vitality  (VIT), dexterity (DEX), and magic (MAG) creates for the that character (in that order). By default, all the attributes of the character will be determined with the roll of a dice of 20 sides. Depending on the race, the creation will change as follows:<br>
- Human: STR: 8 + 2 dices of 6 sides, SPD: 4 + 1 dice of 6 sides, MAG: 1 dice of 10 sides.<br>
- Elven: STR: 6 + 2 dados de 4, VIT: 1 dice of 12 sides, DEX 3 + 2 dices of 10 sides.<br>
- Dwarf: STR: 10 + 1 dice of 10 sides, SPD: 2 dices of 8 sides, VIT: 10 + 1 dice of 8 sides, MAG: 1 dice of 8 sides.<br>
- Mage: STR: 1 dice of 6 sides, VIT: 1 dice of 10 sides, MAG: 12 + 1 dice of 8 sides.<br>

**getHealthPoints Function:** Create a function called getHealthPoints that will take by parameter a string called race, that represents the race of the character, and an array with the values of the character represented in the game. Then will return the life points of the character:<br>
- Human: STR + VIT + 10<br>
- Elven: STR + DEX + 5<br>
- Dwarf: STR + VIT + 15<br>
- Mage: MAG + VIT + 3<br>

**getDamage Function:** Create a function called getDamage that will take as parameter a string called race which will represent the character's race, and an array representing a character in our role play and will return the base damage of said character rounded to the whole immediately above:<br>
- Human: 1.5 * STR + 0.4 * DEX<br>
- Elven: STR + 1.2 * DEX + 0.1 * MAG<br>
- Dwarf: 2 * STR<br>
- Mage: 2*MAG + 0.1 * DEX<br>

**getDefense Function:** Create a function called getDefense that will take as parameter a string called race that will represent the race of the character, and an array representing a character in our game of role and will return the base defense of said character rounded to the immediately superior whole:<br>

- Human: VIT + 0.2 * SPD<br>
- Elven: 1.3 * SPD + 0.5 * VIT<br>
- Dwarf: 1.1 * VIT + 1.1 * STR<br>
- Mage: 0.8 * MAG + 0.3 * SPD<br>

**simulateBattle Function:**Create a function called simulateBattle that will simulate the combat of two characters of the previous functions. The first parameter will be a firstRace text string representing the race of the first character. The second parameter will be an array representing the attributes of the first character (firstCharacterStats). After that we will have as parameter the race of the second character secondRace and the array representing the attributes of the second character (secondCharacterStats). The Battles are developed in the following way:<br>

- The character's life points are determined by the formula.<br>
- Each turn, start attacking that character with greater speed.<br>
- The damage produced by one character to another will be equal to it's base damage minus the base defense of the other character. This subtracts the life points of the character that receives damage. After that, and as long as there are remaining life points to the character thatreceived damage, it will attack following the same logic as the previous attack.<br>
- The match ends when one of the two characters is left with no points of life.<br>
- The function will return an array with two elements: the number of turns it has taken
end the fight, and a string that will be _'first'_ in case the first character wins,
and _'second'_ in case the second one expires.<br>
- Lean on the functions previously programmed to make this development much easier.<br>