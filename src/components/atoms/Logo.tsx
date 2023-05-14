const Image = ({ ...rest }) => {
  return (
    <img
      src="https://dcassetcdn.com/design_img/3096767/681086/681086_17136101_3096767_2dbcc4ed_image.png"
      alt="Logo"
      className={`w-24 h-24 object-cover`}
      {...rest}
    />
  );
};

export default Image;
