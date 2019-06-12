/**
 * Simulates the throw of a dice with the number of sides passed per parameter.
 * @param {number} sides Number of sides of the dice.
 */
function diceThrow(sides){

    /*I declare a variable result equal to a random
    number multiplied by the sides of the dice.
    After, I turn it into a whole number*/
    let result = Math.round(Math.random() * sides);

    //Return the result of the roll.
    return result;
}

/**
 * Create the attributes of a role character.
 * @param {string} race String of the race of the character, can be (Human, Elven, Dwarf or Mage).
 */
function createRPGCharacter(race){
    //I declare an array to save the values of the attributes of the character.
    let attributesOfTheCharacter = [];
    //I declare the variable for the value of Strength.
    let STR = 0;
    //I declare the variable for the value of Speed.
    let SPD = 0;
    //I declare the variable for the value of Vitality.
    let VIT = 0;
    //I declare the variable for the value of Dexterity.
    let DEX = 0;
    //I declare the variable for the value of Magic.
    let MAG = 0;

    /*
    I create a switch that will read the race passed by parameter, and will execute 
    the case equal to the race.
    */
    switch (race){

        /* 
        If race is equal to Human, the values of the attributes will be equal to
        the values that correspond to Human.
        */
        case "Human":
            STR = 8 + ( (diceThrow(6)) + (diceThrow(6)) );
            SPD = 4 + (diceThrow(6));
            VIT = 0;
            DEX = 0;
            MAG = diceThrow(10); 
            break;

        /* 
        If race is equal to Elven, the values of the attributes will be equal to
        the values that correspond to Elven.
        */
        case "Elven":
            STR = 6 + ( (diceThrow(4)) + (diceThrow(4)) );
            SPD = 0;
            VIT = diceThrow(12);
            DEX = 3 + ( (diceThrow(10)) + (diceThrow(10)) );
            MAG = diceThrow(8); 
            break;

        /* 
        If race is equal to Dwarf, the values of the attributes will be equal to
        the values that correspond to Dwarf.
        */
        case "Dwarf":
            STR = 10 + (diceThrow(10));
            SPD = (diceThrow(8)) + (diceThrow(8));
            VIT = 10 + diceThrow(8);
            DEX = 0;
            MAG = diceThrow(8); 
            break;

        /* 
        If race is equal to Mage, the values of the attributes will be equal to
        the values that correspond to Mage.
        */
        case "Mage":
            STR = diceThrow(6);
            SPD = (diceThrow(8)) + (diceThrow(8));
            VIT = 10 + diceThrow(8);
            DEX = 0;
            MAG = diceThrow(8); 
            break;
    }
    //Return the array with the values of the race passed by parameter.
    return attributesOfTheCharacter = [STR, SPD, VIT, DEX, MAG];
}

/**
 * Calculate the character's life points.
 * @param {string} race String of the race of the character, can be (Human, Elven, Dwarf or Mage).
 * @param {array} raceArray Array with the attributes of the character of our rol game equal to the race before.
 */
function getHealthPoints(race, raceArray){
    //I declare a variable to save the value of the life points.
    let healthPoints = 0;

    /*
    I create a switch that will read the race passed by parameter, and will execute 
    the case equal to the race.
    */
    switch (race){
        case "Human":
            /* 
            If race is equal to Human, will be evaluated this pattern:
            STR + VIT + 10.
            */
            healthPoints = raceArray[0] + raceArray[2] + 10;
            break;

        case "Elven":
            /* 
            If race is equal to Elven, will be evaluated this pattern:
            STR + DEX + 5.
            */
            healthPoints = raceArray[0] + raceArray[3] + 5;
            break;

        case "Dwarf":
            /* 
            If race is equal to Dwarf, will be evaluated this pattern:
            STR + VIT + 15.
            */
            healthPoints = raceArray[0] + raceArray[2] + 15;
            break;

        case "Mage":
            /* 
            If race is equal to Mage, will be evaluated this pattern:
            MAG + VIT + 3.
            */
            healthPoints = raceArray[4] + raceArray[2] + 3;
            break;
    }
    //Return the healthPoints of the race.
    return healthPoints;
}

/**
 * Calculate the damage of the character.
 * @param {string} race String of the race of the character, can be (Human, Elven, Dwarf or Mage).
 * @param {array} raceArray Array with the attributes of the character of our rol game equal to the race before.
 */
function getDamage(race, raceArray){
    //I declare a variable to save the value of the damage.
    let damage = 0;

    /*
    I create a switch that will read the race passed by parameter, and will execute 
    the case equal to the race.
    */
    switch(race){

        case "Human":
            /* 
            If race is equal to Human, will be evaluated this pattern:
            1.5 * STR + 0.4 * DEX
            */
            damage = Math.ceil(1.5 * raceArray[0] + 0.4 * raceArray[3]);
            break;

        case "Elven":
            /* 
            If race is equal to Elven, will be evaluated this pattern:
            STR + 1.2 * DEX + 0.1 * MAG
            */
            damage = Math.ceil(raceArray[0] + 1.2 * raceArray[3] + 0.1 * raceArray[4]);
            break;

        case "Dwarf":
            /* 
            If race is equal to Dwarf, will be evaluated this pattern:
            2 * STR
            */
            damage = Math.ceil(2 * raceArray[0]);
            break;

        case "Mage":
            /* 
            If race is equal to Mage, will be evaluated this pattern:
            2 * MAG + 0.1 * DEX
            */
            damage = Math.ceil(2 * raceArray[4] + 0.1 * raceArray[3]);
            break;
    }
    //Return the damage of the race.
    return damage;
}

/**
 * Calculate the damage of the character.
 * @param {*} race String of the race of the character, can be (Human, Elven, Dwarf or Mage).
 * @param {*} raceArray Array with the attributes of the character of our rol game equal to the race before.
 */
function getDefense(race, raceArray){

    //I declare a variable to save the value of the defense.
    let defense = 0;

    /*
    I create a switch that will read the race passed by parameter, and will execute 
    the case equal to the race.
    */
    switch(race){
        case "Human":
            /* 
            If race is equal to Human, will be evaluated this pattern:
            VIT + 0.2 * SPD
            */
            defense = Math.ceil(raceArray[2] + 0.2 * raceArray[1]);
            break;

        case "Elven":
            /* 
            If race is equal to Elven, will be evaluated this pattern:
            1.3 * SPD + 0.5 * VIT
            */
            defense = Math.ceil(1.3 * raceArray[1] + 0.5 * raceArray[2]);
            break;

        case "Dwarf":
            /* 
            If race is equal to Dwarf, will be evaluated this pattern:
            1.1 * VIT + 1.1 * STR
            */
            defense = Math.ceil(1.1 * raceArray[2] + 1.1 * raceArray[0]);
            break;

        case "Mage":
            /* 
            If race is equal to Mage, will be evaluated this pattern:
            0.8 * MAG + 0.3 * SPD
            */
            defense = Math.ceil(0.8 * raceArray[4] + 0.3 * raceArray[1]);
            break;
    }
    //Return the defense of the race.
    return defense;
}

/**
 * Simulates the combat of two characters passed by parameter.
 * @param {string} firstRace String of the race of the character, can be (Human, Elven, Dwarf or Mage).
 * @param {array} firstCharacterStats Array with the attributes of the character of our rol game equal to the first race.
 * @param {string} secondRace String of the race of the character, can be (Human, Elven, Dwarf or Mage).
 * @param {array} secondCharacterStats Array with the attributes of the character of our rol game equal to the second race.
 */
function simulateBattle(firstRace, firstCharacterStats, secondRace, secondCharacterStats){

    //I declare the variable that will save the value of the healthPoints of the first race, usign the function getHealthPoints.
    let firstHealthPoints = getHealthPoints(firstRace, firstCharacterStats);
    //I declare the variable that will save the value of the healthPoints of the second race, usign the function getHealthPoints.
    let secondHealthPoints = getHealthPoints(secondRace, secondCharacterStats);

    /*
    The character who is faster than the other character will start first.
    I declare the variable that will save the race of the character who is faster than the other.
    */
    let firstStartsCharacter;
    

    /*
    If the speed of the first character is bigger than the second character, then the first race will start first, 
    else will start the second race first.
    */
    if (firstCharacterStats[1] > firstCharacterStats[1]){

        firstStartsCharacter = firstRace;

    }else{

        firstStartsCharacter = secondRace;

    }

    /*
    I declare the array result that will save two values. First a string with the winner (first or second), 
    and second, a number with the total of rounds needed to finish the combat.
    */
    let result = [];

    //I declare the variable that will save the number of rounds.
    let numberOfRounds = 1;

    //The combat will continue until one of the characters loses all the health points.
    while (firstHealthPoints > 0 && secondHealthPoints > 0){

        /*
        If the first character starts is equal to the first race then the first
        race will attack the second character first.
        */
        if (firstStartsCharacter == firstRace){

            /*
            The health points of the second character will be equal to the health points less 
            the result of the damage that can made the first race less the strength of the 
            second race.
            */
            secondHealthPoints = secondHealthPoints - (getDamage(firstRace, firstCharacterStats) - secondCharacterStats[0]);

            //If the second race still have health points then will attack to the first race.
            if(sedondHealthPoints > 0){ 

                /*
                The health points of the first character will be equal to the health points less 
                the result of the damage that can made the second race less the strength of the 
                second race.
                */
                firstHealthPoints = firstHealthPoints - (getDamage(secondRace, secondCharacterStats) -
                firstCharacterStats[0]);

            }else{
                //The combat ends.
                break;
            }

        }else {
            /*
            The health points of the first character will be equal to the health points less 
            the result of the damage that can made the second race less the strength of the 
            second race.
            */
            firstHealthPoints = firstHealthPoints - (getDamage(secondRace, secondCharacterStats) - firstCharacterStats[0]);

            //If the first race still have health points then will attack to the second race.
            if(firstHealthPoints > 0){
                /*
                The health points of the second character will be equal to the health points less 
                the result of the damage that can made the first race less the strength of the 
                second race.
                */
                secondHealthPoints = secondHealthPoints - (getDamage(firstRace, firstCharacterStats) - secondCharacterStats[0]);

            }else{
                //The combat ends.
                break;
            }

        }
        numberOfRounds++;
    }

    //I declare a variable winner to save the race that wins the game.
    let winner = "";
    
    /*
    If the health points of the first character are greather than the health points of the second character, 
    the winner will be the first character, if it’s not then the winner will be the second character.
    */
    if (firstHealthPoints > secondHealthPoints){

        winner = "first";

    }else{

        winner = "second";

    }

    //the function will return the array result.
    return result = [winner, numberOfRounds];
}
