
function renderTweets(tweets) {
    let renTweets = ''
   
   for(let i = 0; i <tweets.length; i++){
   renTweets += `
   <div class='tweet-container'>
        <div class="twitter-top">
            <img class="twitter-profile"src="${tweets[i].user.profilePic}" style="height:50px; width:50px;">
            <div class="twitter-handle">
                <div class="username">
                    <h4>${tweets[i].user.username}</h4>`
                    if(tweets[i].user.isVerified) renTweets += `<img src="https://ubisafe.org/images/twitter-transparent-badge-3.png" style="width:10px; height:10px;">`
                
                
                
                 renTweets += `   </div>
                <h6>${tweets[i].user.handle}</h6>
            </div>
        </div>

        <div class="twitter-tweet">
            <p class="tweet">${tweets[i].text}</p>
            <hr>
        </div>
        <div class="twitter-bottom">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gP8f4F_gSALhZLL84GaSlL2CgaO1oHVhaoCZZXSqQAxJMwOi" style="margin: 10px;height:25px; width:25px;">
            <div style=" margin: 10px">${tweets[i].replies}</div>
            <img src="https://png.icons8.com/color/1600/retweet.png" style="width:25px; height:25px;margin: 10px;">
            <div style=" margin: 10px">${tweets[i].retweets}</div>
            <img src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" style="width:25px; height:25px; margin: 10px;">
            <div style=" margin: 10px">${tweets[i].likes}</div>
            <img src="https://www.clipartmax.com/png/middle/217-2176888_mailbox-comments-mailbox-icon.png" style="width:25px; height: 25px; margin: 10px;">
        
        
        </div>
    </div>
    `


   }
   console.log(renTweets)
    return renTweets
}



function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}