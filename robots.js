 var BattleDome = BattleDome || {};
 BattleDome.Fighters = {};


BattleDome.Fighters.Robot = function() {
  this.name = "";
  this.health = 0;
  this.damage = 0;
}


BattleDome.Fighters.Robot1 = function() {
  this.name = "robot1";
  this.health = 60-80;
  this.damage = 20-30;
}

BattleDome.Fighters.Robot1.prototype = new BattleDome.Fighters.Robot();

BattleDome.Fighters.Robot1Model1 = function() {
  this.name = "robot1Model1";
  this.health = 60-80;
  this.damage = 20-30;
}

BattleDome.Fighters.Robot1Model1.prototype = new BattleDome.Fighters.Robot1();

BattleDome.Fighters.Robot1Model2 = function() {
  this.name = "robot1Model2";
  this.health = 60-80;
  this.damage = 20-30;
}

BattleDome.Fighters.Robot1Model2.prototype = new BattleDome.Fighters.Robot1();


BattleDome.Fighters.Robot2 = function() {
  this.name = "robot2";
  this.health = 60-80;
  this.damage = 20-30;
}

BattleDome.Fighters.Robot2.prototype = new BattleDome.Fighters.Robot();

BattleDome.Fighters.Robot2Model1 = function() {
  this.name = "robot2Model1";
  this.health = 60-80;
  this.damage = 20-30;
}

BattleDome.Fighters.Robot2Model1.prototype = new BattleDome.Fighters.Robot2();

BattleDome.Fighters.Robot2Model2 = function() {
  this.name = "robot2Model2";
  this.health = 60-80;
  this.damage = 20-30;
}

BattleDome.Fighters.Robot2Model2.prototype = new BattleDome.Fighters.Robot2();


BattleDome.Fighters.Robot3 = function() {
  this.name = "robot3";
  this.health = 60-80;
  this.damage = 20-30;
}

BattleDome.Fighters.Robot3.prototype = new BattleDome.Fighters.Robot();


BattleDome.Fighters.Robot3Model1 = function() {
  this.name = "robot3Model1";
  this.health = 60-80;
  this.damage = 20-30;
}

BattleDome.Fighters.Robot3Model1.prototype = new BattleDome.Fighters.Robot3();

BattleDome.Fighters.Robot3Model2 = function() {
  this.name = "robot3Model2";
  this.health = 60-80;
  this.damage = 20-30;
}

BattleDome.Fighters.Robot3Model2.prototype = new BattleDome.Fighters.Robot3();
