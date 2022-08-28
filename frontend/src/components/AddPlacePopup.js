import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setNamePlace] = React.useState("");
  const [link, setLinkPlace] = React.useState("");

  function handleChangeTitle(e) {
    setNamePlace(e.target.value);
  }

  function handleChangeLink(e) {
    setLinkPlace(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  React.useEffect(() => {
    setNamePlace("");
    setLinkPlace("");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      buttonText="Сохранить"
      name="add-cards"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <input
        type="text"
        id="card-name-input"
        autoComplete="on"
        className="popup__input popup__input_type_card-name"
        name="nameplace"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        onChange={handleChangeTitle}
        value={name || ""}
      />
      <span id="error-card-link-input" className="popup__error"></span>

      <input
        type="url"
        id="card-link-input"
        autoComplete="on"
        className="popup__input popup__input_type_card-link"
        name="photolink"
        placeholder="Ссылка на картинку"
        required
        onChange={handleChangeLink}
        value={link || ""}
      />
      <span id="error-card-link-input" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
