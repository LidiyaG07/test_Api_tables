import { ref } from 'vue'
import { useCustomFetch } from './useCustomFetch'

export const useIncomes = () => {
    const { fetchData } = useCustomFetch()
    const incomes = ref([])
    const loading = ref(false)
    const error = ref(null)

    const params = reactive({
        dateFrom: '2025-09-01',
        dateTo: '2025-09-23',
        page: 1,
        key: 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie',
        limit: 10
    })

    const loadIncomes = async (customParams = {}) => {
        loading.value = true
        error.value = null

        try {

            if (Object.keys(customParams).length > 0) {
                Object.assign(params, customParams)
            }
            const requestParams = { ...params }

            const queryString = new URLSearchParams(requestParams).toString()
            const url = `http://109.73.206.144:6969/api/incomes?${queryString}`
            console.log('url', url);

            const result = await fetchData(url)
            console.log('result', result);
            incomes.value = result.data || []

        } catch (err) {
            error.value = err.message
            console.error('Error loading orders:', err)
        } finally {
            loading.value = false
        }
    }


    return {
        error,
        loading,
        incomes,
        params,
        loadIncomes
    }
}