import { gsap } from "gsap";
import { useState } from "react";

function FAQ() {
  const [isOpen, setIsOpen] = useState(null);

  const faqs = [
    {
      q: "What is a Zerodha account?",
      a: "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
    },
    {
      q: "What documents are required to open a demat account?",
      a: "You require: PAN Card , Aadhaar Card (Linked with a phone number for OTP verification), Cancelled cheque or bank account statement (To link your bank account) , Income proof (Required only if you wish to trade in Futures & options)",
    },
    {
      q: "Is Zerodha account opening free?",
      a: "Yes, It is completely free.",
    },
  ];

  const toggleDropdown = (index) => {
    if (isOpen === index) {
      gsap.to(`.faq-dropdown-${index}`, {
        opacity: 0,
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to(`.icon-${index}`, {
        rotate: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
      setIsOpen(null);
    } else {
      gsap.to(`.faq-dropdown-${index}`, {
        opacity: 1,
        height: "auto",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to(`.icon-${index}`, {
        rotate: 180,
        duration: 0.3,
        ease: "power2.inOut",
      });
     setIsOpen(index);
    }
     
      
  };

  return (
    <>
      <div className="container p-5">
        <div className="row text-start pb-5">
          <h3>FAQs</h3>
        </div>
        {faqs.map((faq,index) => {
          return (
            <>
              <div
                className="faq d-flex justify-content-between align-items-center"
                style={{ height: "3.5rem" , cursor:"pointer"}}
                onClick={()=>toggleDropdown(index)}
              >
                <p className="fs-5 p-2">{faq.q}</p>
                <span className="p-2">
                  <i
                    class={`fa-solid fa-down-long mr-5 icon-${index}`}
                    style={{ scale: "0.8" }}
                  ></i>
                </span>
              </div>
              <div className={`faq-dropdown-${index} d-flex justify-content-between align-items-center faq-dropdown`}>
                <p className="fs-5 p-2">
                  {faq.a}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default FAQ;
