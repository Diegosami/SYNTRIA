'use client';
import React from 'react';
import styled from 'styled-components';

interface SocialCardProps {
  socialLinks?: {
    instagram?: string;
    whatsapp?: string;
  };
}

const SocialCard: React.FC<SocialCardProps> = ({
  socialLinks = {
    instagram: 'https://instagram.com/syntria.group',
    whatsapp: 'https://wa.me/573001234567'
  }
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="background"></div>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="logo-svg">
            <text x="50" y="65" textAnchor="middle" fontSize="50" fontWeight="bold" fill="white">S</text>
          </svg>
        </div>
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="box box1">
            <span className="icon">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
              </svg>
            </span>
          </a>
        )}
        {socialLinks.whatsapp && (
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="box box2">
            <span className="icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
          </a>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 200px;
    background: #1a1a1a;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(85, 255, 75, 0.15) 0px 7px 29px 0px;
    transition: all 1s ease-in-out;
  }

  .background {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 100% 107%, #55FF4B 0%, #2dd425 30%, #1a8c14 60%, #0d4a0a 100%);
  }

  .logo {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    transition: all 0.6s ease-in-out;
  }

  .logo .logo-svg {
    fill: white;
    width: 50px;
    height: 50px;
  }

  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  .icon .svg {
    fill: rgba(255, 255, 255, 0.797);
    width: 100%;
    transition: all 0.5s ease-in-out;
  }

  .box {
    position: absolute;
    padding: 10px;
    text-align: right;
    background: rgba(255, 255, 255, 0.2);
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10% 13% 42% 0%/10% 12% 75% 0%;
    box-shadow: rgba(85, 255, 75, 0.2) -7px 7px 29px 0px;
    transform-origin: bottom left;
    transition: all 1s ease-in-out;
    cursor: pointer;
    text-decoration: none;
  }

  .box::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .box:hover .svg {
    fill: white;
  }

  .box1 {
    width: 70%;
    height: 70%;
    bottom: -70%;
    left: -70%;
  }

  .box1::before {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  }

  .box1:hover::before {
    opacity: 1;
  }

  .box1:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }

  .box2 {
    width: 45%;
    height: 45%;
    bottom: -45%;
    left: -45%;
    transition-delay: 0.2s;
  }

  .box2::before {
    background: #25D366;
  }

  .box2:hover::before {
    opacity: 1;
  }

  .box2:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: rgba(85, 255, 75, 0.3) 0px 15px 40px 0px;
  }

  .card:hover .box {
    bottom: -1px;
    left: -1px;
  }

  .card:hover .logo {
    transform: translate(0, 0);
    bottom: 15px;
    right: 15px;
  }
`;

export default SocialCard;
