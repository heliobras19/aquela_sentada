<template>
    <div> 
        <!-- <UpsellTopo /> -->
        <div class="bg-confirmado ">
            <div class="container mx-auto">
                <div class="w-10/12 mx-auto">
                    <div class="flex flex-col items-center pt-20">
                        <img src="/icon-confirmado-ok.png" alt="">
                        <div>
                            <p class="text-[46px] font-extrabold text-white text-center my-4">Obrigada.</p>
                            <div class="lg:w-96 text-center">
                                <p class="text-white text-[25px] leading-[30px] font-normal">Seu cadastro na lista de interesse foi confirmado com sucesso.</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="container mx-auto mb-36 mt-10">
            <div class="w-10/12 mx-auto flex justify-center">
                <div class="shadow-2xl w-[44rem] rounded-xl py-8 lg:px-24 px-8">
                    <p class="text-center"><strong>Fique de olho no seu e-mail para não perder nenhuma notificação</strong>  importante. Nos próximos dias, o e-book será lançado – e você será avisada em primeira mão.</p>
                </div>
            </div>
        </div>
        <VFooter />
    </div>
</template>

<script>
import VFooter from '../../../components/VFooter.vue'
export default {
  name: 'IndexConfirmado',
  components: {VFooter}
}
</script>
<style>
  body {
    font-family: 'Roboto', sans-serif;
  }

  .bg-confirmado {
      background-image: url('/banner-confirmado.png');
      background-size: cover;
      height: 80vh ;
      background-position: bottom;
  }


</style>