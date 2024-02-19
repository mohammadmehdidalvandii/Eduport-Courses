import './TitleCenter.scss'

function TitleCenter({title ,desc}) {
  return (
    <div className="title">
        <h3 className="title_text">{title}</h3>
        <p className="title_desc">{desc}</p>
    </div>
  )
}

export default TitleCenter