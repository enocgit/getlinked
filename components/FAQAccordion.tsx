"use client";
import React from "react";

import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import faqs from "@/content/faqs";

const FAQAccordion = () => {
  //   const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

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
      {faqs.map((faq) => {
        const { id, question, answer } = faq;
        return (
          <AccordionItem
            key={question}
            aria-label={question}
            title={question}
            indicator={({ isOpen }) =>
              isOpen ? (
                <FaMinus className="text-xs text-tertiary-100" />
              ) : (
                <FaPlus className="text-xs text-tertiary-100" />
              )
            }
            className="border-b border-tertiary-100"
          >
            {answer}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQAccordion;
