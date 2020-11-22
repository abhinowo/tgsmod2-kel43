import React from 'react';

function greetings(praktikan){
 return praktikan.name + ' dari ' + praktikan.jurusan;
}

const praktikan ={
    name : 'Aryo Anindyo Abhinowo',
    jurusan : ' Teknik Komputer 2017'
};

//menggunakan JSX
const ReactJSX =() => {
    return(
        <div>
            <h1>Hello Praktikan RSBK</h1>
            <h2>Perkenalkan saya {greetings(praktikan)} !</h2>
            <p style={{color:'#00ff00'}}> ini adalah contoh penggunaan JSX</p>
        </div>
    )
}

export default ReactJSX;
// export {ReactNoJSX};