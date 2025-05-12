import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-blue-400 h-40 w-screen flex justify-center gap-10 pt-5">
        <div className="bg-amber-300 ml-15 ">Logo</div>
        <div>
          <h3 className="text-2xl">Belgrade marathon</h3>
          <p>Activity and code: Other sports activities -9319</p>
          <p>Identification number: 06303773</p>
        </div>
        <div>
          <h3 className="text-2xl">Contact</h3>
          <p>dr. Ive Popovića Đanija 3a, 11000 Beograd</p>
          <p>011/ 3690-709; 011/3690-729</p>
          <p>office@bgdmarathon.org</p>
        </div>
        <div>
          <h3 className="text-2xl">Follow us on social networks</h3>
          <p>Social links</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
