"use client";
import React, { useEffect } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

type Props = {
  modalIsOpen: boolean;
  modalOnOpenChange: () => void;
};

export default function RegisterSuccessModal({
  modalIsOpen,
  modalOnOpenChange,
}: Props) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onOpenChange={modalOnOpenChange}
        className="rounded-md bg-secondary bg-opacity-75 p-10 text-center text-xs text-white border border-tertiary-100"
        closeButton={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col items-center">
                  <div className="relative h-60 w-60">
                    <Image
                      src="/png/congratulation.png"
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="text-xl font-[500] leading-normal">
                      Congratulations you have successfully registered!
                    </h3>
                    <p className="leading-normal">
                      Yes it was easy and you did it! Check your mail box for
                      the next step{" "}
                      <span className="inline-block">
                        <Image
                          src="/png/wink.png"
                          alt="wink"
                          width={14}
                          height={14}
                        />
                      </span>
                    </p>
                    <button
                      className="mx-auto flex w-full justify-center rounded-sm bg-primary px-5 py-3 text-xs text-white"
                      type="submit"
                      onClick={onClose}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
