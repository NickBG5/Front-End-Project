$("button").click(()=> {
    $.get(`https://api.jikan.moe/v3/search/anime?q=` + (document.querySelector("#userInput")).value,(data)=> {
    

        $(`.card-title1`).html(`${data.results[0].title}`);
        $(`.card-image1`).attr(`src`,`${data.results[0].image_url}`);
        $(`.card-episodes1`).html(`${data.results[0].episodes}`);
        $(`.card-summary1`).html(`${data.results[0].synopsis}`);
        $(`.a`).attr(`href`, `${data.results[0].url}`);
        $(`.card-score3`).append(`${data.results[0].score}`);

        $(`.card-title2`).html(`${data.results[1].title}`);
        $(`.card-image2`).attr(`src`,`${data.results[1].image_url}`);
        $(`.card-episodes2`).html(`${data.results[1].episodes}`);
        $(`.card-summary2`).html(`${data.results[1].synopsis}`);
        $(`.b`).attr(`href`, `${data.results[1].url}`);
        $(`.card-score4`).append(`${data.results[1].score}`);
    console.log(data.results);
    });
});

$.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity` + (document.querySelector("#userInput")).value,(topData)=>{
        $(`.card-title3`).append(`${topData.top[0].title}`);
        $(`.card-image3`).attr(`src`,`${topData.top[0].image_url}`);
        $(`.card-episodes3`).append(`${topData.top[0].episodes}`);
        $(`.card-score1`).append(`${topData.top[0].score}`);
        $(`.d`).attr(`href`, `${topData.top[0].url}`);
        $(`.card-rank1`).append(`${topData.top[0].rank}`);

        $(`.card-title4`).append(`${topData.top[1].title}`);
        $(`.card-image4`).attr(`src`,`${topData.top[1].image_url}`);
        $(`.card-episodes4`).append(`${topData.top[1].episodes}`);
        $(`.card-score2`).append(`${topData.top[1].score}`);
        $(`.e`).attr(`href`, `${topData.top[1].url}`);
        $(`.card-rank2`).append(`${topData.top[1].rank}`);
});
