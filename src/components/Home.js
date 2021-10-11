import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <a href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_176_mkw_s4mEHKPKZ-dc&mrntrk=pcrid_386629063613_slid__pgrid_82649959567_pgeo_1007768_x__ptid_kwd-339065342343">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_/jpg"
            alt=""
          />
        </a>
        {/*product id,title,proce,rating,image */}
        <Product
          id={12425466}
          title="Microsoft - Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller"
          price={499.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71XHuIVqJbL._AC_SX466_.jpg"
        />
        <Product
          id={12425466}
          title="HP Stream 14 inches HD(1366x768) Display, Intel Celeron N4000 Dual-Core Processor"
          price={949.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81RCOr3hJOL._AC_SL1500_.jpg"
        />
        {/*product */}
      </div>
    </>
  );
}

export default Home;
