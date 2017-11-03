/**
 * @namespace MuseumNameSpace [This namespace holds all the information and functions related to a museum]
 */
namespace MuseumNameSpace {
    
    /**
     * @interface Museum [This interface is used to store a museum information]
     * @param {string} name [This property represents the name of the museum]
     * @param {string} location [This property represents the location of the museum]
     * @param {string} type [This property represents the type of the museum]
     * @param {number} established [This property tells when the museum was established]
     */
    export interface Museum {
    
        name: string;
        location: string;
        type: string;
        established: number;
    
    }
    
    /**
     * @function museumDetails [This function displays the museum details onto the console]
     * @param {Museum} museum [The Museum type property is passed]
     * @return [no return value]
     */
    export function museumDetails(museum: Museum): void {
    
        let message: string = `\nMuseum Details:\nName: ${museum.name}\nLocation: ${museum.location}\nType: ${museum.type}\nEstablished: ${museum.established}`;
    
        console.log ( message );
    
    }
    
}