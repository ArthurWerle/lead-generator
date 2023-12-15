import Header from "@/components/header";
import { FormEventHandler, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Markdown from "react-markdown";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [leadCopied, setLeadCopied] = useState(false);
  const [lead, setLead] = useState("");

  async function generateLead(e: any) {
    e.preventDefault();
    setLoading(true);
    const inputs = document.getElementById("inputs") as HTMLTextAreaElement;

    const response = await fetch("/api/askai", {
      method: "POST",
      body: inputs.value,
    });

    if (response.ok && response.body) {
      const reader = response.body.getReader();

      const processStream = async () => {
        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            console.log("stream completed");
            setLoading(false);
            break;
          }

          let chunk = new TextDecoder("utf-8").decode(value);

          setLead((prev) => prev + chunk);
        }
      };

      processStream().catch((err) => {
        console.log("--stream error--", err);
        alert("Something went wrong. Please try again.");
      });
    }
  }

  return (
    <main>
      <Header />
      <div className="w-full">
        <form
          onSubmit={(e: any) => generateLead(e)}
          className="flex flex-col gap-2"
        >
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
                    Copy all
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
