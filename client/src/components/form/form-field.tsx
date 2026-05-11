import { ErrorMessage, Field } from "formik";
import { SpaceIcon } from "lucide-react";
import type { FC } from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  options?: string[];
}

const FormField: FC<Props> = ({
  label,
  name,
  type = "text",
  required = true,
  options,
}) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm/6 font-semibold text-gray-900">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div>
        {type !== "radio" ? (
          <Field
            id={name}
            type={type}
            name={name}
            required={required}
            className={`rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-indigo-600 sm:text-sm/6 ${type === "checkbox" ? "size-5 ms-1" : "outline-1 -outline-offset-1 outline-gray-300 w-full"}`}
          />
        ) : (
          <div className="flex gap-4">
            {options?.map((option) => (
              <div className="flex gap-2 items-center">
                <Field type="radio" id={option} name={name} value={option} />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        )}

        <ErrorMessage
          component={"div"}
          name={name}
          className="absolute -bottom-5 left-0 text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default FormField;
