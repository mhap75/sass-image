export interface IReadOnlyChildren {
  readonly children?: React.ReactNode;
}

export interface IParams<T extends Record<string, string>> {
  params: T;
}
