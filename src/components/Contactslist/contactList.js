// import { gsap } from "gsap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { toastifyOptions } from "../../utils/toastifyOptions";
import { Tooltip } from "@mui/material";
import React from "react";
import { FcCellPhone, FcBusinessman } from "react-icons/fc";
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/selectors";

import { ContactModal } from "../ContactModal/Modal";
import {
  ContactListContainer,
  ContactListItem,
  ContactsName,
  ContactsPhone,
  DeleteContacts,
  Avatar,
  AvatarBlok,
} from "./contactList.styled";

export const ContactList = ({ onDeleteContact }) => {
  const [invalidAvatars, setInvalidAvatars] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const result = useSelector(selectFilteredContacts);

  const getFilteredContacts = (data) => {
    return data;
  };
  const filteredContacts = getFilteredContacts(result);
  const toastShow = () => {
    toast.warn(`No contacts matching your request`, toastifyOptions);
    console.log("3");
  };

  useEffect(() => {
    if (!filteredContacts?.length && !error && !isLoading) {
      toastShow();
    }
  }, [filteredContacts, error, isLoading]);

  const closeModal = () => {
    setSelectedContact(null);
  };

  const setModalData = (id) => {
    const selectContact = contacts.find((contact) => contact.id === id);
    setSelectedContact(selectContact);
  };

  return (
    <ContactListContainer>
      {isLoading && contacts?.length === 0 && <div>Loading...</div>}
      {error && !isLoading && <div>Ooops, error...</div>}
      {!error &&
        !isLoading &&
        filteredContacts?.length > 0 &&
        filteredContacts.map((contact, index) => (
          <ContactListItem key={contact.id}>
            <Tooltip
              title="Show info"
              describeChild
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    bgcolor: "#608B38",
                    color: "#FFF",
                    width: "50px",
                    textAlign: "center",
                  },
                },
              }}
            >
              <AvatarBlok onClick={() => setModalData(contact.id)}>
                {contact.avatar && !invalidAvatars.includes(contact.id) ? (
                  <Avatar
                    src={contact.avatar}
                    alt="Contact's avatar"
                    onError={() =>
                      setInvalidAvatars((prevAvatars) => [
                        ...prevAvatars,
                        contact.id,
                      ])
                    }
                  />
                ) : (
                  <FcBusinessman size={48} />
                )}
              </AvatarBlok>
            </Tooltip>
            <ContactsName>{contact.name}</ContactsName>
            <Tooltip
              title="Call"
              describeChild
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    bgcolor: "#608B38",
                    color: "#FFF",
                    width: "50px",
                    textAlign: "center",
                  },
                },
              }}
            >
              <ContactsPhone href={"tel:" + contact.phone}>
                <FcCellPhone className="fade-effect" size={24}></FcCellPhone>

                {contact.phone}
              </ContactsPhone>
            </Tooltip>

            <DeleteContacts
              onClick={() =>
                onDeleteContact(contact.id, filteredContacts.length)
              }
            >
              Delete
            </DeleteContacts>
          </ContactListItem>
        ))}
      <ContactModal
        isOpen={selectedContact !== null}
        onClose={closeModal}
        data={selectedContact}
      />
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
