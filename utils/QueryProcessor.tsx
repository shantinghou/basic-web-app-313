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


  if (query.toLowerCase().includes("plus")) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g);
    
    // Check if numbers is not null and contains exactly two numbers
    if (numbers && numbers.length === 2) {
      // Convert the extracted strings to numbers and add them
      const result = Number(numbers[0]) + Number(numbers[1]);
      return result.toString();
    }
  }
  

  // if (query.toLowerCase().includes("   ")) {
  //   return (
  //     ""
  //   );
  // }

  // if (query.toLowerCase().includes("   ")) {
  //   return (
  //     ""
  //   );
  // }
  return "";
}
