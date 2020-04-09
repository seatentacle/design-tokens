import palette, { Palette } from './palette';
import base, { Base } from './base';

export type Foundation = {
  palette: Palette;
  base: Base;
}

const foundation: Foundation = {
  palette,
  base,
};

export default foundation;
