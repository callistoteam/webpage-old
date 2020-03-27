import { css, keyframes } from 'glamor'

const toLeft = keyframes({
    '0%' :{
        transform: 'scale(0.1)',
        opacity: 0
      },
      '100%' :{
        transform: 'scale(1)',
        opacity: 1
      }
})

export default css({
  animationDelay:'10s',
  animation: `${toLeft} 4s`,
})
