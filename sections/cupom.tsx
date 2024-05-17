export interface props {
  codigoCupom: string;
  descricao: string;
}

export default function cupom(props: props) {
  return (
    <div>
      <h1 class="text-xl text-grey-600">
        Veja os benefícios do cupom: {props.descricao}
      </h1>
      <h1 class="text-lg text-grey-400">Esse é o código:{props.codigoCupom}</h1>
    </div>
  );
}
