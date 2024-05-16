<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 7
          h1 Nutrición y alimentación
                    
        .row.align-items-center.mb-4
          .col-lg-7(data-aos="fade-right")
            p La nutrición Animal estudia las reacciones bioquímicas y procesos fisiológicos del alimento proporcionado por los productores y este se transforma en el producto (leche, carne, trabajo); cualquier deficiencia afecta directamente el vigor híbrido del animal y por consiguiente es uno de los eslabones más importantes en la producción animal. La alimentación es el proceso de suministro alimenticio,  este debe estar en excelentes condiciones y con la capacidad de suplir las necesidades y requerimientos en todas las etapas fisiológicas de los animales.
            p Es importante determinar la relación nutritiva en la dieta de los animales. La relación nutritiva óptima varía en función de la edad y la actividad del animal (producción de leche, lactancia, gestación, engorde, etc.) por eso es importante conocer las funciones de cada uno en el cuerpo del animal.
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_7.png', alt='')

        .row.justify-content-center.align-items-center.mb-5
          .tarjeta.tarjeta--blanca.p-4.col-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 6. 
              span Funciones de los componentes de la dieta 
          
          .col-lg-12.mb-0.mb-lg-4(data-aos="fade-left")
            figure
              img.w-50(src='@/assets/curso/images/tema2/img_1.png', alt='Imagen Decorativa')

        p Los requerimientos de cada uno de estos componentes varían de acuerdo con el  tamaño, raza, clima y por lo general los animales grandes necesitan altos requerimientos de mantenimiento más que las especies pequeñas; este mismo caso pasa con animales jóvenes, en la etapa de crecimiento consumen alimentos,  ganan peso por día, esto va muy relacionado con la dieta suministrada. 
        
        .row.justify-content-center.align-items-center.mb-5
          .tarjeta.tarjeta--blanca.p-4.col-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 4. 
              span Componentes nutritivos en la alimentación de aves de corra
          
          .tabla.col-12.text-center
            table
              thead
                tr.jumbotron-14
                  th Especie
                  th Edad
              tbody
                tr
                  td.jumbotron-20 Bovinos, Bufalinos y potros
                  td.jumbotron-14 6 Meses
                tr
                  td.jumbotron-20 Ponedoras
                  td.jumbotron-14 No superar 18 semanas
                tr
                  td.jumbotron-20 Pollos de Engorde
                  td.jumbotron-14 Menor a 3 días
                tr
                  td.jumbotron-20 Cerdos
                  td.jumbotron-14 Reproductor (6 meses) Engorde (40 días)
                tr
                  td.jumbotron-20 Ovinos y caprinos
                  td.jumbotron-14 2 meses
                tr
                  td.jumbotron-20 Conejos
                  td.jumbotron-14 1 mes

</template>

<script>
export default {
  name: 'Tema7',
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
