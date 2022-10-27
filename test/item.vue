<template>
  <div class="inner">
    <span class="index">{{ index }}</span>
    <span class="source">{{ source.text }}</span>
    <span class="other">{{ otherProp }}</span>
  </div>
</template>

<script>
export default {
  name: 'TestItem',

  props: {
    index: {
      type: Number
    },
    source: {
      type: Object,
      default() {
        return {}
      }
    },
    otherProp: {
      type: String
    }
  }
}
</script>
