import { TextMixins } from '@/mixins/TextMixins';

export default {
    name: 'Detail',
    mixins: [TextMixins],
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