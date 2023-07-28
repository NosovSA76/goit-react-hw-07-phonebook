import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteContact,
  fetchContacts,
} from "./redux/contacts/contacts-operations";
import {
  selectContacts,
  selectIsLoading,
  // selectError,
  selectFilteredContacts,
} from "./redux/selectors";
import { setFilter } from "./redux/filter/filter-slice";

import { WrapperPhonebook } from "./components/Phonebookwrapper/phonebookwrapper";
import { Title } from "./components/Title/title";
import { InputForm } from "./components/Addform/addform";
import { ContactsTitle } from "./components/Contacttitle/contactTitle";
import { Search } from "./components/Search/search";
import { ContactList } from "./components/Contactslist/contactList";
import { ShowButton } from "./components/ShowButton/showButton";
import { CountMessage } from "./components/CountMessage/CountMessage";
import { getCountMessage } from "./utils/getCountMessage";

export const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isSecondButtonVisible, setIsSecondButtonVisible] = useState(true);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  const changeFilter = (e) => {
    setSearchText(e.currentTarget.value);
  };

  const handleToggleSecondButtonVisibility = () => {
    setIsSecondButtonVisible((prevVisibility) => !prevVisibility);
    dispatch(setFilter(""));
    setSearchText("");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (contactId, forEnd) => {
    setIsSecondButtonVisible(contacts.length === 1);
    if (forEnd === 1) {
      dispatch(setFilter(""));
      setSearchText("");
    }
    dispatch(deleteContact(contactId));
  };

  return (
    <WrapperPhonebook>
      <Title text="PhoneBook" />
      {!isLoading && (
        <>
          {isSecondButtonVisible && <InputForm contacts={contacts} />}
          {isSecondButtonVisible && (
            <CountMessage text={getCountMessage(contacts.length)} />
          )}
          {contacts.length !== 0 && (
            <ShowButton
              contactCount={contacts.length}
              onButtonChange={handleToggleSecondButtonVisibility}
            />
          )}
          {!isSecondButtonVisible && (
            <>
              <ContactsTitle text="Contacts" />
              <Search valueSearch={searchText} onChange={changeFilter} />
              <ContactList
                contacts={filteredContacts}
                onDeleteContact={handleDeleteContact}
              />
            </>
          )}
          <ToastContainer />
        </>
      )}
    </WrapperPhonebook>
  );
};
