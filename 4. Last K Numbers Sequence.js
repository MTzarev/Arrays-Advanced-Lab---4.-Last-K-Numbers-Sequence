function lastKNumbersSequence(n, k) {
    let arr = [1];
for (let i = 1; i<n; i++) {

        let start = Math.max(0,i - k)
        let end = i-1
        
        function sum(start, end) {
          
            return arr.reduce(start => start + end+1);
        }
        arr[i] = sum(start, end);
       
       //console.log(arr.join(' '));
    }
 
    console.log(arr.join(' '));
}
lastKNumbersSequence(6, 3);
//lastKNumbersSequence(8, 2);
