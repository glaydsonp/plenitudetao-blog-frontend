/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

import primaryTheme from './themes/primary';

export type Theme = typeof primaryTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
