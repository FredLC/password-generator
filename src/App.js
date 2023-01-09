import { useState } from "react";
import CopyButton from "./CopyButton";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function App() {
  const [password, setPassword] = useState("");
  const [characterLength, setCharacterLength] = useState(10);

  function handleInputChange(e) {
    setPassword(e.target.value);
  }

  function handleSliderInputChange(sliderValueArr) {
    setCharacterLength(sliderValueArr[1]);
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

        <div className="bg-[#24232C] mt-6 px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <label
              htmlFor="character-length"
              className="text-[#E6E5EA] text-base"
            >
              Character Length
            </label>
            <span className="text-[#A4FFAF] text-3xl">{characterLength}</span>
          </div>
          <RangeSlider
            className="single-thumb"
            min={1}
            max={50}
            defaultValue={[0, 10]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={handleSliderInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
