closeCompare = (a, b, margin) => Math.abs( a-b) <= margin ? 0 : Math.sign( a - b)