import './Currency.css'
import PropType from 'prop-types'
function CurrencyInput(props){
   return (
   <div className = "group">
    <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
    <select value={props.currency}  onChange={ev => props.onCurrencyChange(ev.target.value)} >
     {props.currencies.map((currency => (
        <option value={currency} > {currency} </option>
     ))) }
    </select>


    </div>
   )
   
}

CurrencyInput.propType = {
    amount: PropType.number.isRequired,
    currency: PropType.string.isRequired,
    currencies: PropType.array,
    onAmountChange: PropType.func,
    onCurrencyChange: PropType.func,

    
   }

export default CurrencyInput