<script setup>
import { isReactive, isRef, toRaw, useAttrs } from 'vue'
import { isPlainObject } from 'lodash-es'

const attrs = useAttrs()

console.log('attrs: ', attrs)
console.log('isReactive(attrs): ', isReactive(attrs))
console.log('isRef(attrs): ', isRef(attrs))
console.log('isPlainObject(attrs): ', isPlainObject(attrs))
console.log('isPlainObject(toRaw(attrs)): ', isPlainObject(toRaw(attrs)))
</script>

<!-- <script>
import { isReactive, isRef, toRaw } from 'vue'
import { isPlainObject } from 'lodash-es'

export default {
  created() {
    console.log('this.$attrs: ', this.$attrs)
    console.log('isReactive(this.$attrs): ', isReactive(this.$attrs))
    console.log('isRef(this.$attrs): ', isRef(this.$attrs))
    console.log('isPlainObject(this.$attrs): ', isPlainObject(this.$attrs))
    console.log('isPlainObject(toRaw(this.$attrs)): ', isPlainObject(toRaw(this.$attrs)))
  },
}
</script> -->

<template>
</template>
