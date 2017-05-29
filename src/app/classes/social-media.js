"use strict";
var SocialMedia = (function () {
    function SocialMedia(git, twitter, facebook, linkedIn) {
        if (git !== null) {
            this.git = git;
        }
        if (twitter !== null) {
            this.twitter = twitter;
        }
        if (facebook !== null) {
            this.facebook = facebook;
        }
        if (linkedIn !== null) {
            this.linkedIn = linkedIn;
        }
    }
    return SocialMedia;
}());
exports.SocialMedia = SocialMedia;
//# sourceMappingURL=social-media.js.map