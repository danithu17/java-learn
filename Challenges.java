/**
 * ============================================================================
 * JAVA LOOPS PRACTICE ARENA - CHALLENGES FILE
 * ============================================================================
 * STUDENT INSTRUCTIONS:
 * 1. This is YOUR workspace! You only need to write code inside these methods.
 * 2. Find the challenge you want to solve (e.g. challenge1, challenge2, etc.).
 * 3. Read the comments above each method for instructions and tips.
 * 4. Write your solution inside the method replacing the // TODO line.
 * 5. Run Main.java to test your solution!
 * 
 * REMEMBER:
 * - Print your output using System.out.println() or System.out.print().
 * - Do not change method names or signatures (keep them public static void).
 * - Match the expected output exactly (case-sensitive, line by line).
 * ============================================================================
 */
public class Challenges {

    // ========================================================================
    // LEVEL 1: BASIC FOR LOOPS (Building Memory & Repetition)
    // ========================================================================

    /**
     * Challenge 1: Count 1 to 10
     * Task: Print numbers from 1 to 10, each on a new line.
     * Expected Output:
     * 1
     * 2
     * ...
     * 10
     */
    public static void challenge1() {
        // TODO: Write a for loop that starts at 1, goes up to 10, and prints each number.
        
    }

    /**
     * Challenge 2: Countdown 10 to 1
     * Task: Print numbers backwards from 10 down to 1, each on a new line.
     * Expected Output:
     * 10
     * 9
     * ...
     * 1
     */
    public static void challenge2() {
        // TODO: Write a for loop that starts at 10, decreases by 1, and stops at 1.
        
    }

    /**
     * Challenge 3: Even Numbers up to 20
     * Task: Print even numbers from 2 up to 20 (2, 4, 6, ..., 20), each on a new line.
     * Expected Output:
     * 2
     * 4
     * ...
     * 20
     */
    public static void challenge3() {
        // TODO: Write a for loop starting at 2, stepping by +2 (i += 2) up to 20.
        
    }

    /**
     * Challenge 4: Multiples of 5 up to 50
     * Task: Print multiples of 5 from 5 up to 50 (5, 10, 15, ..., 50), each on a new line.
     * Expected Output:
     * 5
     * 10
     * ...
     * 50
     */
    public static void challenge4() {
        // TODO: Write a for loop starting at 5, stepping by +5 up to 50.
        
    }

    /**
     * Challenge 5: Sum of 1 to 10
     * Task: Calculate the sum of numbers from 1 to 10 and print ONLY the final total.
     * Expected Output:
     * 55
     */
    public static void challenge5() {
        // TODO: Create an 'int sum = 0;', loop 1 to 10, add each number to sum, then print sum.
        
    }

    /**
     * Challenge 6: Sum of 1 to 100
     * Task: Calculate the sum of numbers from 1 to 100 and print ONLY the final total.
     * Expected Output:
     * 5050
     */
    public static void challenge6() {
        // TODO: Create 'int sum = 0;', loop 1 to 100, accumulate into sum, print sum.
        
    }

    // ========================================================================
    // LEVEL 2: FOR + IF CONDITIONS (Branching inside loops)
    // ========================================================================

    /**
     * Challenge 7: Count Even and Odd Numbers (1 to 10)
     * Task: Loop from 1 to 10. Count how many are even and how many are odd.
     * Print:
     * Evens: 5
     * Odds: 5
     */
    public static void challenge7() {
        // TODO: Track evens and odds counters. Use (i % 2 == 0) to check even.
        
    }

    /**
     * Challenge 8: Multiplication Table of 7
     * Task: Print the multiplication table for 7 from 1 to 10.
     * Expected Output:
     * 7 x 1 = 7
     * 7 x 2 = 14
     * ...
     * 7 x 10 = 70
     */
    public static void challenge8() {
        // TODO: Loop i from 1 to 10, print: "7 x " + i + " = " + (7 * i)
        
    }

    /**
     * Challenge 9: Factorial of 5
     * Task: Calculate 5! (5 * 4 * 3 * 2 * 1) and print the result.
     * Expected Output:
     * 120
     */
    public static void challenge9() {
        // TODO: Start with 'int fact = 1;', loop 1 to 5, multiply 'fact = fact * i;', then print fact.
        
    }

    /**
     * Challenge 10: Power of a Number (2^6)
     * Task: Calculate 2 to the power of 6 without Math.pow() and print the result.
     * Expected Output:
     * 64
     */
    public static void challenge10() {
        // TODO: Start with 'int result = 1;', repeat 6 times multiplying result by 2, then print result.
        
    }

    /**
     * Challenge 11: Skip Multiples of 3 (Continue)
     * Task: Loop 1 to 10. If a number is divisible by 3, skip it using 'continue'. Print the rest.
     * Expected Output:
     * 1
     * 2
     * 4
     * 5
     * 7
     * 8
     * 10
     */
    public static void challenge11() {
        // TODO: Loop 1 to 10. If (i % 3 == 0) continue; else print i.
        
    }

    /**
     * Challenge 12: Stop at First Multiple of 7 (Break)
     * Task: Loop i from 1 to 50. If i is a multiple of 7, print "Found: " + i and stop immediately with 'break'.
     * Expected Output:
     * Found: 7
     */
    public static void challenge12() {
        // TODO: Loop 1 to 50. If (i % 7 == 0) { System.out.println("Found: " + i); break; }
        
    }

    // ========================================================================
    // LEVEL 3: WHILE & DO-WHILE LOOPS (Condition-Driven Loops)
    // ========================================================================

    /**
     * Challenge 13: While Countdown with Blastoff
     * Task: Using a while loop, countdown from 5 to 1, then print "Blastoff!".
     * Expected Output:
     * 5
     * 4
     * 3
     * 2
     * 1
     * Blastoff!
     */
    public static void challenge13() {
        // TODO: int n = 5; while (n > 0) { ... n--; } System.out.println("Blastoff!");
        
    }

    /**
     * Challenge 14: Count Digits of a Number
     * Task: Given number 48259, count how many digits it has using a while loop.
     * Expected Output:
     * Digits: 5
     */
    public static void challenge14() {
        // TODO: int num = 48259; int count = 0; while (num > 0) { num /= 10; count++; }
        
    }

    /**
     * Challenge 15: Sum of Digits
     * Task: Calculate the sum of digits of 12345 (1+2+3+4+5 = 15).
     * Expected Output:
     * Sum: 15
     */
    public static void challenge15() {
        // TODO: int num = 12345; while (num > 0) { sum += num % 10; num /= 10; }
        
    }

    /**
     * Challenge 16: Reverse a Number
     * Task: Reverse the number 9876 using a while loop.
     * Expected Output:
     * 6789
     */
    public static void challenge16() {
        // TODO: int num = 9876, rev = 0; while (num > 0) { rev = rev * 10 + (num % 10); num /= 10; }
        
    }

    /**
     * Challenge 17: Do-While Guaranteed Run
     * Task: Demonstrate do-while executing once even if condition is false.
     * Initialize x = 10. Print "Executed with x=" + x inside do-while body. Loop condition (x < 5).
     * Expected Output:
     * Executed with x=10
     */
    public static void challenge17() {
        // TODO: int x = 10; do { ... } while (x < 5);
        
    }

    /**
     * Challenge 18: Halving Until One
     * Task: Start with num = 64. While num >= 1, print num, then divide by 2.
     * Expected Output:
     * 64
     * 32
     * 16
     * 8
     * 4
     * 2
     * 1
     */
    public static void challenge18() {
        // TODO: int num = 64; while (num >= 1) { System.out.println(num); num /= 2; }
        
    }

    // ========================================================================
    // LEVEL 4: NESTED LOOPS (Patterns & Grids)
    // ========================================================================

    /**
     * Challenge 19: Square Pattern of Stars (4x4)
     * Task: Print a 4x4 square of stars.
     * Expected Output:
     * ****
     * ****
     * ****
     * ****
     */
    public static void challenge19() {
        // TODO: Outer loop 4 rows, inner loop 4 cols, print "*" then newline after row.
        
    }

    /**
     * Challenge 20: Star Triangle (Height 5)
     * Task: Print a right triangle of stars with 5 rows.
     * Expected Output:
     * *
     * **
     * ***
     * ****
     * *****
     */
    public static void challenge20() {
        // TODO: Outer loop row = 1 to 5. Inner loop col = 1 to row. Print "*".
        
    }

    /**
     * Challenge 21: Inverted Star Triangle (Height 5)
     * Task: Print an inverted right triangle of stars.
     * Expected Output:
     * *****
     * ****
     * ***
     * **
     * *
     */
    public static void challenge21() {
        // TODO: Outer loop row = 5 down to 1. Inner loop col = 1 to row. Print "*".
        
    }

    /**
     * Challenge 22: Number Row Triangle
     * Task: Print row numbers repeated:
     * Expected Output:
     * 1
     * 22
     * 333
     * 4444
     */
    public static void challenge22() {
        // TODO: Outer loop i = 1 to 4. Inner loop j = 1 to i. Print i.
        
    }

    /**
     * Challenge 23: Floyd's Triangle (1 to 6)
     * Task: Print sequential numbers in a 3-row triangle:
     * Expected Output:
     * 1
     * 2 3
     * 4 5 6
     */
    public static void challenge23() {
        // TODO: int val = 1; Outer loop row 1 to 3; inner col 1 to row; print val and spaces.
        
    }

    /**
     * Challenge 24: Mini Multiplication Grid (3x3)
     * Task: Print a 3x3 table of products with spaces between numbers on each row.
     * Expected Output:
     * 1 2 3
     * 2 4 6
     * 3 6 9
     */
    public static void challenge24() {
        // TODO: Outer loop i = 1 to 3, inner j = 1 to 3, print (i * j) with space.
        
    }

    // ========================================================================
    // LEVEL 5: LOGIC PROBLEMS (Putting It All Together)
    // ========================================================================

    /**
     * Challenge 25: FizzBuzz (1 to 15)
     * Task: Print numbers 1 to 15.
     * If divisible by 3 and 5 -> "FizzBuzz"
     * If divisible by 3 -> "Fizz"
     * If divisible by 5 -> "Buzz"
     * Otherwise -> print the number.
     */
    public static void challenge25() {
        // TODO: Loop 1 to 15 with if-else ladder (check 15 first!).
        
    }

    /**
     * Challenge 26: Prime Number Check
     * Task: Check if number 29 is prime. If it is, print "29 is PRIME".
     * Expected Output:
     * 29 is PRIME
     */
    public static void challenge26() {
        // TODO: int n = 29; loop 2 to n-1 to check if divisible. Print "29 is PRIME" if prime.
        
    }

    /**
     * Challenge 27: First 8 Fibonacci Numbers
     * Task: Print the first 8 Fibonacci numbers on one single line separated by spaces.
     * Expected Output:
     * 0 1 1 2 3 5 8 13
     */
    public static void challenge27() {
        // TODO: Track a = 0, b = 1. Print first two, then loop for the remaining 6 numbers.
        
    }

    /**
     * Challenge 28: Palindrome Number Check
     * Task: Check if 12321 reads the same backward. If so, print "12321 is PALINDROME".
     * Expected Output:
     * 12321 is PALINDROME
     */
    public static void challenge28() {
        // TODO: Reverse 12321 into a new variable, compare with original, print message if equal.
        
    }

    /**
     * Challenge 29: Greatest Common Divisor (GCD of 48 and 18)
     * Task: Find the GCD of 48 and 18 using loops.
     * Expected Output:
     * GCD: 6
     */
    public static void challenge29() {
        // TODO: int a = 48, b = 18; while (b != 0) { int temp = b; b = a % b; a = temp; } print "GCD: " + a
        
    }

    /**
     * Challenge 30: Sum of Even Fibonacci Numbers Below 100
     * Task: Generate Fibonacci terms up to 100. Sum only the even ones (2, 8, 34).
     * Expected Output:
     * Sum of Evens: 44
     */
    public static void challenge30() {
        // TODO: Generate Fibonacci terms; if term is even and < 100, add to sum. Print "Sum of Evens: " + sum
        
    }
}
