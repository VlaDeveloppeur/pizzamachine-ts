"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    constructor(firstname_arg, lastname_arg, gender_arg) {
        this._gender = 0; //0= unknown, 1 = male, 2 = female
        if (firstname_arg === "" ||
            lastname_arg === "" ||
            firstname_arg === undefined ||
            lastname_arg === undefined)
            throw new Error(`firstname and lastname arguments must be defined and not empty`);
        this._firstname = firstname_arg;
        this._lastname = lastname_arg;
        if (gender_arg !== undefined && People.GENDERS.indexOf(gender_arg) > -1)
            this._gender = gender_arg;
    }
    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    get fullname() {
        return this._firstname + " " + this._lastname;
    }
    get gender() {
        return this._gender;
    }
}
exports.default = People;
People.GENDERS = [0, 1, 2];
//# sourceMappingURL=People.js.map