import { css, keyframes } from 'glamor'

const toLeft = keyframes({
    '0%' :{
        transform: 'scale(0.5)',
        opacity: 0
      },
      '100%' :{
        transform: 'scale(1)',
        opacity: 1
      }
})

export default css({
  animationDelay:'2s',
  animation: `${toLeft} 4s`,
})
