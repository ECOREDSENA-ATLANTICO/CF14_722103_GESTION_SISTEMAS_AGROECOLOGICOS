<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 4
          h1 Etapas productivas de las especies pecuarias
        
                           
        .tarjeta.bg_grad-01.p-3.mb-5(data-aos="zoom-in-up")
          SlyderA(tipo="b")
  
            .row.justify-content-center.align-items-star.p-3
              .col-md-7.mb-4.mb-md-0
                h4.p-3 Sanidad animal y bioseguridad
                p.p-3.mb-3 Es importante que cada empresa bovina dedicada la producción de carne cumpla con los siguientes requerimientos.
              
                .row.justify-content-center.align-items-star
                  .tarjeta.jumbotron-6.p-3.mb-5.col-5
                      ol.lista-ol--cuadro.lista-ol--separador
                        li 
                          .lista-ol
                            span Constancia de Inscripción del predio ante el Instituto Colombiano Agropecuario (ICA).
                        li 
                          .lista-ol
                            span Registro único de vacunación (RUV) por la federación colombiana de ganaderos (Fedegan). 
                        li 
                          .lista-ol
                            span Programa de prevención y mastitis.
                        li 
                          .lista-ol
                            span Finca delimitada.
                        li 
                          .lista-ol
                            span Registros de ingreso y salidas de personas y vehículos.
                        li 
                          .lista-ol
                            span Área de cuarentena.

                  .tarjeta.border-color-acento-contenido.p-3.mb-5.col-5
                      ol.lista-ol--cuadro.lista-ol--separador
                        li 
                          .lista-ol
                            span Constancia de Inscripción del predio ante el Instituto Colombiano Agropecuario (ICA).
                        li 
                          .lista-ol
                            span Registro único de vacunación (RUV) por la federación colombiana de ganaderos (Fedegan). 
                        li 
                          .lista-ol
                            span Programa de prevención y mastitis.
                        li 
                          .lista-ol
                            span Finca delimitada.
                        li 
                          .lista-ol
                            span Registros de ingreso y salidas de personas y vehículos.
                        li 
                          .lista-ol
                            span Área de cuarentena.


                

              .col-md-5
                figure
                  img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_11.png', alt='Texto que describa la imagen')
  
            .row.justify-content-center.align-items-star.p-3
              .col-md-5.mb-4.mb-md-0
                h4.p-3 Presencia de Plagas y Enfermedades 
                p.p-3.mb-2 Según Acosta, N. R. (2018) La presencia de plagas y enfermedades es evaluada a través de indicadores como se relaciona a continuación en el numeral.
                ol.lista-ol.p-3
                  li 
                    span.text-bold 1. 
                    | Incidencia (I)
                  li 
                    span.text-bold 2. 
                    | Severidad (S)
  
              .col-md-7
                figure
                  img.w-75.img-t.m-auto(src='@/assets/curso/images/tema2/img_12.png', alt='Texto que describa la imagen')
  
            .row.justify-content-center.align-items-star.p-3
              .col-md-5.mb-4.mb-md-0
                h4.p-3 Incidencia (I)
                p.p-3.mb-3 Hace referencia al porcentaje de individuos (planta o parte de la planta) que presentan una enfermedad respecto al total, es decir, se evalúa la ausencia o presencia de enfermedad más no el nivel de esta.
                //- img.p-3.w-100.img-t.m-auto(src='@/assets/curso/images/tema2/img_13.png', alt='Texto que describa la imagen')
  
              .col-md-7
                figure
                  img.w-75.img-t.m-auto(src='@/assets/curso/images/tema2/img_13.png', alt='Texto que describa la imagen')
                  
            .row.justify-content-center.align-items-star.p-3
              .col-md-5.mb-4.mb-md-0
                h4.p-3 Severidad (S)
                p.p-3.mb-3 La severidad permite evaluar el nivel de la enfermedad que impacta la planta, el cual se determina a través de un porcentaje entre 0 y 100 de la superficie de la parte de la planta enferma o afectada.
                //- img.p-3.w-100.img-t.m-auto(src='@/assets/curso/images/tema2/img_28.svg', alt='Texto que describa la imagen')
  
              .col-md-7
                figure
                  img.w-75.img-t.m-auto(src='@/assets/curso/images/tema2/img_14.png', alt='Texto que describa la imagen')

            .row.justify-content-center.align-items-star.p-3
              .col-md-5.mb-4.mb-md-0
                h4.p-3 Severidad (S)
                p.p-3.mb-3 La severidad permite evaluar el nivel de la enfermedad que impacta la planta, el cual se determina a través de un porcentaje entre 0 y 100 de la superficie de la parte de la planta enferma o afectada.
                //- img.p-3.w-100.img-t.m-auto(src='@/assets/curso/images/tema2/img_28.svg', alt='Texto que describa la imagen')
  
              .col-md-7
                figure
                  img.w-75.img-t.m-auto(src='@/assets/curso/images/tema2/img_15.png', alt='Texto que describa la imagen')

            .row.justify-content-center.align-items-star.p-3
              .col-md-5.mb-4.mb-md-0
                h4.p-3 Severidad (S)
                p.p-3.mb-3 La severidad permite evaluar el nivel de la enfermedad que impacta la planta, el cual se determina a través de un porcentaje entre 0 y 100 de la superficie de la parte de la planta enferma o afectada.
                //- img.p-3.w-100.img-t.m-auto(src='@/assets/curso/images/tema2/img_28.svg', alt='Texto que describa la imagen')
  
              .col-md-7
                figure
                  img.w-75.img-t.m-auto(src='@/assets/curso/images/tema2/img_16.png', alt='Texto que describa la imagen')
  
        
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
