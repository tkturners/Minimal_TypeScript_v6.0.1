import type { IAddressItem } from './common';

// ----------------------------------------------------------------------

export type ICheckoutItem = {
  id: string;
  name: string;
  coverUrl: string;
  available: number;
  price: number;
  colors: string[];
  size: string;
  quantity: number;
  subtotal?: number;
};

export type ICheckoutDeliveryOption = {
  value: number;
  label: string;
  description: string;
};

export type ICheckoutPaymentOption = {
  value: string;
  label: string;
  description: string;
};

export type ICheckoutCardOption = {
  value: string;
  label: string;
};

export type ICheckoutState = {
  total: number;
  subtotal: number;
  discount: number;
  shipping: number;
  totalItems: number;
  items: ICheckoutItem[];
  billing: IAddressItem | null;
};

export type CheckoutContextValue = ICheckoutState & {
  canReset: boolean;
  onReset: () => void;
  onUpdate: (updateValue: Partial<ICheckoutState>) => void;
  onUpdateField: (
    name: keyof ICheckoutState,
    updateValue: ICheckoutState[keyof ICheckoutState]
  ) => void;
  //
  completed: boolean;
  //
  onAddToCart: (newItem: ICheckoutItem) => void;
  onDeleteCart: (itemId: string) => void;
  //
  onIncreaseQuantity: (itemId: string) => void;
  onDecreaseQuantity: (itemId: string) => void;
  //
  activeStep: number;
  initialStep: () => void;
  onBackStep: () => void;
  onNextStep: () => void;
  onGotoStep: (step: number) => void;
  //
  onCreateBilling: (billing: IAddressItem) => void;
  onApplyDiscount: (discount: number) => void;
  onApplyShipping: (discount: number) => void;
};
