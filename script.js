function secondHighest() {
    if (arr.length <= 1 || new Set(arr).size === 1) {
        return -Infinity;
    }
    
    const sortedArr = [...new Set(arr)].sort((a, b) => b - a);
    
    return sortedArr[1];
}
const result = secondHighest();
alert(result);  