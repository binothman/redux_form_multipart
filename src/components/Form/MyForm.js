import React from "react";
import { reduxForm, Field } from "redux-form";

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => (
  <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}
  />
);

const MyForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} encType="multipart/form-data" id="my-form">
    <Field label="Name" name="name" component="input" type="text" />
    <Field component={FileInput} name="signature" />
    <button type="submit">Submit</button>
  </form>
);

const config = {
  form: "myform"
};
export default reduxForm(config)(MyForm);
