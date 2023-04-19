const input = document.querySelector('#textarea1')
const results = document.querySelector('#textarea2')
const warningSection = document.querySelector('#warning_section')
const resultsSection = document.querySelector('#results_section')

const DICTIONARY = {
  e: 'enter',
  i: 'imes',
  o: 'ober',
  a: 'ai',
  u: 'ufat'
}


const handleClick = (type) => {
  const inputValue = input.value

  const newText = encryptDecrypt(inputValue, type)
  showResults(newText)
}


const encryptDecrypt = (text, type) => {
  for (const key in DICTIONARY) {

    if (type === 'encrypt') {
      text = text.replace(new RegExp(key, 'g'), DICTIONARY[key])
    } else {
      text = text.replace(new RegExp(DICTIONARY[key], 'g'), key)
    }
  }
  return text
}


const showResults = (text) => {
  results.value = text

  warningSection.classList.toggle('novisible', !!text)
  resultsSection.classList.toggle('novisible', !text)
}


const copyText = () => {
  navigator.clipboard.writeText(results.value)


  copyButton.innerText = 'Texto copiado'
  copyButton.classList.add('button--copy')
  setTimeout(() => {
    copyButton.innerText = 'Copiar'
    copyButton.classList.remove('button--copy')
  }, 1000)
}
