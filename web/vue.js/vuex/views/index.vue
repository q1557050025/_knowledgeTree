<template>
    <div>
        <h1>首页</h1>
        {{count}}
        <router-link to="/about">跳转到 about</router-link>
    </div>
</template>
<script>
    export default {
        computed: {
            count() {
                return this.$store.state.count
            }
        }
    }
</script>