import React from 'react';
// eslint-disable-next-line no-unused-vars
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      submit="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          type="url"
          id="avatar"
          name="avatar"
          className="popup__job popup__job_theme_place popup__input"
          placeholder="Ссылка на аватар"
          required
          ref={avatarRef}
        />
        <span className="popup__input-error" id="link-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
