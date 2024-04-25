import styled from 'styled-components'
import bannerPhone from '/src/assets/banners/BannerPhone.png'
import bannerTablet from '/src/assets/banners/BannerTablet.png'
import bannerDesktop from '/src/assets/banners/BannerDesktop.png'


export const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: span 4;
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
    

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-column: span 8;
    margin-left: -32px;
    margin-right: -32px;
    margin-top: -70px;
  }

  @media (min-width: 1494px) {
    grid-column: span 12;
    margin-left: -128px;
    margin-right: -128px;
  }
`

export const Banner = styled.div`
  background-image: url(${bannerPhone});
  background-size: contain;
  background-repeat: repeat-x;
  background-position: bottom;
  grid-column: span 4;
  margin-left: -16px;
  margin-right: -16px;
  padding-bottom: 40px;
  padding-top: 20px;
  margin-top: 80px;


  @media (min-width: 744px) and (max-width: 1493px) {
    background-image: url(${bannerTablet});
    grid-column: span 8;
    padding-bottom: 70px;
    margin-top: 128px;
  }

  @media (min-width: 1494px) {
    background-image: url(${bannerDesktop});
    grid-column: span 12;
    padding-bottom: 50px;
    padding-top: 30px;
    margin-top: 160px;
  }
`

export const BannerContainer = styled.div`
  background-color: black; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: span 4;
  height: 280px;
  gap: 16px;
  margin-left: -16px;
  margin-right: -16px;
 

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-column: span 8;
    height: 400px;
  }

  @media (min-width: 1494px) {
    grid-column: span 12;
    height: 480px;

  }
`

export const TitleText = styled.h2`
    color: white;
    text-align: center;
`

export const SubText = styled.h3`
    color: white;
    text-align: center;
    font-size: 16px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 20px;
    
  @media (min-width: 744px) and (max-width: 1493px) {
   font-size: 22px;
   margin-left: 32px;
   margin-right: 32px;
   margin-bottom: 30px;
  }

  @media (min-width: 1494px) {
    font-size: 24px;
    margin-left: 128px;
    margin-right: 128px;
    margin-bottom: 40px;
  }
`

export const Email = styled.input`
    border-radius: 20px;
    padding: 8px 30px;
    width: 50%;
    text-align: center;
    font-size: 10px;
    font-family: Montserrat;
        
  @media (min-width: 744px) and (max-width: 1493px) {
   font-size: 15px;
   width: 35%;
  }

  @media (min-width: 1494px) {
    font-size: 18px;
    width: 20%;
  }
`


export const BannerInvert = styled.div`
  background-image: url(${bannerPhone});
  background-size: contain;
  background-repeat: repeat-x;
  background-position: bottom;
  grid-column: span 4;
  margin-left: -16px;
  margin-right: -16px;
  padding-bottom: 40px;
  margin-bottom: 80px;
  padding-top: 20px;
  -webkit-transform:scaleY(-1);
  -moz-transform:scaleY(-1);
  -ms-transform:scaleY(-1);
  -o-transform:scaleY(-1);
  transform:scaleY(-1);
  

  @media (min-width: 744px) and (max-width: 1493px) {
    background-image: url(${bannerTablet});
    grid-column: span 8;
    padding-bottom: 70px;
    margin-bottom: 128px;
    
  }

  @media (min-width: 1494px) {
    background-image: url(${bannerDesktop});
    grid-column: span 12;
    padding-bottom: 50px;
    padding-top: 30px;
    margin-bottom: 160px;
   
  }
`



