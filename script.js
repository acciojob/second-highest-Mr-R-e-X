//your JS code here. If required.
function secondHighest(arr) {
	if (arr.length <= 1) {
        return -Infinity;
    }
    
    arr.sort((a, b) => b - a);
    
    if (arr[0] === arr[arr.length - 1]) {
        return -Infinity;
    } 
    return arr[1];
}