import * as React from 'react' ;
import * as style from './allCampaignCard.module.scss'
import clsx from 'clsx';
const AllCampaignCard = ({heading , pera, image , reverse}) => {
    return(
        <div className={style.campaignCard}>
            <div className={reverse ?style.campaignCard_container : clsx(style.campaignCard_container , style.campaignCard_container_reverse) }>
                <div className={style.campaignCard_container_content}>
                    <h4 className={style.campaignCard_container_content_h4}><span>{heading}</span></h4>
                    <p className={style.campaignCard_container_content_p}>{pera}</p>
                </div>
                <div className={style.campaignCard_container_image}>
                    <img src={image} alt='eventImage'/>
                </div>
            </div>
        </div>
    )
}

export default AllCampaignCard ;