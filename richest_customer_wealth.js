var maximumWealth = function(accounts) {
    var max_balance = 0;
    for (let i = 0; i < accounts.length; i++) {
        let current_balance = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            current_balance += accounts[i][j];
        }
        if (current_balance > max_balance) {
            max_balance = current_balance;
        }
    }
    return max_balance;
};
