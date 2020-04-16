type Obj = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [key: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
};

export const deepMerge = <T extends Obj>(target: T, source: DeepPartial<T> = {}): T => {
  const copyTarget = { ...target };
  const copySource = { ...source };

  for (const key of Object.keys(copySource)) {
    if (copySource[key] instanceof Object && key in copyTarget) {
      Object.assign(copySource[key], deepMerge(copyTarget[key], copySource[key]));
    }
  }

  Object.assign(copyTarget, copySource);

  return copyTarget;
};
