import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card.link && "popup_visible"}`}>
      <div className="popup__image-container">
        <img
          className="popup__open-image"
          src={card.link}
          alt={card.name}
        />
        <p className="popup__image-caption">{card.name}</p>
        <button
          className="popup__closed popup__closed_type_image button"
          type="button"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
