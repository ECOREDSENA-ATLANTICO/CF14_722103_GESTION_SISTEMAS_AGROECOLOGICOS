<template lang="pug">
.curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      
  
      .row.justify-content-center.align-items-center.fondo.mb-3
        .col-lg-12(data-aos="fade-right")
          p.mb-3 La agroecología es un término que se dio a conocer a mediados de 1950, la cual mezcla las disciplinas de los agroecosistemas con el proceso agroalimentario en defensa a los territorios rurales   y los cuales busca una práctica de alternativas de sustento, bajo un manejo adecuado de los recursos naturales para la producción de alimento a las comunidades. <br>Le damos la bienvenida al componente formativo “Producción pecuaria agroecológica”  en el siguiente video podrá conocer un poco de que se trata:
        figure.mb-5(data-aos="fade-right")
          //- img.img-t.m-auto(src='@/assets/curso/images/introduccion/img_1.svg', alt='')
          //- .video
          //-   <iframe width="560" height="315" src="https://www.youtube.com/embed/NUxX-ApgLMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
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
