"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var social_media_1 = require("./social-media");
var ContactInfo = (function (_super) {
    __extends(ContactInfo, _super);
    function ContactInfo(email, git, twitter, facebook, linkedIn, cell) {
        var _this = _super.call(this, git, twitter, facebook, linkedIn) || this;
        _this.email = email;
        if (cell !== null) {
            _this.cell = cell;
        }
        return _this;
    }
    return ContactInfo;
}(social_media_1.SocialMedia));
exports.ContactInfo = ContactInfo;
//# sourceMappingURL=contact-info.js.map