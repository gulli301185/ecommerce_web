import Banner from "../../assets/website/orange-pattern.jpg";

const Subscribe = () => {
  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
      data-aos="zoom-in"
    >
      {/* <div className="container py-10 backdrop-blur-sm"> */}
        <div className="mx-auto max-w-xl space-y-6 container py-10 backdrop-blur-sm">
          <h1 className="text-2xl sm:text-4xl font-semibold !text-center sm:text-left">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            className="w-full p-3"
            type="text"
            placeholder="enter your email"
          />
        </div>
      </div>
    // </div>
  );
};

export default Subscribe;
