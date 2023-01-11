import { useState, useEffect } from "react";
import CopyButton from "./CopyButton";
import RangeSlider from "react-range-slider-input";
import PasswordStrength from "./PasswordStrength";
import generatePassword from "./PasswordGenerator";
import "react-range-slider-input/dist/style.css";

function App() {
  const [password, setPassword] = useState("");
  const [characterLength, setCharacterLength] = useState(10);
  const [conditions, setConditions] = useState({
    uppercase: false,
    lowercase: true,
    numbers: false,
    symbols: false,
  });
  const [passwordStrength, setPasswordStrength] = useState("tooWeak");

  function handleInputChange(e) {
    setPassword(e.target.value);
  }

  function handleSliderInputChange(sliderValueArr) {
    setCharacterLength(sliderValueArr[1]);
  }

  function handleCheckboxInputChange(e) {
    const checked = e.target.checked;
    setConditions({
      ...conditions,
      [e.target.name]: checked,
    });
  }

  function checkPasswordStrength(length, conditions) {
    const { uppercase, lowercase, numbers, symbols } = conditions;

    if (uppercase && lowercase && numbers && symbols) {
      setPasswordStrength("strong");
    } else if (uppercase && lowercase && numbers) {
      setPasswordStrength("medium");
    } else if (uppercase && lowercase) {
      setPasswordStrength("weak");
    } else {
      setPasswordStrength("tooWeak");
    }

    if (length < 6) {
      setPasswordStrength("tooWeak");
    } else if (length < 8) {
      setPasswordStrength("weak");
    }
  }

  function handleGeneratePassword(e) {
    e.preventDefault();
    setPassword(generatePassword(characterLength, conditions));
  }

  useEffect(() => {
    checkPasswordStrength(characterLength, conditions);
  }, [characterLength, conditions]);

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl text-[#817D92] mb-8">Password Generator</h1>
      <form className="md:w-[540px] w-[343px]">
        <div className="relative">
          <input
            onChange={handleInputChange}
            placeholder="P4$5W0rD!"
            className="bg-[#24232C] w-full h-20 py-5 pl-7 text-3xl text-[#E6E5EA] focus:outline-none placeholder:opacity-25"
            value={password}
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
          {Object.entries(conditions).map(([condition, checked], idx) => (
            <div className="mt-8" key={idx}>
              <input
                name={condition}
                className="accent-[#A4FFAF]"
                type="checkbox"
                onChange={handleCheckboxInputChange}
                checked={checked}
              />
              <label
                htmlFor={condition}
                className="text-[#E6E5EA] ml-6 text-lg"
              >
                Include {condition.charAt(0).toUpperCase() + condition.slice(1)}{" "}
                {condition === "uppercase" || condition === "lowercase"
                  ? "Letters"
                  : ""}
              </label>
            </div>
          ))}

          <div className="bg-[#18171F] flex items-center justify-between mt-8 px-8 py-6">
            <span className="text-[#817D92] text-lg">STRENGTH</span>
            <PasswordStrength passwordStrength={passwordStrength} />
          </div>

          <button
            className="flex items-center justify-center bg-[#A4FFAF] w-full h-16 mt-8 text-[#24232C] text-lg hover:bg-transparent hover:border-2 hover:border-[#A4FFAF] hover:text-[#A4FFAF] cursor-pointer"
            onClick={handleGeneratePassword}
          >
            GENERATE
            <div className="ml-6">
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#24232C"
                  d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
                />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
