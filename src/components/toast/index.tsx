import toast from "react-hot-toast";
import { BiCheckDouble } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";

class ToastClass {
  success(message: string) {
    toast.success(message, {
      icon: <BiCheckDouble size={22} />,
      style: {
        padding: "5px 8px",
        color: "#fff",
        background: "#00DC76",
        borderRadius: "4px",
        fontWeight: "500",
        width: "250px",
        height: "40px",
        textAlign: "left",
        fontSize: "14px",
        // minWidth: '300px'
      },
    });
  }

  error(message: string) {
    toast.error(message, {
      icon: <MdOutlineClear size={22} />,
      style: {
        padding: "5px 8px",
        color: "#fff",
        background: "#da072b",
        borderRadius: "4px",
        fontWeight: "500",
        minWidth: "250px",
        height: "40px",
        textAlign: "left",
      },
    });
  }
}

const Toast = new ToastClass();
export default Toast;
