import React from "react";
import "./Work.css";
import demoImg from "../../assets/demo1.jpg";
import demo2 from "../../assets/demo2.jpg";
import demo3 from "../../assets/demo3.png";
import demo4 from "../../assets/demo4.png";
import Header from "../header/Header";
export default function Work() {
  return (
    <>
      <Header />
      <div className="mt-5">
        <div className="mt-5 middleSection">
          <div className="leftSideOfMiddleSection">
            <h1>
              CHOOSE. USE. <br />
              RECIRCULATE.
            </h1>
            <p>
              Get the tech you want whenever you need it. Simply, flexibly,
              sustainably.
            </p>
            <button>Get Started</button>
          </div>
          <div className="rightSideOfMiddleSection">
            <img src={demoImg} className="img-fluid w-75 ms-auto" alt="" />
          </div>
        </div>

        <div className="chooseSection">
          <div className="leftChooseSection">
            <img
              src={demo2}
              className="w-50"
              style={{ display: "inline-block" }}
              alt=""
            />
          </div>
          <div className="rightChooseSection">
            <h1 className="ms-4 mb-4  ">CHOOSE</h1>
            <ul>
              <li>Browse our website and find the tech you want.</li>
              <li>Select how many weeks you’d like to rent.</li>
              <li>
                Place an order and make your first payment. We’ll run quick
                security checks to make sure you’re you.
              </li>
            </ul>
          </div>
        </div>

        <div className="chooseSection">
          <div className="leftChooseSection">
            <img src={demo3} className="w-50" alt="" />
          </div>
          <div className="rightChooseSection">
            <h1 className="ms-4 mb-4">USE</h1>
            <ul>
              <li>
                The first month of rent is paid at checkout, then we’ll bill you
                monthly on the anniversary of when you received your product.
              </li>
              <li>In case of damage, we’ll cover some of the repair costs.</li>
              <li>
                Want to keep it longer? Continue week-to-week after your minimum
                rental period, switch to a longer plan to save money, or even
                buy your tech.
              </li>
            </ul>
          </div>
        </div>

        <div className="chooseSection">
          <div className="leftChooseSection">
            <img
              src={demo4}
              className="w-50"
              style={{ display: "inline-block" }}
              alt=""
            />
          </div>
          <div className="rightChooseSection">
            <h1 className="ms-4 mb-4">RECIRCULATE</h1>
            <ul>
              <li>
                When your minimum rental period is over, print your free return
                label, box up your product, and take it to a parcel shop.
              </li>
              <li>
                We’ll process and quality control the device at our Grover
                warehouse.
              </li>
              <li>
                It’s back online, as good as new and ready to be rented again.
              </li>
            </ul>
          </div>
        </div>

        <div className="describeSection">
          <div className="p-5">
            <h4>Wallet-friendly</h4>
            <p>
              With Grover, only pay for what you use. Rent tech for as long as
              you need and return it free of charge.
            </p>
          </div>
          <div className="p-5">
            <h4>Great condition</h4>
            <p>
              We thoroughly clean and refurbish our devices, so every product
              you rent will be new or as good as new, guaranteed.
            </p>
          </div>
          <div className="p-5">
            <h4>Worry-free</h4>
            <p>Relax knowing some % of repair or replacement coverage (Gaming Hub) is included in your rent.</p>
          </div>
        </div>
      </div>
    </>
  );
}
