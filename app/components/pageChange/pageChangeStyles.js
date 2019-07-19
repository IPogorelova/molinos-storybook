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
    animation: forward 5s infinite forwards;
    animation-delay: 3s;
  }

  @keyframes forward {
    0%,
    50%,
    100% {
      transform: translateX(-100%);
    }
    10%,
    40% {
      transform: translate(0, 0);
    }
    30% {
      transform: translate(100%, 0);
    }
  }
`;

export default pageChangeStyles;
