interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}

interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: {
        large: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface Author {
    id: number;
    documentId: string;
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface Category {
    id: number;
    documentId: string;
    Name: string;
    slug: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface ContentBlock {
    type: string;
    children: {
        text: string;
        type: string;
    }[];
}

export interface ArticleResponse {
    data: Article[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export default interface Article {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    content: string;
    isPublished: boolean;
    publishDate: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
    author: Author;
    category: Category;
}