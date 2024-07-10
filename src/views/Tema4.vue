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
            img.img-t.m-auto(src='@/assets/curso/images/tema4/img_1.png', alt='')

          p.mb-4 Una etapa productiva comprende un proceso de tiempo que se determina de acuerdo con la especie, involucra desde el nacimiento hasta que el animal está listo para el sacrificio. La comercialización del producto final involucra la cadena de transformación carne, leche y sus subproductos. Como la dinámica de los ciclos es diferente según la especie a trabajar, es importante conocer los tiempos de los ciclos productivos de cada especie. En el siguiente recurso se presenta los ciclos de cada especie: 
          
        .tarjeta.bg_grad-01.mb-5(data-aos="zoom-in-up").tarjeta-slyder
          SlyderA(tipo="b").max-height
            .row.justify-content-center.align-items-star.p-3.img_slyder.img_slyder_1(
                alt='Muestra el componente formativo el Ciclo de la ganadería.'
              )
              .col-md-12.mb-4.mb-md-0
                .row.col-md-7.col-sm-12.col-12.offset-md-12.offset-sm-5.offset-1.mb-3
                  h4.p-3.text-left.mb-3 Ciclo de la ganadería
                  .tabla
                    table.mb-4(alt='Muestra la tabla de los cuadro edades de las especies a introducir.')
                      thead
                        tr
                          th.w-25 Especie
                          th.w-25 Edad
                          th.w-50 Edad
                      tbody
                        tr
                          td Cría
                          td 6 Meses
                          td Es una etapa donde los cuidados son extremos. 
                        tr
                          td Levante
                          td Ciclo completo
                          td Se caracteriza por los animales que estén por debajo de los 230 kg de peso y es una de las etapas más rentables.
                        tr
                          td Ceba
                          td 9 meses y se extiende desde los 24 hasta los 36 meses de edad
                          td Doble propósito, se realiza todo el ciclo completo, pero se selecciona las hembras para leche y machos para carne.
                        tr
                          td Ciclo completo
                          td Comprende terneros, levante y la ceba (sacrificio).
                          td Doble propósito, se realiza todo el ciclo completo, pero se selecciona las hembras para leche y machos para carne.
              
            .row.justify-content-center.align-items-star.p-3.img_slyder.img_slyder_2(
                alt='Muestra el componente formativo el Ciclo aves de corral.'
              )
              .col-md-12.mb-4.mb-md-0
                .row.col-md-7.col-sm-12.col-12.offset-md-12.offset-sm-5.offset-1.mb-3
                  h4.p-3.text-left.mb-3 Ciclo aves de corral
                  .tabla
                    table.mb-4(alt='Muestra la tabla de los cuadro edades de las especies a introducir.')
                      thead
                        tr
                          th.tabla_sin_padding.w-25 Especie
                          th.tabla_sin_padding.w-25 Edad
                          th.tabla_sin_padding.w-50 Edad
                      tbody
                        tr
                          td.tabla_sin_padding Pre iniciación 
                          td.tabla_sin_padding De los o a 10 días
                          td.tabla_sin_padding Es una etapa donde los cuidados son extremos.
                        tr
                          td.tabla_sin_padding Iniciación
                          td.tabla_sin_padding Comprende entre los días 11 y 23.
                          td.tabla_sin_padding Es una etapa donde los cuidados son extremos.
                        tr
                          td.tabla_sin_padding Engorde
                          td.tabla_sin_padding 24 a 42 días en adelante de vida hasta el sacrificio.
                          td.tabla_sin_padding 90- 100 kilos peso para el sacrificio.
                        tr
                          td.tabla_sin_padding Iniciación
                          td.tabla_sin_padding Día 1 a la 8ª. Semana de edad.
                          td.tabla_sin_padding(rowspan="4") Huevo comercial. <br>Prepico:. Se extiende desde el inicio de la postura hasta la semana 34.<br>
                            | Fase aproximadamente se sostiene hasta la semana 54.<br>
                            | Fase hasta 80 y 90 semanas. El alimento para esta etapa contiene más energía que los anteriores.<br>
                        tr
                          td.tabla_sin_padding Levante
                          td.tabla_sin_padding Desde la 9ª. Semana hasta la 16 semana 16 de vida.
                        tr
                          td.tabla_sin_padding Pre postura
                          td.tabla_sin_padding Desde la 17 semana hasta el primer huevo.
                        tr
                          td.tabla_sin_padding Producción
                          td.tabla_sin_padding Hasta la semana 90

            .row.justify-content-center.align-items-star.p-3.img_slyder.img_slyder_3(
                alt='Muestra el componente formativo el Ciclo de la Porcicultura.'
              )
              .col-md-12.mb-4.mb-md-5
                .row.col-md-7.col-sm-12.col-12.offset-md-12.offset-sm-5.offset-1.mb-4
                  h4.p-3.text-left.mb-5 Ciclo de la Porcicultura
                  .tabla
                    table.mb-3(alt='Muestra la tabla de los cuadro edades de las especies a introducir.')
                      thead
                        tr
                          th.w-25 Especie
                          th.w-25 Edad
                          th.w-50 Edad
                      tbody
                        tr
                          td Destete
                          td 21 días
                          td Es una etapa donde los cuidados son extremos
                        tr
                          td Levante
                          td Los 63 - 70 días
                          td Se caracteriza por los animales peso vivo de 25 hasta 45 kilos de peso.
                        tr
                          td Ceba
                          td 71 a los 150 días.
                          td 90 - 100 kilos peso para el sacrificio.
                        tr
                          td Ciclo completo
                          td Tres meses 
                          td Doble propósito se realiza todo el ciclo completo, pero se selecciona las hembras para leche y machos para carne.

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
