import React, { useState } from "react";
import "./Index.css";
import Header from "../../common/components/Header/Header";
import HomeBanner from "../../design/organism/home/banner/HomeBanner";

import Benefits from "../../design/organism/home/benefits/Benefits";
import Sidebar from "../../common/components/Sidebar/Sidebar";

// imgs
import benefitsimg1 from "../../assets/img/chatarea.png";
import benefitsimg2 from "../../assets/img/doctor.png";
import benefitsimg3 from "../../assets/img/manageCalls.png";

const Index = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  return (
    <div className="main_page_container">
      {/* header */}
      <Header setsidebarshow={setsidebarshow} sidebarshow={sidebarshow} />

      {/* Sidebar */}
      <Sidebar sidebarState={sidebarshow} />

      {/* banner */}
      <HomeBanner />

      {/* Benefits */}
      <Benefits
        first
        img={benefitsimg1}
        heading="Patient satisfaction is important for us"
      />

      <Benefits img={benefitsimg2} heading="Best Doctors in this planet here" />

      <Benefits
        first
        img={benefitsimg3}
        heading="Managing patients with ease"
      />
    </div>
  );
};
export default Index;
