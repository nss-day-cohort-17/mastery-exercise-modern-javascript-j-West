// var robot1 = new BattleDome.Fighters.Robot();
// var robot2 = new BattleDome.Fighters.Robot();
  var robot1;
  var robot2;
var selectedR1 = "";
var selectedR2 = "";
var flag = 0;

$("#toBattle").click((e) => {
  if (flag === 0) {
    $(".robot-example").toggle();

    robot1 = new BattleDome.Fighters[selectedR1];
    robot2 = new BattleDome.Fighters[selectedR2];
    $("#toBattle").text("Attack!");
    $("h3").first().html("Robot1 Health: " + robot1.health);
    $("h3").last().html("Robot2 Health: " + robot2.health);
    flag++;
    console.log(robot1);
    console.log(robot2);
 }else {
    if (robot1.health <= 0 || robot2.health <= 0) {
      
    }


    $("h3").first().html("Robot1 Health: " + (robot1.health -= robot2.damage));
    $("h3").last().html("Robot2 Health: " + (robot2.health -= robot1.damage));


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
