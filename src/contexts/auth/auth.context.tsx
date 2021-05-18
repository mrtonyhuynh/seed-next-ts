import { createContext } from "react";

/**
 * Khởi tạo đối tượng Context với giá trị mặc định ban đầu là {}
 * Sau khi khởi tạo, Context sẽ có thuộc tính 
 * - Provider: cung cấp giá trị lấy tự đối tượng context
 * - Consumer: sử dụng giá trị của Provider và có thể hiển thị
 */
export const AuthContext = createContext({});