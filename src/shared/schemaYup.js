import * as yup from "yup";
import "yup-phone";

export const schema = yup.object().shape({
  avatar: yup.string(),
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan"
    )
    .required(),
  phone: yup
    .string()
    .matches(
      /^\+38-\d{3}-\d{3}-\d{2}-\d{2}$/,
      "Phone number is not valid. Please use format +38-XXX-XXX-XX-XX"
    )
    .required(),
});
