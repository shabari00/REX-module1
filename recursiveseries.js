/*
Recursive Series
A recursive series is defined as:

S[i] = S[i-9], if i is odd
     = S[i-10] , if i is even
     = i      , if i <= 9 
You have been given an integer n. You need to find the nth term of this series using recursion.

Note: DO NOT USE LOOP/s
Input
First line contains one integer t, denoting number of testcases. Its is followed t lines:

Each line contains one integer denoting n.
Output
One line for each testcase, denoting the result.

Example
Input:

2
5
16
Output:

5
6
*/