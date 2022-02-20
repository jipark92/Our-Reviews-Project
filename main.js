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
    name: "John Doe",
    job: "Software Developer",
    img: "https://pbs.twimg.com/profile_images/1280134466762166272/3OQXdBwC_400x400.jpg",
    text: "11111Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem numquam assumenda, quia placeat modi saepe ex repellendus ipsum ea odio ad fuga voluptate molestias necessitatibus explicabo! Consequuntur amet rerum itaque, debitis inventore sed laboriosam similique accusamus aliquam. Enim, at unde."
},
{
    id: 2,
    name: "Patrick Star",
    job: "Software Engineer",
    img: "https://pbs.twimg.com/profile_images/1480879644618510336/2iXc8iDk_400x400.jpg",
    text: "2222Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem numquam assumenda, quia placeat modi saepe ex repellendus ipsum ea odio ad fuga voluptate molestias necessitatibus explicabo! Consequuntur amet rerum itaque, debitis inventore sed laboriosam similique accusamus aliquam. Enim, at unde."
},
{
    id: 3,
    name: "Spongebob",
    job: "Senior Developer",
    img: "https://pbs.twimg.com/profile_images/1459203645782831117/GURd33BT_400x400.jpg",
    text: "33333Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem numquam assumenda, quia placeat modi saepe ex repellendus ipsum ea odio ad fuga voluptate molestias necessitatibus explicabo! Consequuntur amet rerum itaque, debitis inventore sed laboriosam similique accusamus aliquam. Enim, at unde."
},
{
    id: 4,
    name: "Sandy Squirrel",
    job: "Senior Engineer",
    img: "https://pbs.twimg.com/profile_images/1435888634612301827/aUqoMcQ-_400x400.jpg",
    text: "44444Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem numquam assumenda, quia placeat modi saepe ex repellendus ipsum ea odio ad fuga voluptate molestias necessitatibus explicabo! Consequuntur amet rerum itaque, debitis inventore sed laboriosam similique accusamus aliquam. Enim, at unde."
}];

let friends = 0; // 0-3 since there are 4 objects


rightBtn.addEventListener('click', ()=>{
    friends++;
    console.log(friends);
    if (friends >= 3){
        friends = 0;
    } 
    showPerson(friends);
})

leftBtn.addEventListener('click', ()=>{

})

function showPerson(person){
    let whichFriend = friendList[person];
    console.log(whichFriend);
    image.src = whichFriend.img;
    fullName.textContent = whichFriend.name;
    job.textContent = whichFriend.job;
    text.textContent = whichFriend.text;
}



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






 