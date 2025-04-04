import React from 'react'


function FloatingButton(
    {
        className,
        onClick,
        children,
        ariaLabel,
        disabled=null
    }
) {

    return(
        <button className={className}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled ? disabled : null}
        >
            {children}
        </button>
    )

}

export default FloatingButton