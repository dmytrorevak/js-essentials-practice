/**
 The function returns the last element of accepted array.
 */


function getLastElement(array) {
    return array[array.length - 1];
}

// var goods = ['meat', 'milk', 'apple', 'tomato'];
// console.log(getLastElement(goods));
// goods.push('potato');
// console.log(getLastElement(goods));


/**
 The function simulates the arrays push function.
 */


function arrayPush(array, element) {
    array[array.length] = element;
    return array;
}

// var users = ['tom', 'mike'];
// console.log(users);
// arrayPush(users, 'gary');
// console.log(users);


/**
 The function updates the penultimate element to accepted one.
*/


function editPenultimateElement(array, element) {
    array[array.length - 2] = element;
    return array;
}


/**
 The function simulates the arrays shift function.
 */


function arrayShift(array) {
    var firstElement = array[0];

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    array.length = --array.length;

    return firstElement;
}


/**
 The function simulates the arrays indexOf function.
 */


function arrayUnshift(array, element) {
    for (var i = array.length; i >= 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = element;

    return array;
}

// var styles = ['jazz', 'blues', 'rock'];
// console.log(styles);
// editPenultimateElement(styles, 'classic');
// console.log(styles);
// arrayShift(styles);
// console.log(styles);
// arrayUnshift(styles, 'funk');
// console.log(styles);
// arrayUnshift(styles, 'punk');
// console.log(styles);


/**
 The function returns a random array element.
 */


function randomArrayElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// var countries = ['ukraine', 'russia', 'usa', 'canada', 'germany'];
// console.log(randomArrayElement(countries));


/**
 The function asks the user to enter the numbers and then returns total sum of entered numbers.
 */


function arrayCalculator() {

    var enteredArray = getNumbersArray();
    return calculateArray(enteredArray);

    function calculateArray(array) {
        var sum = 0;

        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

    function getNumbersArray() {
        var askNumber = true,
            numbersArray = [];

        while (askNumber) {
            var number = prompt('Please, enter the number: ');

            if (isNumeric(number)) {
                numbersArray.push(+number);
            } else {
                askNumber = false;
            }
        }

        return numbersArray;
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}

// console.log(arrayCalculator());


/**
 The function simulates arrays' indexOf function.
 */


function findIndex(array, value) {
    var valueIndex = -1;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            valueIndex = i;
        }
    }

    return valueIndex;
}

// var testArray = ['test', 2, 1.5, false];
// console.log(findIndex(testArray, 'test'));
// console.log(findIndex(testArray, 2));
// console.log(findIndex(testArray, 1.5));
// console.log(findIndex(testArray, 0));


/**
 The function returns the numbers array where all numbers are in certain range.
 */


function filterRange(array, a, b) {
    var filteredArray = [];

    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        if (element >= a && element <= b) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

// var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filterRange(numbersArray, 2, 8));
// console.log(filterRange(numbersArray, 5, 6));
// console.log(filterRange(numbersArray, 5, 5));


/**
 The function returns the sum of all prime numbers in certain
 range using the sieve of Eratosthenes algorithm.
 */


function getSumOfPrimeNumbers(amountOfNumbers) {
    var numbersSequence = getCertainNumbersSequence(amountOfNumbers),
        primeNumbersSequence = getPrimeNumbersSequence(numbersSequence),
        primeNumbersSum = getSequenceSum(primeNumbersSequence, 2);

    return primeNumbersSum;

    function getSequenceSum(numbersSequence, startNumber) {
        var sum = 0;

        for (var i = startNumber; i < numbersSequence.length; i++) {
            if (numbersSequence[i]) sum += i;
        }

        return sum;
    }

    function getPrimeNumbersSequence(numbersSequence) {
        for (var i = 2; i < numbersSequence.length; i++) {
            if (i * i > numbersSequence.length) {
                break;
            } else if (numbersSequence[i]) {
                removeMultipleOfCertainNumber(i, numbersSequence);
            }
        }

        return numbersSequence;
    }

    function removeMultipleOfCertainNumber(number, numbersSequence) {
        for (var i = number * number; i < numbersSequence.length; i += number) {
            numbersSequence[i] = false;
        }
    }

    function getCertainNumbersSequence(amountOfNumbers) {
        var numbersSequence = [];

        for (var i = 2; i < amountOfNumbers + 1; i++) {
            numbersSequence[i] = true;
        }

        return numbersSequence;
    }
}

// console.log(getSumOfPrimeNumbers(100));


/**
 The function returns the max sum of numbers from the certain sub array.
 */


function getMaxSubSum(numbersArray) {
    var currentSum = 0,
        maxSum = 0;

    for (var i = 0; i < numbersArray.length; i++) {
        var number = numbersArray[i];
        currentSum = (currentSum + number < 0) ? 0 : currentSum + number;
        maxSum = (currentSum > maxSum) ? currentSum : maxSum;
    }

    return maxSum;
}

// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(getMaxSubSum([-2, -1, 1, 2]));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// console.log(getMaxSubSum([1, 2, 3]));
// console.log(getMaxSubSum([-1, -2, -3]));


/**
 The function adds unique class names to the classesNames property of accepted array.
 */


function addClass(object, className) {
    var classesNames = (object.classesNames) ? object.classesNames.split(' ') : [];
    
    if (classesNames.indexOf(className) == -1) {
        classesNames.push(className);
    }

    object.classesNames = classesNames.join(' ');
}

var classesObject = {
    classesNames: 'new'
};

// addClass(classesObject, 'new');
// console.log(classesObject.classesNames);
// addClass(classesObject, 'open');
// console.log(classesObject.classesNames);
// addClass(classesObject, 'me');
// console.log(classesObject.classesNames);
// addClass(classesObject, 'me');
// console.log(classesObject);


/**
 The function converts hyphen-string to camelCase string.
 */


function cameCaseConvert(hyphenString) {
    var stringWords = hyphenString.split('-');

    for (var i = 1; i < stringWords.length; i++) {
        var word = stringWords[i],
            wordBody = word.slice(1),
            firstChar = word.charAt(0).toUpperCase(),
            modifiedWord = firstChar + wordBody;
        
        stringWords[i] = modifiedWord;
    }

    return stringWords.join('');
}

// console.log(cameCaseConvert('background-color'));
// console.log(cameCaseConvert('list-style-image'));
// console.log(cameCaseConvert('-webkit-transition'));


/**
 The function removes accepted class name in the certain object's field of classes names.
 */


function removeClass(object, className) {
    var classesNames = (object.classesNames) ? object.classesNames.split(' ') : [];
    for (var i = 0; i < classesNames.length; i++) {
        var currentClassName = classesNames[i];

        if (currentClassName === className) {
            classesNames.splice(i, 1);
            i--;
        }
    }

    object.classesNames = classesNames.join(' ');
}

var classesObject = {
    classesNames: 'open class menu some menu menu'
};

// removeClass(classesObject, 'open');
// removeClass(classesObject, 'blabla');
// removeClass(classesObject, 'menu');
// console.log(classesObject);
// removeClass(classesObject, 'menu');
// console.log(classesObject);


/**
 The function removes all numbers that aren't in the accepted range.
 */


function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        var number = arr[i];

        if (number < a || number > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

// var numbersArray = [5, 3, 8, 1, 2, 7, 5, 9, 0];
// filterRangeInPlace(numbersArray, 1, 4);
// console.log(numbersArray);


/**
 The function implements reverse sorting of numbers array.
 */


function reverseSort(firstElement, secondElement) {
    return secondElement - firstElement;
}

// numbersArray = [5, 2, 1, -10, 8];
// numbersArray.sort(reverseSort);
// console.log(numbersArray);


/**
 The function makes a copy of the accepted array and then returns that sorted copy.
 */


function makeSortedCopy(stringsArray) {
    var arrayCopy = stringsArray.slice();
    return arrayCopy.sort();
}

// var stringsArray = ["HTML", "JavaScript", "CSS"];
// console.log(makeSortedCopy(stringsArray));
// console.log(stringsArray);


/**
 The function implements the random sorting of numbers array.
 */


function randomSort() {
    return Math.random() - 0.5;
}

// var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbersArray.sort(randomSort));


/**
 The function implements sorting the array of people by the age field.
 */


function sortPeopleByAge(firstPerson, secondPerson) {
    return firstPerson.age - secondPerson.age;
}

// var max = {name: 'max', age: 23},
    // john = {name: 'john', age: 18},
    // lex = {name: 'lex', age: 6},
    // donald = {name: 'donald', age: 50},
    // people = [max, john, lex, donald];

// console.log(people.sort(sortPeopleByAge));


/**
 The function accepts an array of anagrams and returns the array with only one word for each anagram.
 */


function anagramClear(anagramsArray) {
    var anagramKeys = {},
        clearArray = [];

    for (var i = 0; i < anagramsArray.length; i++) {
        var anagram = anagramsArray[i],
            anagramKey = anagram.toLowerCase().split('').sort().join('');
        anagramKeys[anagramKey] = anagram;
    }

    for (var key in anagramKeys) {
        clearArray.push(anagramKeys[key]);
    }

    return clearArray;
}

// var anagrams = ['abed', 'bade', 'bead', 'abet', 'beat', 'beta', 'abut', 'tabu', 'tuba'],
    // anagrams2 = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

// console.log(anagramClear(anagrams));
// console.log(anagramClear(anagrams2));


/**
 The function returns an array with only unique elements. 
 */


function getUniqueArray(arr) {
    var uniqueElements = {};

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];

        if (!(element in uniqueElements)) {
            uniqueElements[element] = true;
        }
    }

    return Object.keys(uniqueElements);
}

// var strings = ['some', 'text', 'some', 'text', 'unique', 'some', 'text', 'test', '8-()'];
// console.log(getUniqueArray(strings));


/**
 The complex of functions which working with linked lists. 
 That functions return value of each list element in the certain order.
 */


function printLinkedList(linkedList) {
    var head = linkedList;

    while (head) {
        console.log(head.value);
        head = head.next;
    }
}

function printLinkedListRecursive(linkedList) {
    console.log(linkedList.value);

    if (linkedList.next) {
        printLinkedListRecursive(linkedList.next);
    }
}

function printLinkedListRecursiveReverse(linkedList) {
    if (linkedList.next) {
        printLinkedListRecursiveReverse(linkedList.next);
    }

    console.log(linkedList.value);
}

function printLinkedListReverse(linkedList) {
    var head = linkedList,
        tempArray = [];

    while (head) {
        tempArray.push(head.value);
        head = head.next;
    }

    for (var i = tempArray.length - 1; i >= 0; i--) {
        console.log(tempArray[i]);
    }
}

// var list = {value: 1};
// list.next = {value: 2};
// list.next.next = {value: 3};
// list.next.next.next = {value: 4};

// printLinkedList(list);
// printLinkedListRecursive(list);
// printLinkedListRecursiveReverse(list);
// printLinkedListReverse(list);


/**
 Use map function for getting the array with elements lengths.
 */


var sentenceArray = ['It', 'is', 'raining', 'today'],
    elementsLength = [];

elementsLength = sentenceArray.map(function(item) {
    return item.length;
});

// console.log(elementsLength);


/**
 The function returns the array with interim sums of the each element of accepted array.
 */


function getInterimSums(numbersArray) {
    var interimSums = [];
    numbersArray.reduce(function(currentSum, item, index) {
        var result = currentSum + item;
        interimSums[index] = result;
        return result;
    }, 0);

    return interimSums;
}

// console.log(getInterimSums([1, 2, 3, 4, 5]));
// console.log(getInterimSums([-2,-1,0,1]));


/**
 The function returns the array with only positive numbers.
 */


function filterPositiveNumbers(numbersArray) {
    return numbersArray.filter(function(number) {
        return number >= 0;
    });
}

// console.log(filterPositiveNumbers([0, 1, 2, 3, -1, -5, 6, -4]));
