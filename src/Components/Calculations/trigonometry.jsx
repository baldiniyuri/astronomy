import { useState } from "react";
import { Button, InputNumber } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../Style/trigonometry.css";

const Trigonometry = () => {
  const [trigonometryResults, setTrigonometryResultes] = useState(0);
  const [displayResults, setDisplayResults] = useState(false);

  const SphericalTrigonometry = () => {
    // Angles of the spherical triangle
    const A = document.getElementById("angleA").value;
    const B = document.getElementById("angleB").value;
    const C = document.getElementById("angleC").value;
    // Angles of the opposite spherical triangle
    const a = document.getElementById("anglea").value;
    const b = document.getElementById("angleb").value;
    const c = document.getElementById("anglec").value;
    const x = document.getElementById("xvector").value;
    const y = document.getElementById("yvector").value;
    const S = x - y * Math.PI;

    const results =
      Math.sin(a / 2) &&
      Math.cos(B) - C / 2 &&
      Math.sin(A / 2) &&
      Math.sin(b) + c / 2 &&
      Math.sin(a / 2) &&
      Math.sin(B) - C / 2 &&
      Math.cos(A / 2) &&
      Math.sin(b) - c / 2 &&
      Math.cos(a / 2) &&
      Math.cos(B) + C / 2 &&
      Math.sin(A / 2) &&
      Math.cos(b) + c / 2 &&
      Math.cos(a / 2) &&
      Math.sin(B) + C / 2 &&
      Math.cos(A / 2) &&
      Math.cos(b) - c / 2 &&
      Math.sin(A / 2) &&
      Math.sqrt(
        Math.sin(8 - b) && Math.sin(8 - c) / Math.sin(b) && Math.sin(c)
      ) &&
      Math.cos(A / 2) &&
      Math.sqrt(
        Math.sin(8) &&
          Math.sin(8 - a) / Math.sin(b) &&
          Math.sin(c) &&
          8 &&
          a + b + c / 2
      ) &&
      Math.sin(a / 2) &&
      Math.sqrt(-Math.cos(S) && Math.cos(S - A) / Math.sin(B) && Math.sin(C)) &&
      Math.cos(a / 2) &&
      Math.sqrt(
        Math.cos(S - B) && Math.cos(S - C) / Math.sin(B) && Math.sin(C)
      ) &&
      S &&
      A + B + C / 2;
    setTrigonometryResultes(results);
    setDisplayResults(true);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div>
          <Button>
            <Link to="/calculations">Back to calculations</Link>
          </Button>
          <div>Spherical Triangle calculator</div>

          <div>
            X vector:
            <InputNumber id="xvector" placeholder="X Vector"></InputNumber>
            <InputNumber id="yvector" placeholder="Y Vector"></InputNumber>:Y
            vector
          </div>
          <div className="trigonometry"></div>

          <div>
            Angle a:
            <InputNumber id="anglea" placeholder="Angle a"></InputNumber>
            <InputNumber id="angleA" placeholder="Angle A"></InputNumber>
            Opposite angle A
          </div>
          <div>
            Angle b:
            <InputNumber id="angleb" placeholder="Angle b"></InputNumber>
            <InputNumber id="angleB" placeholder="Angle B"></InputNumber>{" "}
            Opposite angle B
          </div>
          <div>
            Angle c:
            <InputNumber id="anglec" placeholder="Angle c"></InputNumber>
            <InputNumber id="angleC" placeholder="Angle C"></InputNumber>{" "}
            Opposite angle C
          </div>

          <div>
            <Button onClick={SphericalTrigonometry}>Calculate</Button>
          </div>
          {displayResults ? <div>Results: {trigonometryResults}</div> : null}
        </div>
      </motion.div>
    </div>
  );
};

export default Trigonometry;
