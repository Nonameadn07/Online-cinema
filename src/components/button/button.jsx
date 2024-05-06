import './button.css'

import classnames from 'classnames'

export default function Button({onClick, type, size = 'S' , children}) {

    const btnClass = classnames({
        'btn': true,
        'btn-secondary': type == 'secondary',
        'btn-primary': type == 'primary',
        'btn-small' : size == 'S',
        'btn-medium' : size == 'm'
    })

    return(
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    )
}