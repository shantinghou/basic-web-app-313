export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "shantinh"
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return (
      "shan-guan"
    );
  }

  if (query.toLowerCase().includes("plus") && query.toLowerCase().includes("multiplied by")) {
    // Extract numbers and operations from the query
    const parts = query.match(/what is (\d+)\s*plus\s*(\d+)\s*multiplied by\s*(\d+)/i);
    if (parts && parts.length === 4) {
      const num1 = parseInt(parts[1]); // Number for addition
      const num2 = parseInt(parts[2]); // First number for multiplication
      const num3 = parseInt(parts[3]); // Second number for multiplication

      // Calculate result: num1 + (num2 * num3)
      const result = num1 + (num2 * num3);
      return result.toString();
    }
  }
  
  if (query.toLowerCase().includes("multiplied by") && query.toLowerCase().includes("plus")) {
    // Extract numbers and operations from the query
    const parts = query.match(/what is (\d+)\s*multiplied by\s*(\d+)\s*plus\s*(\d+)/i);
    if (parts && parts.length === 4) {
      const num1 = parseInt(parts[1]); // First number for multiplication
      const num2 = parseInt(parts[2]); // Second number for multiplication
      const num3 = parseInt(parts[3]); // Number for addition
      
      // Calculate result: (num1 * num2) + num3
      const result = (num1 * num2) + num3;
      return result.toString();
    }
  }

  if(query.toLowerCase().includes("which of the following numbers is the largest")) {
    const parts = query.match(/which of the following numbers is the largest:\s*(\d+),\s*(\d+),\s*(\d+)/i);
    if (parts && parts.length === 4) {
        const a = parseInt(parts[1]);
        const b = parseInt(parts[2]);
        const c = parseInt(parts[3]);
        const largest = Math.max(a, b, c);
        return `${largest}`;
    } 
  }

//const addQuery = query.match(/what is (\d+) plus (\d+)/)
//const x: number = parseInt(addMatch[1]);
//const y: number = parseInt(addMatch[2]);
//return (x+y).toString()

  if (query.toLowerCase().includes("plus")) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers){
      let sum = numbers.reduce((acc, curr) => acc + curr, 0);
      return sum.toString()
    }
    // Check if numbers is not null and contains exactly two numbers
    
  }

  if (query.toLowerCase().includes("minus")) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g);
    
    // Check if numbers is not null and contains exactly two numbers
    if (numbers && numbers.length === 2) {
      // Convert the extracted strings to numbers and add them
      const result = Number(numbers[0]) - Number(numbers[1]);
      return result.toString();
    }
  }

  if (query.toLowerCase().includes("to the power of")) {
    // Extract the base and exponent from the query
    const parts = query.match(/what is (\d+)\s*to the power of\s*(\d+)/i);
    if (parts && parts.length === 3) {
      const base = BigInt(parseInt(parts[1]));
      const exponent = BigInt(parseInt(parts[2]));

      // Calculate the power
      const result = base ** exponent;
      return result.toString(); // Return the result as a string
    }
  }
  // if (query.toLowerCase().includes("power")) {
  //   // Extract numbers from the query
  //   const numbers = query.match(/\d+/g);
    
  //   // Check if numbers is not null and contains exactly two numbers
  //   if (numbers && numbers.length === 2) {
  //     // Convert the extracted strings to numbers and add them
  //     const result = Number(numbers[0]) ** Number(numbers[1]);
  //     return result.toString();
  //   }
  // }
  

  if(query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    const parts = query.match(/which of the following numbers is both a square and a cube:\s*(\d+(?:,\s*\d+)*)/i);
    if (parts && parts.length === 2) {
      // Split the numbers from the query string
      const numbers = parts[1].split(',').map(num => parseInt(num.trim()));

      // Function to check if a number is both a perfect square and a cube (i.e., a perfect sixth power)
      const isSquareAndCube = (num: number) => {
        const cubeRoot = Math.cbrt(num);
        const squareRoot = Math.sqrt(num);
        return Number.isInteger(cubeRoot) && Number.isInteger(squareRoot);
      };

      // Filter numbers that are both square and cube
      const result = numbers.filter(isSquareAndCube);
      return result[0].toString()
    }
  }

  if(query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied by")) {
    const parts = query.match(/what is (\d+)\s*multiplied by\s*(\d+)/i);
    if (parts && parts.length === 3) {
        const a = parseInt(parts[1]);
        const b = parseInt(parts[2]);
        const product = a * b;
        return product.toString(); // Return only the result
    }
  }

  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    // Extract numbers from the query
    const parts = query.match(/which of the following numbers are primes:\s*(\d+(?:,\s*\d+)*)/i);
    if (parts && parts.length === 2) {
      const numbers = parts[1].split(',').map(num => parseInt(num.trim()));

      // Function to check if a number is prime
      const isPrime = (num: number) => {
        if (num < 2) return false; // Prime numbers are greater than 1
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false; // If divisible by any number other than 1 and itself
        }
        return true;
      };

      // Filter numbers that are prime
      const primes = numbers.filter(isPrime);

      if (primes.length > 0) {
        return primes.join(", ");
      }
    }
  }


  return "";
}
