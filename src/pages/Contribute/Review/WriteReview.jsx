import {
  Button,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Radio,
  Rating,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";

import pointingUp from "../../../assets/icon/tap.png";
import { BsFillEmojiAngryFill } from "react-icons/bs";
import { BsEmojiFrownFill } from "react-icons/bs";
import { BsEmojiNeutralFill } from "react-icons/bs";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BsEmojiSunglassesFill } from "react-icons/bs";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./writeReview.css";

const WriteReview = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    // isLoading,
  } = useForm();

  const [openSearchMenu, setOpenSearchMenu] = useState(false);
  const [employmentType, setEmploymentType] = useState("Full time");

  const [overallRating, setOverallRating] = useState(0);
  const [workLifeRating, setWorkLifeRating] = useState(0);
  const [salaryRating, setSalaryRating] = useState(0);
  const [promotionsRating, setPromotionsRating] = useState(0);
  const [jobRating, setJobRating] = useState(0);
  const [learningRating, setLearningRating] = useState(0);
  const [satisfactionRating, setSatisfactionRating] = useState(0);
  const [cultureRating, setCultureRating] = useState(0);

  const [workingStatus, setWorkingStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  console.log(workingStatus, "workingStatus");
  // -----------------------
  const [isFormDirty, setIsFormDirty] = useState(false);
  // console.log(isFormDirty, "isFormDirty");

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isFormDirty) {
        const message =
          "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = message;
        return message;
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormDirty]);

  // const handleInputChange = () => {
  // 	setIsFormDirty(true);
  // };
  // State to hold the text value
  // const [text, setText] = useState("");
  // console.log(text, "text");

  // onChange handler to update the state
  // const handleTextAreaChange = (event) => {
  // 	setText(event.target.value);
  // };

  // ----------------------------

  const handleAddItems = (data) => {
    const items = {
      companyName: data.companyName,
      designation: data.designation,
      overallRating,
      workLifeRating,
      salaryRating,
      promotionsRating,
      jobRating,
      learningRating,
      satisfactionRating,
      cultureRating,
      likes: data.likes,
      dislike: data.dislikes,
      gender: data.gender,
      workPolicy: data.workPolicy,
      workStatus: data.workStatus,
      employmentType: employmentType,
    };
    console.log(items, "items");
  };

  const gender = [
    {
      id: 1,
      htmlFor: "male",
      text: "Male",
    },
    {
      id: 2,
      htmlFor: "female",
      text: "Female",
    },
    {
      id: 3,
      htmlFor: "transgender",
      text: "Transgender",
    },
    {
      id: 4,
      htmlFor: "prefer not to say",
      text: "Prefer not to say",
    },
  ];
  const workPolocy = [
    {
      id: 1,
      htmlFor: "Permanent work from home",
      text: "Permanent work from home",
    },
    {
      id: 2,
      htmlFor: "Working from office",
      text: "Working from office",
    },
    {
      id: 3,
      htmlFor: "Hybrid (working from office & home)",
      text: "Hybrid (working from office & home)",
    },
    {
      id: 4,
      htmlFor: "Unclear at the moment",
      text: "Unclear at the moment",
    },
  ];
  const workStatus = [
    {
      id: 1,
      htmlFor: "yes",
      text: "Yes",
    },
    {
      id: 2,
      htmlFor: "no",
      text: "No",
    },
  ];

  const EmploymentTypeItems = [
    {
      id: 1,
      htmlFor: "fullTyme",
      type: "Full time",
    },
    {
      id: 2,
      htmlFor: "partTyme",
      type: "Part time",
    },
    {
      id: 3,
      htmlFor: "contractual",
      type: "Contractual",
    },
    {
      id: 4,
      htmlFor: "intern",
      type: "Intern",
    },
    {
      id: 5,
      htmlFor: "freelancer",
      type: "Freelancer",
    },
  ];

  const getRatingText = (value) => {
    if (value === 1) {
      return (
        <div className="flex items-center  gap-2 pr-2">
          <p>Tarrible</p>
          <BsFillEmojiAngryFill className="w-6 h-6 text-pink-500" />
        </div>
      );
    } else if (value === 2) {
      return (
        <div className="flex items-center gap-2 pr-2">
          <p>Poor</p>
          <BsEmojiFrownFill className="w-6 h-6 text-orange-700" />
        </div>
      );
    } else if (value === 3) {
      return (
        <div className="flex items-center  gap-2 pr-2">
          <p>Average</p>
          <BsEmojiNeutralFill className="w-6 h-6 text-yellow-700" />
        </div>
      );
    } else if (value === 4) {
      return (
        <div className="flex items-center  gap-2 pr-2">
          <p>Good</p>
          <BsEmojiSmileFill className="w-6 h-6 text-green-400" />
        </div>
      );
    } else if (value === 5) {
      return (
        <div className="flex items-center  gap-2 pr-2">
          <p>Excellent</p>
          <BsEmojiSunglassesFill className="w-6 h-6 text-green-700" />
        </div>
      );
    }
    return ""; // Handle other cases as needed
  };

  // const [textareaValue, setTextareaValue] = useState("");
  // // console.log(textareaValue, "textareaValue");
  // // Event handler for the textarea onChange event
  // const handleTextareaChange = (event) => {
  // 	// Update the state with the new textarea value
  // 	setTextareaValue(event.target.value);
  // };

  return (
    <div className="bg-gray-200 mt-[3rem] md:mt-[5rem] pb-[5rem]">
      <div className="w-full md:w-3/4 px-5 py-5 mx-auto">
        <p className="text-2xl font-bold text-primary">
          Rate your company, anonymously!
        </p>
        <p className="text-xl font-semibold text-secondary">
          Your voice matters, make it heard.
        </p>
      </div>
      <form onSubmit={handleSubmit(handleAddItems)}>
        <div className="bg-white rounded-xl p-5 md:p-10 w-full md:w-3/4 mx-auto">
          {/* -----------input field--------------  */}
          <div className="w-full md:w-1/2 flex flex-col gap-7 pb-2">
            <div>
              <Input
                size="lg"
                color="green"
                label="Company Name"
                {...register("companyName", {
                  required: "company name is Required",
                })}
                style={{ fontSize: "16px", fontWeight: "normal" }}
                error={!!errors.companyName}
                onChange={() => setIsFormDirty(true)}
              />
              {errors.companyName && (
                <p className="text-red-500">{errors.companyName.message}</p>
              )}
            </div>
            <div>
              <Input
                size="lg"
                color="green"
                label="Designation/Job Title"
                {...register("designation", {
                  required: "Designation/Job Title is Required",
                })}
                style={{ fontSize: "16px", fontWeight: "normal" }}
                error={!!errors.designation}
                onChange={() => setIsFormDirty(true)}
              />
              {errors.designation && (
                <p className="text-red-500">{errors.designation.message}</p>
              )}
            </div>
          </div>

          {/*-------------------------------------- rating star start */}
          <div className=" flex flex-col gap-6 py-5">
            <div className="flex gap-2 items-center">
              <p className="font-semibold">
                Rate the company on the following criteria
              </p>
              <img src={pointingUp} className="w-7 h-7 rotate-180" />
            </div>
            <div>
              <div className="md:flex justify-start">
                <p className="flex gap-1 pb-1 w-full md:w-72">
                  Overall Rating <span className="text-red-500">*</span>
                </p>
                <div className="w-full md:w-3/5 flex justify-between md:justify-evenly">
                  <Controller
                    name="overallRating"
                    control={control}
                    render={({ field }) => (
                      <Rating
                        onChange={(value) => {
                          setOverallRating(value);
                          field.onChange(value);
                          setIsFormDirty(true);
                        }}
                        value={overallRating}
                        ratedColor="amber"
                      />
                    )}
                    rules={{ required: "Overall Rating is Required" }}
                  />
                  <div className="w-32 flex justify-end">
                    {getRatingText(overallRating)}
                  </div>
                </div>
              </div>
              {errors.overallRating && (
                <p className="text-red-500">{errors.overallRating.message}</p>
              )}
            </div>
            {/* ----------------------- */}
            <div>
              <div className="md:flex justify-start">
                <p className="flex gap-1 pb-1 w-full md:w-72">
                  Work-Life balance <span className="text-red-500">*</span>
                </p>
                <div className="w-full md:w-3/5 flex justify-between md:justify-evenly">
                  <Controller
                    name="workLifeRating"
                    control={control}
                    render={({ field }) => (
                      <Rating
                        onChange={(value) => {
                          setWorkLifeRating(value);
                          field.onChange(value);
                          setIsFormDirty(true);
                        }}
                        value={workLifeRating}
                        ratedColor="amber"
                      />
                    )}
                    rules={{ required: "Overall Rating is Required" }}
                  />
                  <div className="w-32 flex justify-end">
                    {getRatingText(workLifeRating)}
                  </div>
                </div>
              </div>
              {errors.workLifeRating && (
                <p className="text-red-500">{errors.workLifeRating.message}</p>
              )}
            </div>

            {/* ---------------------- */}
            <div>
              <div className="md:flex justify-start">
                <p className="w-full md:w-72 pb-1">
                  Salary & Benefits <span className="text-red-500">*</span>
                </p>
                <div className="w-full md:w-3/5 flex justify-between md:justify-evenly">
                  <Controller
                    name="salaryRating"
                    control={control}
                    render={({ field }) => (
                      <Rating
                        onChange={(value) => {
                          setSalaryRating(value);
                          field.onChange(value);
                          setIsFormDirty(true);
                        }}
                        value={salaryRating}
                        ratedColor="amber"
                      />
                    )}
                    rules={{ required: "Salary & Benefits rating is Required" }}
                  />
                  <div className="w-32 flex justify-end">
                    {getRatingText(salaryRating)}
                  </div>
                </div>
              </div>
              {errors.salaryRating && (
                <p className="text-red-500">{errors.salaryRating.message}</p>
              )}
            </div>
            {/* ---------------------- */}
            <div>
              <div className="md:flex justify-start ">
                <p className="w-full md:w-72 pb-1">
                  Promotions / Appraisal <span className="text-red-500">*</span>
                </p>
                <div className="w-full md:w-3/5 flex justify-between md:justify-evenly">
                  <Controller
                    name="promotionsRating"
                    control={control}
                    render={({ field }) => (
                      <Rating
                        onChange={(value) => {
                          setPromotionsRating(value);
                          field.onChange(value);
                          setIsFormDirty(true);
                        }}
                        value={promotionsRating}
                        ratedColor="amber"
                      />
                    )}
                    rules={{
                      required: "Promotions / Appraisal Rating is Required",
                    }}
                  />
                  <div className="w-32 flex justify-end">
                    {getRatingText(promotionsRating)}
                  </div>
                </div>
              </div>
              {errors.promotionsRating && (
                <p className="text-red-500">
                  {errors.promotionsRating.message}
                </p>
              )}
            </div>
            {/* ---------------------- */}
            <div>
              <div className="md:flex justify-start ">
                <p className="w-full md:w-72 pb-1">
                  Job security <span className="text-red-500">*</span>
                </p>
                <div className="w-full md:w-3/5 flex justify-between md:justify-evenly">
                  <Controller
                    name="jobRating"
                    control={control}
                    render={({ field }) => (
                      <Rating
                        onChange={(value) => {
                          setJobRating(value);
                          field.onChange(value);
                          setIsFormDirty(true);
                        }}
                        value={jobRating}
                        ratedColor="amber"
                      />
                    )}
                    rules={{ required: "Job security Rating is Required" }}
                  />
                  <div className="w-32 flex justify-end">
                    {getRatingText(jobRating)}
                  </div>
                </div>
              </div>
              {errors.jobRating && (
                <p className="text-red-500">{errors.jobRating.message}</p>
              )}
            </div>
            {/* ---------------------- */}
            <div>
              <div className="md:flex justify-start ">
                <p className="w-full md:w-72 pb-1">
                  Skill Development / Learning{" "}
                  <span className="text-red-500">*</span>
                </p>
                <div className="w-full md:w-3/5 flex justify-between md:justify-evenly">
                  <Controller
                    name="learningRating"
                    control={control}
                    render={({ field }) => (
                      <Rating
                        onChange={(value) => {
                          setLearningRating(value);
                          field.onChange(value);
                          setIsFormDirty(true);
                        }}
                        value={learningRating}
                        ratedColor="amber"
                      />
                    )}
                    rules={{
                      required:
                        "Skill Development / Learning Rating is Required",
                    }}
                  />
                  <div className="w-32 flex justify-end">
                    {getRatingText(learningRating)}
                  </div>
                </div>
              </div>
              {errors.learningRating && (
                <p className="text-red-500">{errors.learningRating.message}</p>
              )}
            </div>
            {/* ---------------------- */}
            <div>
              <div className="md:flex justify-start ">
                <p className="w-full md:w-72 pb-1">
                  Work Satisfaction <span className="text-red-500">*</span>
                </p>
                <div className="w-full md:w-3/5 flex justify-between md:justify-evenly">
                  <Controller
                    name="satisfactionRating"
                    control={control}
                    render={({ field }) => (
                      <Rating
                        onChange={(value) => {
                          setSatisfactionRating(value);
                          field.onChange(value);
                          setIsFormDirty(true);
                        }}
                        value={satisfactionRating}
                        ratedColor="amber"
                      />
                    )}
                    rules={{ required: "Work Satisfaction Rating is Required" }}
                  />
                  <div className="w-32 flex justify-end">
                    {getRatingText(satisfactionRating)}
                  </div>
                </div>
              </div>
              {errors.satisfactionRating && (
                <p className="text-red-500">
                  {errors.satisfactionRating.message}
                </p>
              )}
            </div>
            {/* ---------------------- */}
            <div>
              <div className="md:flex justify-start ">
                <p className="w-full md:w-72 pb-1">
                  Company Culture <span className="text-red-500">*</span>
                </p>
                <div className="w-full md:w-3/5 flex justify-between md:justify-evenly">
                  <Controller
                    name="cultureRating"
                    control={control}
                    render={({ field }) => (
                      <Rating
                        onChange={(value) => {
                          setCultureRating(value);
                          field.onChange(value);
                          setIsFormDirty(true);
                        }}
                        value={cultureRating}
                        ratedColor="amber"
                      />
                    )}
                    rules={{ required: "Company Culture Rating is Required" }}
                  />
                  <div className="w-32 flex justify-end">
                    {getRatingText(cultureRating)}
                  </div>
                </div>
              </div>
              {errors.cultureRating && (
                <p className="text-red-500">{errors.cultureRating.message}</p>
              )}
            </div>
          </div>
          {/*--------------------------------------------------------- rating star end */}
          {/*------------- text area ------------------------*/}
          <div>
            <p className="font-semibold pt-5 pb-3">
              What do you like about working at your company?{" "}
              <span className="text-red-500">*</span>
            </p>
            <Textarea
              label="Like"
              color="green"
              {...register("likes", {
                required: "This field is Required",
              })}
              className="h-32"
              error={!!errors.likes}
            />
            {errors.likes && (
              <p className="text-red-500">{errors.likes.message}</p>
            )}
          </div>
          <div>
            <p className="font-semibold pt-5 pb-3">
              What do you dislike about working at your company?{" "}
              <span className="text-red-500">*</span>
            </p>
            <Textarea
              name="text"
              label="Dislikes"
              color="green"
              {...register("dislikes", {
                required: "This field is Required",
              })}
              className="h-32"
              error={!!errors.dislikes}
            />
            {errors.dislikes && (
              <p className="text-red-500">{errors.dislikes.message}</p>
            )}
          </div>
          {/* ---------------------------gender----------- */}
          <div>
            <p className="font-semibold pt-5 pb-3">
              What gender do you identify with?{" "}
              <span className="text-red-500">*</span>
            </p>
            <List className="grid gird-cols-1 md:grid-cols-2">
              {gender.map(({ htmlFor, text, id }) => (
                <ListItem className="p-1 bg-gray-50" key={id}>
                  <label
                    htmlFor={htmlFor}
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        value={htmlFor}
                        // name="gender"
                        id={htmlFor}
                        ripple={false}
                        color="green"
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                        {...register("gender", {
                          required: "Gender is Required",
                        })}
                        onChange={() => setIsFormDirty(true)}
                      />
                    </ListItemPrefix>
                    <Typography className="font-medium text-black">
                      {text}
                    </Typography>
                  </label>
                </ListItem>
              ))}
              {errors.gender && (
                <p className="text-red-500">{errors.gender.message}</p>
              )}
            </List>
          </div>
          {/* ---------------------------work policy */}
          <div>
            <p className="font-semibold pt-5 pb-3">
              What is the work policy at your company?{" "}
              <span className="text-red-500">*</span>
            </p>
            <List className="grid grid-cols-1 md:grid-cols-2">
              {workPolocy.map(({ htmlFor, text, id }) => (
                <ListItem className="p-1 bg-gray-50" key={id}>
                  <label
                    htmlFor={htmlFor}
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        value={htmlFor}
                        id={htmlFor}
                        ripple={false}
                        color="green"
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                        {...register("workPolicy", {
                          required: "Work policy is Required",
                        })}
                        onChange={() => setIsFormDirty(true)}
                      />
                    </ListItemPrefix>
                    <Typography className="font-medium text-black">
                      {text}
                    </Typography>
                  </label>
                </ListItem>
              ))}
              {errors.workPolicy && (
                <p className="text-red-500">{errors.workPolicy.message}</p>
              )}
            </List>
          </div>
          {/* ----------------------working status */}
          <div>
            <p className="font-semibold pt-5 pb-3">
              Do you currently work here?{" "}
              <span className="text-red-500">*</span>
            </p>
            <List className="grid grid-cols-1 md:grid-cols-2">
              {workStatus.map(({ htmlFor, text, id }) => (
                <ListItem className="p-1 bg-gray-50" key={id}>
                  <label
                    htmlFor={htmlFor}
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        value={htmlFor}
                        id={htmlFor}
                        ripple={false}
                        color="green"
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                        {...register("workStatus", {
                          required: "Work policy is Required",
                        })}
                        onChange={(event) => {
                          setIsFormDirty(true);
                          setWorkingStatus(event.target.value);
                        }}
                      />
                    </ListItemPrefix>
                    <Typography className="font-medium text-black">
                      {text}
                    </Typography>
                  </label>
                </ListItem>
              ))}
              {errors.workStatus && (
                <p className="text-red-500">{errors.workStatus.message}</p>
              )}
            </List>
            {workingStatus === "yes" && (
              <div className="">
                <p className="font-semibold pt-5 pb-3">
                  Started working on <span className="text-red-500">*</span>
                </p>

                <DatePicker
                  selected={startDate}
                  dateFormat="MMMM-dd-yyyy"
                  onChange={(date) => setStartDate(date)}
                  maxDate={new Date()}
                  className="ring-1 ring-gray-500 p-2 rounded-lg md:ml-3 focus:outline-none focus:ring-green-500 focus:ring-2 "
                />
              </div>
            )}

            {workingStatus === "no" && (
              <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                <div>
                  <p className="font-semibold pt-5 pb-3">
                    Started working on <span className="text-red-500">*</span>
                  </p>
                  <DatePicker
                    selected={startDate}
                    dateFormat="dd-MMMM-yyyy"
                    onChange={(date) => setStartDate(date)}
                    maxDate={new Date()}
                    className="ring-1 ring-gray-500 p-2 rounded-lg md:ml-3 focus:outline-none focus:ring-green-500 focus:ring-2 "
                  />
                </div>
                <div>
                  <p className="font-semibold pt-5 pb-3">
                    Employment ended on <span className="text-red-500">*</span>
                  </p>
                  <DatePicker
                    selected={endDate}
                    dateFormat="dd-MMMM-yyyy"
                    onChange={(date) => setEndDate(date)}
                    minDate={startDate}
                    maxDate={new Date()}
                    className="ring-1 ring-gray-500 p-2 rounded-lg md:ml-3 focus:outline-none focus:ring-green-500 focus:ring-2 "
                  />
                </div>
              </div>
            )}
          </div>
          {/* ----------------------- wirking type */}
          <div className="w-full md:w-1/3 pb-5 ">
            <p className="font-semibold pt-5 pb-3">
              Employment Type? <span className="text-red-500">*</span>
            </p>
            <Menu
              placement="bottom-end"
              open={openSearchMenu}
              handler={setOpenSearchMenu}
            >
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  className={`text-md capitalize outline-none py-1 flex items-center gap-5 hover:bg-transparent active:bg-transparent w-full h-10 justify-between px-5 md:ml-3 border border-gray-500 text-primary ${
                    openSearchMenu ? "border-2 border-green-500" : ""
                  }`}
                >
                  {employmentType}
                  <MdOutlineKeyboardArrowDown
                    className={`h-5 w-5 transition-transform ${
                      openSearchMenu ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="w-72">
                {EmploymentTypeItems.map(({ type, id }) => (
                  <MenuItem
                    onClick={() => setEmploymentType(type)}
                    key={id}
                    className="flex items-center gap-1 py-1 "
                  >
                    {employmentType === type ? (
                      <Typography className="font-medium text-green-500">
                        {type}
                      </Typography>
                    ) : (
                      <Typography className="font-medium text-black">
                        {type}
                      </Typography>
                    )}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            {errors.employmentType && (
              <p className="text-red-500">{errors.employmentType.message}</p>
            )}
          </div>
          <div className="flex justify-center md:justify-start mt-5 mb-10">
            <Button
              type="submit"
              className="px-12 capitalize text-lg font-medium rounded-full bg-primary text-white
						  focus:ring-0 flex gap-2 items-center "
            >
              <GoShieldCheck className="w-5 h-5" />
              Submit Anonymously
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
