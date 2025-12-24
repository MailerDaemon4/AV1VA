<script>
    export default {
        name: 'InputComponent',
        props: {
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: 'Enter text...'
            }
        },
        methods: {
            updateValue(event) {
                this.$emit('input', event.target.value);
            }
        }
    }
</script>