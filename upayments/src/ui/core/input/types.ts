export type Input = 'name' | 'price' | 'description' | 'image';
export type InputMap = {
  label?: string;
  placeholder: string;
  type: Input;
};

export type InputType =
  | 'name'
  | 'price'
  | 'description'
  | 'image'

export const InputConfigMap = new Map<InputType, InputMap>([
  [
    'name',
    {
      placeholder: 'Product title',
      label: 'Product title',
      type: 'name'
    },
  ],
  [
    'price',
    {
      placeholder: 'Price',
      label: 'Price',
      type: 'price',
    },
  ],
  [
    'description',
    {
      placeholder: 'Description',
      label: 'Description',
      type: 'description',
    },
  ],
  [
    'image',
    {
      placeholder: 'Image Link',
      label: 'Image Link',
      type: 'image',
    },
  ],
]);