import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible ">
      {children}
      <button
        type="button"
        onClick={onClose}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;

// APPUNTI

// children è una special prop supportata da ogni componente che ci consente di passare il parametro <Alert>Hello World</Alert>
// anzichè inseire il parametor come <Alert text="Hello World" />

// react node ci permette di fare cose più complesse sul dato tipo <Alert>Hello <span>World</span></Alert> (la stringa non lo permetterebbe)
