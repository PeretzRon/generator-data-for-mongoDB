const {getNames} = require("./names");
const {getLocations} = require("./location");

const emailDomain = ['@gmail.com', '@yahoo.com', '@walla.com', '@nana10.com', '@outlook.com', '@hotmail.com', '@ars.uk', '@ddns.net'];
const emailSigns = ['-', '_', '.'];
const hobbiesList = ['Sport', 'Camping', 'Hiking', 'Gardening', 'Playing an instrument', 'Nail art ', 'Origami',
    'Scrapbooks', 'Running', 'Dancing', 'Yoga', 'Rollerblading', 'Slacklining', 'Baking', 'Cooking', 'Handicraft'];

const professions = ['Math', 'French', 'Typing', 'Web design', 'Animation'];

const phoneNumberPrefix = ['050', '051', '052', '053', '054', '055', '057', '077'];

const generateEmail = (firstName, lastName) => {
    const random = getRandomNumberBetweenZeroTo(2);
    const domain = emailDomain[getRandomNumberBetweenZeroTo(emailDomain.length)];
    let email;
    if (random === 1) {
        email = `${firstName}${emailSigns[getRandomNumberBetweenZeroTo(emailSigns.length)]}${lastName}${getRandomNumberBetweenZeroTo(1000)}${domain}`;
    } else {
        email = `${lastName}${emailSigns[getRandomNumberBetweenZeroTo(emailSigns.length)]}${firstName}${getRandomNumberBetweenZeroTo(1000)}${domain}`;
    }
    return email;
};

const generateAge = () => {
    return getRandomNumberBetweenZeroTo(100) + 18;
};

const getRandomNumberBetweenZeroTo = maxNumber => {
    return Math.floor(Math.random() * maxNumber);
};

const generateHobbies = () => {
    const hobbiesAmount = getRandomNumberBetweenZeroTo(3) + 1;
    let hobbies = [];
    for (let i = 0; i < hobbiesAmount; i++) {
        hobbies.push(hobbiesList[getRandomNumberBetweenZeroTo(hobbiesList.length)]);
    }

    return hobbies;
};

const generateGender = () => {
    const rand = getRandomNumberBetweenZeroTo(2);
    return rand === 1 ? 'Male' : 'Female';
};

const generatePhoneNumber = () => {
    return +`${phoneNumberPrefix[getRandomNumberBetweenZeroTo(phoneNumberPrefix.length)]}${getRandomNumberBetweenZeroTo(9999999)}`;
};

const generateExamScores = () => {
    const examScores = [];
    const random = getRandomNumberBetweenZeroTo(professions.length);
    for (let i = 0; i < random; i++) {
        const name = professions[getRandomNumberBetweenZeroTo(professions.length)];
        if (!examScores.some(e => e.name === name)) {
            examScores.push({
                name,
                score: getRandomNumberBetweenZeroTo(100) + 1
            });
        }
    }
    return examScores;
};

const generateData = async (numberOfDocuments) => {
    let persons = [];
    const names = await getNames();
    const locations = await getLocations();
    for (let i = 0; i < numberOfDocuments; i++) {
        const firstName = names.firstNames[getRandomNumberBetweenZeroTo(names.firstNames.length)];
        const lastName = names.lastNames[getRandomNumberBetweenZeroTo(names.lastNames.length)];
        const user = {
            firstName,
            lastName,
            email: generateEmail(firstName, lastName),
            age: generateAge(),
            hobbies: generateHobbies(),
            gender: generateGender(),
            phoneNumber: generatePhoneNumber(),
            location: locations[getRandomNumberBetweenZeroTo(locations.length)],
            examScores: generateExamScores(),
        };
        persons.push(user);
    }
    return persons;
};

module.exports = {
    generateData
};
