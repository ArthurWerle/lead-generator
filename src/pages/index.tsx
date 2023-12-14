import Header from "@/components/header";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Markdown from "react-markdown";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [leadCopied, setLeadCopied] = useState(false);
  const [lead, setLead] = useState("");

  async function generateLead(e) {
    e.preventDefault();
    setLoading(true);
    const inputs = document.getElementById("inputs") as HTMLTextAreaElement;
    const response = await fetch("/api/askai", {
      method: "POST",
      body: inputs.value,
    });
    const data = await response.json();
    setLoading(false);
    console.log("data", data);
    if (data.error) {
      alert("Something went wrong!");
      return;
    }

    alert("Lead generated successfully!");
    inputs.value = "";
    setLead(data.result);
  }

  return (
    <main>
      <Header />
      <div className="w-full">
        <form onSubmit={(e) => generateLead(e)} className="flex flex-col gap-2">
          <label htmlFor="inputs">Provide some inputs to build your lead</label>
          <textarea
            name="inputs"
            id="inputs"
            cols={30}
            rows={10}
            className="rounded p-4"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 p-2 rounded text-white"
          >
            {loading ? "Generating..." : "Generate Lead"}
          </button>
        </form>

        {lead.length > 0 && (
          <div className="mt-6 mb-6">
            <div className="flex justify-between">
              <h2 className="font-bold mb-4 font-xl">Your lead is ready! 👇🏻</h2>
              <CopyToClipboard text={lead} onCopy={() => setLeadCopied(true)}>
                {leadCopied ? (
                  <button className="bg-green-500 p-2 rounded text-white">
                    Copied 👍🏻
                  </button>
                ) : (
                  <button className="bg-blue-500 p-2 rounded text-white">
                    Copy
                  </button>
                )}
              </CopyToClipboard>
            </div>
            <Markdown>{lead}</Markdown>
          </div>
        )}
      </div>
    </main>
  );
}