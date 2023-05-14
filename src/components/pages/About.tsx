import SimpleText from '../atoms/SimpleText';
import MainTemplate from '../templates/Main';

export const About = () => {
  return (
    <MainTemplate>
      <h1 className="text-3xl">About US</h1>
      <div className="flex">
        <div className="w-1/2 ">
          <SimpleText size="sm" color="black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </SimpleText>
        </div>
        <div className="w-1/2 ">
          <SimpleText size="sm" color="black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </SimpleText>
        </div>
      </div>
    </MainTemplate>
  );
};
