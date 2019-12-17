
import { css } from 'styled-components';

const fontFaces = css`
  @font-face {
    font-family: 'Playfair Display';
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/playfair/PlayfairDisplay-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url('/fonts/avenir/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix');
    src: url('/fonts/avenir/e9167238-3b3f-4813-a04a-a384394eed42.eot?#iefix')
        format('eot'),
      url('/fonts/avenir/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2')
        format('woff2'),
      url('/fonts/avenir/1e9892c0-6927-4412-9874-1b82801ba47a.woff')
        format('woff'),
      url('/fonts/avenir/46cf1067-688d-4aab-b0f7-bd942af6efd8.ttf')
        format('truetype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url('/fonts/avenir/12d643f2-3899-49d5-a85b-ff430f5fad15.eot?#iefix');
    src: url('/fonts/avenir/12d643f2-3899-49d5-a85b-ff430f5fad15.eot?#iefix')
        format('eot'),
      url('/fonts/avenir/aad99a1f-7917-4dd6-bbb5-b07cedbff64f.woff2')
        format('woff2'),
      url('/fonts/avenir/91b50bbb-9aa1-4d54-9159-ec6f19d14a7c.woff')
        format('woff'),
      url('/fonts/avenir/a0f4c2f9-8a42-4786-ad00-fce42b57b148.ttf')
        format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url('/fonts/avenir/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix');
    src: url('/fonts/avenir/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix')
        format('eot'),
      url('/fonts/avenir/14c73713-e4df-4dba-933b-057feeac8dd1.woff2')
        format('woff2'),
      url('/fonts/avenir/b8e906a1-f5e8-4bf1-8e80-82c646ca4d5f.woff')
        format('woff'),
      url('/fonts/avenir/890bd988-5306-43ff-bd4b-922bc5ebdeb4.ttf')
        format('truetype');
    font-weight: 700;
  }
`;
/* export for global-styles */
export { fontFaces as FONT_FACES };

/*
 * default theme definition, use like this:
 * import THEME_FONTS from '@constants/fonts';
 */

export default {
  heading: 'Playfair Display',
  body: 'Avenir Next, Avenir, Helvetica Neue, Helvetica, Arial, sans-serif'
};
