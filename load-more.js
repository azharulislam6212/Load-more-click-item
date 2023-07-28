  var S = $(".load-more-item"), k = $(".load-more"), y = S.length;
        S.hide(), y > 3 && k.show(), k.length && k.on("click", function () {
            var t = S.filter(":visible").length;
            S.slice(t - 0, t + 3).fadeIn(), S.filter(":visible").length >= y && k.hide();
        });
