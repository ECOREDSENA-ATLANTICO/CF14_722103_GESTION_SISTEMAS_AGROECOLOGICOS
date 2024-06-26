<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 4
          h1 Etapas productivas de las especies pecuarias
        
        //- .row.justify-content-center.align-items-center.mb-5
        //-   .col-lg-12.mb-4
        //-     .bloque-texto-g.p-3.p-sm-4.p-md-5
        //-       .bloque-texto-g__img(
        //-         :style="{'background-image': `url(${require('@/assets/curso/images/tema4/img_1.png')})`, 'width': '100%', 'height':'249px'}"
        //-       )
        //-   .col-lg-9.mb-5
        //-     .bloque-texto-g__texto.p-4.jumbotron-6(
        //-       :style="{'top': '75px', 'position': 'relative', 'width':'100%'}"
        //-     )
        //-       p.mb-0 Una etapa productiva comprende un proceso de tiempo que se determina de acuerdo con la especie, involucra desde el nacimiento hasta que el animal está listo para el sacrificio     . La comercialización del producto final involucra la cadena de transformación carne, leche y sus subproductos. Como la dinámica de los ciclos es diferente según la especie a trabajar, es importante conocer los tiempos de los ciclos productivos de cada especie. En el siguiente recurso se presenta los ciclos de cada especie: 
  
        .row.justify-content-justify.align-items-justify.fondo.mb-3
          figure.mb-3(data-aos="fade-right")
            img.img-t.m-auto(src='@/assets/curso/images/tema4/img_1.png', alt='')

          p.mb-4 Una etapa productiva comprende un proceso de tiempo que se determina de acuerdo con la especie, involucra desde el nacimiento hasta que el animal está listo para el sacrificio. La comercialización del producto final involucra la cadena de transformación carne, leche y sus subproductos. Como la dinámica de los ciclos es diferente según la especie a trabajar, es importante conocer los tiempos de los ciclos productivos de cada especie. En el siguiente recurso se presenta los ciclos de cada especie: 
          
        .tarjeta.bg_grad-01.mb-5(data-aos="zoom-in-up").tarjeta-slyder
          SlyderA(tipo="b").max-height
            figure
              img.w-100.img-t.m-auto(src='@/assets/curso/images/tema4/img_2.svg', alt='Muestra el componente formativo el Ciclo de la ganadería.')
            figure
              img.w-100.img-t.m-auto(src='@/assets/curso/images/tema4/img_3.png', alt='Muestra el componente formativo el Ciclo aves de corral.')
            figure
              img.w-100.img-t.m-auto(src='@/assets/curso/images/tema4/img_4.svg', alt='Muestra el componente formativo el  Ciclo de la Porcicultura.')
        
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
