import React from 'react'

import Header from './header'

function Page({ children }) {
  return (
    <div>
      <Header />

      <div className="">
        <div className="">
          {children}
        </div>
        <div className="footer"></div>
      </div>
    </div>
  )
}

export default Page