import { useState } from "react";
import image1 from "../assets/images/productsection/image1.png";
import image2 from "../assets/images/productsection/image2.png";
import image3 from "../assets/images/productsection/image3.jpeg";
import image4 from "../assets/images/productsection/image4.jpeg";
import image5 from "../assets/images/productsection/image5.jpeg";

export default function ImageSelector() {
  const images = [image1, image2, image3, image4, image5];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full flex flex-col">
      {/* Fullscreen Main Image */}
      <div className="w-full flex justify-center items-center ">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-contain "
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex justify-start md:justify-start gap-2 mt-3 p-2  ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-12 h-12 md:w-20 md:h-20 object-cover cursor-pointer transition-all border-2 ${
              selectedImage === image ? "border-green-600" : "border-transparent"
            } hover:border-green-500 `}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
}
