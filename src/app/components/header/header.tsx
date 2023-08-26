import { maxHeaderSize } from 'http'
import './header.scss'
import Image from 'next/image'

export function MainHeader(){
    return(
        <header>
            <div id="left">
                <Image
                    id='logo'
                src="/logo.png"
                alt="Vercel Logo"
                width={120}
                height={50}
                priority
                />

                <div id="navigation">
                    <a href="#">Inicio</a>
                    <a href="#">Séries</a>
                    <a href="#">Filmes</a>
                    <a href="#">Bombando</a>
                    <a href="#">Minha Lista</a>
                    <a href="#">Navegar por Idioma</a>
                </div>
            </div>
            <div id="right">
                <input type="text" placeholder="Titulos, gente e gêneros" />
                <i>Notification</i>
                <i>Profile</i>
            </div>



        </header>
    )
}