<template>
    <div class="columns main">
     <div class="column is-full">
         <div class="card">
            <div class="card-content">
                <div class="head">
                    <p class="head">Tiket 2 <span class="tag is-success is-rounded">Success</span></p>
                </div>
                <div class="judul">
                    <p class="title">Judul</p>
                    <p class="isi">Tidak bisa upload gambar</p>
                </div>
                <div class="desk">
                    <p class="title">Deskripsi</p>
                    <p class="isi">Pas upload gambar kenapa muter2 ya</p>
                </div>
            </div>  
         </div>
         <br>
         <div class="columns is-mobile">
             <div class="column image-column">
                <figure class="image is-64x64">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                </figure>
            </div>
             <div class="column">
                 <p class="name">Admin Pasarin</p>
                 <p class="note">Sedang ada perbaikan pada server kami</p>
             </div>
             <div class="column">
                 <p class="tgl">12 agustus 2020</p>
             </div>
         </div>
         <hr>
          <div class="columns is-mobile">
             <div class="column image-column">
                <figure class="image is-64x64">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                </figure>
            </div>
             <div class="column">
                 <p class="name">Admin Pasarin</p>
                 <p class="note">Sedang ada perbaikan pada server kami</p>
             </div>
             <div class="column">
                 <p class="tgl">12 agustus 2020</p>
             </div>
         </div>
         <hr>
          <div class="columns is-mobile">
             <div class="column image-column">
                <figure class="image is-64x64">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                </figure>
            </div>
             <div class="column">
                 <p class="name">Admin Pasarin</p>
                 <p class="note">Sedang ada perbaikan pada server kami</p>
             </div>
             <div class="column">
                 <p class="tgl">12 agustus 2020</p>
             </div>
         </div>
         <div class="foot">
         </div>
    </div>
  </div>
</template>

<script>


export default {
    name:'View3',
    
}
</script>

<style>

body{
    background-color: rgb(0, 195, 255);

}


.main{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 40px auto;
    border-radius: 30px;
    box-shadow: 2px 1px 1px 1px rgba(0, 0, 0, 0.2);  
}

.is-full{
    background-color: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
}

.card{
    margin: 7px;
}

.card .head {
    font-size: 13px;
    font-weight: bold;
    padding-bottom: 5px;
}
.card .title {
    font-size: 13px;
    font-weight: bold;
}

.card .judul, .desk{
    padding-top: 15px;
}
.card .isi {
    font-size: 15px;
    margin-top: -17px;
}

.image-column{
    margin-left: 25px;
    margin-right: -80px;
    margin-top:5px;
}
.tgl{
    font-size: 13px;
}
.name{
    font-weight: bold;
}
.name, .tgl{
    padding-top: 5px;
}
.note{
    font-size: 11px;
    padding-top: 8px;
}


</style>