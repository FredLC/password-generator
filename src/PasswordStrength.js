function PasswordStrength({ passwordStrength }) {
  switch (passwordStrength) {
    case "tooWeak":
      return (
        <div className="flex">
          <span className="text-[#E6E5EA] text-2xl">TOO WEAK!</span>
          <div className="flex">
            <div className="w-2.5 h-7 ml-4 bg-[#F64A4A]"></div>
            <div className="w-2.5 h-7 ml-2 bg-transparent border-2 border-[#E6E5EA]"></div>
            <div className="w-2.5 h-7 ml-2 bg-transparent border-2 border-[#E6E5EA]"></div>
            <div className="w-2.5 h-7 ml-2 bg-transparent border-2 border-[#E6E5EA]"></div>
          </div>
        </div>
      );
      break;
    case "weak":
      return (
        <div className="flex">
          <span className="text-[#E6E5EA] text-2xl">WEAK</span>
          <div className="flex">
            <div className="w-2.5 h-7 ml-4 bg-[#FB7C58]"></div>
            <div className="w-2.5 h-7 ml-2 bg-[#FB7C58]"></div>
            <div className="w-2.5 h-7 ml-2 bg-transparent border-2 border-[#E6E5EA]"></div>
            <div className="w-2.5 h-7 ml-2 bg-transparent border-2 border-[#E6E5EA]"></div>
          </div>
        </div>
      );
      break;
    case "medium":
      return (
        <div className="flex">
          <span className="text-[#E6E5EA] text-2xl">MEDIUM</span>
          <div className="flex">
            <div className="w-2.5 h-7 ml-4 bg-[#F8CD65]"></div>
            <div className="w-2.5 h-7 ml-2 bg-[#F8CD65]"></div>
            <div className="w-2.5 h-7 ml-2 bg-[#F8CD65]"></div>
            <div className="w-2.5 h-7 ml-2 bg-transparent border-2 border-[#E6E5EA]"></div>
          </div>
        </div>
      );
      break;
    case "strong":
      return (
        <div className="flex">
          <span className="text-[#E6E5EA] text-2xl">STRONG</span>
          <div className="flex">
            <div className="w-2.5 h-7 ml-4 bg-[#A4FFAF]"></div>
            <div className="w-2.5 h-7 ml-2 bg-[#A4FFAF]"></div>
            <div className="w-2.5 h-7 ml-2 bg-[#A4FFAF]"></div>
            <div className="w-2.5 h-7 ml-2 bg-[#A4FFAF]"></div>
          </div>
        </div>
      );
      break;
  }
}

export default PasswordStrength;
