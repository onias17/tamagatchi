// Global variables
let startTime = 0;
let time = 0;
let animalChoice;
let userName = $('#name').val(); 
let randNum = Math.floor(Math.random() * (2) + 2);
let timer;
let gameOver = function() {
    if(currentAniaml.hunger === 10) {
        clearInterval(timer);
        $('#move').css('animation-duration', '0s')
        alert(`GAME OVER!\n\n${userName} became too hungry and died of starvation.`)
        return;
    } else if(currentAniaml.sleepiness === 10) {
        clearInterval(timer);
        $('#move').css('animation-duration', '0s')
        alert(`GAME OVER!\n\n${userName} became too tired and died of sleep exhaustion.`);
        return;
    } else if(currentAniaml.boredom === 10) {
        clearInterval(timer);
        $('#move').css('animation-duration', '0s')
        alert(`GAME OVER!\n\n${userName} became too bored and died of isanity.`);
        return;
    }
}

const startTimer = function() {
    timer = setInterval(function() {
        time++;
        gameOver();
        if(time % 5 === 0) {
            currentAniaml.boredom++;
            $('.boredom').text(`Boredom: ${currentAniaml.boredom}`);
            if(currentAniaml.hunger < 11){
                currentAniaml.hunger++;
            }
            $('.hunger').text(`Hunger: ${currentAniaml.hunger}`);
            if(currentAniaml.sleepiness < 11){
                currentAniaml.sleepiness++;
            }
            $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`)
        }
        if(time % 10 === 0){
            currentAniaml.age++;
            $('.animal-age').text(`Age: ${currentAniaml.age}`)
        }
        if(currentAniaml.age === 4){
            if (animalChoice === 'gorilla') {
                $('img').replaceWith('<img src="./images/pngwave.png" width="100px" height="100px" alt="Gorilla">')
            } else if(animalChoice == 'lion') {
                $('img').replaceWith('<img src="./images/toppng.com-lions-vector-animated-clip-art-of-lions-612x928.png" width="100px" height="100px" alt="Lion">')
            } else if(animalChoice == 'rhino') {
                $('img').replaceWith('<img src="./images/pngegg.png" width="100px" height="100px" alt="Rhino">')
            }
        }
        if(currentAniaml.age === 7){
            if (animalChoice === 'gorilla') {
                $('img').replaceWith('<img src="./images/pngfuel.com.png" width="100px" height="100px" alt="Gorilla">')
            } else if(animalChoice == 'lion') {
                $('img').replaceWith('<img src="./images/kissclipart-brisbane-lions-clipart-brisbane-lions-2e26870991820eb0.png" width="100px" height="100px" alt="Lion">')
            } else if(animalChoice == 'rhino') {
                $('img').replaceWith('<img src="././images/kisspng-leeds-rhinos-rugby-europe-international-championsh-football-theme-5b36233beec270.444725551530274619978.png" width="100px" height="100px" alt="Rhino">')
            }
        }
        $('.time').text(`Time: ${time}s`);
    }, 1000);
};

// Animal Class and instance
class Animal {
    constructor() {
        this.age = 1;
        this.boredom = 0;
        this.hunger = 0;
        this.sleepiness = 0;
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
    if(currentAniaml.hunger === 1) {
        currentAniaml.hunger--;
        $('.hunger').text(`Hunger: ${currentAniaml.hunger}`)
        currentAniaml.sleepiness++;
        $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`);
    } else if(currentAniaml.hunger >= 2 && currentAniaml.hunger <= 10) {
        currentAniaml.hunger -= 2;
        $('.hunger').text(`Hunger: ${currentAniaml.hunger}`)
        currentAniaml.sleepiness++;
        $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`);
    } else {
        return;
    }
    $('body').css('background', 'rgb(135, 206, 235)');
})

$('#exercise').on('click', function() {
    if(currentAniaml.boredom === 1) {
        currentAniaml.boredom--;
        $('.boredom').text(`Boredom: ${currentAniaml.boredom}`)
        currentAniaml.hunger++;
        $('.hunger').text(`Hunger: ${currentAniaml.hunger}`);
    } else if(currentAniaml.boredom >= 2 && currentAniaml.boredom <= 10) {
        currentAniaml.boredom -= 2;
        $('.boredom').text(`Boredom: ${currentAniaml.boredom}`)
        currentAniaml.hunger++;
        $('.hunger').text(`Hunger: ${currentAniaml.hunger}`);
    } else {
        return;
    }
    $('body').css('background', 'rgb(135, 206, 235)')
})

$('#sleep').on('click', function() {
    if(currentAniaml.sleepiness === 1) {
        currentAniaml.sleepiness--;
        $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`)
        currentAniaml.boredom++;
        $('.boredom').text(`Boredom: ${currentAniaml.boredom}`);
    } else if(currentAniaml.sleepiness >= 2 && currentAniaml.sleepiness <= 10) {
        currentAniaml.sleepiness -= 2;
        $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness}`)
        currentAniaml.boredom++;
        $('.boredom').text(`Boredom: ${currentAniaml.boredom}`);
    } else {
        return;
    }
    $('body').css('background', 'rgb(43, 47, 119)')

})

// New Game
$('.new').on('click', function() {
    $('.gameplay').css('display', 'none')
    $('body').css('background', 'rgb(135, 206, 235)')
    clearInterval(timer)
    time = 0;
    $('.time').text(`Time: ${time}s`);
    $('.welcome-scr').css('display', 'flex')
    $('#name').val('');
    $('#dropdown').val('');
    $('.animal-age').text(`Age: ${currentAniaml.age = 1}`)
    $('.boredom').text(`Boredom: ${currentAniaml.boredom = 0}`);
    $('.hunger').text(`Hunger: ${currentAniaml.hunger = 0}`);
    $('.sleepiness').text(`Sleepiness: ${currentAniaml.sleepiness = 0}`);
})


