import * as React from 'react' ;
import ImageHeader from '../component/common/image-header/imageHeader';
import Layout from "../Template/layout/layout"
import Seo from "../Template/seo/seo";
import FixWidth from "../Template/width/widthTemplate";
import InternForm from "../component/intern-with-us/intern-with-us-google-form/internForm"
import InternHEading from '../component/intern-with-us/intern-with-us-heading/internWithUsHeading'
const InternWithUsPage = () => (
    <FixWidth>
        <Layout>
            <Seo title="Contact Us" />
            <ImageHeader pageName="Intern With Us" quotes="JOIN US IN ACHIEVING OUR MISSION - A mission towards achieving the collective goal." />
            <InternHEading />
            <InternForm />
        </Layout>
    </FixWidth>
) 
export default InternWithUsPage ;