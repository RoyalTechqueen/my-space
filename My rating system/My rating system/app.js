const rateUs = document.querySelector(".content");
// const allStars = [...document.querySelectorAll(".fa-star")];
const submit = document.querySelector(".submit");
const thanks = document.querySelector(".thank-you");
// const selected = document.querySelector(".rated");
const close = document.querySelector(".close-btn");


// allStars.forEach((rate) => {
//     rate.addEventListener("click", () => {
//         allStars.forEach((rate) => {
//             rate.classList.remove("active")
//         })
//         rate.classList.add("active")
//     }, false)
// });
const rate = document.getElementById('rateNum')
const star1 = document.getElementById('star1')
const star2 = document.getElementById('star2')
const star3 = document.getElementById('star3')
const star4 = document.getElementById('star4')
const star5 = document.getElementById('star5')

const starArr = [star1, star2, star3, star4, star5]
starArr[0].addEventListener('click', function(){
    this.style.color = 'gold';
    rate.innerHTML = '1'
})
starArr[1].addEventListener('click', function(){
    this.style.color = 'gold';
    starArr[0].style.color = 'gold'
    rate.innerHTML = '2'

})
starArr[2].addEventListener('click', function(){
    this.style.color = 'gold';
    starArr[0].style.color = 'gold';
    starArr[1].style.color = 'gold'
    rate.innerHTML = '3'

})
starArr[3].addEventListener('click', function(){
    this.style.color = 'gold';
    starArr[0].style.color = 'gold';
    starArr[1].style.color = 'gold';
    starArr[2].style.color = 'gold'
    rate.innerHTML = '4'

})
starArr[4].addEventListener('click', function(){
    this.style.color = 'gold';
    starArr[0].style.color = 'gold';
    starArr[1].style.color = 'gold';
    starArr[2].style.color = 'gold';
    starArr[3].style.color = 'gold'
    rate.innerHTML = '5'

})

submit.addEventListener("click", () => {
    // const active = document.querySelector(".fa-star.active");
    // let ind = allStars.indexOf(active) + 1;
    // selected.innerText = ind;
    // rateUs.classList.add('active')
    // thanks.classList.add('active')
    rateUs.style.display = 'none'
    thanks.style.display = 'block'
});

close.addEventListener("click", () => {
    // rateUs.classList.remove("active")
    // thanks.classList.remove("active")
    // allStars.forEach((item) => {
    //     item.classList.remove("active")
    // })
    rateUs.style.display = 'flex'
    thanks.style.display = 'none'
})


// function executeRating(star) {
//     const starActive = "button";
//     const starNotActive = "i.active";
//     const starsLength = star.length;
//     let i;
//     star.map((star) => {
//         star.onclickk = () => {
//             i = stars.indexOf(star);

//             if (star.className===starNotActive) {
//                 for(i;i >= 0; --i) stars[i].className = starActive;
//             } else{
//                 for (i;i<starsLength; ++i) stars[i].className = starNotActive
//             }
//         };
//     });
// }
// executeRating(star)