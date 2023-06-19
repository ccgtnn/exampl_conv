import { computed, provide } from 'vue'
import { useCurrencyStore } from '../../stores/currency.store'
import { useSearchCurrency } from './useSearchCurrency'

/**
 * Подготовка данных с пагинацией и фильтрами
 */
export function usePrepCurrency() {
  const currencyStore = useCurrencyStore()
  const search = useSearchCurrency()

  // Получаем все данные
  const itemsAllList = computed(() => {
    let data = currencyStore.currencyList

    // поиск
    if (search.isActive.value) data = data.filter((e) => search.check(e))

    return data
  })

  // Считаем колличество всех записей
  const itemsAllCount = computed(() => itemsAllList.value?.length)

  provide('currencySearchField', search.searchField)
  provide('currencyList', itemsAllList)
  provide('currencyAllCount', itemsAllCount)
  provide(
    'currentCurrencyName',
    computed(() => currencyStore.currentCurrencyName)
  )
  provide('setCurrentCurencyName', currencyStore.setCurrentCurencyName)

  return {}
}
