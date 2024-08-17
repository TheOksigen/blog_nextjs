export interface Post {
    _id: string;
    title: string;
    description: string;
    img_url: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface UploadImageResponse {
    img_url: string;
  }

export interface CreatePostDto {
    title: string;
    description: string;
    img_url: string;
}

export interface UpdatePostDto {
    title?: string;
    description?: string;
    img_url?: string;
}
export interface PaginatedResponse<T> {
    data: T[];
    totalPages: number;
    currentPage: number;
  }