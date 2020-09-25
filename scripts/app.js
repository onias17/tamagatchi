// Time Interval
let startTime = 60;
let time = 60;
let animalChoice;
let userName = $('#name').val(); 
let randNum = Math.floor(Math.random() * (4) + 2);
let timer;

const startTimer = function() {
    timer = setInterval(function() {
        if (time === 1){
            clearInterval(timer);
            alert('GAME OVER!')
        }
        time--;
        if(currentAniaml.hunger === 10) {
            clearInterval(timer);
            alert(`GAME OVER!\n\n${userName} became too hungry and died on the football field of lack on energy.`)
            return;
        } else if(currentAniaml.sleepiness === 10) {
            clearInterval(timer);
            alert(`GAME OVER!\n\n${userName} became too tired and died of sleep exhaustion.`);
            return;
        } else if(currentAniaml.boredom === 10) {
            clearInterval(timer);
            alert(`GAME OVER!\n\n${userName} became too bored of football and decided to quit.`);
            return;
        }
        if(time % 5 === 0) {
            currentAniaml.boredom++;
            $('.boredom').text(`Boredom: ${currentAniaml.boredom}`);
            currentAniaml.hunger++;
            $('.hunger').text(`Hunger: ${currentAniaml.hunger}`);
            currentAniaml.sleepiness++;
            $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`)
        }
        if(time % 10 === 0){
            currentAniaml.age++;
            $('.animal-age').text(`Age: ${currentAniaml.age}`)
        }
        $('.time').text(`Time: ${time}s`);
    }, 1000);
};

// Animal Class and instance
class Animal {
    constructor() {
        this.age = 1;
        this.boredom = Math.floor(Math.random() * (4) + 2);
        this.hunger = Math.floor(Math.random() * (4) + 2);
        this.sleepiness = Math.floor(Math.random() * (4) + 2);
    }
}

const currentAniaml = new Animal();

// Welcome Screen
$('#welcome-btn').on('click', function() {
    $('.welcome-scr').css('display', 'none');
    $('.animal').css('display', 'block');
})

// Animal Screen
$('#next-btn').on('click', function() {
    userName = $('#name').val();
    animalChoice = $('#dropdown').val();
    $('.animal-name').text(`NAME: ${userName}`);
    if (userName === '') {
        alert('Please enter a name.')
    } else if(animalChoice === '') {
        alert('Please choose an animal.')
    } else {$('.animal').css('display', 'none')
        $('.gameplay').css('display', 'flex')
        if (animalChoice === 'gorilla') {
            $('img').replaceWith('<img src="./images/clipart2148598.png" width="100px" height="100px" alt="Gorilla">')
        } else if(animalChoice == 'lion') {
            $('img').replaceWith('<img src="./images/PinClipart.com_philosopher-clipart_630927.png" width="100px" height="100px" alt="Lion">')
        } else if(animalChoice == 'rhino') {
            $('img').replaceWith('<img src="./images/pngfind.com-rhino-png-404993.png" width="100px" height="100px" alt="Rhino">')
        }
    }
    if(userName !== '' && animalChoice !== ''){
        startTimer();
    } 
    $('.boredom').text(`Boredom: ${currentAniaml.boredom}`);
    $('.hunger').text(`Hunger: ${currentAniaml.hunger}`);
    $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`);
})

// Gameplay Screen
$('#eat').on('click', function() {
    if (currentAniaml.hunger >= 1 && currentAniaml.hunger <= 10) {
        currentAniaml.hunger--;
        $('.hunger').text(`Hunger: ${currentAniaml.hunger}`) 
        currentAniaml.sleepiness++;
        $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`);
    }
    $('body').css('background', 'rgb(135, 206, 235)');
})

$('#exercise').on('click', function() {
    if (currentAniaml.boredom >= 1 && currentAniaml.boredom <= 10) {
        currentAniaml.boredom--;
        $('.boredom').text(`Boredom: ${currentAniaml.boredom}`) 
        currentAniaml.hunger++;
        $('.hunger').text(`Hunger: ${currentAniaml.hunger}`);
        currentAniaml.sleepiness++;
        $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`);
    }
    $('body').css('background', 'rgb(135, 206, 235)')
})

$('#sleep').on('click', function() {
    if (currentAniaml.sleepiness >= 1 && currentAniaml.sleepiness <= 10) {
        currentAniaml.sleepiness--;
        $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`)
        currentAniaml.hunger++;
        $('.hunger').text(`Hunger: ${currentAniaml.hunger}`);
    }   
    $('body').css('background', 'rgb(43, 47, 119)')

})

// New Game
$('.new').on('click', function() {
    $('.gameplay').css('display', 'none')
    $('body').css('background', 'rgb(135, 206, 235)')
    clearInterval(timer)
    time = 60;
    $('.time').text(`Time: ${time}s`);
    $('.welcome-scr').css('display', 'flex')
    $('#name').val('');
    $('#dropdown').val('');
    $('.boredom').text(`Boredom: ${currentAniaml.boredom = randNum}`);
    $('.hunger').text(`Hunger: ${currentAniaml.hunger = randNum}`);
    $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness = randNum}`);
})


