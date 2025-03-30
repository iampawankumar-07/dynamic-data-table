import React from 'react'


function FloatingButton(
    {
        className,
        onClick,
        children
    }
) {

    return(
        <button className={className}
        onClick={onClick}
        >
            {children}
        </button>
    )

}

export default FloatingButton