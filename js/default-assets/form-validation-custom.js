! function(e) {
    "use strict";
     e(function() {
        e("#signupForm").validate({
            rules: {
                fullname: "required"
            },
            messages: {
                fullname: "Please enter your firstname"
            },
        })
    })
}(jQuery);
