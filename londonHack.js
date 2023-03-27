function londonCityHacker(journey) {

    let tubeCost = Math.round(journey.filter(x => typeof x === "string").length * 2.4 * 100) / 100;
    let busCost = Math.round(journey.filter(y => typeof y === "number").length * 1.5 * 100) / 100;
    let sumCost = tubeCost + busCost;
    for (let i = 0; i < journey.length; i++) {
      if (typeof journey[i] === "number" && typeof journey[i + 1] === "number") {
        sumCost -= 1.5;
        i++;
      }
    }
    return `£${sumCost.toFixed(2)}`;
  }