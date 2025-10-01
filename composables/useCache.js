import { ref } from 'vue';
const memoryCache = ref({});
export const useCache = () => {
    // Добавить данные в кэш
    const setCache = (key, data, ttl) => {
        memoryCache.value[key] = {
            data,
            timestamp: Date.now() + ttl
        };
    };
    // Получить данные из кэша
    const getCache = (key) => {
        const item = memoryCache.value[key];
        if (!item) return null;
        if (Date.now() > item.timestamp) {
            delete memoryCache.value[key]; // Удалить просроченный кэш
            return null;
        }
        return item.data;
    };
    // Очистить кэш
    const clearCache = (key) => {
        if (key) {
            delete memoryCache.value[key];
        } else {
            memoryCache.value = {};
        }
    };
    return { setCache, getCache, clearCache };
};