<template>
  <div class="col-md-12" style="text-align:center;">
    <div class="mx-2" >
      <div style="background: white; min-height: 500px; padding-top: 2rem;">
        <div>
          <h1 v-if="zonawaktu == 'pagi'">Hello Selamat Pagi</h1>
           <h1 v-else-if="zonawaktu == 'datang'">Hello Selamat Datang</h1>
          <h1 v-else-if="zonawaktu == 'siang'">Hello Selamat Siang</h1>
          <h1 v-else-if="zonawaktu == 'malam'">Hello Selamat Malam</h1>
          <h1 v-else>Zona Waktu Tidak Diketahui</h1>
        </div>
      <div v-html="header"></div>
      <img v-bind:src="gambar" alt="" style="width: 100%; height: 400px; object-fit: cover;">
      <div>
        <p>{{informasi}}</p>
      </div>
      </div>
      <div></div>
    </div>
  </div>

  <!-- START PRINT ANGKA_PERTAMA & KEDUA -->
  <div class="mx-2 col-md-12" style="padding-top: 25px; text-align:center;">
    <h3 style="font-weight: bold;">Coba Fungsi</h3>
    <table class="table table-info table-striped">
      <tbody>
        <tr>
          <td style="width: 150px;">Angka Pertama</td>
          <td style="width: 1px;">:</td>
          <td>{{angka_pertama}}</td>
        </tr>
        <tr>
          <td>Angka Kedua</td>
          <td>:</td>
          <td>{{angka_kedua}}</td>
        </tr>
        <tr>
          <td>Hasil</td>
          <td>:</td>
          <td>{{hasil}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- END OF PRINT ANGKA -->

  <div class="mx-2 col-md-12" style="padding-top: 50px; padding-bottom: 2rem;">
    <h3 style="font-weight: bold;">Tabel Blog</h3>
    <div style="margin-bottom:20px;">
      <input style="margin-bottom: 20px;" type="text" class="form-control" placeholder="Judul" v-model="judul">
      <code>{{judul}}</code>
      <input style="margin-bottom: 20px;" type="text" class="form-control" placeholder="Isi" v-model="isi">
      <button class="btn btn-success" v-on:click="addPost()">Add Post</button>
    </div>
    <table class="table table-info table-striped">
      <tbody>
        <tr>
          <th style="width:1px;">Judul</th>
          <th>Isi</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="post.judul">
          <td style="font-weight: bold; width: 200px; text-align: left;">{{post.judul}} {{index}}</td>
          <td style="text-align: justify;">{{post.isi}}</td>
          <td style="text-align: center;">
            <button class="btn btn-danger" v-on:click="remove(index)">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- START OF COMPONENT BLOG -->
  <div class="col-md-8" style="padding-top: 3rem;"><h3 style="font-weight:bold;">Component Blog</h3></div>
  <div class="row">
    <div style="margin: 0px;" class="col-md-3" v-for="post in posts" :key="post.judul">
      <Blog
      v-bind:judul="post.judul"
      v-bind:isi="post.isi"
      />
    </div>
  </div>
  <!-- END OF COMPONENT BLOG -->

  <!-- START OF SLOTS -->
  <div class="col-md-12" style="padding-top: 2rem;">
    <h3 style="font-weight:bold;">Simulasi Modal Detail</h3>
    <DetailBlog>
    <template v-slot:judul>
      <h2 class="modal-title">Injeksi Judul</h2>
    </template>
    <template v-slot:gambar>
      <img style="width: 100%;" src="https://c4.wallpaperflare.com/wallpaper/126/117/95/quote-motivational-digital-art-typography-wallpaper-thumb.jpg" alt=""/>
    </template>
    <template v-slot:isi>
      <b>Hallo ini adalah isi yang berasal dari injeksi judul</b>
    </template>
  </DetailBlog>
  </div>
  <!-- END OF SLOTS -->

  <!-- START OF MODAL CONFIRMATION DELETE -->
  <div class="col-md-8">
    <ModalDeleteConfirmation 
  v-on:close="closeModalDeleteConfirmation($event)">
    <template v-slot:body>
      <span><b>Judul</b> : {{selectedPost.data.judul}}</span><br>
       <span><b>Isi</b> : {{selectedPost.data.isi}}</span>
    </template>
  </ModalDeleteConfirmation>
  <!-- END OF MODAL CONFIRMATION DELETE -->
</div>
  <ModalDeleteConfirmation 
  v-on:close="closeModalDeleteConfirmation($event)">
    <template v-slot:body>
      <span><b>Judul</b> : {{selectedPost.data.judul}}</span><br>
       <span><b>Isi</b> : {{selectedPost.data.isi}}</span>
    </template>
  </ModalDeleteConfirmation>
  <!-- END OF MODAL CONFIRMATION DELETE -->


</template>

<script>
import Blog from '@/components/Blog.vue';
import DetailBlog from '@/components/slots/DetailBlog.vue';
import ModalDeleteConfirmation from '@/components/modal/ModalDeleteConfirmation.vue';
import $ from 'jquery';

export default {
  name: 'Home',
  components: {
    Blog,
    DetailBlog,
    ModalDeleteConfirmation,
  },
  methods:{
    closeModalDeleteConfirmation: function(value){
      console.log(value);
      console.log(this.selectedPost.index);
      if(value === true) {
        let selectedIndex = this.selectedPost.index;
        this.posts.splice(selectedIndex, 1);
      }else{
        $("#modalDeleteConfirmation").modal("hide");
      }
    },
    remove: function(INDEX){
      this.selectedPost = {index:INDEX, data:this.posts[INDEX]};
      $("#modalDeleteConfirmation").modal("show");
    },
    penjumlahan: function(){
      this.hasil = (this.angka_pertama + this.angka_kedua);
    },
    inputJudul: function(event){
      // this.judul = event.target.value;
    },
    inputIsi: function(event){
     // this.isi = event.target.value;
    },
    addPost: function(){
      let data = {};
      data.judul = this.judul;
      data.isi = this.isi;
      this.posts.push(data);
    }
  },
  data() {
    return {
      selectedPost:{
        data:{
          judul:"",
          isi:""
        }
      },

      judul:"",
      isi:"",

      angka_pertama:25,
      angka_kedua:25,
      hasil:0,

      posts:[
      {id: 0, judul:"Judul1", isi:"Lorem, ipsum dolor sit amet"},
      {id: 1, judul:"Judul2", isi:"Lorem, ipsum dolor sit amet"},
      {id: 2, judul:"Judul3", isi:"Lorem, ipsum dolor sit amet"},
      {id: 3, judul:"Judul4", isi:"Lorem, ipsum dolor sit amet"},
      ],

      zonawaktu:"datang",
      gambar:"https://c4.wallpaperflare.com/wallpaper/404/780/895/multiple-display-dual-monitors-abstract-digital-art-wallpaper-thumb.jpg",
      informasi:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rem aut, in amet dolore tenetur, consequatur nesciunt aliquam voluptatibus. Quibusdam ratione pariatur ullam voluptatibus blanditiis nobis  facere tempore amet. Voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rem aut, in amet dolore tenetur, consequatur nesciunt aliquam voluptatibus. Quibusdam ratione pariatur ullam voluptatibus blanditiis nobis facere tempore amet. Voluptatum. ",
      header:"<center><h3>Ini Adalah Website Saya</h3></center>",

    }
  },
  mounted(){
    this.penjumlahan();
    console.log(axios);
  },
}
</script>

