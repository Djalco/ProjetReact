import clsx from "clsx";
import { Typography } from "../typography/typography";
import { FieldValues, UseFormRegister, FieldErrors, FieldError, FieldPath } from "react-hook-form";

interface Props<T extends FieldValues> {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password" | "url";
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    errorMsg?: string;
    id: keyof T;
    require?: boolean;
    isAutocompleted?: boolean;
    label?: string
}
export const Input = <T extends FieldValues>({ isLoading,
    placeholder,
    type = "text",
    register,
    errors,
    errorMsg = "Tu dois renseigner!!!",
    id,
    require = true,
    isAutocompleted = false,
    label }: Props<T>) => {
    return (
        <div className="space-y-2">
            {label && (
                <Typography variant="caption4"
                    component="div"
                    theme={errors[id] ? "danger" : "gray-600"}>
                    {label}
                </Typography>
            )}
            <div className="flex items-center">

                {type === "url" && (
                    <div className=" p-4 text-gray-600 border-left border-gray-400 rounded-l bg-gray-500/40 border-y">
                        https://
                    </div>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    className={clsx(
                        type === "url" ? "rounded-r" : "rounded",
                        isLoading && "cursor-not-allowed",
                        errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
                        "w-full p-4 font-light border border-gray-400  focus:outline-none focus:ring-1 focus:ring-primary"
                    )}
                    disabled={isLoading}
                    {...register(id as FieldPath<T>, {
                        required: {
                            value: require,
                            message: errorMsg,
                        }
                    })}
                    autoComplete={isAutocompleted ? "on" : "off"}
                />
            </div>
            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {(errors[id] as FieldError)?.message}
                </Typography>
            )}
        </div>

    )
}