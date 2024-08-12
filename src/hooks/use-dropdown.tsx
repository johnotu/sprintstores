import { useRef, useState, useEffect, RefObject } from "react";

const useDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      const isClickOutside = (ref: RefObject<HTMLElement>) =>
        ref.current && !ref.current.contains(event.target as Node);
      if (isClickOutside(dropdownRef) && isClickOutside(dropdownButtonRef)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, dropdownButtonRef]);

  return { dropdownRef, dropdownButtonRef, showDropdown, setShowDropdown };
};

export default useDropdown;
