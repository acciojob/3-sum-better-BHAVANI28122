function threeSum(arr, target) {
// write your code here
  let sum =0;
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			for(let k=j+1;k<arr.length;k++){
				sum= sum+arr[i]+arr[j]+arr[k];
				if(sum == target){
					return sum;
				}
			}
		}
	}
  
}

module.exports = threeSum;
