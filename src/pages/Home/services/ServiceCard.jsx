/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ServiceCard = ({ item }) => {
  const { image, title, desc } = item;
  return (
    <Card className="w-full h-full cursor-pointer shadow-none border border-gray-500 hover:border-green-500">
      <CardHeader
        floated={false}
        color="blue-gray"
        className="relative m-0 p-0 h-[220px] w-full overflow-hidden rounded-b-none"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </CardHeader>

      <CardBody className="w-full px-2 py-3 flex">
        <div className="w-full px-2">
          <Typography variant="h5" color="blue-gray" className="pb-2">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {desc}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
