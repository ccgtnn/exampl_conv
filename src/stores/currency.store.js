import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import * as currencyApi from '../api/currency.api'

/**
 * Хранилище для списка валют
 */
export const useCurrencyStore = defineStore('currency', () => {
  /* список валют */
  const currencyList = ref([
    {
      name: 'USD',
      fullName: 'доллары',
      shortName: 'долл.',
      costRUB: 0,
    },
    {
      name: 'EUR',
      fullName: 'евро',
      shortName: 'евр.',
      costRUB: 0,
    },
    {
      name: 'BTC',
      fullName: 'битконы',
      shortName: 'битк.',
      costRUB: 0,
    },
  ])

  /* имя текущ валюты */
  const currentCurrencyName = ref('USD')

  /* текущая валюта */
  const currentCurrency = computed(() =>
    currencyList.value.find((e) => e.name == currentCurrencyName.value)
  )

  /**
   * Возвращаем объект из массива currencyList по полю name
   * @param {*} name of currency
   * @returns currency item
   */
  function getCurencyByName(name = 'USD') {
    return currencyList.value.find((e) => e.name == name)
  }

  /**
   * Устанавливаем новое значение для currentCurrencyName
   * @param {String} name of currenc
   */
  function setCurrentCurencyName(name = 'USD') {
    currentCurrencyName.value = name
    console.log(name)
  }

  /**
   * Загрузка всех заданных котировок (расчёт в рублях)
   */
  async function loadCurrencyList() {
    /* проходим по массиву котировок и присваиваем им реальные значения */
    currencyList.value.map(async (e) => {
      const data = await currencyApi.convert(e.name, 'RUB', 1)
      e.costRUB = data.new_amount
      return e
    })
  }

  loadCurrencyList()

  return {
    currencyList,
    currentCurrencyName,
    setCurrentCurencyName,
    getCurencyByName,
    currentCurrency,
  }
})
