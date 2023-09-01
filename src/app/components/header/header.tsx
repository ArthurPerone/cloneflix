import './header.scss'
import Image from 'next/image'
import { Profile } from './icons/profile'
import { Bell } from './icons/bell'

export function MainHeader(){
    return(
        <header>
            <div id="left">
                <Image
                    id='logo'
                src="/logo.png"
                alt="Vercel Logo"
                width={128}
                height={44}
                priority
                />

                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Séries</a>
                    <a href="#">Filmes</a>
                    <a href="#">Bombando</a>
                    <a href="#">Minha Lista</a>
                    <a href="#">Navegar por Idioma</a>
                </nav>
            </div>
            <div id="right">
                <div id='search'>
                    <input type="text" placeholder='titulos, gente e gênero'/>
                </div>
                
                <Bell/>
                <Profile/>
                <div id="profile-container">
                    <a href="#">Perfil 1</a>
                    <a href="#">Perfil 2</a>
                    <a href="#">Perfil 3</a>
                    <a href="#">Perfil 4</a>
                    <a href="#">Gerenciar Perfis</a>
                    <a href="#">Sair do Perfil</a>
                    <a href="#">Transferir Perfil</a>
                    <a href="#">Conta</a>
                    <a href="#">Central de Ajuda</a>
                    <a href="#">Sair do Cloneflix</a>
                </div>
                <div id="notif-container">
                    <a href="#">Notificação 1</a>
                </div>
            </div>



        </header>
    )
}