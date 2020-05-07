export const TextMixins = {
    data() {
        return {
            num: 1
        }
    },
    created() {
        this.hello();
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!');
        },
        hello_one: function () {
            console.log('one from mixin!');
        },
        hello_two: function () {
            console.log('two from mixin!');
        },
        hello_four: function (value) {
            console.log(value);
        }
    }
}