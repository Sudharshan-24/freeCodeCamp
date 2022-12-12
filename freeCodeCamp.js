function test(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    } else {
        return "No"
    }
}
console.log(test(10));


function demo(value) {
    if (value < 5) {
        return "Less than 5";
    } else if (value < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(demo(4));


function foo(fooval) {
    if (fooval < 5) {
        return "Tiny";
    } else if (fooval < 10) {
        return "Small";
    } else if (fooval < 15) {
        return "Medium";
    } else if (fooval < 20) {
        return "Large";
    } else if (fooval >= 20) {
        return "Huge";
    } else {
        return "Change me!";
    }
}
console.log(foo(10));


// Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes <= par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else if (strokes >= par + 3) {
        return "Go Home!";
    } else {
        return "End";
    }
}
console.log(golfScore(4, 6));


// Switch case statement
function foobar(fbval) {
    switch (fbval) {
        case "bob":
            return "Marley";
            break;
        case 42:
            return "The Answer";
            break;
        case 1:
            return "There is no #1";
            break;
        case 99:
            return "Missed me by this much!";
            break;
        case 7:
            return "Ate Nine";
            break;
        default:
            return "No entered param";
            break;
    }
}
console.log(foobar(99));


function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
console.log(isLess(2, 6));


function isEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(isEqual(2, '2'));


function lessThan(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThan(10, 15));


function ifLessThan(a, b) {
    return a < b;
}
console.log(ifLessThan(10, 15));


// Return Early Pattern for Functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    } else {
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
}
console.log(abTest(2, 4));
console.log(abTest(-2, 2));


// Counting Cards
let count = 0;

function cc(card) {
    // let message = " ";

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        // case 7:
        // case 8:
        // case 9:
        //     count = count;
        //     break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    let holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;

    // if (count === 5) {
    //     message = "5 Bet";
    // } else if (count === 0) {
    //     message = "0 Hold";
    // } else if (count === -5) {
    //     message = "-5 Hold";
    // } else if (count === -1) {
    //     message = "-1 Hold";
    // } else if (count === 1) {
    //     message = "1 Bet";
    // }
    // return message;
}
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));


// Accessing Object Properties with Variables
const persons = {
    personOne: "John Smith",
    personTwo: "Jane Smith"
}
const personNumber = "personTwo";
const getPersonName = persons[personNumber];  // Use bracket notation instead of dot notation. Dot notation gives the result as "undefined".
console.log(getPersonName);


// Updating Object Properties
const personDetails = {
    personName: "Doe",
    role: "Web Developer",
    country: "USA"
}
personDetails.personName = "Jane Doe";  // using dot notation
personDetails["role"] = "Frontend Web Developer"  // using bracket notation
console.log(personDetails);


// Add New Properties to a JavaScript Object
const empDetails = {
    empName: "Sarah",
    empRole: "Backend Engineer"
}
empDetails.empCountry = "UK";
console.log(empDetails);

// Delete property
delete empDetails["empRole"];
console.log(empDetails);


// Using Objects for Lookups
function phoneticLookup(val) {
    let result = "";

    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    }
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("delta"));


function checkBestStudent(subject) {
    let bestStudent = "";

    let lookup = {
        "maths": "John Doe",
        "english": "Jane Doe",
        "computer science": "Sarah",
        "chemistry": "John Smith",
        "physics": "Jane Smith"
    }
    bestStudent = lookup[subject];
    console.log(bestStudent);
}
checkBestStudent("computer science");
