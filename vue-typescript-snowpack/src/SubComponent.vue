<template>
  <div class="Sub-component">
    {{ state.subMessage }}
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';

interface State {
  subMessage: string;
}

export default defineComponent({
  setup() {
    const state = reactive({
      subMessage: 'Sub Component here!!!',
    });
    return {
      state,
    };
  },
});
</script>

<style>
.Sub-component {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #32485f;
}
</style>
