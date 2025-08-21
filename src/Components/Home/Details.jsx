
import Google from "./Modals/Google";
import SocialMedia from "./Modals/SocialMedia";
import SearchEngine from "./Modals/SearchEngine";
import WebDesign from "./Modals/WebDesign";
import WebDev from "./Modals/WebDev";
import Custom from "./Modals/Custom";

function Details() {
 
 

  


  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row w-full bg-gray-50 max-w-[1250px]">
          <div className="w-full lg:w-1/2">
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-[30px] py-2 font-semibold">
                A full-service digital marketing agency and web production company
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                CCM is a full-service digital marketing agency that can run
                multi-channel campaigns to reach your audience at every touch
                point. However, if you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.
              </p>
              <button className="border border-red-400 text-red-400 px-4 py-2 rounded-2xl mt-2 hover:bg-orange-400 hover:text-white font-medium">
                Buy Discovery
              </button>
            </div>
          </div>


          <div className="w-full lg:w-1/2 mb-10 lg:mb-20">
            <div className="bg-black py-8 md:py-10">
              <Google/>
              <SocialMedia/>
              <SearchEngine/>
              <WebDesign/>
              <WebDev/>
              <Custom/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
