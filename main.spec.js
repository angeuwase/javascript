const { test, expect } = require('@jest/globals')
const accountTypeChecker = require('./main.js')

// Data
const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]

  const accountBalanceHistory2 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 300 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 900 },
      },
    }
  ]

  const accountBalanceHistory3 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 200 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 0 },
      },
    }
  ]


// Tests
test('Properly catagorizes an account as type B', () =>{
    expect(accountTypeChecker(accountBalanceHistory)).toBe('B')

})

test('Properly catagorizes an account as type A', () =>{
  expect(accountTypeChecker(accountBalanceHistory2)).toBe('A')

})

test('Properly catagorize an account where balance is increasing at the same value each month as type A', () =>{
  expect(accountTypeChecker(accountBalanceHistory3)).toBe('A')

})