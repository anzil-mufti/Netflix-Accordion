import {useState} from 'react'
import './App.css'
//custom component that contains questions of accordion
const NFAccordion=(props)=>{
  const icons = ["https://img.icons8.com/ios/64/ffffff/plus-math--v1.png", "https://img.icons8.com/ios-filled/64/ffffff/multiply.png"];
  const [show,setShow]=useState(false)
  return(
    <div className='accordion'>
      <button onClick={props.onClick}><h3>{props.title}</h3>
      <img src={props.show?icons[1]:icons[0]} alt="" /></button>
      {/* if show's value is true then make this visible otherwise not ... jsx therefore writing within {()}*/}
     {props.show && (<p>{props.content}</p>)} 
    </div>
  )
}
function App() {
  const[activeFAQIdx, setActiveFAQIdx]=useState(-1)// initially no idx is opened
  const titles = ['What is Netflix?', 'How much does Netflix cost?', 'Where can I watch?', 'How do I cancel?', 'What can I watch on Netflix?', 'Is Netflix good for kids?']
  const contents = ['Netflix is a streaming service that offers a wide …and new TV shows and movies are added every week!', 'Watch Netflix on your smartphone, tablet, Smart TV…9 to ₹ 649 a month. No extra costs, no contracts.', 'Watch anywhere, anytime. Sign in with your Netflix…ernet connection. Take Netflix with you anywhere.', 'Netflix is flexible. There are no annoying contrac…lation fees – start or stop your account anytime.', 'Netflix has an extensive library of feature films,…ore. Watch as much as you want, anytime you want.', 'The Netflix Kids experience is included in your me…block specific titles you don’t want kids to see.']

  const faqs=[]
  for(let i=0;i<titles.length;i++){
    faqs.push({
      title:titles[i], //mapping title with content
      content:contents[i]
    })
  }
  return (
    <>
      <h2>Project 2: Netflix FAQ Component </h2>
      {faqs.map((faq,index)=>{ //map(value,index)
        return <NFAccordion title={faq.title} content={faq.content} show={index===activeFAQIdx} onClick={()=>setActiveFAQIdx(index===activeFAQIdx?-1:index)}/> //wahi component jo khulna chahie
      })}
      <h4>Made with Love by <code>ANZIL</code></h4>
    </>
  )
}

export default App
