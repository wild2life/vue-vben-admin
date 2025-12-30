<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
onMounted(() => {
  console.log('route query:', route.query); // route query: {}
  console.log(route.query.build_template_id); // undefined
  console.log(router.currentRoute.value.query.build_template_id); // undefined
});

watch(
  () => route.query,
  (newQuery) => {
    console.log('route query changed:', newQuery); // route query changed: {}
  },
  { immediate: true },
);
</script>
<template>
  <div>task页面</div>
</template>
