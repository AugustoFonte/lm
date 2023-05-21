import React from "react";
import img1 from "../Assets/1.webp"
import img2 from "../Assets/2.webp"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.webp"
import img5 from "../Assets/5.jpg"
import img6 from "../Assets/6.webp"

function ImageGrid() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24"> 
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={img1} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={img2} />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={img3} />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={img4} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={img5} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={img6} />
      </div>
    </div>
  </div>
</div>
  );
}

export default ImageGrid;