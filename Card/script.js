const user = document.querySelector('.username');
const followers = document.querySelector('.followers-count');
const following = document.querySelector('.following-count');
const avatar = document.querySelector('.avatar')

function addUsername(username) {
    user.textContent += `${username}`; 
    
}
function addFollowers(count){
    followers.innerHTML= count
}
function addFollowing(count) {
    following.innerHTML = count
}
function setAvatar (url) {
   //avatar.style.backgroundImage=`url(${url})`  
   avatar.src = url;
}

const myUrl = 'https://api.github.com/users/ShubhamK-23'
const  xhr = new XMLHttpRequest();
xhr.open('GET',myUrl);
xhr.onreadystatechange = function (){
    if(this.readyState == 4){
    const data = JSON.parse(this.responseText)
    console.log(data.avatar_url)
    setAvatar(data.avatar_url)
    addUsername(data.login);
    addFollowers(data.followers)
    addFollowing(data.following)
    }

}
xhr.send()