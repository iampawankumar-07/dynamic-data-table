import React from 'react';
import './Button.css';

function Button({
  type = 'submit',
  onSubmitHandleSearch,
  variant = 'search',
  searchValue,
  btnText = 'search',
}) {
  return (
    <div className="btn_outer_container">
      <button
        className={`search-icon ${variant} txt ${
          searchValue === '' ? 'hide_btn' : ''
        }`}
        type={type}
        onClick={onSubmitHandleSearch}
        aria-label="button"
      >
        {btnText}
      </button>
    </div>
  );
}

export default Button;
