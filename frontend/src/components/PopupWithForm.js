function PopupWithForm({
  title,
  name,
  isOpen,
  buttonText,
  children,
  onClose,
  onSubmit,
  containerClass,
}) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen && "popup_visible"}`}
    >
      <div className={`popup__container ${containerClass}`}>
        <h2 className="popup__header">{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            type="submit"
            className="popup__save-button popup__save button popup__button"
          >
            {buttonText}
          </button>
        </form>
        <button
          type="button"
          className="popup__closed popup__closed_type_profile-edit button"
          onClick={onClose}
        />
      </div>
    </section>
  );
}

export default PopupWithForm;
