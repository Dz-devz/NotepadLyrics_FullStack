import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center flex-col gap-4 items-center min-h-[80vh]">
      <h1 className=" text-6xl text-center font-semibold">
        Write down your Profounds <br /> Thoughts that can create miracle.{" "}
        <br />
        Mircale Starts When you
      </h1>
      <Link to="/create">
        <Button
          w="300px"
          h="60px"
          fontSize={32}
          rightIcon={<ChevronRightIcon />}
          colorScheme="black"
          variant="outline"
          _hover={{
            background: "gray.700",
            color: "white",
          }}
        >
          Start Here!
        </Button>
      </Link>
    </div>
  );
}
