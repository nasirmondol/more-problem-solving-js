function woodCalculate(chair, table, bed) {

    const chairNeed = 2; //12
    const tableNeed = 4; //8
    const bedNeed = 12;  // 36

    const perChairWood = chairNeed * chair;
    const perTableNeed = tableNeed * table;
    const perBedNeed = bedNeed * bed;

    const totalWoodNeeded = perChairWood + perTableNeed + perBedNeed;
    return totalWoodNeeded;
}

const woodNeed = woodCalculate(6, 2, 3);
console.log(woodNeed);

