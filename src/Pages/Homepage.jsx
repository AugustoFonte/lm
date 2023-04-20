import React from "react";
import MainLayout from "../Layouts/MainLayout";
import banner from "../Assets/banner.jpg"
import SobreNos from "../Components/SobreNos";
import ImageGrid from "../Components/ImageGrid";
import ContactForm from "../Components/ContactForm";
import OurServices from "../Components/OurServices";

function HomePage() {
  return (
    <MainLayout>
      <div>
          <img src={banner} alt=""  />
      </div>
      <div className="py-5">
        <SobreNos />
      </div>
      <div>
        <OurServices />
      </div>
      <div className="py-5">
        <ImageGrid/>
      </div>
      <div className="py-5">
        <ContactForm/>
      </div>
    </MainLayout>
  );
}

export default HomePage;