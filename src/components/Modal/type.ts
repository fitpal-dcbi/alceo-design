import { Props as OrbitModalProps } from "@kiwicom/orbit-components/lib/Modal";

interface BaseModalProps {
  children?: React.ReactNode;
}

export type ModalProps = BaseModalProps & OrbitModalProps;
