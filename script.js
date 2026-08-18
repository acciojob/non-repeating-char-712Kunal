function firstNonRepeatedChar(str) {
 // Write your code here
	if(str.length===0){
		return null;
	}
	
	let arr={};

	for(let i=0;i<str.length;i++){
		let curr=str.charAt(i);
		arr[curr]=(arr[curr]||0)+1;
	}

	for (let index = 0; index < str.length; index++) {
		let curr=str.charAt(index);
		if(arr[curr] === 1) {
			return curr;
		}
	}

	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
