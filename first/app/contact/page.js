import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (
    <div>
      <Script>
        {
          `
          alert('hello from contact page')
          `
        }
      </Script>
      hello from contact page
    </div>
  )
}

export default contact

export const metadata = {
  title: "contact -- first",
  description: "my contact page",
};