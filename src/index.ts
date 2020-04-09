import foundation, { Foundation } from './foundation';

export const getTokens = (): Foundation => {
  const theme = foundation;

  return { ...theme };
};

export const defaultTokens = getTokens();
