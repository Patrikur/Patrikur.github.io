import React from 'react';

const BigItemCardBottomInfo = () => {
    return (
        <div className="big-item-card-bottom-info">
            <h2 className="bottom-title">About <span id="filmtitle">Akira</span></h2>
            <p className="director">
                <span className="start">Director: </span>Takashi Nakamura
            </p>
            <p class="cast">
                <span className="start">Cast: </span>Mitsuo Iwata, Nozomu Sasaki, Mami
                Koyama
            </p>
            <p class="writer">
                <span className="start">Writer: </span>Katsuhiro Otomo
            </p>
            <p class="genres">
                <span className="start">Genres: </span>Animation, Drama, SciFi
            </p>
            <p class="rating">
                <span className="start">Maturity rating: </span><span className="age">16+</span> recommended for ages 16 and up
            </p>
        </div>
    )
};

export default BigItemCardBottomInfo;