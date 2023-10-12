// import React from 'react';

import Department from "../components/Department/Department";
import Slider from "../components/Slider/Slider";
import DirectorMsg from "./DirectorMSG/DirectorMsg";
import WhayMist from "./WhayMIST/WhayMist";

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <DirectorMsg></DirectorMsg>
           <WhayMist></WhayMist>
           <Department></Department>
          
        </div>
    );
};

export default Home;