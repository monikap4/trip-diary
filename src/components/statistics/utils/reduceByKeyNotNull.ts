export const reduceByKeyNotNull = <T, K extends keyof T>(items: T[], key: K) =>
  items.reduce(
    (acc, item) => {
      const value = item[key];
      if (value !== null) {
        acc.push(value as NonNullable<T[K]>);
      }

      return acc;
    },
    [] as NonNullable<T[K]>[],
  );
