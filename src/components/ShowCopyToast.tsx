import toast from "react-hot-toast";
import { RiFileCopyLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export const showCopyToast = (message: string) => {
  toast.custom((t) => (
    <div
      className={`flex items-center gap-3 bg-backgroundSecondary border border-primaryStroke 
      px-4 py-4 rounded-lg shadow-lg min-w-[260px]
      ${t.visible ? "animate-enter" : "animate-leave"}`}
    >
      {/* Start Icon */}
      <RiFileCopyLine className="text-primaryBlue text-lg" />

      {/* Text */}
      <p className="text-sm text-textPrimary flex-1">
        {message}
      </p>

      {/* Close Icon */}
      <button
        onClick={() => toast.dismiss(t.id)}
        className="text-textTertiary p-1 hover:bg-primaryStroke rounded-sm transition"
      >
        <IoClose size={18} />
      </button>
    </div>
  ));
};
