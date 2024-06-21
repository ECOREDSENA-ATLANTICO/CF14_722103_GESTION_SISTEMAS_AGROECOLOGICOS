<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 9
          h1 Sistemas de pastoreo
                    
        .row.align-items-center.mb-5
          .col-lg-8(data-aos="fade-right")
            p El pastoreo puede definirse como el consumo directo por el ganado de pastos, arbustos forrajeros y árboles. Es la forma más económica y eficiente de alimentación para la producción de carne y leche. Por lo anterior, el manejo de praderas y la rotación de los potreros es una práctica que le permite al ganadero alcanzar una mayor producción de forraje por unidad de área, permitiendo un uso sostenible del suelo, disminuyendo la presión de pastoreo y brindando un adecuado tiempo de descanso. Es importante que por ser un país ubicado en el plano ecuatorial, al llegar la época de verano deben implementarse medidas, con el fin de sostener las praderas e implementar el riego u otro método de conservación de forrajera, para satisfacer las necesidades de los animales sin verse afectada la pradera.
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema9/img_1.png', alt='')
      
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12.mb-3(data-aos="fade-left")
            figure
              img.w-100(src='@/assets/curso/images/tema9/img_2.png', alt='Imagen Decorativa')
        
        .col-lg-10.bg-color-1.px-5.py-2.mb-3
          .h3.mx-2.mb-0.mt-4 Conservación de forrajes
        p.mb-3 La conservación de forrajes son los métodos para preservar alimento en temporadas de sequía, estos procedimientos se pueden realizar de una manera rudimentaria o tecnificada, lo importante es saber elegir la materia prima a utilizar en los diferentes procesos de conservación. Los diferentes métodos de conservación serán descritos a continuación:

        .row.justify-content-center.align-items-center.mb-3
        .bg_2.pt-2.mb-4.col-10.m-auto.mb-5
          .row
            .col-lg-5.mb-0(data-aos="fade-left")
              figure
                img.w-100(src='@/assets/curso/images/tema9/img_3.png', alt='Imagen Decorativa')
            .col-lg-7.align-self-center.mb-4
              p.text-bold El Heno:
              | es cultivar forraje el cual se cosecha como cualquier producto y luego se almacena, proceso por el cual se disminuye el porcentaje de humedad y es guardado para la temporada de verano; ese hace con secado al sol y luego es recolectado en pacas para su fácil distribución. 

        .row.justify-content-center.align-items-center.mb-3
        .bg_2.pt-2.mb-4.col-10.m-auto.mb-5
          .row
            .col-lg-5.mb-0(data-aos="fade-left")
              figure
                img.w-100(src='@/assets/curso/images/tema9/img_4.png', alt='Imagen Decorativa')
            .col-lg-7.align-self-center.mb-4
              p.text-bold El Ensilaje:
              | es un método de conservación de forraje y se realiza bajo un método de fermentación láctica microbiana en ausencia de oxígeno, donde se expone a altas temperaturas internas con el fin de impedir las bacterias malignas y solo permanezcan los microorganismos benéficos. Este proceso aumenta la digestibilidad, palatabilidad, contenido de vitamina A del producto ensilado. 
          
        p.mb-3 Este puede ser guardado en condiciones óptimas hasta un año, lo cual beneficia la productividad de la granja y el sostenimiento de animales por hectárea. De acuerdo con el clima se utilizan las especies a ensilar.
        p.mb-5 Un silo es una estructura diseñada para almacenar grano y otros materiales a granel, son parte integrante del ciclo de acopio de la agricultura. Los más habituales tienen forma cilíndrica, asemejándose a una torre, construida de madera, hormigón armado o metal. Los tipos de silos son: 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10.mb-3(data-aos="fade-left")
            figure
              img.w-100(src='@/assets/curso/images/tema9/img_5.svg', alt='Imagen Decorativa')

        .row.justify-content-center.align-items-center.mb-3
          .col-lg-7        
            .tarjeta.mb-3(data-aos="zoom-in-up")
              .row.justify-content-center.align-items-star
                .col-md-12.mb-3.mb-md-0
                  h4.mb-3.text-white.bg-c1.py-2.px-3 Los bloques nutricionales (BMN) 
                  p.mb-3 Son una buena alternativa de alimento, donde se entrega al animal una serie de compuestos que favorecen el desarrollo de la flora ruminal (bacterias), además, al haber compuestos que  trascienden el rumen (pasante o by pass) llegando al intestino delgado (duodeno), la utilización de los BMN son en las épocas de verano excelente opción, pues los animales están obligados a consumir forrajes que no le proporcionan los requerimientos nutricionales necesarios para su mantenimiento, originando con ello pérdidas de peso, bajas en la producción de leche, y problemas reproductivos. La suplementación estratégica de este método puede ser una alternativa viable para los rumiantes.
          .col-lg-5.mb-0(data-aos="zoom-in-up")
            figure
              img.w-100(src='@/assets/curso/images/tema9/img_12.png', alt='Imagen Decorativa')
        
        p.mb-5 En la siguiente infografía se presenta la formulación de bloques multinutricionales:

        //- puntos calientes
        .row.justify-content-center.align-items-center.mb-5
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/images/tema9/img_6.svg'  alt='')

            .tarjeta.color-acento-botones.p-3(x="23.3%" y="24%" numero="1")
              .h5.mb-2 Fuente de energía:
              p La melaza no sólo es una fuente rica en azúcares y minerales especialmente en potasio, sino que además funciona como saborizante y solidificante del bloque; otras fuentes de energía lo son harina de yuca, grano molido de maíz o sorgo.

            .tarjeta.color-acento-botones.p-3(x="17%" y="53.1%" numero="2")
              .h5.mb-2 Material fibroso:
              p La fibra ayuda al proceso de solidificación y absorción de la humedad contenida en la melaza. 

            .tarjeta.color-acento-botones.p-3(x="35.2%" y="64.5%" numero="3")
              .h5.mb-2 Mezcla mineral:
              p El suministro de la sal mineralizada provee junto con los otros componentes a nivel ruminal un suplemento más completo.

            .tarjeta.color-acento-botones.p-3(x="50.5%" y="46%" numero="4")
              .h5.mb-2 Fuente de nitrógeno no proteico (NNP):
              p Se puede usar la urea, al llegar este compuesto al rumen, libera amonio, el cual es un nutriente esencial para el crecimiento de las bacterias presentes en el rumen, pero no debe exceder del 10%. 

            .tarjeta.color-acento-botones.p-3(x="70.5%" y="62.5%" numero="5")
              .h5.mb-2 Fuentes de proteína: 
              p Se tienen las semillas enteras y harinas o tortas de algunas oleaginosas, como el algodón, maní y ajonjolí. Se pueden usar hojas y frutos de leguminosas.

            .tarjeta.color-acento-botones.p-3(x="73.2%" y="18.5%" numero="6")
              .h5.mb-2 Agente ligante:
              p Se necesita usualmente un agente aglutinante para endurecer el bloque, varios productos pueden ser utilizados; cemento, cal viva (óxido de calcio, CaO), el óxido de magnesio (MgO).


        .col-lg-10.bg-color-1.px-5.py-2.mb-3
          .h3.mx-2.mb-0.mt-4 Otras Materias primas
          
        .row.justify-content-center.align-items-center.mb-3
          .col-md-10
            .row
              .col-lg-5.mb-3
                .tarjeta-avatar-b.mb-2
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_7.svg', alt='')
                  .tarjeta.jumbotron-15.shadow-sm
                    .p-3
                      p 
                        span.text-bold Administración de nutrientes
                        |   vitaminas (ej.: A, D y B), pequeñas cantidades de proteínas (ej.: harina de pescado), para proporcionar a los microorganismos ruminales aminoácidos y otros nutrientes esenciales. 
              .col-lg-7.mb-3
                .tarjeta-avatar-b.mb-3
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_8.svg', alt='')
                  .tarjeta.jumbotron-15.shadow-sm
                    .p-4
                      p 
                        span.text-bold Administración de sustancias químicas para la manipulación ruminal:
                        |  agentes que eliminen protozoarios (ej.: hojas de orejero); inhibidores del metano (ej.: monensina y grasa); inhibidores de enzimas para reducir la degradación de proteínas solubles y de aminoácidos.  
                
              .col-lg-4.mb-3
                .tarjeta-avatar-b.mb-2
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_9.svg', alt='')
                  .tarjeta.jumbotron-15.shadow-sm
                    .p-4
                      p 
                        span.text-bold Administración de fármacos para controlar
                        |  distomatosis, garrapatas, endoparásitos, vacunas.
              
              .col-lg-4.mb-3            
                .tarjeta-avatar-b.mb-2
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_10.svg', alt='')
                  .tarjeta.jumbotron-15.shadow-sm
                    .p-4
                      p 
                        span.text-bold Administración de hormonas:
                        |  para manipular el crecimiento, la lactancia y la reproducción.

              .col-lg-4.mb-3            
                .tarjeta-avatar-b.mb-2
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_11.svg', alt='')
                  .tarjeta.jumbotron-15.shadow-sm
                    .p-3
                      p 
                        span.text-bold Administración de sustancias químicas: 
                        |  para controlar las moscas en las heces, esto es importante para la salud humana.



</template>

<script>
export default {
  name: 'Tema9',
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
