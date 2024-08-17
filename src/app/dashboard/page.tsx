"use client"
import { createPost, uploadImage } from '@/api/api';
import { CreatePostDto } from '@/types/mainTypes';
import { useRef, useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';

export default function Page() {
  const [img_url, setImg_url] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const editorRef = useRef<any>(null); // Use `any` or a specific type if necessary

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      try {
        const response = await uploadImage(file);
        setImg_url(response);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Failed to upload image.");
        }
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const descriptionContent = editorRef.current?.getContent(); // Use type assertion if needed
    console.log(descriptionContent);

    if (!img_url || !title || !descriptionContent) {
      toast.error("Please fill all fields and select a file.");
      setTitle('');
      setImg_url(null);
      return;
    }

    try {
      const body: CreatePostDto = { img_url, title, description: descriptionContent };
      await createPost(body);
      toast.success('Post saved successfully!');
      setTitle('');
      setImg_url(null);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to save post.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Blog Post page</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Blog Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <TinyMCEEditor
                  apiKey='mm1zpjaxjesqyul4q6or2ssdisva6hp0xgmuyacm32481s87'
                  onInit={(evt, editor) => editorRef.current = editor}
                  initialValue=""
                  init={{
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media table wordcount',
                    toolbar: 'undo redo | bold italic underline align left center right',
                  }}
                />
              </div>
            </div>
            {!img_url ? (
              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          onChange={handleFileChange} // Use onChange instead of onInput
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4">
                <img src={img_url} alt="Uploaded" className="max-w-xs mx-auto rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-start gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
      </div>
    </form>
  );
}
