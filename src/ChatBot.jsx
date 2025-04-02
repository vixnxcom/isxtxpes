import { useState } from "react";
import { MessageCircle,  } from "lucide-react";
import { call } from "./assets";

const faqData = {
"1": `Is this a scam? - When something feels too good to be true, skepticism is natural. The Diamond Project is built on transparency, proven
results, and thousands of success stories. Every member who has joined has experienced real transformation, and
you can too. With our mentorship, tools, and systems, this isn’t just an opportunity—it’s a game-changer for your
future.`
,
"2": `How much can I realistically earn? - Imagine supplementing or even replacing your income entirely. Many members start with an extra ₦500,000 to
₦1,000,000 monthly, and some scale to 8 or 9 figures annually. Your earnings depend entirely on your consistency
and commitment to following the proven system. What would an extra ₦500,000 a month mean for your life right now?
`
,
"3": `Do I need experience to succeed? - Not at all. Think of this as being handed a map to your goals. You’ll receive step-by-step training, expert mentorship,
and all the tools you need to succeed—even if you’ve never done anything like this before. By following the system,
you’ll gain the confidence and skills to thrive.
`
,
"4": `How much time do I need to invest? - Your future is worth just 1-2 hours a day, isn’t it? That’s all it takes to start seeing results. You can adjust your
schedule to fit this into your life, whether you’re working full-time, studying, or raising a family. The best part? The
more consistent you are, the faster you’ll see the rewards.
`
,

"5": `What if I’m not good at sales? - This isn’t about selling—it’s about helping. You’ll be sharing a life-changing opportunity, not convincing anyone to buy
something they don’t need. The truth is, everybody succeeds through selling. Everyone who makes money is selling something. You got married
or started dating because someone sold themselves to you. As a business owner or employee, you sell your services
to generate income. But here’s the key difference: In this case, we’ll teach you how to set up an automated system that does the selling
FOR you, leveraging AI and other tools. Once set, this system runs on autopilot, allowing you to go about your daily
life. The point of making money is to have the freedom to spend it. The point of starting a business is to run the
business—not let it run you.
`
,

"6": `How is this different from other opportunities? - Most opportunities give you vague promises of success without providing the tools to achieve it. The Diamond Project
combines expert mentorship, a supportive community, and a step-by-step system that guarantees results. This isn’t just another program—it’s a movement that empowers you to take control of your financial future.
`
,
"7": `What happens if I fail? - What if you succeed? Every big transformation begins with a leap of faith. While challenges are part of any journey,
you’re never alone here. With our expert mentorship and supportive community, failure becomes a stepping stone to
success. Every mistake is a lesson, and every lesson brings you closer to your goals.
`
,
"8": `How soon will I see results? - How quickly you see results depends on how quickly you act. Some members notice changes within weeks, while
others take longer. The key is consistency. Imagine where you could be in six months if you start today—and then
take that first step toward making it happen.

`
,
"9": `Why do I have to pay to get started? - Think of it as an investment in yourself. When you join, you’re gaining access to a system, training, and tools worth far
more than what you invest. This is about giving yourself the chance to grow, build, and achieve financial
independence. It’s not about what you spend—it’s about what you gain.

`,
"10": `How secure is this opportunity? - This opportunity is built on ethical practices, long-term sustainability, and a proven track record of success. The
company has been around since 2016, and any business that not only survives but thrives beyond its first five years is
built on a strong foundation. This is not a Ponzi scheme or a gamble—it’s a structured opportunity with real value.

`,
"11": `What if I don’t know anyone to invite? - That’s not an issue. We’ll teach you how to connect with the right people, both online and offline. Our training ensures
that you’ll learn how to find and attract others looking for this opportunity—people you may not even know yet.

`,
"12": `Can I do this alongside my current job? - Absolutely. This is designed to work around your life, not disrupt it. Many members start part-time, dedicating just a
few hours a day while continuing their current jobs or responsibilities. Over time, you can transition to doing this fulltime if you choose.

`,
"13": `What if I’m not tech-savvy? - No problem. Our platform is user-friendly, and we provide detailed instructions and support. Even if you have zero
tech knowledge, you’ll have everything you need to navigate this system effortlessly.

`,
"14": `What makes this worth my time and effort? - This is about more than just money—it’s about freedom. Freedom to design your life, freedom to break free from
limitations, and freedom to achieve the dreams you’ve always had. With every effort you put in, you’re building a future where you’re in control.

`,
"15": `What if I have more questions before I start? - We’re here to answer them! Book a one-on-one consultation with our team or join one of our live Q&A sessions. Your
journey starts with clarity, and we’ll make sure you have all the information you need to take the first step confidently.

`,

};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState({ text: "Hello! Welcome to The Diamond Project FAQ center. Type a number (1-15) to get an answer to our FAQs.", sender: "bot" });
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const botReply = faqData[input] || "Sorry, I don’t have an answer for that. Type a number between 1 and 15.";
    setMessage({ text: botReply, sender: "bot" });
    setInput("");
  };

  return (
    <div className="fixed bottom-38 right-3 z-50">
      <button 
        className="bg-goldd text-white  p-3 rounded-full shadow-lg" 
        onClick={() => setIsOpen(true)}
      > 
        <MessageCircle size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white p-6 flex flex-col items-center shadow-lg">
          {/* Close Button */}
        <h1 className="aeon-bold blue tracking-wide">The Diamond Project</h1>
        <h1 className="coal flex flex-row gap-2"><span><img src={call} className="w-8" /></span>FAQs</h1>
          <button 
            className="absolute top-4 right-4 sred text-white  p-2 w-10 rounded-full" 
            onClick={() => setIsOpen(false)}
          >  X
            {/* <X size={12} /> */}
          </button>
          
          {/* Chat Display */}
          <div className="w-full max-w-lg min-h-80 mt-2 rounded-lg mb-4 flex items-center">
            <div className={`p-4 rounded-[24px] text-[13px] coal offlilac bordery`}>
              {message.text}
            </div>
          </div>
          
          {/* FAQ List (Fixed Scrolling Issue) */}
          <div className="w-full max-w-lg offpink p-2 max-h-40 noto rounded-[24px] mb-4 overflow-y-auto bordery tblue">
            {Object.entries(faqData).map(([key, value]) => (
              <div key={key} className="mb-1">
                <strong>{key}:</strong> {value.split(" - ")[0]}
              </div>
            ))}
          </div>
          
          {/* Input Box */}
          <div className="w-full max-w-lg flex mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 sblack rounded-[24px]"
              placeholder="Enter a number (1-15)..."
            />
            <button onClick={handleSend} className="sgreen text-white p-2 rounded-[24px]">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
