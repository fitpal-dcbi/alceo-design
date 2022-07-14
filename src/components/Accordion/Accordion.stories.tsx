import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Accordion as AccordionComponent } from "./index";

export default {
  title: "Components/Accordion",
  component: AccordionComponent,
} as Meta;

export const Accordion: Story<{
  accordionData: Array<{ title: string; body: string }>;
}> = (args) => {
  const { accordionData } = args;

  return (
    <div style={{ maxWidth: "800px" }}>
      {accordionData.map(
        (data: { title: string; body: string }, index: number) => (
          <AccordionComponent>
            <AccordionComponent.Title>{data.title}</AccordionComponent.Title>
            <AccordionComponent.Body>{data.body}</AccordionComponent.Body>
          </AccordionComponent>
        )
      )}
    </div>
  );
};

const accordionData = [
  {
    title: "Apa Itu Sirka ?",
    body:
      "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Bagaimana cara menurunkan berat badan dengan sirka?",
    body:
      "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Siapa yang bisa mengikuti program diet Sirka?",
    body:
      "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Bagaimana program diet Sirka?",
    body:
      "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Apa saja benefit yang di dapatkan ketika mengikuti program Sirka?",
    body:
      "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Beda program 1, 3 dan 6 bulan?",
    body:
      "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
];

export const AccordionStory = Accordion.bind({});
AccordionStory.args = { accordionData };
