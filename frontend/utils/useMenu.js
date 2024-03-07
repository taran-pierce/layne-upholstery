import {
  createContext,
  useContext,
  useState,
} from 'react';

const LocalStateContext = createContext({});
const LocalStateProvider = LocalStateContext.Provider;

function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
   setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

   function openMenu() {
    setIsMenuOpen(true);
   }

  return (
    <LocalStateProvider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        toggleMenu,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </LocalStateProvider>
  )
}

function useMenu() {
  return useContext(LocalStateContext);
}

export {
  useMenu,
  MenuProvider,
}
