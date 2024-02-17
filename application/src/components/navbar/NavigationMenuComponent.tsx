"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black text-sm font-medium">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[350px]  ">
              <p className="font-bold mb-[5px] text-sm">Business Banking</p>

              <ListItem
                className="flex justify-center flex-col w-auto"
                href="/cards"
              >
                <div className="flex gap-3 my-auto">
                  <Image
                    width={20}
                    height={20}
                    alt="card icon"
                    src={"/images/general/card-icon.svg"}
                  />
                  <p>Cards</p>
                </div>
              </ListItem>
              <ListItem
                className="flex justify-center flex-col "
                href="/multi-currency-accounts"
              >
                <div className="flex gap-3 my-auto">
                  <Image
                    width={20}
                    height={20}
                    alt="card icon"
                    src={"/images/general/multi-currency-icon.svg"}
                  />
                  <p>Multi-currency Accounts</p>
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[350px] p-4">
              <ListItem className="flex  p-2 " href="/about-us">
                <p>About Us</p>
              </ListItem>
              <ListItem
                className="flex  p-2 "
                href="https://usegraph.medium.com/"
              >
                <p>Blog</p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
          <NavigationMenuContent className="left-20[">
            <ul className="grid w-[350px] p-4">
              <ListItem className="flex  p-2 " href="/contact">
                <p>Contact Us</p>
              </ListItem>
              <ListItem className="flex p-2 " href="/#faqs">
                <p>FAQs</p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
