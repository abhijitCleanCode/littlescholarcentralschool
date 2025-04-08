import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// Reusable Animated Card Component
const AcademicCard = ({ 
  imageUrl, 
  title, 
  description, 
  buttonText = "Learn More",
  onButtonClick,
  delay = 0
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.03 }}
    className="w-full md:w-1/3 px-4 mb-8"
  >
    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow">
      {imageUrl && (
        <CardHeader color="blue-gray" className="relative h-48 shadow-none">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </CardHeader>
      )}
      <CardBody className="flex-grow">
        <Typography variant="h5" className="mb-3 text-gray-900 font-bold">
          {title}
        </Typography>
        <Typography className="text-gray-600">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button 
          onClick={onButtonClick} 
          color="blue"
          ripple={true}
          className="hover:shadow-md"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);
export default AcademicCard