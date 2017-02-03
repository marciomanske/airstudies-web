/**
 * Created by marciomanske on 2017-01-31.
 */
export var School = (function () {
    function School(id, name, document, contactName, contactPhone, contactEmail, discountMonths, discountAmount, registrationDate, active, city, state, country, postalCode, addressLine1, addressLine2, studentsPricingRules, schoolPricingRules, languages) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = null; }
        if (document === void 0) { document = null; }
        if (contactName === void 0) { contactName = null; }
        if (contactPhone === void 0) { contactPhone = null; }
        if (contactEmail === void 0) { contactEmail = null; }
        if (discountMonths === void 0) { discountMonths = null; }
        if (discountAmount === void 0) { discountAmount = null; }
        if (registrationDate === void 0) { registrationDate = null; }
        if (active === void 0) { active = 1; }
        if (city === void 0) { city = null; }
        if (state === void 0) { state = null; }
        if (country === void 0) { country = null; }
        if (postalCode === void 0) { postalCode = null; }
        if (addressLine1 === void 0) { addressLine1 = null; }
        if (addressLine2 === void 0) { addressLine2 = null; }
        if (studentsPricingRules === void 0) { studentsPricingRules = null; }
        if (schoolPricingRules === void 0) { schoolPricingRules = null; }
        if (languages === void 0) { languages = null; }
        this.id = id;
        this.name = name;
        this.document = document;
        this.contactName = contactName;
        this.contactPhone = contactPhone;
        this.contactEmail = contactEmail;
        this.discountMonths = discountMonths;
        this.discountAmount = discountAmount;
        this.registrationDate = registrationDate;
        this.active = active;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.studentsPricingRules = studentsPricingRules;
        this.schoolPricingRules = schoolPricingRules;
        this.languages = languages;
    }
    return School;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/dto/School.js.map