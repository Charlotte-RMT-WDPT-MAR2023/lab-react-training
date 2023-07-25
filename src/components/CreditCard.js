import visaLogo from '../assets/images/visa.png'
import masterCardLogo from '../assets/images/mastercard.png'

function CreditCard (props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
   
   
    return(

        <div className='credit-card-container'>
        <div className = 'credit-card' style = {{ backgroundColor : bgColor, color: color}}>
        <img src= {type === 'Master Card' ? masterCardLogo : visaLogo } width = {30} alt='user-card'/>
        <p className='card-number'><b>•••• •••• •••• {number.slice(-4)}</b></p>
            <div className='card-info'>
            <p>Expires {expirationMonth}/{expirationYear} <span>{bank}</span></p>
            <p>{owner}</p>
            </div>
        </div>
    </div>
    )
}



export default CreditCard;