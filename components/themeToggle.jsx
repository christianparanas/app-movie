import React, { useState } from 'react'

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const changeTheme = () => {
    if(isDarkMode) return setIsDarkMode(false)

    setIsDarkMode(true)
  }

  return (
    <div onClick={changeTheme} className="flex justify-center items-center">
      {isDarkMode ? "🌙" : "☀️" }
    </div>
  )
}

export default ThemeToggle