/* globals module */

class Superhero {
    constructor(name, secretIdentity, ...powers) {
        this.name = name;
        this.secretIdentity = secretIdentity;
        this.powers = Array.isArray(powers[0]) ?
            powers[0] :
            powers;
    }

    
}

module.exports = Superhero;