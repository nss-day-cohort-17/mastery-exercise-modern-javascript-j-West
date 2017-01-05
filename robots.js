 var BattleDome = BattleDome || {};
 BattleDome.Fighters = {};


BattleDome.Fighters.Robot = function() {
  this.name = "";
  this.health = 0;
  this.damage = 0;
};


BattleDome.Fighters.D7R2 = function() {
  this.name = "D7R2";
  this.health = 45;
  this.damage = 20;
  this.type = "Arial";
};

BattleDome.Fighters.D7R2.prototype = new BattleDome.Fighters.Robot();

BattleDome.Fighters.D7R2_Alpha = function() {
  this.name = "D7R2_Alpha";
  this.health = Math.floor(Math.random() * (80 - 45)) + 45;
  this.damage = Math.floor(Math.random() * (40 - 20)) + 20;
};

BattleDome.Fighters.D7R2_Alpha.prototype = new BattleDome.Fighters.D7R2();

BattleDome.Fighters.D7R2_Bravo = function() {
  this.name = "D7R2_Bravo";
  this.health = Math.floor(Math.random() * (70 - 45)) + 45;
  this.damage = Math.floor(Math.random() * (50 - 20)) + 20;
};

BattleDome.Fighters.D7R2_Bravo.prototype = new BattleDome.Fighters.D7R2();


BattleDome.Fighters.B3B0 = function() {
  this.name = "B3B0";
  this.health = 40;
  this.damage = 25;
  this.type = "Ground";
};

BattleDome.Fighters.B3B0.prototype = new BattleDome.Fighters.Robot();

BattleDome.Fighters.B3B0_Alpha = function() {
  this.name = "B3B0_Alpha";
  this.health = Math.floor(Math.random() * (90 - 40)) + 40;
  this.damage = Math.floor(Math.random() * (30 - 25)) + 25;
};

BattleDome.Fighters.B3B0_Alpha.prototype = new BattleDome.Fighters.B3B0();

BattleDome.Fighters.B3B0_Bravo = function() {
  this.name = "B3B0_Bravo";
  this.health = Math.floor(Math.random() * (60 - 40)) + 40;
  this.damage = Math.floor(Math.random() * (50 - 25)) + 25;
};

BattleDome.Fighters.B3B0_Bravo.prototype = new BattleDome.Fighters.B3B0();


BattleDome.Fighters.T2D8 = function() {
  this.name = "T2D8";
  this.health = 50;
  this.damage = 15;
  this.type = "Water";
};

BattleDome.Fighters.T2D8.prototype = new BattleDome.Fighters.Robot();


BattleDome.Fighters.T2D8_Alpha = function() {
  this.name = "T2D8_Alpha";
  this.health = Math.floor(Math.random() * (60 - 50)) + 50;
  this.damage = Math.floor(Math.random() * (90 - 15)) + 15;
};

BattleDome.Fighters.T2D8_Alpha.prototype = new BattleDome.Fighters.T2D8();

BattleDome.Fighters.T2D8_Bravo = function() {
  this.name = "T2D8_Bravo";
  this.health = Math.floor(Math.random() * (80 - 50)) + 50;
  this.damage = Math.floor(Math.random() * (80 - 15)) + 15;
};

BattleDome.Fighters.T2D8_Bravo.prototype = new BattleDome.Fighters.T2D8();
