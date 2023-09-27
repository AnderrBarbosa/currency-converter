const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // Válor em real
    const currencyValueConverted = document.querySelector('.currency-value') // Outras moedas
    
    console.log(currencySelect.value)

    const dolarToday = 4.9
    const euroToday = 5.2
    const convertedValue = inputCurrencyValue / dolarToday

    if(currencySelect.value == 'dolar' ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',{
            style:'currency',
            currency: 'USD'
        }) .format(inputCurrencyValue / dolarToday)
    }
    
    if(currencySelect.value == 'euro' ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',{
            style:'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue/euroToday)
    } 





    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-br',{
        style: 'currency',
        currency:'BRL'
    }).format(inputCurrencyValue)

    



    console.log(convertedValue)
    
}

function changeCurrency(){
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'euro'){
        currencyName.innerHTML = 'euro'
        currencyImage.src = './assets/euro.png'
        
    }
    
}
   


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click',convertValues)