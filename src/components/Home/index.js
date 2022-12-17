import Cotton from "../../Cotton.png";

export default function Home() {
  return (
    <>
      <div className="bg-black w-screen h-96 mt-10 flex flex-col items-center justify-evenly">
        <img className="w-20 h-20 xl:w-48 xl:h-48" src={Cotton} alt="qr" />
        <p className="text-white text-2xl md:text-3xl xl:text-4xl text-center px-2">
          It takes 2,700 liters of water to make the average cotton t-shirt.{" "}
        </p>
        <p className="text-white text-2xl md:text-3xl xl:text-4xl text-center px-2">
          That’s enough drinking water for one person for 900 days{" "}
        </p>
      </div>
      <div className="flex overflow-x-auto no-scrollbar py-10">
        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/HpxYfVUaTH8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-56 mr-5"
          src="https://www.youtube.com/embed/eTHsMtcpg_Q"
          title="YouTube video player"
          frameborder="0"
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
          frameborder="0"
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
      <div className="bg-blue-100 h-96 w-screen"></div>

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
