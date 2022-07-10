import React from 'react'

function RegularBtn({
    label = 'Click me!',
    clickHandler = () => console.log('You clicked the button'),
    type = '',
    width = '',
    customStyle = '',
    padding = 'py-2 px-4',
    bgColor = 'mainBgColor',
    txtStyle = 'text-xl space-x-2',
}) {
    return (
        <button
            onClick={clickHandler}
            type={type}
            className={
                `
                ${customStyle} ${width} ${padding} ${bgColor} ${txtStyle} 
                hover:shadow-xl hover:shadow-gray-400 active:scale-75 active:opacity-80
                transition transform duration-200 ease-out 
                `
            }
        >
            {label}
        </button>
    )
}

export default RegularBtn
