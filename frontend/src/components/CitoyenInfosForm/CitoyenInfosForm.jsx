import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Message,
  Dropdown,
  Flag,
} from "semantic-ui-react";

import axios from "axios";

import "./CitoyenInfosForm.css";
import ValidationDataUpdateProfile from "../../methods/ValidateDataUpdateProfile.js";

//? redux stuff
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { change_mode } from "../../actions/darkAction";
import { change_language } from "../../actions/languageAction";
import { languages } from "../../language";

const InfosForm = (props) => {
  const { cit_infos, loading, isFrench } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isEditing, setEditing] = useState(true);
  const [error, seterror] = useState(null);
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [birthday, setbirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setaddress] = useState("");
  const [email, setEmail] = useState("");
  const [national_id, setnational_id] = useState("");
  const [errorMessage, seterrorMessage] = useState(null);
  const [language, setLanguage] = useState(props.isFrench);

  useEffect(() => {
    //change_language(languages.french);
    setfirst_name(cit_infos.first_name);
    setlast_name(cit_infos.last_name);
    setbirthday(cit_infos.date_of_birth);
    setaddress(cit_infos.address);
    setnational_id(cit_infos.national_id);
    setPhone(cit_infos.phone);
    setEmail(cit_infos.email);
  }, [cit_infos]);
  //? function for changing data in inputs
  const handleChangeInput = (e) => {
    if (error) seterror(false);

    let id = e.currentTarget.id;
    switch (id) {
      case "first_name":
        setfirst_name(e.currentTarget.value);
        break;
      case "last_name":
        setlast_name(e.currentTarget.value);
        break;
      case "email":
        setEmail(e.currentTarget.value);
        break;
      case "birthday":
        setbirthday(e.currentTarget.value);
        break;
      case "phone":
        setPhone(e.currentTarget.value);
        break;
      case "address":
        setaddress(e.currentTarget.value);
        break;
      case "national_id":
        setnational_id(e.currentTarget.value);
        break;
      default:
        break;
    }
  };
  const handleSumbit = () => {
    if (error) seterror(null);
    if (success) setSuccess(null);
    if (errorMessage) seterrorMessage(null);

    const errors = ValidationDataUpdateProfile({
      first_name,
      last_name,
      email,
      birthday,
      address,
      phone,
      national_id,
    });
    if (errors.length > 0) {
      seterror(true);
      seterrorMessage(isFrench ? errors[0].error : errors[0].errorAr);
    } else {
      UpdateInfosCitoyen();
    }
  };
  const UpdateInfosCitoyen = () => {
    setIsLoading(true);
    if (language) {
      props.change_language(languages.french);
    } else {
      props.change_language(languages.arabe);
    }
    axios
      .create({
        headers: {
          patch: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        },
      })
      .request({
        url: "https://madina-tic.ml/api/user/",
        method: "patch",
        data: {
          email: email,
          first_name: first_name,
          last_name: last_name,
          phone: phone,
          date_of_birth: birthday,
          address: address,
          national_id: national_id,
          is_french: language,
        },
      })
      .then((res) => {
        setSuccess(true);
        setIsLoading(false);
        handelEditClick();
        props.refresh();
      })
      .catch((err) => {
        seterror(true);
        seterrorMessage("Something went wrong during your request.");
        setIsLoading(false);
      });
  };
  const handelEditClick = () => {
    if (email !== cit_infos.email) setEmail(cit_infos.email);
    if (first_name !== cit_infos.first_name)
      setfirst_name(cit_infos.first_name);
    if (last_name !== cit_infos.last_name) setlast_name(cit_infos.last_name);
    if (national_id !== cit_infos.national_id)
      setnational_id(cit_infos.national_id);
    if (birthday !== cit_infos.date_of_birth)
      setbirthday(cit_infos.date_of_birth);
    if (address !== cit_infos.address) setaddress(cit_infos.address);
    if (phone !== cit_infos.phone) setPhone(cit_infos.phone);
    if (error) seterror(false);
    setEditing((prevState) => !prevState);
  };
  return (
    <Form
      loading={loading}
      success={success}
      error={error}
      id="iform"
      className="_margin_vertical_lg"
    >
      <Form.Group widths="equal">
        <Form.Field required={!isEditing} disabled={isEditing}>
          <label>{isFrench ? "Pr??nom" : "??????????"}</label>
          <Input
            fluid
            id="first_name"
            value={first_name}
            onChange={handleChangeInput}
            placeholder={isFrench ? "Pr??nom" : "??????????"}
          />
        </Form.Field>
        <Form.Field required={!isEditing} disabled={isEditing}>
          <label>{isFrench ? "Nom" : "??????????"}</label>
          <Input
            fluid
            id="last_name"
            value={last_name}
            onChange={handleChangeInput}
            placeholder={isFrench ? "Nom" : "??????????"}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field required={!isEditing} disabled={isEditing}>
          <label>{isFrench ? "Email" : "???????????? ????????????????????"}</label>
          <Input
            fluid
            id="email"
            value={email}
            placeholder={isFrench ? "Email" : "???????????? ????????????????????"}
          />
        </Form.Field>
        <Form.Field required={!isEditing} disabled={isEditing}>
          <label> {!isFrench ? "?????? ??????????????" : "Date de naissance"}</label>
          <Input
            fluid
            id="birthday"
            type="date"
            value={birthday}
            onChange={handleChangeInput}
            placeholder={!isFrench ? "?????? ??????????????" : "Date de naissance"}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field required={!isEditing} disabled={isEditing}>
          <label>{isFrench ? "Num??ro de t??l??phone" : "?????? ????????????"}</label>
          <Input
            fluid
            id="phone"
            value={phone}
            onChange={handleChangeInput}
            placeholder={isFrench ? "Num??ro de t??l??phone" : "?????? ????????????"}
          />
        </Form.Field>
        <Form.Field required={!isEditing} disabled={isEditing}>
          <label>{isFrench ? "Address" : "??????????"}</label>
          <Input
            fluid
            id="address"
            value={address}
            onChange={handleChangeInput}
            placeholder={isFrench ? "Address" : "??????????"}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group>
        <Form.Field required={!isEditing} disabled={isEditing}>
          <label>
            {" "}
            {props.isFrench ? "carte d'identit??" : "???????????? ??????????????"}
          </label>
          <Input
            fluid
            id="national_id"
            value={national_id}
            onChange={handleChangeInput}
            placeholder={props.isFrench ? "carte d'identit??" : "???????????? ??????????????"}
          />
        </Form.Field>
        <Dropdown
          disabled={isEditing}
          trigger={
            <Form.Input
              value={
                !language
                  ? !props.isFrench
                    ? "??????????"
                    : "Arabe"
                  : !props.isFrench
                  ? "????????????"
                  : "Fran??ais"
              }
              label={isFrench ? "langue" : "??????"}
            />
          }
          icon={null}
        >
          <Dropdown.Menu
            style={{
              width: "180px",
            }}
            className={
              props.isFrench ? "_language_field _ltr" : "_language_field _rtl"
            }
          >
            <Dropdown.Item
              onClick={() => {
                setLanguage(false);
              }}
              style={{
                "border-bottom": "1px solid var(--secondary_text_dark)",
              }}
            >
              <div className="_language">
                <Flag name="dz" />
                <p>{props.isFrench ? "Arabe" : "??????????"}</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setLanguage(true);
              }}
            >
              <div className="_language">
                <Flag name="fr" />
                <p>{props.isFrench ? "Fran??ais" : "????????????"}</p>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      {!isEditing && (
        <div className="_margin_vertical_md subs">
          <Button
            className="button_secondary"
            disabled={isLoading}
            onClick={handelEditClick}
          >
            {isFrench ? "Annuler" : "??????????"}
          </Button>
          <Button
            type="submit"
            onClick={handleSumbit}
            loading={isLoading}
            className="button_primary"
          >
            {isFrench ? "Confirmer" : "??????"}
          </Button>
        </div>
      )}
      {isEditing && (
        <div className="subs">
          <Button onClick={handelEditClick} className="button_primary">
            {isFrench ? "??diter" : "??????????"}
          </Button>
        </div>
      )}
      <Message error content={errorMessage} />
      <Message
        success
        content={
          isFrench
            ? "Votre demande de mise ?? jour des informations a ??t?? envoy??e avec succ??s"
            : "???? ?????????? ?????? ?????????? ???????????????? ??????????"
        }
      />
    </Form>
  );
};

InfosForm.propTypes = {
  isDark: PropTypes.bool.isRequired,
  change_mode: PropTypes.func.isRequired,
  language: PropTypes.object.isRequired,
  change_language: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDark: state.mode.isDark,
  language: state.language,
});

export default connect(mapStateToProps, { change_mode, change_language })(
  InfosForm
);
