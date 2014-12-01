function Roll(knockDownCount) {
  this.knockDownCount = null;
}

Roll.prototype.play = function(pinsKnockedDown) {
  this.knockDownCount = pinsKnockedDown;
};

Roll.prototype.isPlayed = function() {
  return (this.knockDownCount !== null)
}