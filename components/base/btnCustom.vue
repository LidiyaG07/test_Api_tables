<script setup>
const props = defineProps({
  typeBtn: String,
});
</script>

<template>
  <button
    :type="typeBtn"
    class="border border-primaryAccent px-4 py-2 uppercase bg-gray-50"
  >
    <slot />
  </button>
</template>