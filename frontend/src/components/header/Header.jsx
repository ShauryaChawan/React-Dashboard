import { useEffect, useState } from "react";
import "./header.scss";
import { FaRegCalendarAlt, FaDollarSign } from "react-icons/fa";
import { IoIosCloseCircleOutline, IoMdPeople } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";

const Toggle = ({ changeState, state }) => {
  return (
    <button
      className={`toggle-btn ${state ? "sales" : ""}`}
      onClick={changeState}
    >
      <div className="thumb"></div>
    </button>
  );
};

const Header = () => {
  const [isSales, setIsSales] = useState(false);
  const [displayCalendar, setDisplayCalendar] = useState("none");
  const [calValue, setCalValue] = useState("");

  const backImg = "/bkg-img-2.jpeg";
  const backImg2 = "/bkg-img.jpg";

  useEffect(() => {
    console.log("sales = " + isSales);
  }, [isSales, calValue]);

  useEffect(() => {
    const getCurrentMonthYear = () => {
      const now = new Date();
      const monthIndex = now.getMonth(); // 0-based index (0 = January)
      const year = now.getFullYear();

      const monthMapping = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      return `${monthMapping[monthIndex]} ${year}`;
    };

    setCalValue(getCurrentMonthYear());
  }, []);

  const handleMonthChange = (event) => {
    const selectedValue = event.target.value;

    const monthMapping = {
      "jan-24": "January 2024",
      "feb-24": "February 2024",
      "mar-24": "March 2024",
      "apr-24": "April 2024",
      "may-24": "May 2024",
      "jun-24": "June 2024",
      "jul-24": "July 2024",
      "aug-24": "August 2024",
      "jan-23": "January 2023",
      "feb-23": "February 2023",
      "mar-23": "March 2023",
      "apr-23": "April 2023",
      "may-23": "May 2023",
      "jun-23": "June 2023",
      "jul-23": "July 2023",
      "aug-23": "August 2023",
    };

    setCalValue(monthMapping[selectedValue] || "");
  };

  // Toggle calendar visibility
  const toggleCalendar = () => {
    setDisplayCalendar((prevDisplay) =>
      prevDisplay === "none" ? "block" : "none"
    );
  };

  return (
    <div className="header">
      <div
        className="back-img"
        style={{
          backgroundImage: `url(${isSales ? backImg : backImg2})`,
        }}
      ></div>
      <div className="top">
        <p className="left">Online Retail Sales Dashboard</p>
        <div className="right">
          <div className="r-left">
            <p className="text">Quantity</p>
            <Toggle
              state={isSales}
              changeState={() => setIsSales((prevIsSales) => !prevIsSales)}
            />
            <p className="text">Sales</p>
          </div>
          <div className="r-right">
            <p className="text">{calValue}</p>
            <div className="calander" style={{ display: displayCalendar }}>
              <select
                name="month"
                id="month"
                onChange={handleMonthChange}
                size="10"
              >
                <optgroup label="2024">
                  <option default value="jan-24">
                    January 2024
                  </option>
                  <option value="feb-24">February 2024</option>
                  <option value="mar-24">March 2024</option>
                  <option value="apr-24">April 2024</option>
                  <option value="may-24">May 2024</option>
                  <option value="jun-24">June 2024</option>
                  <option value="jul-24">July 2024</option>
                  <option value="aug-24">August 2024</option>
                </optgroup>
                <optgroup label="2023">
                  <option value="jan-23">January 2023</option>
                  <option value="feb-23">February 2023</option>
                  <option value="mar-23">March 2023</option>
                  <option value="apr-23">April 2023</option>
                  <option value="may-23">May 2023</option>
                  <option value="jun-23">June 2023</option>
                  <option value="jul-23">July 2023</option>
                  <option value="aug-23">August 2023</option>
                </optgroup>
              </select>
            </div>
            <div className="cla-toggle" onClick={toggleCalendar}>
              {displayCalendar === "none" ? (
                <FaRegCalendarAlt />
              ) : (
                <IoIosCloseCircleOutline />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <div className="icon">
            <IoMdPeople className="icon-size" />
          </div>
          <div className="content">
            <div className="text">Customers</div>
            <div className="numbers">1,012</div>
          </div>
        </div>
				<div className="customBorder"></div>
        <div className="item">
          <div className="icon">
            <GiShoppingBag className="icon-size" />
          </div>
          <div className="content">
            <div className="text">Products</div>
            <div className="numbers">2.2K</div>
          </div>
        </div>
				<div className="customBorder"></div>
        <div className="item">
          <div className="icon">
            <FaDollarSign className="icon-size" />
          </div>
          <div className="content">
            <div className="text">Sales</div>
            <div className="numbers">$ 573.2K</div>
          </div>
        </div>
				<div className="customBorder"></div>
        <div className="item">
          <div className="icon">
            <VscGraph  className="icon-size" />
          </div>
          <div className="content">
            <div className="text">Avg. Sales</div>
            <div className="numbers">$ 21.2K</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
