import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Qr from "../../qr.png";

export default function Products() {
  const data = [
    {
      label: "A Giyim",
      value: "aa",
      desc: (
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <p>Product A </p>
            <img className="mx-10 w-28 h-28" src={Qr} alt="qr" />
          </div>
          <div className="flex flex-row items-center">
            <p>Product B </p>
            <img className="mx-10 w-28 h-28" src={Qr} alt="qr"/>
          </div>
          <div className="flex flex-row items-center">
            <p>Product C </p>
            <img className="mx-10 w-28 h-28" src={Qr} alt="qr"/>
          </div>
        </div>
      ),
    },
    {
      label: "X Giyim",
      value: "xx",
      desc: (
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <p>Product X </p>
            <img className="mx-10 w-28 h-28" src={Qr} alt="qr"/>
          </div>
          <div className="flex flex-row items-center">
            <p>Product Y </p>
            <img className="mx-10 w-28 h-28" src={Qr} alt="qr"/>
          </div>
          <div className="flex flex-row items-center">
            <p>Product Z </p>
            <img className="mx-10 w-28 h-28" src={Qr} alt="qr"/>
          </div>
        </div>
      ),
    },

    {
      label: "Y Giyim",
      value: "yy",
      desc: (
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <p>Product K </p>
            <img className="mx-10 w-28 h-28" src={Qr} alt="qr"/>
          </div>
          <div className="flex flex-row items-center">
            <p>Product L </p>
            <img className="mx-10 w-28 h-28" src={Qr} alt="qr"/>
          </div>
          <div className="flex flex-row items-center">
            <p>Product M </p>
            <img className="mx-10 w-28 h-28" src={Qr} alt="qr"/>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Tabs className="max-w-xs m-auto my-10 " value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
