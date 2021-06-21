import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

export const TextField:React.FC<{label: string; name: string; type?: string;}> = ({label, name, type}) => {

  const [field, meta] = useField({ name });

    console.log();

  const errorText = (meta.touched && meta.error) || "";

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input  type={type || "text"} {...field} />
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

