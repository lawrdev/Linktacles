import PropTypes from "prop-types";
import { ReactComponent as ShareSvg } from "../assets/icons/share.svg";
import { ReactComponent as MoreSvg } from "../assets/icons/more.svg";

export default function ProfileIcon({ disabled }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <button
      className={
        disabled
          ? "iconContainer relative opacity-50"
          : "iconContainer relative"
      }
      disabled={disabled}
      id="focusItem"
    >
      <div className={disabled ? "iconCirle iconDisabled" : "iconCirle"}>
        <span className="hidden sm:block" onClick={disabled && handleCopy}>
          <ShareSvg className="icon" />
        </span>
        <span className="block sm:hidden">
          <MoreSvg className="icon" />
        </span>
      </div>

      {!disabled ? (
        <div id="tooltip" className="left !hidden sm:!block">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-label">Share Link</div>
        </div>
      ) : null}
    </button>
  );
}

ProfileIcon.defaultProps = {
  disabled: false,
};
ProfileIcon.propTypes = {
  disabled: PropTypes.bool,
};
