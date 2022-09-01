import React from "react";
import deleteButton from "../images/delete.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "" : "element__delete_hidden"
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="element">
      <img
        className="element__img"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <img
        onClick={handleDeleteClick}
        src={deleteButton}
        type="button"
        className={`elements__button-delete element__delete button ${cardDeleteButtonClassName}`}
        title="Удалить"
        alt="Удалить"
      />
      <div className="element__card-conteiner">
        <h2 className="element__card-header">{props.card.name}</h2>
        <div className="elements__likes">
          <button
            type="button"
            className={`button ${cardLikeButtonClassName}`}
            title="Оценить фото"
            onClick={handleLikeClick}
          ></button>
          <span className="element__like-number">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;
