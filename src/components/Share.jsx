import PropTypes from "prop-types";
import { ReactComponent as ShareSvg } from "../assets/icons/share.svg";

export default function Share({ disabled }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <button
      className={
        disabled
          ? "shareContainer relative opacity-50"
          : "shareContainer relative"
      }
      disabled={disabled}
    >
      <div
        className={disabled ? "shareIconCirle shareDisabled" : "shareIconCirle"}
        tabIndex="1"
        onClick={disabled && handleCopy}
      >
        <ShareSvg className="shareIcon" />
      </div>

      {!disabled ? (
        <div id="tooltip" className="left">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-label">Share Link</div>
        </div>
      ) : null}
    </button>
  );
}

Share.defaultProps = {
  disabled: false,
};
Share.propTypes = {
  disabled: PropTypes.bool,
};
