<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 4
          h1 Etapas productivas de las especies pecuarias
        
        .row.justify-content-justify.align-items-justify.fondo.mb-3
          figure.mb-3(data-aos="fade-right")
            img.img-t.m-auto(src='@/assets/curso/images/tema4/img_1.png', alt='Imagen Decorativa')

          p.mb-4 Una etapa productiva comprende un proceso de tiempo que se determina de acuerdo con la especie, involucra desde el nacimiento hasta que el animal está listo para el sacrificio. La comercialización del producto final involucra la cadena de transformación carne, leche y sus subproductos. Como la dinámica de los ciclos es diferente según la especie a trabajar, es importante conocer los tiempos de los ciclos productivos de cada especie. En el siguiente recurso se presenta los ciclos de cada especie: 
        
        SlyderA.btn_abajos_3(tipo="b")
          .tarjeta.row.bg_lightgreen.mb-5.m-0
            .col-md-5.slide4_1.slider4b
            .col-md-7.p-3.pb-5
              h4.p-3.text-left.mb-3 Ciclo de la ganadería
              table.tabla_v1.mb-4(alt='Muestra la tabla de los cuadro edades de las especies a introducir.')
                thead
                  tr
                    th.th_v1.w-25 Etapa 
                    th.th_v1.w-25 Característica 
                    th.th_v1.w-50 Observaciones 
                tbody
                  tr
                    td.td_v1 Cría
                    td.td_v1 Nacimiento – 6 meses.
                    td.td_v1 Es una etapa donde los cuidados son extremos. 
                  tr
                    td.td_v1 Levante
                    td.td_v1 6 meses a 18 meses.
                    td.td_v1 Se caracteriza por los animales que estén por debajo de los 230 kg de peso y es una de las etapas más rentables.
                  tr
                    td.td_v1 Ceba
                    td.td_v1 9 meses y se extiende desde los 24 hasta los 36 meses de edad.
                    td.td_v1 Doble propósito, se realiza todo el ciclo completo, pero se selecciona las hembras para leche y machos para carne.
                  tr
                    td.td_v1 Ciclo completo
                    td.td_v1 Comprende terneros, levante y la ceba (sacrificio).
                    td.td_v1 Doble propósito, se realiza todo el ciclo completo, pero se selecciona las hembras para leche y machos para carne.
          
          .tarjeta.row.bg_lightgreen.mb-5.m-0
            .col-md-5.slide4_2.slider4b
            .col-md-7.p-3.pb-5
              h4.p-3.text-left.mb-3 Ciclo de aves de corral
              table.tabla_v1.mb-4(alt='Muestra la tabla de los cuadro edades de las especies a introducir.')
                thead
                  tr
                    th.th_v1.tabla_sin_padding.w-25 Etapa
                    th.th_v1.tabla_sin_padding.w-25 Característica
                    th.th_v1.tabla_sin_padding.w-50 Observaciones
                tbody
                  tr
                    td.td_v1.tabla_sin_padding Pre iniciación 
                    td.td_v1.tabla_sin_padding De los 0 a 10 días
                    td.td_v1.tabla_sin_padding Es una etapa donde los cuidados son extremos.
                  tr
                    td.td_v1.tabla_sin_padding Iniciación
                    td.td_v1.tabla_sin_padding Comprende entre los días 11 y 23.
                    td.td_v1.tabla_sin_padding Es una etapa donde los cuidados son extremos.
                  tr
                    td.td_v1.tabla_sin_padding Engorde
                    td.td_v1.tabla_sin_padding 24 a 42 días en adelante de vida hasta el sacrificio.
                    td.td_v1.tabla_sin_padding 2 kilos de peso, para el sacrificio. 
                  tr
                    td.td_v1.tabla_sin_padding Iniciación
                    td.td_v1.tabla_sin_padding Día 1 a la 8ª. Semana de edad.
                    td.td_v1.tabla_sin_padding Huevo comercial prepico: Se extiende desde el inicio de la postura hasta la semana 34.
                  tr
                    td.td_v1.tabla_sin_padding Levante
                    td.td_v1.tabla_sin_padding Desde la 9ª. Semana hasta la 16 semana 16 de vida.
                    td.td_v1.tabla_sin_padding Fase 1: Aproximadamente se sostiene hasta la semana 54.
                  tr
                    td.td_v1.tabla_sin_padding Pre postura
                    td.td_v1.tabla_sin_padding Desde la 17 semana hasta el primer huevo.
                    td.td_v1.tabla_sin_padding Fase 2: hasta 80 y 90 semanas. El alimento para esta etapa contiene más energía que los anteriores. 
                  tr
                    td.td_v1.tabla_sin_padding Producción
                    td.td_v1.tabla_sin_padding Hasta la semana 90
                    td.td_v1.tabla_sin_padding Fase 2: hasta 80 y 90 semanas. El alimento para esta etapa contiene más energía que los anteriores.  

          .tarjeta.row.bg_lightgreen.m-0
            .col-md-5.slide4_3.slider4b
            .col-md-7.p-3.pb-5
              h4.p-3.text-left.mb-3.mt-lg-5 Ciclo de la Porcicultura

              table.tabla_v1.mb-3.mb-lg-5(alt='Muestra la tabla de los cuadro edades de las especies a introducir.')
                thead
                  tr
                    th.th_v1.w-25 Etapa 
                    th.th_v1.w-25 Característica 
                    th.th_v1.w-50 Observaciones 
                tbody
                  tr
                    td.td_v1 Destete
                    td.td_v1 21 días.
                    td.td_v1 Es una etapa donde los cuidados son extremos
                  tr
                    td.td_v1 Levante
                    td.td_v1 Los 63 - 70 días.
                    td.td_v1 Se caracteriza por los animales peso vivo de 25 hasta 45 kilos de peso.
                  tr
                    td.td_v1 Ceba
                    td.td_v1 71 a los 150 días.
                    td.td_v1 90 - 100 kilos peso para el sacrificio.
                  tr
                    td.td_v1 Ciclo completo
                    td.td_v1 Tres meses. 
                    td.td_v1 Doble propósito se realiza todo el ciclo completo, pero se selecciona las hembras para leche y machos para carne.

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
