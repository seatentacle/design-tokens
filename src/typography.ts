import {
  css,
  FlattenInterpolation, // eslint-disable-line @typescript-eslint/no-unused-vars
  ThemeProps, // eslint-disable-line @typescript-eslint/no-unused-vars
} from 'styled-components';

const h1 = css`
  font-weight: ${({ theme }): number => theme.base.fontWeightBold};
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }): string => theme.palette.white};
`;

const h2 = css`
  font-weight: ${({ theme }): number => theme.base.fontWeightBold};
  font-size: ${({ theme }): string => theme.base.fontSizeLg};
  line-height: 22px;
  color: ${({ theme }): string => theme.palette.white};
`;

const text24 = css`
  font-weight: ${({ theme }): number => theme.base.fontWeightNormal};
  font-size: 24px;
  line-height: 24px;
  color: ${({ theme }): string => theme.palette.white};
`;

const text16 = css`
  font-weight: ${({ theme }): number => theme.base.fontWeightNormal};
  font-size: ${({ theme }): string => theme.base.fontSizeMd};
  line-height: 22px;
  color: ${({ theme }): string => theme.palette.white};
`;

const text16bold = css`
  font-weight: ${({ theme }): number => theme.base.fontWeightBold};
  font-size: ${({ theme }): string => theme.base.fontSizeMd};
  line-height: 22px;
  color: ${({ theme }): string => theme.palette.white};
`;

const text14 = css`
  font-weight: ${({ theme }): number => theme.base.fontWeightNormal};
  font-size: ${({ theme }): string => theme.base.fontSizeSm};
  line-height: 20px;
  color: ${({ theme }): string => theme.palette.white};
`;

const text14bold = css`
  font-weight: ${({ theme }): number => theme.base.fontWeightBold};
  font-size: ${({ theme }): string => theme.base.fontSizeSm};
  line-height: 20px;
  color: ${({ theme }): string => theme.palette.white};
`;

const text12bold = css`
  font-weight: ${({ theme }): number => theme.base.fontWeightBold};
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }): string => theme.palette.white};
`;

const typography = {
  h1,
  h2,
  text24,
  text16,
  text16bold,
  text14,
  text14bold,
  text12bold,
};

export type Typography = typeof typography;

export default typography;
