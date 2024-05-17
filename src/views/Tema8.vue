<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 8
          h1 Materias primas en la alimentación agroecológica
                    
        .row.align-items-center.mb-4
          .col-lg-8(data-aos="fade-right")
            p Las materias primas las encontramos en el medio ambiente pues brindan forraje durante toda la temporada del año como fuente de alimentación animal .las plantas Forrajeras utilizadas como materia prima es toda planta que puede cultivarse y consumida por los animales en pastoreo o suplementación, esta debe tener unas condiciones como palatabilidad, nutritiva, adaptable producción competitiva resistente y de fácil multiplicación entre las que tenemos hierbas, bejucos herbáceos y leñosos, arbustos y árboles la ventaja de estas son que tienen alto contenido de proteína en las semilla, hojas, tallos, etc.  Otra ventaja a mencionar      es que es la fijación de nitrógeno al suelo gracias al trabajo realizado por bacterias del género rhizobium.     
            p Estos pueden asociarse con gramíneas el manejo de estas pasturas exige el conocimiento por parte del productor pues la relación planta/animal debe tener en cuenta factores como cantidad de forraje por hectárea que es determinada por el encargado de la finca mediante aforos constantes de igual manera es necesario saber la composición de la pradera a elección, cantidad de animales por hectárea que puede sostener esa pradera y por último el tipo de pastoreo que se va utilizar con el fin de ofrecerle al animal un producto de excelente calidad y bajo todos los parámetros técnicos establecidos.
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_7.png', alt='')

        //- banner

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
  name: 'Tema8',
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
