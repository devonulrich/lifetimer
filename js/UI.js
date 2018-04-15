var UI = (function() {

    var month, day, year;//holds VALID birthdate

    function populateSideDiv() {
        var side = document.getElementById("sideSection");
        for(var i = 0; i < 80; i++) {
            var box = document.createElement("div");
            box.className = "sideBox";
            //box.appendChild(document.createTextNode("Year " + i));

            var topBox = document.createElement("div");
            topBox.className = "topMiniBox";
            topBox.appendChild(document.createTextNode("Year " + i));
            box.appendChild(topBox);

            for(var j = 1; j < 365; j++) {
                var minibox = document.createElement("div");
                minibox.className = "miniBox";
                minibox.appendChild(document.createTextNode("Day " + (j + 1)));
                box.appendChild(minibox);
            }
            side.appendChild(box);
        }
    }

    function goBtnClick() {
        var monthBox = document.getElementById("month");
        var dayBox = document.getElementById("day");
        var yearBox = document.getElementById("year");
        
        var monthVal = parseInt(monthBox.value);
        var dayVal = parseInt(dayBox.value);
        var yearVal = parseInt(yearBox.value);

        //check if given birthdate is valid
        if(Logic.validateBDay(monthVal, dayVal, yearVal)) {
            //it is value - update the main divs and close the bday div
            month = monthVal;
            day = dayVal;
            year = yearVal;
            updateContentBoxes();
            showMainContent();
        } else {
            //invalid - make an error message appear
            showInvalidText();
        }

        return false;//prevents <a> from actually changing the URL
    }    

    function showMainContent() {
        var birthInput = document.getElementById("birthInput");
        birthInput.classList.add("disappearBDiv");

        var description = document.getElementById("description");
        description.classList.add("appearDescription");

        var container = document.getElementById("container");
        container.classList.add("appearMainContent");
    }

    function updateContentBoxes() {
        var totalHeight = 2803200;

        var secondsPast = Logic.getSecondsSinceBDay(month, day, year);
        var pastHeight = Math.floor(secondsPast / 900);

        document.getElementById("past").style.height = pastHeight + "px";
        document.getElementById("currentProgress").style.width = ((secondsPast % 900) - 1)
            + "px";
        document.getElementById("future").style.height = (totalHeight - 672 - pastHeight -1)
            + "px";

        setTimeout(updateContentBoxes, 1000);//repeat, constantly updating the divs
    }

    function showInvalidText() {
        var errorElem = document.getElementById("error");
        errorElem.classList.add("showText");
    }

    return {
        start: function() {
            populateSideDiv();

            var goBtn = document.getElementById("goButton");
            goBtn.onclick = goBtnClick;

            var lastBox = document.getElementById("year");
            lastBox.addEventListener("keyup", function(event) {
                event.preventDefault();
                if(event.keyCode === 13) {
                    goBtnClick();
                }
            });
        }
    };
})();

window.onload = UI.start;
