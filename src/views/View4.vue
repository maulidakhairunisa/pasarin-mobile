<template>
  <div class="columns main">
     <div class="column is-full">
         <BigCard/>
         <br>
         <div class="columns is-mobile">
             <div class="column is-12 is-flex is-align-items-center">
                <figure class="image is-64x64 mr-3">
                    <img class="is-rounded" src="../assets/warning.png">
                </figure>
                <p class="validasi">Tiketmu belum divalidasi oleh admin pasarin</p>
            </div>
         </div>
         <div class="foot">
            <div class="columns pesan is-mobile is-flex is-justify-content-center">
              <div class="column w-85 control is-10">
                <input class="input is-primary tiket" type="text" placeholder="Tulis jawabanmu disini" required>
              </div>
              <div class="column w-15 is-2 is-flex is-justify-content-center is-align-items-center">
                <a href="" class="is-medium">
                  <span class="icon">
                    <i class="fas fa-paper-plane fa-lg"></i>
                  </span>
                </a>
              </div>
            </div>
         </div>
    </div>
  </div>
</template>

<script>

import BigCard from '../components/BigCard.vue'

export default {
    name:'View4',
     components:{
      BigCard
    }
}
</script>

<style scope>
.ket{
  
}

.pesan{
position: absolute;
width: 100%;
height: 50px;
bottom: 0;
left: 0;
right: 0;
display: flex;

}

.w-85{
width: 85%;}
.w-15{
width: 15%;
}

.gambar{
  background-color: blue;
}
.text-column{
  margin-top: 20px;
}

.text-column p{
  font-weight: bold;
  font-size: 14px;
}


.fa-paper-plane{
  color: rgb(20, 138, 248);
 }

</style>