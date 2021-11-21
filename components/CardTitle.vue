<template>
  <div>
    <h1>
      {{ heading }}
      <p class="font-weight-regular text--secondary subtitle-2">{{ subheading }}</p>
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
    },
    subheading: {
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>
