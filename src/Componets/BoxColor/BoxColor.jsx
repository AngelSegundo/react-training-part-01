import './BoxColor.css'


const BoxColor = ({ r, g, b }) => {

    return (
        <div className="box-color" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <p>
                RGB {r},{g},{b}
            </p>
        </div >
    )

}

export default BoxColor