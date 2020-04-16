import { deepMerge, DeepPartial } from './utils/deepMerge';
import foundation, { Foundation } from './foundation';

type GetTokens = (customFoundation?: DeepPartial<Foundation>) => Foundation

export const getTokens: GetTokens = customFoundation => {
  const theme = customFoundation
    ? deepMerge(foundation, customFoundation)
    : foundation;

  return { ...theme };
};

export const defaultTokens = getTokens();
