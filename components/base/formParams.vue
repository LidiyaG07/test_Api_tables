<script setup>
const props = defineProps({
  params: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const emit = defineEmits(["params-changed", "submit", "reset"]);

const updateParam = (key, value) => {
  const updatedParams = { ...props.params, [key]: value };
  emit("params-changed", updatedParams);
};

const handleSubmit = () => {
  emit("submit");
};

const handleReset = () => {
  const resetParams = {
    dateFrom: "",
    dateTo: "",
    page: 1,
    limit: 10,
  };
  emit("params-changed", resetParams);
  emit("reset");
};

// const handleChange = useDebounceFn(() => {
//   emit("params-changed", props.params);
// }, 500);
// @change="handleChange"
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="p-5 border border-primaryAccent flex flex-col gap-5"
  >
    <h3 class="text-center uppercase">Enter params</h3>
    <BaseInpCustom
      type="data"
      placeholder="Enter data from"
      :modelValue="params.dateFrom"
      @update:modelValue="(value) => updateParam('dateFrom', value)"
    />
    <BaseInpCustom
      type="data"
      placeholder="Enter data to"
      :modelValue="params.dateTo"
      @update:modelValue="(value) => updateParam('dateTo', value)"
    />
    <BaseInpCustom
      type="number"
      placeholder="Enter page"
      :modelValue="params.page"
      @update:modelValue="(value) => updateParam('page', value)"
    />
    <BaseInpCustom
      type="number"
      placeholder="Enter limit"
      :modelValue="params.limit"
      @update:modelValue="(value) => updateParam('limit', value)"
    />
    <BaseBtnCustom typeBtn="submit" @click="handleSubmit">Send</BaseBtnCustom>
  </form>
</template>