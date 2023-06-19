import axios from 'axios'

/**
 * Запрос на конвертацию валюты https://currency-converter-by-api-ninjas.p.rapidapi.com
 * @param {*} from
 * @param {*} to
 * @param {*} amount
 */
export async function convert(from = 'USD', to = 'RUB', amount = 1) {
  const options = {
    method: 'GET',
    url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
    params: { have: from, want: to, amount },
    headers: {
      'X-RapidAPI-Key': 'd39f886ba0msh97be8162030e4b7p1820f2jsn631aaec7079f',
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
    },
  }

  const res = await axios.request(options)
  return res.data
}
