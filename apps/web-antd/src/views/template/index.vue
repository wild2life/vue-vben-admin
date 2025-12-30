<script lang="ts" setup>
import { useRouter } from 'vue-router';

import { Page } from '@vben/common-ui';

import { Button } from 'ant-design-vue';

const router = useRouter();
const jumpToTaskList = () => {
  router.push({ path: '/task', query: { build_template_id: 1 } });
};
</script>
<template>
  <Page auto-content-height>
    <Button @click="jumpToTaskList">点击跳转至task</Button>
  </Page>
</template>
