import './StudentCard.css'

const StudentCard = ({ image, debt, firstName, lastName, details, age, city }) => {

    return (
        <article className="student-card">

            <img src={image} alt="Germán" />

            <footer>
                <h3>{firstName} {lastName} {debt ? '⚠️' : '✅'}</h3>
                <hr />
                <p>Bootcamp de {details.bootcamp} ({details.date})</p>
                <p>Residente en {city}, edad {age} años</p>

                {debt && <p className='warning'>Aún dispone de {debt} pendientes </p>}
            </footer>

        </article>
    )
}


export default StudentCard