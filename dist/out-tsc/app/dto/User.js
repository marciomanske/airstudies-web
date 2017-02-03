/**
 * Created by marciomanske on 2017-01-19.
 */
//{passport: null, name: null, email: null, username: null, type: null,
//address: {city: null, state: null, country: null, postalCode: null, addressLine1: null, addressLine2: null},
//phone: {home: null, mobile: null, work: null}, passwordRecoveryType: 3};
export var User = (function () {
    function User(passport, name, email, username, city, state, country, postalCode, addressLine1, addressLine2, home, mobile, work, passwordRecoveryType, role, active, changePasswordNextLogin, id) {
        if (passport === void 0) { passport = null; }
        if (name === void 0) { name = null; }
        if (email === void 0) { email = null; }
        if (username === void 0) { username = null; }
        if (city === void 0) { city = null; }
        if (state === void 0) { state = null; }
        if (country === void 0) { country = null; }
        if (postalCode === void 0) { postalCode = null; }
        if (addressLine1 === void 0) { addressLine1 = null; }
        if (addressLine2 === void 0) { addressLine2 = null; }
        if (home === void 0) { home = null; }
        if (mobile === void 0) { mobile = null; }
        if (work === void 0) { work = null; }
        if (passwordRecoveryType === void 0) { passwordRecoveryType = 3; }
        if (role === void 0) { role = null; }
        if (active === void 0) { active = 1; }
        if (changePasswordNextLogin === void 0) { changePasswordNextLogin = 1; }
        if (id === void 0) { id = null; }
        this.passport = passport;
        this.name = name;
        this.email = email;
        this.username = username;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.home = home;
        this.mobile = mobile;
        this.work = work;
        this.passwordRecoveryType = passwordRecoveryType;
        this.role = role;
        this.active = active;
        this.changePasswordNextLogin = changePasswordNextLogin;
        this.id = id;
    }
    return User;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/dto/User.js.map