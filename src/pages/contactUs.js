import * as React from 'react' ;
import ImageHeader from '../component/common/image-header/imageHeader';
import ContectDetails from '../component/contact-us/contectDetails/contactDetails';
import WriteToUs from '../component/contact-us/writeToUs/writeToUs';
import Layout from "../Template/layout/layout"
import Seo from "../Template/seo/seo";
import FixWidth from "../Template/width/widthTemplate";

const ContectUsPage = () => (
    <FixWidth>
        <Layout>
            <Seo title="Contact Us" />
            <ImageHeader pageName="Contact Us" quotes="Help people, even when you know they can't help you back" />
            <ContectDetails />
            <WriteToUs />
        </Layout>
    </FixWidth>
)
export default ContectUsPage;