import { css } from 'styled-components';

const scrollContStyles = css`
  width: 100%;
  height: 500px;

  .scroll__item {
    width: 100%;
    height: 450px;
    padding: 50px 0;
    text-align: center;
    opacity: 0.2;
    border-bottom: 2px solid #000000;

    &:nth-of-type(2n) {
      background-color: #ffb6c1;
    }

    &:nth-of-type(2n + 1) {
      background-color: #add8e6;
    }
  }

  .scrollbar-track {
    display: none !important;
  }
`;

export default scrollContStyles;
