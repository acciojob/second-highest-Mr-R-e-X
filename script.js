//your JS code here. If required.
function secondHighest() {
	 const input = prompt("Enter comma-separated integers:");
	const arr = input.split(',').map(Number);
	if (arr.length <= 1) {
        return undefined;
    }
    
    const sortedArr =  arr.sort((a, b) => b - a);
    
        if (sortedArr.length === 1) {
        return undefined;
    } 
	for(let i = 1; i < sortedArr.length; i++) {
    if(sortedArr[i] !== sortedArr[0]) {
        return sortedArr[i];
    }
}
	
    return arr[1]; 
}
const result = secondHighest();
alert(result); 