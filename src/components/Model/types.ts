
export interface BottomModalProps {
    show: boolean;
    setShow: (val: boolean) => void;
    children?: React.ReactNode;
}

export interface ListenerModalProps extends BottomModalProps {
  onReceiveText: (val: string) => void;
}

export interface BillSummaryModalProps extends BottomModalProps {
    subTotal: number | string;
    totalAmount: number | string;
    discountTotal?: number | string;
    tax?: number | string;
    platformFee?: number | string;
}
