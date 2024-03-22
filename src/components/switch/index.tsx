import classNames from "classnames";
import React from "react";

/**
 * Props interface for the Switch component.
 */
interface PropsType {
  width?: "sm" | "md" | "lg"; // Width of the switch: "sm" (small), "md" (medium), or "lg" (large). Default is "md".
  firstIcon?: React.ReactNode; // Icon displayed on the left side of the switch.
  secondIcon?: React.ReactNode; // Icon displayed on the right side of the switch.
  onPress: (pos: "left" | "right") => void; // Function to handle switch press events.
}

/**
 * Switch component representing a toggle switch.
 * @param width The width of the switch.
 * @param firstIcon Icon displayed on the left side of the switch.
 * @param secondIcon Icon displayed on the right side of the switch.
 * @param onPress Function to handle switch press events.
 * @returns JSX element representing the switch.
 */
export default function Switch({ width = "md", firstIcon, secondIcon, onPress }: PropsType): JSX.Element {
  // State to manage the position of the switch.
  const [switchPos, setSwitchPos] = React.useState<"left" | "right">("left");

  // Function to handle switch press events.
  const handleSwitchPress = () => {
    // Toggle the position of the switch.
    if (switchPos === "left") setSwitchPos("right");
    else setSwitchPos("left");
    
    // Call the onPress callback with the current position of the switch.
    onPress(switchPos);
  };

  // Render the switch component.
  return (
    <button
      onClick={handleSwitchPress}
      className={classNames(
        "p-[6px] flex rounded-full shadow-md bg-white items-center justify-between relative",
        {
          "w-20": width === "sm",
          "w-24": width === "md",
          "w-28": width === "lg",
        }
      )}
    >
      {/* Switch track */}
      <div
        className={classNames(
          "w-12 h-6 bg-neutral-900 flex items-center px-2 relative z-10",
          {
            "rounded-s-full rounded-e-[7000px]": switchPos === "left",
            "translate-x-6 rounded-s-[7000px] rounded-e-full": switchPos === "right" && width === "sm",
            "translate-x-8 rounded-s-[7000px] rounded-e-full": switchPos === "right" && width === "md",
            "translate-x-12 rounded-s-[7000px] rounded-e-full": switchPos === "right" && width === "lg",
          }
        )}
      >
        <div className="h-[2px] w-2 bg-teal-500 rounded-full"></div>
      </div>
      {/* Left icon */}
      <div className={classNames("flex justify-center w-8")}>
        {firstIcon}
      </div>
      {/* Right icon */}
      <div className="absolute left-[10px]">
        {secondIcon}
      </div>
    </button>
  );
}
