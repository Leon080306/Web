$(document).ready(function () {
    $("div").hide();
    let a = -1;
    $("#button").click(function () {
        a = a * -1;
        if (a == -1) {
            $("#a1").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a1").hide();
            })

            $("#a2").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a2").hide();
            })

            $("#a3").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a3").hide();
            })

            $("#a4").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a4").hide();
            })

            $("#a5").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a5").hide();
            })

            $("#a6").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a6").hide();
            })

            $("#a7").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a7").hide();
            })

            $("#a8").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a8").hide();
            })

            $("#a9").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a9").hide();
            })

            $("#a10").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a10").hide();
            })

            $("#a11").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a11").hide();
            })

            $("#a12").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a12").hide();
            })

            $("#a13").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a13").hide();
            })

            $("#a14").animate({
                left: "45%",
                top: "50%"
            }, 750, function() {
                $("#a14").hide();
            })
        }


        else {
            $("#a1").show();
            $("#a1").animate({
                top: "20%", 
                left: "45%"
            }, 250, function () {
                $("#a2").show();
                $("#a2").animate({
                    top: "10%", 
                    left: "60%"
                }, 250, function () {
                    $("#a3").show();
                    $("#a3").animate({
                        top: "0%", 
                        left: "75%"
                    }, 250, function () {
                        $("#a4").show();
                        $("#a4").animate({
                            top: "10%", 
                            left: "90%"
                        }, 250, function () {
                            $("#a5").show();
                            $("#a5").animate({
                                top: "25%", 
                                left: "80%"
                            }, 250, function () {
                                $("#a6").show();
                                $("#a6").animate({
                                    top: "40%", 
                                    left: "70%"
                                }, 250, function () {
                                    $("#a7").show();
                                    $("#a7").animate({
                                        top: "55%", 
                                        left: "60%"
                                    }, 250, function () {
                                        $("#a8").show();
                                        $("#a8").animate({
                                            top: "70%", 
                                            left: "45%"
                                        }, 250, function () {
                                            $("#a9").show();
                                            $("#a9").animate({
                                                top: "55%", 
                                                left: "30%"
                                            }, 250, function () {
                                                $("#a10").show();
                                                $("#a10").animate({
                                                    top: "40%", 
                                                    left: "20%"
                                                }, 250, function () {
                                                    $("#a11").show();
                                                    $("#a11").animate({
                                                        top: "25%", 
                                                        left: "10%"
                                                    }, 250, function () {
                                                        $("#a12").show();
                                                        $("#a12").animate({
                                                            top: "10%", 
                                                            left: "0%"
                                                        }, 250, function () {
                                                            $("#a13").show();
                                                            $("#a13").animate({
                                                                top: "0%", 
                                                                left: "15%"
                                                            }, 250, function () {
                                                                $("#a14").show();
                                                                $("#a14").animate({
                                                                    top: "10%", 
                                                                    left: "30%"
                                                                }, 250);
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }       
    })
})
