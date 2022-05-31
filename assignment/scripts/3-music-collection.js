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
    console.log(array.length)
    for (let i=0; i<array.length; i++){
       return console.log(array.sort(this.title, this.artist, this.yearPublished, '\r\n'));
    }
}

showCollection(collection);