function incrementer(nums) { 
    return nums.map((x, i) => (x + i + 1) % 10) 
   }