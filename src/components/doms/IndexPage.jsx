import { forwardRef } from "react"

const IndexPage = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="">
      <section 
        className="h-screen" 
        // style={{ backgroundColor: 'rgb(218, 174, 53)' }}
      >
        三五成群
        {[0,0,0,0,0,0,0].map((k, i) => 
          <button key={`s1-${i}`} onClick={()=>alert(`button ${i}`)} className="pointer-events-auto">{i}</button>)}
      </section>
      <section 
        className="h-screen" 
        // style={{ backgroundColor: 'rgb(110, 198, 109)' }}
      >
        破浪前行
        {[0,0,0,0,0,0,0].map((k, i) => 
          <button key={`s2-${i}`} onClick={()=>alert(`button ${i}`)} className="pointer-events-auto">{i}</button>)}
      </section>
      <section 
        className="h-screen" 
        // style={{ backgroundColor: 'rgb(110, 198, 109)' }}
      >
        忠泰之道
      </section>
    </div>
  )
})
IndexPage.displayName = "IndexPage"

export default IndexPage