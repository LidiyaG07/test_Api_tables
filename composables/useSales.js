import { ref } from 'vue'
import { useCustomFetch } from './useCustomFetch'

export const useSales = () => {
    const sales = ref([])
    const error = ref(null)
    const loading = ref(false)
    const { fetchData } = useCustomFetch()

    const params = reactive({
        dateFrom: '2025-09-01',
        dateTo: '2025-10-01',
        page: 1,
        key: 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie',
        limit: 10
    })

    const loadSales = async (customParams = {}) => {
        loading.value = true
        error.value = null

        try {
            if (Object.keys(customParams).length > 0) {
                Object.assign(params, customParams)
            }

            const requestParams = { ...params }

            const queryString = new URLSearchParams(requestParams).toString()
            const url = `http://109.73.206.144:6969/api/sales?${queryString}`

            const result = await fetchData(url)
            sales.value = result.data || []

        } catch (err) {
            error.value = err.message
            console.error('Error loading orders:', err)
        } finally {
            loading.value = false
        }
    }

    return {
        loadSales,
        loading,
        error,
        params,
        sales
    }

}