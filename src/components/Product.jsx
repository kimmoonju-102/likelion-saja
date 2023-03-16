import React from "react";
import styled from "styled-components";
import test from "@/assets/test.jpg";
import {Link} from "react-router-dom";

export function Product() {
  return (
    <StyledProductContainer>
      <Link to="/">
        <img src={test} alt="상품 이미지"></img>
      </Link>
      <span className="title">버버리가방</span>
      <span className="price">20,000원</span>
      <span className="location">부산 북구 만덕제2동</span>
      <span className="interest">관심 34</span>
    </StyledProductContainer>
  );
}

const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 212px;
  height: 320px;

  & img {
    border-radius: 12px;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
    display: block;
    width: 100%;
    height: 212px;
    object-fit: cover;
  }

  & .title {
    font-style: normal;
    margin-top: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #212529;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  & .price {
    display: block;
    font-style: normal;
    color: #212529;
    margin-top: 3px;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
  }

  & .location {
    display: block;
    font-style: normal;
    color: #212529;
    margin-top: 3px;
    font-size: 13px;
    line-height: 20px;
  }

  & .interest {
    display: block;
    font-style: normal;
    margin-top: 3px;
    font-size: 12px;
    line-height: 14px;
    color: #868e96;
  }
`;
