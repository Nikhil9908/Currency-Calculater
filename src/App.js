
import './App.css';
import CurrencyInput from './components/Currency';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState('USD')
  const [currency2, setCurrency2] = useState('INR')
  const [rates, setRates] = useState([])

  useEffect(()=> {
    axios.get(`http://data.fixer.io/api/latest?access_key=0ce522574c9b9c51f85813161ed6c284`)
    .then( response=>{
      setRates(response.data.rates)
      
    })
  }, [])

  useEffect(()=> {
    if(!!rates){
       handleAmount1Change(1)
    }
  },[rates])

  function format(number){
    return number.toFixed(4)
  }

  function handleAmount1Change(amount1){
    setAmount2(format(amount1* rates[currency2]/rates[currency1]))
    setAmount1(amount1)

  }

  function handelCurrency1Change(currency1){
    setAmount2(format(amount1* rates[currency2]/rates[currency1]))
    setCurrency1(currency1)
  }

  function handleAmount2Change(amount2){
    setAmount1(format(amount2* rates[currency1]/rates[currency2]))
    setAmount2(amount2)

  }

  function handelCurrency2Change(currency2){
    setAmount2(format(amount2* rates[currency1]/rates[currency2]))
    setCurrency2(currency2)
  }
  


  return (
    <div>
      <h1> Currency Converter </h1>
      <CurrencyInput onAmountChange={handleAmount1Change} onCurrencyChange={handelCurrency1Change} currencies={Object.keys(rates)} amount={amount1} currency={currency1} />
      <CurrencyInput onAmountChange={handleAmount2Change} onCurrencyChange={handelCurrency2Change} currencies={Object.keys(rates)} amount={amount2} currency={currency2} />
      
    </div>
  );
}

export default App;
