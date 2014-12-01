function Frame() {
  this.rolls = [new Roll(null), new Roll(null)];
}

Frame.prototype.isStrike = function() {
  return this.rolls[0].knockDownCount === 10;
};

Frame.prototype.isSpare = function() {
  return (this.rolls[0].knockDownCount + this.rolls[1].knockDownCount)=== 10;
};

