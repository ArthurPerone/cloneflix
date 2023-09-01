import './icons.scss'

export function Bell(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 64 64" id='notification'>
            <path fill="none" stroke="#ffffff" strokeWidth="2" d="M32,51h25v-4l-7-7V27c0-9.941-8.059-18-18-18
              s-18,11.059-18,18v13l-7,7v4H32z"/>
            <line fill="none" stroke="#ffffff" strokeWidth="2" x1="32" y1="33" x2="50" y2="33"/>
            <line fill="none" stroke="#ffffff" strokeWidth="2" x1="36" y1="28" x2="50" y2="28"/>
            <path fill="none" stroke="#ffffff" strokeWidth="2" d="M39,51c0,4.418-3.582,8-8,8s-8-3.582-8-8"/>
            <polyline fill="none" stroke="#ffffff" strokeWidth="2" points="28,10 30,3 34,3 36,10"/>
        </svg>

    )
}