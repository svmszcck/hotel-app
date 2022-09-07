// State Types

export type GlobalState = {
  loading: boolean;
  properties: any[];
  activeProperty: any;
};

export type Action = {
  type: string;
  payload: any;
};
