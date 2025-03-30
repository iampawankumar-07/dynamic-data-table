import React from 'react'


function PaginationFloatingButton(
    {
        className,
        onClick,
        children,
        ariaLabel,
        disabled=null,
        onClickParams
    }
) {

    return(
        <button className={className}
        onClick={() => onClick(onClickParams)}
        aria-label={ariaLabel}
        disabled={disabled ? disabled : null}
        >
            {children}
        </button>
    )

}

export default PaginationFloatingButton