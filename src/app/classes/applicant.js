"use strict";
var education_1 = require("./education");
var occupation_1 = require("./occupation");
var contact_info_1 = require("./contact-info");
var Applicant = (function () {
    function Applicant(nameOfApplicant) {
        this.name = nameOfApplicant;
    }
    Applicant.prototype.setEducation = function (educationName, fieldOfStudy, gradYear, degreeType) {
        this.education = new education_1.Education(educationName, fieldOfStudy, gradYear, degreeType);
        return this;
    };
    Applicant.prototype.setOccupation = function (name, position, startDate, endDate) {
        this.occupation = new occupation_1.Occupation(name, position, startDate);
        if (endDate !== null) {
            this.occupation.endDate = endDate;
        }
        this.occupation.position = position;
        this.occupation.startDate = startDate;
        this.occupation.endDate = endDate;
        return this;
    };
    Applicant.prototype.setSkills = function (listOfSkills) {
        this.skills = listOfSkills;
        return this;
    };
    Applicant.prototype.setPortfolio = function (portfolioLinkAdress) {
        this.portfolio = portfolioLinkAdress;
        return this;
    };
    Applicant.prototype.setContactInfo = function (email, git, twitter, facebook, linkedIn, cell) {
        this.contactInfo = new contact_info_1.ContactInfo(email, git, twitter, facebook, linkedIn, cell);
        return this;
    };
    Applicant.prototype.generateArray = function () {
        return this.skills;
    };
    return Applicant;
}());
exports.Applicant = Applicant;
//# sourceMappingURL=applicant.js.map