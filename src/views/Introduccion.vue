<template lang="pug">
.curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      
      //- .row.justify-content-center.align-items-center.mb-5
        //- .col-lg-12.mb-4
          //- .bloque-texto-g.p-3.p-sm-4.p-md-5
          //-   .bloque-texto-g__img(
          //-     :style="{'background-image': `url(${require('@/assets/curso/images/introduccion/img_1.png')})`, 'width': '100%', 'height':'249px'}"
          //-   )
        //- .col-lg-9.mb-5
        //-   .bloque-texto-g__texto.p-4.jumbotron-16.text-white(
        //-     :style="{'top': '75px', 'position': 'relative', 'width':'100%'}"
        //-   )
        //-     p.mb-0 La agroecología es un término que se dio a conocer a mediados de 1950, la cual mezcla las disciplinas de los agroecosistemas con el proceso agroalimentario en defensa a los territorios rurales   y los cuales busca una práctica de alternativas de sustento, bajo un manejo adecuado de los recursos naturales para la producción de alimento a las comunidades. <br> 
        //-     | Le damos la bienvenida al componente formativo “Producción pecuaria agroecológica”  en el siguiente video podrá conocer un poco de que se trata:
  
      .row.justify-content-justify.align-items-justify.fondo.mb-3
        figure.mb-3(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/images/introduccion/img_1.png', alt='')

        p.mb-4 La agroecología es un término que se dio a conocer a mediados de 1950, la cual mezcla las disciplinas de los agroecosistemas con el proceso agroalimentario en defensa a los territorios rurales   y los cuales busca una práctica de alternativas de sustento, bajo un manejo adecuado de los recursos naturales para la producción de alimento a las comunidades. 
        p Le damos la bienvenida al componente formativo “Producción pecuaria agroecológica”  en el siguiente video podrá conocer un poco de que se trata:

      .row.justify-content-center.align-items-center.fondo.mb-3
        figure.mb-5(data-aos="fade-right")
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cZUTJNaDwFo" title="Producción pecuaria agroecológica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
