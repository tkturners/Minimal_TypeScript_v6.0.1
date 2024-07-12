import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { StyledControlPanel } from '../styles';

// ----------------------------------------------------------------------

export type ModeProps = 'side-by-side' | 'split-screen';

type Props = {
  mode: ModeProps;
  onModeChange: (event: React.MouseEvent<HTMLElement>, newMode: ModeProps | null) => void;
};

export function ControlPanel({ mode, onModeChange }: Props) {
  return (
    <StyledControlPanel>
      <ToggleButtonGroup color="primary" value={mode} exclusive onChange={onModeChange}>
        <ToggleButton value="side-by-side">Side by side</ToggleButton>

        <ToggleButton value="split-screen">Split screen</ToggleButton>
      </ToggleButtonGroup>
    </StyledControlPanel>
  );
}
