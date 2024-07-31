<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 9
          h1 Sistemas de pastoreo
                    
        .row.align-items-center.mb-5
          .col-lg-8.mb-4(data-aos="fade-right")
            p El pastoreo puede definirse como el consumo directo por el ganado de pastos, arbustos forrajeros y árboles. Es la forma más económica y eficiente de alimentación para la producción de carne y leche. Por lo anterior, el manejo de praderas y la rotación de los potreros es una práctica que le permite al ganadero alcanzar una mayor producción de forraje por unidad de área, permitiendo un uso sostenible del suelo, disminuyendo la presión de pastoreo y brindando un adecuado tiempo de descanso. Es importante que por ser un país ubicado en el plano ecuatorial, al llegar la época de verano deben implementarse medidas, con el fin de sostener las praderas e implementar el riego u otro método de conservación de forrajera, para satisfacer las necesidades de los animales sin verse afectada la pradera.
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.img-t.m-auto(src='@/assets/curso/images/tema9/img_1.png', alt='Imagen Decorativa')
          .col-md-12.mt-2
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="El pastoreo:")
                .col-12
                  p.mb-0 el pastoreo, consiste en un proceso o método de alimentación en la que los animales herbívoros o el ganado se coloca en un terreno para que se alimenten de pastos, plantas de menor crecimiento y otros organismos multicelulares.

              .row(titulo="Pastoreo continuo:")
                .col-12
                  p.mb-0 es el sistema más sencillo y utilizado en explotaciones extensivas; las praderas no tienen ningún descanso y el animal solo puede ser selectivo cuando la pradera está en su máxima expresión.

              .row(titulo="Pastoreo rotacional:")
                .col-12
                  p.mb-0 el área es dividido en dos o más con unos períodos de ocupación controlados, en este se deja un periodo de descanso con el fin que la pradera se recupere, e influyen la capacidad de carga el clima y la gramínea utilizada.

              .row(titulo="Pastoreo Alternado:")
                .col-12
                  p.mb-0 es más fácil y consiste en dividir en dos, estas dos áreas de manejan con el mismo tiempo de ocupación y descanso y a medida que se ejecuta se divide en más lotes, por lo cual beneficia las especies que necesiten periodos más largos para recuperarse.
                  
              .row(titulo="Pastoreo en franjas:")
                .col-12
                  p.mb-0 se asigna un periodo muy corto con la utilización de cerca eléctrica y franjas, en sitios donde se puede realizar inversión económica y el espacio sea limitado.
                                      
              .row(titulo="Pastoreo cero o mecánico:")
                .col-12
                  p.mb-0 no se realiza pastoreo pues el animal esta estabulado y toda la alimentación es suplementación, muy utilizado en programas intensivo de leche.
                    
        .col-lg-10.bg-color-1.px-5.py-2.mb-3
          .h3.mx-2.mb-0.mt-4 Conservación de forrajes
        p.mb-3 La conservación de forrajes son los métodos para preservar alimento en temporadas de sequía, estos procedimientos se pueden realizar de una manera rudimentaria o tecnificada, lo importante es saber elegir la materia prima a utilizar en los diferentes procesos de conservación. Los diferentes métodos de conservación serán descritos a continuación:

        .row.justify-content-center.align-items-center.mb-3
        .bg_2.mb-4.col-10.m-auto.mb-5.tarjeta.p-3
          .row
            .col-lg-5.mb-0(data-aos="fade-left")
              figure
                img.w-100.mb-2(src='@/assets/curso/images/tema9/img_3.png', alt='Imagen Decorativa')
            .col-lg-7.align-self-center.mb-4
              p.mb-0.text-bold El Heno:
              | es cultivar forraje el cual se cosecha como cualquier producto y luego se almacena, proceso por el cual se disminuye el porcentaje de humedad y es guardado para la temporada de verano; se hace con secado al sol y luego es recolectado en pacas para su fácil distribución. 

        .row.justify-content-center.align-items-center.mb-3
        .bg_2.mb-4.col-10.m-auto.mb-5.tarjeta.p-3
          .row
            .col-lg-5.mb-0(data-aos="fade-left")
              figure
                img.w-100.mb-2(src='@/assets/curso/images/tema9/img_4.png', alt='Imagen Decorativa')
            .col-lg-7.align-self-center.mb-4
              p.mb-0.text-bold El Ensilaje:
              | es un método de conservación de forraje y se realiza bajo un método de fermentación láctica microbiana en ausencia de oxígeno, donde se expone a altas temperaturas internas con el fin de impedir las bacterias malignas y solo permanezcan los microorganismos benéficos. Este proceso aumenta la digestibilidad, palatabilidad, contenido de vitamina A del producto ensilado. 
          
        p.mb-3 Este puede ser guardado en condiciones óptimas hasta un año, lo cual beneficia la productividad de la granja y el sostenimiento de animales por hectárea. De acuerdo con el clima se utilizan las especies a ensilar.
        p.mb-5 Un silo es una estructura diseñada para almacenar grano y otros materiales a granel, son parte integrante del ciclo de acopio de la agricultura. Los más habituales tienen forma cilíndrica, asemejándose a una torre, construida de madera, hormigón armado o metal. Los tipos de silos son: 

        .row.mb-5
          .col-md-2.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/images/tema9/img_13.png' alt='AvatarTop')
              .tarjeta.jumbotron-15
                .p-4
                  h5.text-center Silos de trinchera, de pozo o zanja: 
                  p se abre un hueco se recubre de un material aislante y se pone el material a ensilar, siempre debe estar cubierto evitando la entrada de aire.

          .col-md-2.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/images/tema9/img_14.png' alt='AvatarTop')
              .tarjeta.jumbotron-15
                .p-4
                  h5.text-center Silo de Cajón o Bunker:
                  p se utiliza para granjas intensivas y en lugares donde hay estaciones, por lo general es de concreto, allí se almacenan.

          .col-md-2.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/images/tema9/img_15.png' alt='AvatarTop')
              .tarjeta.jumbotron-15
                .p-4
                  h5.text-center Silo de Compuertas de Madera o caucho: 
                  p es una adecuación temporal que está recubierta con material aislante y es armado en el punto donde se cultivó el material, se desarma apenas este termina.

          .col-md-2.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/images/tema9/img_16.png' alt='AvatarTop')
              .tarjeta.jumbotron-15
                .p-4
                  h5.text-center Silo de Montón:
                  p en este se recolecta el material a ensilar, es muy rudimentario, pero puede ser satisfactorio si se cubre adecuadamente.

          .col-md-2.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/images/tema9/img_17.png' alt='AvatarTop')
              .tarjeta.jumbotron-15
                .p-4
                  h5.text-center Silos de bolsa: 
                  p es la manera más rudimentaria y práctica para conservar el alimento.

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
                img(src='@/assets/curso/images/tema9/img_6.png'  alt='Muestra el componente formativo la formulación de bloques multinutricionales, como : -Fuente de energía. - Fuente de nitrógeno no proteico (NNP). - Fuentes de proteína. - Mezcla mineral. - Material fibroso. - Agente ligante')

            .tarjeta.color-acento-botones.p-3(x="23.3%" y="24%" numero="1")
              .h5.mb-2 Fuente de energía:
              p la melaza no sólo es una fuente rica en azúcares y minerales especialmente en potasio, sino que además funciona como saborizante y solidificante del bloque; otras fuentes de energía lo son harina de yuca, grano molido de maíz o sorgo.

            .tarjeta.color-acento-botones.p-3(x="17%" y="53.1%" numero="2")
              .h5.mb-2 Fuente de nitrógeno no proteico (NNP):
                p se puede usar la urea, al llegar este compuesto al rumen, libera amonio, el cual es un nutriente esencial para el crecimiento de las bacterias presentes en el rumen, pero no debe exceder del 10%. 

            .tarjeta.color-acento-botones.p-3(x="35.2%" y="64.5%" numero="3")
              .h5.mb-2 Fuentes de proteína: 
              p se tienen las semillas enteras y harinas o tortas de algunas oleaginosas, como el algodón, maní y ajonjolí. Se pueden usar hojas y frutos de leguminosas.
              
            .tarjeta.color-acento-botones.p-3(x="50.5%" y="46%" numero="4")
              .h5.mb-2 Mezcla mineral:
              p el suministro de la sal mineralizada provee junto con los otros componentes a nivel ruminal un suplemento más completo.

            .tarjeta.color-acento-botones.p-3(x="70.5%" y="62.5%" numero="5")
              .h5.mb-2 Material fibroso:
              p la fibra ayuda al proceso de solidificación y absorción de la humedad contenida en la melaza. 

            .tarjeta.color-acento-botones.p-3(x="73.2%" y="18.5%" numero="6")
              .h5.mb-2 Agente ligante:
              p se necesita usualmente un agente aglutinante para endurecer el bloque, varios productos pueden ser utilizados; cemento, cal viva (óxido de calcio, CaO), el óxido de magnesio (MgO).


        .col-lg-10.bg-color-1.px-5.py-2.mb-5
          .h3.mx-2.mb-5.mt-4 Otras Materias primas
          
        .row.justify-content-center.align-items-center.mb-3
          .col-md-10
            .row
              .col-lg-5.mb-3
                .tarjeta-avatar-b.mb-2
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_7.svg', alt='Imagen Decorativa')
                  .tarjeta.jumbotron-15.shadow-sm
                    .p-3
                      p 
                        span.text-bold Administración de nutrientes
                        |   vitaminas (ej.: A, D y B), pequeñas cantidades de proteínas (ej.: harina de pescado), para proporcionar a los microorganismos ruminales aminoácidos y otros nutrientes esenciales. 
              .col-lg-7.mb-3
                .tarjeta-avatar-b.mb-3
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_8.svg', alt='Imagen Decorativa')
                  .tarjeta.jumbotron-15.shadow-sm
                    .p-4
                      p 
                        span.text-bold Administración de sustancias químicas para la manipulación ruminal:
                        |  agentes que eliminen protozoarios (ej.: hojas de orejero); inhibidores del metano (ej.: monensina y grasa); inhibidores de enzimas para reducir la degradación de proteínas solubles y de aminoácidos.  
                
              .col-lg-4.mb-3
                .tarjeta-avatar-b.mb-2
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_9.svg', alt='Imagen Decorativa')
                  .tarjeta.jumbotron-15.shadow-sm
                    .p-4
                      p 
                        span.text-bold Administración de fármacos para controlar
                        |  distomatosis, garrapatas, endoparásitos, vacunas.
              
              .col-lg-4.mb-3            
                .tarjeta-avatar-b.mb-2
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_10.svg', alt='Imagen Decorativa')
                  .tarjeta.jumbotron-15.shadow-sm
                    .p-4
                      p 
                        span.text-bold Administración de hormonas:
                        |  para manipular el crecimiento, la lactancia y la reproducción.

              .col-lg-4.mb-3            
                .tarjeta-avatar-b.mb-2
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema9/img_11.svg', alt='Imagen Decorativa')
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
