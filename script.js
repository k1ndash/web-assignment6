$(document).ready(function () {
    console.log("jQuery is ready!");

    $("h1").css("letter-spacing", "0.3px");
    $("#greeting").text("Hello, I'm Tolendi Meiirzhan!");
    $(".highlight").css("color", "var(--accent)");

    $("#lightTheme").click(function () {
        $("body").removeClass("dark");
    });

    $("#darkTheme").click(function () {
        $("body").addClass("dark");
    });

    $("#hideAbout").click(function () {
        $("#aboutDetails").hide();
    });

    $("#showAbout").click(function () {
        $("#aboutDetails").show();
    });

    $("#toggleAbout").click(function () {
        $("#aboutDetails").toggle();
    });

    $("#hideImages").click(function () {
        $(".gallery-item").fadeOut(400);
    });

    $("#showImages").click(function () {
        $(".gallery-item").fadeIn(400);
    });

    $("#toggleImages").click(function () {
        $(".gallery-item").fadeToggle(400);
    });

    $(".slide-heading").click(function () {
        var panel = $(this).next(".slide-panel");
        $(".slide-panel").not(panel).slideUp(300);
        if (panel.is(":visible")) {
            panel.slideToggle(300);
        } else {
            panel.slideDown(300);
        }
    });

    $("#addSkill").click(function () {
        var skill = $("#skillInput").val().trim();
        if (skill !== "") {
            $("#skillList").append($("<li>").text(skill));
            $("#skillInput").val("");
        }
    });

    $("#prependSkill").click(function () {
        var skill = $("#skillInput").val().trim();
        if (skill !== "") {
            $("#skillList").prepend($("<li>").text(skill));
            $("#skillInput").val("");
        }
    });

    $("#removeSkill").click(function () {
        $("#skillList li").last().remove();
    });

    $("#changeLink").click(function () {
        var link = $("#socialLink");
        if (link.attr("href") === "https://github.com/k1ndash") {
            link.attr("href", "https://www.linkedin.com/in/мейиржан-толенди-349609251/");
            link.text("Visit LinkedIn");
        } else {
            link.attr("href", "https://github.com/k1ndash");
            link.text("Visit GitHub");
        }
    });

    $("#nameInput, #emailInput").on("input", function () {
        $("#previewName").text($("#nameInput").val());
        $("#previewEmail").text($("#emailInput").val());
    });

    var barsVisible = false;

    $("#animateSkills").click(function () {
        $(".bar-fill").each(function () {
            var width = barsVisible ? "0%" : $(this).attr("data-width");
            $(this).stop().animate({ width: width }, 800);
        });
        barsVisible = !barsVisible;
    });
});
