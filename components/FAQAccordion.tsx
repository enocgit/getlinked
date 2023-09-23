"use client";
import React from "react";

import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQAccordion = () => {
  //   const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-xs text-white",
    trigger: "",
    indicator: "text-medium",
    content: "text-xs px-2 max-w-xl",
  };

  return (
    <Accordion
      //   selectedKeys={selectedKeys}
      //   onSelectionChange={setSelectedKeys}
      itemClasses={itemClasses}
      keepContentMounted
      showDivider
      //   disableIndicatorAnimationAnimation
    >
      <AccordionItem
        key="1"
        aria-label="Can I work on a project I started before the hackathon?"
        title="Can I work on a project I started before the hackathon?"
        indicator={({ isOpen }) =>
          isOpen ? (
            <FaMinus className="text-xs text-tertiary-100" />
          ) : (
            <FaPlus className="text-xs text-tertiary-100" />
          )
        }
        className="border-b border-tertiary-100"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="What happens if I need help during the hackathon?"
        title="What happens if I need help during the hackathon?"
        indicator={({ isOpen }) =>
          isOpen ? (
            <FaMinus className="text-xs text-tertiary-100" />
          ) : (
            <FaPlus className="text-xs text-tertiary-100" />
          )
        }
        className="border-b border-tertiary-100"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="What happens if I don't have an idea for a project?"
        title="What happens if I don't have an idea for a project?"
        indicator={({ isOpen }) =>
          isOpen ? (
            <FaMinus className="text-xs text-tertiary-100" />
          ) : (
            <FaPlus className="text-xs text-tertiary-100" />
          )
        }
        className="border-b border-tertiary-100"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
