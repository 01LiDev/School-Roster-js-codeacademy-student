class School {
  constructor(name,level,numberofStudents){
    this._name = name;
    this._level = level;
    this._numberofStudents = numberofStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberofStudents(){
    return this._numberofStudents;
  }
  set numberofStudent(value){
    if(typeof value === 'Number' ){
      this._numberofStudents = value;
    }else{
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  quickFacts(){
    console.log(`${this.name} educates ${this.numberofStudents} at the ${this.level} level.`)
  }
  static pickSubstituteTeacher(substituteTeachers){
    let randInt =Math.floor(Math.random() * substituteTeachers.length)
    return substituteTeachers[randInt];

  }
}
class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name, 'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;

  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}
class HighSchool extends School{
  constructor(name,numberOfStudents,sportsTeams){
    super(name, 'highschool',numberOfStudents);
    this._sportsTeams = sportsTeams;

  }
  get sportsTeams(){
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts() 
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alSmith =  new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeams)
