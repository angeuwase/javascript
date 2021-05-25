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


const accountTypeChecker = (accountBalanceHistory) => {
    

    // determine the account balances for each month
    // accountBalances will be an array of all the account balances for the months in the accountBalanceHistory array
    // value for the example: [0, 100, 200]
    const accountBalances = accountBalanceHistory.map(function(month){
        const {balance:{amount}} = month.account;
        return amount;
    })

    // calculate the difference in the account balances from month to month and add it to the set 
    // if the difference is negative (meaning that the balance amount increased from the previous month) set return A flag to true
    let differences = new Set();
    let returnA = false

    for(let i=1; i<(accountBalances.length); i++){
        let difference = accountBalances[i] - accountBalances[i-1];
        if(difference<0){

            returnA = true;
        }
        differences.add(difference);
    }

    // check the length of the set to determine what type of account it is
    // if the difference from month to month varies even once, the set will contain more than one element --> type A
    // otherwise it is type B

    let result = differences.size >1 || returnA;
    return result ? "A" : "B";
    

}

const result = accountTypeChecker(accountBalanceHistory)
console.log(result)

const result2 = accountTypeChecker(accountBalanceHistory2)
console.log(result2)

const result3 = accountTypeChecker(accountBalanceHistory3)
console.log(result3)

module.exports = accountTypeChecker