import { Props as OrbitModalProps } from "@kiwicom/orbit-components/lib/Modal";

interface BaseDialogProps {
  children?: React.ReactNode;
}

interface BaseDialogSubComponentProps {
  children?: React.ReactNode;
}

export type DialogProps = BaseDialogProps & OrbitModalProps;
export type DialogSubComponentProps = BaseDialogSubComponentProps;
