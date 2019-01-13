// parent class ////////////////////////////////////

class School {
    constructor(name, numberOfStudents, level) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    
    get name() { return this._name; }
    get level() { return this._level; }
    get numberOfStudents() { return this._numberOfStudents; }
    
    set numberOfStudents(num) {
        if (typeof num === 'number' && num >= 0) {
          this._numberOfStudents = num;
        }else {
          return console.log('Please enter a number.')}}
    
    quickFacts() {
      return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`;
    }
    
    // take in array of subs, return random sub
    static pickSubstituteTeacher(substituteTeachers) {
      let rando = Math.floor( Math.random()*(substituteTeachers.length - 1));
      return substituteTeachers[rando];
    }
    
  } 
  
  // primary child ////////////////////////////////////
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, numberOfStudents);
      this._level = 'primary';
      this._pickupPolicy = pickupPolicy;
    }
    
    get pickupPolicy() { return this._pickupPolicy; }
  }
  
  // middle child ////////////////////////////////////
  
  class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
      super(name, numberOfStudents);
      this._level = 'middle';
    }
  }
  
  // high child /////////////////////////////////////
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, numberOfStudents);
      this._level = 'high';
      this._sportsTeams = sportsTeams;
    }
    
    get sportsTeams() { return this._sportsTeams; }
    
    addSportsTeam() {}
  }
  
  // create primary school instance
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  console.log(lorraineHansbury.quickFacts());
  
  // create high school instance, print test
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.quickFacts());
  console.log(alSmith.sportsTeams);
  
  // create list of subs, print random sub
  let subs = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  console.log(School.pickSubstituteTeacher(subs));
  
  /* TO DO
  > Add more properties to each class (averageTestScores, schoolOverview, etc.)
  > Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.
  */