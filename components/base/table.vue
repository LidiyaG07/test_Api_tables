<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
  columns: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  emptyText: {
    type: String,
    default: "Нет данных для отображения",
  },
  rowClass: {
    type: Function,
    default: null,
  },
});

const emit = defineEmits(["sort"]);

const formatValue = (value, formatter) => {
  if (formatter && typeof formatter === "function") {
    return formatter(value);
  }
  return value ?? "-";
};
</script>



<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer min-w-32 text-balance"
            @click="column.sortable && $emit('sort', column.key)"
            :class="{ 'hover:bg-gray-100': column.sortable }"
          >
            <div class="flex items-center justify-start space-x-1">
              <span>{{ column.title }}</span>
              <span v-if="column.sortable" class="text-gray-400">↕️</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr
          v-for="(item, index) in data"
          :key="index"
          class="hover:bg-gray-50 transition-colors"
          :class="rowClass ? rowClass(item) : ''"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            class="px-4 py-3 text-sm"
            :class="column.class || ''"
          >
            <slot
              :name="`cell-${column.key}`"
              :value="item[column.key]"
              :item="item"
              :index="index"
            >
              {{ formatValue(item[column.key], column.formatter) }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="loading" class="text-center py-8">
      <div
        class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"
      ></div>
    </div>

    <div v-else-if="data.length === 0" class="text-center py-8 text-gray-500">
      {{ emptyText }}
    </div>
  </div>
</template>

