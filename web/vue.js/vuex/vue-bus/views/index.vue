<template>
    <div>
        <h1>首页</h1>
        <span>{{count}}</span>
        <button @click="handleIncrement">+</button>
        <button @click="handleDecrease">-</button>
        <button @click="handleIncreaseFive">+5</button>
        <router-link to="/about">跳转到 about</router-link></br>
        <span>{{list}}</span>
        <div>{{listCount}}</div>
        <div><button @click="handleActionIncrease">通过action加1</button></div>
        <div><button @click="handleAsyncIncrease">AsyncIncrease</button></div>
        <div>
            <h1>vue-bus</h1>
            <Counter :number="number"></Counter>
        </div>
    </div>
</template>
<script>
    import Counter from './Counter.vue'

    export default {
        components: {
            Counter
        },
        data() {
            return {
                number: 0,
            }
        },
        created() {
            this.$bus.on('add', this.handleAddRandom);
        },
        beforeDestroy() {
            this.$bus.off('add', this.handleAddRandom)
        },
        computed: {
            count() {
                return this.$store.state.count
            },
            list() {
                return this.$store.getters.filteredList;
            },
            listCount() {
                return this.$store.getters.listCount;
            }
        },
        methods: {
            handleIncrement() {
                this.$store.commit('increment')
            },
            handleDecrease() {
                this.$store.commit('decrease')
            },
            handleIncreaseFive() {
                this.$store.commit('increment', 5)
            },
            handleActionIncrease() {
                this.$store.dispatch('increase')
            },
            //异步
            handleAsyncIncrease() {
                this.$store.dispatch('asyncIncrease').then(() => {
                    console.log(this.$store.state.count);
                });
            },
            handleAddRandom(num) {
                this.number += num
            }
        }
    }
</script>