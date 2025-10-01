import { formatNumber } from "chart.js/helpers";

export const orderTableColumns = [
    {
        key: 'barcode',
        title: 'Номер заказа',
        sortable: true
    },
    {
        key: 'date',
        title: 'Дата',
        formatter: (value) => formatDate(value),
        sortable: true
    },
    {
        key: 'supplier_article',
        title: 'Артикул',
        class: 'font-semibold'
    },
    {
        key: 'total_price',
        title: 'Цена',
        class: 'font-semibold',
        formatter: formatNumber
    },
    {
        key: 'discount_percent',
        title: 'Скидка',
        class: 'font-semibold'
    },
    {
        key: 'warehouse_name',
        title: 'Склад',
        class: 'font-semibold'
    },
    {
        key: 'oblast',
        title: 'Регион',
        class: 'font-semibold'
    },
    {
        key: 'is_cancel',
        title: 'Статус',
        class: 'font-semibold'
    },
];

export const incomesTableColumns = [
    {
        key: 'date',
        title: 'Дата',
        sortable: true,
        formatter: (value) => formatDate(value),
    },
    {
        key: 'quantity',
        title: 'Количество'
    },
    {
        key: 'total_price',
        title: 'Цена',
        formatter: (value) => formatNumber(value)
    },
    {
        key: 'date_close',
        title: 'Дата закрытия',
        sortable: true,
        formatter: (value) => formatDate(value),
    },
    {
        key: 'warehouse_name',
        title: 'Склад'
    },
    {
        key: 'barcode',
        title: 'Штрих-код'
    }
];

export const stocksTableColumns = [
    {
        key: 'date',
        title: 'Дата',
        sortable: true,
        formatter: (value) => formatDate(value),
    },
    {
        key: 'barcode',
        title: 'Штрих-код',
    },
    {
        key: 'quantity',
        title: 'Количество',
    },
    {
        key: 'is_supply',
        title: 'Поставка'
    },
    {
        key: 'is_realization',
        title: 'Реализация'
    },
    {
        key: 'quantity_full',
        title: 'Общее кол-во'
    },
    {
        key: 'warehouse_name',
        title: 'Склад'
    },
    {
        key: 'price',
        title: 'Цена',
        formatter: formatNumber
    },
    {
        key: 'discount',
        title: 'Скидка'
    }

]

export const salesTableColumns = [
    {
        key: 'date',
        title: 'Дата',
        sortable: true,
        formatter: (value) => formatDate(value),
    },
    {
        key: 'barcode',
        title: 'Штрих-код',
    },
    {
        key: 'quantity',
        title: 'Количество',
    },
    {
        key: 'is_supply',
        title: 'Поставка'
    },
    {
        key: 'is_realization',
        title: 'Реализация'
    },
    {
        key: 'warehouse_name',
        title: 'Склад'
    },
    {
        key: 'country_name',
        title: 'Страна'
    },
    {
        key: 'oblast_okrug_name',
        title: 'Округ'
    },
    {
        key: 'region_name',
        title: 'Регион'
    },
    {
        key: 'total_price',
        title: 'Цена',
        formatter: formatNumber
    },
    {
        key: 'discount_percent',
        title: 'Скидка, %'
    },
    {
        key: 'finished_price',
        title: 'Итого',
        formatter: formatNumber
    },
    {
        key: 'price_with_disc',
        title: 'Цена со скидкой',
        formatter: formatNumber
    }
]