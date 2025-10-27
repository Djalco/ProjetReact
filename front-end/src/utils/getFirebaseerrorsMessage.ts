import errors from "@/config/locales/errors.json";


type FirebaseErrorsType = {
    [key: string]: string
}

type FirebaseErrors = {
    [key:string]:FirebaseErrorsType
}
const firebaseError: FirebaseErrors = {
    ...errors,
    an_unknown_error_has_occurred:{
        an_unknown_error_has_occurred:errors.an_unknown_error_has_occurred
    }
}
export function getFirebaseErrorMessage(
    method:string,
    errorCode: string
): string {
    const defaultErrorMessage= errors.an_unknown_error_has_occurred

    if(!firebaseError[method]){
        return defaultErrorMessage;
    }

    if(!firebaseError[method][errorCode]){
        return defaultErrorMessage;
    }

    const errorMessage = firebaseError[method][errorCode] 

    return errorMessage;
}