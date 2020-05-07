// import { getLineMap } from "@/services/index";

export default {
    name: 'Index',
    components: {

    },
    data() {
        return {

        }
    },
    created() {
        // 获取折线图数据
        // getLineMap("map").then((res) => {
        //     console.log("返回数据", res);
        // })
    },
    methods: {
        toDetail() {
            this.$router.push({ path: '/detail', query: { id: "1" } });
        }
    }
}