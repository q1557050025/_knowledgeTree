<template>
  <section>
      <icon-base icon-name="moon" icon-color="#999"><icon-moon /></icon-base>
      <icon-base icon-name="write"><icon-write /></icon-base>
      <icon-base icon-name="image"><icon-image /></icon-base>
      <icon-base icon-name="garbage"><icon-garbage /></icon-base>
      <icon-base icon-name="calendar"><icon-calendar /></icon-base>
      <icon-base icon-name="envelope"><icon-envelope /></icon-base>
      <br>
      <icon-base><icon-box /></icon-base>
      You can use whatever icon you want and keep the base consistent with slots
  </section>
</template>

<script>
import IconBase from './IconBase.vue'
import IconEnvelope from './icons/IconEnvelope.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconGarbage from './icons/IconGarbage.vue'
import IconImage from './icons/IconImage.vue'
import IconWrite from './icons/IconWrite.vue'
import IconMoon from './icons/IconMoon.vue'
import IconBox from './icons/IconBox.vue'

export default {
  components: {
    IconBase,
    IconEnvelope,
    IconCalendar,
    IconGarbage,
    IconImage,
    IconWrite,
    IconMoon,
    IconBox
  }
}
</script>

