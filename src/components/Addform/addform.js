import { useDispatch } from "react-redux";
import { Formik } from "formik";
import "yup-phone";
import { schema } from "../../shared/schemaYup";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { BsFillTelephoneFill, BsPersonFill } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import {
  addContact,
  changeContact,
} from "../../redux/contacts/contacts-operations";

import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from "./addform.styled";

const initialValues = { avatar: "", name: "", phone: "" };

export const InputForm = ({ contacts }) => {
  const dispatch = useDispatch();

  const onAddContact = (data) => {
    const existingContact = contacts.find(
      (contact) => contact.name === data.name && contact.phone === data.phone
    );
    const existingContactByName = contacts.find(
      (contact) => contact.name === data.name && contact.phone !== data.phone
    );
    const existingContactByPhone = contacts.find(
      (contact) => contact.phone === data.phone
    );

    if (existingContact) {
      Report.failure("Such a contact already exists", "", "Okay");
      return;
    } else if (existingContactByPhone) {
      Report.failure(
        `This number is - ${existingContactByPhone.name}'s`,
        "",
        "Okay"
      );
      return;
    } else if (existingContactByName) {
      Confirm.show(
        "",
        "Another number is recorded for this contact should I correct it?",
        "Yes",
        "No",
        () => {
          const changedContact = {
            ...existingContactByName,
            phone: data.phone,
          };
          console.log(changedContact);
          dispatch(changeContact(changedContact));
        },
        () => {
          return;
        }
      );
    } else {
      dispatch(addContact(data));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
      }}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormField>
          <LabelWrapper>
            <BsPersonFill />
            <LabelSpan>Avatar</LabelSpan>
          </LabelWrapper>
          <FieldFormik name="avatar" placeholder="Add link to avatar" />
          <ErrorMessage name="avatar" component="span" />
        </FormField>
        <FormField>
          <LabelWrapper>
            <BsPersonFill />
            <LabelSpan>Name</LabelSpan>
          </LabelWrapper>
          <FieldFormik type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          <LabelWrapper>
            <BsFillTelephoneFill />
            <LabelSpan>Number</LabelSpan>
          </LabelWrapper>
          <FieldFormik
            type="tel"
            name="phone"
            placeholder="+38-050-123-45-67"
          />
          <ErrorMessage name="phone" component="span" />
        </FormField>
        <StyledButton type="submit">
          <IoMdPersonAdd size="16" />
          Add contact
        </StyledButton>
      </Form>
    </Formik>
  );
};
