import * as React from "react" ;
// import { Link } from 'gatsby';
// import NavBar from '../../common/navBar/navBar' ;

import image from '../../../images/skider1.jpg'
import image2 from '../../../images/slider2.jpg'
// import FixWidth from "../../../widthTemplate/widthTemplate";
import * as style from './slider.module.scss' ;
import SliderCard from "./SliderCard/sliderCard";
import Slider from "react-slick";
const settings = {
    dots:true,
    arrows:true,
    infinity:true,
    autoplay:true,
    className:"NGOSlider"
}

const HomeSlider = () => {
    return(
        <div className={style.slider}> 
            {/* <FixWidth> */}
                <Slider {...settings}>                    
                    <SliderCard ima={image2}  />
                    <SliderCard ima={image} />
                </Slider>
            {/* </FixWidth> */}
        </div>
    )
}

export default HomeSlider ;