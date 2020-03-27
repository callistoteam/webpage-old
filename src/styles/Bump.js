import { css, keyframes } from 'glamor'

const toLeft = keyframes({
    '0%' :{
        transform: 'scale(0.1)',
        opacity: 0
      },
      '60%' :{
        transform: 'scale(0.9)',
        opacity: 1
      },
      '100%' :{
        transform: 'scale(1)'
      }
})

export default css({
    animation: `${toLeft} 2s`,
})
