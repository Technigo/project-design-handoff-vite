import "../components/component.css";

export const Profile = ({ url }) => {
  return (
    <>
      <img src={url} alt="profile" className="circle" />
    </>
  );
};
