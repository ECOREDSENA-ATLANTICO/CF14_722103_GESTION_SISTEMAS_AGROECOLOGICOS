<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 5
          h1 Equipos, insumos y herramientas de manejo animal 
            
        .row.align-items-center.mb-4
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_7.png', alt='')
          .col-lg-7(data-aos="fade-right")
            p En las producciones pecuarias es fundamental contar con los equipos necesarios para facilitar las tareas y actividades diarias, los equipos como básculas, comederos, bebederos, jeringas, los biberones, las pipetas, los termómetros, las pinzas, entre otros. Todos estos se van adquiriendo durante el proceso de la implementación, pero van a cumplir una función en pro a la eficacia y rentabilidad del producto final. Cabe resaltar que la necesidad depende de la producción en la que se va a implementar, pues si es una ganadería de leche, la necesidad de equipos va relacionada con el ordeño y esta es diferente para una de pollos de engorde. Estos equipos e instrumentos se describen en la siguiente galería: 
        
        //- Slider
        
        p Es importante tener en cuenta que depende de la inversión y proyección del proyecto,  si se va a establecer una producción intensiva, los equipos, herramientas e insumos son mayores y de última tecnología, lo cual incrementará el valor de adquisición de los productos y estos están muy relacionados con las buenas prácticas ganaderas.
        
        .row.justify-content-center.align-items-center.mb-5
          .tarjeta.tarjeta--blanca.p-4.col-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 5. 
              span BPG-VC en la producción
          
          .col-lg-12.mb-0.mb-lg-4(data-aos="fade-left")
            figure
              img.w-50(src='@/assets/curso/images/tema2/img_1.png', alt='Imagen Decorativa')
        
        .row.justify-content-center.align-items-center.mb-4
          .cajon.color-acento-contenido.g_18.mb-4.mb-lg-0.col-9
            p.m-4.mt-4 Con respecto a los insumos necesarios para la producción  pecuarias y de acuerdo con la demanda de alimentos, es necesario e indispensable la nutrición y reproducción de los animales, un ejemplo común son los granos utilizados para suplementación animal, otro insumo necesario en la parte agrícola son los fertilizantes que sirven para garantizar la seguridad alimentaria.

</template>

<script>
export default {
  name: 'Tema5',
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
