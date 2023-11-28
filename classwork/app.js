var profile = [
    {
        name:"Alice Jonathan",
        occupation:"Web developer",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam doloribus iste distinctio rerum sapiente sed excepturi molestias sequi non, ex, nesciunt odit deserunt hic? Sunt fugit quod in sapiente.",
        img:"./images/first.jpg",
    },
    {
        name:"Abdullah Qasim",
        occupation:"Manager",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam doloribus iste distinctio rerum sapiente sed excepturi molestias sequi non, ex, nesciunt odit deserunt hic? Sunt fugit quod in sapiente.",
        img:"./images/second.jpg",
    },
    {
        name:"Samuel Patrick",
        occupation:"The Boss",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam doloribus iste distinctio rerum sapiente sed excepturi molestias sequi non, ex, nesciunt odit deserunt hic? Sunt fugit quod in sapiente.",
        img:"./images/third.jpg",
    },
    {
        name:"Mary Jane",
        occupation:"Gamer",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam doloribus iste distinctio rerum sapiente sed excepturi molestias sequi non, ex, nesciunt odit deserunt hic? Sunt fugit quod in sapiente.",
        img:"./images/fourth.jpg",
    }
];

const desc = document.querySelector('.desc')
const name = document.querySelector('.name')
const occupation = document.querySelector('.occupation')
const img = document.querySelector('.img')
const nextbtn = document.querySelector('.fa-arrow-right')
const prevbtn = document.querySelector('.fa-arrow-left')

var index = 0;

document.addEventListener('DOMContentLoaded',()=>{
    loadElements(index);
});

function loadElements(indexNumb) {
    img.src = `${profile[indexNumb].img}`;
    desc.innerText = `${profile[indexNumb].desc}`;
    occupation.innerText = `${profile[indexNumb].occupation}`;
    name.innerText =  `${profile[indexNumb].name}`;
};

nextbtn.addEventListener('click', next)
prevbtn.addEventListener('click', prev)

function next (){
    index++
    if (index > profile.length - 1) {
        index = 0;
        loadElements(index);
    }else{
        loadElements(index);
    }
}

function prev() {
    index--;
    if (index < 0) {
        index = profile.length - 1;
        loadElements(index);
    }
    else{
        loadElements(index)
    }
}