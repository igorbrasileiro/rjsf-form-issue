import { useSignal } from "@preact/signals";
import Form, { IChangeEvent } from "@rjsf/core";
import { loopSchema, pageData, siteSchema } from "../components/constants.ts";
// import { validator } from "../components/validator.ts";
import { customizeValidator } from "@rjsf/validator-ajv8";
const validator = customizeValidator({});

export default function FormW() {
  const formData = useSignal({});
  const schema = useSignal(loopSchema);
  const onChange = (e: IChangeEvent) => {
    formData.value = e.formData;
  };

  return (
    <Form
      formData={formData.value}
      schema={schema.value}
      validator={validator}
      onChange={onChange}
    />
  );
}
