import "./OtherHero.css";

function OtherHero(props) {
    return(
        <>
            <div className="hero-mid">
                <img className="banner" alt="HerpImg" src={props.HeroImg}></img>

                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.btnText}</a>
                </div>
            </div>
        </>
    );
}

export default OtherHero;