var printUnsorted = (arr,n) => {
	var s=0,e=n-1,i,max,min;
	
	for(s=0;s<n-1;s++) {

		if(arr[s] > arr[s+1])
		break;

	}
	
	if(s == n-1) {
		console.log("The complete array is sorted");
		
	}

	for(e = n-1; e>0; e--) {
		if(arr[e] < arr[e-1])
		break;
	
	}

	max = arr[s]; min = arr[s];

	for(i=s+1;i<=e;i++) {
		if(arr[i] > max)
			max = arr[i];

		if(arr[i] < min)
			min = arr[i];
	}

	for(i=0;i<s;i++) {
		if(arr[i] > min) {
			s = i;
			break;
		}
	}

	for(i=n-1; i>=e+1;i--) {
		if(arr[i] < max) {
			e = i;
			break;
		}
	}

	
	console.log("The unsorted subarray which makes the given array sorted lies between the indices " + s + " and " + e);
	return;
}

console.log(printUnsorted([10,12,20,20,25,40,32,31,35,50],10));
