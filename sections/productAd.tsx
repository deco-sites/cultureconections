export interface props {
  product: {
    title: string;
    imgSrc: string;
    description?: string;
    price: string;
  };
  adDescription?: string;
}

export default function ProductAd(props: props) {
  return (
    <div class="flex h-56 w-560 shadow-md p-5 overflow-hidden">
      <img
        src={props.product.imgSrc}
        alt="product"
        class="object-contain h-full p-5"
      />
      <div class="flex flex-col justify-start">
        <p class="font-bold text-lg text-gray-800">{props.product.title}</p>
        {props.product.description && (
          <p class="text-gray-800 text-sm flex-wrap pt-15">
            {props.product.description}
          </p>
        )}
      </div>
      <div class="flex flex-col justify-between ml-auto">
        <div class="h-16 flex w-20 items-center justify-center bg-primary hover:bg-secondary rounded-full text-white ml-auto transition duration-300 shadow-md">
          Save
        </div>
        <div class="flex flex-col items-center gap-5">
          <p class="text-gray-800 align-top justify-start content-center">
            {props.product.price}
          </p>
          <div class="flex flex-row justify-end items-end w-200px h-20px h-full space-x-3">
            <div class="h-16 flex w-20 justify-center rounded-lg text-white bg-primary hover:bg-secondary transition duration-300 shadow-md">
              mais detalhes
            </div>
            <div class="h-16 flex w-20 items-center justify-center rounded-lg text-white bg-primary hover:bg-secondary transition duration-300 shadow-md">
              comprar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

*/
