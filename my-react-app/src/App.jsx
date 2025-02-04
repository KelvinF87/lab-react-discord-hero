import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import discordBackground from "./assets/discord-background.png";
import mennuIcon from "./assets/menu-icon.png";

function App() {
	return (
		<div className="incio">
			<nav className="myNav">
				<img src={discordLogo} alt="Logo de Discord" />
				<img src={mennuIcon} alt="Icone de menu" />
			</nav>

			<section>
				<article>
					<h1>IMAGINE A PLACE...</h1>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore et iure similique quo animi, blanditiis corporis repellendus delectus est! Quidem 
					facilis dolorem nobis porro. Aspernatur quis quam laudantium possimus assumenda.
				</article>
				<article>
					<div className="btns"><button>Download for mac</button> <button>Open Discord in you browser</button></div>
					<img src={discordBackground} alt="Fundo de Discord" />
				</article>
			</section>
		</div>
	);
}

export default App;
