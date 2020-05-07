import { getLineMap } from "@/services/index";
import { TextMixins } from '@/mixins/TextMixins';

export default {
    name: 'Index',
    mixins: [TextMixins],
    components: {

    },
    data() {
        return {

        }
    },
    created() {
        // 获取折线图数据
        getLineMap("map").then((res) => {
            const lineMap = res;
            console.log("返回数据", lineMap);
        })
        // 改变TextMixins里的属性的值
        this.num+=this.num;
        // 直接调用TextMixins里的方法
        this.hello_one();
        // 覆盖TextMixins里的方法
        this.hello_two();
        // 给TextMixins里的方法传参
        this.hello_four("four from mixin!");
    },
    methods: {
        toDetail() {
            this.$router.push({ path: '/detail', query: { id: "1" } });
        },
        hello_two: function () {
            console.log('two from template!');
        }
    }
}