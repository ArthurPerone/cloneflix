import Image from "next/image";

import './category.scss'
import { ArrowIcon } from "./arrow-icon";

interface CategoryProps {
    titulo:string
    image:string

}
export function Category(props : CategoryProps){
    return(
        <section>
            <div id="titulo">
                <h1 id="titulo-categoria">{props.titulo}</h1>
                <a href="#" className="seeAll">Ver Tudo</a>
                <ArrowIcon />
            </div>
            <div id="conteudo">
                <Image
                        id='capa'
                        src="/no-image.png"
                        alt="Capa Série/Filme"
                        width={287}
                        height={162}
                        priority
                    />
                <Image
                        id='capa'
                        src="/no-image.png" 
                        alt="Capa Série/Filme"
                        width={287}
                        height={162}
                        priority
                    />
            </div>
        </section>
    )
}