describe("About Objects", function () {

  describe("Properties", function () {
    var megalomaniac;
    // creates megalomaniac as var
    beforeEach(function () {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });
    // reassigns with beforeEach func

    it("should confirm objects are collections of properties", function () {
      expect(megalomaniac.mastermind).toBe('Joker');
    });

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe('Harley');
      expect(megalomaniac.henchWoman).toBe(undefined);
      // see capitalization of henchwoman vs. henchWoman -- camelCase is important!!
    });
  });


  it("should know properties that are functions act like methods", function () {
    var megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = megalomaniac.battleCry(4);
    expect('They are Pinky and the Brain Brain Brain Brain Brain').toMatch(battleCry);
    // returns joined string made of concats and iterated array items 
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2019);
    expect(megalomaniac.calculateAge()).toBe(49);
    // uses Date() keyword and subtraction to calc. this will always refer to what you're acting on. 
  });

  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(true);
      // in keyword will make sure that a prop is in an object.
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(false);
      // or in this case, making sure it doesn't have the prop. in checks props of objs basically
    });
  });

  it("should know that properties can be added and deleted", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith"; //adds prop .secretary here so next line is now true
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman; //removes prop .henchman here
    expect("henchman" in megalomaniac).toBe(false);
  });


  it("should use prototype to add to all objects", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      // next line is undefined bc simpleCircle doesn't have a colour prop, only colouredCircle does
      expect(simpleCircle.colour).toBe(undefined);
      expect(colouredCircle.colour).toBe('red');

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      // adds .describe to the Circle prototype func and uses concatenation to return below strings
    expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
    expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
  });
});
