
function Character (raw) {
    var basic = raw.basic;
    var _stats = basic.stats;

    // Programatically useless information
    this.name = basic.name;
    this.race = basic.race;
    this.alignment = basic.alignment;
    this.age = basic.age;
    this.deity = basic.deity;
    this.gender = basic.gender;

    // Useful properties
    this.level = basic.level;
    this.bab = basic.bab;
    this.sizeModifier = basic.sizeModifier;
    this.dr = basic.damageReduction;
    this.speed = basic.speed;

    this.stats = {
        str: getModifier(_stats.str),
        dex: getModifier(_stats.dex),
        con: getModifier(_stats.con),
        int: getModifier(_stats.int),
        wis: getModifier(_stats.wis),
        cha: getModifier(_stats.cha)
    };

    this.saves = {
        fort: getSave(basic.saves.fort, _stats.con),
        ref: getSave(basic.saves.ref, _stats.dex),
        will: getSave(basic.saves.will, _stats.wis)
    };
    this.initive = getInitive(this.stats.dex, basic.inititiveMiscModifier);

    this.ac = getAC(basic.ac);


}

function getInitive (dex, misc) {
    return dex + misc;
}

function getAC (ac) {
    var subtotal = 0;
    for (var i = 0; i < ac.length; i++) {
        subtotal += ac[i];
    }

    return 10 + subtotal;

}

function getSave (data, relevantStat) {
    return data.base + relevantStat + data.magic + data.misc;
}

function getModifier(stat) {
    return (stat - 10) / 2; 
}


module.exports = Character;