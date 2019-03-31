<template>
    <div>
        <div class="daily">
            <div class="daily-menu">
                <div 
                    class="daily-menu-item"
                    :class="{on: type === 'recommend'}"
                >每日推荐</div>
                <div 
                    class="daily-menu-item"
                    :class="{on: type === 'daily'}"
                    @click="showThemes = !showThemes"
                >主题日报</div>
                <ul v-show="showThemes">
                    <li v-for="(theme, index) in themes" :key="index">
                        <a
                            :class="{on: theme.id === themeID && type === 'daily'}"
                            @click="handleToTheme(theme.id)"
                        >{{theme.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="daily-list">
                <Item></Item>
            </div>
            <daily-article></daily-article>
        </div>
    </div>
</template>

<script>
    import $ from './libs/util'
    export default {
        data() {
            return {
                themes: [],
                showThemes: false,
                type: 'recommend',
                themeId: 0,
            }
        },
        methods: {
            getThemes() {
                $.ajax.get('themes').then(res => {
                    this.themes =res.others;
                })
            },
            handleToTheme() {
                this.type = 'daily';
                this.themeId = id;
                this.list = [];
                $.ajax.get('theme/'+id).then(res => {
                    this.list = res.stories
                        .fileter(item => item.type !== 1);
                })
            },
            handleToRecommend() {
                this.type = 'recommend';
                this.recommendList = [];
                this.dailyTime = $.getTodayTime();
                this.getRecommendList();
            },
            getRecommendList() {
                this.isLoading = true;
                const prevDay = $.prevDay(this.dailyTime + 86400000);
                $.ajax.get('news/before' + prevDay).then(res => {
                    this.recommendList.push(res);
                    this.isLoading = false;
                })
            }
        },
        mounted() {
            this.getThemes();
            this.getRecommendList();
        }
    }
</script>

