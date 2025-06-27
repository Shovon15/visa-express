import ContactForm from "./ContactForm";
import contactImg from "../../../assets/image/contact-us.jpg"; // Update with your image path
import { Typography } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className=" p-5 md:p-10">
      <p className="text-2xl font-bold flex justify-center items-center gap-2 pb-2 text-textPrimary">
        Contact Us
      </p>
      <Typography variant="lead" className="text-center md:pb-10">
        We&apos;d love to hear from you. Fill out the form and our team will get
        back to you shortly.
      </Typography>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2  justify-center items-center hidden md:flex">
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
