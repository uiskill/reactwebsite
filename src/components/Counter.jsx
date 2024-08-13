import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endInt = parseInt(end, 10);
    const durationInt = parseInt(duration, 10);
    const increment = endInt / (durationInt * 1000 / 10); // Duration in milliseconds

    const timer = setInterval(() => {
      start += increment;
      if (start >= endInt) {
        clearInterval(timer);
        setCount(endInt);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <div>{count}</div>;
};

const CounterSection = () => {
  return (
    <div>
      <div className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="counter-container">
                <div className="counter-cell">
                  <Counter end="231" duration="3"  className="purecounter" />
                  <div className="counter-info">Happy Customers</div>
                </div>
                <div className="counter-cell">
                  <Counter end="385" duration="1.5"  className="purecounter" />
                  <div className="counter-info">Issues Solved</div>
                </div>
                <div className="counter-cell">
                  <Counter end="159" duration="3" className="purecounter" />
                  <div className="counter-info">Good Reviews</div>
                </div>
                <div className="counter-cell">
                  <Counter end="128" duration="3"  className="purecounter" />
                  <div className="counter-info">Case Studies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
