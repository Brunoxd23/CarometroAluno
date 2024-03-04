// headers.js

import React from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function Header () {
  return (
    <header className="-mb-4">
  <Card>
    <CardContent className="p-5 justify-between items-center flex flex-row">
      <Link href="/">
        <Image src="/Logo_Einstein.png" alt="FSW Barber" height={18} width={120} />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon size={16} />
          </Button>
        </SheetTrigger>

        <SheetContent className="p-0">
        </SheetContent>
      </Sheet>
    </CardContent>
  </Card>
</header>
  );
}

export default Header;
