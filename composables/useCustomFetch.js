import { useRuntimeConfig } from '#app';
import { useCache } from './useCache';


export const useCustomFetch = () => {
    const config = useRuntimeConfig();
    const { getCache, setCache } = useCache();
    const fetchData = async (endpoint, options = {}) => {
        const { cacheKey = endpoint, ttl = 0, force = false } = options;
        // Пробуем получить из кэша
        if (!force && ttl > 0) {
            const cached = getCache(cacheKey);
            if (cached) return cached;
        }
        // Для локальных файлов используем относительные пути
        const fullUrl = endpoint.startsWith('/api/')
            ? endpoint // локальный файл
            : endpoint.startsWith('http')
                ? endpoint // внешний URL
                : `${config.public.apiBase}${endpoint}`; // будущий API
        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status} ${endpoint}`);
        }
        const data = await response.json();
        // Сохраняем в кэш если нужно
        if (ttl > 0) {
            setCache(cacheKey, data, ttl);
        }
        return data;
    };
    return { fetchData };
}