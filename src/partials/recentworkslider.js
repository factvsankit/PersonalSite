import React from "react";
import Slider from "react-slick";

import Work1 from '../pages/assets/work1.png'
import Work2 from '../pages/assets/work2.png'
import Work3 from '../pages/assets/work3.png'

class RecentWorkSlider extends React.Component {
  render() {
    var settings = {
      fade: true,
      dots: true,
      autoplay: true,
      arrows: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={Work1} />
        </div>
        <div>
          <img src={Work2} />
        </div>
        <div>
          <img src={Work3} />
        </div>
      </Slider>
    );
  }
}
export default RecentWorkSlider;
