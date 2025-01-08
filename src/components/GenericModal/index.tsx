import { ReactNode } from "react";
import styles from "./GenericModal.module.scss";
import { IoCloseCircle } from "react-icons/io5";

interface GenericModalProps {
  children: ReactNode;
  title: string;
  description?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const GenericModal = ({ children, title, description, setOpen }: GenericModalProps) => {
  return (
    <dialog className={styles.generic_modal}>
      <header className={styles.header_modal}>
        <h2>{title}</h2>
        <IoCloseCircle 
            size={30} 
            color="#8B0000" 
            cursor={"pointer"} 
            onClick={() => {
              setOpen(false)
            }}
        />
      </header>
      {description && <span className={styles.descripton_area}>{description}</span>}
      {children}
    </dialog>
  );
};

export default GenericModal;
