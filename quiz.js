// var robot1 = new BattleDome.Fighters.Robot();
// var robot2 = new BattleDome.Fighters.Robot();
var robot1;
var robot2;
var selectedR1 = "";
var selectedR2 = "";
var flag = 0;

function healthChecks(robot) {
  if (robot.health <= 0) {
    $(".firstView").toggle();
    $(".jumbotron").toggle();
    $("#toBattle").attr("disabled", "disabled");
    return false;
  } else return true;
}


$("#toBattle").click((e) => {
  if ($("#robot1").val() === "" || $("#robot2").val() === "") {
    alert("Just kidding, please enter a name for each robot before continuing");
    return;
  }
  if (flag === 0) {
    $(".robot-example").toggle();

    robot1 = new BattleDome.Fighters[selectedR1];
    robot2 = new BattleDome.Fighters[selectedR2];
    $("#toBattle").text("Attack!");
    $("h3").first().html("Robot1 Health: " + robot1.health);
    $("h3").last().html("Robot2 Health: " + robot2.health);
    flag++;

    }

});

function inputCheck() {
  if (selectedR1 !== "" && selectedR2 !== "") {
    $("#toBattle").removeAttr("disabled")
  }
}

  $("#selection1").change((e) => {
    selectedR1 = e.target.value;
    inputCheck()
    console.log(selectedR1);
  });

    $("#selection2").change((e) => {
      selectedR2 = e.target.value;
      inputCheck()
      console.log(selectedR2);
    });
