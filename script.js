function firstNonRepeatedChar(str) {
 // Write your code here
	let arr={};

	for(let i=0;i<str.length();i++){
		arr[str.charAt(i)-'a']++;
	}

	for (let index = 0; index < arr.length; index++) {
		if(arr[index]===1){
			return str.charAt(index+'a');
		}
	}

	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
