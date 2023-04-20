import React from "react";
import MainLayout from "../Layouts/MainLayout";
import ImageGrid from "../Components/ImageGrid"
import OurServices from "../Components/OurServices";



function Contactos() {
  return (
    <MainLayout>
      <div>
        <OurServices/>
      </div>
      <div>
        <ImageGrid />
      </div>
      
    </MainLayout>
  );
}

export default Contactos;