<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero 
            span 6
          h1 Programa de alimentación agroecológica 
        
        //- .row.justify-content-center.align-items-center.mb-5
        //-   .col-lg-12.mb-4
        //-     .bloque-texto-g.p-3.p-sm-4.p-md-5
        //-       .bloque-texto-g__img(
        //-         :style="{'background-image': `url(${require('@/assets/curso/images/tema6/img_1.png')})`, 'width': '100%', 'height':'249px'}"
        //-       )
        //-   .col-lg-9.mb-5
        //-     .bloque-texto-g__texto.p-4.jumbotron-6(
        //-       :style="{'top': '75px', 'position': 'relative', 'width':'100%'}"
        //-     )
        //-       p.mb-0 El programa de alimentos agroecológicos está enfocado a los alimentos que brinda el medio ambiente de forma natural y sin ninguna intervención de agroquímicos, este sistema busca optimizar la producción de los predios que utilicen este sistema al brindar alimento. Las bondades de este sistema son: aumento de ganancia de peso diario y la disminución del estrés por parte de los animales, con el sombrío que proporcionan los árboles utilizados; a esto se le suma la disminución de los gastos al no utilizar ningún producto a base de agroquímicos.
    
        .row.justify-content-justify.align-items-justify.fondo.mb-3
          figure.mb-3(data-aos="fade-right")
            img.img-t.m-auto(src='@/assets/curso/images/tema6/img_1.png', alt='Imagen Decorativa')

          p.mb-4 El programa de alimentos agroecológicos está enfocado a los alimentos que brinda el medio ambiente de forma natural y sin ninguna intervención de agroquímicos, este sistema busca optimizar la producción de los predios que utilicen este sistema al brindar alimento. Las bondades de este sistema son: aumento de ganancia de peso diario y la disminución del estrés por parte de los animales, con el sombrío que proporcionan los árboles utilizados; a esto se le suma la disminución de los gastos al no utilizar ningún producto a base de agroquímicos.
              
        .row.align-items-center.mb-5
          .col-lg-7(data-aos="fade-right")
            p Los sistemas agroforestales son una alternativa muy útil,  los cuales generan muchas ventajas, pues puede utilizar árboles      autóctonos como fuente de alimentación, cerca viva, lindero maderable y zona de descanso de los animales. Los programas están basados en la implementación de métodos como el banco de proteína, la cual selecciona una planta con alto porcentaje de proteína que se siembra en callejones y se deja crecer a un determinado tamaño,  brinda alimento, aumento en la carga animal y se evita el sobrepastoreo.
            p Otra práctica muy común es la utilización de árboles frutales,  los animales sirven como controladores de maleza,  pues ingieren los frutos que caen al suelo alimentándose de estos y evitando el aumento de las moscas, por último los sistemas silvopastoriles, están conformados por gramíneas y leguminosas que aportan nitrógeno al suelo por las asociaciones que permiten la cobertura de materia orgánica, al utilizar varias especies en el predio, también se llama (policultivos), lo único que se necesita es una administración de los recursos. Los sistemas silvopastoriles pueden reducir considerablemente los impactos ambientales.
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema6/img_2.png', alt='Imagen Decorativa')

        Separador

        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
          h2 6.1  Principios de anatomía y fisiología digestiva

        .row.align-items-center.mb-4
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema6/img_3.svg', alt='Muestra el aparato digestivo y fisiología digestiva de las distintas especies: Estómago. Intestino delgado. Población bacteriana.') 
          .col-lg-6(data-aos="fade-left")
            p Con respecto a la anatomía, es el estudio, organización y ubicación en relación de las estructuras de los órganos animales. La fisiología estudia todos los procesos químicos y físicos que se realizan en un proceso; de acuerdo con el sistema digestivo debemos entender muy bien el funcionamiento de los monogástricos      y los poligástricos para poder brindar una buena alimentación en todas las etapas de producción.
            p El aparato digestivo de las distintas especies es muy semejante en sus formas. La primera parte más ensanchada sirve para la digestión (estómago) y la segunda porción en forma de tubo fino y alargado para la absorción (intestino). Como los mamíferos no poseen enzimas capaces de degradar la celulosa, los herbívoros poseen partes ensanchadas en su tracto digestivo, tienen población bacteriana que degrada la celulosa. En el cerdo, caballo y conejo esta población bacteriana está situada en el intestino grueso, en los rumiantes esta porción se encuentra antes del verdadero estómago, permitiendo que los productos de la acción bacteriana sean completamente absorbidos por el animal. Esto permite alimentarse con forrajes de baja calidad pero con alto contenido de celulosa, indestructibles para otras especies. 
 
        Separador

        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
          h2 6.2  Sistema digestivo en rumiantes

        p.mb-5 Los animales rumiantes se caracterizan por tener un estómago con cuatro compartimentos     , los cuales realizan una función vital y diferente en el proceso de digestión, a diferencia de los monogástrico el ternero nace siendo un monogástrico hasta la segunda o tercera semana de edad y luego pasa a ser el proceso de la rumia, convirtiéndose así en rumiantes.
        
        .row.justify-content-center.align-items-center.mb-3
        .bg_3.pt-2.mb-4.col-10.m-auto.mb-5
          .row
            .col-lg-4.mb-0(data-aos="fade-left")
              figure
                img.w-100(src='@/assets/curso/images/tema6/img_4.svg', alt='Imagen Decorativa')
            .col-lg-8.align-self-center.mb-4
              p.m-3 Los animales que se categorizan como rumiantes son los bovinos, ovinos y caprinos los cuales funcionan así. Los rumiantes son fácilmente identificados porque mastican la comida aun cuando no ingieren alimentos, esta acción de masticación se llama rumia, se realiza para destruir las partículas de fibra y producir  saliva (bicarbonato y fosfato) que neutralizan las grandes cantidades de ácido producidas por la fermentación. En la siguiente imagen se detallan cada uno de los estómagos de los rumiantes: 

        .row.align-items-center.mb-5
          .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema6/img_5.svg', alt='Muestra el componente formativo cada uno de los estómagos de los rumiantes: Retículo. Omaso. Abomaso o cuajar') 

        .row.align-items-center.mb-4
          .col-lg-6(data-aos="fade-left")
            p En los procesos que se desarrollan en el estómago del rumiante, una vaca puede producir hasta 180 litros de saliva, la cual es amortiguador, con el fin de mantener una acidez neutral que favorece la digestión de la fibra, en este proceso de fermentación hay un resultado de producción de ácidos grasos de ácidos volátiles (AGV) y este es una fuente de energía para la vaca y  un precursor de los triglicéridos y azúcares      de leche (lactosa).
          .col-lg-6.mb-0(data-aos="fade-left")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema6/img_6.png', alt='Imagen Decorativa')

        Separador
        
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
          h2 6.3 Sistema digestivo en monogástrico

        p.mb-3 Las especies monogástricas como las aves y porcinos, requieren tener en su dieta únicamente alimento balanceado, para asegurar una alta producción, la dependencia es total por lo que es necesario asegurar la buena calidad del alimento suministrado. En el siguiente video se muestra el sistema digestivo de las aves:
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12.mb-3(data-aos="fade-left")
          figure.mb-5(data-aos="fade-right")
            .video
              <iframe width="560" height="315" src="https://www.youtube.com/embed/lY6h5quuVpM" title="Producción pecuaria agroecológica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
        .row.align-items-center.mb-5
          .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema6/img_7.svg', alt='Muestra el componente formativo cada una de las partes del Sistema digestivo de las aves : Boca. Esofago. Buche. Estómago glandular o proventrículo. Molleja. Intestino delgado. Ciegos. Intestino grueso. Cloaca.') 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8(data-aos="fade-right")
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img.mt-3.img-t.m-auto(src='@/assets/curso/images/tema6/img_8.svg', alt='Imagen Decorativa')
              .tarjeta.jumbotron-15.shadow-sm
                p.p-5 Otro dato importante es que las gallinas ponedoras solo requieren entre 2.30 horas a 12 horas recorrer todo el trayecto digestivo.

</template>

<script>
export default {
  name: 'Tema6',
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
