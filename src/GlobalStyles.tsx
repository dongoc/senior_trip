import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
	${reset}

	:root {
    --color-black: #282828;
    --color-white: #ffffff;

    --spacing-xxs: 5px;
    --spacing-xs: 10px;
    --spacing-s: 15px;
    --spacing-m: 20px;
    --spacing-l: 25px;
    --spacing-xl: 30px;
    --spacing-xxl: 50px;
    --spacing-xxl-2: 100px;
    --spacing-xxl-3: 200px;

    --header-height: 80px;
    --footer-height: 40px;

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
