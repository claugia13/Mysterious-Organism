// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
console.log('mockUpStrand: ' + mockUpStrand());

// Returns an object that contains the properties specimenNum and dna
const pAequorFactory = (number, array) => {
    return{
    specimenNum: number,
    dna: array,
    mutate() {
const randDnaBase = returnRandBase(); // call returnRandBase function to select a random base and assign to variable randDnaBase
  const randBaseIndex = this.dna.indexOf(randDnaBase); // find the first index where the random base appears in the strand
var newRandBase;
do {
  newRandBase = returnRandBase(); // call returnRandBase  function again to find new random base to assign in place of the old one and assign this to variable newRandBase
console.log('newRandBase 1: ' + newRandBase);
} while (newRandBase === randDnaBase); //checks if the newRandom base is the same as the old one and calls returnRandBase function again to replace it if it is
 console.log('newRandBase 2: ' + newRandBase);
if (randBaseIndex !== -1) {
    this.dna[randBaseIndex] = newRandBase;
} // replaces old base in the dna array  with the new randomly selected one
    return this.dna; // returns the new dna array
    }, // end of mutate() method
    
// compares two different pAequor dna strands and logs the % dna they have in common to the console
    compareDNA(pAequorObject){
      for (i=0; i<this.dna.length; i++){
        let count = 0;
        if (this.dna[i] === pAequorObject.dna[i]){ // compares each index of both objects to each other to see if they are equal
          count++; //increases count variable by 1 every time the dna bases in the two compared objects are equal
        }
      }
    let commonDna = ((count/pAequorObject.dna.length)*100).toFixed(2); //calculates the percentage of common dna between the two object arrays
    return console.log('Specimen #' + this.specimenNum + ' and specimen #' + pAequorObject.specimenNum + ' have ' + commonDna + '% DNA in common.');
   }, // end of compareDNA() method

   willLikelySurvive(){
    let cBaseCount = 0;
     let gBaseCount = 0;
     for (i=0; i<this.dna.length; i++){
       if (this.dna[i] === 'C'){
         cBaseCount++;
       }
       if (this.dna[i] === 'G'){
         gBaseCount++;
       }
     }
    const survivalPercentage = (((cBaseCount + gBaseCount)/this.dna.length) * 100).toFixed(2);
    if (survivalPercentage >= 60){
      return true;
    } else {
      return false;
    } console.log('willLikelySurvive: ' + this.willLikelySurvive());
   } // end of willLikelySurvive function
  }; // end of return  
}; // end of pAequor factory function

const survivingPAequor = [];
let pAequorCount = 0;

  let objectNum = 1;
  while (survivingPAequor.length < 30) {
  let newObject = pAequorFactory(objectNum, mockUpStrand());
  if (newObject.willLikelySurvive() === true){
survivingPAequor.push(newObject);
  }
pAequorCount++;
}
  console.log('pAequors that will likely survive: ' + survivingPAequor);









