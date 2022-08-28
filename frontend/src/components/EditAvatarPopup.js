import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="change-avatar"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      containerClass="popup__container_avatar"
    >
      <input
        type="url"
        id="avatar-link-input"
        autoComplete="on"
        className="popup__input popup__input_type_avatar-link"
        name="avatar"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span id="add-url-avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
