import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Nối 2 chữ cuối bằng khoảng trắng không ngắt để dòng cuối không còn 1 chữ.
// Dùng cho đoạn văn dài, nơi `text-wrap: pretty` chưa được mọi trình duyệt áp dụng.
export function noOrphan(text: string) {
  return text.replace(/\s+(\S+)\s*$/, " $1")
}
