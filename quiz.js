var robot1;
var robot2;
var selectedR1 = "";
var selectedR2 = "";
var flag = 0;

function healthChecks(robot) {
  if (robot.health <= 0) {
    $(".firstView").toggle();
    $("#toBattle").toggle();
    $("h2").toggle();
    $("#toBattle").attr("disabled", "disabled");
    return false;
  } else return true;
}

function inputCheck() {
  if (selectedR1 !== "" && selectedR2 !== "") {
    $("#toBattle").removeAttr("disabled");

  }
}

$("#selection1").change((e) => {
  selectedR1 = e.target.value;
  inputCheck();
  console.log(selectedR1);
});

$("#selection2").change((e) => {
  selectedR2 = e.target.value;
  inputCheck();
  console.log(selectedR2);
});


$("#toBattle").click((e) => {
  if ($("#robot1").val() === "" || $("#robot2").val() === "") {
    alert("Just kidding, please enter a name for each robot before continuing");
    return;
  }
  if (flag === 0) {
    $(".robot-example").toggle();

    robot1 = new BattleDome.Fighters[selectedR1];
    robot2 = new BattleDome.Fighters[selectedR2];

    robot1.playerName = $("#robot1").val();
    robot2.playerName = $("#robot2").val();

    $("#toBattle").text("Attack!");

    $("h1").first().html(robot1.playerName + " Health: " + robot1.health);
    $("h1").last().html(robot2.playerName + " Health: " + robot2.health);

    flag++;

  }else {
    $("h1").first().html(robot1.playerName + " Health: " + (robot1.health -= robot2.damage));

    if (!healthChecks(robot1)) {
      $("h1").first().html(robot1.playerName + " Health: 0");
      $("h2").html(`${robot2.playerName}, a ${robot2.name} robot defeated ${robot1.playerName}, a ${robot1.name} robot`);
      return;
    }

    $("h1").last().html(robot2.playerName + " Health: " + (robot2.health -= robot1.damage));

      if (!healthChecks(robot2)) {
        $("h1").last().html(robot2.playerName + " Health: 0");
        $("h2").html(`${robot1.playerName}, a ${robot1.name} robot defeated ${robot2.playerName}, a ${robot2.name} robot`);
        return;
      }
  }
});
