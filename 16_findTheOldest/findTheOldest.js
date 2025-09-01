// Function to get the object with oldest person
const findTheOldest = function(arrPeople)
{
    return arrPeople.reduce((objOldstPrsn, objCrrntPrsn) =>
    {
        // First value will be the oldest person, for now.
        if(Object.keys(objOldstPrsn).length === 0)
        {
            return objCrrntPrsn;
        }

        // Function to get the age of a person
        function getAge(objPrsn)
        {
            if('yearOfDeath' in objPrsn)
            {
                return objPrsn.yearOfDeath - objPrsn.yearOfBirth;
            }

            // If person is alive, get current age
            const dtCurrent = new Date();
            const dtCurrYear = dtCurrent.getFullYear();
            return dtCurrYear - objPrsn.yearOfBirth;
        }
        
        const intOldestAge = getAge(objOldstPrsn);
        const intCurrentAge = getAge(objCrrntPrsn);

        return (intOldestAge > intCurrentAge)?
            objOldstPrsn:
            objCrrntPrsn;
    }, {});
};

const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

console.log( findTheOldest(people)["name"] );

// Do not edit below this line
module.exports = findTheOldest;
