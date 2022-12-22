type Props = {
  title: string;
  subTitle: string;
  imageOn: boolean;
}

export const Hero = (props: Props) => {
  const { title, subTitle, imageOn } = props;

  return (
    <div>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      { imageOn && <figure>[画像]</figure> }
    </div>
  )
}