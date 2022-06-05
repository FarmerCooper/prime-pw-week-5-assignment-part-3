console.log('***** Music Collection *****')

collection = [];

function addToCollection(title, artist, yearPublished){
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    return collection.push(title, artist, yearPublished);
}

const bobDylan1964 = new addToCollection("The Times They Are A-Changin'", "Bob Dylan", 1964);

console.log("Bob Dylan 1964 Album returned", collection);

const bobDylan1966 = new addToCollection("Blood On The Tracks", "Bob Dylan", 1966);

console.log("Bob Dylan 1966 album added", collection);

const jimmyHendrix1968 = new addToCollection("Electric Ladyland", "Jimmy Hendrix", 1968);
const jimmyHendrix1967 = new addToCollection("Axis: Bold as Love", "Jimmy Hendrix", 1967);

const ledZeppelin1975 = new addToCollection("Physical Graffiti", "Led Zeppelin", 1975);
const ledZeppelin1969 = new addToCollection("Led Zeppelin II", "Led Zeppelin", 1969);

console.log("Four more albums added", collection);

function showCollection (array){
    console.log(array.length);
    for (const key in array) {
        //let key = `${array.title} + ${array.artist} + ${array.yearPublished}`;
        console.log(`${key}: ${array[key]}`);
    }
}

//function showCollection (array){
    //console.log(array.length)
   // for (let i=0; i<array.length; i++){
        //return console.log(this.title, this.artist, this.yearPublished);
     //}
 //}

//function showCollection (array) {
    //console.log(array.length);
    //let newArrangement = array.title + " by " + array.artist + "," + array.yearPublished;
    //for (let i=0; i<array.length; i++){
        //return console.log(newArrangement);
    //}
//}
//function showCollection (obj) {
    //console.log(array.length);
    //for (const key in obj) {
        //let newArrangement = obj.title + " by " + obj.artist + "," + obj.yearPublished;
        //return console.log(newArrangement);
    //}
//}


showCollection(collection);


//function findByArtist (string, array) {
    //let matchingArtists = [];
    //for (let i=0; i<array.length; i++){
        //if (array[i].artist === string){
            //return matchingArtists.push(string);
        //}
    //} 
           // return matchingArtists;
//}

function findByArtist (string, obj){
    let matchingArtists = [];
    for (const key in obj) {
        if (key === obj.artist){
            return matchingArtists.push(string);
        }
    }
            return matchingArtists;
}

console.log('Should have the artist in the array', findByArtist("Bob Dyland", collection));
console.log('Should be empty', findByArtist("CCW", collection));
