import base, { Base } from './base';
import palette, { Palette } from './palette';
import typography, { Typography } from './typography';

export type Foundation = {
  base: Base;
  palette: Palette;
  typography: Typography;
}

const foundation: Foundation = {
  base,
  palette,
  typography,
};

export default foundation;
