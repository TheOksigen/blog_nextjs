import { CreatePostDto, PaginatedResponse, Post, UpdatePostDto } from "@/types/mainTypes";

const baseUrl = process.env.BASE_URL

export const getPosts = async (page: number = 1, limit: number = 10): Promise<PaginatedResponse<Post>> => {
    const response = await fetch(`${baseUrl}/posts?page=${page}&limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}

export const getPostsById = async (id: string): Promise<Post> => {

    const response = await fetch(`${baseUrl}/posts/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch post by id');
    }
    const data = await response.json();
    console.log(data);

    return data;
}

export const updatePost = async (id: string, data: UpdatePostDto): Promise<Post> => {
    const response = await fetch(`${baseUrl}/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to update post');
    }
    return response.json();
}

export const createPost = async (data: CreatePostDto): Promise<Post> => {
    const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to create post');
    }
    return response.json();
}

export const uploadImage = async (file: File): Promise<string> => {

    const formData = new FormData();
    formData.append("image", file);
    
    const response = await fetch(`${baseUrl}/posts/upload`, {
        method: 'POST',
        body: formData,

    });
    if (!response.ok) {
        throw new Error('Failed to upload image');
    }
    let data = await response.json();

    return data.img_url;
}
