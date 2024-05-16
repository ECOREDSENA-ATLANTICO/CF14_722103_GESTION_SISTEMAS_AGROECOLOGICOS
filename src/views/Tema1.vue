<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Principios de la ganadería agroecológica
       
      .row.justify-content-center.align-items-center.mb-4
        p.mb-3 Los sistemas de producción de la ganadería agroecológica están enfocados en el suelo como factor determinante para producir un alimento de origen animal con unas características de inocuidad y de calidad. Los principios básicos de la agroecología son:
        
        figure.mb-5
          img.img-t.m-auto.w-100(src='@/assets/curso/images/tema1/img_1.svg', alt='')
                
        .col-5 
          figure
            img.img-t.m-auto(src='@/assets/curso/images/tema1/img_2.png', alt='')
        .col-7
          p.m-0 El objetivo de  los sistemas agroecológicos en la ganadería es alcanzar una armonía simbiótica entre agricultura y ganadería,  para  aprovechar los recursos renovables que el suelo proporciona, generando un potencial genético de las razas autóctonas de la región, fuentes de alimento como gramíneas y leguminosas que proporciona el lugar y que sean obtenidos por procedimientos ecológicos, sanidad preventiva y de tipo homeopática, con poca intervención de los medicamentos convencionales.


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bloque-texto-g.bg_grad-01
            .bloque-texto-g__texto.p-4.izquierda_20.color-transparente(
              :style="{'width': '100% !important'}"
            )
              p.mb-0 Las recomendaciones para implementar un sistema agroecológico es utilizar predios semi o extensivos, por lo general se evita que se realice de una manera intensiva,  este predio debe tener sus alojamientos construidos en materiales no tóxicos y  con la normatividad de manejo y bienestar animal. 

              <br><br> Otras recomendaciones para tener en cuenta es la no utilización de hormonas, urea y medicamentos a no ser que se encuentre certificado el predio o que sea un caso que amerite una urgencia.

              <br><br> Para el manejo animal se prohíbe el destete precoz, las mutilaciones no se permiten y sólo  si es recomendado por un médico veterinario, el manejo reproductivo solo se permite de manera natural y sin ningún método de inducción de celo.

            .bloque-texto(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_3.png')})`, 'left':'30%', 'width': '70% !important'}"
            )

      .row.justify-content-center.align-items-center.mb-4
        .cajon.color-acento-contenido.g_18.mb-4.mb-lg-0.col-10
          .row
            .col-lg-10.p-4.ps-5.b 
              p.m-0.mt-4 Se prohíbe la utilización de herbicidas en las pasturas y el control se realizará mediante un método de manejo de rotación de potreros, la fertilización será de una manera ecológica no nociva para el medio ambiente y los animales.
            .col-lg-2    
              figure
                img.img-t.m-auto.w-100(src='@/assets/curso/images/tema1/img_4.svg', alt='')
      
</template>

<script>
export default {
  name: 'Tema1',
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
