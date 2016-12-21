// var robot1 = new BattleDome.Fighters.Robot();
// var robot2 = new BattleDome.Fighters.Robot();
  var robot1;
  var robot2;
var selectedR1;
var selectedR2;

$("#toBattle").click((e) => {

   robot1 = new BattleDome.Fighters[selectedR1];
   robot2 = new BattleDome.Fighters[selectedR2];

   console.log(robot1);
   console.log(robot2);
});



  $("#selection1").change((e) => {
    selectedR1 = e.target.value;
    console.log(selectedR1);
  });

    $("#selection2").change((e) => {
      selectedR2 = e.target.value;
      console.log(selectedR2);
    });
