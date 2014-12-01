describe("Roll", function(){

  var roll;
  beforeEach(function() {
    roll = new Roll(null);
  });

  describe('basic properties', function(){

    it('should not have a knockdown count when initialized', function(){
      expect(roll.knockDownCount).toEqual(null);
    });

    it('should have a knockdown count after a play', function(){
      roll.play(7)
      expect(roll.knockDownCount).toEqual(7);
    });

    it('should not be played when initialised', function(){
      expect(roll.isPlayed()).toBe(false);
    })

    it('should show as played when played', function(){
      roll.play(7)
      expect(roll.isPlayed()).toBe(true);
    })

  });

});