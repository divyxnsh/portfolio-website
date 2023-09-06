import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Emoji = styled.span`
  font-weight: 800;
  font-size: 65px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const ProfileImageContainer = styled.div`
  width: 150px; /* Adjust the size as needed */
  height: 150px; /* Adjust the size as needed */
  border-radius: 50%; /* Makes it circular */
  overflow: hidden; /* Clips the image */

  img {
    width: 100%; /* Ensures the image fills the circular container */
    height: auto; /* Maintains the image's aspect ratio */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;
