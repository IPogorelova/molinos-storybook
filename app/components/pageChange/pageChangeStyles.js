import { css } from 'styled-components';

const pageChangeStyles = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
  background: #ffffff;

  &::after {
    content: '';
    z-index: 9999;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #c19e77;
    transform: translateX(-100%);
    animation: forward 7.5s infinite forwards;
    animation-duration: 5s;
  }

  @keyframes forward {
    0% {
      transform: translateX(-100%);
    }
    25% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }
`;

export default pageChangeStyles;
