const exercises = ['run', 'lift weights', 'practice'];
let userName = document.querySelector('#name');

// Animal Class
class Animal {
    constructor(name = 'Beast', number = '1') {
        this.position = 'Running Back';
        this.highSchool = 'Jungle Academy'
        this.college = 'Grasslands University'
        this.pros = ''
        this.age = 18;
        this.boredom = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.name = userName;
        this.number = number;
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
const welcomeBtn = document.getElementById('welcome-btn');
const welcomeScr = document.querySelector('.welcome');
const animalScr = document.querySelector('.animal');
const finishBtn = document.querySelector('#next-btn');
const newGame = document.querySelector('.new')

// event listeners
welcomeBtn.addEventListener('click', function() {
    welcomeScr.style.display = 'none';
    animalScr.style.display = 'block';
    console.log('click');
})

finishBtn.addEventListener('click', function() {
    animalScr.style.display = 'none';
    console.log('click');
    getUserName = userName.value;
    console.log(getUserName)
})

newGame.addEventListener('click', function() {
    welcomeScr.style.display = 'block';
    console.log('click');
})


userName.addEventListener('click', function() {
    getUserName();
    console.log(getUserName);
})

function getUserName() {
    let userName = document.querySelector('#name').value;
    console.log(userName);
}