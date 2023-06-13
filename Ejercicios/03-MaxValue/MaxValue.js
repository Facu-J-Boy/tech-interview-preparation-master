function MaxValue (shares) {
  // Your code here:
  console.log(shares);

    // O(n)
    let buy = shares[0];
    let maxProfit = -Infinity;

    for (let i = 1; i < shares.length; i++) {
      const sell = shares[i];
      const profit = shares[i] - buy;
      maxProfit = profit > maxProfit ? profit : maxProfit;
      buy = sell < buy ? sell : buy;
    }
    return maxProfit;

    // O(n*m) discutible
    //   let maxProfit = -Infinity;
    //   for (let i = 0; i < shares.length - 1; i++) {
    //     for (let j = i + 1; j < shares.length; j++) {
    //       const profit = shares[j] - shares[i];
    //       maxProfit = profit > maxProfit ? profit : maxProfit;
    //     }
    //   }
    //   return maxProfit;
}

module.exports = MaxValue
