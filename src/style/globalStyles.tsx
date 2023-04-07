import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
    :root {
      /* Color */
      --color-white: #fff;
      --color-admin-background: #E8EDF3;
      --color-button-text: #527AA1;
      --color-light-text: #7091B1;
      --color-grey: #878787;
      --color-border: #d9d9d9
      --color-light-grey: #E8E8E8;
      --color-title: #083C91;
      --color-input-border: #A8BCD0;
    }
    
    a {
    text-decoration: none;
    color: #0F0F0F;
    }
`;

export default GlobalStyles;
