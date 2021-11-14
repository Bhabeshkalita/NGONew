import * as React from 'react' ;
import * as style from './allCampaign.module.scss' ;
import AllCampaignCard from './allCampaignCard/allCampaignCard';

import foodDonationCamp from '../../../images/campaign/fodDriveTransperent.png'
import educationCampaign from '../../../images/campaign/educationTransperent.png'
import floodRelef from '../../../images/campaign/floodTransparent.png'
import clothDonation from '../../../images/campaign/cloathTransperent.png'

const AllCampaign = () => {
    return(
        <div className={style.allCampaign}>
            <div className={style.allCampaign_heading}>
                <h3 className={style.allCampaign_heading_h3}>Our All Campaigns</h3>
            </div>
            <div className={style.allCampaign_card}>
                <AllCampaignCard  
                    heading="Food donation drive" 
                    pera="This campaign, named Aahar was launched to help curbing hunger in the state. Hunger is one of the global problems that is interconnected with poverty. Despite of the massive production of food worldwide, which is sufficient for feeding the entire population, about 690 million people sleep without having food. It is saddening to see the numbers increase every year. Assam’s poverty rate stands at 28.8%. This initiative was to provide food to the needy. For a time period of 3 months, we aim to conduct food donation events throughout the city."
                    image={foodDonationCamp}
                />
                <AllCampaignCard 
                    heading="Education campaign" 
                    pera="Education is the key factor that helps in stimulating growth in the state. The literacy rate in Assam stands at 73.18% currently. There are many children who are deprived of education even in current times. This campaign aims to enhance the skills of the young and aspiring children through our learning programme. We aim to work along with the orphanages in Assam and teach the children during weekends. The learning programme will be more of a holistic approach towards education them."
                    image={educationCampaign} 
                    reverse 
                />
                <AllCampaignCard 
                    heading="Winter Cloth Drive" 
                    pera="It is saddening to see the homeless people shivering in the roads during winter. Especially, in this time of the year, with full of festivals and celebrations, the least we could do is to provide warm clothes to the needy and share the warmth. Hence, we aim to organise donation campaigns to let people donate their old clothes and provide them to the ones who need it."
                    image={clothDonation} 
                />
                <AllCampaignCard 
                    heading="Flood relief" 
                    pera="Flood is a major problem in Assam. Every year, it causes a lot of adversities in the state and yet nothing there’s no efficient solution to it. We aim to work with different NGOs and organise donations to provide aid to the people suffering in that time of the year. Since, there’s no efficient measure yet, it is wise to be prepared against such adversities. We aim to organise crowd-funding programmes to provide support and basic necessities to the ones suffering."
                    image={floodRelef} 
                    reverse
                />    
            </div>            
        </div>
    )
}
export default AllCampaign;

