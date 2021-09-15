$("button").click(()=> {
    $.get(`https://api.jikan.moe/v3/search/anime?q=` + (document.querySelector("#userInput")).value,(data)=> {
    

        $(`.card-title4`).html(`${data.results[0].title}`);
        $(`.card-image4`).attr(`src`,`${data.results[0].image_url}`);
        $(`.card-episodes4`).html(`${data.results[0].episodes}`);
        $(`.card-summary1`).html(`${data.results[0].synopsis}`);
        $(`.a`).attr(`href`, `${data.results[0].url}`);
        $(`.card-score4`).append(`${data.results[0].score}`);

        $(`.card-title5`).html(`${data.results[1].title}`);
        $(`.card-image5`).attr(`src`,`${data.results[1].image_url}`);
        $(`.card-episodes5`).html(`${data.results[1].episodes}`);
        $(`.card-summary5`).html(`${data.results[1].synopsis}`);
        $(`.b`).attr(`href`, `${data.results[1].url}`);
        $(`.card-score5`).append(`${data.results[1].score}`);

        $(`.card-title6`).html(`${data.results[2].title}`);
        $(`.card-image6`).attr(`src`,`${data.results[2].image_url}`);
        $(`.card-episodes6`).html(`${data.results[2].episodes}`);
        $(`.card-summary6`).html(`${data.results[2].synopsis}`);
        $(`.c`).attr(`href`, `${data.results[2].url}`);
        $(`.card-score6`).append(`${data.results[2].score}`);
    // console.log(data.results);
    });
});

$.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`,(topData)=>{
        $(`.card-title1`).append(`${topData.top[0].title}`);
        $(`.card-image1`).attr(`src`,`${topData.top[0].image_url}`);
        $(`.card-episodes1`).append(`${topData.top[0].episodes}`);
        $(`.card-score1`).append(`${topData.top[0].score}`);
        $(`.d`).attr(`href`, `${topData.top[0].url}`);
        $(`.card-rank1`).append(`${topData.top[0].rank}`);

        $(`.card-title2`).append(`${topData.top[1].title}`);
        $(`.card-image2`).attr(`src`,`${topData.top[1].image_url}`);
        $(`.card-episodes2`).append(`${topData.top[1].episodes}`);
        $(`.card-score2`).append(`${topData.top[1].score}`);
        $(`.e`).attr(`href`, `${topData.top[1].url}`);
        $(`.card-rank2`).append(`${topData.top[1].rank}`);
        
        $(`.card-title3`).append(`${topData.top[2].title}`);
        $(`.card-image3`).attr(`src`,`${topData.top[2].image_url}`);
        $(`.card-episodes3`).append(`${topData.top[2].episodes}`);
        $(`.card-score3`).append(`${topData.top[2].score}`);
        $(`.f`).attr(`href`, `${topData.top[2].url}`);
        $(`.card-rank3`).append(`${topData.top[2].rank}`);
});

let backgroundMusic = document.querySelector("audio");
backgroundMusic.volume = 0.1;
