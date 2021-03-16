<template>
   <div class="columns main">

     <div class="column is-full">
        <div class="column control has-icons-left">
          <input class="input is-link search" type="text" placeholder="Cari Tiket" required>
          <span class="icon is-left">
            <i class="fas fa-search"></i>
          </span>
        </div>
         <div class="column kartu">
           <Card/>
         </div>
         <div class="column foot">
          <button class="button is-link is-rounded is-medium is-fullwidth">+ Ajukan Pertanyaan</button>
        </div>
    </div>
  </div>
</template>

<script>

import Card from '../components/Card.vue'

export default {
    name:'List3',
    components:{
      Card
    }
}
</script>

<style>
.control{
  margin-bottom: 10px;
}
.fa-search{
  margin-top: 25px;
  margin-left: 25px;
}

.search{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

}
.is-full{
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 95vh;
}
.kartu{
  position: absolute;
  height: 100%;
  width: 100%;
  margin-right: 30px;
  overflow-y: scroll;
}

.foot{
  position: absolute;
  height: auto;
  bottom: -8%;
  left: 0;
  right: 0;
  padding: 0;
  border-top: 1px solid black;
  background: #fff;
  display:inline-block;
  box-shadow: 0px -7px 9px 0px rgba(44, 50, 50, 0.75);
}

</style>