import './IdCard.css'

const IdCard = ({ lastName, firstNAme, gender, height, birth, picture }) => {
    return (
        <div>
            <div>
                <img src={picture} alt="" width='100px' />
            </div>
            <div>
                <p>First name: "{firstNAme}"</p>
                <p>Last name: "{lastName}"</p>
                <p>Gender: "{gender}"</p>
                <p>Heigth "{height}"</p>
                <p>Birth: "{birth}"</p>
            </div>
        </div>
    )
}

export default IdCard



