import React from "react";
import MainLayout from "../Layouts/MainLayout";
import banner from "../Assets/banner.jpg"




function HomePage() {
  return (
    <MainLayout>
      <div>
          <img src={banner} alt=""  />
      </div>
    </MainLayout>
  );
}

export default HomePage;