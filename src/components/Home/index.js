import Background from "../../Background.jpg";
import { InstagramEmbed } from "react-social-media-embed";

export default function Home() {
  return (
    <>
      <div className="relative text-center">
        <img className="w-screen h-fit mt-5" src={Background} alt="qr" />
        <p className="absolute left-5 bottom-5 text-2xl xl:text-7xl text-gray-400">
          Sustainable product
        </p>
      </div>
      <div className="bg-amber-800 w-screen h-96">
        <div className="text-gray-200 m-auto w-1/2">
          <p className="py-20 text-2xl xl:text-4xl">OUR MISSION</p>
          <p className="text-lg xl:text-2xl">...</p>
        </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar py-10">
        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/7OjazCbl588"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/ZJJccLEGfHo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/zhfAsnONwdE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/T_LQBakvEgo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="bg-pink-900 h-96 w-screen"></div>

      <div className="flex flex-wrap justify-around p-10">
        <InstagramEmbed
          url="https://www.instagram.com/p/CRV7Awarg1M/"
          captioned
          className="w-auto h-full mr-10"
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CMjUgx8raqC/"
          captioned
          className="w-auto h-full mr-10"
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CMrXRMmL2Es/"
          captioned
          className="w-auto h-full mr-10"
        />
      </div>
    </>
  );
}
