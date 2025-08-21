import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    require?: boolean;
    isAutocompleted?: boolean;
    label?:string
}
export const Input = ({ isLoading,
    placeholder,
    type = "text",
    register,
    errors,
    errorMsg = "Tu dois renseigner!!!",
    id,
    require = true,
    isAutocompleted = false,
label }: Props) => {
    return (
        <div className="space-y-2">
            {label && (
                <Typography variant="caption4"
                component="div"
                theme={errors[id]? "danger": "gray-600"}>
                    {label}
                </Typography>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={clsx(
                    isLoading && "cursor-not-allowed",
                    errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
                    "w-full p-4 font-light border border-gray-600  rounded focus:outline-none focus:ring-1 focus:ring-primary"
                )}
                disabled={isLoading}
                {...register(id, {
                    required: {
                        value: require,
                        message: errorMsg,
                    }
                })}
                autoComplete={isAutocompleted ? "on" : "off"}
            />
            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>

    )
}