const info = document.querySelector('.info');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const randomBtn = document.querySelector('.random-btn');


const image = document.querySelector('img');
const fullName = document.querySelector('.name');
const job = document.querySelector('.job');
const text = document.querySelector('.text');

const friendList = [{
    id: 1,
    name: "Mr. Krabs",
    job: "OWNER OF KRUSTY KRABS",
    img: "https://pbs.twimg.com/profile_images/2422380656/mze2e6z7v74aac1miph6_reasonably_small.gif",
    text: "I LOVE MONEY.I LOVE MONEY.I LOVE MONEY.I LOVE MONEY.I LOVE MONEY.I LOVE MONEY.I LOVE MONEY.I LOVE MONEY.I LOVE MONEY.I LOVE MONEY.I LOVE MONEY."
},
{
    id: 2,
    name: "Patrick Star",
    job: "Nothing",
    img: "https://pbs.twimg.com/profile_images/1474947231102869506/T-g6gyHF_400x400.jpg",
    text: "Spongebob is my best friend forever! Spongebob is my best friend forever! Spongebob is my best friend forever! Spongebob is my best friend forever! Spongebob is my best friend forever! Spongebob is my best friend forever! Spongebob is my best friend forever! "
},
{
    id: 3,
    name: "Spongebob",
    job: "Cashier at Krusty Krabs",
    img: "https://pbs.twimg.com/profile_images/1473428449104699392/GnKARPx-_400x400.jpg",
    text: "I am Patricks best friend. I love to work at Krusty Krabs! I love playing with Squidward!"
},
{
    id: 4,
    name: "Sandy Cheeks",
    job: "Senior Engineer",
    img: "https://pbs.twimg.com/profile_images/1025625697019195393/rdEzNrkB_400x400.jpg",
    text: "I want to change the world! I am going to keep working on my science project to discover everything around the world! I want to develop many useful things the world can use for greater goods!"
},
{
    id: 5,
    name: "SquidWard",
    job: "Musician",
    img: "https://pbs.twimg.com/profile_images/1342724285597581312/oc19Ungm_400x400.jpg",
    text: "Im going to kill spongebob!!!!!! ahhh!!!! Why does he troll with me so much! Is he my friend or enemy!? I hate living next to him!!!"
}];

let friends = 0; // 0-3 since there are 4 objects


rightBtn.addEventListener('click', ()=>{
    friends++;
    console.log(friends);
    if (friends >= 5){
        friends = 0;
    }
    showPerson(friends);
})
let reverse = 5;
leftBtn.addEventListener('click', ()=>{
    reverse--;
    console.log(reverse);   

    if (reverse < 0) {
        reverse = 4;
    }
   
    showPerson(reverse);
});

randomBtn.addEventListener('click', ()=> {
    showPerson(randomNumber());
    console.log(randomNumber())
})


function showPerson(person){
    let whichFriend = friendList[person];
    console.log(whichFriend);
    image.src = whichFriend.img;
    fullName.textContent = whichFriend.name;
    job.textContent = whichFriend.job;
    text.textContent = whichFriend.text;
}


function randomNumber(){
   return Math.floor(Math.random()*friendList.length);
}
console.log(randomNumber());

// leftBtn.addEventListener('click', ()=>{
//     let friendOne = friendList.map((friend)=>{
//         if (friend.name === "John 1"){
//             return friend.name;
//         }
//     })
//     console.log(friendOne);
//     fullName.textContent = friendOne.join('');
//     image.src = friendList.job;
// })






 