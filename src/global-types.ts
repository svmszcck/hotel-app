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

// Models

export type PropertyImg = {
  url: string;
  is_portrait: boolean;
  position: number;
  unit_group_ids: number[];
  tags: string[];
};

export type Property = {
  id: number;
  external_id: string;
  images: PropertyImg[];
  name: string;
  distance: number;
  description: string;
  unit_groups: { name: string }[];
};
