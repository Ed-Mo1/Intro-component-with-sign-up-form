import { useField } from "formik";
import { IoIosAlert } from "react-icons/io";

const InputFeild = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <fieldset>
      <div className="relative">
        <input
          {...field}
          {...props}
          className={`w-full block p-5 font-semibold  border-2 rounded-lg caret-blue ${
            meta.error && meta.touched && "border-red"
          }
          ${!meta.error && field.value && "border-blue"}`}
        />
        {meta.error && meta.touched && (
          <IoIosAlert className="absolute top-1/2 right-4 -translate-y-1/2 text-red text-2xl" />
        )}
      </div>
      <div className="min-h-[30px] pt-1">
        {meta.error && meta.touched && (
          <div className="text-sm text-red">{meta.error}</div>
        )}
      </div>
    </fieldset>
  );
};

export default InputFeild;
