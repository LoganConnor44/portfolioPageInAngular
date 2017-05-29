"use strict";
var Occupation = (function () {
    function Occupation(name, position, startDate, endDate) {
        this.name = name;
        this.position = position;
        this.startDate = startDate;
        if (endDate !== null) {
            this.endDate = endDate;
        }
    }
    return Occupation;
}());
exports.Occupation = Occupation;
//# sourceMappingURL=occupation.js.map