import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
	${reset}

	:root {
    --color-black: #282828;
    --color-white: #ffffff;
    
    /* 임시 디자인 */
    --color-grey-primary: #b4b4b4;
    --color-blue-primary: #3843d0;
    --color-blue-dark: #15006D;
    --color-blue-light: #8FA1FF;
    --color-yellow-primary: #FFC466;
    --color-yellow-light: #fddca6;
    --color-red-primary: #f96232;
    --color-green-primary: #6AC7B6; 
    --color-background: #F3EADC;

    /* 지민이 디자인 */
    --color-primary: #317452;
    --color-typography-1: #222222;
    --color-typography-2: #999999;
    --color-disabled: #DDDDDD;
    --color-warning: #FF0000;
    --color-card-background: #F9F9F9;

    --spacing-xxs: 5px;
    --spacing-xs: 10px;
    --spacing-s: 15px;
    --spacing-m: 20px;
    --spacing-l: 25px;
    --spacing-xl: 30px;
    --spacing-xxl: 50px;
    --spacing-xxl-2: 100px;
    --spacing-xxl-3: 200px;

    --header-height: 64px;
    --footer-height: 40px;
    --button-height: 50px;
    --input-height: 50px;

    --screen-width: 960px;
    --tablet-width: 768px;
    --mobile-width: 375px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`
