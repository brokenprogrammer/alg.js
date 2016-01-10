/*
* The alg.js Library.
* The JavaScript library to provide solutions for tasks like sorting,
* searching and math algorithms.
*
* The MIT License (MIT)
*
* Copyright (c) 2016 The alg.js Project
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

/**
 * BinarySearchFind is a function that uses the same idea as BinarySearch but
 * instead of returning the position of the value in the array it returns the value
 * to proove that the value exists or not in the given array.
 *
 * @param key - Key value to look for in the array
 * @param array - A sorted array to look inside
 *
 * @return Either the found value if it exists or a string if the value doesn't exist.
 */
function BinarySearchFind(key, array) {
    var lo = array[0];
    var mid = array[array.length/2];
    var hi = array[array.length-1];

    if (mid == key) {
        return mid;
    } else if (array.length == 1) {
        return "Value not found!";
    }

    if (key < mid) {
        return BinarySearch(key, array.slice(0, array.length/2));
    } else if (key > mid) {
        return BinarySearch(key, array.slice(array.length/2, array.length));
    }
}

/**
 * BinarySearch is an algorithm that searches for a specified value inside a
 * specified array. The returned value is the position in the array of where the
 * specified value is located at.
 *
 * @param key - the key value to look for in the array
 * @param array - the array to look for the value inside
 *
 * @return returns the position of the key value or a string if the search failed.
 */
function BinarySearch(key, array) {
    var lo = 0;
    var hi = array.length-1;
    var mid;

    while (lo <= hi) {
        mid = lo + (hi - lo) / 2;
        mid = Math.floor(mid);
        if (key < array[mid]) {
            hi = mid - 1;
        } else if (key > array[mid]) {
            lo = mid + 1;
        } else {
            return mid;
        }
    }

    return 'Failed to find value.';
}

var sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 32, 64, 74, 99, 103];
//Searching for values
console.log(BinarySearch(5, sorted));
console.log(BinarySearch(99, sorted));
console.log(BinarySearch(32, sorted));

//Searching for value not existing.
console.log(BinarySearch(11, sorted));
console.log(BinarySearch(55, sorted));
console.log(BinarySearch(1000, sorted));
