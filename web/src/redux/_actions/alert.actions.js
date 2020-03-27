//alerts if well done, can send snackbars to front
//plans in the future with that e-e 

//importing functions and variables redux
import { toast } from "react-toastify";
import { alertConstants } from '../_constants';

//exporting functions of logging and management of development logs

export const alertActions = {
    request,
    success,
    error,
    clear
};

function request(message) {
    clear();
    toast.info(message || "Request!", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast'
      });
    return { type: alertConstants.INFO, message };
}

function success(message) {
    clear();
    toast.success(message || "Sucesso!", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast'
      });
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    clear();
    toast.error(message || 'Error!', {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast'
      });
    return { type: alertConstants.ERROR, message };
}

function clear() {
    toast.dismiss();
    return { type: alertConstants.CLEAR };
}