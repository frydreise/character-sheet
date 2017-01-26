function Basic (Character, raw) {
    Character.name = raw.name;
    var stats = raw.stats;

    Character.stats = {
        str: getModifier(stats.str),
        dex: getModifier(stats.dex),
        con: getModifier(stats.con),
        int: getModifier(stats.int),
        wis: getModifier(stats.wis),
        cha: getModifier(stats.cha)
    }
    Character.saves = {
        fort: getFortSave(raw.saves.fort, ),
        ref: getRefSave(raw.saves.ref),
        will: getWillSave(raw.saves.will)
    }
}



function getModifier(stat) {
    return (stat - 10) / 2; 
}


module.exports = Basic;