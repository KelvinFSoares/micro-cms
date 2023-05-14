import { useForm } from 'react-hook-form';
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';
import TextArea from '../atoms/TextArea';

const BlogPostForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-200 p-8">
      <div className="bg-orange-50 p-4 rounded-lg shadow-lg w-96 md:w-152">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="title" fontSize="sm" color="black">
              Post Title
            </Label>
            <TextInput
              id="title"
              name="title"
              placeholder="Type the blog post title"
              className="w-full border border-gray-300 p-2 rounded-lg"
              {...register('title', { required: true })}
              innerRef={undefined}
            />
          </div>
          <div>
            <Label
              htmlFor="thumbnail"
              fontSize="sm"
              color="black"
              className="block text-gray-800 font-bold mb-2"
            >
              Thumbnail Source URL
            </Label>
            <TextInput
              placeholder="Paste the thumbnail source url here"
              id="thumbnail"
              name="thumbnail"
              defaultValue="https://www.pixel4k.com/wp-content/uploads/2019/10/batman-above_1572368688.jpg"
              {...register('thumbnail', { required: true })}
              className="w-full border border-gray-300 p-2 rounded-lg"
              innerRef={undefined}
            />
          </div>
          <div>
            <Label
              htmlFor="content"
              fontSize="sm"
              color="black"
              className="block text-gray-800 font-bold mb-2"
            >
              Content
            </Label>
            <TextArea
              id="content"
              name="content"
              rows={5}
              placeholder="Type the content, you can use HTML"
              {...register('content', { required: true })}
              className="w-full border border-gray-300 p-2 rounded-lg h-40 lg:h-80"
            />
          </div>
          <div>
            <Button label="Publish" type="submit" onClick={undefined} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPostForm;
