import type { Theme, SxProps } from '@mui/material/styles';
import type { Editor, Extension, EditorOptions } from '@tiptap/react';

// ----------------------------------------------------------------------

export type EditorProps = Partial<EditorOptions> & {
  value?: string;
  error?: boolean;
  fullItem?: boolean;
  resetValue?: boolean;
  sx?: SxProps<Theme>;
  placeholder?: string;
  helperText?: React.ReactNode;
  onChange?: (value: string) => void;
  slotProps?: {
    wrap: SxProps<Theme>;
  };
};

export type EditorToolbarProps = {
  fullScreen: boolean;
  editor: Editor | null;
  onToggleFullScreen: () => void;
  fullItem?: EditorProps['fullItem'];
};

export type EditorToolbarItemProps = {
  icon?: React.ReactNode;
  label?: string;
  active?: boolean;
  disabled?: boolean;
};

export type EditorCodeHighlightBlockProps = {
  extension: Extension;
  updateAttributes: (attributes: Record<string, any>) => void;
  node: {
    attrs: {
      language: string;
    };
  };
};
