import { useState, useEffect, useRef } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutSide(e) {
      e.preventDefault();
      if (
        menuRef.current &&
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => document.removeEventListener("click", handleClickOutSide);
  }, []);
  return { show, setShow, nodeRef, menuRef };
}
