import * as React from 'react' ;
import * as style from './eventSlider.module.scss';
import EventSliderCard from './sliderCard/sliderCard';
import Slider from "react-slick";

import event1food1 from '../../../images/event/event1/food1.png'
import event1food2 from '../../../images/event/event1/food2.png'
import event1food3 from '../../../images/event/event1/food3.png'
import event1food4 from '../../../images/event/event1/food4.png'

import event2photo1 from '../../../images/event/event2/photo1.png'
import event2photo2 from '../../../images/event/event2/photo2.png'
import event2photo3 from '../../../images/event/event2/photo3.png'
import event2photo4 from '../../../images/event/event2/photo4.png'

import event3photo1 from '../../../images/event/event3/photo1.png'
import event3photo2 from '../../../images/event/event3/photo2.png'
import event3photo3 from '../../../images/event/event3/photo3.png'
import event3photo4 from '../../../images/event/event3/photo4.png'

import event4photo1 from '../../../images/event/event4/photo1.png'
import event4photo2 from '../../../images/event/event4/photo2.png'
import event4photo3 from '../../../images/event/event4/photo3.png'
import event4photo4 from '../../../images/event/event4/photo4.png'

import event5photo1 from '../../../images/event/event5/photo1.png'
import event5photo2 from '../../../images/event/event5/photo2.png'
import event5photo3 from '../../../images/event/event5/photo3.jpg'
import event5photo4 from '../../../images/event/event5/photo4.png'

import event6photo1 from '../../../images/event/event6/photo1.png'
import event6photo2 from '../../../images/event/event6/photo2.png'
import event6photo3 from '../../../images/event/event6/photo3.png'
import event6photo4 from '../../../images/event/event6/photo4.png'


const settings = {
    dots:false,
    arrows:true,
    infinity:true,
    autoplay:true,
    className:"eventSlider"
}


const CampaignEventSlider = () => {
    return(
        <div className={style.eventslider}>
            <Slider {...settings}>
                <div className={style.eventslider_card}>
                    <EventSliderCard
                        heading="EVENT 1: WINTER CLOTH DRIVE" 
                        beneficiaries='50'
                        volunteers='12'
                        fund="NGO's own fund"
                        image1={event1food1}
                        image2={event1food2}
                        image3={event1food3}
                        image4={event1food4}
                    />
                </div>
                <div className={style.eventslider_card}>
                    <EventSliderCard 
                        heading="EVENT 2: FOOD DRIVE CAMPAIGN"
                        beneficiaries='15'
                        volunteers='08'
                        fund="NGO's own fund"
                        image1={event2photo1}
                        image2={event2photo2}
                        image3={event2photo3}
                        image4={event2photo4}
                    />
                </div>
                <div className={style.eventslider_card}>
                    <EventSliderCard
                        heading="EVENT 3: FOOD DRIVE CAMPAIGN" 
                        beneficiaries='12'
                        volunteers='07'
                        fund="NGO's own fund"
                        image1={event3photo1}
                        image2={event3photo2}
                        image3={event3photo3}
                        image4={event3photo4}
                    />
                </div>
                <div className={style.eventslider_card}>
                    <EventSliderCard
                        heading="EVENT 4: FOOD DRIVE CAMPAIGN" 
                        beneficiaries='15'
                        volunteers='03'
                        fund="NGO's own fund"
                        image1={event4photo1}
                        image2={event4photo2}
                        image3={event4photo3}
                        image4={event4photo4}
                    />
                </div>
                <div className={style.eventslider_card}>
                    <EventSliderCard
                        heading="EVENT 5: EDUCATION DRIVE" 
                        beneficiaries='11'
                        volunteers='04'
                        fund="NGO's own fund"
                        image1={event5photo1}
                        image2={event5photo2}
                        image3={event5photo3}
                        image4={event5photo4}
                    />
                </div>
                <div className={style.eventslider_card}>
                    <EventSliderCard
                        heading="EVENT 6: FOOD DISTRIBUTION" 
                        beneficiaries='45'
                        volunteers='05'
                        fund="NGO's own fund"
                        image1={event6photo1}
                        image2={event6photo2}
                        image3={event6photo3}
                        image4={event6photo4}
                    />
                </div>
            </Slider>
        </div>
    )
}

export default CampaignEventSlider ;