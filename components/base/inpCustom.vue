<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
});

const data = defineModel();
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="data"
    class="border border-primaryAccent px-4 py-2"
  />
</template>