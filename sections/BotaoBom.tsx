export interface props {
  url: string;
}

export default function BotaoBom(props: props) {
  return (
    <div class="flex justify-center">
      <a
        href={props.url}
        class="inline-block flex justify-center px-6 py-2 text-green bg-blue-400 text-white rounded-full houver:bg-blue-700"
      >
        Clique aqui e divirta-se
      </a>
    </div>
  );
}
