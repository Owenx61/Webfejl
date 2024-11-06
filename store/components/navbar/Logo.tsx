import Link from "next/link";
import { Button } from "../ui/button";
import { IoStorefrontOutline } from "react-icons/io5";

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href="/">
        <IoStorefrontOutline className="w-20 h-20" />
      </Link>
    </Button>
  );
}

export default Logo;
