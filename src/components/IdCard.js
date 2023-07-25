function IdCard(props){

    const { firstName, lastName, gender, height, birth, picture } = props;
    const birthDate = new Date(birth)
   
    return(
        <div className = 'id-card'> 
            <p className = 'category'> First Name: {firstName}</p>
            <p className = 'category'> Last Name: {lastName}</p>
            <p className = 'category'> Gender: {gender}</p>
            <p className = 'category'> Height: {height}</p>
            <p className = 'category'> Birth: {birthDate.toDateString()}</p>
            <img src={picture} width={100} alt='artist-id'/>
        </div>
    )
}

export default IdCard;