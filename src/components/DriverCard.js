
function DriverCard (props) {
    const { name, rating, img, car } = props;
   
    const wholeRating = Math.round(rating);
    const starStrings = ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];
    const stars = starStrings[Math.max(0, Math.min(wholeRating, 5))];
   
    return(

        <div className='driver-card-container'>
        <div className = 'driver-card' style = {{ backgroundColor : "blue", color: "white"}}>
        <img src= {img } width = {40} alt='user-profile'/>
       <p>{name}</p> 
       <p> {stars}</p>
       <p> {car.model} - {car.licensePlate}</p>
        </div>
    </div>
    )
}

export default DriverCard;