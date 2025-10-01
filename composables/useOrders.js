import { ref } from 'vue'
import { useCustomFetch } from './useCustomFetch'

export const useOrders = () => {
    const { fetchData } = useCustomFetch()
    const orders = ref([])
    const loading = ref(false)
    const error = ref(null)

    const params = reactive({
        dateFrom: '2025-09-01',
        dateTo: '2025-09-23',
        page: 1,
        key: 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie',
        limit: 10
    })

    const loadOrders = async (customParams = {}) => {
        loading.value = true
        error.value = null

        try {
            if (Object.keys(customParams).length > 0) {
                Object.keys(customParams).forEach(key => {
                    if (key in params) {
                        params[key] = customParams[key]
                    }
                })
            }

            const queryParams = new URLSearchParams()
            if (params.dateFrom && params.dateFrom.trim() !== '') {
                queryParams.append('dateFrom', params.dateFrom)
            } else {
                console.warn('dateFrom is empty!')
            }

            if (params.dateTo && params.dateTo.trim() !== '') {
                queryParams.append('dateTo', params.dateTo)
            } else {
                console.warn('dateTo is empty!')
            }

            queryParams.append('page', params.page.toString())
            queryParams.append('key', params.key)
            queryParams.append('limit', params.limit.toString())
            const url = `http://109.73.206.144:6969/api/orders?${queryParams}`

            const result = await fetchData(url)
            orders.value = result.data || []

        } catch (err) {
            error.value = err.message
            console.error('Error loading orders:', err)
        } finally {
            loading.value = false
        }
    }

    return {
        orders,
        loading,
        error,
        params,
        loadOrders
    }
}