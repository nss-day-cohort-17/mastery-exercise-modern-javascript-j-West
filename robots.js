 var BattleDome = BattleDome || {};
 BattleDome.Fighters = {};


BattleDome.Fighters.Robot = function() {
  this.name = "";
  this.health = 0;
  this.damage = 0;
};


BattleDome.Fighters.Robot1 = function() {
  this.name = "robot1";
  this.health = 45;
  this.damage = 20;
  this.type = "Arial";
};

BattleDome.Fighters.Robot1.prototype = new BattleDome.Fighters.Robot();

BattleDome.Fighters.Robot1Model1 = function() {
  this.name = "robot1Model1";
  this.health = Math.floor(Math.random() * (80 - 45)) + 45;
  this.damage = Math.floor(Math.random() * (40 - 20)) + 20;
};

BattleDome.Fighters.Robot1Model1.prototype = new BattleDome.Fighters.Robot1();

BattleDome.Fighters.Robot1Model2 = function() {
  this.name = "robot1Model2";
  this.health = Math.floor(Math.random() * (70 - 45)) + 45;
  this.damage = Math.floor(Math.random() * (50 - 20)) + 20;
};

BattleDome.Fighters.Robot1Model2.prototype = new BattleDome.Fighters.Robot1();


BattleDome.Fighters.Robot2 = function() {
  this.name = "robot2";
  this.health = 40;
  this.damage = 25;
  this.type = "Ground";
};

BattleDome.Fighters.Robot2.prototype = new BattleDome.Fighters.Robot();

BattleDome.Fighters.Robot2Model1 = function() {
  this.name = "robot2Model1";
  this.health = Math.floor(Math.random() * (90 - 40)) + 40;
  this.damage = Math.floor(Math.random() * (30 - 25)) + 25;
};

BattleDome.Fighters.Robot2Model1.prototype = new BattleDome.Fighters.Robot2();

BattleDome.Fighters.Robot2Model2 = function() {
  this.name = "robot2Model2";
  this.health = Math.floor(Math.random() * (60 - 40)) + 40;
  this.damage = Math.floor(Math.random() * (50 - 25)) + 25;
};

BattleDome.Fighters.Robot2Model2.prototype = new BattleDome.Fighters.Robot2();


BattleDome.Fighters.Robot3 = function() {
  this.name = "robot3";
  this.health = 50;
  this.damage = 15;
  this.type = "Water";
};

BattleDome.Fighters.Robot3.prototype = new BattleDome.Fighters.Robot();


BattleDome.Fighters.Robot3Model1 = function() {
  this.name = "robot3Model1";
  this.health = Math.floor(Math.random() * (60 - 50)) + 50;
  this.damage = Math.floor(Math.random() * (90 - 15)) + 15;
};

BattleDome.Fighters.Robot3Model1.prototype = new BattleDome.Fighters.Robot3();

BattleDome.Fighters.Robot3Model2 = function() {
  this.name = "robot3Model2";
  this.health = Math.floor(Math.random() * (80 - 50)) + 50;
  this.damage = Math.floor(Math.random() * (80 - 15)) + 15;
};

BattleDome.Fighters.Robot3Model2.prototype = new BattleDome.Fighters.Robot3();
