/**
 * @namespace MuseumNameSpace [This namespace holds all the information and functions related to a museum]
 */
var MuseumNameSpace;
(function (MuseumNameSpace) {
    /**
     * @function museumDetails [This function displays the museum details onto the console]
     * @param {Museum} museum [The Museum type property is passed]
     * @return [no return value]
     */
    function museumDetails(museum) {
        var message = "\nMuseum Details:\nName: " + museum.name + "\nLocation: " + museum.location + "\nType: " + museum.type + "\nEstablished: " + museum.established;
        console.log(message);
    }
    MuseumNameSpace.museumDetails = museumDetails;
})(MuseumNameSpace || (MuseumNameSpace = {}));
/// <reference path="namespace.ts" />
// Creating the Museum type variable and populating it with values
var museum = { name: "HAL Aerospace Museum", location: "Bengaluru", type: "Aerospace", established: 2001 };
// Displaying the museum details
MuseumNameSpace.museumDetails(museum);
