const info = document.querySelector('.info');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const randomBtn = document.querySelector('.random-btn');


const image = document.querySelector('.img-container');
const fullName = document.querySelector('.name');
const job = document.querySelector('.job');
const text = document.querySelector('.text');

const friendList = [{
    id: 1,
    name: "John 1",
    job: "soft",
    img: "https://pbs.twimg.com/profile_images/1465489487757201410/38MVGVDX_400x400.https://pbs.twimg.com/profile_images/1466755254645633026/90lz2kwx_400x400.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem numquam assumenda, quia placeat modi saepe ex repellendus ipsum ea odio ad fuga voluptate molestias necessitatibus explicabo! Consequuntur amet rerum itaque, debitis inventore sed laboriosam similique accusamus aliquam. Enim, at unde."
},
{
    id: 2,
    name: "John 2",
    job: "software",
    img: "https://pbs.twimg.com/profile_images/1480879644618510336/2iXc8iDk_400x400.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem numquam assumenda, quia placeat modi saepe ex repellendus ipsum ea odio ad fuga voluptate molestias necessitatibus explicabo! Consequuntur amet rerum itaque, debitis inventore sed laboriosam similique accusamus aliquam. Enim, at unde."
},
{
    id: 3,
    name: "John 3",
    job: "software dev",
    img: "https://pbs.twimg.com/profile_images/1459203645782831117/GURd33BT_400x400.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem numquam assumenda, quia placeat modi saepe ex repellendus ipsum ea odio ad fuga voluptate molestias necessitatibus explicabo! Consequuntur amet rerum itaque, debitis inventore sed laboriosam similique accusamus aliquam. Enim, at unde."
},
{
    id: 4,
    name: "John 4",
    job: "software devloper",
    img: "https://pbs.twimg.com/profile_images/1435888634612301827/aUqoMcQ-_400x400.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem numquam assumenda, quia placeat modi saepe ex repellendus ipsum ea odio ad fuga voluptate molestias necessitatibus explicabo! Consequuntur amet rerum itaque, debitis inventore sed laboriosam similique accusamus aliquam. Enim, at unde."
}];

leftBtn.addEventListener('click', ()=>{
    let friendOne = friendList.map((friend)=>{
        if (friend.name === "John 1"){
            return friend.name;
        }
    })
    console.log(friendOne);
    fullName.textContent = friendOne.join('');
})






 