nos podemos passar props para elemento através do destruting como paramentro da função do componente

Também podemos adicionar evento no componente como props:

  export default function Button({title,onClick}) {
  return (
    <div>
        <button onClick={onClick} >{title}</button>
    </div>
  )
}

------------APP--------------

      <Button onClick={() => setMostrar(!mostrar)} title="Botão UI" />

      <strong>{mostrar && "Samuel"}</strong>CONDICIONAL TERNÁRIA

      <Button title="Desenvolvedor Web " />