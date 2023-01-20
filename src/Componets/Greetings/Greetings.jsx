import './Greetings.css'

const Greetings = (props) => {

    let saludo

    switch (props.lang) {
        case 'de':
            saludo = 'Hallo'
            break;
        case 'en':
            saludo = 'Hello'
            break;
        case 'fr':
            saludo = 'Bonjour'
            break;
        case 'es':
            saludo = 'Holi'
            break;
        default:
            saludo = 'Aloha'
            break;
    }

    return (
        <p>{saludo}, {props.children}</p>
    )
}

export default Greetings



