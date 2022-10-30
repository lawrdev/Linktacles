import profile__img from "../assets/img/profile__img.png";
import { ReactComponent as CameraSvg } from "../assets/icons/camera-01.svg";
import ProfileIcon from "./ProfileIcon";

export default function Profile() {
  return (
    <>
      <div className="mb-9 sm:mb-14 relative text-gray-900 max-w-3xl mx-auto">
        <div
          id="profileImgWrapper"
          style={{ width: "88px", height: "88px" }}
          tabIndex="0"
        >
          <div>
            <img
              id="profile__img"
              alt="profile"
              src={profile__img}
              width="88px"
              height="88px"
            />
          </div>

          <div className="uploadWrapper">
            <div className="py-1.5 relative active:scale-90 hover:scale-105 origin-center cursor-pointer">
              <input
                accept="image/*"
                id="upload"
                type="file"
                style={{ display: "none" }}
              />
              <label htmlFor="upload">
                <CameraSvg className="cursor-pointer" />
              </label>
            </div>
          </div>
        </div>

        <div className="text-center text">
          <p id="twitter">lawrdev</p>
          <p id="slack" className="hidden">
            lawrdev
          </p>
        </div>

        <div className="absolute top-0 right-0 -translate-y-1/2">
          <ProfileIcon />
        </div>
      </div>
    </>
  );
}
