import React from "react";
import {
  Input,
  Radio,
  Checkbox,
  Textarea,
  Button,
} from "@material-tailwind/react";

export default function Form() {
  return (
    <div className="p-10 lg:m-auto lg:w-1/2">
      <p className="text-2xl font-bold pb-5">What do you think?</p>
      <form
        target="_blank"
        action="https://formsubmit.co/bettyss.erk@gmail.com"
        method="POST"
        className="flex flex-col"
      >
        <input type="hidden" name="_captcha" value="false"></input>
        <input
          type="hidden"
          name="_next"
          value="https://textile5.netlify.app/thank"
        ></input>
        <div className="flex flex-col py-2">
          <p>
            I often purchase second-hand goods over the internet or in a shop
          </p>
          <Radio id="yes" value="yes" name="second-hand" label="YES" />
          <Radio id="no" value="no" name="second-hand" label="NO" />
        </div>
        <div className="flex flex-col py-2">
          <p>
            I refrain buying from companies with a bad reputation for respecting
            employees and the environment
          </p>
          <Radio id="yes" value="yes" name="bad-reputation" label="YES" />
          <Radio id="no" value="no" name="bad-reputation" label="NO" />
        </div>

        <div className="flex flex-col py-2">
          <p>
            Considering style, comfort and quality are the same, I would pay
            more for sustainable clothing than I would normally pay
          </p>
          <Radio id="yes" value="yes" name="pay" label="YES" />
          <Radio id="no" value="no" name="pay" label="NO" />
        </div>

        <div className="flex flex-col py-2">
          <p>How to get rid of unnecessary clothes?</p>
          <Checkbox label="Throw away" value="throw away" name="dispose" />
          <Checkbox label="Donate" value="donate" name="dispose" />
          <Checkbox label="Sell" value="sell" name="dispose" />
        </div>

        <Textarea label="Any Comments" name="comments" className="py-2" />
        <Input
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          className="py-2"
        />
        <Button
          className="my-10 bg-black text-base"
          type="submit"
          onClick={() => window.gtag("event", "form-submit")}
        >
          Submit Form
        </Button>
      </form>
    </div>
  );
}
