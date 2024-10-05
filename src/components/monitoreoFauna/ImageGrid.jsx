import React, { useState } from 'react';

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid grid-cols-7 gap-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="cursor-pointer w-full h-auto"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
          onClick={handleCloseModal}
        >
          <div className="bg-white p-4 rounded-lg max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-xl font-bold" onClick={handleCloseModal}>
              X
            </button>
            <h2 className="text-xl font-bold">{selectedImage.alt}</h2>
            <div className="mt-4">
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto" />
              <div className="mt-4">
                <p><strong>Latitud (X):</strong> {selectedImage.latitude}</p>
                <p><strong>Fecha de captura:</strong> {selectedImage.captureDate}</p>
                {/* Agrega más información aquí */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
