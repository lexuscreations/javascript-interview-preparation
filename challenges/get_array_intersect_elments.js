// common elements in both array
const getIntersectArray = (numArr1, numArr2)  => Array.from(new Set(numArr1.filter(val => numArr2.indexOf(val) !== -1)))
