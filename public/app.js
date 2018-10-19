var text_remaining;

const showModal = function (e) {
    e.preventDefault();
    $('.modal-container').show();
};
const hideModal = function (e) {
    e.preventDefault();
    $('.modal-container').hide();
}
const saveTweet = function (e) {
    e.preventDefault();
    text_remaining = 140;
    $('#counter').html(text_remaining + ' characters remaining');
    const inputText = $('#text').val();
    const data = {
        tweet: inputText,
        username: 'EPA'
    }
    $.post('/api/tweet', data)
        .then(function (resdata) {
            console.log(resdata);
            render(resdata);
            $('#text').val('');
        })
}

const render = function (tweet) {
    $('.center-feed').append(`<h2><img class="avatar js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/632228259879628800/-gvVhzPn_bigger.png">EPA<span class="center-head" style="font-weight: initial">@EPA<span class="center-head-right"></span> ${Date().split(' ').slice(0, 4).join(' ')}</h2><button class="delete-tweet" data-id=${tweet._id} class="delete-button">Delete</button></span><p><h6>${tweet.tweet}</h6></p><hr>`)

}

$(document).on('click', '.delete-tweet', function(){
    var deleteId = $(this).attr('data-id');
    $.get('/api/tweet/'+ deleteId, function(result){
      
        getAllTweets();
    })
})

$(document).ready(function () {
    var text_max = 140;
    $('#counter').html(text_max + ' characters remaining');

    $('#text').keyup(function () {
        var text_length = $('#text').val().length;
             text_remaining = text_max - text_length;
        
            $('#counter').html(text_remaining + ' characters remaining');
    
    });
    
});

$('#new-tweet').on('click', showModal);
$('.close-modal').on('click', hideModal);
$('#compose-tweet').on('click', saveTweet);

function getAllTweets() {

    $.get('/api/tweet')
    .then(function (serverData) {
        $('.center-feed').empty();
        for (let i = 0; i < serverData.length; i++) {
            render(serverData[i]);
        }
    })

}

getAllTweets();
