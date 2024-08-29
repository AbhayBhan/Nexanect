import React from "react";

const Container = ({children} : {children : React.ReactNode}) => {
  return (
    <div className="mx-auto max-w-6xl">
      {children}
    </div>
  )
}

export default Container