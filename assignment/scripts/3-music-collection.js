console.log('***** Music Collection *****')

let collection = [], element = {};

function addToCollection(titleInput, artistInput, yearPublishedInput){
    element = {
        title: titleInput,
        artist: artistInput,
        yearPublished: yearPublishedInput
    }
    return collection.push(element);
}

const bobDylan1964 = new addToCollection ("The Times They Are A-Changin'", "Bob Dylan", 1964);

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
    for (const key of Object.keys(array)) {
        array = `${array.titleInput} by ${array.artistInput}, ${array.yearPublishedInput}`;
        console.log(JSON.stringify(array, null, 1));
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
//function showCollection (array) {
    //console.log(array.length);
    //for (const key in array) {
        //let newArrangement = title + " by " + artist + "," + yearPublished;
        //return console.log(newArrangement);
    //}
//}


showCollection(collection);

let matchingArtists = [];

function findByArtist (artistInput, array) {
    for (let i=0; i<array.length; i++){
        if (array[i].artist === artistInput){
            return matchingArtists.push(artistInput);
        }
    } 
        return matchingArtists;
}


console.log('Should be empty. Matching artist:', findByArtist("CCW", collection));
console.log('Should have the artist in the array', findByArtist("Bob Dylan", collection));
console.log('Matching artists:', matchingArtists);
console.log('Should have two artists in the array', findByArtist("Jimmy Hendrix", collection));
console.log('Matching artists:', matchingArtists);
