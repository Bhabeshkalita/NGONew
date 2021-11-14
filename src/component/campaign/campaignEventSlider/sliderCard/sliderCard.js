import * as React from 'react';
import * as style from './sliderCard.module.scss';


const EventSliderCard = ({heading , beneficiaries, volunteers , fund , image1 , image2, image3 , image4}) => {
    return(
        <div className={style.eventsliderCard}>
            <div className={style.eventsliderCard_details}>
                <h2 className={style.eventsliderCard_details_h2}>
                    <span>{heading}</span>
                </h2>
                <div className={style.eventsliderCard_details_tableContainer}>
                    <table className={style.eventsliderCard_details_tableContainer_table}>
                        <tr>
                            <td className={style.eventsliderCard_details_tableContainer_table_heading}>BENEFICIARIES</td>
                            <td className={style.eventsliderCard_details_tableContainer_table_data}>{beneficiaries}</td>
                        </tr>
                        <tr>
                            <td className={style.eventsliderCard_details_tableContainer_table_heading}>NUMBER OF VOLUNTEERS</td>
                            <td className={style.eventsliderCard_details_tableContainer_table_data}>{volunteers}</td>
                        </tr>
                        <tr>
                            <td className={style.eventsliderCard_details_tableContainer_table_heading}>FUND</td>
                            <td className={style.eventsliderCard_details_tableContainer_table_data}>{fund}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={style.eventsliderCard_image}>
                <div className={style.eventsliderCard_image_box}>
                    <img src={image1} alt='campaignImage' />
                </div>
                <div className={style.eventsliderCard_image_box}>
                    <img src={image2} alt='campaignImage' />
                </div>
                <div className={style.eventsliderCard_image_box}>
                    <img src={image3} alt='campaignImage' />
                </div>
                <div className={style.eventsliderCard_image_box}>
                    <img src={image4} alt='campaignImage' />
                </div>
            </div>
        </div>
    )
}

export default EventSliderCard ;