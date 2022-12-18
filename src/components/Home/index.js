import Cotton from "../../Cotton.png";
import Cloth from "../../Cloth.png";
import { Button } from "@material-tailwind/react";
import Form from "../Form"

export default function Home() {
  return (
    <>
      <div className="bg-black w-screen h-96 mt-10 flex flex-col items-center justify-evenly">
        <img className="w-20 h-20 xl:w-48 xl:h-48" src={Cotton} alt="cotton" />
        <p className="text-white text-2xl md:text-3xl xl:text-4xl text-center px-2">
          It takes 2,700 liters of water to make the average cotton t-shirt{" "}
        </p>
        <p className="text-white text-2xl md:text-3xl xl:text-4xl text-center px-2">
          That’s enough drinking water for one person for 900 days{" "}
        </p>
      </div>
      <div className="w-screen h-96 mt-10 flex flex-col lg:flex-row items-center justify-around">
        <img className="w-20 h-20 xl:w-36 xl:h-36 mt-10" src={Cloth} alt="cloth" />
        <div className="text-xl md:text-2xl xl:text-2xl text-center">
          <p className="p-2">
            Global textiles production almost doubled between 2000 and 2015
          </p>
          <p className="p-2">
            About 5.8 million tonnes of textiles are discarded every year in the
            EU, approximately 11kg per person
          </p>
          <p className="p-2">
            Every second somewhere in the world a truckload of textiles is
            landfilled or incinerated
          </p>
          <Button className="my-10 bg-black text-base" onClick={() => window.gtag('event','see_detail')}>Detail</Button>
        </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar py-10">
        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/HpxYfVUaTH8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/eTHsMtcpg_Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/ZJJccLEGfHo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/tLfNUD0-8ts"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/zhfAsnONwdE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/T_LQBakvEgo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bg-blue-50 h-fit">
        <Form/>
      </div>

      {/* <div className="flex flex-wrap justify-around py-10">
        <InstagramEmbed
          url="https://www.instagram.com/p/CRV7Awarg1M/"
          captioned
          className="w-auto h-auto mr-10 mt-3"
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CMjUgx8raqC/"
          captioned
          className="w-auto h-auto mr-10 mt-3"
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CMrXRMmL2Es/"
          captioned
          className="w-auto h-auto mr-10 mt-3"
        />
      </div> */}
    </>
  );
}
