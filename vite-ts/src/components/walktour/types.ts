import type * as NsWalktourRoot from 'react-joyride';
import type { ButtonProps } from '@mui/material/Button';
import type { Theme, SxProps } from '@mui/material/styles';
import type { IconButtonProps } from '@mui/material/IconButton';

// ----------------------------------------------------------------------

export { NsWalktourRoot };

export type WalktourCustomStep = NsWalktourRoot.Step & {
  slotProps?: {
    root?: SxProps<Theme>;
    title?: SxProps<Theme>;
    content?: SxProps<Theme>;
    progress?: SxProps<Theme>;
    closeBtn?: IconButtonProps;
    skipBtn?: ButtonProps;
    backBtn?: ButtonProps;
    nextBtn?: ButtonProps;
  };
};

export type WalktourTooltipProps = NsWalktourRoot.TooltipRenderProps & {
  step: WalktourCustomStep;
};

export type WalktourProps = NsWalktourRoot.Props;

export type WalktourProgressBarProps = {
  totalSteps: number;
  currentStep: number;
  onGoStep: (index: number) => void;
};

export type UseWalktourProps = {
  defaultRun?: boolean;
  steps: WalktourCustomStep[];
};

export type UseWalktourReturn = {
  run: boolean;
  steps: WalktourCustomStep[];
  setRun: React.Dispatch<React.SetStateAction<boolean>>;
  onCallback: (data: NsWalktourRoot.CallBackProps) => void;
  setHelpers: (storeHelpers: NsWalktourRoot.StoreHelpers) => void;
};
