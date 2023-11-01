import styled from "styled-components";

const DownloadContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border-left: 3px #f26631 solid;
  border-bottom: 3px #f26631 solid;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Download = () => {
  return (
    <DownloadContainer className="download">
      <p>Download the PRIMA BARRE app, access classes from anywhere, anytime</p>
      <div className="download-icons">
        <img src="/app-store.png" alt="app-store" />
        <img src="/google-play.png" alt="google-play" />
      </div>
    </DownloadContainer>
  );
};
