var Die = require('../dice/dice');

var saves;
var d20 = Die(20);

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
    this.hp = basic.hp;

    this.stats = {
        str: getModifier(_stats.str),
        dex: getModifier(_stats.dex),
        con: getModifier(_stats.con),
        int: getModifier(_stats.int),
        wis: getModifier(_stats.wis),
        cha: getModifier(_stats.cha)
    };

    saves = {
        fort: getSave(basic.saves.fort, this.stats.con),
        ref: getSave(basic.saves.ref, this.stats.dex),
        will: getSave(basic.saves.will, this.stats.wis)
    };

    this.grapple = getGrapple(this.bab, this.stats.str, this.sizeModifier);

    this.initive = getInitive(this.stats.dex, basic.inititiveMiscModifier);

    this.ac = getAC(basic.ac, this.stats.dex, this.sizeModifier);

}

function getInitive (dex, misc) {
    return dex + misc;
}

function  getGrapple(bab, str, sizeModifier) {
    return bab + str + sizeModifier;
}

function getAC (ac, dex, size) {
    var subtotal = 0;
 
     Object.keys(ac).map(function(objectKey, index) {
        var value = ac[objectKey];
        subtotal += value;
        
    });

    return 10 + subtotal + dex - size;

}

function getSave (data, relevantStat) {
    return data.base + relevantStat + data.magic + data.misc;
}

function getModifier(stat) {
    return (stat - 10) / 2; 
}

function fortSave () {
    return d20.roll() + saves.fort;
}
function refSave () {
    return d20.roll() + saves.ref;
}
function willSave () {
    return d20.roll() + saves.will;
}

function rollSkill (skill) {
    return d20.roll() + skill.ranks + skill 
}

module.exports = Character;