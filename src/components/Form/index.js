import React, { useState } from "react";
import { Radio, Textarea, Button } from "@material-tailwind/react";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    window.gtag("event", "form_submit");
    fetch(process.env.REACT_APP_FORM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      setStatus(
        response.status === 200
          ? "The form was submitted successfully"
          : "Something went wrong"
      );
    });
  };

  return (
    <div className="p-10 lg:m-auto lg:w-1/2" id="form">
      {!!status ? (
        <p className="text-center text-4xl my-44">{status}</p>
      ) : (
        <>
          <p className="text-2xl font-bold pb-5">What do you think?</p>
          <form target="_blank" className="flex flex-col">
            <input type="hidden" name="_captcha" value="false"></input>
            <div className="flex flex-col py-2">
              <p>
                I feel responsibility about environmental issues and try to do
                as much as I can
              </p>
              <Radio
                id="yes"
                value="yes"
                name="responsibility"
                label="YES"
                onChange={(e) => handleInputChange(e, "yes")}
              />
              <Radio
                id="no"
                value="no"
                name="responsibility"
                label="NO"
                onChange={(e) => handleInputChange(e, "no")}
              />
            </div>
            <div className="flex flex-col py-2">
              <p>I think fast fashion impacts our planet and its people</p>
              <Radio
                id="yes"
                value="yes"
                name="impacts"
                label="YES"
                onChange={(e) => handleInputChange(e, "yes")}
              />
              <Radio
                id="no"
                value="no"
                name="impacts"
                label="NO"
                onChange={(e) => handleInputChange(e, "no")}
              />
            </div>
            <div className="flex flex-col py-2">
              <p>
                I often purchase second-hand goods over the internet or in a
                shop
              </p>
              <Radio
                id="yes"
                value="yes"
                name="second_hand"
                label="YES"
                onChange={(e) => handleInputChange(e, "yes")}
              />
              <Radio
                id="no"
                value="no"
                name="second_hand"
                label="NO"
                onChange={(e) => handleInputChange(e, "no")}
              />
            </div>
            <div className="flex flex-col py-2">
              <p>
                I refrain buying from companies with a bad reputation for
                respecting employees and the environment
              </p>
              <Radio
                id="yes"
                value="yes"
                name="bad_reputation"
                label="YES"
                onChange={(e) => handleInputChange(e, "yes")}
              />
              <Radio
                id="no"
                value="no"
                name="bad_reputation"
                label="NO"
                onChange={(e) => handleInputChange(e, "no")}
              />
            </div>

            <div className="flex flex-col py-2">
              <p>
                Considering style, comfort and quality are the same, I would pay
                more for sustainable clothing than I would normally pay
              </p>
              <Radio
                id="yes"
                value="yes"
                name="pay"
                label="YES"
                onChange={(e) => handleInputChange(e, "yes")}
              />
              <Radio
                id="no"
                value="no"
                name="pay"
                label="NO"
                onChange={(e) => handleInputChange(e, "no")}
              />
            </div>

            <Textarea
              label="Any Comments"
              name="comments"
              className="py-2"
              onChange={(e) => handleInputChange(e)}
            />
            <Button
              className="my-10 bg-black text-base"
              type="button"
              onClick={() => handleSubmit()}
            >
              Submit Form
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
