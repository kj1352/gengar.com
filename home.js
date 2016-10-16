/*global $*/
var l;
$(document).ready(function () {
    'use strict';
    $.getJSON("1.json", function (result) {
        $.each(result, function (i, field) {
            for (i = 0; i <= field.length; i += 1) {
                $("#put").append(field[i].blog + "<br>");
                
            }
        });
    });
});
