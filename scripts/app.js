// jQuery Functions
$('#welcome-btn').on('click', function() {
    console.log()
    $('.welcome-scr').css('display', 'none');
    $('.animal').css('display', 'block');
})

$('#next-btn').on('click', function() {
    let userName = $('#name').val();
    $('.animal-name').text(`NAME: ${userName}`);
    if (userName == '') {
        alert('Please enter a name.')
    } else {
        $('.animal').css('display', 'none')
        $('.gameplay').css('display', 'flex')
    }
    let animalChoice = $('#dropdown').val();
    if (animalChoice == 'Gorilla') {
        $('img').replaceWith('<img src="./images/clipart2148598.png" width="100px" height="100px" alt="Gorilla"></img>')
    }
    const animalImg = $('src').text
})

$('.new').on('click', function() {
    $('.gameplay').css('display', 'none')
    $('.welcome-scr').css('display', 'flex')
    $('#name').text();
})

// Animal Class
class Animal {
    constructor(name = 'Beast') {
        this.position = 'Running Back';
        this.highSchool = 'Jungle Academy'
        this.college = 'Grasslands University'
        this.pros = ''
        this.age = 18;
        this.boredom = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        // this.name = userName;
    }
    eat() {
        this.hunger--;
        return `${this.name}'s hunger is now at ${this.hunger}.`
    }
    exercise() {
        this.boredom--;
        return `${this.name}'s hunger is now at ${this.boredom}.`
    }
    sleep() {
        this.sleepiness--;
        return `${this.name}'s hunger is now at ${this.sleepiness}.`
    }
}

// Gorilla, Lion and Rhino Classes and instances
class Gorilla extends Animal {
    constructor(name, number) {
        super(name, number)
    }
}

const gorillaPlayer = new Gorilla();
console.log(gorillaPlayer);

// cached elements
// const animalScr = document.querySelector('.animal');
// const finishBtn = document.querySelector('#next-btn');
// const newGame = document.querySelector('.new')

// event listeners


// newGame.addEventListener('click', function() {
//     welcomeScr.style.display = 'block';
//     showGame.style.display = 'none';
// })


// userName.addEventListener('click', function() {
//     getUserName();
//     console.log(getUserName);
// })

// animalChoice.addEventListener('click', function() {
//     Element.classList.add('show');
//     animalChoice.style.display = 'block';
// })

// function getUserName() {
//     let userName = document.querySelector('#name').value;
//     console.log(userName);
// }



