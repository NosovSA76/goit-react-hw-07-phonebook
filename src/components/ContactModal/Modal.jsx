import { useDispatch } from "react-redux";
import {
  changeContact,
deleteContact} from "../../redux/contacts/contacts-operations";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FcEditImage, FcViewDetails, FcCancel } from "react-icons/fc";
import { Tooltip } from "@mui/material";

import Avatar from "../../assets/no-photo.png";
import {
  Button,
  CloseBtn,
  ModalPicture,
  ModalPictureWrapper,
  PictureDescr,
  ContactDetails,
  TitleContactDetails,
  ContactDetailsItens,
  ContactDetailsChanged,
} from "./Modal.styled";
import { customStyles } from "./Modal.styled";

Modal.setAppElement("#root");

export const ContactModal = ({ isOpen, data, onClose }) => {
  const [moreInfoOpen, setMoreInfoisOpen] = useState(false);
  const [isEditing, setisEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    address: data?.address || "",
    birthday: data?.birthday || "",
    email: data?.email || "",
    number: data?.number || "",
    company: data?.company || "",
    department: data?.department || "",
    position: data?.position || "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setMoreInfoisOpen(false);
    setisEditing(false);
    setEditedData({
      avatar: data?.avatar || "",
      id: data?.id || "",
      name: data?.name || "",
      phone: data?.phone || "",
      address: data?.address || "",
      birthday: data?.birthday || "",
      email: data?.email || "",
      number: data?.number || "",
      company: data?.company || "",
      department: data?.department || "",
      position: data?.position || "",
    });
  }, [data]);

  const openChangeModal = () => {
    setisEditing(!isEditing);
    setMoreInfoisOpen(true);
  };

  const openDetails = () => {
    setMoreInfoisOpen(!moreInfoOpen);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteContact = (contactId) => {
  console.log(contactId)
  dispatch(deleteContact(contactId));
  onClose();
  };

   const closeChangeModalWithSave = () => {
    dispatch(changeContact(editedData));
    setisEditing(false);
  };

  const closeChangeModalWithoutSave = () => {
    setisEditing(false);
    setMoreInfoisOpen(false);
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Inline Styles Modal Example"
      style={customStyles}
    >
      <CloseBtn onClick={onClose}>
        <MdOutlineClose />
      </CloseBtn>
      <ModalPictureWrapper>
        <ModalPicture
          src={data?.avatar !== "" ? `${data?.avatar}` : Avatar}
          alt="photo"
          width="260"
        />
      </ModalPictureWrapper>

      {!isEditing && (
        <PictureDescr>
          <p style={{ fontWeight: "700" }}>{data?.name}</p>
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
            <a href={"tel:" + data?.phone}>{data?.phone}</a>
          </Tooltip>
        </PictureDescr>
      )}

      {moreInfoOpen &&
        (isEditing ? (
          <>
            <ContactDetailsItens>
              <TitleContactDetails>Phone: </TitleContactDetails>
              <ContactDetailsChanged
                type="text"
                name="name"
                value={editedData?.name}
                onChange={handleInputChange}
              />
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Phone: </TitleContactDetails>
              <ContactDetailsChanged
                type="text"
                name="phone"
                value={editedData?.phone}
                onChange={handleInputChange}
              />
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Address: </TitleContactDetails>
              <ContactDetailsChanged
                type="text"
                name="address"
                value={editedData?.address}
                onChange={handleInputChange}
              />
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Birthday: </TitleContactDetails>
              <ContactDetailsChanged
                type="text"
                name="birthday"
                value={editedData?.birthday}
                onChange={handleInputChange}
              />
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Email: </TitleContactDetails>
              <ContactDetailsChanged
                type="text"
                name="email"
                value={editedData?.email}
                onChange={handleInputChange}
              />
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Additional phone </TitleContactDetails>
              <ContactDetailsChanged
                type="text"
                value={data?.number}
                onChange={(e) => {}}
              />
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Company: </TitleContactDetails>
              <ContactDetailsChanged
                type="text"
                name="company"
                value={editedData?.company}
                onChange={handleInputChange}
              />
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Department: </TitleContactDetails>
              <ContactDetailsChanged
                type="text"
                name="department"
                value={editedData?.department}
                onChange={handleInputChange}
              />
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Position: </TitleContactDetails>
              <ContactDetailsChanged
                type="text"
                name="position"
                value={editedData?.position}
                onChange={handleInputChange}
              />
            </ContactDetailsItens>
          </>
        ) : (
          <>
            <ContactDetailsItens>
              <TitleContactDetails>Address: </TitleContactDetails>
              <ContactDetails>{data?.address}</ContactDetails>
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Birthday: </TitleContactDetails>
              <ContactDetails>{data?.birthday}</ContactDetails>
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Email: </TitleContactDetails>
              <ContactDetails>{data?.email}</ContactDetails>
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Additional phone </TitleContactDetails>
              <ContactDetails>{data?.number}</ContactDetails>
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Company: </TitleContactDetails>
              <ContactDetails>{data?.company}</ContactDetails>
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Department: </TitleContactDetails>
              <ContactDetails>{data?.department}</ContactDetails>
            </ContactDetailsItens>
            <ContactDetailsItens>
              <TitleContactDetails>Position: </TitleContactDetails>
              <ContactDetails>{data?.position}</ContactDetails>
            </ContactDetailsItens>
          </>
        ))}

      <Button onClick={isEditing ? closeChangeModalWithSave : openChangeModal}>
        {isEditing ? (
          <>
            <FcEditImage size="24" />
            Save changes
          </>
        ) : (
          <>
            <FcEditImage size="24" /> Change
          </>
        )}
      </Button>

      {!isEditing ? (
        !moreInfoOpen ? (
          <Button onClick={openDetails}>
            <FcViewDetails size="24" />
            Ditails
          </Button>
        ) : (
          <Button onClick={openDetails}>
            <FcViewDetails size="24" />
            Hide Ditails
          </Button>
        )
      ) : (
        <Button onClick={closeChangeModalWithoutSave}>
          <FcViewDetails size="24" />
          Leave Changes
        </Button>
      )}

      <Button onClick={() => handleDeleteContact(data?.id)}>
        <FcCancel size="24" />
        Delete
      </Button>
    </Modal>
  );
};
