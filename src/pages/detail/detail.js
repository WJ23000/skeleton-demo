export default {
    name: 'Detail',
    components: {

    },
    data() {
        return {

        }
    },
    created() {
        console.log("上级页面id:" + this.$route.query.id)
    },
    methods: {
        toIndex() {
            this.$router.push({ path: '/'});
        }
    }
}