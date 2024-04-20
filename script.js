function secondHighest() {
    const input = prompt("Enter comma-separated integers:");
    const arr = input.split(',').map(Number);

    if (arr.length <= 1 || [...new Set(arr)].length === 1) {
        return -Infinity;
    }
    
    const sortedArr = arr.sort((a, b) => b - a);
    
    for(let i = 1; i < sortedArr.length; i++) {
        if(sortedArr[i] !== sortedArr[0]) {
            return sortedArr[i];
        }
    }
}
const result = secondHighest();
alert(result);  