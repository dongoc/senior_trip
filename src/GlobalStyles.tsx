import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
	${reset}

	:root {
    --color-black: #282828;
    --color-white: #ffffff;
    --color-grey-primary: #b4b4b4;
    --color-blue-primary: #3843d0;
    --color-blue-dark: #15006D;
    --color-blue-light: #8FA1FF;
    --color-yellow-primary: #FFC466;
    --color-yellow-light: #fddca6;
    --color-red-primary: #f96232;
    --color-green-primary: #6AC7B6; 
    --color-background: #F3EADC;

    --spacing-xxs: 5px;
    --spacing-xs: 10px;
    --spacing-s: 15px;
    --spacing-m: 20px;
    --spacing-l: 25px;
    --spacing-xl: 30px;
    --spacing-xxl: 50px;
    --spacing-xxl-2: 100px;
    --spacing-xxl-3: 200px;

    --header-height: 70px;
    --footer-height: 40px;
    --button-height: 60px;

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
