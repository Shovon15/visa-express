/* eslint-disable react/prop-types */
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "", // Clear error on change
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    // if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    // if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit logic here (e.g., API call)
    console.log("Submitted:", formData);
    toast.success("Form submitted successfully!");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="pt-10">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
        <div className="mb-5 !max-w-[400px] mx-auto">
          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="text-base "
            crossOrigin=""
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}

          <div className="text-center md:text-start">
            <Button
              type="submit"
              variant="outlined"
              className=" font-bold capitalize outline-none py-2 gap-3 px-2 hover:bg-transparent  w-44 text-primary text-xl border-b-4 border-r-4 border-primary mt-5 ring-0 focus:ring-0 hover:border-t-primary hover:border-l-primary hover:border-b-black hover:border-r-black hover:bg-primary active:bg-primary/80 hover:text-white"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

const TextField = ({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
}) => {
  return (
    <div className="mb-5  !max-w-[400px] mx-auto">
      <Input
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="text-base"
        crossOrigin=""
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
