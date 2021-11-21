<template>
  <div>
    <h2 class="font-weight-regular">
      {{ heading }}
      <p class="font-weight-regular text--secondary subtitle-2">{{ subheading }}</p>
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String
    },
    subheading: {
      type: String
    }
  },
  data() {
    return {}
  }
}
</script>
