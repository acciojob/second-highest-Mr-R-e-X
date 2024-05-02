function secondHighest(arr) {
			 if (arr.length < 2) {
        return -Infinity;
    }
    const uniqueArr = [];
    arr.forEach(element => {
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
    });
    if (uniqueArr.length === 1) {
        return -Infinity;
    }
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();