import * as React from "react";
import * as ReactDOM from "react-dom";

import { AlceoProvider, Accordion } from "../lib";

const accordionData = [
  {
    title: "Apa Itu Sirka ?",
    body: "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Bagaimana cara menurunkan berat badan dengan sirka?",
    body: "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Siapa yang bisa mengikuti program diet Sirka?",
    body: "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Bagaimana program diet Sirka?",
    body: "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Apa saja benefit yang di dapatkan ketika mengikuti program Sirka?",
    body: "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
  {
    title: "Beda program 1, 3 dan 6 bulan?",
    body: "Sirka adalah aplikasi diet yang memberi kamu akses ke ahli gizi khusus dan rencana nutrisi yang dipersonalisasi. Kami tergabung di Indonesia di bawah PT Sejuta Kawan Sehat.",
  },
];

const App = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div>
      <AlceoProvider>
        <>
          {accordionData.map(
            (data: { title: string; body: string }, index: number) => (
              <Accordion key={index}>
                <Accordion.Title>{data.title}</Accordion.Title>
                <Accordion.Body>{data.body}</Accordion.Body>
              </Accordion>
            )
          )}
        </>
      </AlceoProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
