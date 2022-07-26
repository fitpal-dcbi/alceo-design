import { Props as OrbitModalProps } from "@kiwicom/orbit-components/lib/Modal";

interface BaseDialogProps {
  title?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

export type DialogProps = BaseDialogProps & OrbitModalProps;
