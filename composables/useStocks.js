import { ref } from 'vue'
import { useCustomFetch } from './useCustomFetch'

export const useStocks = () => {
    const stocks = ref([])
    const error = ref(null)
    const loading = ref(false)
    const { fetchData } = useCustomFetch()

    const getCurrentDate = () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const day = String(now.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    const params = reactive({
        dateFrom: getCurrentDate(),
        dateTo: '2025-10-01',
        page: 1,
        key: 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie',
        limit: 10
    })

    const loadStocks = async (customParams = {}) => {
        loading.value = true
        error.value = null

        try {
            if (Object.keys(customParams).length > 0) {
                Object.assign(params, customParams)
            }

            const requestParams = { ...params }

            const queryString = new URLSearchParams(requestParams).toString()
            const url = `http://109.73.206.144:6969/api/stocks?${queryString}`
            console.log('url', url);

            const result = await fetchData(url)
            stocks.value = result.data || []

        } catch (err) {
            error.value = err.message
            console.error('Error loading orders:', err)
        } finally {
            loading.value = false
        }
    }

    return {
        loading,
        error,
        stocks,
        loadStocks,
        params
    }

}