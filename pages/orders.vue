<script setup>
import { useOrders } from "~/composables/useOrders";

const { orders, params, loadOrders } = useOrders();

const filterParams = ref({ ...params });

const handleParamsChange = (newParams) => {
  Object.assign(params, newParams);
};

const handleSubmit = async () => {
  await loadOrders();
};

onMounted(() => {
  loadOrders();
});
</script>

<template>
  <div class="mx-auto max-w-7xl w-full">
    <h2 class="mb-10 uppercase">Orders</h2>
    <div class="flex gap-5 items-start justify-between">
      <BaseTable :data="orders" :columns="orderTableColumns">
        <template #cell-is_cancel="{ value }">
          <span
            :class="[
              'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
              value ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800',
            ]"
          >
            {{ value ? "Отменен" : "Активен" }}
          </span>
        </template>

        <!-- <template #cell-total_price="{ value }">
          <span class="font-semibold">{{ value }} ₽</span>
        </template> -->
      </BaseTable>
      <div v-if="loading" class="text-center py-8">Загрузка...</div>

      <div v-else-if="error" class="text-red-600 p-4 bg-red-50 rounded">
        {{ error }}
      </div>
      <BaseFormParams
        :params="filterParams"
        @params-changed="handleParamsChange"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>