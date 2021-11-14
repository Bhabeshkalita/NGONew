import * as React from 'react' ;
import AllCampaign from '../component/campaign/AllCampaign/allCampaign';
import CampaignEventSlider from '../component/campaign/campaignEventSlider/campaignEventSlider';
import ImageHeader from '../component/common/image-header/imageHeader';
import Layout from "../Template/layout/layout"
import Seo from "../Template/seo/seo";
// import FixWidth from "../Template/width/widthTemplate";

const CampaignPage = () => (
    <Layout>
        <Seo title='campaign' />
        <ImageHeader pageName="Campaigns" quotes='Those who are happiest are those who do the most for others.'/>
        <AllCampaign />
        <CampaignEventSlider />
    </Layout>
)
export default CampaignPage;