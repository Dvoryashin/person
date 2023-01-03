window.onload = function()
{
    const randomSe = personGenerator.randomIntNumber();
    document.getElementById('genderOutput').innerText = randomSe ? personGenerator.GENDER_MALE : personGenerator.GENDER_FEMALE;

    if(randomSe){
        const randomSurname = personGenerator.randomSurname();
        document.getElementById('surnameOutput').innerText = randomSurname;
        document.querySelector('.card-header').style.border = "0.5vw solid #20a0d9";
        const initPerson = personGenerator.getPerson();
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    }
    else{
        const randomSurname = personGenerator.randomSurname();
        document.getElementById('surnameOutput').innerText = randomSurname + "a";
        document.querySelector('.card-header').style.border = "0.5vw solid#a39ce9"
        const initPersonFe = personGenerator.getPersonFe();
        document.getElementById('firstNameOutput').innerText = initPersonFe.firstName;
    }

    const randomAge = personGenerator.randomAge();
    document.getElementById('birthYearOutput').innerText = 'Возвраст: ' + randomAge;
};