'use client'

import { MenuProvider } from "../../utils/useMenu";

export default function Provider({children}) {
  return (
    <>
      <MenuProvider>
        {children}
      </MenuProvider>
    </>
  );
}
