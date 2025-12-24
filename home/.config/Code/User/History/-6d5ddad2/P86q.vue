<script>

export default {
    data(){
        return{
            ujalapanyag:{
                nev:'',
                kategoria:'',
                lejaratiido:'',
                mennyiseg:0
            }
        }
    },
    methods:{
        addmethod () {
            this.$emit('add-alapanyag', this.ujalapanyag);
            this.ujalapanyag={
                nev:'',
                kategoria:'',
                lejaratiido:'',
                mennyiseg:'',
                info: false,
                used: false,
            }
        }
    },
    emits: ['add-alapanyag']
}

</script>