import React from "react";
import MainLayout from "../Layouts/MainLayout";
import banner from "../Assets/banner.jpg"
import SobreNos from "../Components/SobreNos";



function HomePage() {
  return (
    <MainLayout>
      <div>
          <img src={banner} alt=""  />
      </div>
      <div>
        <SobreNos />
      </div>
      <div>
        
      </div>
    </MainLayout>
  );
}

export default HomePage;