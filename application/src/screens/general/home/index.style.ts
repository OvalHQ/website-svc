"use client";

import styled from "styled-components";
import { Pane } from "evergreen-ui";
import Colors from "@/theme/Colors";

const HomePageScreenWrapper = styled(Pane)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2,
  p,
  span {
    font-family: Neue Haas Grotesk Display Pro !important;
  }

  .cta-primary {
    &:hover {
      opacity: 0.8;
      color: white;
      background: black;
    }
  }

  .hero {
    background: ${Colors.light.secondary};
    min-height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
    padding-bottom: 30px;
    padding-top: 50px;

    .hero-left {
      flex: 1;
      height: 100%;
      padding-top: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: self-start;
    }
    .hero-right {
      flex: 1;
    }

    @media (max-width: 1100px) {
      padding: 100px 2rem;
      padding-right: 0;

      .hero-left h2 {
        font-size: 40px;
        padding-right: 20px;
      }
    }

    @media (max-width: 960px) {
      flex-direction: column;
      padding: 20px 30px;
      padding-right: 0;

      .hero-left {
        width: 100%;
      }
      .hero-right {
        align-self: end;
        margin-top: -50px;
      }
    }
    @media (max-width: 500px) {
      padding-top: 70px;
      flex-direction: column;

      .hero-right {
        align-self: end;
        margin-top: -40px;
      }
    }
  }

  .unified-platform {
    position: relative;
    background: black;
    width: 100%;
    min-height: 100vh;
    padding-top: 170px;
    padding-bottom: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .grid-container {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      padding: 20px;
    }

    .grid-item {
      width: 100%;
      padding: 20px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .card {
      z-index: 5;
      width: 350px;
      padding: 50px 30px;
      border-radius: 16px;
      border: 3px solid;
      border-image: linear-gradient(
        133.84deg,
        rgb(255 255 255) 14.05%,
        rgb(255 255 255 / 0%) 115.45%
      );
      box-shadow: 0 4px 30px rgb(0 0 0 / 52%);
      -webkit-backdrop-filter: blur(5.3px);
      backdrop-filter: blur(5.3px);
      -webkit-backdrop-filter: blur(5.3px);
      background: linear-gradient(
          132.73deg,
          rgba(0, 0, 0, 0.9) 12.88%,
          rgba(0, 0, 0, 0) 163.96%
        ),
        linear-gradient(
          133.84deg,
          rgba(255, 255, 255, 0.25) 14.05%,
          rgba(255, 255, 255, 0) 115.45%
        );
      transition: all 0.3s linear;

      .rounded-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        border: 1px solid #414141;
        // border-image: linear-gradient(
        //   133.84deg,
        //   rgb(255 255 255) 14.05%,
        //   rgb(255 255 255 / 0%) 115.45%
        // );
      }

      &:hover {
        transition: all 0.3s linear;
        opacity: 0.6;
        background: linear-gradient(
            132.73deg,
            rgba(0, 0, 0, 0.9) 12.88%,
            rgba(0, 0, 0, 0) 163.96%
          ),
          linear-gradient(
            133.84deg,
            rgb(207 207 207 / 25%) 14.05%,
            rgb(255 255 255 / 21%) 115.45%
          );
      }
    }
    @media (max-width: 1200px) {
      .card {
        width: 300px;
      }
    }

    @media (max-width: 900px) {
      padding: 80px 2rem;
      .grid-container {
        grid-template-columns: 1fr;
      }
      .card {
        width: 350px;
      }
    }
  }

  .money-movement {
    position: relative;
    background: white;
    width: 100%;
    min-height: 70vh;
    padding: 120px 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 908px) {
      padding: 80px 2rem;
    }
  }

  .why-graph {
    position: relative;
    background: #d1f89880;
    width: 100%;
    min-height: 70vh;
    padding: 170px 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 908px) {
      padding: 80px 2rem;
    }
  }

  .startups-to-enterprise {
    background: white;
    width: 100%;
    padding: 200px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .grid-container {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 25px;
      column-gap: 45px;
      padding: 20px;
    }

    .grid-item {
      width: 100%;
      padding: 20px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    .startups-to-enterprise--card {
      position: relative;
      max-width: 400px;
    }

    @media (max-width: 908px) {
      padding: 80px 2rem;

      .grid-container {
        grid-template-columns: 1fr;
        padding: 0;
      }
    }
  }

  .simplify-operations {
    position: relative;
    background: white;
    width: 100%;
    min-height: 50vh;
    padding: 60px 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 908px) {
      padding: 80px 2rem;
    }
    @media (max-width: 400px) {
      padding: 40px 20px;
    }
  }

  .faqs {
    position: relative;
    background: white;
    width: 100%;
    min-height: 50vh;
    padding: 90px 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 908px) {
      padding: 80px 2rem;
    }
  }
`;

export default HomePageScreenWrapper;
