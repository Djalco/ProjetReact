import {
    Control,
    FieldErrors,
    UseFormRegister,
    UseFormHandleSubmit,
    SubmitHandler,
    FieldValues
} from "react-hook-form";

// ⚠️ FormsType doit être générique pour accepter le type de données du formulaire (T)
export interface FormsType<T extends FieldValues> {
    // 1. Types react-hook-form
    control: Control<T>;
    errors: FieldErrors<T>;
    register: UseFormRegister<T>;
    handleSubmit: UseFormHandleSubmit<T>;

    // 2. Fonctions et autres props
    onSubmit: SubmitHandler<T>;
    isLoading: boolean;
}
export interface RegisterFormFielsType {
    email: string;
    password: string;
    how_did_hear: string;
}
export interface LoginFormFielsType {
    email: string;
    password: string;
}
export interface ForgetFormFielsType {
    email: string;
    password: string;
    how_did_hear: string;
}

export interface OnboardingProfileFormFielsTypes {
    displayName: string
    expertise: string
    biography: string
}

export interface UserProfileFormFieldsType {
    displayName: string
    expertise: string
    biography: string
    github : string
    linkedin : string
}