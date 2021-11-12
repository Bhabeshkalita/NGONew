import * as React from 'react' ;
import DiscoverUs from '../component/about-us/discover-us/discoverUs';
import MissionVission from '../component/about-us/MissionVission/missionVission';
import WhatWeCare from '../component/about-us/whatWeCare/whatWeCare';
import ImageHeader from '../component/common/image-header/imageHeader';
import Layout from "../Template/layout/layout"
import Seo from "../Template/seo/seo";
import FixWidth from "../Template/width/widthTemplate";

const AboutUsPage = () => (
    <FixWidth>
    <Layout>
      <Seo title="About Us" />
      <ImageHeader pageName="About Us" quotes="Helping people by charity is the most human thing we can do" />
      <DiscoverUs />
      <MissionVission />
      <WhatWeCare />
    </Layout>
    </FixWidth>
)
export default AboutUsPage ;