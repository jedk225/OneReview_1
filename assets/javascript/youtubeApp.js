
// var videoID;

// var queryURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDuCdnEyI0A6xs88LrDZriGPP2GSY7MOus&q=soccer&part=snippet";

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);

//     for (var i = 0; i < 1; i++) {
//         console.log(response.items[i].id.videoId);
//         videoID = response.items[i].id.videoId;
//         startPlayer(videoID);
//     }

// });


// function startPlayer(videoID) {
//     // 2. This code loads the IFrame Player API code asynchronously.
//     var tag = document.createElement('script');

//     tag.src = "https://www.youtube.com/iframe_api";
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     // 3. This function creates an <iframe> (and YouTube player)
//     //    after the API code downloads.
//     var player;
//     function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//             height: '390',
//             width: '640',
//             videoId: videoID,
//             events: {
//                 'onReady': onPlayerReady,
//                 'onStateChange': onPlayerStateChange
//             }
//         });
//     }



// }


