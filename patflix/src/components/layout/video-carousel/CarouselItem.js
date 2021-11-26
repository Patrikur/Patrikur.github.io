import React from 'react';

const CarouselItem = () => {
    return (
        <div className="items">
          <div className="left"><i class="fas fa-chevron-left">
            </i>
          </div>
          <div className="middle">
            <div className="item" id="number1">
              <img
                src="https://www.themoviedb.org/t/p/original/TH5zE4t6WudGzUfSNqhBAsFpsm.svg"
                alt="Akira Logo"
                className="item-logo"
              />
            </div>
            <div className="item" id="number2">
              <img
                src="https://www.themoviedb.org/t/p/original/jxl6vdZlH745zP1ZwqCkSHip3hl.png"
                alt="Blade Runner Logo"
                className="item-logo"
              />
            </div>
            <div className="item" id="number3">
              <img
                src="https://www.themoviedb.org/t/p/original/3joUcZ9dgqpOlJXxxA0b2M9mkx5.png"
                alt="Drive Logo"
                className="item-logo"
              />
            </div>
            <div className="item" id="number2">
              <img
                src="https://www.themoviedb.org/t/p/original/jxl6vdZlH745zP1ZwqCkSHip3hl.png"
                alt="Blade Runner Logo"
                className="item-logo"
              />
            </div>
            <div className="item" id="number3">
              <img
                src="https://www.themoviedb.org/t/p/original/3joUcZ9dgqpOlJXxxA0b2M9mkx5.png"
                alt="Drive Logo"
                className="item-logo"
              />
            </div>
          </div>
          <div className="right"><i class="fas fa-chevron-right"></i></div>
        </div>
    )
};

export default CarouselItem;