<template>
    <div class="modal fade" id="modalDeleteConfirmation" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Apakah anda yakin ingin menghapus artikel?</h5>
                </div>
                <div class="modal-body">
                   <slot name="body">
                   </slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="dismiss()">Tidak</button>
                     <button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="close()">Ya</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
    name: "ModalDeleteConfirmation",
    props: {},
    data() {},
    methods:{
        close(){
            this.$emit('close', true);
        },
        dismiss(){
            this.$emit('close', false);
        }
    },
    mounted() {}
  }
</script>