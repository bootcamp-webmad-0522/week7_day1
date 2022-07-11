import './Button.css'

const Button = (props) => {

    const classTheme = `theme-${props.theme}`

    return (
        <button className={classTheme}>
            {props.text}
        </button>
    )
}

export default Button