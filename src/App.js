import { useState } from "react";
import CopyButton from "./CopyButton";

function App() {
  const [password, setPassword] = useState("");

  function handleInputChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl text-[#817D92] mb-8">Password Generator</h1>
      <form className="md:w-[540px] w-[343px]">
        <div className="relative">
          <input
            onChange={handleInputChange}
            placeholder="P4$5W0rD!"
            className="bg-[#24232C] w-full h-20 py-5 pl-7 text-3xl text-[#E6E5EA] focus:outline-none placeholder:opacity-25"
          />
          <CopyButton copyText={password} />
        </div>
      </form>
    </div>
  );
}

export default App;
