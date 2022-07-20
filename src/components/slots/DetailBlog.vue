<template>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="judul">
                        <h2 class="modal-title">Perkenalan Diri</h2>
                    </slot>
                </div>
                <div class="modal-body">
                  <slot name="gambar">
                      <img src="https://c4.wallpaperflare.com/wallpaper/126/117/95/quote-motivational-digital-art-typography-wallpaper-thumb.jpg" style="width: 100%; box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);" alt=""/>
                  </slot>
                  <slot name ="isi">
                  <p>Lorem ipssum dolor sit amet</p>  
                  </slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal"><router-link to="/detailblog">Read More</router-link></button>
                </div>
            </div>
        </div>
</template>

<script>
	export default {
    name: "DetailBlog",
    props: {},
    data() {},
    methods:{},
    mounted() {}
  }
</script>