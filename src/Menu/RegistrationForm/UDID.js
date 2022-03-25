import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const UDID = () => {
  const host = "http://localhost:3300/api";
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("udid_url", file);
    const url = `${host}/registration/upload/udid`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
      body: data,
    });
    const json = await response.json();
    if (response.status === 200) {
      //Redirect
      navigate("/register/registrationform/aadharcardupload");
    }
    // await updateProfilePic(data);
    // showAlert("Updated Profile Picture Successfully", "success");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container mb-3">
          <label htmlFor="formFileSm" class="form-label">
            Upload UDID Card
          </label>
          <input
            class="form-control form-control-sm"
            id="formFileSm"
            type="file"
            name="udid_url"
            onChange={handleFileChange}
          />
        </div>
        <br></br>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="submit">
            Upload
          </button>
        </div>
      </form>
    </>
  );
};
export default UDID;
