import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const ImgSlider = (props) =>
{
    
    let settings = 
    {
        dots: true, 
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    
    
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <h3>
                        1
                    </h3>
                </div>
                <div>
                    <h3>
                        2
                    </h3>
                </div>
            </Slider>
        </div>
    )
}


export default ImgSlider;