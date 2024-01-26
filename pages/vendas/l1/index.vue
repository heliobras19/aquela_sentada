<template>
  <div>
    <SectionsVendasTopo />
    <SectionsVendasSenssacaoGostosa />
    <SectionsVendasEstimulos />
    <SectionsVendasMovimentos />
    <SectionsVendasBeneficios />
    <SectionsVendasBonus />
    <SectionsVendasValores />
    <SectionsCapturaCatia />
    <VFooter />

    <script type="text/javascript" src="https://d1nc450dx9gaoz.cloudfront.net/widgets/whatsapp/form.js"
      token="09695c3e-a9a0-4640-8a16-396054d2a480" slug="app"></script>
  </div>
</template>

<script>
export default {
  name: 'IndexVendas',

  mounted() {
    var actions = [
      {
        type: 'insertattr',
        query: '.ctalink',
        name: 'Chechout url',
        text: 'href="{utm_source}"',
      },
    ],
      params = [
        {
          value: 'utm_source',
          parsing: {
            type: 'casematch',
            cases: [
              {
                case: 'utm_source',
                match: 'facebook',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-facebook-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'Instagram',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-instagram-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'google',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-google-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'TikTok',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-tiktok-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'e-mail',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-email-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'whatsapp',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-whatsapp-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'Stories',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-stories-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'telegram',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-telegram-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'youtube',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-youtube-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'YouTube',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-youtube-org&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'blog',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-blog-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'outros',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10&split=12&hideBillet=1&sck=SSE-2022-outros-{utm_medium}&src=perpetuo-sse-2022',
              },
              {
                case: 'utm_source',
                match: 'sales-ebook-sse',
                return:
                  'https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10',
              },
            ],
          },
        },
        {
          value: 'utm_medium',
          parsing: {
            type: 'casematch',
            cases: [
              {
                case: 'utm_medium',
                match: 'pago',
                return: 'pg',
              },
              {
                case: 'utm_medium',
                match: 'organico',
                return: 'org',
              },
            ],
          },
        },
      ],
      queryString = window.location.search,
      urlParams = new URLSearchParams(queryString),
      actionsVariables = {}
    for (var param of params) {
      var paramValue = urlParams.get(param.value)
      if (!paramValue) {
        break
      }
      if (!paramValue || param.parsing)
        if (paramValue && param.parsing) {
          if ('casematch' === param.parsing.type)
            for (var c of param.parsing.cases) {
              if (
                paramValue ===
                this.inputParsing(
                  { param: param.value, value: paramValue },
                  c.match
                )
              ) {
                actionsVariables[param.value] = this.inputParsing(
                  { param: param.value, value: paramValue },
                  c.return
                )
                break
              }
              actionsVariables[param.value] = paramValue
            }
          'format' === param.parsing.type &&
            (actionsVariables[param.value] = this.inputParsing(
              { param: param.value, value: paramValue },
              param.parsing.format
            ))
        } else actionsVariables[param.value] = paramValue
      else actionsVariables[param.value] = paramValue
    }
    for (var action of actions) {
      if (!paramValue) {
        break
      }
      var actionQuery = this.inputParsing(actionsVariables, action.query),
        actionText = this.inputParsing(actionsVariables, action.text),
        elements = document.querySelectorAll(actionQuery)
      for (var element of elements) {
        if ('insertattr' === action.type) {
          var textSplit = actionText
            .replaceAll('"', '')
            .replace(/=/, '{<#>}')
            .split('{<#>}'),
            attributeName = textSplit[0],
            attributeValue = textSplit[1]
          if (!attributeName || !attributeValue) continue
          element.setAttribute(attributeName, attributeValue)
        }
        if ('insertlink' === action.type) {
          var elementHtml = element.outerHTML,
            newElementHtml = document.createElement('a')
          newElementHtml.setAttribute('href', actionText),
            newElementHtml.setAttribute('target', '_blank'),
            (newElementHtml.innerHTML = elementHtml),
            element.parentNode.replaceChild(newElementHtml, element)
        }
      }
    }
  },

  methods: {
    inputParsing(a, e) {
      var t = Object.keys(a),
        r = e
      for (var n of t) r = r.replaceAll('{' + n + '}', a[n])
      return r
    },
  },
}


</script>




<style></style>
