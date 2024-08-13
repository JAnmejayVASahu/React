import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // useRef hook
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length - 1));
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    // window.navigator.clipboard.writeText(password);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-4xl text-white text-center font-bold my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-full overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            className="outline-none w-full px-1 py-2"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`p-2 text-white ${
              isCopied ? "bg-green-500" : "bg-orange-500"
            }`}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={10}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)}
              className="w-24 cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
