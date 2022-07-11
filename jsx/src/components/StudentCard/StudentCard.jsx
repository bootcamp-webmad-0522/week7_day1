const StudentCard = () => {

    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1)
    }


    const name = 'hero'

    const student = {
        firstName: 'ana',
        lastName: 'martinez'
    }

    const { firstName, lastName } = student

    return (
        <article class={name}>
            {heading}
            <h3> Hi, {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)} !</h3>
            <hr />
        </article>
    )
}

export default StudentCard