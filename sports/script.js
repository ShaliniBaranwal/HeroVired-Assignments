// Q1. Write a function which will take name of player as input and display its stats.
// Q2. Write a function which will add new player and its stats.

const elems = {
    submitBtn: document.querySelector('.submit-btn'),
    nameElem: document.querySelector('#name'),

    playerInfo: {
        name: document.querySelector('.display-name'),
        sports: document.querySelector('.display-sports'),
        achievements: document.querySelector('.display-achievements')
    }
};

const info = [
    {
        name: 'Geeta Phogat',
        sports: 'Wrestling',
        achievements: [
            'Arjuna Award',
            'Gold medal in women’s wrestling at the Commonwealth Games'
        ]
    },
    {
        name: 'Sachin Tendulkar',
        sports: 'Cricket',
        achievements: [
            'Arjuna Award',
            'Padma Shri',
            'Padma Vibhushan',
            'Bharat Ratna'
        ]
    },
    {
        name: 'Vishwanathan Anand',
        sports: 'Chess',
        achievements: ['Padma Vibhushan', 'Padma Bhushan']
    },
    {
        name: 'Geet Sethi',
        sports: 'Billiards',
        achievements: ['Arjuna Award for Billiards & Snooker']
    },
    {
        name: 'Leander Paes',
        sports: 'Tennis',
        achievements: [
            'Bronze medal in Olympics',
            'Junior singles champion at Wimbledon'
        ]
    },
    {
        name: 'Mary Kom',
        sports: 'Boxing',
        achievements: [
            'World Championships crowns at 2005, 2006, 2008 and the 2010'
        ]
    }
];

elems.submitBtn.addEventListener('click', () => {
    const name = elems.nameElem.value;
    const player = info.find((player) => player.name.toLowerCase() === name.toLowerCase());

    showPlayer(player);
});

const showPlayer = (player) => {
    elems.playerInfo.name.innerHTML = player.name;
    elems.playerInfo.sports.innerHTML = player.sports;

    const listElem = document.createElement('ul');

    for (const achievement of player.achievements) {
        const listItemElem = document.createElement('li');
        listItemElem.innerHTML = achievement;

        listElem.append(listItemElem);
    }

    elems.playerInfo.achievements.innerHTML = 'Achievements: ';
    elems.playerInfo.achievements.appendChild(listElem);
};

const submitBtn = document.getElementsByClassName('btn-submit-info')[0];

submitBtn.addEventListener('click', () => {
    const name = document.getElementById('name-add').value;
    const sports = document.getElementById('sports-add').value;
    const achievements = document
        .getElementById('achievements-add')
        .value.split(/( +),( +)?/g)
        .filter((val) => val !== ' ');

    info.push({
        name: name,
        sports: sports,
        achievements: achievements
    });
});
