import React from 'react';

const BigItemCardTopInfo = () => {
    return (
        <div className="big-item-card-top-info">
            <div class="left-info">
                <div class="media-info">
                <span class="match">New</span><span class="year">1988</span><span class="age">16+</span><span class="length">3 Seasons</span><span class="resolution">HD</span>
                </div>
                <div class="ranking">
                <div class="top-10">
                    <span class="top-10-top">TOP</span><span class="top-10-bottom">10</span>
                </div>
                <span>#9 in Iceland Today</span>
                </div>
                <div class="description-card">
                A secret military project endangers Neo-Tokyo when it turns a
                biker gang member into a rampaging psychic psychopath that only
                two teenagers and a group of psychics can stop.
                </div>
            </div>
            <div class="right-info">
                <p class="cast-top">
                <span class="start">Cast: </span>Mitsuo Iwata, Nozomu Sasaki, Mami
                Koyama, <a href="#filmtitle" class="more">more</a>
                </p>
                <p class="genres">
                <span class="start">Genres: </span>Animation, Drama, SciFi
                </p>
            </div>
        </div>
    )
};

export default BigItemCardTopInfo;