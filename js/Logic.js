var Logic = (function() {

    return {
        validateBDay: function(month, day, year) {
            //returns true if the given birthdate (int integers) is valid,
            //and false if it is not
            if(year < 1940) return false;

            var timestamp = Date.parse(month + "/" + day + "/" + year);
            if(isNaN(timestamp)) return false;
            if(timestamp > Date.now()) return false;//the given date is in the future

            return true;
        }
    };
})();
