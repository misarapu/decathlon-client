import { ComponentProps } from "react";

type FormLabelProps = {

} & ComponentProps<"label">


const FormLabel = (props: FormLabelProps) => {

  return (
    <label className="form-label" {...props} />
  );
}

export default FormLabel;