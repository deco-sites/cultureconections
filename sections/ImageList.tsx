import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  img: ImageWidget[];
}

export default function Imagelist(props: Props) {
  return (
    <div class="flex flex-wrap w-80%">
      {props.img.map((image, index) => (
        <img class="w-80 h-52 justify-center m-2" key={index} src={image} />
      ))}
    </div>
  );
}
