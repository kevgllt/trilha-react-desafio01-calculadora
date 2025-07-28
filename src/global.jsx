import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
    }

    html {
        /* Define a fonte base para 62.5% do padrão (16px * 0.625 = 10px) */
        font-size: 62.5%; 

        /*
        Com essa única regra, agora a matemática fica fácil:
            1rem = 10px
            1.6rem = 16px
            2.4rem = 24px

        */
    }
`;
