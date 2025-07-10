import PropTypes from "prop-types";

const DIV = ({ className = "", dIV74, eCommercePlatform79 }) => {
  return (
    <section
      className={`h-[354px] w-[405px] rounded-2xl bg-[#111827] border-[#374151] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-px text-center text-xl text-[#fff] font-[Roboto] ${className}`}
    >
      <img
        className="w-[403.3px] h-[276px] overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={dIV74}
      />
      <div className="w-[403.3px] h-[76px] flex flex-col items-start justify-start p-6 box-border">
        <div className="w-[355.3px] h-7 flex flex-row items-center justify-center">
          <h3 className="m-0 relative text-[length:inherit] leading-7 font-semibold font-[inherit] mq450:text-base mq450:leading-[22px]">
            {eCommercePlatform79}
          </h3>
        </div>
      </div>
    </section>
  );
};

DIV.propTypes = {
  className: PropTypes.string,
  dIV74: PropTypes.string,
  eCommercePlatform79: PropTypes.string,
};

export default DIV;
